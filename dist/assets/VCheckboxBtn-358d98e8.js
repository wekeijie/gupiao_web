import{m,V as d}from"./VSelectionControl-dd9af113.js";import{p as I,ai as V,y as f,an as o,c,I as v,J as k,aw as x}from"./index-18fd14b8.js";const h=I({indeterminate:Boolean,indeterminateIcon:{type:V,default:"$checkboxIndeterminate"},...m({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),y=f()({name:"VCheckboxBtn",props:h(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{slots:u}=l;const n=o(e,"indeterminate"),t=o(e,"modelValue");function s(a){n.value&&(n.value=!1)}const r=c(()=>n.value?e.indeterminateIcon:e.falseIcon),i=c(()=>n.value?e.indeterminateIcon:e.trueIcon);return v(()=>k(d,x(e,{modelValue:t.value,"onUpdate:modelValue":[a=>t.value=a,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:i.value,"aria-checked":n.value?"mixed":void 0}),u)),{}}});export{y as V,h as m};