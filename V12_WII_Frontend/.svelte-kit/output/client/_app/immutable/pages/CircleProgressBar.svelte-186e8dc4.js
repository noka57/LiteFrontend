import{S as A,i as P,s as w,V as f,W as g,n as d,h as c,p as a,q as v,b as k,I as m,F as p}from"../chunks/index-ce71ce5b.js";function M(i){let e,o;return{c(){e=f("path"),this.h()},l(l){e=g(l,"path",{d:!0,stroke:!0,class:!0}),d(e).forEach(c),this.h()},h(){a(e,"d",o="M"+i[2]+","+i[3]+"A35 35 0 0 0 15.810308878413977 32.51234208777258"),a(e,"stroke","red"),a(e,"class","svelte-j5zem6")},m(l,s){k(l,e,s)},p(l,s){s&12&&o!==(o="M"+l[2]+","+l[3]+"A35 35 0 0 0 15.810308878413977 32.51234208777258")&&a(e,"d",o)},d(l){l&&c(e)}}}function y(i){let e,o,l,s,t=i[0]>80&&M(i);return{c(){e=f("svg"),o=f("path"),l=f("path"),t&&t.c(),this.h()},l(r){e=g(r,"svg",{viewBox:!0,height:!0,width:!0,style:!0});var n=d(e);o=g(n,"path",{d:!0,class:!0}),d(o).forEach(c),l=g(n,"path",{"stroke-width":!0,stroke:!0,d:!0,class:!0}),d(l).forEach(c),t&&t.l(n),n.forEach(c),this.h()},h(){a(o,"d","M50,5A35 35 0 1 1 49.9999 5"),a(o,"class","svelte-j5zem6"),a(l,"stroke-width","20px"),a(l,"stroke",i[1]),a(l,"d",s=i[4]()),a(l,"class","svelte-j5zem6"),a(e,"viewBox","0 0 100 100"),a(e,"height","100%"),a(e,"width","100%"),v(e,"fill","var(--progress-fill, transparent)"),v(e,"stroke-linecap","var(--progress-linecap, line)")},m(r,n){k(r,e,n),m(e,o),m(e,l),t&&t.m(e,null)},p(r,[n]){n&2&&a(l,"stroke",r[1]),n&16&&s!==(s=r[4]())&&a(l,"d",s),r[0]>80?t?t.p(r,n):(t=M(r),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:p,o:p,d(r){r&&c(e),t&&t.d()}}}function I(i,e,o){let l,{value:s=10}=e,{max:t=105}=e,{color:r="currentColor"}=e,n=50,_=5;return i.$$set=h=>{"value"in h&&o(0,s=h.value),"max"in h&&o(5,t=h.max),"color"in h&&o(1,r=h.color)},i.$$.update=()=>{i.$$.dirty&45&&o(4,l=()=>{if(s<=0)return console.log("value <=0"),console.log(s),console.log(t),"";if(s>=t)return console.log("value >=max"),console.log(s),console.log(t),console.log(s>=t),"M50,5A35 35 0 1 1 49.9999 5";{console.log("value < max"),console.log(s),console.log(t);const h=Math.PI*2*(s/t);o(2,n=50+Math.cos(h-Math.PI/2)*35),o(3,_=40+Math.sin(h-Math.PI/2)*35);let u="M50,5";return s<=80?(h>Math.PI&&(u+="A35 35 0 0 1 50 75"),u+=`A35 35 0 0 1 ${n} ${_}`,u):(u+="A35 35 0 0 1 50 75A35 35 0 0 1 15.810308878413977 32.51234208777258",u)}})},[s,r,n,_,l,t]}class C extends A{constructor(e){super(),P(this,e,I,y,w,{value:0,max:5,color:1})}}export{C as default};