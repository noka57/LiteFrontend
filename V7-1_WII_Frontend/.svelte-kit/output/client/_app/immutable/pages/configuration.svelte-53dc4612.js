import{S as Z,i as tt,s as et,a3 as at,a4 as nt,l as i,r as P,a as x,x as I,m as c,n as u,u as S,h as l,c as F,y as L,p as h,b as J,I as s,z as j,a5 as st,f as y,t as G,C as H}from"../chunks/index-29e83366.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as W}from"../chunks/Button-342cae6e.js";import{F as lt}from"../chunks/Fileupload-325be352.js";import"../chunks/Input-ef0084b8.js";function ot(o){let t;return{c(){t=P("Download")},l(e){t=S(e,"Download")},m(e,n){J(e,t,n)},d(e){e&&l(t)}}}function rt(o){let t;return{c(){t=P("Upload")},l(e){t=S(e,"Upload")},m(e,n){J(e,t,n)},d(e){e&&l(t)}}}function it(o){let t,e,n,_,T,w,m,f,U,p,v,b,Y,q,E,d,z,A,C,$,R;f=new W({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),f.$on("click",o[1]);function X(a){o[3](a)}let K={id:"filetest"};return o[0]!==void 0&&(K.value=o[0]),d=new lt({props:K}),at.push(()=>nt(d,"value",X,o[0])),$=new W({props:{$$slots:{default:[rt]},$$scope:{ctx:o}}}),$.$on("click",o[2]),{c(){t=i("table"),e=i("tr"),n=i("td"),_=i("p"),T=P("Backup Current Configuration"),w=x(),m=i("td"),I(f.$$.fragment),U=x(),p=i("tr"),v=i("td"),b=i("p"),Y=P("Restore Configuration"),q=x(),E=i("td"),I(d.$$.fragment),A=x(),C=i("td"),I($.$$.fragment),this.h()},l(a){t=c(a,"TABLE",{});var r=u(t);e=c(r,"TR",{});var g=u(e);n=c(g,"TD",{class:!0});var D=u(n);_=c(D,"P",{class:!0});var B=u(_);T=S(B,"Backup Current Configuration"),B.forEach(l),D.forEach(l),w=F(g),m=c(g,"TD",{class:!0});var M=u(m);L(f.$$.fragment,M),M.forEach(l),g.forEach(l),U=F(r),p=c(r,"TR",{});var k=u(p);v=c(k,"TD",{class:!0});var N=u(v);b=c(N,"P",{class:!0});var O=u(b);Y=S(O,"Restore Configuration"),O.forEach(l),N.forEach(l),q=F(k),E=c(k,"TD",{class:!0});var Q=u(E);L(d.$$.fragment,Q),Q.forEach(l),A=F(k),C=c(k,"TD",{class:!0});var V=u(C);L($.$$.fragment,V),V.forEach(l),k.forEach(l),r.forEach(l),this.h()},h(){h(_,"class","pl-10 pt-5 text-lg font-light text-right"),h(n,"class","w-85"),h(m,"class","pl-5 pt-5"),h(b,"class","pl-10 pt-5 text-lg font-light text-right"),h(v,"class","w-85"),h(E,"class","pl-5 pt-5"),h(C,"class","pl-5 pt-5")},m(a,r){J(a,t,r),s(t,e),s(e,n),s(n,_),s(_,T),s(e,w),s(e,m),j(f,m,null),s(t,U),s(t,p),s(p,v),s(v,b),s(b,Y),s(p,q),s(p,E),j(d,E,null),s(p,A),s(p,C),j($,C,null),R=!0},p(a,[r]){const g={};r&16&&(g.$$scope={dirty:r,ctx:a}),f.$set(g);const D={};!z&&r&1&&(z=!0,D.value=a[0],st(()=>z=!1)),d.$set(D);const B={};r&16&&(B.$$scope={dirty:r,ctx:a}),$.$set(B)},i(a){R||(y(f.$$.fragment,a),y(d.$$.fragment,a),y($.$$.fragment,a),R=!0)},o(a){G(f.$$.fragment,a),G(d.$$.fragment,a),G($.$$.fragment,a),R=!1},d(a){a&&l(t),H(f),H(d),H($)}}}function ct(o,t,e){let n;const _=()=>{alert("You clicked btn1.")},T=()=>{alert("You clicked btn2."),alert(n||"no file")};function w(m){n=m,e(0,n)}return[n,_,T,w]}class _t extends Z{constructor(t){super(),tt(this,t,ct,it,et,{})}}export{_t as default};
