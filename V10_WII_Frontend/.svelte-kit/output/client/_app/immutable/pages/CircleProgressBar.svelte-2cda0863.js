import{S,i as V,s as D,M as q,l as P,V as M,a as y,m as b,n as p,W as A,h as d,c as N,p as f,b as E,I as k,P as Q,Q as R,R as W,f as j,t as z,r as w,u as B,v as F}from"../chunks/index-c88a484d.js";function C(o){let e,t;return{c(){e=M("path"),this.h()},l(l){e=A(l,"path",{d:!0,stroke:!0,class:!0}),p(e).forEach(d),this.h()},h(){f(e,"d",t="M"+o[2]+","+o[3]+"A35 35 0 0 0 15.810308878413977 32.51234208777258A35"),f(e,"stroke","red"),f(e,"class","svelte-f1vkc5")},m(l,s){E(l,e,s)},p(l,s){s&12&&t!==(t="M"+l[2]+","+l[3]+"A35 35 0 0 0 15.810308878413977 32.51234208777258A35")&&f(e,"d",t)},d(l){l&&d(e)}}}function G(o){let e,t,l;return{c(){e=P("span"),t=w(o[0]),l=w("%"),this.h()},l(s){e=b(s,"SPAN",{class:!0});var c=p(e);t=B(c,o[0]),l=B(c,"%"),c.forEach(d),this.h()},h(){f(e,"class","svelte-f1vkc5")},m(s,c){E(s,e,c),k(e,t),k(e,l)},p(s,c){c&1&&F(t,s[0])},d(s){s&&d(e)}}}function H(o){let e,t,l,s,c,v,_,h,r=o[0]>80&&C(o);const m=o[7].default,n=q(m,o,o[6],null),i=n||G(o);return{c(){e=P("div"),t=M("svg"),l=M("path"),s=M("path"),r&&r.c(),v=y(),_=P("div"),i&&i.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var u=p(e);t=A(u,"svg",{viewBox:!0,class:!0});var g=p(t);l=A(g,"path",{d:!0,class:!0}),p(l).forEach(d),s=A(g,"path",{"stroke-width":!0,stroke:!0,d:!0,class:!0}),p(s).forEach(d),r&&r.l(g),g.forEach(d),v=N(u),_=b(u,"DIV",{class:!0});var I=p(_);i&&i.l(I),I.forEach(d),u.forEach(d),this.h()},h(){f(l,"d","M50,5A35 35 0 1 1 49.9999 5"),f(l,"class","svelte-f1vkc5"),f(s,"stroke-width","20px"),f(s,"stroke",o[1]),f(s,"d",c=o[4]()),f(s,"class","svelte-f1vkc5"),f(t,"viewBox","0 0 100 100"),f(t,"class","svelte-f1vkc5"),f(_,"class","svelte-f1vkc5"),f(e,"class","svelte-f1vkc5")},m(a,u){E(a,e,u),k(e,t),k(t,l),k(t,s),r&&r.m(t,null),k(e,v),k(e,_),i&&i.m(_,null),h=!0},p(a,[u]){(!h||u&2)&&f(s,"stroke",a[1]),(!h||u&16&&c!==(c=a[4]()))&&f(s,"d",c),a[0]>80?r?r.p(a,u):(r=C(a),r.c(),r.m(t,null)):r&&(r.d(1),r=null),n?n.p&&(!h||u&64)&&Q(n,m,a,a[6],h?W(m,a[6],u,null):R(a[6]),null):i&&i.p&&(!h||u&1)&&i.p(a,h?u:-1)},i(a){h||(j(i,a),h=!0)},o(a){z(i,a),h=!1},d(a){a&&d(e),r&&r.d(),i&&i.d(a)}}}function J(o,e,t){let l,{$$slots:s={},$$scope:c}=e,{value:v=0}=e,{max:_=105}=e,{color:h="currentColor"}=e,r,m;return o.$$set=n=>{"value"in n&&t(0,v=n.value),"max"in n&&t(5,_=n.max),"color"in n&&t(1,h=n.color),"$$scope"in n&&t(6,c=n.$$scope)},o.$$.update=()=>{o.$$.dirty&45&&t(4,l=()=>{if(v<=0)return"";if(v>=_)return"M50,5A35 35 0 1 1 49.9999 5";{const n=Math.PI*2*(v/_);t(2,r=50+Math.cos(n-Math.PI/2)*35),t(3,m=40+Math.sin(n-Math.PI/2)*35);let i="M50,5";return v<=80?(n>Math.PI&&(i+="A35 35 0 0 1 50 75"),i+=`A35 35 0 0 1 ${r} ${m}`,i):(i+="A35 35 0 0 1 50 75A35 35 0 0 1 15.810308878413977 32.51234208777258",i)}})},[v,h,r,m,l,_,c,s]}class L extends S{constructor(e){super(),V(this,e,J,H,D,{value:0,max:5,color:1})}}export{L as default};