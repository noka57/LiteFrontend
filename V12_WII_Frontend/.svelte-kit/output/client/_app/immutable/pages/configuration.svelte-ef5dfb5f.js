import{S as te,i as re,s as le,a3 as oe,a4 as se,l as b,a as A,r as R,x as q,m as v,n as _,c as D,u as M,h as f,y as J,p as c,b as T,I as p,z as G,J as X,a5 as ne,f as I,t as L,C as K,g as Y,d as Z,V as F,W as O,F as W,q as P}from"../chunks/index-ce71ce5b.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as ae}from"../chunks/Button-1ae68577.js";import{M as ie}from"../chunks/Modal-6a6c0dec.js";import{S as ee}from"../chunks/Spinner-3e2fa2d7.js";import{s as fe}from"../chunks/sessionG-24ab7752.js";import"../chunks/Frame-0aa98834.js";import"../chunks/index-7090f807.js";function ce(w){let l;return{c(){l=R("Upload")},l(t){l=M(t,"Upload")},m(t,e){T(t,l,e)},d(t){t&&f(l)}}}function Q(w){let l,t,e,s,a,o,u,r;return{c(){l=b("button"),t=b("span"),e=R("Close modal"),s=A(),a=F("svg"),o=F("path"),this.h()},l(i){l=v(i,"BUTTON",{type:!0,class:!0,"aria-label":!0});var n=_(l);t=v(n,"SPAN",{class:!0});var d=_(t);e=M(d,"Close modal"),d.forEach(f),s=D(n),a=O(n,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var h=_(a);o=O(h,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),_(o).forEach(f),h.forEach(f),n.forEach(f),this.h()},h(){c(t,"class","sr-only"),c(o,"fill-rule","evenodd"),c(o,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),c(o,"clip-rule","evenodd"),c(a,"class","w-5 h-5"),c(a,"fill","currentColor"),c(a,"viewBox","0 0 20 20"),c(a,"xmlns","http://www.w3.org/2000/svg"),c(l,"type","button"),c(l,"class","ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"),c(l,"aria-label","Close")},m(i,n){T(i,l,n),p(l,t),p(t,e),p(l,s),p(l,a),p(a,o),u||(r=X(l,"click",w[3]),u=!0)},p:W,d(i){i&&f(l),u=!1,r()}}}function ue(w){let l,t,e,s,a,o,u,r,i,n,d,h,U,y,k,C,B;return h=new ee({props:{size:16}}),{c(){l=b("tr"),t=b("td"),e=F("svg"),s=F("path"),a=A(),o=b("td"),u=b("p"),r=R("It's valid configuration."),i=A(),n=b("tr"),d=b("td"),q(h.$$.fragment),U=A(),y=b("td"),k=b("p"),C=R("Applying configuration and restart ...."),this.h()},l(m){l=v(m,"TR",{});var $=_(l);t=v($,"TD",{});var S=_(t);e=O(S,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var j=_(e);s=O(j,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),_(s).forEach(f),j.forEach(f),S.forEach(f),a=D($),o=v($,"TD",{});var g=_(o);u=v(g,"P",{class:!0,style:!0});var E=_(u);r=M(E,"It's valid configuration."),E.forEach(f),g.forEach(f),$.forEach(f),i=D(m),n=v(m,"TR",{});var x=_(n);d=v(x,"TD",{class:!0});var z=_(d);J(h.$$.fragment,z),z.forEach(f),U=D(x),y=v(x,"TD",{class:!0});var N=_(y);k=v(N,"P",{class:!0,style:!0});var V=_(k);C=M(V,"Applying configuration and restart ...."),V.forEach(f),N.forEach(f),x.forEach(f),this.h()},h(){c(s,"d","M4.5 12.75l6 6 9-13.5"),c(s,"stroke-linecap","round"),c(s,"stroke-linejoin","round"),c(e,"class","w-16 h-16"),c(e,"aria-hidden","true"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"stroke-width","1.5"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(u,"class","pl-5"),P(u,"color","red"),P(u,"font-size","18px"),c(d,"class","pt-5"),c(k,"class","pl-5"),P(k,"color","red"),P(k,"font-size","18px"),c(y,"class","pt-5")},m(m,$){T(m,l,$),p(l,t),p(t,e),p(e,s),p(l,a),p(l,o),p(o,u),p(u,r),T(m,i,$),T(m,n,$),p(n,d),G(h,d,null),p(n,U),p(n,y),p(y,k),p(k,C),B=!0},p:W,i(m){B||(I(h.$$.fragment,m),B=!0)},o(m){L(h.$$.fragment,m),B=!1},d(m){m&&f(l),m&&f(i),m&&f(n),K(h)}}}function de(w){let l,t,e,s;const a=[_e,pe],o=[];function u(r,i){return r[2]==0?0:r[2]==1?1:-1}return~(t=u(w))&&(e=o[t]=a[t](w)),{c(){l=b("tr"),e&&e.c()},l(r){l=v(r,"TR",{});var i=_(l);e&&e.l(i),i.forEach(f)},m(r,i){T(r,l,i),~t&&o[t].m(l,null),s=!0},p(r,i){let n=t;t=u(r),t!==n&&(e&&(Y(),L(o[n],1,1,()=>{o[n]=null}),Z()),~t?(e=o[t],e||(e=o[t]=a[t](r),e.c()),I(e,1),e.m(l,null)):e=null)},i(r){s||(I(e),s=!0)},o(r){L(e),s=!1},d(r){r&&f(l),~t&&o[t].d()}}}function pe(w){let l,t,e,s,a,o,u;return{c(){l=b("td"),t=F("svg"),e=F("path"),s=A(),a=b("td"),o=b("p"),u=R("It's invalid configuration, please upload valid configuration."),this.h()},l(r){l=v(r,"TD",{});var i=_(l);t=O(i,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var n=_(t);e=O(n,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),_(e).forEach(f),n.forEach(f),i.forEach(f),s=D(r),a=v(r,"TD",{});var d=_(a);o=v(d,"P",{class:!0,style:!0});var h=_(o);u=M(h,"It's invalid configuration, please upload valid configuration."),h.forEach(f),d.forEach(f),this.h()},h(){c(e,"d","M6 18L18 6M6 6l12 12"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(t,"class","w-16 h-16"),c(t,"aria-hidden","true"),c(t,"fill","none"),c(t,"stroke","currentColor"),c(t,"stroke-width","1.5"),c(t,"viewBox","0 0 24 24"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(o,"class","pl-5"),P(o,"color","red"),P(o,"font-size","18px")},m(r,i){T(r,l,i),p(l,t),p(t,e),T(r,s,i),T(r,a,i),p(a,o),p(o,u)},i:W,o:W,d(r){r&&f(l),r&&f(s),r&&f(a)}}}function _e(w){let l,t,e,s,a,o,u;return t=new ee({props:{size:16}}),{c(){l=b("td"),q(t.$$.fragment),e=A(),s=b("td"),a=b("p"),o=R("Verifying configuration now ...."),this.h()},l(r){l=v(r,"TD",{});var i=_(l);J(t.$$.fragment,i),i.forEach(f),e=D(r),s=v(r,"TD",{});var n=_(s);a=v(n,"P",{class:!0,style:!0});var d=_(a);o=M(d,"Verifying configuration now ...."),d.forEach(f),n.forEach(f),this.h()},h(){c(a,"class","pl-5"),P(a,"color","red"),P(a,"font-size","18px")},m(r,i){T(r,l,i),G(t,l,null),T(r,e,i),T(r,s,i),p(s,a),p(a,o),u=!0},i(r){u||(I(t.$$.fragment,r),u=!0)},o(r){L(t.$$.fragment,r),u=!1},d(r){r&&f(l),K(t),r&&f(e),r&&f(s)}}}function he(w){let l,t,e,s,a,o=w[2]==1&&Q(w);const u=[de,ue],r=[];function i(n,d){return n[1]==0?0:n[1]==1?1:-1}return~(e=i(w))&&(s=r[e]=u[e](w)),{c(){o&&o.c(),l=A(),t=b("table"),s&&s.c()},l(n){o&&o.l(n),l=D(n),t=v(n,"TABLE",{});var d=_(t);s&&s.l(d),d.forEach(f)},m(n,d){o&&o.m(n,d),T(n,l,d),T(n,t,d),~e&&r[e].m(t,null),a=!0},p(n,d){n[2]==1?o?o.p(n,d):(o=Q(n),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null);let h=e;e=i(n),e===h?~e&&r[e].p(n,d):(s&&(Y(),L(r[h],1,1,()=>{r[h]=null}),Z()),~e?(s=r[e],s?s.p(n,d):(s=r[e]=u[e](n),s.c()),I(s,1),s.m(t,null)):s=null)},i(n){a||(I(s),a=!0)},o(n){L(s),a=!1},d(n){o&&o.d(n),n&&f(l),n&&f(t),~e&&r[e].d()}}}function me(w){let l,t,e,s,a,o,u,r,i,n,d,h,U,y,k,C,B,m,$=ge==0;h=new ae({props:{$$slots:{default:[ce]},$$scope:{ctx:w}}}),h.$on("click",w[5]);function S(g){w[7](g)}let j={size:"md",class:"w-full",permanent:!0,$$slots:{default:[he]},$$scope:{ctx:w}};return w[0]!==void 0&&(j.open=w[0]),y=new ie({props:j}),oe.push(()=>se(y,"open",S,w[0])),{c(){l=b("table"),t=A(),e=b("tr"),s=b("td"),a=b("p"),o=R("Restore Configuration"),u=A(),r=b("td"),i=b("input"),n=A(),d=b("td"),q(h.$$.fragment),U=A(),q(y.$$.fragment),this.h()},l(g){l=v(g,"TABLE",{});var E=_(l);t=D(E),e=v(E,"TR",{});var x=_(e);s=v(x,"TD",{class:!0});var z=_(s);a=v(z,"P",{class:!0});var N=_(a);o=M(N,"Restore Configuration"),N.forEach(f),z.forEach(f),u=D(x),r=v(x,"TD",{class:!0});var V=_(r);i=v(V,"INPUT",{type:!0,id:!0,class:!0}),V.forEach(f),n=D(x),d=v(x,"TD",{class:!0});var H=_(d);J(h.$$.fragment,H),H.forEach(f),x.forEach(f),E.forEach(f),U=D(g),J(y.$$.fragment,g),this.h()},h(){c(a,"class","pl-10 pt-5 text-lg font-light text-right"),c(s,"class","w-85"),c(i,"type","file"),c(i,"id","configUpload"),c(i,"class","block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"),c(r,"class","pl-5 pt-5"),c(d,"class","pl-5 pt-5")},m(g,E){T(g,l,E),p(l,t),p(l,e),p(e,s),p(s,a),p(a,o),p(e,u),p(e,r),p(r,i),p(e,n),p(e,d),G(h,d,null),T(g,U,E),G(y,g,E),C=!0,B||(m=X(i,"change",w[4]),B=!0)},p(g,[E]){const x={};E&4096&&(x.$$scope={dirty:E,ctx:g}),h.$set(x);const z={};E&4102&&(z.$$scope={dirty:E,ctx:g}),!k&&E&1&&(k=!0,z.open=g[0],ne(()=>k=!1)),y.$set(z)},i(g){C||(I($),I(h.$$.fragment,g),I(y.$$.fragment,g),C=!0)},o(g){L($),L(h.$$.fragment,g),L(y.$$.fragment,g),C=!1},d(g){g&&f(l),K(h),g&&f(U),K(y,g),B=!1,m()}}}let ge=1;function be(w,l,t){let e=null,s,a,o,u=!1,r=0,i=0;fe.subscribe(k=>{s=k});function n(){t(0,u=!1),t(1,r=0),t(2,i=0)}async function d(k){const C=k.target.files[0];if(C){if(e=C,s){const $=s.match(/.{1,2}/g).map(S=>parseInt(S,16));o=new Uint8Array($)}const B=new FileReader;B.onload=m=>{const $=new Uint8Array(m.target.result);a=new Uint8Array($.length+o.length),a.set(o,0),a.set($,o.length)},B.readAsArrayBuffer(C)}}async function h(){e&&(t(0,u=!0),(await fetch(window.location.origin+"/uploadConfig",{method:"POST",body:a,headers:{"Content-Type":"application/octet-stream"}})).status==200?(t(1,r=1),console.log("200 OK")):t(2,i=1))}async function U(){try{const k=await fetch(window.location.origin+"/downloadConfig",{method:"POST",body:JSON.stringify({sessionid:s})});if(k.status==200){const C=await k.blob(),B="download.config",m=document.createElement("a");m.href=URL.createObjectURL(C),m.download=B,m.style.display="none",document.body.appendChild(m),m.click(),document.body.removeChild(m)}}catch(k){console.error("Error exporting file:",k)}}function y(k){u=k,t(0,u)}return[u,r,i,n,d,h,U,y]}class xe extends te{constructor(l){super(),re(this,l,be,me,le,{})}}export{xe as default};
