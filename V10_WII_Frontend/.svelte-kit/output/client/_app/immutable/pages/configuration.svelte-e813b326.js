import{S as de,i as pe,s as _e,a3 as he,a4 as me,l as m,r as I,a as D,x as H,m as g,n as _,u as L,h as a,c as A,y as Q,p as i,b as E,I as d,z as X,J as ie,a5 as ge,f as R,t as z,C as Y,g as fe,d as ce,V as q,W as J,F as ee,q as S}from"../chunks/index-c88a484d.js";import"../chunks/Indicator.svelte_svelte_type_style_lang-75445948.js";import{B as ne}from"../chunks/Button-b8c9a7c2.js";import{M as be}from"../chunks/Modal-f7c3522f.js";import{S as ue}from"../chunks/Spinner-d2bc27c4.js";import{s as ve}from"../chunks/sessionG-532376c1.js";import"../chunks/Frame-e5a79157.js";import"../chunks/index-172727e1.js";function we(b){let r;return{c(){r=I("Download")},l(e){r=L(e,"Download")},m(e,t){E(e,r,t)},d(e){e&&a(r)}}}function $e(b){let r;return{c(){r=I("Upload")},l(e){r=L(e,"Upload")},m(e,t){E(e,r,t)},d(e){e&&a(r)}}}function ae(b){let r,e,t,n,f,s,u,l;return{c(){r=m("button"),e=m("span"),t=I("Close modal"),n=D(),f=q("svg"),s=q("path"),this.h()},l(c){r=g(c,"BUTTON",{type:!0,class:!0,"aria-label":!0});var o=_(r);e=g(o,"SPAN",{class:!0});var p=_(e);t=L(p,"Close modal"),p.forEach(a),n=A(o),f=J(o,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var w=_(f);s=J(w,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),_(s).forEach(a),w.forEach(a),o.forEach(a),this.h()},h(){i(e,"class","sr-only"),i(s,"fill-rule","evenodd"),i(s,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),i(s,"clip-rule","evenodd"),i(f,"class","w-5 h-5"),i(f,"fill","currentColor"),i(f,"viewBox","0 0 20 20"),i(f,"xmlns","http://www.w3.org/2000/svg"),i(r,"type","button"),i(r,"class","ml-auto focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 absolute top-3 right-2.5"),i(r,"aria-label","Close")},m(c,o){E(c,r,o),d(r,e),d(e,t),d(r,n),d(r,f),d(f,s),u||(l=ie(r,"click",b[3]),u=!0)},p:ee,d(c){c&&a(r),u=!1,l()}}}function ke(b){let r,e,t,n,f,s,u,l,c,o,p,w,U,x,v,y,C;return w=new ue({props:{size:16}}),{c(){r=m("tr"),e=m("td"),t=q("svg"),n=q("path"),f=D(),s=m("td"),u=m("p"),l=I("It's valid configuration."),c=D(),o=m("tr"),p=m("td"),H(w.$$.fragment),U=D(),x=m("td"),v=m("p"),y=I("Applying configuration and restart ...."),this.h()},l(h){r=g(h,"TR",{});var k=_(r);e=g(k,"TD",{});var P=_(e);t=J(P,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var B=_(t);n=J(B,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),_(n).forEach(a),B.forEach(a),P.forEach(a),f=A(k),s=g(k,"TD",{});var j=_(s);u=g(j,"P",{class:!0,style:!0});var F=_(u);l=L(F,"It's valid configuration."),F.forEach(a),j.forEach(a),k.forEach(a),c=A(h),o=g(h,"TR",{});var M=_(o);p=g(M,"TD",{class:!0});var G=_(p);Q(w.$$.fragment,G),G.forEach(a),U=A(M),x=g(M,"TD",{class:!0});var Z=_(x);v=g(Z,"P",{class:!0,style:!0});var K=_(v);y=L(K,"Applying configuration and restart ...."),K.forEach(a),Z.forEach(a),M.forEach(a),this.h()},h(){i(n,"d","M4.5 12.75l6 6 9-13.5"),i(n,"stroke-linecap","round"),i(n,"stroke-linejoin","round"),i(t,"class","w-16 h-16"),i(t,"aria-hidden","true"),i(t,"fill","none"),i(t,"stroke","currentColor"),i(t,"stroke-width","1.5"),i(t,"viewBox","0 0 24 24"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(u,"class","pl-5"),S(u,"color","red"),S(u,"font-size","18px"),i(p,"class","pt-5"),i(v,"class","pl-5"),S(v,"color","red"),S(v,"font-size","18px"),i(x,"class","pt-5")},m(h,k){E(h,r,k),d(r,e),d(e,t),d(t,n),d(r,f),d(r,s),d(s,u),d(u,l),E(h,c,k),E(h,o,k),d(o,p),X(w,p,null),d(o,U),d(o,x),d(x,v),d(v,y),C=!0},p:ee,i(h){C||(R(w.$$.fragment,h),C=!0)},o(h){z(w.$$.fragment,h),C=!1},d(h){h&&a(r),h&&a(c),h&&a(o),Y(w)}}}function ye(b){let r,e,t,n;const f=[Te,Ee],s=[];function u(l,c){return l[2]==0?0:l[2]==1?1:-1}return~(e=u(b))&&(t=s[e]=f[e](b)),{c(){r=m("tr"),t&&t.c()},l(l){r=g(l,"TR",{});var c=_(r);t&&t.l(c),c.forEach(a)},m(l,c){E(l,r,c),~e&&s[e].m(r,null),n=!0},p(l,c){let o=e;e=u(l),e!==o&&(t&&(fe(),z(s[o],1,1,()=>{s[o]=null}),ce()),~e?(t=s[e],t||(t=s[e]=f[e](l),t.c()),R(t,1),t.m(r,null)):t=null)},i(l){n||(R(t),n=!0)},o(l){z(t),n=!1},d(l){l&&a(r),~e&&s[e].d()}}}function Ee(b){let r,e,t,n,f,s,u;return{c(){r=m("td"),e=q("svg"),t=q("path"),n=D(),f=m("td"),s=m("p"),u=I("It's invalid configuration, please upload valid configuration."),this.h()},l(l){r=g(l,"TD",{});var c=_(r);e=J(c,"svg",{class:!0,"aria-hidden":!0,fill:!0,stroke:!0,"stroke-width":!0,viewBox:!0,xmlns:!0});var o=_(e);t=J(o,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),_(t).forEach(a),o.forEach(a),c.forEach(a),n=A(l),f=g(l,"TD",{});var p=_(f);s=g(p,"P",{class:!0,style:!0});var w=_(s);u=L(w,"It's invalid configuration, please upload valid configuration."),w.forEach(a),p.forEach(a),this.h()},h(){i(t,"d","M6 18L18 6M6 6l12 12"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(e,"class","w-16 h-16"),i(e,"aria-hidden","true"),i(e,"fill","none"),i(e,"stroke","currentColor"),i(e,"stroke-width","1.5"),i(e,"viewBox","0 0 24 24"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(s,"class","pl-5"),S(s,"color","red"),S(s,"font-size","18px")},m(l,c){E(l,r,c),d(r,e),d(e,t),E(l,n,c),E(l,f,c),d(f,s),d(s,u)},i:ee,o:ee,d(l){l&&a(r),l&&a(n),l&&a(f)}}}function Te(b){let r,e,t,n,f,s,u;return e=new ue({props:{size:16}}),{c(){r=m("td"),H(e.$$.fragment),t=D(),n=m("td"),f=m("p"),s=I("Verifying configuration now ...."),this.h()},l(l){r=g(l,"TD",{});var c=_(r);Q(e.$$.fragment,c),c.forEach(a),t=A(l),n=g(l,"TD",{});var o=_(n);f=g(o,"P",{class:!0,style:!0});var p=_(f);s=L(p,"Verifying configuration now ...."),p.forEach(a),o.forEach(a),this.h()},h(){i(f,"class","pl-5"),S(f,"color","red"),S(f,"font-size","18px")},m(l,c){E(l,r,c),X(e,r,null),E(l,t,c),E(l,n,c),d(n,f),d(f,s),u=!0},i(l){u||(R(e.$$.fragment,l),u=!0)},o(l){z(e.$$.fragment,l),u=!1},d(l){l&&a(r),Y(e),l&&a(t),l&&a(n)}}}function Ce(b){let r,e,t,n,f,s=b[2]==1&&ae(b);const u=[ye,ke],l=[];function c(o,p){return o[1]==0?0:o[1]==1?1:-1}return~(t=c(b))&&(n=l[t]=u[t](b)),{c(){s&&s.c(),r=D(),e=m("table"),n&&n.c()},l(o){s&&s.l(o),r=A(o),e=g(o,"TABLE",{});var p=_(e);n&&n.l(p),p.forEach(a)},m(o,p){s&&s.m(o,p),E(o,r,p),E(o,e,p),~t&&l[t].m(e,null),f=!0},p(o,p){o[2]==1?s?s.p(o,p):(s=ae(o),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null);let w=t;t=c(o),t===w?~t&&l[t].p(o,p):(n&&(fe(),z(l[w],1,1,()=>{l[w]=null}),ce()),~t?(n=l[t],n?n.p(o,p):(n=l[t]=u[t](o),n.c()),R(n,1),n.m(e,null)):n=null)},i(o){f||(R(n),f=!0)},o(o){z(n),f=!1},d(o){s&&s.d(o),o&&a(r),o&&a(e),~t&&l[t].d()}}}function xe(b){let r,e,t,n,f,s,u,l,c,o,p,w,U,x,v,y,C,h,k,P,B,j,F,M,G;l=new ne({props:{$$slots:{default:[we]},$$scope:{ctx:b}}}),l.$on("click",b[6]),k=new ne({props:{$$slots:{default:[$e]},$$scope:{ctx:b}}}),k.$on("click",b[5]);function Z($){b[7]($)}let K={size:"md",class:"w-full",permanent:!0,$$slots:{default:[Ce]},$$scope:{ctx:b}};return b[0]!==void 0&&(K.open=b[0]),B=new be({props:K}),he.push(()=>me(B,"open",Z,b[0])),{c(){r=m("table"),e=m("tr"),t=m("td"),n=m("p"),f=I("Backup Current Configuration"),s=D(),u=m("td"),H(l.$$.fragment),c=D(),o=m("tr"),p=m("td"),w=m("p"),U=I("Restore Configuration"),x=D(),v=m("td"),y=m("input"),C=D(),h=m("td"),H(k.$$.fragment),P=D(),H(B.$$.fragment),this.h()},l($){r=g($,"TABLE",{});var T=_(r);e=g(T,"TR",{});var O=_(e);t=g(O,"TD",{class:!0});var W=_(t);n=g(W,"P",{class:!0});var N=_(n);f=L(N,"Backup Current Configuration"),N.forEach(a),W.forEach(a),s=A(O),u=g(O,"TD",{class:!0});var te=_(u);Q(l.$$.fragment,te),te.forEach(a),O.forEach(a),c=A(T),o=g(T,"TR",{});var V=_(o);p=g(V,"TD",{class:!0});var re=_(p);w=g(re,"P",{class:!0});var le=_(w);U=L(le,"Restore Configuration"),le.forEach(a),re.forEach(a),x=A(V),v=g(V,"TD",{class:!0});var oe=_(v);y=g(oe,"INPUT",{type:!0,id:!0,class:!0}),oe.forEach(a),C=A(V),h=g(V,"TD",{class:!0});var se=_(h);Q(k.$$.fragment,se),se.forEach(a),V.forEach(a),T.forEach(a),P=A($),Q(B.$$.fragment,$),this.h()},h(){i(n,"class","pl-10 pt-5 text-lg font-light text-right"),i(t,"class","w-85"),i(u,"class","pl-5 pt-5"),i(w,"class","pl-10 pt-5 text-lg font-light text-right"),i(p,"class","w-85"),i(y,"type","file"),i(y,"id","configUpload"),i(y,"class","block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg border !p-0 dark:text-gray-400"),i(v,"class","pl-5 pt-5"),i(h,"class","pl-5 pt-5")},m($,T){E($,r,T),d(r,e),d(e,t),d(t,n),d(n,f),d(e,s),d(e,u),X(l,u,null),d(r,c),d(r,o),d(o,p),d(p,w),d(w,U),d(o,x),d(o,v),d(v,y),d(o,C),d(o,h),X(k,h,null),E($,P,T),X(B,$,T),F=!0,M||(G=ie(y,"change",b[4]),M=!0)},p($,[T]){const O={};T&4096&&(O.$$scope={dirty:T,ctx:$}),l.$set(O);const W={};T&4096&&(W.$$scope={dirty:T,ctx:$}),k.$set(W);const N={};T&4102&&(N.$$scope={dirty:T,ctx:$}),!j&&T&1&&(j=!0,N.open=$[0],ge(()=>j=!1)),B.$set(N)},i($){F||(R(l.$$.fragment,$),R(k.$$.fragment,$),R(B.$$.fragment,$),F=!0)},o($){z(l.$$.fragment,$),z(k.$$.fragment,$),z(B.$$.fragment,$),F=!1},d($){$&&a(r),Y(l),Y(k),$&&a(P),Y(B,$),M=!1,G()}}}function Be(b,r,e){let t=null,n,f,s,u=!1,l=0,c=0;ve.subscribe(v=>{n=v});function o(){e(0,u=!1),e(1,l=0),e(2,c=0)}async function p(v){const y=v.target.files[0];if(y){if(t=y,n){const k=n.match(/.{1,2}/g).map(P=>parseInt(P,16));s=new Uint8Array(k)}const C=new FileReader;C.onload=h=>{const k=new Uint8Array(h.target.result);f=new Uint8Array(k.length+s.length),f.set(s,0),f.set(k,s.length)},C.readAsArrayBuffer(y)}}async function w(){t&&(e(0,u=!0),(await fetch(window.location.origin+"/uploadConfig",{method:"POST",body:f,headers:{"Content-Type":"application/octet-stream"}})).status==200?(e(1,l=1),console.log("200 OK")):e(2,c=1))}async function U(){try{const v=await fetch(window.location.origin+"/downloadConfig",{method:"POST",body:JSON.stringify({sessionid:n})});if(v.status==200){const y=await v.blob(),C="download.config",h=document.createElement("a");h.href=URL.createObjectURL(y),h.download=C,h.style.display="none",document.body.appendChild(h),h.click(),document.body.removeChild(h)}}catch(v){console.error("Error exporting file:",v)}}function x(v){u=v,e(0,u)}return[u,l,c,o,p,w,U,x]}class Me extends de{constructor(r){super(),pe(this,r,Be,xe,_e,{})}}export{Me as default};
