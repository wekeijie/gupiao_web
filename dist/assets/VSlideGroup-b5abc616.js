import{a as H}from"./index-21748244.js";import{p as ee,ag as q,a as te,cU as le,f as oe,g as ne,i as se,am as ae,cV as ie,v as re,ab as x,q as g,cW as D,cX as ue,cY as L,a5 as ce,x as fe,y as h,F as B,cZ as ve}from"./index-5d23612a.js";function de(l){let{selectedElement:n,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=z(v,o),a=U(v,i,o),p=z(v,n),c=$(v,n),S=p*.4;return a>c?c-S:a+d<c+p?c-d+p+S:a}function pe(l){let{selectedElement:n,containerElement:o,isHorizontal:i}=l;const v=z(i,o),d=$(i,n),a=z(i,n);return d-v/2+a/2}function N(l,n){const o=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[o])||0}function he(l,n){const o=l?"clientWidth":"clientHeight";return(n==null?void 0:n[o])||0}function U(l,n,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?n?d-v+i:i:o.scrollTop}function z(l,n){const o=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[o])||0}function $(l,n){const o=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[o])||0}const ge=Symbol.for("vuetify:v-slide-group"),Se=ee({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:q,default:"$next"},prevIcon:{type:q,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...te(),...le({mobile:null}),...oe(),...ne({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),xe=se()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:o}=n;const{isRtl:i}=ae(),{displayClasses:v,mobile:d}=ie(l),a=re(l,l.symbol),p=x(!1),c=x(0),S=x(0),_=x(0),r=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:w}=D(),{resizeRef:f,contentRect:R}=D(),A=ue(),C=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),K=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),Q=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(L){let e=-1;ce(()=>[a.selected.value,w.value,R.value,r.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(w.value&&R.value){const t=r.value?"width":"height";S.value=w.value[t],_.value=R.value[t],p.value=S.value+1<_.value}if(K.value>=0&&f.el){const t=f.el.children[Q.value];O(t,l.centerActive)}})})}const b=x(!1);function O(e,t){let s=0;t?s=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:e}):s=de({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:e}),M(s)}function M(e){if(!L||!u.el)return;const t=z(r.value,u.el),s=U(r.value,i.value,u.el);if(!(N(r.value,u.el)<=t||Math.abs(e-s)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:W}=u.el;e=k-W-e}r.value?A.horizontal(e,C.value):A(e,C.value)}}function X(e){const{scrollTop:t,scrollLeft:s}=e.target;c.value=r.value?s:t}function Y(e){if(b.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const s of f.el.children)if(s===t){O(s);return}}}function Z(e){b.value=!1}let E=!1;function j(e){var t;!E&&!b.value&&!(e.relatedTarget&&((t=f.el)!=null&&t.contains(e.relatedTarget)))&&m(),E=!1}function G(){E=!0}function J(e){if(!f.el)return;function t(s){e.preventDefault(),m(s)}r.value?e.key==="ArrowRight"?t(i.value?"prev":"next"):e.key==="ArrowLeft"&&t(i.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function m(e){var s,y;if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=(s=f.el.querySelector(":focus"))==null?void 0:s.nextElementSibling,!t)return m("first")}else if(e==="prev"){if(t=(y=f.el.querySelector(":focus"))==null?void 0:y.previousElementSibling,!t)return m("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function F(e){const t=r.value&&i.value?-1:1,s=(e==="prev"?-t:t)*S.value;let y=c.value+s;if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:W}=u.el;y+=k-W}M(y)}const T=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),I=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),P=g(()=>Math.abs(c.value)>1),V=g(()=>{if(!u.value)return!1;const e=N(r.value,u.el),t=he(r.value,u.el);return e-t-Math.abs(c.value)>1});return fe(()=>h(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":I.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:b.value||a.selected.value.length?-1:0,onFocus:j},{default:()=>{var e,t,s;return[I.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!P.value}],onMousedown:G,onClick:()=>P.value&&F("prev")},[((e=o.prev)==null?void 0:e.call(o,T.value))??h(H,null,{default:()=>[h(B,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:X},[h("div",{ref:f,class:"v-slide-group__content",onFocusin:Y,onFocusout:Z,onKeydown:J},[(t=o.default)==null?void 0:t.call(o,T.value)])]),I.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!V.value}],onMousedown:G,onClick:()=>V.value&&F("next")},[((s=o.next)==null?void 0:s.call(o,T.value))??h(H,null,{default:()=>[h(B,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:F,scrollOffset:c,focus:m,hasPrev:P,hasNext:V}}});export{xe as V,Se as m};