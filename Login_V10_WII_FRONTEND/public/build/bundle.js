var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(){return l("")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){t.value=null==n?"":n}let $;function y(t){$=t}function g(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const v=[],w=[];let b=[];const _=[],x=Promise.resolve();let E=!1;function q(t){b.push(t)}const A=new Set;let C=0;function k(){if(0!==C)return;const t=$;do{try{for(;C<v.length;){const t=v[C];C++,y(t),N(t.$$)}}catch(t){throw v.length=0,C=0,t}for(y(null),v.length=0,C=0;w.length;)w.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];A.has(n)||(A.add(n),n())}b.length=0}while(v.length);for(;_.length;)_.pop()();E=!1,A.clear(),y(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}const O=new Set;function P(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];b.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),b=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,x.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(r,u,i,a,l,f,d,p=[-1]){const m=$;y(r);const h=r.$$={fragment:null,ctx:[],props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(m?m.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:u.target||m.$$.root};d&&d(h.root);let g=!1;if(h.ctx=i?i(r,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&S(r,t)),n})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();u.intro&&((v=r.$$.fragment)&&v.i&&(O.delete(v),v.i(w))),function(t,e,r,u){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,r),u||q((()=>{const e=t.$$.on_mount.map(n).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(q)}(r,u.target,u.anchor,u.customElement),k()}var v,w;y(m)}class j{$destroy(){P(this,1),this.$destroy=t}$on(n,e){if(!c(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(t){let n;return{c(){n=l(t[1])},m(t,e){i(t,n,e)},p(t,e){2&e&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(n,t[1])},d(t){t&&s(n)}}}function T(n){let e;return{c(){e=l("Login")},m(t,n){i(t,e,n)},p:t,d(t){t&&s(e)}}}function D(t){let n,e,o,c,r,l,$,y,g=0!=t[6]&&z();return{c(){n=a("div"),e=a("input"),o=f(),c=a("button"),c.textContent="Login",r=f(),g&&g.c(),l=d(),m(e,"type","password"),m(e,"id","password"),e.required=!0,m(e,"placeholder","Password"),m(c,"class","buttonC svelte-o8qywm"),m(c,"type","submit")},m(s,a){i(s,n,a),u(n,e),t[10](e),h(e,t[4]),i(s,o,a),i(s,c,a),i(s,r,a),g&&g.m(s,a),i(s,l,a),$||(y=p(e,"input",t[11]),$=!0)},p(t,n){16&n&&e.value!==t[4]&&h(e,t[4]),0!=t[6]?g||(g=z(),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null)},d(e){e&&s(n),t[10](null),e&&s(o),e&&s(c),e&&s(r),g&&g.d(e),e&&s(l),$=!1,y()}}}function J(t){let n,e,o,c,r,l,$,y,g=0!=t[3]&&B();return{c(){n=a("div"),e=a("input"),o=f(),c=a("button"),c.textContent="Continue",r=f(),g&&g.c(),l=d(),m(e,"type","text"),m(e,"id","account"),e.required=!0,m(e,"placeholder","Account"),m(c,"class","buttonC svelte-o8qywm"),m(c,"type","submit")},m(s,a){i(s,n,a),u(n,e),t[8](e),h(e,t[1]),i(s,o,a),i(s,c,a),i(s,r,a),g&&g.m(s,a),i(s,l,a),$||(y=p(e,"input",t[9]),$=!0)},p(t,n){2&n&&e.value!==t[1]&&h(e,t[1]),0!=t[3]?g||(g=B(),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null)},d(e){e&&s(n),t[8](null),e&&s(o),e&&s(c),e&&s(r),g&&g.d(e),e&&s(l),$=!1,y()}}}function z(t){let n;return{c(){n=a("p"),n.textContent="Please enter a valid password",m(n,"class","PFail svelte-o8qywm")},m(t,e){i(t,n,e)},d(t){t&&s(n)}}}function B(t){let n;return{c(){n=a("p"),n.textContent="Please enter a valid account",m(n,"class","AFail svelte-o8qywm")},m(t,e){i(t,n,e)},d(t){t&&s(n)}}}function I(n){let e,o,c,r,l,d;function h(t,n){return"pwd"!=t[0]?T:F}let $=h(n),y=$(n);function g(t,n){return"Acct"==t[0]?J:"pwd"==t[0]?D:void 0}let v=g(n),w=v&&v(n);return{c(){e=a("main"),o=a("p"),y.c(),c=f(),r=a("form"),w&&w.c(),m(o,"class","login svelte-o8qywm"),m(r,"class","login2 svelte-o8qywm"),m(e,"class","svelte-o8qywm")},m(t,s){var a;i(t,e,s),u(e,o),y.m(o,null),u(e,c),u(e,r),w&&w.m(r,null),l||(d=p(r,"submit",(a=n[7],function(t){return t.preventDefault(),a.call(this,t)})),l=!0)},p(t,[n]){$===($=h(t))&&y?y.p(t,n):(y.d(1),y=$(t),y&&(y.c(),y.m(o,null))),v===(v=g(t))&&w?w.p(t,n):(w&&w.d(1),w=v&&v(t),w&&(w.c(),w.m(r,null)))},i:t,o:t,d(t){t&&s(e),y.d(),w&&w.d(),l=!1,d()}}}function M(t,n,e){let{active_step:o="Acct"}=n,c="",r=null,u=0,i="",s=null,a=0,l="test";async function f(){200==(await fetch(window.location.href+"Plogin",{method:"POST",body:JSON.stringify({sessionid:l,password:i})})).status?async function(){window.location="/EDashboard.html?"+encodeURIComponent(l)}():(e(4,i=""),e(6,a++,a))}g((()=>{r.focus()}));return t.$$set=t=>{"active_step"in t&&e(0,o=t.active_step)},[o,c,r,u,i,s,a,t=>{"Acct"==o?async function(t){const n=await fetch(window.location.href+"Acheck",{method:"POST",body:JSON.stringify({account:c})});200==n.status?(l=await n.text(),e(0,o="pwd")):(e(1,c=""),e(3,u++,u))}():f()},function(t){w[t?"unshift":"push"]((()=>{r=t,e(2,r)}))},function(){c=this.value,e(1,c)},function(t){w[t?"unshift":"push"]((()=>{s=t,e(5,s)}))},function(){i=this.value,e(4,i)}]}return new class extends j{constructor(t){super(),L(this,t,M,I,r,{active_step:0})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map