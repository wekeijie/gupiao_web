import{p as g,a6 as F,cA as q,a as G,b as M,h as j,i as U,as as D,cY as T,q as u,bN as H,bK as K,v as L,t as o,w as E,x as d,cE as Y,ac as w,z as J,d3 as O,az as B,af as Q,bU as W,U as X,E as Z,bn as p,l as ee,d6 as P,aw as le,df as ae,bz as te}from"./index-49e62f91.js";import{V as ne}from"./VInput-f9f942d2.js";const R=Symbol.for("vuetify:selection-control-group"),_=g({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:F,trueIcon:F,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:q},...G(),...M(),...j()},"SelectionControlGroup"),oe=g({..._({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");U()({name:"VSelectionControlGroup",props:oe(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=D(e,"modelValue"),t=T(),m=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||m.value),a=new Set;return H(R,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),K(()=>{a.delete(n)})}}),L({[e.defaultsTarget]:{color:o(e,"color"),disabled:o(e,"disabled"),density:o(e,"density"),error:o(e,"error"),inline:o(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:o(e,"falseIcon"),trueIcon:o(e,"trueIcon"),readonly:o(e,"readonly"),ripple:o(e,"ripple"),type:o(e,"type"),valueComparator:o(e,"valueComparator")}}),E(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=v.default)==null?void 0:n.call(v)])}),{}}});const ue=g({label:String,trueValue:null,falseValue:null,value:null,...G(),..._()},"VSelectionControl");function ie(e){const i=p(R,void 0),{densityClasses:v}=ee(e),l=D(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const f=i?i.modelValue.value:l.value;return c.value?f.some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:m.value;let s=r;c.value&&(s=f?[...P(l.value),r]:P(l.value).filter(V=>!e.valueComparator(V,t.value))),i?i.modelValue.value=s:l.value=s}}),{textColorClasses:n,textColorStyles:b}=le(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),S=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:m,model:a,textColorClasses:n,textColorStyles:b,icon:S}}const se=U()({name:"VSelectionControl",directives:{Ripple:Y},inheritAttrs:!1,props:ue(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:m,icon:c,model:a,textColorClasses:n,textColorStyles:b,trueValue:S}=ie(e),f=T(),r=u(()=>e.id||`input-${f}`),s=w(!1),V=w(!1),C=J();t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function k(y){s.value=!0,ae(y.target,":focus-visible")!==!1&&(V.value=!0)}function I(){s.value=!1,V.value=!1}function z(y){e.readonly&&t&&te(()=>t.forceUpdate()),a.value=y.target.checked}return E(()=>{var x,A;const y=l.label?l.label({label:e.label,props:{for:r.value}}):e.label,[N,$]=O(v),h=d("input",B({ref:C,checked:a.value,disabled:!!(e.readonly||e.disabled),id:r.value,onBlur:I,onFocus:k,onInput:z,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:S.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},$),null);return d("div",B({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},m.value,e.class]},N,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(x=l.default)==null?void 0:x.call(l),Q(d("div",{class:["v-selection-control__input"]},[((A=l.input)==null?void 0:A.call(l,{model:a,textColorClasses:n,textColorStyles:b,inputNode:h,icon:c.value,props:{onFocus:k,onBlur:I,id:r.value}}))??d(X,null,[c.value&&d(Z,{key:"icon",icon:c.value},null),h])]),[[W("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&d(ne,{for:r.value,clickable:!0},{default:()=>[y]})])}),{isFocused:s,input:C}}});export{se as V,ue as m};