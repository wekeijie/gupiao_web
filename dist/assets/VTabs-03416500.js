import{p as q,cM as re,cN as ce,i as N,aw as ve,q as y,ac as k,z as K,w as U,D as j,x as f,az as D,cO as de,cP as fe,a6 as Q,a as me,f as se,g as ge,a5 as be,cQ as he,s as Se,cR as J,cS as ye,a2 as xe,E as Z,cT as pe,cU as ze,b as Te,as as Ce,l as ke,k as Ve,t as C,v as we,y as Pe}from"./index-3a09e26e.js";import{a as ee}from"./index-80abb354.js";const ne=Symbol.for("vuetify:v-tabs"),Re=q({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...re(ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Me=N()({name:"VTab",props:Re(),setup(e,r){let{slots:n,attrs:c}=r;const{textColorClasses:b,textColorStyles:a}=ve(e,"sliderColor"),o=y(()=>e.direction==="horizontal"),t=k(!1),u=K(),i=K();function v(S){var d,V;let{value:m}=S;if(t.value=m,m){const w=(V=(d=u.value)==null?void 0:d.$el.parentElement)==null?void 0:V.querySelector(".v-tab--selected .v-tab__slider"),E=i.value;if(!w||!E)return;const P=getComputedStyle(w).color,x=w.getBoundingClientRect(),p=E.getBoundingClientRect(),R=o.value?"x":"y",M=o.value?"X":"Y",_=o.value?"right":"bottom",z=o.value?"width":"height",$=x[R],I=p[R],T=$>I?x[_]-p[_]:x[R]-p[R],F=Math.sign(T)>0?o.value?"right":"bottom":Math.sign(T)<0?o.value?"left":"top":"center",g=(Math.abs(T)+(Math.sign(T)<0?x[z]:p[z]))/Math.max(x[z],p[z]),O=x[z]/p[z],A=1.5;de(E,{backgroundColor:[P,"currentcolor"],transform:[`translate${M}(${T}px) scale${M}(${O})`,`translate${M}(${T/A}px) scale${M}(${(g-1)/A+1})`,"none"],transformOrigin:Array(3).fill(F)},{duration:225,easing:fe})}}return U(()=>{const[S]=j.filterProps(e);return f(j,D({symbol:ne,ref:u,class:["v-tab",e.class],style:e.style,tabindex:t.value?0:-1,role:"tab","aria-selected":String(t.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},S,c,{"onGroup:selected":v}),{default:()=>{var m;return[((m=n.default)==null?void 0:m.call(n))??e.text,!e.hideSlider&&f("div",{ref:i,class:["v-tab__slider",b.value],style:a.value},null)]}})}),{}}});function te(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function le(e){let{selectedElement:r,containerSize:n,contentSize:c,isRtl:b,currentScrollOffset:a,isHorizontal:o}=e;const t=o?r.clientWidth:r.clientHeight,u=o?r.offsetLeft:r.offsetTop,i=b&&o?c-u-t:u,v=n+a,S=t+i,m=t*.4;return i<=a?a=Math.max(i-m,0):v<=S&&(a=Math.min(a-(v-S-m),c-n)),a}function $e(e){let{selectedElement:r,containerSize:n,contentSize:c,isRtl:b,isHorizontal:a}=e;const o=a?r.clientWidth:r.clientHeight,t=a?r.offsetLeft:r.offsetTop,u=b&&a?c-t-o/2-n/2:t+o/2-n/2;return Math.min(c-n,Math.max(0,u))}const Be=Symbol.for("vuetify:v-slide-group"),oe=q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Be},nextIcon:{type:Q,default:"$next"},prevIcon:{type:Q,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...me(),...se(),...ge({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ae=N()({name:"VSlideGroup",props:oe(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const{isRtl:c}=be(),{mobile:b}=he(),a=Se(e,e.symbol),o=k(!1),t=k(0),u=k(0),i=k(0),v=y(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:m}=J(),{resizeRef:d,contentRect:V}=J(),w=y(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[0]):-1),E=y(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[a.selected.value.length-1]):-1);if(ye){let l=-1;xe(()=>[a.selected.value,m.value,V.value,v.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(m.value&&V.value){const s=v.value?"width":"height";u.value=m.value[s],i.value=V.value[s],o.value=u.value+1<i.value}if(w.value>=0&&d.value){const s=d.value.children[E.value];w.value===0||!o.value?t.value=0:e.centerActive?t.value=$e({selectedElement:s,containerSize:u.value,contentSize:i.value,isRtl:c.value,isHorizontal:v.value}):o.value&&(t.value=le({selectedElement:s,containerSize:u.value,contentSize:i.value,isRtl:c.value,currentScrollOffset:t.value,isHorizontal:v.value}))}})})}const P=k(!1);let x=0,p=0;function R(l){const s=v.value?"clientX":"clientY";p=(c.value&&v.value?-1:1)*t.value,x=l.touches[0][s],P.value=!0}function M(l){if(!o.value)return;const s=v.value?"clientX":"clientY",h=c.value&&v.value?-1:1;t.value=h*(p+x-l.touches[0][s])}function _(l){const s=i.value-u.value;t.value<0||!o.value?t.value=0:t.value>=s&&(t.value=s),P.value=!1}function z(){S.value&&(S.value[v.value?"scrollLeft":"scrollTop"]=0)}const $=k(!1);function I(l){if($.value=!0,!(!o.value||!d.value)){for(const s of l.composedPath())for(const h of d.value.children)if(h===s){t.value=le({selectedElement:h,containerSize:u.value,contentSize:i.value,isRtl:c.value,currentScrollOffset:t.value,isHorizontal:v.value});return}}}function T(l){$.value=!1}function F(l){var s;!$.value&&!(l.relatedTarget&&((s=d.value)!=null&&s.contains(l.relatedTarget)))&&g()}function X(l){d.value&&(v.value?l.key==="ArrowRight"?g(c.value?"prev":"next"):l.key==="ArrowLeft"&&g(c.value?"next":"prev"):l.key==="ArrowDown"?g("next"):l.key==="ArrowUp"&&g("prev"),l.key==="Home"?g("first"):l.key==="End"&&g("last"))}function g(l){var s,h,Y,L,W;if(d.value)if(!l)(s=pe(d.value)[0])==null||s.focus();else if(l==="next"){const B=(h=d.value.querySelector(":focus"))==null?void 0:h.nextElementSibling;B?B.focus():g("first")}else if(l==="prev"){const B=(Y=d.value.querySelector(":focus"))==null?void 0:Y.previousElementSibling;B?B.focus():g("last")}else l==="first"?(L=d.value.firstElementChild)==null||L.focus():l==="last"&&((W=d.value.lastElementChild)==null||W.focus())}function O(l){const s=t.value+(l==="prev"?-1:1)*u.value;t.value=ze(s,0,i.value-u.value)}const A=y(()=>{let l=t.value>i.value-u.value?-(i.value-u.value)+te(i.value-u.value-t.value):-t.value;t.value<=0&&(l=te(-t.value));const s=c.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${s*l}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),H=y(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),G=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return o.value||Math.abs(t.value)>0;case"mobile":return b.value||o.value||Math.abs(t.value)>0;default:return!b.value&&(o.value||Math.abs(t.value)>0)}}),ie=y(()=>Math.abs(t.value)>0),ue=y(()=>i.value>Math.abs(t.value)+u.value);return U(()=>f(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":G.value,"v-slide-group--is-overflowing":o.value},e.class],style:e.style,tabindex:$.value||a.selected.value.length?-1:0,onFocus:F},{default:()=>{var l,s,h;return[G.value&&f("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ie.value}],onClick:()=>O("prev")},[((l=n.prev)==null?void 0:l.call(n,H.value))??f(ee,null,{default:()=>[f(Z,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),f("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:z},[f("div",{ref:d,class:"v-slide-group__content",style:A.value,onTouchstartPassive:R,onTouchmovePassive:M,onTouchendPassive:_,onFocusin:I,onFocusout:T,onKeydown:X},[(s=n.default)==null?void 0:s.call(n,H.value)])]),G.value&&f("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ue.value}],onClick:()=>O("next")},[((h=n.next)==null?void 0:h.call(n,H.value))??f(ee,null,{default:()=>[f(Z,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:O,scrollOffset:t,focus:g}}});function Ee(e){return e?e.map(r=>typeof r=="string"?{title:r,value:r}:r):[]}const Oe=q({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...oe({mandatory:"force"}),...Te(),...se()},"VTabs"),Ie=N()({name:"VTabs",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const c=Ce(e,"modelValue"),b=y(()=>Ee(e.items)),{densityClasses:a}=ke(e),{backgroundColorClasses:o,backgroundColorStyles:t}=Ve(C(e,"bgColor"));return we({VTab:{color:C(e,"color"),direction:C(e,"direction"),stacked:C(e,"stacked"),fixed:C(e,"fixedTabs"),sliderColor:C(e,"sliderColor"),hideSlider:C(e,"hideSlider")}}),U(()=>{const[u]=ae.filterProps(e);return f(ae,D(u,{modelValue:c.value,"onUpdate:modelValue":i=>c.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,o.value,e.class],style:[{"--v-tabs-height":Pe(e.height)},t.value,e.style],role:"tablist",symbol:ne}),{default:()=>[n.default?n.default():b.value.map(i=>f(Me,D(i,{key:i.title}),null))]})}),{}}});export{Ie as V,Me as a};