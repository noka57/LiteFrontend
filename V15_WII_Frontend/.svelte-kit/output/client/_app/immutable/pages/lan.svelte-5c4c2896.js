import{S as Ie,i as Le,s as Oe,x as W,y as Q,z as X,f as z,t as K,C as Y,o as Je,a as C,c as I,b as U,h as s,a9 as se,l as p,m as u,n as g,p as i,I as l,r as j,u as q,g as Ae,d as He,e as be,ab as G,J as ne,K as Ne,V as ie,W as ce,F as ye,a3 as Ve,a4 as Be,a5 as Re,v as ke}from"../chunks/index-267512dc.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as Ce}from"../chunks/Button-52fc61f8.js";import{T as Me}from"../chunks/Toggle-298f25e2.js";import{T as ve}from"../chunks/TabItem-b3a6c2a8.js";import{T as Ue}from"../chunks/Tabs-b71cabd5.js";import{s as xe}from"../chunks/sessionG-e8b8f90d.js";import{a_ as we,L as Se,i as $e,aF as ae}from"../chunks/configG-e6a34c7e.js";import"../chunks/Radio-726785d0.js";import"../chunks/index-b2b51752.js";function Ee(c){let e,t=c[0].config.networking_lan.ipMode==0&&Te(c);return{c(){t&&t.c(),e=be()},l(r){t&&t.l(r),e=be()},m(r,n){t&&t.m(r,n),U(r,e,n)},p(r,n){r[0].config.networking_lan.ipMode==0?t?t.p(r,n):(t=Te(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&s(e)}}}function Te(c){let e,t,r,n,a,o,d,k,f,T,h,b,_,w,H;return{c(){e=p("tr"),t=p("td"),r=p("p"),n=j("IP Address"),a=p("td"),o=p("input"),d=C(),k=p("tr"),f=p("td"),T=p("p"),h=j("Network Mask"),b=p("td"),_=p("input"),this.h()},l(S){e=u(S,"TR",{});var L=g(e);t=u(L,"TD",{});var N=g(t);r=u(N,"P",{class:!0});var x=g(r);n=q(x,"IP Address"),x.forEach(s),N.forEach(s),a=u(L,"TD",{class:!0});var V=g(a);o=u(V,"INPUT",{type:!0,class:!0}),V.forEach(s),L.forEach(s),d=I(S),k=u(S,"TR",{});var M=g(k);f=u(M,"TD",{});var B=g(f);T=u(B,"P",{class:!0});var F=g(T);h=q(F,"Network Mask"),F.forEach(s),B.forEach(s),b=u(M,"TD",{class:!0});var R=g(b);_=u(R,"INPUT",{type:!0,class:!0}),R.forEach(s),M.forEach(s),this.h()},h(){i(r,"class","pl-40 pt-4 text-lg font-light text-right"),i(o,"type","text"),i(o,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),i(a,"class","pl-5 pt-5"),i(T,"class","pl-40 pt-4 text-lg font-light text-right"),i(_,"type","text"),i(_,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),i(b,"class","pl-5 pt-5")},m(S,L){U(S,e,L),l(e,t),l(t,r),l(r,n),l(e,a),l(a,o),G(o,c[0].config.networking_lan.ipStatic.ip),U(S,d,L),U(S,k,L),l(k,f),l(f,T),l(T,h),l(k,b),l(b,_),G(_,c[0].config.networking_lan.ipStatic.netmask),w||(H=[ne(o,"input",c[8]),ne(_,"input",c[9])],w=!0)},p(S,L){L&1&&o.value!==S[0].config.networking_lan.ipStatic.ip&&G(o,S[0].config.networking_lan.ipStatic.ip),L&1&&_.value!==S[0].config.networking_lan.ipStatic.netmask&&G(_,S[0].config.networking_lan.ipStatic.netmask)},d(S){S&&s(e),S&&s(d),S&&s(k),w=!1,Ne(H)}}}function Fe(c){let e,t,r;return{c(){e=ie("svg"),t=ie("path"),r=j("Save"),this.h()},l(n){e=ce(n,"svg",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var a=g(e);t=ce(a,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),g(t).forEach(s),a.forEach(s),r=q(n,"Save"),this.h()},h(){i(t,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(e,"class","mr-2 -ml-1 w-6 h-6"),i(e,"fill","none"),i(e,"stroke","currentColor"),i(e,"stroke-width","2"),i(e,"viewBox","0 0 24 24"),i(e,"xmlns","http://www.w3.org/2000/svg")},m(n,a){U(n,e,a),l(e,t),U(n,r,a)},p:ye,d(n){n&&s(e),n&&s(r)}}}function je(c){let e,t,r,n,a,o,d,k,f,T,h=c[1]==1&&Ee(c);return f=new Ce({props:{color:"blue",pill:!0,$$slots:{default:[Fe]},$$scope:{ctx:c}}}),f.$on("click",c[5]),{c(){e=p("table"),h&&h.c(),t=C(),r=p("tr"),n=p("td"),a=C(),o=p("td"),d=C(),k=p("td"),W(f.$$.fragment),this.h()},l(b){e=u(b,"TABLE",{});var _=g(e);h&&h.l(_),t=I(_),r=u(_,"TR",{});var w=g(r);n=u(w,"TD",{}),g(n).forEach(s),a=I(w),o=u(w,"TD",{}),g(o).forEach(s),d=I(w),k=u(w,"TD",{class:!0});var H=g(k);Q(f.$$.fragment,H),H.forEach(s),w.forEach(s),_.forEach(s),this.h()},h(){i(k,"class","pl-10")},m(b,_){U(b,e,_),h&&h.m(e,null),l(e,t),l(e,r),l(r,n),l(r,a),l(r,o),l(r,d),l(r,k),X(f,k,null),T=!0},p(b,_){b[1]==1?h?h.p(b,_):(h=Ee(b),h.c(),h.m(e,t)):h&&(h.d(1),h=null);const w={};_&4194304&&(w.$$scope={dirty:_,ctx:b}),f.$set(w)},i(b){T||(z(f.$$.fragment,b),T=!0)},o(b){K(f.$$.fragment,b),T=!1},d(b){b&&s(e),h&&h.d(),Y(f)}}}function Pe(c){let e,t,r;function n(o){c[10](o)}let a={};return c[0].config.networking_lan.dhcpServer.enable!==void 0&&(a.checked=c[0].config.networking_lan.dhcpServer.enable),e=new Me({props:a}),Ve.push(()=>Be(e,"checked",n,c[0].config.networking_lan.dhcpServer.enable)),e.$on("change",c[7]),{c(){W(e.$$.fragment)},l(o){Q(e.$$.fragment,o)},m(o,d){X(e,o,d),r=!0},p(o,d){const k={};!t&&d&1&&(t=!0,k.checked=o[0].config.networking_lan.dhcpServer.enable,Re(()=>t=!1)),e.$set(k)},i(o){r||(z(e.$$.fragment,o),r=!0)},o(o){K(e.$$.fragment,o),r=!1},d(o){Y(e,o)}}}function De(c){let e,t,r,n,a,o,d,k,f,T,h,b,_,w,H,S,L,N,x,V,M,B,F,R,m,P,A,D,$,O,J;return{c(){e=p("tr"),t=p("td"),r=p("p"),n=j("DHCP IP Pool"),a=C(),o=p("td"),d=p("div"),k=p("p"),f=j(c[2]),T=C(),h=p("input"),b=C(),_=p("p"),w=j("- "),H=p("p"),S=j(c[2]),L=C(),N=p("input"),x=C(),V=p("tr"),M=p("td"),B=p("p"),F=j("Lease"),R=p("td"),m=p("div"),P=p("input"),A=C(),D=p("p"),$=j("hr"),this.h()},l(v){e=u(v,"TR",{});var y=g(e);t=u(y,"TD",{});var Z=g(t);r=u(Z,"P",{class:!0});var ee=g(r);n=q(ee,"DHCP IP Pool"),ee.forEach(s),Z.forEach(s),a=I(y),o=u(y,"TD",{class:!0});var te=g(o);d=u(te,"DIV",{class:!0});var E=g(d);k=u(E,"P",{class:!0});var re=g(k);f=q(re,c[2]),re.forEach(s),T=I(E),h=u(E,"INPUT",{type:!0,class:!0,min:!0,max:!0}),b=I(E),_=u(E,"P",{class:!0});var ue=g(_);w=q(ue,"- "),ue.forEach(s),H=u(E,"P",{class:!0});var ge=g(H);S=q(ge,c[2]),ge.forEach(s),L=I(E),N=u(E,"INPUT",{type:!0,class:!0,min:!0,max:!0}),E.forEach(s),te.forEach(s),y.forEach(s),x=I(v),V=u(v,"TR",{});var fe=g(V);M=u(fe,"TD",{});var de=g(M);B=u(de,"P",{class:!0});var he=g(B);F=q(he,"Lease"),he.forEach(s),de.forEach(s),R=u(fe,"TD",{class:!0});var _e=g(R);m=u(_e,"DIV",{class:!0});var le=g(m);P=u(le,"INPUT",{type:!0,class:!0}),A=I(le),D=u(le,"P",{class:!0});var me=g(D);$=q(me,"hr"),me.forEach(s),le.forEach(s),_e.forEach(s),fe.forEach(s),this.h()},h(){i(r,"class","pl-20 pt-4 text-lg font-light text-right"),i(k,"class","pl-1 pt-2"),i(h,"type","number"),i(h,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"),i(h,"min","1"),i(h,"max","255"),i(_,"class","pl-1 pt-2"),i(H,"class","pl-1 pt-2"),i(N,"type","number"),i(N,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"),i(N,"min","1"),i(N,"max","255"),i(d,"class","flex gap-1"),i(o,"class","pl-5 pt-5"),i(B,"class","pl-20 pt-4 text-lg font-light text-right"),i(P,"type","text"),i(P,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-green-500"),i(D,"class","pl-1 pt-2"),i(m,"class","flex gap-1"),i(R,"class","pl-5 pt-5")},m(v,y){U(v,e,y),l(e,t),l(t,r),l(r,n),l(e,a),l(e,o),l(o,d),l(d,k),l(k,f),l(d,T),l(d,h),G(h,c[3]),l(d,b),l(d,_),l(_,w),l(d,H),l(H,S),l(d,L),l(d,N),G(N,c[4]),U(v,x,y),U(v,V,y),l(V,M),l(M,B),l(B,F),l(V,R),l(R,m),l(m,P),G(P,c[0].config.networking_lan.dhcpServer.lease),l(m,A),l(m,D),l(D,$),O||(J=[ne(h,"input",c[11]),ne(N,"input",c[12]),ne(P,"input",c[13])],O=!0)},p(v,y){y&4&&ke(f,v[2]),y&8&&se(h.value)!==v[3]&&G(h,v[3]),y&4&&ke(S,v[2]),y&16&&se(N.value)!==v[4]&&G(N,v[4]),y&1&&P.value!==v[0].config.networking_lan.dhcpServer.lease&&G(P,v[0].config.networking_lan.dhcpServer.lease)},d(v){v&&s(e),v&&s(x),v&&s(V),O=!1,Ne(J)}}}function qe(c){let e,t,r;return{c(){e=ie("svg"),t=ie("path"),r=j("Save"),this.h()},l(n){e=ce(n,"svg",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var a=g(e);t=ce(a,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),g(t).forEach(s),a.forEach(s),r=q(n,"Save"),this.h()},h(){i(t,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(e,"class","mr-2 -ml-1 w-6 h-6"),i(e,"fill","none"),i(e,"stroke","currentColor"),i(e,"stroke-width","2"),i(e,"viewBox","0 0 24 24"),i(e,"xmlns","http://www.w3.org/2000/svg")},m(n,a){U(n,e,a),l(e,t),U(n,r,a)},p:ye,d(n){n&&s(e),n&&s(r)}}}function Ge(c){let e,t,r,n,a,o,d,k,f,T,h,b,_,w,H,S,L,N,x,V,M,B,F,R,m,P,A,D,$=c[1]==1&&Pe(c),O=c[0].config.networking_lan.dhcpServer.enable&&De(c);return A=new Ce({props:{color:"blue",pill:!0,$$slots:{default:[qe]},$$scope:{ctx:c}}}),A.$on("click",c[6]),{c(){e=p("table"),t=p("tr"),r=p("td"),n=p("p"),a=j("DHCP Server"),o=p("td"),$&&$.c(),d=C(),O&&O.c(),k=C(),f=p("tr"),T=p("td"),h=C(),b=p("td"),_=C(),w=p("td"),H=C(),S=p("td"),L=C(),N=p("td"),x=C(),V=p("td"),M=C(),B=p("td"),F=C(),R=p("td"),m=C(),P=p("td"),W(A.$$.fragment),this.h()},l(J){e=u(J,"TABLE",{});var v=g(e);t=u(v,"TR",{});var y=g(t);r=u(y,"TD",{class:!0});var Z=g(r);n=u(Z,"P",{class:!0});var ee=g(n);a=q(ee,"DHCP Server"),ee.forEach(s),Z.forEach(s),o=u(y,"TD",{class:!0});var te=g(o);$&&$.l(te),te.forEach(s),y.forEach(s),d=I(v),O&&O.l(v),k=I(v),f=u(v,"TR",{});var E=g(f);T=u(E,"TD",{}),g(T).forEach(s),h=I(E),b=u(E,"TD",{}),g(b).forEach(s),_=I(E),w=u(E,"TD",{}),g(w).forEach(s),H=I(E),S=u(E,"TD",{}),g(S).forEach(s),L=I(E),N=u(E,"TD",{}),g(N).forEach(s),x=I(E),V=u(E,"TD",{}),g(V).forEach(s),M=I(E),B=u(E,"TD",{}),g(B).forEach(s),F=I(E),R=u(E,"TD",{}),g(R).forEach(s),m=I(E),P=u(E,"TD",{class:!0});var re=g(P);Q(A.$$.fragment,re),re.forEach(s),E.forEach(s),v.forEach(s),this.h()},h(){i(n,"class","pl-10 pt-5 text-lg font-light text-right"),i(r,"class","w-60"),i(o,"class","pl-5 pt-5"),i(P,"class","pl-10")},m(J,v){U(J,e,v),l(e,t),l(t,r),l(r,n),l(n,a),l(t,o),$&&$.m(o,null),l(e,d),O&&O.m(e,null),l(e,k),l(e,f),l(f,T),l(f,h),l(f,b),l(f,_),l(f,w),l(f,H),l(f,S),l(f,L),l(f,N),l(f,x),l(f,V),l(f,M),l(f,B),l(f,F),l(f,R),l(f,m),l(f,P),X(A,P,null),D=!0},p(J,v){J[1]==1?$?($.p(J,v),v&2&&z($,1)):($=Pe(J),$.c(),z($,1),$.m(o,null)):$&&(Ae(),K($,1,1,()=>{$=null}),He()),J[0].config.networking_lan.dhcpServer.enable?O?O.p(J,v):(O=De(J),O.c(),O.m(e,k)):O&&(O.d(1),O=null);const y={};v&4194304&&(y.$$scope={dirty:v,ctx:J}),A.$set(y)},i(J){D||(z($),z(A.$$.fragment,J),D=!0)},o(J){K($),K(A.$$.fragment,J),D=!1},d(J){J&&s(e),$&&$.d(),O&&O.d(),Y(A)}}}function ze(c){let e,t,r,n;return e=new ve({props:{open:!0,title:"General",$$slots:{default:[je]},$$scope:{ctx:c}}}),r=new ve({props:{title:"DHCP Server",$$slots:{default:[Ge]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment),t=C(),W(r.$$.fragment)},l(a){Q(e.$$.fragment,a),t=I(a),Q(r.$$.fragment,a)},m(a,o){X(e,a,o),U(a,t,o),X(r,a,o),n=!0},p(a,o){const d={};o&4194307&&(d.$$scope={dirty:o,ctx:a}),e.$set(d);const k={};o&4194335&&(k.$$scope={dirty:o,ctx:a}),r.$set(k)},i(a){n||(z(e.$$.fragment,a),z(r.$$.fragment,a),n=!0)},o(a){K(e.$$.fragment,a),K(r.$$.fragment,a),n=!1},d(a){Y(e,a),a&&s(t),Y(r,a)}}}function Ke(c){let e,t;return e=new Ue({props:{style:"underline",$$slots:{default:[ze]},$$scope:{ctx:c}}}),{c(){W(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,n){X(e,r,n),t=!0},p(r,[n]){const a={};n&4194335&&(a.$$scope={dirty:n,ctx:r}),e.$set(a)},i(r){t||(z(e.$$.fragment,r),t=!0)},o(r){K(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function pe(c){const e=c.split(".");if(e.length<4)throw new Error("Invalid IP address");return e.slice(0,3).join(".")+"."}function oe(c){const e=c.split(".");return e[e.length-1]}function We(c,e,t){let r="",n={},a={},o=[],d=[],k=0,f,T;xe.subscribe(m=>{f=m}),we.subscribe(m=>{r=m}),Se.subscribe(m=>{o=m}),$e.subscribe(m=>{d=m}),ae.subscribe(m=>{a=m});function h(m,P,A){for(const D in m)if(typeof m[D]=="object"&&typeof P[D]=="object")h(m[D],P[D],A);else if(m[D]!=P[D]){if(A==1){let $="Value of "+D+" has changed to "+m[D];o=[...o,$]}else if(A==2){let $="Value of "+D+" has changed to "+m[D];d=[...d,$]}}}let b="192.168.123.",_="100",w="250";function H(){console.log(`Save LAN Setting\r
`),o.length!=0&&(o=[]),h(n.config.networking_lan.ipStatic,r.config.networking_lan.ipStatic,1),Se.set(o),a.config.networking_lan.ipStatic=JSON.parse(JSON.stringify(n.config.networking_lan.ipStatic)),ae.set(a);let m=pe(a.config.networking_lan.ipStatic.ip);t(2,b=m),S(),console.log(o)}function S(){console.log(`Save DHCPServer Setting\r
`),d.length!=0&&(d=[]),t(0,n.config.networking_lan.dhcpServer.startIP=`${b}${_}`,n),t(0,n.config.networking_lan.dhcpServer.endIP=`${b}${w}`,n),h(n.config.networking_lan.dhcpServer,r.config.networking_lan.dhcpServer,2),$e.set(d),a.config.networking_lan.dhcpServer=JSON.parse(JSON.stringify(n.config.networking_lan.dhcpServer)),ae.set(a),console.log(a.config.networking_lan),console.log(d)}function L(){console.log("DHCPServer_Check()"),console.log(n.config.networking_lan.dhcpServer.enable),n.config.networking_lan.dhcpServer.enable?t(0,n.config.networking_lan.dhcpServer.enable=1,n):t(0,n.config.networking_lan.dhcpServer.enable=0,n)}async function N(){const m=await fetch(window.location.origin+"/getLANdata",{method:"POST",body:T});m.status==200&&(r=await m.json(),console.log(r),we.set(r),t(0,n=JSON.parse(JSON.stringify(r))),a=JSON.parse(JSON.stringify(r)),ae.set(a),t(2,b=pe(n.config.networking_lan.ipStatic.ip)),t(3,_=oe(n.config.networking_lan.dhcpServer.startIP)),t(4,w=oe(n.config.networking_lan.dhcpServer.endIP)),t(1,k=1))}Je(()=>{if(console.log("lan sessionid: "),console.log(f),f&&r==""){const P=f.match(/.{1,2}/g).map(A=>parseInt(A,16));T=new Uint8Array(P),N()}else f&&r!=""&&(t(0,n=JSON.parse(JSON.stringify(a))),t(1,k=1),o.length==0&&t(0,n.config.networking_lan.ipStatic=JSON.parse(JSON.stringify(r.config.networking_lan.ipStatic)),n),d.length==0&&t(0,n.config.networking_lan.dhcpServer=JSON.parse(JSON.stringify(r.config.networking_lan.dhcpServer)),n),t(2,b=pe(n.config.networking_lan.ipStatic.ip)),t(3,_=oe(n.config.networking_lan.dhcpServer.startIP)),t(4,w=oe(n.config.networking_lan.dhcpServer.endIP)))});function x(){n.config.networking_lan.ipStatic.ip=this.value,t(0,n)}function V(){n.config.networking_lan.ipStatic.netmask=this.value,t(0,n)}function M(m){c.$$.not_equal(n.config.networking_lan.dhcpServer.enable,m)&&(n.config.networking_lan.dhcpServer.enable=m,t(0,n))}function B(){_=se(this.value),t(3,_)}function F(){w=se(this.value),t(4,w)}function R(){n.config.networking_lan.dhcpServer.lease=this.value,t(0,n)}return[n,k,b,_,w,H,S,L,x,V,M,B,F,R]}class ot extends Ie{constructor(e){super(),Le(this,e,We,Ke,Oe,{})}}export{ot as default};