import{s as x,n as H,h as I}from"./scheduler.CYfyUK1j.js";import{S as B,i as F,e as p,l as b,s as V,c as E,b as q,g as M,m as C,f as u,a as w,h as m,j as P,n as v,o as O,A as R,v as S}from"./index.TSuhCrol.js";function D(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function K(t,e,l){const a=t.slice();return a[3]=e[l],a[5]=l,a}function T(t){let e,l;return{c(){e=p("span"),l=b("|"),this.h()},l(a){e=E(a,"SPAN",{class:!0});var c=q(e);l=C(c,"|"),c.forEach(u),this.h()},h(){m(e,"class",I(t[5]==t[2]||t[5]==t[2]-1?"highlight":"nohighlight")+" svelte-ox29ql")},m(a,c){P(a,e,c),v(e,l)},p:H,d(a){a&&u(e)}}}function N(t){let e,l,a=t[3]+"",c,g,r,_,f=t[5]<t[1].length-1&&T(t);return{c(){e=p("li"),l=p("a"),c=b(a),r=V(),f&&f.c(),_=S(),this.h()},l(s){e=E(s,"LI",{});var o=q(e);l=E(o,"A",{href:!0,class:!0});var h=q(l);c=C(h,a),h.forEach(u),o.forEach(u),r=w(s),f&&f.l(s),_=S(),this.h()},h(){m(l,"href","../"+t[3].toLowerCase()),m(l,"class",g=I(t[0]==t[3]?"highlight":"nohighlight")+" svelte-ox29ql")},m(s,o){P(s,e,o),v(e,l),v(l,c),P(s,r,o),f&&f.m(s,o),P(s,_,o)},p(s,o){o&1&&g!==(g=I(s[0]==s[3]?"highlight":"nohighlight")+" svelte-ox29ql")&&m(l,"class",g),s[5]<s[1].length-1&&f.p(s,o)},d(s){s&&(u(e),u(r),u(_)),f&&f.d(s)}}}function U(t){let e,l,a,c="Ken Knight",g,r,_,f,s,o=D(t[1]),h=[];for(let i=0;i<o.length;i+=1)h[i]=N(K(t,o,i));return{c(){e=p("header"),l=p("div"),a=p("a"),a.textContent=c,g=b("/"),r=b(t[0]),_=V(),f=p("nav"),s=p("ul");for(let i=0;i<h.length;i+=1)h[i].c();this.h()},l(i){e=E(i,"HEADER",{class:!0});var d=q(e);l=E(d,"DIV",{class:!0});var n=q(l);a=E(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(a)!=="svelte-1ht7jlc"&&(a.textContent=c),g=C(n,"/"),r=C(n,t[0]),n.forEach(u),_=w(d),f=E(d,"NAV",{});var A=q(f);s=E(A,"UL",{class:!0});var L=q(s);for(let j=0;j<h.length;j+=1)h[j].l(L);L.forEach(u),A.forEach(u),d.forEach(u),this.h()},h(){m(a,"href","../"),m(a,"class","svelte-ox29ql"),m(l,"class","pageTitle svelte-ox29ql"),m(s,"class","svelte-ox29ql"),m(e,"class","svelte-ox29ql")},m(i,d){P(i,e,d),v(e,l),v(l,a),v(l,g),v(l,r),v(e,_),v(e,f),v(f,s);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(s,null)},p(i,[d]){if(d&1&&O(r,i[0]),d&7){o=D(i[1]);let n;for(n=0;n<o.length;n+=1){const A=K(i,o,n);h[n]?h[n].p(A,d):(h[n]=N(A),h[n].c(),h[n].m(s,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=o.length}},i:H,o:H,d(i){i&&u(e),R(h,i)}}}function k(t,e,l){const a=["Me","Projects","Blog","Contact","Fashion"];let{currentPage:c}=e;const g=a.indexOf(c);return t.$$set=r=>{"currentPage"in r&&l(0,c=r.currentPage)},[c,a,g]}class J extends B{constructor(e){super(),F(this,e,k,U,x,{currentPage:0})}}export{J as H,D as e};
