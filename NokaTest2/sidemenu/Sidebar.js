
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { n as noop, s as safe_not_equal, X as subscribe, Y as run_all, x as is_function, S as SvelteComponentDev, i as init, d as dispatch_dev, Z as validate_store, _ as component_subscribe, v as validate_slots, $ as createEventDispatcher, N as afterUpdate, e as element, t as text, b as attr_dev, f as toggle_class, c as add_location, g as insert_dev, h as append_dev, l as listen_dev, j as set_data_dev, k as detach_dev, G as binding_callbacks, m as validate_each_argument, o as validate_each_keys, O as onDestroy, a as space, I as create_component, J as mount_component, B as transition_in, C as transition_out, L as destroy_component, W as group_outros, V as check_outros, u as update_keyed_each, p as prop_dev, F as add_render_callback, a0 as create_in_transition, a1 as outro_and_destroy_block, R as assign, T as get_spread_update, U as get_spread_object, w as create_slot, a2 as beforeUpdate, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes } from './index.js';

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                    subscriber[1]();
                    subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.add(subscriber);
        if (subscribers.size === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = noop;
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = is_function(result) ? result : noop;
            }
        };
        const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            run_all(unsubscribers);
            cleanup();
        };
    });
}

/*
 * The store allows to avoid unnecessary prop-drilling.
 */

const activeUrl = writable(null);

const onLinkClick = writable(null);

const transitionEnabled = writable(true);

const transitionDurationInMs = derived(
	transitionEnabled,
	($transitionEnabled) => ($transitionEnabled ? 250 : 0)
);

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}

function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}

/* src/components/Sidebar/NavigationLink.svelte generated by Svelte v3.47.0 */
const file$2 = "src/components/Sidebar/NavigationLink.svelte";

