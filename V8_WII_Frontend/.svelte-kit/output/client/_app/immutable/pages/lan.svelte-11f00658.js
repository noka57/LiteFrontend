import{S as de,i as pe,s as fe,a3 as te,a4 as re,l as p,r as L,a as N,x as J,m as f,n as c,u as U,h as r,c as A,y as K,p as u,b as S,I as l,z as W,a5 as ae,f as G,t as O,C as Q,a8 as F,J as le,K as ce,V as se,W as oe,F as _e}from"../chunks/index-a8392c86.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as ge}from"../chunks/Button-6a0793ca.js";import{R as ne}from"../chunks/Radio-c8f9b71d.js";function he(n){let e;return{c(){e=L("Static")},l(t){e=U(t,"Static")},m(t,a){S(t,e,a)},d(t){t&&r(e)}}}function me(n){let e;return{c(){e=L("DHCP")},l(t){e=U(t,"DHCP")},m(t,a){S(t,e,a)},d(t){t&&r(e)}}}function ie(n){let e,t,a,i,d,b,E,_,h,k,I,m,w,M,R;return{c(){e=p("tr"),t=p("td"),a=p("p"),i=L("IP Address"),d=p("td"),b=p("input"),E=N(),_=p("tr"),h=p("td"),k=p("p"),I=L("Network Mask"),m=p("td"),w=p("input"),this.h()},l(s){e=f(s,"TR",{});var v=c(e);t=f(v,"TD",{});var V=c(t);a=f(V,"P",{class:!0});var B=c(a);i=U(B,"IP Address"),B.forEach(r),V.forEach(r),d=f(v,"TD",{class:!0});var H=c(d);b=f(H,"INPUT",{type:!0,class:!0}),H.forEach(r),v.forEach(r),E=A(s),_=f(s,"TR",{});var D=c(_);h=f(D,"TD",{});var T=c(h);k=f(T,"P",{class:!0});var C=c(k);I=U(C,"Network Mask"),C.forEach(r),T.forEach(r),m=f(D,"TD",{class:!0});var y=c(m);w=f(y,"INPUT",{type:!0,class:!0}),y.forEach(r),D.forEach(r),this.h()},h(){u(a,"class","pl-40 pt-4 text-lg font-light text-right"),u(b,"type","text"),u(b,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),u(d,"class","pl-5 pt-5"),u(k,"class","pl-40 pt-4 text-lg font-light text-right"),u(w,"type","text"),u(w,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),u(m,"class","pl-5 pt-5")},m(s,v){S(s,e,v),l(e,t),l(t,a),l(a,i),l(e,d),l(d,b),F(b,n[1]),S(s,E,v),S(s,_,v),l(_,h),l(h,k),l(k,I),l(_,m),l(m,w),F(w,n[2]),M||(R=[le(b,"input",n[5]),le(w,"input",n[6])],M=!0)},p(s,v){v&2&&b.value!==s[1]&&F(b,s[1]),v&4&&w.value!==s[2]&&F(w,s[2])},d(s){s&&r(e),s&&r(E),s&&r(_),M=!1,ce(R)}}}function $e(n){let e,t,a;return{c(){e=se("svg"),t=se("path"),a=L("Save"),this.h()},l(i){e=oe(i,"svg",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var d=c(e);t=oe(d,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),c(t).forEach(r),d.forEach(r),a=U(i,"Save"),this.h()},h(){u(t,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(e,"class","mr-2 -ml-1 w-6 h-6"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"stroke-width","2"),u(e,"viewBox","0 0 24 24"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(i,d){S(i,e,d),l(e,t),S(i,a,d)},p:_e,d(i){i&&r(e),i&&r(a)}}}function be(n){let e,t,a,i,d,b,E,_,h,k,I,m,w,M,R,s,v,V,B,H,D,T,C;function y(o){n[3](o)}let X={value:"Sip",$$slots:{default:[he]},$$scope:{ctx:n}};n[0]!==void 0&&(X.group=n[0]),h=new ne({props:X}),te.push(()=>re(h,"group",y,n[0]));function ue(o){n[4](o)}let Y={value:"Dip",$$slots:{default:[me]},$$scope:{ctx:n}};n[0]!==void 0&&(Y.group=n[0]),m=new ne({props:Y}),te.push(()=>re(m,"group",ue,n[0]));let $=n[0]=="Sip"&&ie(n);return T=new ge({props:{color:"blue",pill:!0,$$slots:{default:[$e]},$$scope:{ctx:n}}}),{c(){e=p("table"),t=p("tr"),a=p("td"),i=p("p"),d=L("IP Mode"),b=N(),E=p("td"),_=p("div"),J(h.$$.fragment),I=N(),J(m.$$.fragment),M=N(),$&&$.c(),R=N(),s=p("tr"),v=p("td"),V=N(),B=p("td"),H=N(),D=p("td"),J(T.$$.fragment),this.h()},l(o){e=f(o,"TABLE",{});var g=c(e);t=f(g,"TR",{});var P=c(t);a=f(P,"TD",{});var j=c(a);i=f(j,"P",{class:!0});var q=c(i);d=U(q,"IP Mode"),q.forEach(r),j.forEach(r),b=A(P),E=f(P,"TD",{class:!0});var Z=c(E);_=f(Z,"DIV",{class:!0});var z=c(_);K(h.$$.fragment,z),I=A(z),K(m.$$.fragment,z),z.forEach(r),Z.forEach(r),P.forEach(r),M=A(g),$&&$.l(g),R=A(g),s=f(g,"TR",{});var x=c(s);v=f(x,"TD",{}),c(v).forEach(r),V=A(x),B=f(x,"TD",{}),c(B).forEach(r),H=A(x),D=f(x,"TD",{class:!0});var ee=c(D);K(T.$$.fragment,ee),ee.forEach(r),x.forEach(r),g.forEach(r),this.h()},h(){u(i,"class","pl-40 pt-1 text-lg font-light text-right"),u(_,"class","flex gap-4"),u(E,"class","pl-5"),u(D,"class","pl-10")},m(o,g){S(o,e,g),l(e,t),l(t,a),l(a,i),l(i,d),l(t,b),l(t,E),l(E,_),W(h,_,null),l(_,I),W(m,_,null),l(e,M),$&&$.m(e,null),l(e,R),l(e,s),l(s,v),l(s,V),l(s,B),l(s,H),l(s,D),W(T,D,null),C=!0},p(o,[g]){const P={};g&128&&(P.$$scope={dirty:g,ctx:o}),!k&&g&1&&(k=!0,P.group=o[0],ae(()=>k=!1)),h.$set(P);const j={};g&128&&(j.$$scope={dirty:g,ctx:o}),!w&&g&1&&(w=!0,j.group=o[0],ae(()=>w=!1)),m.$set(j),o[0]=="Sip"?$?$.p(o,g):($=ie(o),$.c(),$.m(e,R)):$&&($.d(1),$=null);const q={};g&128&&(q.$$scope={dirty:g,ctx:o}),T.$set(q)},i(o){C||(G(h.$$.fragment,o),G(m.$$.fragment,o),G(T.$$.fragment,o),C=!0)},o(o){O(h.$$.fragment,o),O(m.$$.fragment,o),O(T.$$.fragment,o),C=!1},d(o){o&&r(e),Q(h),Q(m),$&&$.d(),Q(T)}}}function ve(n,e,t){let a="Sip",i="",d="";function b(k){a=k,t(0,a)}function E(k){a=k,t(0,a)}function _(){i=this.value,t(1,i)}function h(){d=this.value,t(2,d)}return[a,i,d,b,E,_,h]}class De extends de{constructor(e){super(),pe(this,e,ve,be,fe,{})}}export{De as default};
