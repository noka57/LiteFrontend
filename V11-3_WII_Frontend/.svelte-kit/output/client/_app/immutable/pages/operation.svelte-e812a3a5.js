import{S as Ze,i as xe,s as et,x as X,y as Y,z as j,f as O,t as C,C as G,o as tt,a as k,e as Te,c as S,b as z,h as i,af as _e,a3 as ve,a4 as De,l as p,r as oe,m,n as g,u as re,p as d,I as l,g as Oe,d as Re,a5 as Pe,V as Ue,W as qe,F as ye,a8 as me,J as we,K as ot,q as Ve}from"../chunks/index-7ad2b2c6.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as Ae}from"../chunks/Button-57241b2e.js";import{R as rt}from"../chunks/Radio-bf662703.js";import{F as Ge}from"../chunks/FloatingLabelInput-59198d38.js";import{T as nt}from"../chunks/Toggle-54988e54.js";import{M as Ke}from"../chunks/Modal-4fa17a5d.js";import{S as lt}from"../chunks/Spinner-bf15bb6f.js";import{T as Fe}from"../chunks/TabItem-6579443a.js";import{T as at}from"../chunks/Tabs-5642dc1b.js";import{s as st}from"../chunks/sessionG-88368dfb.js";import{aA as He,O as We,al as Me}from"../chunks/configG-285987ae.js";import"../chunks/Frame-1960f3d8.js";import"../chunks/index-518a8eb8.js";let Xe=36,it="";for(;Xe--;)it+=Xe.toString(36);function Ye(s){let t,e,o;function a(n){s[16](n)}let c={};return s[8].config.system_operation_time.autoSyncTime!==void 0&&(c.checked=s[8].config.system_operation_time.autoSyncTime),t=new nt({props:c}),ve.push(()=>De(t,"checked",a,s[8].config.system_operation_time.autoSyncTime)),t.$on("change",s[13]),{c(){X(t.$$.fragment)},l(n){Y(t.$$.fragment,n)},m(n,$){j(t,n,$),o=!0},p(n,$){const r={};!e&&$[0]&256&&(e=!0,r.checked=n[8].config.system_operation_time.autoSyncTime,Pe(()=>e=!1)),t.$set(r)},i(n){o||(O(t.$$.fragment,n),o=!0)},o(n){C(t.$$.fragment,n),o=!1},d(n){G(t,n)}}}function je(s){let t,e,o,a;const c=[ct,ut],n=[];function $(r,u){return r[8].config.system_operation_time.autoSyncTime?1:0}return t=$(s),e=n[t]=c[t](s),{c(){e.c(),o=Te()},l(r){e.l(r),o=Te()},m(r,u){n[t].m(r,u),z(r,o,u),a=!0},p(r,u){let b=t;t=$(r),t===b?n[t].p(r,u):(Oe(),C(n[b],1,1,()=>{n[b]=null}),Re(),e=n[t],e?e.p(r,u):(e=n[t]=c[t](r),e.c()),O(e,1),e.m(o.parentNode,o))},i(r){a||(O(e),a=!0)},o(r){C(e),a=!1},d(r){n[t].d(r),r&&i(o)}}}function ut(s){let t,e,o,a,c=Ce==0;function n(r){s[20](r)}let $={value:"NTP",$$slots:{default:[mt]},$$scope:{ctx:s}};return s[8].config.system_operation_time.autoSyncTimeParam.type!==void 0&&($.group=s[8].config.system_operation_time.autoSyncTimeParam.type),e=new rt({props:$}),ve.push(()=>De(e,"group",n,s[8].config.system_operation_time.autoSyncTimeParam.type)),{c(){t=k(),X(e.$$.fragment)},l(r){t=S(r),Y(e.$$.fragment,r)},m(r,u){z(r,t,u),j(e,r,u),a=!0},p(r,u){const b={};u[0]&256|u[1]&256&&(b.$$scope={dirty:u,ctx:r}),!o&&u[0]&256&&(o=!0,b.group=r[8].config.system_operation_time.autoSyncTimeParam.type,Pe(()=>o=!1)),e.$set(b)},i(r){a||(O(c),O(e.$$.fragment,r),a=!0)},o(r){C(c),C(e.$$.fragment,r),a=!1},d(r){r&&i(t),G(e,r)}}}function ct(s){let t,e,o,a;const c=[dt,_t],n=[];function $(r,u){return 1}return t=$(),e=n[t]=c[t](s),{c(){e.c(),o=Te()},l(r){e.l(r),o=Te()},m(r,u){n[t].m(r,u),z(r,o,u),a=!0},p(r,u){e.p(r,u)},i(r){a||(O(e),a=!0)},o(r){C(e),a=!1},d(r){n[t].d(r),r&&i(o)}}}function ft(s){let t,e;return t=new Ge({props:{style:"outlined",id:"floating_outlined",name:"floating_outlined",type:"text",label:"NTP Server",disabled:!0}}),{c(){X(t.$$.fragment)},l(o){Y(t.$$.fragment,o)},m(o,a){j(t,o,a),e=!0},p:ye,i(o){e||(O(t.$$.fragment,o),e=!0)},o(o){C(t.$$.fragment,o),e=!1},d(o){G(t,o)}}}function pt(s){let t,e,o;function a(n){s[19](n)}let c={style:"outlined",id:"floating_outlined",name:"floating_outlined",type:"text",label:"NTP Server"};return s[8].config.system_operation_time.autoSyncTimeParam.ntpServer!==void 0&&(c.value=s[8].config.system_operation_time.autoSyncTimeParam.ntpServer),t=new Ge({props:c}),ve.push(()=>De(t,"value",a,s[8].config.system_operation_time.autoSyncTimeParam.ntpServer)),{c(){X(t.$$.fragment)},l(n){Y(t.$$.fragment,n)},m(n,$){j(t,n,$),o=!0},p(n,$){const r={};!e&&$[0]&256&&(e=!0,r.value=n[8].config.system_operation_time.autoSyncTimeParam.ntpServer,Pe(()=>e=!1)),t.$set(r)},i(n){o||(O(t.$$.fragment,n),o=!0)},o(n){C(t.$$.fragment,n),o=!1},d(n){G(t,n)}}}function mt(s){let t,e,o,a,c,n,$;const r=[pt,ft],u=[];function b(y,E){return y[8].config.system_operation_time.autoSyncTimeParam.type=="NTP"?0:1}return c=b(s),n=u[c]=r[c](s),{c(){t=p("p"),e=oe("NTP"),o=k(),a=p("p"),n.c(),this.h()},l(y){t=m(y,"P",{class:!0});var E=g(t);e=re(E,"NTP"),E.forEach(i),o=S(y),a=m(y,"P",{class:!0});var h=g(a);n.l(h),h.forEach(i),this.h()},h(){d(t,"class","text-lg pt-1"),d(a,"class","pl-5")},m(y,E){z(y,t,E),l(t,e),z(y,o,E),z(y,a,E),u[c].m(a,null),$=!0},p(y,E){let h=c;c=b(y),c===h?u[c].p(y,E):(Oe(),C(u[h],1,1,()=>{u[h]=null}),Re(),n=u[c],n?n.p(y,E):(n=u[c]=r[c](y),n.c()),O(n,1),n.m(a,null))},i(y){$||(O(n),$=!0)},o(y){C(n),$=!1},d(y){y&&i(t),y&&i(o),y&&i(a),u[c].d()}}}function _t(s){let t;return{c(){t=p("p")},l(e){t=m(e,"P",{}),g(t).forEach(i)},m(e,o){z(e,t,o)},p:ye,i:ye,o:ye,d(e){e&&i(t)}}}function dt(s){let t,e;return t=new Ae({props:{$$slots:{default:[gt]},$$scope:{ctx:s}}}),t.$on("click",s[17]),{c(){X(t.$$.fragment)},l(o){Y(t.$$.fragment,o)},m(o,a){j(t,o,a),e=!0},p(o,a){const c={};a[1]&256&&(c.$$scope={dirty:a,ctx:o}),t.$set(c)},i(o){e||(O(t.$$.fragment,o),e=!0)},o(o){C(t.$$.fragment,o),e=!1},d(o){G(t,o)}}}function gt(s){let t;return{c(){t=oe("Manually Set Date & Time")},l(e){t=re(e,"Manually Set Date & Time")},m(e,o){z(e,t,o)},d(e){e&&i(t)}}}function bt(s){let t,e,o;return{c(){t=Ue("svg"),e=Ue("path"),o=oe("Save"),this.h()},l(a){t=qe(a,"svg",{class:!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var c=g(t);e=qe(c,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),g(e).forEach(i),c.forEach(i),o=re(a,"Save"),this.h()},h(){d(e,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),d(e,"stroke-linecap","round"),d(e,"stroke-linejoin","round"),d(t,"class","mr-2 -ml-1 w-6 h-6"),d(t,"fill","none"),d(t,"stroke","currentColor"),d(t,"stroke-width","2"),d(t,"viewBox","0 0 24 24"),d(t,"xmlns","http://www.w3.org/2000/svg")},m(a,c){z(a,t,c),l(t,e),z(a,o,c)},p:ye,d(a){a&&i(t),a&&i(o)}}}function ht(s){let t;return{c(){t=oe("Apply")},l(e){t=re(e,"Apply")},m(e,o){z(e,t,o)},d(e){e&&i(t)}}}function $t(s){let t,e,o,a,c,n,$,r,u,b,y,E,h,f,v,w,W,J,x,ee,D,se,te,ie,de,K,B,ue,N,ne,ge,Q,q,ce,V,fe,pe,R,A,be,_,F,T,P,le,Z,ae,$e,he,ke;return ae=new Ae({props:{color:"dark",pill:!0,$$slots:{default:[ht]},$$scope:{ctx:s}}}),{c(){t=p("table"),e=p("tr"),o=p("td"),a=p("input"),c=k(),n=p("td"),$=oe("-"),r=k(),u=p("td"),b=p("input"),y=k(),E=p("td"),h=oe("-"),f=k(),v=p("td"),w=p("input"),W=k(),J=p("td"),x=k(),ee=p("td"),D=p("input"),se=k(),te=p("td"),ie=oe(":"),de=k(),K=p("td"),B=p("input"),ue=k(),N=p("tr"),ne=p("td"),ge=k(),Q=p("td"),q=k(),ce=p("td"),V=k(),fe=p("td"),pe=k(),R=p("td"),A=k(),be=p("td"),_=k(),F=p("td"),T=k(),P=p("td"),le=k(),Z=p("td"),X(ae.$$.fragment),this.h()},l(I){t=m(I,"TABLE",{});var U=g(t);e=m(U,"TR",{});var M=g(e);o=m(M,"TD",{class:!0});var Ne=g(o);a=m(Ne,"INPUT",{type:!0,class:!0}),Ne.forEach(i),c=S(M),n=m(M,"TD",{class:!0});var Se=g(n);$=re(Se,"-"),Se.forEach(i),r=S(M),u=m(M,"TD",{class:!0});var H=g(u);b=m(H,"INPUT",{type:!0,min:!0,max:!0,class:!0}),H.forEach(i),y=S(M),E=m(M,"TD",{class:!0});var Ee=g(E);h=re(Ee,"-"),Ee.forEach(i),f=S(M),v=m(M,"TD",{class:!0});var Ie=g(v);w=m(Ie,"INPUT",{type:!0,min:!0,max:!0,class:!0}),Ie.forEach(i),W=S(M),J=m(M,"TD",{class:!0});var Qe=g(J);Qe.forEach(i),x=S(M),ee=m(M,"TD",{class:!0});var Je=g(ee);D=m(Je,"INPUT",{type:!0,min:!0,max:!0,class:!0}),Je.forEach(i),se=S(M),te=m(M,"TD",{class:!0});var ze=g(te);ie=re(ze,":"),ze.forEach(i),de=S(M),K=m(M,"TD",{class:!0});var Le=g(K);B=m(Le,"INPUT",{type:!0,min:!0,max:!0,class:!0}),Le.forEach(i),M.forEach(i),ue=S(U),N=m(U,"TR",{class:!0});var L=g(N);ne=m(L,"TD",{}),g(ne).forEach(i),ge=S(L),Q=m(L,"TD",{}),g(Q).forEach(i),q=S(L),ce=m(L,"TD",{}),g(ce).forEach(i),V=S(L),fe=m(L,"TD",{}),g(fe).forEach(i),pe=S(L),R=m(L,"TD",{}),g(R).forEach(i),A=S(L),be=m(L,"TD",{}),g(be).forEach(i),_=S(L),F=m(L,"TD",{}),g(F).forEach(i),T=S(L),P=m(L,"TD",{}),g(P).forEach(i),le=S(L),Z=m(L,"TD",{class:!0});var Be=g(Z);Y(ae.$$.fragment,Be),Be.forEach(i),L.forEach(i),U.forEach(i),this.h()},h(){d(a,"type","number"),d(a,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(o,"class","w-24 pl-5 pt-5"),d(n,"class","pl-5 pt-5"),d(b,"type","number"),d(b,"min","1"),d(b,"max","12"),d(b,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(u,"class","w-20 pl-5 pt-5"),d(E,"class","pl-5 pt-5"),d(w,"type","number"),d(w,"min","1"),d(w,"max","31"),d(w,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(v,"class","w-20 pl-5 pt-5"),d(J,"class","pl-16 pt-5"),d(D,"type","number"),d(D,"min","0"),d(D,"max","23"),d(D,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(ee,"class","w-20 pl-5 pt-5"),d(te,"class","pl-5 pt-5"),d(B,"type","number"),d(B,"min","0"),d(B,"max","59"),d(B,"class","bg-blue-50 border border-blue-500 text-blue-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"),d(K,"class","w-20 pl-5 pt-5"),d(Z,"class","pt-10"),d(N,"class","pt-10")},m(I,U){z(I,t,U),l(t,e),l(e,o),l(o,a),me(a,s[3]),l(e,c),l(e,n),l(n,$),l(e,r),l(e,u),l(u,b),me(b,s[4]),l(e,y),l(e,E),l(E,h),l(e,f),l(e,v),l(v,w),me(w,s[5]),l(e,W),l(e,J),l(e,x),l(e,ee),l(ee,D),me(D,s[6]),l(e,se),l(e,te),l(te,ie),l(e,de),l(e,K),l(K,B),me(B,s[7]),l(t,ue),l(t,N),l(N,ne),l(N,ge),l(N,Q),l(N,q),l(N,ce),l(N,V),l(N,fe),l(N,pe),l(N,R),l(N,A),l(N,be),l(N,_),l(N,F),l(N,T),l(N,P),l(N,le),l(N,Z),j(ae,Z,null),$e=!0,he||(ke=[we(a,"input",s[22]),we(b,"input",s[23]),we(w,"input",s[24]),we(D,"input",s[25]),we(B,"input",s[26])],he=!0)},p(I,U){U[0]&8&&_e(a.value)!==I[3]&&me(a,I[3]),U[0]&16&&_e(b.value)!==I[4]&&me(b,I[4]),U[0]&32&&_e(w.value)!==I[5]&&me(w,I[5]),U[0]&64&&_e(D.value)!==I[6]&&me(D,I[6]),U[0]&128&&_e(B.value)!==I[7]&&me(B,I[7]);const M={};U[1]&256&&(M.$$scope={dirty:U,ctx:I}),ae.$set(M)},i(I){$e||(O(ae.$$.fragment,I),$e=!0)},o(I){C(ae.$$.fragment,I),$e=!1},d(I){I&&i(t),G(ae),he=!1,ot(ke)}}}function yt(s){let t,e,o,a,c,n,$,r,u,b,y,E,h,f,v,w,W,J,x,ee,D,se,te,ie,de,K,B,ue,N,ne,ge,Q,q,ce,V,fe,pe,R=s[9]==1&&Ye(s),A=s[9]==1&&je(s),be=Ce==0;q=new Ae({props:{color:"blue",pill:!0,$$slots:{default:[bt]},$$scope:{ctx:s}}}),q.$on("click",s[11]);function _(T){s[27](T)}let F={size:"md",class:"w-full",autoclose:!0,$$slots:{default:[$t]},$$scope:{ctx:s}};return s[0]!==void 0&&(F.open=s[0]),V=new Ke({props:F}),ve.push(()=>De(V,"open",_,s[0])),{c(){t=p("table"),e=p("tr"),o=p("td"),a=p("p"),c=oe("Current Local Date & Time"),n=k(),$=p("td"),r=k(),u=p("tr"),b=p("td"),y=p("p"),E=oe("Automatic Date & Time"),h=p("td"),R&&R.c(),f=k(),v=p("tr"),w=p("td"),W=k(),J=p("td"),A&&A.c(),x=k(),ee=k(),D=p("tr"),se=p("td"),te=k(),ie=p("td"),de=k(),K=p("td"),B=k(),ue=p("td"),N=k(),ne=p("td"),ge=k(),Q=p("td"),X(q.$$.fragment),ce=k(),X(V.$$.fragment),this.h()},l(T){t=m(T,"TABLE",{});var P=g(t);e=m(P,"TR",{});var le=g(e);o=m(le,"TD",{class:!0});var Z=g(o);a=m(Z,"P",{class:!0});var ae=g(a);c=re(ae,"Current Local Date & Time"),ae.forEach(i),Z.forEach(i),n=S(le),$=m(le,"TD",{class:!0});var $e=g($);$e.forEach(i),le.forEach(i),r=S(P),u=m(P,"TR",{});var he=g(u);b=m(he,"TD",{class:!0});var ke=g(b);y=m(ke,"P",{class:!0});var I=g(y);E=re(I,"Automatic Date & Time"),I.forEach(i),ke.forEach(i),h=m(he,"TD",{class:!0});var U=g(h);R&&R.l(U),U.forEach(i),he.forEach(i),f=S(P),v=m(P,"TR",{});var M=g(v);w=m(M,"TD",{class:!0});var Ne=g(w);Ne.forEach(i),W=S(M),J=m(M,"TD",{class:!0});var Se=g(J);A&&A.l(Se),Se.forEach(i),M.forEach(i),x=S(P),ee=S(P),D=m(P,"TR",{class:!0});var H=g(D);se=m(H,"TD",{}),g(se).forEach(i),te=S(H),ie=m(H,"TD",{}),g(ie).forEach(i),de=S(H),K=m(H,"TD",{}),g(K).forEach(i),B=S(H),ue=m(H,"TD",{}),g(ue).forEach(i),N=S(H),ne=m(H,"TD",{}),g(ne).forEach(i),ge=S(H),Q=m(H,"TD",{class:!0});var Ee=g(Q);Y(q.$$.fragment,Ee),Ee.forEach(i),H.forEach(i),ce=S(P),Y(V.$$.fragment,P),P.forEach(i),this.h()},h(){d(a,"class","pl-10 pt-5 text-lg font-light text-right"),d(o,"class","w-85"),d($,"class","pl-5 pt-5"),d(y,"class","pl-10 pt-5 text-lg font-light text-right"),d(b,"class","w-85"),d(h,"class","pl-5 pt-5"),d(w,"class","w-85"),d(J,"class","w-85 pt-5 pl-5"),d(Q,"class","pl-10"),d(D,"class","pt-5")},m(T,P){z(T,t,P),l(t,e),l(e,o),l(o,a),l(a,c),l(e,n),l(e,$),l(t,r),l(t,u),l(u,b),l(b,y),l(y,E),l(u,h),R&&R.m(h,null),l(t,f),l(t,v),l(v,w),l(v,W),l(v,J),A&&A.m(J,null),l(t,x),l(t,ee),l(t,D),l(D,se),l(D,te),l(D,ie),l(D,de),l(D,K),l(D,B),l(D,ue),l(D,N),l(D,ne),l(D,ge),l(D,Q),j(q,Q,null),l(t,ce),j(V,t,null),pe=!0},p(T,P){T[9]==1?R?(R.p(T,P),P[0]&512&&O(R,1)):(R=Ye(T),R.c(),O(R,1),R.m(h,null)):R&&(Oe(),C(R,1,1,()=>{R=null}),Re()),T[9]==1?A?(A.p(T,P),P[0]&512&&O(A,1)):(A=je(T),A.c(),O(A,1),A.m(J,null)):A&&(Oe(),C(A,1,1,()=>{A=null}),Re());const le={};P[1]&256&&(le.$$scope={dirty:P,ctx:T}),q.$set(le);const Z={};P[0]&248|P[1]&256&&(Z.$$scope={dirty:P,ctx:T}),!fe&&P[0]&1&&(fe=!0,Z.open=T[0],Pe(()=>fe=!1)),V.$set(Z)},i(T){pe||(O(R),O(A),O(be),O(q.$$.fragment,T),O(V.$$.fragment,T),pe=!0)},o(T){C(R),C(A),C(be),C(q.$$.fragment,T),C(V.$$.fragment,T),pe=!1},d(T){T&&i(t),R&&R.d(),A&&A.d(),G(q),G(V)}}}function Tt(s){let t;return{c(){t=oe("Reboot")},l(e){t=re(e,"Reboot")},m(e,o){z(e,t,o)},d(e){e&&i(t)}}}function kt(s){let t,e,o,a,c,n,$,r,u;return a=new lt({props:{size:16}}),{c(){t=p("table"),e=p("tr"),o=p("td"),X(a.$$.fragment),c=k(),n=p("td"),$=p("p"),r=oe("Reboot ...."),this.h()},l(b){t=m(b,"TABLE",{});var y=g(t);e=m(y,"TR",{});var E=g(e);o=m(E,"TD",{class:!0});var h=g(o);Y(a.$$.fragment,h),h.forEach(i),c=S(E),n=m(E,"TD",{class:!0});var f=g(n);$=m(f,"P",{class:!0,style:!0});var v=g($);r=re(v,"Reboot ...."),v.forEach(i),f.forEach(i),E.forEach(i),y.forEach(i),this.h()},h(){d(o,"class","pt-5"),d($,"class","pl-5"),Ve($,"color","red"),Ve($,"font-size","18px"),d(n,"class","pt-5")},m(b,y){z(b,t,y),l(t,e),l(e,o),j(a,o,null),l(e,c),l(e,n),l(n,$),l($,r),u=!0},p:ye,i(b){u||(O(a.$$.fragment,b),u=!0)},o(b){C(a.$$.fragment,b),u=!1},d(b){b&&i(t),G(a)}}}function St(s){let t,e,o,a,c,n,$,r,u,b;n=new Ae({props:{color:"dark",pill:!0,$$slots:{default:[Tt]},$$scope:{ctx:s}}}),n.$on("click",s[12]);function y(h){s[28](h)}let E={size:"md",class:"w-full",permanent:!0,$$slots:{default:[kt]},$$scope:{ctx:s}};return s[1]!==void 0&&(E.open=s[1]),r=new Ke({props:E}),ve.push(()=>De(r,"open",y,s[1])),{c(){t=p("table"),e=p("tr"),o=p("td"),a=oe("Reboot Device"),c=p("td"),X(n.$$.fragment),$=k(),X(r.$$.fragment),this.h()},l(h){t=m(h,"TABLE",{});var f=g(t);e=m(f,"TR",{});var v=g(e);o=m(v,"TD",{class:!0});var w=g(o);a=re(w,"Reboot Device"),w.forEach(i),c=m(v,"TD",{class:!0});var W=g(c);Y(n.$$.fragment,W),W.forEach(i),v.forEach(i),$=S(f),Y(r.$$.fragment,f),f.forEach(i),this.h()},h(){d(o,"class","w-65"),d(c,"class","pl-5")},m(h,f){z(h,t,f),l(t,e),l(e,o),l(o,a),l(e,c),j(n,c,null),l(t,$),j(r,t,null),b=!0},p(h,f){const v={};f[1]&256&&(v.$$scope={dirty:f,ctx:h}),n.$set(v);const w={};f[1]&256&&(w.$$scope={dirty:f,ctx:h}),!u&&f[0]&2&&(u=!0,w.open=h[1],Pe(()=>u=!1)),r.$set(w)},i(h){b||(O(n.$$.fragment,h),O(r.$$.fragment,h),b=!0)},o(h){C(n.$$.fragment,h),C(r.$$.fragment,h),b=!1},d(h){h&&i(t),G(n),G(r)}}}function Et(s){let t,e,o,a,c,n;t=new Fe({props:{open:!0,title:"Time",$$slots:{default:[yt]},$$scope:{ctx:s}}}),o=new Fe({props:{title:"Reboot",$$slots:{default:[St]},$$scope:{ctx:s}}});let $=Ce==0;return{c(){X(t.$$.fragment),e=k(),X(o.$$.fragment),a=k(),c=Te()},l(r){Y(t.$$.fragment,r),e=S(r),Y(o.$$.fragment,r),a=S(r),c=Te()},m(r,u){j(t,r,u),z(r,e,u),j(o,r,u),z(r,a,u),z(r,c,u),n=!0},p(r,u){const b={};u[0]&1021|u[1]&256&&(b.$$scope={dirty:u,ctx:r}),t.$set(b);const y={};u[0]&2|u[1]&256&&(y.$$scope={dirty:u,ctx:r}),o.$set(y)},i(r){n||(O(t.$$.fragment,r),O(o.$$.fragment,r),O($),n=!0)},o(r){C(t.$$.fragment,r),C(o.$$.fragment,r),C($),n=!1},d(r){G(t,r),r&&i(e),G(o,r),r&&i(a),r&&i(c)}}}function wt(s){let t,e;return t=new at({props:{style:"underline",$$slots:{default:[Et]},$$scope:{ctx:s}}}),{c(){X(t.$$.fragment)},l(o){Y(t.$$.fragment,o)},m(o,a){j(t,o,a),e=!0},p(o,a){const c={};a[0]&1023|a[1]&256&&(c.$$scope={dirty:a,ctx:o}),t.$set(c)},i(o){e||(O(t.$$.fragment,o),e=!0)},o(o){C(t.$$.fragment,o),e=!1},d(o){G(t,o)}}}let Ce=1;function vt(s,t,e){const o={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};let a=!1,c=!1,n=0,$="",r=2023,u=7,b=26,y=10,E=10,h="",f={},v={},w=[],W=0,J,x;st.subscribe(_=>{J=_});function ee(_){console.log(_.detail.timezone),e(8,f.config.system_operation_time.autoSyncTimeParam.tz=_.detail.timezone,f),_.detail.timezone}He.subscribe(_=>{h=_}),We.subscribe(_=>{w=_}),Me.subscribe(_=>{v=_});function D(_,F){for(const T in _)if(typeof _[T]=="object"&&typeof F[T]=="object")D(_[T],F[T]);else if(_[T]!=F[T]){let P="Value of "+T+" has changed to "+_[T];w=[...w,P]}}function se(){console.log(`Save Operation Setting\r
`),w.length!=0&&(w=[]),D(f,h),We.set(w),v=JSON.parse(JSON.stringify(f)),Me.set(v),console.log(w)}async function te(){(await fetch(window.location.origin+"/PostReboot",{method:"POST",body:x})).status==200&&(console.log(`reboot command sent\r
`),e(1,c=!0))}function ie(){if(J){const F=J.match(/.{1,2}/g).map(T=>parseInt(T,16));x=new Uint8Array(F),te()}}async function de(){const _=await fetch(window.location.origin+"/getOperationData",{method:"POST",body:x});_.status==200&&(h=await _.json(),console.log(h),He.set(h),e(8,f=JSON.parse(JSON.stringify(h))),v=JSON.parse(JSON.stringify(h)),Me.set(v),f.config.system_operation_time.autoSyncTimeParam.tz,e(15,n=f.config.system_operation_time.currTimestamp),e(9,W=1))}function K(){f.config.system_operation_time.autoSyncTime?e(8,f.config.system_operation_time.autoSyncTime=1,f):e(8,f.config.system_operation_time.autoSyncTime=0,f)}function B(){f.config.system_operation_time.autoSyncTimeParam.dstEn?e(8,f.config.system_operation_time.autoSyncTimeParam.dstEn=1,f):e(8,f.config.system_operation_time.autoSyncTimeParam.dstEn=0,f)}tt(()=>{if(console.log("operation sessionid: "),console.log(J),J&&h==""){const F=J.match(/.{1,2}/g).map(T=>parseInt(T,16));x=new Uint8Array(F),de()}else J&&h!=""&&(w.length==0?e(8,f=JSON.parse(JSON.stringify(h))):e(8,f=JSON.parse(JSON.stringify(v))),e(9,W=1))});function ue(_){s.$$.not_equal(f.config.system_operation_time.autoSyncTime,_)&&(f.config.system_operation_time.autoSyncTime=_,e(8,f))}const N=()=>e(0,a=!0);function ne(_){s.$$.not_equal(f.config.system_operation_time.autoSyncTimeParam.type,_)&&(f.config.system_operation_time.autoSyncTimeParam.type=_,e(8,f))}function ge(_){s.$$.not_equal(f.config.system_operation_time.autoSyncTimeParam.ntpServer,_)&&(f.config.system_operation_time.autoSyncTimeParam.ntpServer=_,e(8,f))}function Q(_){s.$$.not_equal(f.config.system_operation_time.autoSyncTimeParam.type,_)&&(f.config.system_operation_time.autoSyncTimeParam.type=_,e(8,f))}function q(_){s.$$.not_equal(f.config.system_operation_time.autoSyncTimeParam.dstEn,_)&&(f.config.system_operation_time.autoSyncTimeParam.dstEn=_,e(8,f))}function ce(){r=_e(this.value),e(3,r),e(15,n)}function V(){u=_e(this.value),e(4,u),e(15,n)}function fe(){b=_e(this.value),e(5,b),e(15,n)}function pe(){y=_e(this.value),e(6,y),e(15,n)}function R(){E=_e(this.value),e(7,E),e(15,n)}function A(_){a=_,e(0,a)}function be(_){c=_,e(1,c)}return s.$$.update=()=>{if(s.$$.dirty[0]&32768){const _=new Date(n*1e3);e(2,$=_.toLocaleString("en-US",o)),e(3,r=_.getFullYear()),e(4,u=_.getMonth()+1),e(5,b=_.getDate()),e(6,y=_.getHours()),e(7,E=_.getMinutes())}},[a,c,$,r,u,b,y,E,f,W,ee,se,ie,K,B,n,ue,N,ne,ge,Q,q,ce,V,fe,pe,R,A,be]}class qt extends Ze{constructor(t){super(),xe(this,t,vt,wt,et,{},null,[-1,-1])}}export{qt as default};