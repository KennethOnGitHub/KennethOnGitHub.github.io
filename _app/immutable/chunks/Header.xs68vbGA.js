import{s as B,n as I,f as L}from"./scheduler.Cv2zyRbU.js";import{S as F,i as M,e as p,l as C,s as q,c as E,b as A,g as O,m as j,f as u,a as w,h as m,j as b,n as v,o as R,A as T,v as D}from"./index.CA4fKzjw.js";function K(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function N(t,e,l){const n=t.slice();return n[3]=e[l],n[5]=l,n}function U(t){let e,l;return{c(){e=p("span"),l=C("|"),this.h()},l(n){e=E(n,"SPAN",{class:!0});var f=A(e);l=j(f,"|"),f.forEach(u),this.h()},h(){m(e,"class",L(t[5]==t[2]||t[5]==t[2]-1?"highlight":"nohighlight")+" svelte-1e49d39")},m(n,f){b(n,e,f),v(e,l)},p:I,d(n){n&&u(e)}}}function V(t){let e,l,n=t[3]+"",f,d,r,_,o=t[5]<t[1].length-1&&U(t);return{c(){e=p("li"),l=p("a"),f=C(n),r=q(),o&&o.c(),_=D(),this.h()},l(s){e=E(s,"LI",{});var c=A(e);l=E(c,"A",{href:!0,class:!0});var h=A(l);f=j(h,n),h.forEach(u),c.forEach(u),r=w(s),o&&o.l(s),_=D(),this.h()},h(){m(l,"href","../"+t[3].toLowerCase()),m(l,"class",d=L(t[0]==t[3]?"highlight":"nohighlight")+" svelte-1e49d39")},m(s,c){b(s,e,c),v(e,l),v(l,f),b(s,r,c),o&&o.m(s,c),b(s,_,c)},p(s,c){c&1&&d!==(d=L(s[0]==s[3]?"highlight":"nohighlight")+" svelte-1e49d39")&&m(l,"class",d),s[5]<s[1].length-1&&o.p(s,c)},d(s){s&&(u(e),u(r),u(_)),o&&o.d(s)}}}function k(t){let e,l,n,f="Ken Knight",d,r,_,o,s,c=K(t[1]),h=[];for(let i=0;i<c.length;i+=1)h[i]=V(N(t,c,i));return{c(){e=p("header"),l=p("div"),n=p("a"),n.textContent=f,d=C("/"),r=C(t[0]),_=q(),o=p("nav"),s=p("ul");for(let i=0;i<h.length;i+=1)h[i].c();this.h()},l(i){e=E(i,"HEADER",{class:!0});var g=A(e);l=E(g,"DIV",{class:!0});var a=A(l);n=E(a,"A",{href:!0,class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1ht7jlc"&&(n.textContent=f),d=j(a,"/"),r=j(a,t[0]),a.forEach(u),_=w(g),o=E(g,"NAV",{});var P=A(o);s=E(P,"UL",{class:!0});var S=A(s);for(let H=0;H<h.length;H+=1)h[H].l(S);S.forEach(u),P.forEach(u),g.forEach(u),this.h()},h(){m(n,"href","../"),m(n,"class","svelte-1e49d39"),m(l,"class","pageTitle svelte-1e49d39"),m(s,"class","svelte-1e49d39"),m(e,"class","svelte-1e49d39")},m(i,g){b(i,e,g),v(e,l),v(l,n),v(l,d),v(l,r),v(e,_),v(e,o),v(o,s);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(s,null)},p(i,[g]){if(g&1&&R(r,i[0]),g&7){c=K(i[1]);let a;for(a=0;a<c.length;a+=1){const P=N(i,c,a);h[a]?h[a].p(P,g):(h[a]=V(P),h[a].c(),h[a].m(s,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=c.length}},i:I,o:I,d(i){i&&u(e),T(h,i)}}}function z(t,e,l){const n=["Me","Projects","Blog","Contact","Fashion"];let{currentPage:f}=e;const d=n.indexOf(f);return t.$$set=r=>{"currentPage"in r&&l(0,f=r.currentPage)},[f,n,d]}class Q extends F{constructor(e){super(),M(this,e,z,k,B,{currentPage:0})}}export{Q as H};