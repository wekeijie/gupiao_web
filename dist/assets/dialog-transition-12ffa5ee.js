import{y as C,J as y,at as F,aE as u,p as V,cC as f,cD as b,cE as v,cF as A,cG as B}from"./index-5bda1381.js";const D=V({target:Object},"v-dialog-transition"),q=C()({name:"VDialogTransition",props:D(),setup(g,i){let{slots:e}=i;const o={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,h){var c;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:s,y:a,sx:p,sy:l,speed:r}=x(g.target,t),d=f(t,[{transform:`translate(${s}px, ${a}px) scale(${p}, ${l})`,opacity:0},{}],{duration:225*r,easing:b});(c=w(t))==null||c.forEach(n=>{f(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:v})}),d.finished.then(()=>h())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,h){var c;await new Promise(n=>requestAnimationFrame(n));const{x:s,y:a,sx:p,sy:l,speed:r}=x(g.target,t);f(t,[{},{transform:`translate(${s}px, ${a}px) scale(${p}, ${l})`,opacity:0}],{duration:125*r,easing:A}).finished.then(()=>h()),(c=w(t))==null||c.forEach(n=>{f(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:v})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>g.target?y(u,F({name:"dialog-transition"},o,{css:!1}),e):y(u,{name:"dialog-transition"},e)}});function w(g){var e;const i=(e=g.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return i&&[...i]}function x(g,i){const e=g.getBoundingClientRect(),o=B(i),[t,h]=getComputedStyle(i).transformOrigin.split(" ").map($=>parseFloat($)),[s,a]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let p=e.left+e.width/2;s==="left"||a==="left"?p-=e.width/2:(s==="right"||a==="right")&&(p+=e.width/2);let l=e.top+e.height/2;s==="top"||a==="top"?l-=e.height/2:(s==="bottom"||a==="bottom")&&(l+=e.height/2);const r=e.width/o.width,d=e.height/o.height,c=Math.max(1,r,d),n=r/c||0,E=d/c||0,m=o.width*o.height/(window.innerWidth*window.innerHeight),P=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:p-(t+o.left),y:l-(h+o.top),sx:n,sy:E,speed:P}}export{q as V};