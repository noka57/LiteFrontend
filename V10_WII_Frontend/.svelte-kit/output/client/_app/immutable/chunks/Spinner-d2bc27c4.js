import{S,i as E,s as M,V as o,W as c,n as C,h as u,p as a,b as Z,I as d,F as b,D as v,U as y}from"./index-c88a484d.js";import{c as F}from"./Indicator.svelte_svelte_type_style_lang-75445948.js";function _(s){let l,i,t,f;return{c(){l=o("svg"),i=o("path"),t=o("path"),this.h()},l(e){l=c(e,"svg",{role:!0,class:!0,viewBox:!0,fill:!0,xmlns:!0});var r=C(l);i=c(r,"path",{d:!0,fill:!0}),C(i).forEach(u),t=c(r,"path",{d:!0,fill:!0}),C(t).forEach(u),r.forEach(u),this.h()},h(){a(i,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),a(i,"fill",s[2]),a(t,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),a(t,"fill",s[1]),a(l,"role","status"),a(l,"class",f=F("inline -mt-px animate-spin dark:text-gray-600",s[3],s[0],s[4],s[5].class)),a(l,"viewBox","0 0 100 101"),a(l,"fill","none"),a(l,"xmlns","http://www.w3.org/2000/svg")},m(e,r){Z(e,l,r),d(l,i),d(l,t)},p(e,[r]){r&4&&a(i,"fill",e[2]),r&2&&a(t,"fill",e[1]),r&33&&f!==(f=F("inline -mt-px animate-spin dark:text-gray-600",e[3],e[0],e[4],e[5].class))&&a(l,"class",f)},i:b,o:b,d(e){e&&u(l)}}}function x(s,l,i){var m;let{color:t="blue"}=l,{bg:f="text-gray-300"}=l,{size:e="8"}=l,{currentFill:r="currentFill"}=l,{currentColor:h="currentColor"}=l,k=`w-${e} h-${e}`;r!=="currentFill"&&(t=void 0);const g={blue:"fill-blue-600",gray:"fill-gray-600 dark:fill-gray-300",green:"fill-green-500",red:"fill-red-600",yellow:"fill-yellow-400",pink:"fill-pink-600",purple:"fill-purple-600",white:"fill-white"};let z=t===void 0?"":(m=g[t])!=null?m:g.blue;return s.$$set=n=>{i(5,l=v(v({},l),y(n))),"color"in n&&i(6,t=n.color),"bg"in n&&i(0,f=n.bg),"size"in n&&i(7,e=n.size),"currentFill"in n&&i(1,r=n.currentFill),"currentColor"in n&&i(2,h=n.currentColor)},l=y(l),[f,r,h,k,z,l,t,e]}class w extends S{constructor(l){super(),E(this,l,x,_,M,{color:6,bg:0,size:7,currentFill:1,currentColor:2})}}export{w as S};
