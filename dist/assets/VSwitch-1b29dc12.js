import{d as N}from"./index-ad977584.js";import{b as R,u as $,c as m}from"./VInput-279feb88.js";import{m as q,V as f}from"./VSelectionControl-1fb73909.js";import{p as E,i as M,as as v,cX as T,q as h,cY as X,w as Y,d3 as j,z as G,x as t,az as V,U as H,E as J,c_ as K,dm as O}from"./index-e6e2a5d7.js";const Q=E({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...R(),...q()},"VSwitch"),ie=M()({name:"VSwitch",inheritAttrs:!1,props:Q(),emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,g){let{attrs:w,slots:a}=g;const l=v(e,"indeterminate"),r=v(e,"modelValue"),{loaderClasses:k}=T(e),{isFocused:y,focus:S,blur:b}=$(e),C=h(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),P=X(),_=h(()=>e.id||`switch-${P}`);function p(){l.value&&(l.value=!1)}return Y(()=>{const[x,A]=j(w),[B,W]=m.filterProps(e),[F,Z]=f.filterProps(e),d=G();function I(i){var n,o;i.stopPropagation(),i.preventDefault(),(o=(n=d.value)==null?void 0:n.input)==null||o.click()}return t(m,V({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},k.value,e.class],style:e.style},x,B,{id:_.value,focused:y.value}),{...a,default:i=>{let{id:n,messagesId:o,isDisabled:z,isReadonly:U,isValid:D}=i;return t(f,V({ref:d},F,{modelValue:r.value,"onUpdate:modelValue":[u=>r.value=u,p],id:n.value,"aria-describedby":o.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:z.value,readonly:U.value,onFocus:S,onBlur:b},A),{...a,default:()=>t("div",{class:"v-switch__track",onClick:I},null),input:u=>{let{inputNode:L,icon:s}=u;return t(H,null,[L,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading}]},[t(N,null,{default:()=>[e.loading?t(K,{name:"v-switch",active:!0,color:D.value===!1?void 0:C.value},{default:c=>a.loader?a.loader(c):t(O,{active:c.isActive,color:c.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&t(J,{key:s,icon:s,size:"x-small"},null)]})])])}})}})}),{}}});export{ie as V};