function create_fragment$2(ctx) {
	let a;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			a = element("a");
			t = text(/*name*/ ctx[0]);
			attr_dev(a, "href", /*route*/ ctx[1]);
			attr_dev(a, "active", /*active*/ ctx[5]);
			attr_dev(a, "aria-current", /*active*/ ctx[5]);
			attr_dev(a, "disabled", /*disabled*/ ctx[2]);
			attr_dev(a, "tabindex", "0");
			attr_dev(a, "class", "svelte-1igjqe4");
			toggle_class(a, "activeGroup", /*activeGroup*/ ctx[3]);
			add_location(a, file$2, 51, 0, 1434);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
			/*a_binding*/ ctx[8](a);

			if (!mounted) {
				dispose = listen_dev(a, "click", /*onClick*/ ctx[6], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1) set_data_dev(t, /*name*/ ctx[0]);

			if (dirty & /*route*/ 2) {
				attr_dev(a, "href", /*route*/ ctx[1]);
			}

			if (dirty & /*active*/ 32) {
				attr_dev(a, "active", /*active*/ ctx[5]);
			}

			if (dirty & /*active*/ 32) {
				attr_dev(a, "aria-current", /*active*/ ctx[5]);
			}

			if (dirty & /*disabled*/ 4) {
				attr_dev(a, "disabled", /*disabled*/ ctx[2]);
			}

			if (dirty & /*activeGroup*/ 8) {
				toggle_class(a, "activeGroup", /*activeGroup*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			/*a_binding*/ ctx[8](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let active;
	let $onLinkClick;
	let $activeUrl;
	validate_store(onLinkClick, 'onLinkClick');
	component_subscribe($$self, onLinkClick, $$value => $$invalidate(9, $onLinkClick = $$value));
	validate_store(activeUrl, 'activeUrl');
	component_subscribe($$self, activeUrl, $$value => $$invalidate(7, $activeUrl = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('NavigationLink', slots, []);
	let { name } = $$props;
	let { route } = $$props;
	let { disabled = false } = $$props;
	let { activeGroup = false } = $$props; // Whether the link is part of an active `NavigationLinkGroup`.
	let link;

	const onClick = event => {
		if (disabled) {
			event.preventDefault();
		} else if ($onLinkClick) {
			event.preventDefault();
			$onLinkClick(event);
		}
	};

	const scrollIntoView = () => link && link.scrollIntoView({ block: 'end', behavior: 'smooth' });
	const dispatch = createEventDispatcher();

	afterUpdate(() => {
		if (active) {
			/*
 * `NavigationLink` informs the parent "bottom up", that it became
 * active. That way, `Sidebar` can have an O(n) performance:
 * When n `NavigationLink`s render, no additional iteration
 * over the nested route-structure is required to determine,
 * which `NavigationLink` is active.
 */
			dispatch('active', { activeSubRoute: route });

			/*
 * Scroll component into view when it becomes active.
 * The delay is to wait for the rendering to be finished.
 * Without it, there is cases where the scrolling
 * is triggered before the DOM is ready.
 */
			setTimeout(scrollIntoView, 250);
		}
	});

	const writable_props = ['name', 'route', 'disabled', 'activeGroup'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<NavigationLink> was created with unknown prop '${key}'`);
	});

	function a_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			link = $$value;
			$$invalidate(4, link);
		});
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('route' in $$props) $$invalidate(1, route = $$props.route);
		if ('disabled' in $$props) $$invalidate(2, disabled = $$props.disabled);
		if ('activeGroup' in $$props) $$invalidate(3, activeGroup = $$props.activeGroup);
	};

	$$self.$capture_state = () => ({
		afterUpdate,
		createEventDispatcher,
		activeUrl,
		onLinkClick,
		name,
		route,
		disabled,
		activeGroup,
		link,
		onClick,
		scrollIntoView,
		dispatch,
		active,
		$onLinkClick,
		$activeUrl
	});

	$$self.$inject_state = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('route' in $$props) $$invalidate(1, route = $$props.route);
		if ('disabled' in $$props) $$invalidate(2, disabled = $$props.disabled);
		if ('activeGroup' in $$props) $$invalidate(3, activeGroup = $$props.activeGroup);
		if ('link' in $$props) $$invalidate(4, link = $$props.link);
		if ('active' in $$props) $$invalidate(5, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$activeUrl, route*/ 130) {
			/*
 * Whether the link is active is computed comparing the route
 * with `activeRoute` from `SidebarStore`.
 */
			$$invalidate(5, active = $activeUrl === route);
		}
	};

	return [
		name,
		route,
		disabled,
		activeGroup,
		link,
		active,
		onClick,
		$activeUrl,
		a_binding
	];
}

class NavigationLink extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			name: 0,
			route: 1,
			disabled: 2,
			activeGroup: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NavigationLink",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !('name' in props)) {
			console.warn("<NavigationLink> was created without expected prop 'name'");
		}

		if (/*route*/ ctx[1] === undefined && !('route' in props)) {
			console.warn("<NavigationLink> was created without expected prop 'route'");
		}
	}

	get name() {
		throw new Error("<NavigationLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<NavigationLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get route() {
		throw new Error("<NavigationLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set route(value) {
		throw new Error("<NavigationLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<NavigationLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<NavigationLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activeGroup() {
		throw new Error("<NavigationLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set activeGroup(value) {
		throw new Error("<NavigationLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Sidebar/NavigationLinkGroup.svelte generated by Svelte v3.47.0 */
const file$1 = "src/components/Sidebar/NavigationLinkGroup.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (60:0) {#if name && route}
function create_if_block_1(ctx) {
	let t;
	let navigationlink;
	let current;
	let if_block = !/*disabled*/ ctx[2] && create_if_block_2(ctx);

	navigationlink = new NavigationLink({
			props: {
				name: /*name*/ ctx[1],
				route: /*route*/ ctx[3],
				disabled: /*disabled*/ ctx[2],
				activeGroup: Boolean(/*activeSubRoute*/ ctx[4])
			},
			$$inline: true
		});

	navigationlink.$on("active", /*handleActiveChange*/ ctx[8]);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
			create_component(navigationlink.$$.fragment);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t, anchor);
			mount_component(navigationlink, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (!/*disabled*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const navigationlink_changes = {};
			if (dirty & /*name*/ 2) navigationlink_changes.name = /*name*/ ctx[1];
			if (dirty & /*route*/ 8) navigationlink_changes.route = /*route*/ ctx[3];
			if (dirty & /*disabled*/ 4) navigationlink_changes.disabled = /*disabled*/ ctx[2];
			if (dirty & /*activeSubRoute*/ 16) navigationlink_changes.activeGroup = Boolean(/*activeSubRoute*/ ctx[4]);
			navigationlink.$set(navigationlink_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(navigationlink.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navigationlink.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t);
			destroy_component(navigationlink, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(60:0) {#if name && route}",
		ctx
	});

	return block;
}

// (65:1) {#if !disabled}
function create_if_block_2(ctx) {
	let button;
	let t;
	let button_aria_controls_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text(">");
			attr_dev(button, "class", "group-toggle svelte-1kpf5xf");
			attr_dev(button, "aria-expanded", /*groupOpen*/ ctx[5]);
			attr_dev(button, "aria-controls", button_aria_controls_value = `${/*route*/ ctx[3]}-group`);
			attr_dev(button, "aria-label", "Toggle the visibility of child navigation links");
			attr_dev(button, "title", "Toggle the visibility of child navigation links");
			toggle_class(button, "open", /*groupOpen*/ ctx[5]);
			add_location(button, file$1, 65, 2, 2105);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*toggleGroup*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*groupOpen*/ 32) {
				attr_dev(button, "aria-expanded", /*groupOpen*/ ctx[5]);
			}

			if (dirty & /*route*/ 8 && button_aria_controls_value !== (button_aria_controls_value = `${/*route*/ ctx[3]}-group`)) {
				attr_dev(button, "aria-controls", button_aria_controls_value);
			}

			if (dirty & /*groupOpen*/ 32) {
				toggle_class(button, "open", /*groupOpen*/ ctx[5]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(65:1) {#if !disabled}",
		ctx
	});

	return block;
}

// (120:3) {:else}
function create_else_block(ctx) {
	let navigationlink;
	let current;

	const navigationlink_spread_levels = [
		/*route*/ ctx[3],
		{
			activeGroup: /*activeSubRoute*/ ctx[4] === /*route*/ ctx[3].route
		}
	];

	let navigationlink_props = {};

	for (let i = 0; i < navigationlink_spread_levels.length; i += 1) {
		navigationlink_props = assign(navigationlink_props, navigationlink_spread_levels[i]);
	}

	navigationlink = new NavigationLink({
			props: navigationlink_props,
			$$inline: true
		});

	navigationlink.$on("active", /*handleActiveChange*/ ctx[8]);

	const block = {
		c: function create() {
			create_component(navigationlink.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(navigationlink, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const navigationlink_changes = (dirty & /*routes, activeSubRoute*/ 17)
			? get_spread_update(navigationlink_spread_levels, [
					dirty & /*routes*/ 1 && get_spread_object(/*route*/ ctx[3]),
					{
						activeGroup: /*activeSubRoute*/ ctx[4] === /*route*/ ctx[3].route
					}
				])
			: {};

			navigationlink.$set(navigationlink_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(navigationlink.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navigationlink.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(navigationlink, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(120:3) {:else}",
		ctx
	});

	return block;
}

// (105:3) {#if route.childRoutes}
function create_if_block$1(ctx) {
	let navigationlinkgroup;
	let current;

	navigationlinkgroup = new NavigationLinkGroup({
			props: {
				routes: /*route*/ ctx[3].childRoutes,
				name: /*route*/ ctx[3].name,
				route: /*route*/ ctx[3].route,
				disabled: /*route*/ ctx[3].disabled,
				collapseTree: /*route*/ ctx[3].collapseTree
			},
			$$inline: true
		});

	navigationlinkgroup.$on("active", /*handleActiveChange*/ ctx[8]);

	const block = {
		c: function create() {
			create_component(navigationlinkgroup.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(navigationlinkgroup, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const navigationlinkgroup_changes = {};
			if (dirty & /*routes*/ 1) navigationlinkgroup_changes.routes = /*route*/ ctx[3].childRoutes;
			if (dirty & /*routes*/ 1) navigationlinkgroup_changes.name = /*route*/ ctx[3].name;
			if (dirty & /*routes*/ 1) navigationlinkgroup_changes.route = /*route*/ ctx[3].route;
			if (dirty & /*routes*/ 1) navigationlinkgroup_changes.disabled = /*route*/ ctx[3].disabled;
			if (dirty & /*routes*/ 1) navigationlinkgroup_changes.collapseTree = /*route*/ ctx[3].collapseTree;
			navigationlinkgroup.$set(navigationlinkgroup_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(navigationlinkgroup.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navigationlinkgroup.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(navigationlinkgroup, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(105:3) {#if route.childRoutes}",
		ctx
	});

	return block;
}

// (103:1) {#each routes as route (route.route)}
function create_each_block(key_1, ctx) {
	let li;
	let current_block_type_index;
	let if_block;
	let t;
	let current;
	const if_block_creators = [create_if_block$1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*route*/ ctx[3].childRoutes) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			li = element("li");
			if_block.c();
			t = space();
			attr_dev(li, "class", "svelte-1kpf5xf");
			toggle_class(li, "group", /*route*/ ctx[3].childRoutes);
			add_location(li, file$1, 103, 2, 3048);
			this.first = li;
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			if_blocks[current_block_type_index].m(li, null);
			append_dev(li, t);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(li, t);
			}

			if (dirty & /*routes*/ 1) {
				toggle_class(li, "group", /*route*/ ctx[3].childRoutes);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if_blocks[current_block_type_index].d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(103:1) {#each routes as route (route.route)}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t;
	let ul;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let ul_id_value;
	let ul_hidden_value;
	let ul_intro;
	let current;
	let if_block = /*name*/ ctx[1] && /*route*/ ctx[3] && create_if_block_1(ctx);
	let each_value = /*routes*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*route*/ ctx[3].route;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(ul, "id", ul_id_value = `${/*route*/ ctx[3] ? /*route*/ ctx[3] : 'root'}-group`);
			ul.hidden = ul_hidden_value = !/*groupOpen*/ ctx[5] || /*disabled*/ ctx[2];
			attr_dev(ul, "role", "list");
			attr_dev(ul, "class", "svelte-1kpf5xf");
			add_location(ul, file$1, 96, 0, 2865);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (/*name*/ ctx[1] && /*route*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*name, route*/ 10) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (dirty & /*routes, handleActiveChange, activeSubRoute*/ 273) {
				each_value = /*routes*/ ctx[0];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, ul, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}

			if (!current || dirty & /*route*/ 8 && ul_id_value !== (ul_id_value = `${/*route*/ ctx[3] ? /*route*/ ctx[3] : 'root'}-group`)) {
				attr_dev(ul, "id", ul_id_value);
			}

			if (!current || dirty & /*groupOpen, disabled*/ 36 && ul_hidden_value !== (ul_hidden_value = !/*groupOpen*/ ctx[5] || /*disabled*/ ctx[2])) {
				prop_dev(ul, "hidden", ul_hidden_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			if (!ul_intro) {
				add_render_callback(() => {
					ul_intro = create_in_transition(ul, scale, {
						duration: /*$transitionDurationInMs*/ ctx[6]
					});

					ul_intro.start();
				});
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
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

function instance$1($$self, $$props, $$invalidate) {
	let isGroupOpenByDefault;
	let groupOpen;
	let $transitionDurationInMs;
	validate_store(transitionDurationInMs, 'transitionDurationInMs');
	component_subscribe($$self, transitionDurationInMs, $$value => $$invalidate(6, $transitionDurationInMs = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('NavigationLinkGroup', slots, []);
	let { routes = [] } = $$props;
	let { name = null } = $$props;
	let { route = null } = $$props;
	let { disabled = false } = $$props;
	let { collapseTree = false } = $$props;
	let activeSubRoute = null;
	const dispatch = createEventDispatcher();
	const toggleGroup = () => $$invalidate(5, groupOpen = !groupOpen);

	/*
 * A child route of this `NavigationLinkGroup` is active,
 * which it signalled by dispatching the `active` event.
 * As the current `NavigationLinkGroup` is part of the active navigation
 * tree, it's supposed to be opened.
 * As the navigation tree can have deep nestings, this
 * `NavigationLinkGroup` in turn signals to its parent,
 * that it is part of the active tree.
 */
	const handleActiveChange = event => {
		// Open current group, as it's part of the active tree.
		$$invalidate(5, groupOpen = true);

		/*
 * Allow child `NavigationLink`s to know that they are part
 * of the same group as the active `NavigationLink`.
 */
		$$invalidate(4, activeSubRoute = event.detail.activeSubRoute);

		/*
 * Escalate the `active` event to the parent to inform it
 * that it is part of the active tree.
 */
		dispatch(event.type, { activeSubRoute: route });
	};

	/*
 * Whenever the active URL changes in the store, the active subroutes
 * will change too, which is why the existing active subroute is reset.
 * The new active subroute is determined in `handleActiveChange`.
 */
	const unsubscribeFromActiveSubRoute = activeUrl.subscribe(() => {
		$$invalidate(4, activeSubRoute = null);
	});

	// The active unsubscribe is required due the usage of a callback function.
	onDestroy(unsubscribeFromActiveSubRoute);

	const writable_props = ['routes', 'name', 'route', 'disabled', 'collapseTree'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<NavigationLinkGroup> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('routes' in $$props) $$invalidate(0, routes = $$props.routes);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
		if ('route' in $$props) $$invalidate(3, route = $$props.route);
		if ('disabled' in $$props) $$invalidate(2, disabled = $$props.disabled);
		if ('collapseTree' in $$props) $$invalidate(9, collapseTree = $$props.collapseTree);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		onDestroy,
		scale,
		activeUrl,
		transitionDurationInMs,
		NavigationLink,
		routes,
		name,
		route,
		disabled,
		collapseTree,
		activeSubRoute,
		dispatch,
		toggleGroup,
		handleActiveChange,
		unsubscribeFromActiveSubRoute,
		groupOpen,
		isGroupOpenByDefault,
		$transitionDurationInMs
	});

	$$self.$inject_state = $$props => {
		if ('routes' in $$props) $$invalidate(0, routes = $$props.routes);
		if ('name' in $$props) $$invalidate(1, name = $$props.name);
		if ('route' in $$props) $$invalidate(3, route = $$props.route);
		if ('disabled' in $$props) $$invalidate(2, disabled = $$props.disabled);
		if ('collapseTree' in $$props) $$invalidate(9, collapseTree = $$props.collapseTree);
		if ('activeSubRoute' in $$props) $$invalidate(4, activeSubRoute = $$props.activeSubRoute);
		if ('groupOpen' in $$props) $$invalidate(5, groupOpen = $$props.groupOpen);
		if ('isGroupOpenByDefault' in $$props) $$invalidate(10, isGroupOpenByDefault = $$props.isGroupOpenByDefault);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*collapseTree*/ 512) {
			$$invalidate(10, isGroupOpenByDefault = collapseTree !== true);
		}

		if ($$self.$$.dirty & /*isGroupOpenByDefault*/ 1024) {
			$$invalidate(5, groupOpen = isGroupOpenByDefault);
		}
	};

	return [
		routes,
		name,
		disabled,
		route,
		activeSubRoute,
		groupOpen,
		$transitionDurationInMs,
		toggleGroup,
		handleActiveChange,
		collapseTree,
		isGroupOpenByDefault
	];
}

class NavigationLinkGroup extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			routes: 0,
			name: 1,
			route: 3,
			disabled: 2,
			collapseTree: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NavigationLinkGroup",
			options,
			id: create_fragment$1.name
		});
	}

	get routes() {
		throw new Error("<NavigationLinkGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set routes(value) {
		throw new Error("<NavigationLinkGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get name() {
		throw new Error("<NavigationLinkGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<NavigationLinkGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get route() {
		throw new Error("<NavigationLinkGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set route(value) {
		throw new Error("<NavigationLinkGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<NavigationLinkGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<NavigationLinkGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get collapseTree() {
		throw new Error("<NavigationLinkGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set collapseTree(value) {
		throw new Error("<NavigationLinkGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Sidebar/Sidebar.svelte generated by Svelte v3.47.0 */
const file = "src/components/Sidebar/Sidebar.svelte";
const get_footer_slot_changes = dirty => ({});
const get_footer_slot_context = ctx => ({});
const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});

// (71:1) {#if open}
function create_if_block(ctx) {
	let navigationlinkgroup;
	let t;
	let current;

	navigationlinkgroup = new NavigationLinkGroup({
			props: {
				routes: /*routes*/ ctx[1],
				collapseTree: /*collapseTree*/ ctx[2]
			},
			$$inline: true
		});

	const footer_slot_template = /*#slots*/ ctx[11].footer;
	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[10], get_footer_slot_context);

	const block = {
		c: function create() {
			create_component(navigationlinkgroup.$$.fragment);
			t = space();
			if (footer_slot) footer_slot.c();
		},
		m: function mount(target, anchor) {
			mount_component(navigationlinkgroup, target, anchor);
			insert_dev(target, t, anchor);

			if (footer_slot) {
				footer_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			const navigationlinkgroup_changes = {};
			if (dirty & /*routes*/ 2) navigationlinkgroup_changes.routes = /*routes*/ ctx[1];
			if (dirty & /*collapseTree*/ 4) navigationlinkgroup_changes.collapseTree = /*collapseTree*/ ctx[2];
			navigationlinkgroup.$set(navigationlinkgroup_changes);

			if (footer_slot) {
				if (footer_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						footer_slot,
						footer_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(footer_slot_template, /*$$scope*/ ctx[10], dirty, get_footer_slot_changes),
						get_footer_slot_context
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(navigationlinkgroup.$$.fragment, local);
			transition_in(footer_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navigationlinkgroup.$$.fragment, local);
			transition_out(footer_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(navigationlinkgroup, detaching);
			if (detaching) detach_dev(t);
			if (footer_slot) footer_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(71:1) {#if open}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let nav;
	let t0;
	let button;
	let t1;
	let t2;
	let current;
	let mounted;
	let dispose;
	const header_slot_template = /*#slots*/ ctx[11].header;
	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[10], get_header_slot_context);
	let if_block = /*open*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			nav = element("nav");
			if (header_slot) header_slot.c();
			t0 = space();
			button = element("button");
			t1 = text(">");
			t2 = space();
			if (if_block) if_block.c();
			attr_dev(button, "class", "sidebar-toggle svelte-1n2d9qi");
			attr_dev(button, "aria-expanded", /*open*/ ctx[0]);
			attr_dev(button, "aria-controls", "svelte-sidebar");
			attr_dev(button, "title", "Toggle the navigation sidebar");
			attr_dev(button, "aria-label", "Toggle the navigation sidebar");
			toggle_class(button, "open", /*open*/ ctx[0]);
			add_location(button, file, 59, 1, 1986);
			attr_dev(nav, "id", "svelte-sidebar");
			attr_dev(nav, "style", /*styleString*/ ctx[3]);
			attr_dev(nav, "class", "svelte-1n2d9qi");
			toggle_class(nav, "open", /*open*/ ctx[0]);
			add_location(nav, file, 57, 0, 1904);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav, anchor);

			if (header_slot) {
				header_slot.m(nav, null);
			}

			append_dev(nav, t0);
			append_dev(nav, button);
			append_dev(button, t1);
			append_dev(nav, t2);
			if (if_block) if_block.m(nav, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*toggleOpen*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (header_slot) {
				if (header_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						header_slot,
						header_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(header_slot_template, /*$$scope*/ ctx[10], dirty, get_header_slot_changes),
						get_header_slot_context
					);
				}
			}

			if (!current || dirty & /*open*/ 1) {
				attr_dev(button, "aria-expanded", /*open*/ ctx[0]);
			}

			if (dirty & /*open*/ 1) {
				toggle_class(button, "open", /*open*/ ctx[0]);
			}

			if (/*open*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*open*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(nav, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty & /*styleString*/ 8) {
				attr_dev(nav, "style", /*styleString*/ ctx[3]);
			}

			if (dirty & /*open*/ 1) {
				toggle_class(nav, "open", /*open*/ ctx[0]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header_slot, local);
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(header_slot, local);
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav);
			if (header_slot) header_slot.d(detaching);
			if (if_block) if_block.d();
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

function instance($$self, $$props, $$invalidate) {
	let combinedTheme;
	let styleString;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Sidebar', slots, ['header','footer']);

	const defaultTheme = {
		backgroundColor_linkActive: '#F4442E',
		backgroundColor_nav: '#555B6E',
		color_link: '#F7F7F2',
		color_linkHover: '#FCA311',
		fontSize: '1.2rem',
		maxWidth_nav: '20vw',
		minWidth_nav: '320px',
		opacity_linkDisabled: '0.5',
		opacity_linkInactive: '0.75'
	};

	let { activeUrl: activeUrl$1 = null } = $$props;
	let { routes = [] } = $$props;
	let { onLinkClick: onLinkClick$1 = null } = $$props;
	let { theme = {} } = $$props;
	let { open = true } = $$props;
	let { transitionEnabled: transitionEnabled$1 = true } = $$props;
	let { collapseTree = false } = $$props;

	// Initialise the shared store with the values passed to `Sidebar` as props.
	beforeUpdate(() => {
		activeUrl.set(activeUrl$1);
		onLinkClick.set(onLinkClick$1);
		transitionEnabled.set(transitionEnabled$1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
	});

	const toggleOpen = () => $$invalidate(0, open = !open);

	const writable_props = [
		'activeUrl',
		'routes',
		'onLinkClick',
		'theme',
		'open',
		'transitionEnabled',
		'collapseTree'
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Sidebar> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('activeUrl' in $$props) $$invalidate(5, activeUrl$1 = $$props.activeUrl);
		if ('routes' in $$props) $$invalidate(1, routes = $$props.routes);
		if ('onLinkClick' in $$props) $$invalidate(6, onLinkClick$1 = $$props.onLinkClick);
		if ('theme' in $$props) $$invalidate(7, theme = $$props.theme);
		if ('open' in $$props) $$invalidate(0, open = $$props.open);
		if ('transitionEnabled' in $$props) $$invalidate(8, transitionEnabled$1 = $$props.transitionEnabled);
		if ('collapseTree' in $$props) $$invalidate(2, collapseTree = $$props.collapseTree);
		if ('$$scope' in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		beforeUpdate,
		storeActiveUrl: activeUrl,
		storeOnLinkClick: onLinkClick,
		storeTransitionEnabled: transitionEnabled,
		NavigationLinkGroup,
		defaultTheme,
		activeUrl: activeUrl$1,
		routes,
		onLinkClick: onLinkClick$1,
		theme,
		open,
		transitionEnabled: transitionEnabled$1,
		collapseTree,
		toggleOpen,
		combinedTheme,
		styleString
	});

	$$self.$inject_state = $$props => {
		if ('activeUrl' in $$props) $$invalidate(5, activeUrl$1 = $$props.activeUrl);
		if ('routes' in $$props) $$invalidate(1, routes = $$props.routes);
		if ('onLinkClick' in $$props) $$invalidate(6, onLinkClick$1 = $$props.onLinkClick);
		if ('theme' in $$props) $$invalidate(7, theme = $$props.theme);
		if ('open' in $$props) $$invalidate(0, open = $$props.open);
		if ('transitionEnabled' in $$props) $$invalidate(8, transitionEnabled$1 = $$props.transitionEnabled);
		if ('collapseTree' in $$props) $$invalidate(2, collapseTree = $$props.collapseTree);
		if ('combinedTheme' in $$props) $$invalidate(9, combinedTheme = $$props.combinedTheme);
		if ('styleString' in $$props) $$invalidate(3, styleString = $$props.styleString);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*theme*/ 128) {
			$$invalidate(9, combinedTheme = { ...defaultTheme, ...theme });
		}

		if ($$self.$$.dirty & /*combinedTheme*/ 512) {
			// Not using custom property style directive, because compilation results in superfluous wrapper div, see:
			// https://svelte.dev/docs#template-syntax-component-directives---style-props
			$$invalidate(3, styleString = [
				`--backgroundColor_linkActive: ${combinedTheme.backgroundColor_linkActive}`,
				`--backgroundColor_nav: ${combinedTheme.backgroundColor_nav}`,
				`--color_link: ${combinedTheme.color_link}`,
				`--color_linkHover: ${combinedTheme.color_linkHover}`,
				`--fontSize: ${combinedTheme.fontSize}`,
				`--maxWidth_nav: ${combinedTheme.maxWidth_nav}`,
				`--minWidth_nav: ${combinedTheme.minWidth_nav}`,
				`--opacity_linkDisabled: ${combinedTheme.opacity_linkDisabled}`,
				`--opacity_linkInactive: ${combinedTheme.opacity_linkInactive}`
			].join('; '));
		}
	};

	return [
		open,
		routes,
		collapseTree,
		styleString,
		toggleOpen,
		activeUrl$1,
		onLinkClick$1,
		theme,
		transitionEnabled$1,
		combinedTheme,
		$$scope,
		slots
	];
}

class Sidebar extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			activeUrl: 5,
			routes: 1,
			onLinkClick: 6,
			theme: 7,
			open: 0,
			transitionEnabled: 8,
			collapseTree: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Sidebar",
			options,
			id: create_fragment.name
		});
	}

	get activeUrl() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set activeUrl(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get routes() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set routes(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onLinkClick() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onLinkClick(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get theme() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set theme(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get transitionEnabled() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set transitionEnabled(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get collapseTree() {
		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set collapseTree(value) {
		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Sidebar as default };
//# sourceMappingURL=Sidebar.js.map
