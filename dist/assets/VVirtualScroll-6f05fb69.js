import{p as R,a as D,i as E,cW as O,a0 as H,w as N,x as h,S as A,az as q,aa as _,q as S,z as Z,cn as $,cV as j,dh as G,cZ as b,a8 as J,cy as K,a9 as Q,t as X,da as Y,y as x,N as ee,di as le,bI as te}from"./index-12b354fd.js";const ae=R({renderless:Boolean,...D()},"VVirtualScrollItem"),ne=E()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ae(),emits:{"update:height":t=>!0},setup(t,a){let{attrs:d,emit:u,slots:c}=a;const{resizeRef:n,contentRect:s}=O(void 0,"border");H(()=>{var r;return(r=s.value)==null?void 0:r.height},r=>{r!=null&&u("update:height",r)}),N(()=>{var r,v;return t.renderless?h(A,null,[(r=c.default)==null?void 0:r.call(c,{itemRef:n})]):h("div",q({ref:n,class:["v-virtual-scroll__item",t.class],style:t.style},d),[(v=c.default)==null?void 0:v.call(c)])})}}),k=-1,B=1,se=R({itemHeight:{type:[Number,String],default:48}},"virtual");function re(t,a,d){const u=_(0),c=_(t.itemHeight),n=S({get:()=>parseInt(c.value??0,10),set(e){c.value=e}}),s=Z(),{resizeRef:r,contentRect:v}=O();$(()=>{r.value=s.value});const I=j(),f=new Map;let p=Array.from({length:a.value.length});const o=S(()=>{const e=(!v.value||s.value===document.documentElement?I.height.value:v.value.height)-((d==null?void 0:d.value)??0);return Math.ceil(e/n.value*1.7+1)});function g(e,l){n.value=Math.max(n.value,l),p[e]=l,f.set(a.value[e],l)}function m(e){return p.slice(0,e).reduce((l,i)=>l+(i||n.value),0)}function y(e){const l=a.value.length;let i=0,V=0;for(;V<e&&i<l;)V+=p[i++]||n.value;return i-1}let T=0;function C(){if(!s.value||!v.value)return;const e=v.value.height-56,l=s.value.scrollTop,i=l<T?k:B,V=y(l+e/2),z=Math.round(o.value/3),w=V-z,M=u.value+z*2-1;i===k&&V<=M?u.value=b(w,0,a.value.length):i===B&&V>=M&&(u.value=b(w,0,a.value.length-o.value)),T=l}function U(e){if(!s.value)return;const l=m(e);s.value.scrollTop=l}const P=S(()=>Math.min(a.value.length,u.value+o.value)),F=S(()=>a.value.slice(u.value,P.value).map((e,l)=>({raw:e,index:l+u.value}))),L=S(()=>m(u.value)),W=S(()=>m(a.value.length)-m(P.value));return H(()=>a.value.length,()=>{p=G(a.value.length).map(()=>n.value),f.forEach((e,l)=>{const i=a.value.indexOf(l);i===-1?f.delete(l):p[i]=e})}),{containerRef:s,computedItems:F,itemHeight:n,paddingTop:L,paddingBottom:W,scrollToIndex:U,handleScroll:C,handleItemResize:g}}const oe=R({items:{type:Array,default:()=>[]},renderless:Boolean,...se(),...D(),...J()},"VVirtualScroll"),ce=E()({name:"VVirtualScroll",props:oe(),setup(t,a){let{slots:d}=a;const u=K("VVirtualScroll"),{dimensionStyles:c}=Q(t),{containerRef:n,handleScroll:s,handleItemResize:r,scrollToIndex:v,paddingTop:I,paddingBottom:f,computedItems:p}=re(t,X(t,"items"));return Y(()=>t.renderless,()=>{ee(()=>{var o;n.value=le(u.vnode.el,!0),(o=n.value)==null||o.addEventListener("scroll",s)}),te(()=>{var o;(o=n.value)==null||o.removeEventListener("scroll",s)})}),N(()=>{const o=p.value.map(g=>h(ne,{key:g.index,renderless:t.renderless,"onUpdate:height":m=>r(g.index,m)},{default:m=>{var y;return(y=d.default)==null?void 0:y.call(d,{item:g.raw,index:g.index,...m})}}));return t.renderless?h(A,null,[h("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:x(I.value)}},null),o,h("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:x(f.value)}},null)]):h("div",{ref:n,class:["v-virtual-scroll",t.class],onScroll:s,style:[c.value,t.style]},[h("div",{class:"v-virtual-scroll__container",style:{paddingTop:x(I.value),paddingBottom:x(f.value)}},[o])])}),{scrollToIndex:v}}});export{ce as V};