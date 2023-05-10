
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }
    function compute_rest_props(props, keys) {
        const rest = {};
        keys = new Set(keys);
        for (const k in props)
            if (!keys.has(k) && k[0] !== '$')
                rest[k] = props[k];
        return rest;
    }
    function action_destroyer(action_result) {
        return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    /**
     * List of attributes that should always be set through the attr method,
     * because updating them through the property setter doesn't work reliably.
     * In the example of `width`/`height`, the problem is that the setter only
     * accepts numeric values, but the attribute can also be set to a string like `50%`.
     * If this list becomes too big, rethink this approach.
     */
    const always_set_through_set_attribute = ['width', 'height'];
    function set_attributes(node, attributes) {
        // @ts-ignore
        const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
        for (const key in attributes) {
            if (attributes[key] == null) {
                node.removeAttribute(key);
            }
            else if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key === '__value') {
                node.value = node[key] = attributes[key];
            }
            else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    /**
     * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
     * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
     * it can be called from an external module).
     *
     * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
     *
     * https://svelte.dev/docs#run-time-svelte-onmount
     */
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    // TODO figure out if we still want to support
    // shorthand events, or if we want to implement
    // a real bubbling mechanism
    function bubble(component, event) {
        const callbacks = component.$$.callbacks[event.type];
        if (callbacks) {
            // @ts-ignore
            callbacks.slice().forEach(fn => fn.call(this, event));
        }
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.0' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        if (has_stop_immediate_propagation)
            modifiers.push('stopImmediatePropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    /*!
    	Copyright (c) 2018 Jed Watson.
    	Licensed under the MIT License (MIT), see
    	http://jedwatson.github.io/classnames
    */

    var classnames = createCommonjsModule(function (module) {
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames() {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg)) {
    				if (arg.length) {
    					var inner = classNames.apply(null, arg);
    					if (inner) {
    						classes.push(inner);
    					}
    				}
    			} else if (argType === 'object') {
    				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
    					classes.push(arg.toString());
    					continue;
    				}

    				for (var key in arg) {
    					if (hasOwn.call(arg, key) && arg[key]) {
    						classes.push(key);
    					}
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if (module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else {
    		window.classNames = classNames;
    	}
    }());
    });

    let n = Date.now();

    function generateId() {
    	return (++n).toString(36);
    }

    /* src/FloatingLabelInput.svelte generated by Svelte v3.59.0 */
    const file$1 = "src/FloatingLabelInput.svelte";

    function create_fragment$1(ctx) {
    	let div;
    	let input;
    	let input_class_value;
    	let setType_action;
    	let t0;
    	let label_1;
    	let t1;
    	let label_1_class_value;
    	let div_class_value;
    	let mounted;
    	let dispose;

    	let input_levels = [
    		{ id: /*id*/ ctx[1] },
    		/*$$restProps*/ ctx[14],
    		{ placeholder: " " },
    		{
    			class: input_class_value = classnames(/*inputClasses*/ ctx[10][/*style*/ ctx[2]], /*inputColorClasses*/ ctx[12][/*color*/ ctx[5]], /*inputSizes*/ ctx[8][/*style*/ ctx[2]][/*size*/ ctx[4]], /*$$props*/ ctx[15].class)
    		}
    	];

    	let input_data = {};

    	for (let i = 0; i < input_levels.length; i += 1) {
    		input_data = assign(input_data, input_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			input = element("input");
    			t0 = space();
    			label_1 = element("label");
    			t1 = text(/*label*/ ctx[6]);
    			set_attributes(input, input_data);
    			add_location(input, file$1, 75, 1, 3032);
    			attr_dev(label_1, "for", /*id*/ ctx[1]);
    			attr_dev(label_1, "class", label_1_class_value = classnames(/*labelClasses*/ ctx[11][/*style*/ ctx[2]], /*labelColorClasses*/ ctx[13][/*color*/ ctx[5]], /*labelSizes*/ ctx[9][/*style*/ ctx[2]][/*size*/ ctx[4]], /*$$props*/ ctx[15].labelClass));
    			add_location(label_1, file$1, 100, 1, 3387);
    			attr_dev(div, "class", div_class_value = /*divClasses*/ ctx[7][/*style*/ ctx[2]]);
    			add_location(div, file$1, 74, 0, 2999);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, input);
    			if (input.autofocus) input.focus();
    			set_input_value(input, /*value*/ ctx[0]);
    			append_dev(div, t0);
    			append_dev(div, label_1);
    			append_dev(label_1, t1);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[27]),
    					listen_dev(input, "blur", /*blur_handler*/ ctx[16], false, false, false, false),
    					listen_dev(input, "change", /*change_handler*/ ctx[17], false, false, false, false),
    					listen_dev(input, "click", /*click_handler*/ ctx[18], false, false, false, false),
    					listen_dev(input, "focus", /*focus_handler*/ ctx[19], false, false, false, false),
    					listen_dev(input, "keydown", /*keydown_handler*/ ctx[20], false, false, false, false),
    					listen_dev(input, "keypress", /*keypress_handler*/ ctx[21], false, false, false, false),
    					listen_dev(input, "keyup", /*keyup_handler*/ ctx[22], false, false, false, false),
    					listen_dev(input, "mouseenter", /*mouseenter_handler*/ ctx[23], false, false, false, false),
    					listen_dev(input, "mouseleave", /*mouseleave_handler*/ ctx[24], false, false, false, false),
    					listen_dev(input, "mouseover", /*mouseover_handler*/ ctx[25], false, false, false, false),
    					listen_dev(input, "paste", /*paste_handler*/ ctx[26], false, false, false, false),
    					action_destroyer(setType_action = setType.call(null, input, /*type*/ ctx[3]))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			set_attributes(input, input_data = get_spread_update(input_levels, [
    				dirty & /*id*/ 2 && { id: /*id*/ ctx[1] },
    				dirty & /*$$restProps*/ 16384 && /*$$restProps*/ ctx[14],
    				{ placeholder: " " },
    				dirty & /*style, color, size, $$props*/ 32820 && input_class_value !== (input_class_value = classnames(/*inputClasses*/ ctx[10][/*style*/ ctx[2]], /*inputColorClasses*/ ctx[12][/*color*/ ctx[5]], /*inputSizes*/ ctx[8][/*style*/ ctx[2]][/*size*/ ctx[4]], /*$$props*/ ctx[15].class)) && { class: input_class_value }
    			]));

    			if (dirty & /*value*/ 1 && input.value !== /*value*/ ctx[0]) {
    				set_input_value(input, /*value*/ ctx[0]);
    			}

    			if (setType_action && is_function(setType_action.update) && dirty & /*type*/ 8) setType_action.update.call(null, /*type*/ ctx[3]);
    			if (dirty & /*label*/ 64) set_data_dev(t1, /*label*/ ctx[6]);

    			if (dirty & /*id*/ 2) {
    				attr_dev(label_1, "for", /*id*/ ctx[1]);
    			}

    			if (dirty & /*style, color, size, $$props*/ 32820 && label_1_class_value !== (label_1_class_value = classnames(/*labelClasses*/ ctx[11][/*style*/ ctx[2]], /*labelColorClasses*/ ctx[13][/*color*/ ctx[5]], /*labelSizes*/ ctx[9][/*style*/ ctx[2]][/*size*/ ctx[4]], /*$$props*/ ctx[15].labelClass))) {
    				attr_dev(label_1, "class", label_1_class_value);
    			}

    			if (dirty & /*style*/ 4 && div_class_value !== (div_class_value = /*divClasses*/ ctx[7][/*style*/ ctx[2]])) {
    				attr_dev(div, "class", div_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function setType(node, _type) {
    	node.type = _type;

    	return {
    		update(_type) {
    			node.type = _type;
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	const omit_props_names = ["id","style","type","size","color","value","label"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('FloatingLabelInput', slots, []);
    	let { id = generateId() } = $$props;
    	let { style = 'standard' } = $$props;
    	let { type = 'text' } = $$props;
    	let { size = 'default' } = $$props;
    	let { color = 'base' } = $$props;
    	let { value = '' } = $$props;
    	let { label = '' } = $$props;

    	const divClasses = {
    		filled: 'relative',
    		outlined: 'relative',
    		standard: 'relative z-0'
    	};

    	const inputSizes = {
    		filled: {
    			small: 'px-2.5 pb-1.5 pt-4',
    			default: 'px-2.5 pb-2.5 pt-5'
    		},
    		outlined: {
    			small: 'px-2.5 pb-1.5 pt-3',
    			default: 'px-2.5 pb-2.5 pt-4'
    		},
    		standard: {
    			small: 'py-2 px-0',
    			default: 'py-2.5 px-0'
    		}
    	};

    	const labelSizes = {
    		filled: { small: 'top-3', default: 'top-4' },
    		outlined: { small: 'top-1', default: 'top-2' },
    		standard: { small: 'top-3', default: 'top-3' }
    	};

    	const inputClasses = {
    		filled: 'block rounded-t-lg w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer',
    		outlined: 'block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer',
    		standard: 'block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer'
    	};

    	const labelClasses = {
    		filled: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
    		outlined: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
    		standard: 'absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
    	};

    	const inputColorClasses = {
    		base: 'border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
    		green: 'border-green-600 dark:border-green-500 dark:focus:border-green-500 focus:border-green-600',
    		red: 'border-red-600 dark:border-red-500 dark:focus:border-red-500  focus:border-red-600'
    	};

    	const labelColorClasses = {
    		base: 'text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
    		green: 'text-green-600 dark:text-green-500',
    		red: 'text-red-600 dark:text-red-500'
    	};

    	function blur_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function change_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function click_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function focus_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function keydown_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function keypress_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function keyup_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseenter_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseleave_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseover_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function paste_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function input_input_handler() {
    		value = this.value;
    		$$invalidate(0, value);
    	}

    	$$self.$$set = $$new_props => {
    		$$invalidate(15, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		$$invalidate(14, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('id' in $$new_props) $$invalidate(1, id = $$new_props.id);
    		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
    		if ('type' in $$new_props) $$invalidate(3, type = $$new_props.type);
    		if ('size' in $$new_props) $$invalidate(4, size = $$new_props.size);
    		if ('color' in $$new_props) $$invalidate(5, color = $$new_props.color);
    		if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
    		if ('label' in $$new_props) $$invalidate(6, label = $$new_props.label);
    	};

    	$$self.$capture_state = () => ({
    		classNames: classnames,
    		generateId,
    		id,
    		style,
    		type,
    		size,
    		color,
    		value,
    		label,
    		divClasses,
    		inputSizes,
    		labelSizes,
    		inputClasses,
    		labelClasses,
    		inputColorClasses,
    		labelColorClasses,
    		setType
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(15, $$props = assign(assign({}, $$props), $$new_props));
    		if ('id' in $$props) $$invalidate(1, id = $$new_props.id);
    		if ('style' in $$props) $$invalidate(2, style = $$new_props.style);
    		if ('type' in $$props) $$invalidate(3, type = $$new_props.type);
    		if ('size' in $$props) $$invalidate(4, size = $$new_props.size);
    		if ('color' in $$props) $$invalidate(5, color = $$new_props.color);
    		if ('value' in $$props) $$invalidate(0, value = $$new_props.value);
    		if ('label' in $$props) $$invalidate(6, label = $$new_props.label);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$props = exclude_internal_props($$props);

    	return [
    		value,
    		id,
    		style,
    		type,
    		size,
    		color,
    		label,
    		divClasses,
    		inputSizes,
    		labelSizes,
    		inputClasses,
    		labelClasses,
    		inputColorClasses,
    		labelColorClasses,
    		$$restProps,
    		$$props,
    		blur_handler,
    		change_handler,
    		click_handler,
    		focus_handler,
    		keydown_handler,
    		keypress_handler,
    		keyup_handler,
    		mouseenter_handler,
    		mouseleave_handler,
    		mouseover_handler,
    		paste_handler,
    		input_input_handler
    	];
    }

    class FloatingLabelInput extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			id: 1,
    			style: 2,
    			type: 3,
    			size: 4,
    			color: 5,
    			value: 0,
    			label: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FloatingLabelInput",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get id() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get value() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<FloatingLabelInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<FloatingLabelInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.59.0 */
    const file = "src/App.svelte";

    // (121:0) {:else}
    function create_else_block_1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*account*/ ctx[1]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*account*/ 2) set_data_dev(t, /*account*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(121:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (119:0) {#if active_step == 'Acct'}
    function create_if_block_1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Login");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(119:0) {#if active_step == 'Acct'}",
    		ctx
    	});

    	return block;
    }

    // (135:1) {:else}
    function create_else_block(ctx) {
    	let div;
    	let input;
    	let t0;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			input = element("input");
    			t0 = space();
    			button = element("button");
    			button.textContent = "Login";
    			attr_dev(input, "type", "password");
    			attr_dev(input, "id", "password");
    			input.required = true;
    			attr_dev(input, "placeholder", "Password");
    			add_location(input, file, 136, 2, 2191);
    			add_location(div, file, 135, 1, 2182);
    			attr_dev(button, "class", "buttonC svelte-kwfcds");
    			attr_dev(button, "type", "submit");
    			add_location(button, file, 138, 1, 2319);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, input);
    			/*input_binding_1*/ ctx[8](input);
    			set_input_value(input, /*password*/ ctx[3]);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(input, "input", /*input_input_handler_1*/ ctx[9]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*password*/ 8 && input.value !== /*password*/ ctx[3]) {
    				set_input_value(input, /*password*/ ctx[3]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			/*input_binding_1*/ ctx[8](null);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(135:1) {:else}",
    		ctx
    	});

    	return block;
    }

    // (127:0) {#if active_step == 'Acct'}
    function create_if_block(ctx) {
    	let div;
    	let input;
    	let t0;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			input = element("input");
    			t0 = space();
    			button = element("button");
    			button.textContent = "Continue";
    			attr_dev(input, "type", "text");
    			attr_dev(input, "id", "account");
    			input.required = true;
    			attr_dev(input, "placeholder", "Account");
    			add_location(input, file, 130, 2, 1995);
    			add_location(div, file, 129, 1, 1987);
    			attr_dev(button, "class", "buttonC svelte-kwfcds");
    			attr_dev(button, "type", "submit");
    			add_location(button, file, 133, 1, 2116);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, input);
    			/*input_binding*/ ctx[6](input);
    			set_input_value(input, /*account*/ ctx[1]);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(input, "input", /*input_input_handler*/ ctx[7]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*account*/ 2 && input.value !== /*account*/ ctx[1]) {
    				set_input_value(input, /*account*/ ctx[1]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			/*input_binding*/ ctx[6](null);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(127:0) {#if active_step == 'Acct'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let main;
    	let p;
    	let t;
    	let form;
    	let mounted;
    	let dispose;

    	function select_block_type(ctx, dirty) {
    		if (/*active_step*/ ctx[0] == 'Acct') return create_if_block_1;
    		return create_else_block_1;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block0 = current_block_type(ctx);

    	function select_block_type_1(ctx, dirty) {
    		if (/*active_step*/ ctx[0] == 'Acct') return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type_1 = select_block_type_1(ctx);
    	let if_block1 = current_block_type_1(ctx);

    	const block = {
    		c: function create() {
    			main = element("main");
    			p = element("p");
    			if_block0.c();
    			t = space();
    			form = element("form");
    			if_block1.c();
    			attr_dev(p, "class", "login svelte-kwfcds");
    			add_location(p, file, 117, 0, 1808);
    			attr_dev(form, "class", "login2 svelte-kwfcds");
    			add_location(form, file, 125, 0, 1892);
    			attr_dev(main, "class", "svelte-kwfcds");
    			add_location(main, file, 116, 0, 1801);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, p);
    			if_block0.m(p, null);
    			append_dev(main, t);
    			append_dev(main, form);
    			if_block1.m(form, null);

    			if (!mounted) {
    				dispose = listen_dev(form, "submit", prevent_default(/*handleOnSubmit*/ ctx[5]), false, true, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
    				if_block0.p(ctx, dirty);
    			} else {
    				if_block0.d(1);
    				if_block0 = current_block_type(ctx);

    				if (if_block0) {
    					if_block0.c();
    					if_block0.m(p, null);
    				}
    			}

    			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block1) {
    				if_block1.p(ctx, dirty);
    			} else {
    				if_block1.d(1);
    				if_block1 = current_block_type_1(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(form, null);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			if_block0.d();
    			if_block1.d();
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function getTest() {
    	alert("login!!");
    } //window.location = '/Aindex.html';

    function checkAccount(id) {
    	alert('check account');
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let { active_step = 'Acct' } = $$props;
    	let style;
    	let account = "";
    	let accountInput = null;
    	let password = "";
    	let passwordInput = null;

    	onMount(() => {
    		accountInput.focus();
    	});

    	async function doPost() {
    		await fetch(window.location.href + "login", {
    			method: 'POST',
    			body: JSON.stringify({ account, password })
    		});

    		//alert(res.status)
    		//if (res.status == 200)
    		getTest();
    	}

    	const handleOnSubmit = evt => {
    		// Log user into account.
    		//alert(account);
    		//alert(password);
    		//alert(window.location.href);
    		if (active_step == 'Acct') {
    			//alert('check account');
    			$$invalidate(0, active_step = 'pwd');
    		} //doPost();
    	};

    	const handleOnChange = evt => {
    		// Cannot dynamically update the `type` attribute via a two-way binding to the `type` attribtue.
    		// Error: 'type' attribute cannot be dynamic if input uses two-way binding.
    		passwordInput.setAttribute('type', evt.target.checked ? 'text' : 'password');
    	};
    	const writable_props = ['active_step'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function input_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			accountInput = $$value;
    			$$invalidate(2, accountInput);
    		});
    	}

    	function input_input_handler() {
    		account = this.value;
    		$$invalidate(1, account);
    	}

    	function input_binding_1($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			passwordInput = $$value;
    			$$invalidate(4, passwordInput);
    		});
    	}

    	function input_input_handler_1() {
    		password = this.value;
    		$$invalidate(3, password);
    	}

    	$$self.$$set = $$props => {
    		if ('active_step' in $$props) $$invalidate(0, active_step = $$props.active_step);
    	};

    	$$self.$capture_state = () => ({
    		FloatingLabelInput,
    		onMount,
    		active_step,
    		style,
    		account,
    		accountInput,
    		password,
    		passwordInput,
    		getTest,
    		doPost,
    		handleOnSubmit,
    		handleOnChange,
    		checkAccount
    	});

    	$$self.$inject_state = $$props => {
    		if ('active_step' in $$props) $$invalidate(0, active_step = $$props.active_step);
    		if ('style' in $$props) style = $$props.style;
    		if ('account' in $$props) $$invalidate(1, account = $$props.account);
    		if ('accountInput' in $$props) $$invalidate(2, accountInput = $$props.accountInput);
    		if ('password' in $$props) $$invalidate(3, password = $$props.password);
    		if ('passwordInput' in $$props) $$invalidate(4, passwordInput = $$props.passwordInput);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		active_step,
    		account,
    		accountInput,
    		password,
    		passwordInput,
    		handleOnSubmit,
    		input_binding,
    		input_input_handler,
    		input_binding_1,
    		input_input_handler_1
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { active_step: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get active_step() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set active_step(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const app = new App({
    	target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
