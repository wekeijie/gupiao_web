import{m as g,V as a}from"./VCheckboxBtn-6d43cd19.js";import{b as A,u as F,c as u}from"./VInput-c97464db.js";import{p as I,cN as B,i as U,aw as w,cZ as D,q as N,w as R,d4 as _,x as l,aD as c}from"./index-5cf2e4cb.js";const $=I({...A(),...B(g(),["inline"])},"VCheckbox"),E=U()({name:"VCheckbox",inheritAttrs:!1,props:$(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,r){let{attrs:d,slots:t}=r;const s=w(e,"modelValue"),{isFocused:n,focus:i,blur:m}=F(e),V=D(),p=N(()=>e.id||`checkbox-${V}`);return R(()=>{const[b,k]=_(d),[x,q]=u.filterProps(e),[f,M]=a.filterProps(e);return l(u,c({class:["v-checkbox",e.class]},b,x,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:p.value,focused:n.value,style:e.style}),{...t,default:o=>{let{id:v,messagesId:h,isDisabled:P,isReadonly:C}=o;return l(a,c(f,{id:v.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),t)}})}),{}}});export{E as V};