import{S as Ze,i as et,s as tt,x,y as Q,z as X,f as S,t as I,C as Y,o as rt,a as T,c as y,b as E,h as s,a3 as Ne,a4 as Ce,l as g,r as H,m,n as p,u as J,p as d,I as a,J as Fe,g as Se,d as Ie,a5 as Re,q as be,V as ye,W as Pe,F as ge,a8 as Be,e as Ue,v as je}from"../chunks/index-7ad2b2c6.js";import{A as lt,a as ze}from"../chunks/AccordionItem-6c9bae1b.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as Oe}from"../chunks/Button-57241b2e.js";import{R as Ve}from"../chunks/Radio-bf662703.js";import{T as ot}from"../chunks/Toggle-54988e54.js";import{M as st}from"../chunks/Modal-4fa17a5d.js";import{S as Me}from"../chunks/Spinner-bf15bb6f.js";import{T as We}from"../chunks/Table-dd0dc8f4.js";import{T as qe}from"../chunks/TabItem-6579443a.js";import{T as nt}from"../chunks/Tabs-5642dc1b.js";import{s as at}from"../chunks/sessionG-88368dfb.js";import{az as Ge,M as Ke,ak as He}from"../chunks/configG-285987ae.js";import"../chunks/index-518a8eb8.js";import"../chunks/Frame-1960f3d8.js";import"../chunks/index-f10fe546.js";function ft(i){let e;return{c(){e=H("Update")},l(t){e=J(t,"Update")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function xe(i){let e,t;return{c(){e=g("p"),t=H("It's not valid firmware. Please choose valid one for update"),this.h()},l(r){e=m(r,"P",{style:!0});var o=p(e);t=J(o,"It's not valid firmware. Please choose valid one for update"),o.forEach(s),this.h()},h(){be(e,"color","red"),be(e,"font-size","18px")},m(r,o){E(r,e,o),a(e,t)},d(r){r&&s(e)}}}function Qe(i){let e,t,r;function o(n){i[29](n)}let f={};return i[0].config.system_maintenance.fotaEn!==void 0&&(f.checked=i[0].config.system_maintenance.fotaEn),e=new ot({props:f}),Ne.push(()=>Ce(e,"checked",o,i[0].config.system_maintenance.fotaEn)),e.$on("change",i[28]),{c(){x(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,u){X(e,n,u),r=!0},p(n,u){const l={};!t&&u[0]&1&&(t=!0,l.checked=n[0].config.system_maintenance.fotaEn,Re(()=>t=!1)),e.$set(l)},i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){I(e.$$.fragment,n),r=!1},d(n){Y(e,n)}}}function it(i){let e,t,r;return{c(){e=ye("svg"),t=ye("path"),r=H("Save"),this.h()},l(o){e=Pe(o,"svg",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var f=p(e);t=Pe(f,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),p(t).forEach(s),f.forEach(s),r=J(o,"Save"),this.h()},h(){d(t,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(e,"class","mr-2 w-6 h-6"),d(e,"fill","none"),d(e,"stroke","currentColor"),d(e,"stroke-width","2"),d(e,"viewBox","0 0 24 24"),d(e,"xmlns","http://www.w3.org/2000/svg")},m(o,f){E(o,e,f),a(e,t),E(o,r,f)},p:ge,d(o){o&&s(e),o&&s(r)}}}function Xe(i){let e,t,r,o,f,n,u,l;return{c(){e=g("button"),t=g("span"),r=H("Close modal"),o=T(),f=ye("svg"),n=ye("path"),this.h()},l(c){e=m(c,"BUTTON",{type:!0,class:!0,"aria-label":!0});var _=p(e);t=m(_,"SPAN",{class:!0});var b=p(t);r=J(b,"Close modal"),b.forEach(s),o=y(_),f=Pe(_,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var v=p(f);n=Pe(v,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),p(n).forEach(s),v.forEach(s),_.forEach(s),this.h()},h(){d(t,"class","sr-only"),d(n,"fill-rule","evenodd"),d(n,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),d(n,"clip-rule","evenodd"),d(f,"class","w-5 h-5"),d(f,"fill","currentColor"),d(f,"viewBox","0 0 20 20"),d(f,"xmlns","http://www.w3.org/2000/svg"),d(e,"type","button"),d(e,"class","ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"),d(e,"aria-label","Close")},m(c,_){E(c,e,_),a(e,t),a(t,r),a(e,o),a(e,f),a(f,n),u||(l=Fe(e,"click",i[21]),u=!0)},p:ge,d(c){c&&s(e),u=!1,l()}}}function ut(i){let e,t,r,o,f,n,u,l,c,_,b,v,z;const oe=[dt,pt],C=[];function O(P,B){return P[6]==0?0:1}return b=O(i),v=C[b]=oe[b](i),{c(){e=g("tr"),t=g("td"),r=ye("svg"),o=ye("path"),f=T(),n=g("td"),u=g("p"),l=H("It's valid firmware."),c=T(),_=g("tr"),v.c(),this.h()},l(P){e=m(P,"TR",{});var B=p(e);t=m(B,"TD",{});var F=p(t);r=Pe(F,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var A=p(r);o=Pe(A,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),p(o).forEach(s),A.forEach(s),F.forEach(s),f=y(B),n=m(B,"TD",{});var M=p(n);u=m(M,"P",{class:!0,style:!0});var $=p(u);l=J($,"It's valid firmware."),$.forEach(s),M.forEach(s),B.forEach(s),c=y(P),_=m(P,"TR",{});var K=p(_);v.l(K),K.forEach(s),this.h()},h(){d(o,"d","M4.5 12.75l6 6 9-13.5"),d(o,"stroke-linecap","round"),d(o,"stroke-linejoin","round"),d(r,"class","w-16 h-16"),d(r,"aria-hidden","true"),d(r,"fill","none"),d(r,"stroke","currentColor"),d(r,"stroke-width","1.5"),d(r,"viewBox","0 0 24 24"),d(r,"xmlns","http://www.w3.org/2000/svg"),d(u,"class","pl-5"),be(u,"color","red"),be(u,"font-size","18px")},m(P,B){E(P,e,B),a(e,t),a(t,r),a(r,o),a(e,f),a(e,n),a(n,u),a(u,l),E(P,c,B),E(P,_,B),C[b].m(_,null),z=!0},p(P,B){let F=b;b=O(P),b!==F&&(Se(),I(C[F],1,1,()=>{C[F]=null}),Ie(),v=C[b],v||(v=C[b]=oe[b](P),v.c()),S(v,1),v.m(_,null))},i(P){z||(S(v),z=!0)},o(P){I(v),z=!1},d(P){P&&s(e),P&&s(c),P&&s(_),C[b].d()}}}function ct(i){let e,t,r,o;const f=[gt,_t],n=[];function u(l,c){return l[5]==0?0:l[5]==1?1:-1}return~(t=u(i))&&(r=n[t]=f[t](i)),{c(){e=g("tr"),r&&r.c()},l(l){e=m(l,"TR",{});var c=p(e);r&&r.l(c),c.forEach(s)},m(l,c){E(l,e,c),~t&&n[t].m(e,null),o=!0},p(l,c){let _=t;t=u(l),t!==_&&(r&&(Se(),I(n[_],1,1,()=>{n[_]=null}),Ie()),~t?(r=n[t],r||(r=n[t]=f[t](l),r.c()),S(r,1),r.m(e,null)):r=null)},i(l){o||(S(r),o=!0)},o(l){I(r),o=!1},d(l){l&&s(e),~t&&n[t].d()}}}function pt(i){let e,t,r,o,f,n,u;return{c(){e=g("td"),t=ye("svg"),r=ye("path"),o=T(),f=g("td"),n=g("p"),u=H("Device has finished updating. It will redirect to first page automatically for logining again."),this.h()},l(l){e=m(l,"TD",{});var c=p(e);t=Pe(c,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var _=p(t);r=Pe(_,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),p(r).forEach(s),_.forEach(s),c.forEach(s),o=y(l),f=m(l,"TD",{});var b=p(f);n=m(b,"P",{class:!0,style:!0});var v=p(n);u=J(v,"Device has finished updating. It will redirect to first page automatically for logining again."),v.forEach(s),b.forEach(s),this.h()},h(){d(r,"d","M4.5 12.75l6 6 9-13.5"),d(r,"stroke-linecap","round"),d(r,"stroke-linejoin","round"),d(t,"class","w-16 h-16"),d(t,"aria-hidden","true"),d(t,"fill","none"),d(t,"stroke","currentColor"),d(t,"stroke-width","1.5"),d(t,"viewBox","0 0 24 24"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(n,"class","pl-5"),be(n,"color","red"),be(n,"font-size","18px")},m(l,c){E(l,e,c),a(e,t),a(t,r),E(l,o,c),E(l,f,c),a(f,n),a(n,u)},i:ge,o:ge,d(l){l&&s(e),l&&s(o),l&&s(f)}}}function dt(i){let e,t,r,o,f,n,u;return t=new Me({props:{size:16}}),{c(){e=g("td"),x(t.$$.fragment),r=T(),o=g("td"),f=g("p"),n=H("Updating firmware and restart ...."),this.h()},l(l){e=m(l,"TD",{class:!0});var c=p(e);Q(t.$$.fragment,c),c.forEach(s),r=y(l),o=m(l,"TD",{class:!0});var _=p(o);f=m(_,"P",{class:!0,style:!0});var b=p(f);n=J(b,"Updating firmware and restart ...."),b.forEach(s),_.forEach(s),this.h()},h(){d(e,"class","pt-5"),d(f,"class","pl-5"),be(f,"color","red"),be(f,"font-size","18px"),d(o,"class","pt-5")},m(l,c){E(l,e,c),X(t,e,null),E(l,r,c),E(l,o,c),a(o,f),a(f,n),u=!0},i(l){u||(S(t.$$.fragment,l),u=!0)},o(l){I(t.$$.fragment,l),u=!1},d(l){l&&s(e),Y(t),l&&s(r),l&&s(o)}}}function _t(i){let e,t,r,o,f,n,u;return{c(){e=g("td"),t=ye("svg"),r=ye("path"),o=T(),f=g("td"),n=g("p"),u=H("It's invalid firmware, please update valid firmware."),this.h()},l(l){e=m(l,"TD",{});var c=p(e);t=Pe(c,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var _=p(t);r=Pe(_,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),p(r).forEach(s),_.forEach(s),c.forEach(s),o=y(l),f=m(l,"TD",{});var b=p(f);n=m(b,"P",{class:!0,style:!0});var v=p(n);u=J(v,"It's invalid firmware, please update valid firmware."),v.forEach(s),b.forEach(s),this.h()},h(){d(r,"d","M6 18L18 6M6 6l12 12"),d(r,"stroke-linecap","round"),d(r,"stroke-linejoin","round"),d(t,"class","w-16 h-16"),d(t,"aria-hidden","true"),d(t,"fill","none"),d(t,"stroke","currentColor"),d(t,"stroke-width","1.5"),d(t,"viewBox","0 0 24 24"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(n,"class","pl-5"),be(n,"color","red"),be(n,"font-size","18px")},m(l,c){E(l,e,c),a(e,t),a(t,r),E(l,o,c),E(l,f,c),a(f,n),a(n,u)},i:ge,o:ge,d(l){l&&s(e),l&&s(o),l&&s(f)}}}function gt(i){let e,t,r,o,f,n,u;return t=new Me({props:{size:16}}),{c(){e=g("td"),x(t.$$.fragment),r=T(),o=g("td"),f=g("p"),n=H("Verifying firmware now ...."),this.h()},l(l){e=m(l,"TD",{});var c=p(e);Q(t.$$.fragment,c),c.forEach(s),r=y(l),o=m(l,"TD",{});var _=p(o);f=m(_,"P",{class:!0,style:!0});var b=p(f);n=J(b,"Verifying firmware now ...."),b.forEach(s),_.forEach(s),this.h()},h(){d(f,"class","pl-5"),be(f,"color","red"),be(f,"font-size","18px")},m(l,c){E(l,e,c),X(t,e,null),E(l,r,c),E(l,o,c),a(o,f),a(f,n),u=!0},i(l){u||(S(t.$$.fragment,l),u=!0)},o(l){I(t.$$.fragment,l),u=!1},d(l){l&&s(e),Y(t),l&&s(r),l&&s(o)}}}function mt(i){let e,t,r,o,f,n=i[5]==1&&Xe(i);const u=[ct,ut],l=[];function c(_,b){return _[4]==0?0:_[4]==1?1:-1}return~(r=c(i))&&(o=l[r]=u[r](i)),{c(){n&&n.c(),e=T(),t=g("table"),o&&o.c()},l(_){n&&n.l(_),e=y(_),t=m(_,"TABLE",{});var b=p(t);o&&o.l(b),b.forEach(s)},m(_,b){n&&n.m(_,b),E(_,e,b),E(_,t,b),~r&&l[r].m(t,null),f=!0},p(_,b){_[5]==1?n?n.p(_,b):(n=Xe(_),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null);let v=r;r=c(_),r===v?~r&&l[r].p(_,b):(o&&(Se(),I(l[v],1,1,()=>{l[v]=null}),Ie()),~r?(o=l[r],o?o.p(_,b):(o=l[r]=u[r](_),o.c()),S(o,1),o.m(t,null)):o=null)},i(_){f||(S(o),f=!0)},o(_){I(o),f=!1},d(_){n&&n.d(_),_&&s(e),_&&s(t),~r&&l[r].d()}}}function ht(i){let e,t,r,o,f,n,u,l,c,_,b,v,z,oe,C,O,P,B,F,A,M,$,K,ie,j,ue,re,Z,D,U,ee,se,te,R,L,le,he,ne;b=new Oe({props:{$$slots:{default:[ft]},$$scope:{ctx:i}}}),b.$on("click",i[26]);let W=i[2]==0&&xe(),V=i[1]==1&&Qe(i);Z=new Oe({props:{color:"blue",pill:!0,$$slots:{default:[it]},$$scope:{ctx:i}}}),Z.$on("click",i[27]);function De(N){i[30](N)}let Ae={size:"md",class:"w-full",permanent:!0,$$slots:{default:[mt]},$$scope:{ctx:i}};return i[3]!==void 0&&(Ae.open=i[3]),R=new st({props:Ae}),Ne.push(()=>Ce(R,"open",De,i[3])),{c(){e=g("table"),t=g("tr"),r=g("td"),o=g("p"),f=H("Update Local Firmware"),n=T(),u=g("td"),l=g("input"),c=T(),_=g("td"),x(b.$$.fragment),v=T(),z=g("td"),W&&W.c(),oe=T(),C=g("tr"),O=g("td"),P=g("p"),B=H("Enable EW-FOTA"),F=T(),A=g("td"),V&&V.c(),M=T(),$=g("tr"),K=g("td"),ie=T(),j=g("td"),ue=T(),re=g("td"),x(Z.$$.fragment),D=T(),U=g("td"),ee=T(),se=g("td"),te=T(),x(R.$$.fragment),this.h()},l(N){e=m(N,"TABLE",{});var q=p(e);t=m(q,"TR",{});var ce=p(t);r=m(ce,"TD",{class:!0});var h=p(r);o=m(h,"P",{class:!0});var k=p(o);f=J(k,"Update Local Firmware"),k.forEach(s),h.forEach(s),n=y(ce),u=m(ce,"TD",{class:!0});var ae=p(u);l=m(ae,"INPUT",{type:!0,id:!0,class:!0}),ae.forEach(s),c=y(ce),_=m(ce,"TD",{class:!0});var pe=p(_);Q(b.$$.fragment,pe),pe.forEach(s),v=y(ce),z=m(ce,"TD",{class:!0,colspan:!0});var me=p(z);W&&W.l(me),me.forEach(s),ce.forEach(s),oe=y(q),C=m(q,"TR",{});var de=p(C);O=m(de,"TD",{class:!0});var we=p(O);P=m(we,"P",{class:!0});var ke=p(P);B=J(ke,"Enable EW-FOTA"),ke.forEach(s),we.forEach(s),F=y(de),A=m(de,"TD",{class:!0});var ve=p(A);V&&V.l(ve),ve.forEach(s),de.forEach(s),M=y(q),$=m(q,"TR",{class:!0});var _e=p($);K=m(_e,"TD",{}),p(K).forEach(s),ie=y(_e),j=m(_e,"TD",{}),p(j).forEach(s),ue=y(_e),re=m(_e,"TD",{});var Ee=p(re);Q(Z.$$.fragment,Ee),Ee.forEach(s),D=y(_e),U=m(_e,"TD",{}),p(U).forEach(s),ee=y(_e),se=m(_e,"TD",{}),p(se).forEach(s),_e.forEach(s),q.forEach(s),te=y(N),Q(R.$$.fragment,N),this.h()},h(){d(o,"class","pl-10 pt-5 text-lg font-light text-right"),d(r,"class","w-85"),d(l,"type","file"),d(l,"id","FwrUpload"),d(l,"class","block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"),d(u,"class","pl-5 pt-5"),d(_,"class","pl-5 pt-5"),d(z,"class","pl-5 pt-5"),d(z,"colspan","2"),d(P,"class","pl-10 pt-5 text-lg font-light text-right"),d(O,"class","w-85"),d(A,"class","pl-5 pt-5"),d($,"class","pt-5")},m(N,q){E(N,e,q),a(e,t),a(t,r),a(r,o),a(o,f),a(t,n),a(t,u),a(u,l),a(t,c),a(t,_),X(b,_,null),a(t,v),a(t,z),W&&W.m(z,null),a(e,oe),a(e,C),a(C,O),a(O,P),a(P,B),a(C,F),a(C,A),V&&V.m(A,null),a(e,M),a(e,$),a($,K),a($,ie),a($,j),a($,ue),a($,re),X(Z,re,null),a($,D),a($,U),a($,ee),a($,se),E(N,te,q),X(R,N,q),le=!0,he||(ne=Fe(l,"change",i[25]),he=!0)},p(N,q){const ce={};q[1]&16777216&&(ce.$$scope={dirty:q,ctx:N}),b.$set(ce),N[2]==0?W||(W=xe(),W.c(),W.m(z,null)):W&&(W.d(1),W=null),N[1]==1?V?(V.p(N,q),q[0]&2&&S(V,1)):(V=Qe(N),V.c(),S(V,1),V.m(A,null)):V&&(Se(),I(V,1,1,()=>{V=null}),Ie());const h={};q[1]&16777216&&(h.$$scope={dirty:q,ctx:N}),Z.$set(h);const k={};q[0]&112|q[1]&16777216&&(k.$$scope={dirty:q,ctx:N}),!L&&q[0]&8&&(L=!0,k.open=N[3],Re(()=>L=!1)),R.$set(k)},i(N){le||(S(b.$$.fragment,N),S(V),S(Z.$$.fragment,N),S(R.$$.fragment,N),le=!0)},o(N){I(b.$$.fragment,N),I(V),I(Z.$$.fragment,N),I(R.$$.fragment,N),le=!1},d(N){N&&s(e),Y(b),W&&W.d(),V&&V.d(),Y(Z),N&&s(te),Y(R,N),he=!1,ne()}}}function $t(i){let e;return{c(){e=H("IPv4")},l(t){e=J(t,"IPv4")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function bt(i){let e;return{c(){e=H("IPv6")},l(t){e=J(t,"IPv6")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function wt(i){let e;return{c(){e=H("Execute")},l(t){e=J(t,"Execute")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function kt(i){let e,t;return e=new Me({}),{c(){x(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p:ge,i(r){t||(S(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function vt(i){let e,t;return{c(){e=g("pre"),t=H(i[12]),this.h()},l(r){e=m(r,"PRE",{style:!0});var o=p(e);t=J(o,i[12]),o.forEach(s),this.h()},h(){be(e,"white-space","pre-wrap")},m(r,o){E(r,e,o),a(e,t)},p(r,o){o[0]&4096&&je(t,r[12])},i:ge,o:ge,d(r){r&&s(e)}}}function Et(i){let e,t,r,o;const f=[vt,kt],n=[];function u(l,c){return l[15]==0&&l[16]==1?0:l[15]==1&&l[16]==0?1:-1}return~(e=u(i))&&(t=n[e]=f[e](i)),{c(){t&&t.c(),r=Ue()},l(l){t&&t.l(l),r=Ue()},m(l,c){~e&&n[e].m(l,c),E(l,r,c),o=!0},p(l,c){let _=e;e=u(l),e===_?~e&&n[e].p(l,c):(t&&(Se(),I(n[_],1,1,()=>{n[_]=null}),Ie()),~e?(t=n[e],t?t.p(l,c):(t=n[e]=f[e](l),t.c()),S(t,1),t.m(r.parentNode,r)):t=null)},i(l){o||(S(t),o=!0)},o(l){I(t),o=!1},d(l){~e&&n[e].d(l),l&&s(r)}}}function Tt(i){let e,t,r,o,f,n,u,l,c,_,b,v,z,oe,C,O,P,B,F,A,M,$,K,ie,j,ue,re,Z,D,U,ee,se,te,R,L,le,he,ne,W,V,De;function Ae(h){i[31](h)}let N={value:0,$$slots:{default:[$t]},$$scope:{ctx:i}};i[7]!==void 0&&(N.group=i[7]),c=new Ve({props:N}),Ne.push(()=>Ce(c,"group",Ae,i[7]));function q(h){i[32](h)}let ce={value:1,$$slots:{default:[bt]},$$scope:{ctx:i}};return i[7]!==void 0&&(ce.group=i[7]),v=new Ve({props:ce}),Ne.push(()=>Ce(v,"group",q,i[7])),R=new Oe({props:{color:"blue",pill:!0,$$slots:{default:[wt]},$$scope:{ctx:i}}}),R.$on("click",i[24]),ne=new We({props:{class:"text-gray-900",$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){e=g("table"),t=g("tr"),r=g("td"),o=g("p"),f=H("Type"),n=T(),u=g("td"),l=g("div"),x(c.$$.fragment),b=T(),x(v.$$.fragment),oe=T(),C=g("tr"),O=g("td"),P=g("p"),B=H("Host"),F=g("td"),A=g("input"),M=T(),$=g("tr"),K=g("td"),ie=T(),j=g("td"),ue=T(),re=g("td"),Z=T(),D=g("td"),U=T(),ee=g("td"),se=T(),te=g("td"),x(R.$$.fragment),L=T(),le=g("p"),he=T(),x(ne.$$.fragment),this.h()},l(h){e=m(h,"TABLE",{});var k=p(e);t=m(k,"TR",{});var ae=p(t);r=m(ae,"TD",{});var pe=p(r);o=m(pe,"P",{class:!0});var me=p(o);f=J(me,"Type"),me.forEach(s),pe.forEach(s),n=y(ae),u=m(ae,"TD",{class:!0});var de=p(u);l=m(de,"DIV",{class:!0});var we=p(l);Q(c.$$.fragment,we),b=y(we),Q(v.$$.fragment,we),we.forEach(s),de.forEach(s),ae.forEach(s),oe=y(k),C=m(k,"TR",{});var ke=p(C);O=m(ke,"TD",{});var ve=p(O);P=m(ve,"P",{class:!0});var _e=p(P);B=J(_e,"Host"),_e.forEach(s),ve.forEach(s),F=m(ke,"TD",{class:!0});var Ee=p(F);A=m(Ee,"INPUT",{type:!0,class:!0}),Ee.forEach(s),ke.forEach(s),M=y(k),$=m(k,"TR",{});var G=p($);K=m(G,"TD",{}),p(K).forEach(s),ie=y(G),j=m(G,"TD",{}),p(j).forEach(s),ue=y(G),re=m(G,"TD",{}),p(re).forEach(s),Z=y(G),D=m(G,"TD",{}),p(D).forEach(s),U=y(G),ee=m(G,"TD",{}),p(ee).forEach(s),se=y(G),te=m(G,"TD",{class:!0});var w=p(te);Q(R.$$.fragment,w),w.forEach(s),G.forEach(s),k.forEach(s),L=y(h),le=m(h,"P",{class:!0}),p(le).forEach(s),he=y(h),Q(ne.$$.fragment,h),this.h()},h(){d(o,"class","pl-20 pt-4 text-lg font-light text-right"),d(l,"class","flex gap-4"),d(u,"class","pl-5 pt-4"),d(P,"class","pl-20 pt-4 text-lg font-light text-right"),d(A,"type","text"),d(A,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(F,"class","pl-5 pt-5"),d(te,"class","pl-10"),d(le,"class","pt-10")},m(h,k){E(h,e,k),a(e,t),a(t,r),a(r,o),a(o,f),a(t,n),a(t,u),a(u,l),X(c,l,null),a(l,b),X(v,l,null),a(e,oe),a(e,C),a(C,O),a(O,P),a(P,B),a(C,F),a(F,A),Be(A,i[8]),a(e,M),a(e,$),a($,K),a($,ie),a($,j),a($,ue),a($,re),a($,Z),a($,D),a($,U),a($,ee),a($,se),a($,te),X(R,te,null),E(h,L,k),E(h,le,k),E(h,he,k),X(ne,h,k),W=!0,V||(De=Fe(A,"input",i[33]),V=!0)},p(h,k){const ae={};k[1]&16777216&&(ae.$$scope={dirty:k,ctx:h}),!_&&k[0]&128&&(_=!0,ae.group=h[7],Re(()=>_=!1)),c.$set(ae);const pe={};k[1]&16777216&&(pe.$$scope={dirty:k,ctx:h}),!z&&k[0]&128&&(z=!0,pe.group=h[7],Re(()=>z=!1)),v.$set(pe),k[0]&256&&A.value!==h[8]&&Be(A,h[8]);const me={};k[1]&16777216&&(me.$$scope={dirty:k,ctx:h}),R.$set(me);const de={};k[0]&102400|k[1]&16777216&&(de.$$scope={dirty:k,ctx:h}),ne.$set(de)},i(h){W||(S(c.$$.fragment,h),S(v.$$.fragment,h),S(R.$$.fragment,h),S(ne.$$.fragment,h),W=!0)},o(h){I(c.$$.fragment,h),I(v.$$.fragment,h),I(R.$$.fragment,h),I(ne.$$.fragment,h),W=!1},d(h){h&&s(e),Y(c),Y(v),Y(R),h&&s(L),h&&s(le),h&&s(he),Y(ne,h),V=!1,De()}}}function yt(i){let e,t;return{c(){e=g("span"),t=H("Ping"),this.h()},l(r){e=m(r,"SPAN",{slot:!0,class:!0});var o=p(e);t=J(o,"Ping"),o.forEach(s),this.h()},h(){d(e,"slot","header"),d(e,"class","pl-4")},m(r,o){E(r,e,o),a(e,t)},p:ge,d(r){r&&s(e)}}}function Pt(i){let e;return{c(){e=H("IPv4")},l(t){e=J(t,"IPv4")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function Dt(i){let e;return{c(){e=H("IPv6")},l(t){e=J(t,"IPv6")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function At(i){let e;return{c(){e=H("Execute")},l(t){e=J(t,"Execute")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function St(i){let e,t;return e=new Me({}),{c(){x(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p:ge,i(r){t||(S(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function It(i){let e,t;return{c(){e=g("pre"),t=H(i[13]),this.h()},l(r){e=m(r,"PRE",{style:!0});var o=p(e);t=J(o,i[13]),o.forEach(s),this.h()},h(){be(e,"white-space","pre-wrap")},m(r,o){E(r,e,o),a(e,t)},p(r,o){o[0]&8192&&je(t,r[13])},i:ge,o:ge,d(r){r&&s(e)}}}function Nt(i){let e,t,r,o;const f=[It,St],n=[];function u(l,c){return l[19]==0&&l[20]==1?0:l[19]==1&&l[20]==0?1:-1}return~(e=u(i))&&(t=n[e]=f[e](i)),{c(){t&&t.c(),r=Ue()},l(l){t&&t.l(l),r=Ue()},m(l,c){~e&&n[e].m(l,c),E(l,r,c),o=!0},p(l,c){let _=e;e=u(l),e===_?~e&&n[e].p(l,c):(t&&(Se(),I(n[_],1,1,()=>{n[_]=null}),Ie()),~e?(t=n[e],t?t.p(l,c):(t=n[e]=f[e](l),t.c()),S(t,1),t.m(r.parentNode,r)):t=null)},i(l){o||(S(t),o=!0)},o(l){I(t),o=!1},d(l){~e&&n[e].d(l),l&&s(r)}}}function Ct(i){let e,t,r,o,f,n,u,l,c,_,b,v,z,oe,C,O,P,B,F,A,M,$,K,ie,j,ue,re,Z,D,U,ee,se,te,R,L,le,he,ne,W,V,De;function Ae(h){i[34](h)}let N={value:0,$$slots:{default:[Pt]},$$scope:{ctx:i}};i[9]!==void 0&&(N.group=i[9]),c=new Ve({props:N}),Ne.push(()=>Ce(c,"group",Ae,i[9]));function q(h){i[35](h)}let ce={value:1,$$slots:{default:[Dt]},$$scope:{ctx:i}};return i[9]!==void 0&&(ce.group=i[9]),v=new Ve({props:ce}),Ne.push(()=>Ce(v,"group",q,i[9])),R=new Oe({props:{color:"blue",pill:!0,$$slots:{default:[At]},$$scope:{ctx:i}}}),R.$on("click",i[23]),ne=new We({props:{class:"text-gray-900",$$slots:{default:[Nt]},$$scope:{ctx:i}}}),{c(){e=g("table"),t=g("tr"),r=g("td"),o=g("p"),f=H("Type"),n=T(),u=g("td"),l=g("div"),x(c.$$.fragment),b=T(),x(v.$$.fragment),oe=T(),C=g("tr"),O=g("td"),P=g("p"),B=H("Host"),F=g("td"),A=g("input"),M=T(),$=g("tr"),K=g("td"),ie=T(),j=g("td"),ue=T(),re=g("td"),Z=T(),D=g("td"),U=T(),ee=g("td"),se=T(),te=g("td"),x(R.$$.fragment),L=T(),le=g("p"),he=T(),x(ne.$$.fragment),this.h()},l(h){e=m(h,"TABLE",{});var k=p(e);t=m(k,"TR",{});var ae=p(t);r=m(ae,"TD",{});var pe=p(r);o=m(pe,"P",{class:!0});var me=p(o);f=J(me,"Type"),me.forEach(s),pe.forEach(s),n=y(ae),u=m(ae,"TD",{class:!0});var de=p(u);l=m(de,"DIV",{class:!0});var we=p(l);Q(c.$$.fragment,we),b=y(we),Q(v.$$.fragment,we),we.forEach(s),de.forEach(s),ae.forEach(s),oe=y(k),C=m(k,"TR",{});var ke=p(C);O=m(ke,"TD",{});var ve=p(O);P=m(ve,"P",{class:!0});var _e=p(P);B=J(_e,"Host"),_e.forEach(s),ve.forEach(s),F=m(ke,"TD",{class:!0});var Ee=p(F);A=m(Ee,"INPUT",{type:!0,class:!0}),Ee.forEach(s),ke.forEach(s),M=y(k),$=m(k,"TR",{});var G=p($);K=m(G,"TD",{}),p(K).forEach(s),ie=y(G),j=m(G,"TD",{}),p(j).forEach(s),ue=y(G),re=m(G,"TD",{}),p(re).forEach(s),Z=y(G),D=m(G,"TD",{}),p(D).forEach(s),U=y(G),ee=m(G,"TD",{}),p(ee).forEach(s),se=y(G),te=m(G,"TD",{class:!0});var w=p(te);Q(R.$$.fragment,w),w.forEach(s),G.forEach(s),k.forEach(s),L=y(h),le=m(h,"P",{class:!0}),p(le).forEach(s),he=y(h),Q(ne.$$.fragment,h),this.h()},h(){d(o,"class","pl-20 pt-4 text-lg font-light text-right"),d(l,"class","flex gap-4"),d(u,"class","pl-5 pt-4"),d(P,"class","pl-20 pt-4 text-lg font-light text-right"),d(A,"type","text"),d(A,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(F,"class","pl-5 pt-5"),d(te,"class","pl-10"),d(le,"class","pt-10")},m(h,k){E(h,e,k),a(e,t),a(t,r),a(r,o),a(o,f),a(t,n),a(t,u),a(u,l),X(c,l,null),a(l,b),X(v,l,null),a(e,oe),a(e,C),a(C,O),a(O,P),a(P,B),a(C,F),a(F,A),Be(A,i[10]),a(e,M),a(e,$),a($,K),a($,ie),a($,j),a($,ue),a($,re),a($,Z),a($,D),a($,U),a($,ee),a($,se),a($,te),X(R,te,null),E(h,L,k),E(h,le,k),E(h,he,k),X(ne,h,k),W=!0,V||(De=Fe(A,"input",i[36]),V=!0)},p(h,k){const ae={};k[1]&16777216&&(ae.$$scope={dirty:k,ctx:h}),!_&&k[0]&512&&(_=!0,ae.group=h[9],Re(()=>_=!1)),c.$set(ae);const pe={};k[1]&16777216&&(pe.$$scope={dirty:k,ctx:h}),!z&&k[0]&512&&(z=!0,pe.group=h[9],Re(()=>z=!1)),v.$set(pe),k[0]&1024&&A.value!==h[10]&&Be(A,h[10]);const me={};k[1]&16777216&&(me.$$scope={dirty:k,ctx:h}),R.$set(me);const de={};k[0]&1581056|k[1]&16777216&&(de.$$scope={dirty:k,ctx:h}),ne.$set(de)},i(h){W||(S(c.$$.fragment,h),S(v.$$.fragment,h),S(R.$$.fragment,h),S(ne.$$.fragment,h),W=!0)},o(h){I(c.$$.fragment,h),I(v.$$.fragment,h),I(R.$$.fragment,h),I(ne.$$.fragment,h),W=!1},d(h){h&&s(e),Y(c),Y(v),Y(R),h&&s(L),h&&s(le),h&&s(he),Y(ne,h),V=!1,De()}}}function Rt(i){let e,t;return{c(){e=g("span"),t=H("Traceroute"),this.h()},l(r){e=m(r,"SPAN",{slot:!0,class:!0});var o=p(e);t=J(o,"Traceroute"),o.forEach(s),this.h()},h(){d(e,"slot","header"),d(e,"class","pl-4")},m(r,o){E(r,e,o),a(e,t)},p:ge,d(r){r&&s(e)}}}function Bt(i){let e;return{c(){e=H("Execute")},l(t){e=J(t,"Execute")},m(t,r){E(t,e,r)},d(t){t&&s(e)}}}function Ut(i){let e,t;return e=new Me({}),{c(){x(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p:ge,i(r){t||(S(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ot(i){let e,t;return{c(){e=g("pre"),t=H(i[14]),this.h()},l(r){e=m(r,"PRE",{style:!0});var o=p(e);t=J(o,i[14]),o.forEach(s),this.h()},h(){be(e,"white-space","pre-wrap")},m(r,o){E(r,e,o),a(e,t)},p(r,o){o[0]&16384&&je(t,r[14])},i:ge,o:ge,d(r){r&&s(e)}}}function Ft(i){let e,t,r,o;const f=[Ot,Ut],n=[];function u(l,c){return l[17]==0&&l[18]==1?0:l[17]==1&&l[18]==0?1:-1}return~(e=u(i))&&(t=n[e]=f[e](i)),{c(){t&&t.c(),r=Ue()},l(l){t&&t.l(l),r=Ue()},m(l,c){~e&&n[e].m(l,c),E(l,r,c),o=!0},p(l,c){let _=e;e=u(l),e===_?~e&&n[e].p(l,c):(t&&(Se(),I(n[_],1,1,()=>{n[_]=null}),Ie()),~e?(t=n[e],t?t.p(l,c):(t=n[e]=f[e](l),t.c()),S(t,1),t.m(r.parentNode,r)):t=null)},i(l){o||(S(t),o=!0)},o(l){I(t),o=!1},d(l){~e&&n[e].d(l),l&&s(r)}}}function Mt(i){let e,t,r,o,f,n,u,l,c,_,b,v,z,oe,C,O,P,B,F,A,M,$,K,ie,j,ue,re,Z;return M=new Oe({props:{color:"blue",pill:!0,$$slots:{default:[Bt]},$$scope:{ctx:i}}}),M.$on("click",i[22]),j=new We({props:{class:"text-gray-900",$$slots:{default:[Ft]},$$scope:{ctx:i}}}),{c(){e=g("table"),t=g("tr"),r=g("td"),o=g("p"),f=H("Host"),n=g("td"),u=g("input"),l=T(),c=g("tr"),_=g("td"),b=T(),v=g("td"),z=T(),oe=g("td"),C=T(),O=g("td"),P=T(),B=g("td"),F=T(),A=g("td"),x(M.$$.fragment),$=T(),K=g("p"),ie=T(),x(j.$$.fragment),this.h()},l(D){e=m(D,"TABLE",{});var U=p(e);t=m(U,"TR",{});var ee=p(t);r=m(ee,"TD",{});var se=p(r);o=m(se,"P",{class:!0});var te=p(o);f=J(te,"Host"),te.forEach(s),se.forEach(s),n=m(ee,"TD",{class:!0});var R=p(n);u=m(R,"INPUT",{type:!0,class:!0}),R.forEach(s),ee.forEach(s),l=y(U),c=m(U,"TR",{});var L=p(c);_=m(L,"TD",{}),p(_).forEach(s),b=y(L),v=m(L,"TD",{}),p(v).forEach(s),z=y(L),oe=m(L,"TD",{}),p(oe).forEach(s),C=y(L),O=m(L,"TD",{}),p(O).forEach(s),P=y(L),B=m(L,"TD",{}),p(B).forEach(s),F=y(L),A=m(L,"TD",{class:!0});var le=p(A);Q(M.$$.fragment,le),le.forEach(s),L.forEach(s),U.forEach(s),$=y(D),K=m(D,"P",{class:!0}),p(K).forEach(s),ie=y(D),Q(j.$$.fragment,D),this.h()},h(){d(o,"class","pl-20 pt-4 text-lg font-light text-right"),d(u,"type","text"),d(u,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(n,"class","pl-5 pt-5"),d(A,"class","pl-10"),d(K,"class","pt-10")},m(D,U){E(D,e,U),a(e,t),a(t,r),a(r,o),a(o,f),a(t,n),a(n,u),Be(u,i[11]),a(e,l),a(e,c),a(c,_),a(c,b),a(c,v),a(c,z),a(c,oe),a(c,C),a(c,O),a(c,P),a(c,B),a(c,F),a(c,A),X(M,A,null),E(D,$,U),E(D,K,U),E(D,ie,U),X(j,D,U),ue=!0,re||(Z=Fe(u,"input",i[37]),re=!0)},p(D,U){U[0]&2048&&u.value!==D[11]&&Be(u,D[11]);const ee={};U[1]&16777216&&(ee.$$scope={dirty:U,ctx:D}),M.$set(ee);const se={};U[0]&409600|U[1]&16777216&&(se.$$scope={dirty:U,ctx:D}),j.$set(se)},i(D){ue||(S(M.$$.fragment,D),S(j.$$.fragment,D),ue=!0)},o(D){I(M.$$.fragment,D),I(j.$$.fragment,D),ue=!1},d(D){D&&s(e),Y(M),D&&s($),D&&s(K),D&&s(ie),Y(j,D),re=!1,Z()}}}function Lt(i){let e,t;return{c(){e=g("span"),t=H("Nslookup"),this.h()},l(r){e=m(r,"SPAN",{slot:!0,class:!0});var o=p(e);t=J(o,"Nslookup"),o.forEach(s),this.h()},h(){d(e,"slot","header"),d(e,"class","pl-4")},m(r,o){E(r,e,o),a(e,t)},p:ge,d(r){r&&s(e)}}}function Vt(i){let e,t,r,o,f,n;return e=new ze({props:{defaultClass:Je,$$slots:{header:[yt],default:[Tt]},$$scope:{ctx:i}}}),r=new ze({props:{defaultClass:Je,$$slots:{header:[Rt],default:[Ct]},$$scope:{ctx:i}}}),f=new ze({props:{defaultClass:Je,$$slots:{header:[Lt],default:[Mt]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment),t=T(),x(r.$$.fragment),o=T(),x(f.$$.fragment)},l(u){Q(e.$$.fragment,u),t=y(u),Q(r.$$.fragment,u),o=y(u),Q(f.$$.fragment,u)},m(u,l){X(e,u,l),E(u,t,l),X(r,u,l),E(u,o,l),X(f,u,l),n=!0},p(u,l){const c={};l[0]&102784|l[1]&16777216&&(c.$$scope={dirty:l,ctx:u}),e.$set(c);const _={};l[0]&1582592|l[1]&16777216&&(_.$$scope={dirty:l,ctx:u}),r.$set(_);const b={};l[0]&411648|l[1]&16777216&&(b.$$scope={dirty:l,ctx:u}),f.$set(b)},i(u){n||(S(e.$$.fragment,u),S(r.$$.fragment,u),S(f.$$.fragment,u),n=!0)},o(u){I(e.$$.fragment,u),I(r.$$.fragment,u),I(f.$$.fragment,u),n=!1},d(u){Y(e,u),u&&s(t),Y(r,u),u&&s(o),Y(f,u)}}}function zt(i){let e,t;return e=new lt({props:{$$slots:{default:[Vt]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const f={};o[0]&2097024|o[1]&16777216&&(f.$$scope={dirty:o,ctx:r}),e.$set(f)},i(r){t||(S(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function Ht(i){let e,t,r,o;return e=new qe({props:{open:!0,title:"Firmware",$$slots:{default:[ht]},$$scope:{ctx:i}}}),r=new qe({props:{title:"Diagnostic",$$slots:{default:[zt]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment),t=T(),x(r.$$.fragment)},l(f){Q(e.$$.fragment,f),t=y(f),Q(r.$$.fragment,f)},m(f,n){X(e,f,n),E(f,t,n),X(r,f,n),o=!0},p(f,n){const u={};n[0]&127|n[1]&16777216&&(u.$$scope={dirty:n,ctx:f}),e.$set(u);const l={};n[0]&2097024|n[1]&16777216&&(l.$$scope={dirty:n,ctx:f}),r.$set(l)},i(f){o||(S(e.$$.fragment,f),S(r.$$.fragment,f),o=!0)},o(f){I(e.$$.fragment,f),I(r.$$.fragment,f),o=!1},d(f){Y(e,f),f&&s(t),Y(r,f)}}}function Jt(i){let e,t;return e=new nt({props:{style:"underline",$$slots:{default:[Ht]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){const f={};o[0]&2097151|o[1]&16777216&&(f.$$scope={dirty:o,ctx:r}),e.$set(f)},i(r){t||(S(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}let Je="flex items-center justify-start w-full font-medium text-left group-first:rounded-t-xl";function jt(i,e,t){let r="",o={},f={},n=0,u=[],l=null,c,_=1,b=!1,v=0,z=0,oe,C=0,O=0,P="",B=0,F="",A="",M,$;at.subscribe(w=>{M=w});function K(){t(3,b=!1),t(4,v=0),t(5,z=0)}Ge.subscribe(w=>{r=w}),Ke.subscribe(w=>{u=w}),He.subscribe(w=>{f=w});let ie,j="",ue,re="",Z,D="",U=0,ee=0,se=0,te=0,R=0,L=0;async function le(){const w=await fetch(window.location.origin+"/nsLoOkup",{method:"POST",body:Z});w.status==200?(t(14,D=await w.text()),console.log(D),t(17,se=0),t(18,te=1)):console.log("error nslookup")}function he(){t(17,se=1),t(18,te=0);let w="nslookup "+A;const $e=Array.from(w).map(Te=>Te.charCodeAt(0));let fe=new Uint8Array($e);Z=new Uint8Array(fe.length+$.length),Z.set($,0),Z.set(fe,$.length),le()}async function ne(){const w=await fetch(window.location.origin+"/TraceroutehoST",{method:"POST",body:ue});w.status==200?(t(13,re=await w.text()),console.log(re),t(19,R=0),t(20,L=1)):console.log("error traceroute")}function W(){t(19,R=1),t(20,L=0);let w="traceroute -q 1";B==0?w+=" -w 1 -n -4 "+F:B==1?w+="-w 3 -n -6 "+F:console.log("error input of traceroute");const $e=Array.from(w).map(Te=>Te.charCodeAt(0));let fe=new Uint8Array($e);ue=new Uint8Array(fe.length+$.length),ue.set($,0),ue.set(fe,$.length),ne()}async function V(){const w=await fetch(window.location.origin+"/pingHoSt",{method:"POST",body:ie});w.status==200?(t(12,j=await w.text()),console.log(j),t(15,U=0),t(16,ee=1)):(console.log("error ping"),t(15,U=0),t(16,ee=1))}function De(){t(15,U=1),t(16,ee=0);let w="ping -c 5";O==0?w+=" -W 1 -4 "+P:O==1?w+="-6 "+P:console.log("error input of ping");const $e=Array.from(w).map(Te=>Te.charCodeAt(0));let fe=new Uint8Array($e);ie=new Uint8Array(fe.length+$.length),ie.set($,0),ie.set(fe,$.length),V()}async function Ae(w){const $e=w.target.files[0];if($e){if(_==0&&t(2,_=1),l=$e,M){const Le=M.match(/.{1,2}/g).map(Ye=>parseInt(Ye,16));$=new Uint8Array(Le)}const fe=new FileReader;fe.onload=Te=>{const Le=new Uint8Array(Te.target.result);c=new Uint8Array(Le.length+$.length),c.set($,0),c.set(Le,$.length)},fe.readAsArrayBuffer($e)}}function N(){fetch(window.location.origin).then(w=>{w.status===200?(console.log("Ping successful"),t(6,C=1),clearInterval(oe),setTimeout(()=>{window.location.href=window.location.origin},3e3)):console.log("Ping failed. Retrying...")}).catch(w=>{console.error("Ping failed:",w)})}async function q(){l&&(t(2,_=0),c[$.length]==65&&c[$.length+1]==80&&c[$.length+2]==118&&c[$.length+3]==50?(console.log("is APv2!"),t(2,_=1)):(console.log("is not APv2"),t(2,_=0)),_==1&&(t(3,b=!0),(await fetch(window.location.origin+"/updateFwr",{method:"POST",body:c,headers:{"Content-Type":"application/octet-stream"}})).status==200?(t(4,v=1),console.log("200 Valid Fwr, updating..."),oe=setInterval(N,5e3)):(t(2,_=0),t(5,z=1))))}function ce(w,$e){for(const fe in w)if(typeof w[fe]=="object"&&typeof $e[fe]=="object")ce(w[fe],$e[fe]);else if(w[fe]!=$e[fe]){let Te="Value of "+fe+" has changed to "+w[fe];u=[...u,Te]}}function h(){console.log(`Save Maintenance Setting\r
`),u.length!=0&&(u=[]),ce(o,r),Ke.set(u),f=JSON.parse(JSON.stringify(o)),He.set(f),console.log(u)}function k(){console.log("EW_FOTA_CHACK()"),console.log(o.config.system_maintenance.fotaEn),o.config.system_maintenance.fotaEn?t(0,o.config.system_maintenance.fotaEn=1,o):t(0,o.config.system_maintenance.fotaEn=0,o)}async function ae(){const w=await fetch(window.location.origin+"/getMaintenanceData",{method:"POST",body:$});w.status==200&&(r=await w.json(),console.log(r),Ge.set(r),t(0,o=JSON.parse(JSON.stringify(r))),f=JSON.parse(JSON.stringify(r)),He.set(f),console.log(o.config.system_maintenance.fotaEn),t(1,n=1))}rt(()=>{if(console.log("maintenance sessionid: "),console.log(M),M&&r==""){const $e=M.match(/.{1,2}/g).map(fe=>parseInt(fe,16));$=new Uint8Array($e),ae()}else M&&r!=""&&(u.length==0?t(0,o=JSON.parse(JSON.stringify(r))):t(0,o=JSON.parse(JSON.stringify(f))),t(1,n=1))});function pe(w){i.$$.not_equal(o.config.system_maintenance.fotaEn,w)&&(o.config.system_maintenance.fotaEn=w,t(0,o))}function me(w){b=w,t(3,b)}function de(w){O=w,t(7,O)}function we(w){O=w,t(7,O)}function ke(){P=this.value,t(8,P)}function ve(w){B=w,t(9,B)}function _e(w){B=w,t(9,B)}function Ee(){F=this.value,t(10,F)}function G(){A=this.value,t(11,A)}return[o,n,_,b,v,z,C,O,P,B,F,A,j,re,D,U,ee,se,te,R,L,K,he,W,De,Ae,q,h,k,pe,me,de,we,ke,ve,_e,Ee,G]}class ar extends Ze{constructor(e){super(),et(this,e,jt,Jt,tt,{},null,[-1,-1])}}export{ar as default};
