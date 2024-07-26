import{S as de,i as pe,s as ge,x as M,y as z,z as V,f as O,t as N,C as j,o as _e,a as B,c as P,b as S,h as a,a3 as ne,a4 as ae,l as b,r as F,m as v,n as m,u as q,p as c,I as p,J as ie,a5 as fe,g as Y,d as Z,V as G,W as H,F as Q,q as K}from"../chunks/index-267512dc.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as ce}from"../chunks/Button-52fc61f8.js";import{T as me}from"../chunks/Toggle-298f25e2.js";import{M as he}from"../chunks/Modal-fdf4aeed.js";import{S as ue}from"../chunks/Spinner-a852dc4d.js";import{T as te}from"../chunks/TabItem-b3a6c2a8.js";import{T as $e}from"../chunks/Tabs-b71cabd5.js";import{s as be}from"../chunks/sessionG-e8b8f90d.js";import{b2 as re,C as oe,aK as X}from"../chunks/configG-56c493fe.js";import"../chunks/Radio-726785d0.js";import"../chunks/Frame-c8cc164f.js";import"../chunks/CloseButton-d653a919.js";import"../chunks/index-b2b51752.js";function ve(h){let e;return{c(){e=F("Upload")},l(r){e=q(r,"Upload")},m(r,t){S(r,e,t)},d(r){r&&a(e)}}}function le(h){let e,r,t,s,n,l,d,o;return{c(){e=b("button"),r=b("span"),t=F("Close modal"),s=B(),n=G("svg"),l=G("path"),this.h()},l(u){e=v(u,"BUTTON",{type:!0,class:!0,"aria-label":!0});var i=m(e);r=v(i,"SPAN",{class:!0});var _=m(r);t=q(_,"Close modal"),_.forEach(a),s=P(i),n=H(i,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var $=m(n);l=H($,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(l).forEach(a),$.forEach(a),i.forEach(a),this.h()},h(){c(r,"class","sr-only"),c(l,"fill-rule","evenodd"),c(l,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),c(l,"clip-rule","evenodd"),c(n,"class","w-5 h-5"),c(n,"fill","currentColor"),c(n,"viewBox","0 0 20 20"),c(n,"xmlns","http://www.w3.org/2000/svg"),c(e,"type","button"),c(e,"class","ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"),c(e,"aria-label","Close")},m(u,i){S(u,e,i),p(e,r),p(r,t),p(e,s),p(e,n),p(n,l),d||(o=ie(e,"click",h[5]),d=!0)},p:Q,d(u){u&&a(e),d=!1,o()}}}function we(h){let e,r,t,s,n,l,d,o,u,i,_,$,A,k,C,R,L;return $=new ue({props:{size:16}}),{c(){e=b("tr"),r=b("td"),t=G("svg"),s=G("path"),n=B(),l=b("td"),d=b("p"),o=F("It's valid configuration."),u=B(),i=b("tr"),_=b("td"),M($.$$.fragment),A=B(),k=b("td"),C=b("p"),R=F("Applying configuration and restart ...."),this.h()},l(y){e=v(y,"TR",{});var T=m(e);r=v(T,"TD",{});var x=m(r);t=H(x,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var I=m(t);s=H(I,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(s).forEach(a),I.forEach(a),x.forEach(a),n=P(T),l=v(T,"TD",{});var g=m(l);d=v(g,"P",{class:!0,style:!0});var f=m(d);o=q(f,"It's valid configuration."),f.forEach(a),g.forEach(a),T.forEach(a),u=P(y),i=v(y,"TR",{});var w=m(i);_=v(w,"TD",{class:!0});var E=m(_);z($.$$.fragment,E),E.forEach(a),A=P(w),k=v(w,"TD",{class:!0});var D=m(k);C=v(D,"P",{class:!0,style:!0});var U=m(C);R=q(U,"Applying configuration and restart ...."),U.forEach(a),D.forEach(a),w.forEach(a),this.h()},h(){c(s,"d","M4.5 12.75l6 6 9-13.5"),c(s,"stroke-linecap","round"),c(s,"stroke-linejoin","round"),c(t,"class","w-16 h-16"),c(t,"aria-hidden","true"),c(t,"fill","none"),c(t,"stroke","currentColor"),c(t,"stroke-width","1.5"),c(t,"viewBox","0 0 24 24"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(d,"class","pl-5"),K(d,"color","red"),K(d,"font-size","18px"),c(_,"class","pt-5"),c(C,"class","pl-5"),K(C,"color","red"),K(C,"font-size","18px"),c(k,"class","pt-5")},m(y,T){S(y,e,T),p(e,r),p(r,t),p(t,s),p(e,n),p(e,l),p(l,d),p(d,o),S(y,u,T),S(y,i,T),p(i,_),V($,_,null),p(i,A),p(i,k),p(k,C),p(C,R),L=!0},p:Q,i(y){L||(O($.$$.fragment,y),L=!0)},o(y){N($.$$.fragment,y),L=!1},d(y){y&&a(e),y&&a(u),y&&a(i),j($)}}}function ke(h){let e,r,t,s;const n=[Ee,ye],l=[];function d(o,u){return o[4]==0?0:o[4]==1?1:-1}return~(r=d(h))&&(t=l[r]=n[r](h)),{c(){e=b("tr"),t&&t.c()},l(o){e=v(o,"TR",{});var u=m(e);t&&t.l(u),u.forEach(a)},m(o,u){S(o,e,u),~r&&l[r].m(e,null),s=!0},p(o,u){let i=r;r=d(o),r!==i&&(t&&(Y(),N(l[i],1,1,()=>{l[i]=null}),Z()),~r?(t=l[r],t||(t=l[r]=n[r](o),t.c()),O(t,1),t.m(e,null)):t=null)},i(o){s||(O(t),s=!0)},o(o){N(t),s=!1},d(o){o&&a(e),~r&&l[r].d()}}}function ye(h){let e,r,t,s,n,l,d;return{c(){e=b("td"),r=G("svg"),t=G("path"),s=B(),n=b("td"),l=b("p"),d=F("It's invalid configuration, please upload valid configuration."),this.h()},l(o){e=v(o,"TD",{});var u=m(e);r=H(u,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var i=m(r);t=H(i,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(t).forEach(a),i.forEach(a),u.forEach(a),s=P(o),n=v(o,"TD",{});var _=m(n);l=v(_,"P",{class:!0,style:!0});var $=m(l);d=q($,"It's invalid configuration, please upload valid configuration."),$.forEach(a),_.forEach(a),this.h()},h(){c(t,"d","M6 18L18 6M6 6l12 12"),c(t,"stroke-linecap","round"),c(t,"stroke-linejoin","round"),c(r,"class","w-16 h-16"),c(r,"aria-hidden","true"),c(r,"fill","none"),c(r,"stroke","currentColor"),c(r,"stroke-width","1.5"),c(r,"viewBox","0 0 24 24"),c(r,"xmlns","http://www.w3.org/2000/svg"),c(l,"class","pl-5"),K(l,"color","red"),K(l,"font-size","18px")},m(o,u){S(o,e,u),p(e,r),p(r,t),S(o,s,u),S(o,n,u),p(n,l),p(l,d)},i:Q,o:Q,d(o){o&&a(e),o&&a(s),o&&a(n)}}}function Ee(h){let e,r,t,s,n,l,d;return r=new ue({props:{size:16}}),{c(){e=b("td"),M(r.$$.fragment),t=B(),s=b("td"),n=b("p"),l=F("Verifying configuration now ...."),this.h()},l(o){e=v(o,"TD",{});var u=m(e);z(r.$$.fragment,u),u.forEach(a),t=P(o),s=v(o,"TD",{});var i=m(s);n=v(i,"P",{class:!0,style:!0});var _=m(n);l=q(_,"Verifying configuration now ...."),_.forEach(a),i.forEach(a),this.h()},h(){c(n,"class","pl-5"),K(n,"color","red"),K(n,"font-size","18px")},m(o,u){S(o,e,u),V(r,e,null),S(o,t,u),S(o,s,u),p(s,n),p(n,l),d=!0},i(o){d||(O(r.$$.fragment,o),d=!0)},o(o){N(r.$$.fragment,o),d=!1},d(o){o&&a(e),j(r),o&&a(t),o&&a(s)}}}function Te(h){let e,r,t,s,n,l=h[4]==1&&le(h);const d=[ke,we],o=[];function u(i,_){return i[3]==0?0:i[3]==1?1:-1}return~(t=u(h))&&(s=o[t]=d[t](h)),{c(){l&&l.c(),e=B(),r=b("table"),s&&s.c()},l(i){l&&l.l(i),e=P(i),r=v(i,"TABLE",{});var _=m(r);s&&s.l(_),_.forEach(a)},m(i,_){l&&l.m(i,_),S(i,e,_),S(i,r,_),~t&&o[t].m(r,null),n=!0},p(i,_){i[4]==1?l?l.p(i,_):(l=le(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null);let $=t;t=u(i),t===$?~t&&o[t].p(i,_):(s&&(Y(),N(o[$],1,1,()=>{o[$]=null}),Z()),~t?(s=o[t],s?s.p(i,_):(s=o[t]=d[t](i),s.c()),O(s,1),s.m(r,null)):s=null)},i(i){n||(O(s),n=!0)},o(i){N(s),n=!1},d(i){l&&l.d(i),i&&a(e),i&&a(r),~t&&o[t].d()}}}function Se(h){let e,r,t,s,n,l,d,o,u,i,_,$,A,k,C,R,L,y,T=Ae==0;$=new ce({props:{$$slots:{default:[ve]},$$scope:{ctx:h}}}),$.$on("click",h[7]);function x(g){h[10](g)}let I={size:"md",class:"w-full",permanent:!0,$$slots:{default:[Te]},$$scope:{ctx:h}};return h[2]!==void 0&&(I.open=h[2]),k=new he({props:I}),ne.push(()=>ae(k,"open",x,h[2])),{c(){e=b("table"),r=B(),t=b("tr"),s=b("td"),n=b("p"),l=F("Restore Configuration"),d=B(),o=b("td"),u=b("input"),i=B(),_=b("td"),M($.$$.fragment),A=B(),M(k.$$.fragment),this.h()},l(g){e=v(g,"TABLE",{});var f=m(e);r=P(f),t=v(f,"TR",{});var w=m(t);s=v(w,"TD",{class:!0});var E=m(s);n=v(E,"P",{class:!0});var D=m(n);l=q(D,"Restore Configuration"),D.forEach(a),E.forEach(a),d=P(w),o=v(w,"TD",{class:!0});var U=m(o);u=v(U,"INPUT",{type:!0,id:!0,class:!0}),U.forEach(a),i=P(w),_=v(w,"TD",{class:!0});var W=m(_);z($.$$.fragment,W),W.forEach(a),w.forEach(a),f.forEach(a),A=P(g),z(k.$$.fragment,g),this.h()},h(){c(n,"class","pl-10 pt-5 text-lg font-light text-right"),c(s,"class","w-85"),c(u,"type","file"),c(u,"id","configUpload"),c(u,"class","block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"),c(o,"class","pl-5 pt-5"),c(_,"class","pl-5 pt-5")},m(g,f){S(g,e,f),p(e,r),p(e,t),p(t,s),p(s,n),p(n,l),p(t,d),p(t,o),p(o,u),p(t,i),p(t,_),V($,_,null),S(g,A,f),V(k,g,f),R=!0,L||(y=ie(u,"change",h[6]),L=!0)},p(g,f){const w={};f&1048576&&(w.$$scope={dirty:f,ctx:g}),$.$set(w);const E={};f&1048600&&(E.$$scope={dirty:f,ctx:g}),!C&&f&4&&(C=!0,E.open=g[2],fe(()=>C=!1)),k.$set(E)},i(g){R||(O(T),O($.$$.fragment,g),O(k.$$.fragment,g),R=!0)},o(g){N(T),N($.$$.fragment,g),N(k.$$.fragment,g),R=!1},d(g){g&&a(e),j($),g&&a(A),j(k,g),L=!1,y()}}}function se(h){let e,r,t;function s(l){h[11](l)}let n={};return h[0].config.system_configuration.p2eService!==void 0&&(n.checked=h[0].config.system_configuration.p2eService),e=new me({props:n}),ne.push(()=>ae(e,"checked",s,h[0].config.system_configuration.p2eService)),{c(){M(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,d){V(e,l,d),t=!0},p(l,d){const o={};!r&&d&1&&(r=!0,o.checked=l[0].config.system_configuration.p2eService,fe(()=>r=!1)),e.$set(o)},i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function Ce(h){let e,r,t;return{c(){e=G("svg"),r=G("path"),t=F("Save"),this.h()},l(s){e=H(s,"svg",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var n=m(e);r=H(n,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(r).forEach(a),n.forEach(a),t=q(s,"Save"),this.h()},h(){c(r,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),c(r,"stroke-linecap","round"),c(r,"stroke-linejoin","round"),c(e,"class","mr-2 -ml-1 w-6 h-6"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"stroke-width","2"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(s,n){S(s,e,n),p(e,r),S(s,t,n)},p:Q,d(s){s&&a(e),s&&a(t)}}}function De(h){let e,r,t,s,n,l,d,o,u,i,_,$,A,k,C,R,L,y,T,x,I,g=h[1]==1&&se(h);return x=new ce({props:{color:"blue",pill:!0,$$slots:{default:[Ce]},$$scope:{ctx:h}}}),x.$on("click",h[9]),{c(){e=b("table"),r=b("tr"),t=b("td"),s=b("p"),n=F("P2E Service"),l=b("td"),g&&g.c(),d=B(),o=b("tr"),u=b("td"),i=B(),_=b("td"),$=B(),A=b("td"),k=B(),C=b("td"),R=B(),L=b("td"),y=B(),T=b("td"),M(x.$$.fragment),this.h()},l(f){e=v(f,"TABLE",{});var w=m(e);r=v(w,"TR",{});var E=m(r);t=v(E,"TD",{class:!0});var D=m(t);s=v(D,"P",{class:!0});var U=m(s);n=q(U,"P2E Service"),U.forEach(a),D.forEach(a),l=v(E,"TD",{class:!0});var W=m(l);g&&g.l(W),W.forEach(a),E.forEach(a),d=P(w),o=v(w,"TR",{class:!0});var J=m(o);u=v(J,"TD",{}),m(u).forEach(a),i=P(J),_=v(J,"TD",{}),m(_).forEach(a),$=P(J),A=v(J,"TD",{}),m(A).forEach(a),k=P(J),C=v(J,"TD",{}),m(C).forEach(a),R=P(J),L=v(J,"TD",{}),m(L).forEach(a),y=P(J),T=v(J,"TD",{class:!0});var ee=m(T);z(x.$$.fragment,ee),ee.forEach(a),J.forEach(a),w.forEach(a),this.h()},h(){c(s,"class","pl-10 pt-5 text-lg font-light text-right"),c(t,"class","w-60"),c(l,"class","pl-5 pt-5"),c(T,"class","pl-10"),c(o,"class","pt-5")},m(f,w){S(f,e,w),p(e,r),p(r,t),p(t,s),p(s,n),p(r,l),g&&g.m(l,null),p(e,d),p(e,o),p(o,u),p(o,i),p(o,_),p(o,$),p(o,A),p(o,k),p(o,C),p(o,R),p(o,L),p(o,y),p(o,T),V(x,T,null),I=!0},p(f,w){f[1]==1?g?(g.p(f,w),w&2&&O(g,1)):(g=se(f),g.c(),O(g,1),g.m(l,null)):g&&(Y(),N(g,1,1,()=>{g=null}),Z());const E={};w&1048576&&(E.$$scope={dirty:w,ctx:f}),x.$set(E)},i(f){I||(O(g),O(x.$$.fragment,f),I=!0)},o(f){N(g),N(x.$$.fragment,f),I=!1},d(f){f&&a(e),g&&g.d(),j(x)}}}function Be(h){let e,r,t,s;return e=new te({props:{open:!0,title:"Local",$$slots:{default:[Se]},$$scope:{ctx:h}}}),t=new te({props:{title:"P2E",$$slots:{default:[De]},$$scope:{ctx:h}}}),{c(){M(e.$$.fragment),r=B(),M(t.$$.fragment)},l(n){z(e.$$.fragment,n),r=P(n),z(t.$$.fragment,n)},m(n,l){V(e,n,l),S(n,r,l),V(t,n,l),s=!0},p(n,l){const d={};l&1048604&&(d.$$scope={dirty:l,ctx:n}),e.$set(d);const o={};l&1048579&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){s||(O(e.$$.fragment,n),O(t.$$.fragment,n),s=!0)},o(n){N(e.$$.fragment,n),N(t.$$.fragment,n),s=!1},d(n){j(e,n),n&&a(r),j(t,n)}}}function Pe(h){let e,r;return e=new $e({props:{style:"underline",$$slots:{default:[Be]},$$scope:{ctx:h}}}),{c(){M(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){V(e,t,s),r=!0},p(t,[s]){const n={};s&1048607&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(O(e.$$.fragment,t),r=!0)},o(t){N(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}let Ae=1;function Oe(h,e,r){let t=null,s,n,l,d="",o={},u={},i=0,_=[],$=!1,A=0,k=0;be.subscribe(f=>{s=f}),re.subscribe(f=>{d=f}),oe.subscribe(f=>{_=f}),X.subscribe(f=>{u=f});function C(){r(2,$=!1),r(3,A=0),r(4,k=0)}async function R(f){const w=f.target.files[0];if(w){if(t=w,s){const U=s.match(/.{1,2}/g).map(W=>parseInt(W,16));l=new Uint8Array(U)}const E=new FileReader;E.onload=D=>{const U=new Uint8Array(D.target.result);n=new Uint8Array(U.length+l.length),n.set(l,0),n.set(U,l.length)},E.readAsArrayBuffer(w)}}async function L(){t&&(r(2,$=!0),(await fetch(window.location.origin+"/uploadConfig",{method:"POST",body:n,headers:{"Content-Type":"application/octet-stream"}})).status==200?(r(3,A=1),console.log("200 OK")):r(4,k=1))}async function y(){try{const f=await fetch(window.location.origin+"/downloadConfig",{method:"POST",body:l});if(f.status==200){const w=await f.blob(),E="download.config",D=document.createElement("a");D.href=URL.createObjectURL(w),D.download=E,D.style.display="none",document.body.appendChild(D),D.click(),document.body.removeChild(D)}}catch(f){console.error("Error exporting file:",f)}}async function T(){const f=await fetch(window.location.origin+"/getconFiguraTionData",{method:"POST",body:l});f.status==200&&(d=await f.json(),console.log(d),re.set(d),r(0,o=JSON.parse(JSON.stringify(d))),u=JSON.parse(JSON.stringify(d)),X.set(u),r(1,i=1))}function x(){if(console.log(`Save p2e\r
`),_.length!=0&&(_=[]),o.config.system_configuration.p2eService!=d.config.system_configuration.p2eService){let f="P2E service is changed to "+o.config.system_configuration.p2eService;_=[..._,f]}oe.set(_),u=JSON.parse(JSON.stringify(o)),X.set(u),console.log(_)}_e(()=>{console.log("configuration sessionid: "),console.log(s);const w=s.match(/.{1,2}/g).map(E=>parseInt(E,16));l=new Uint8Array(w),s&&d==""?T():s&&d!=""&&(_.length==0?r(0,o=JSON.parse(JSON.stringify(d))):r(0,o=JSON.parse(JSON.stringify(u))),r(1,i=1))});function I(f){$=f,r(2,$)}function g(f){h.$$.not_equal(o.config.system_configuration.p2eService,f)&&(o.config.system_configuration.p2eService=f,r(0,o))}return[o,i,$,A,k,C,R,L,y,x,I,g]}class Ge extends de{constructor(e){super(),pe(this,e,Oe,Pe,ge,{})}}export{Ge as default};