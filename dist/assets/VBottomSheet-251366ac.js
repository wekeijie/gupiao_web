import{p as l,da as m,y as i,an as u,I as V,a1 as o,J as c,aw as d}from"./index-18fd14b8.js";const p=l({inset:Boolean,...m({contentClass:"v-bottom-sheet__content",transition:"bottom-sheet-transition"})},"VBottomSheet"),v=i()({name:"VBottomSheet",props:p(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const t=u(e,"modelValue");return V(()=>{const[n]=o.filterProps(e);return c(o,d(n,{modelValue:t.value,"onUpdate:modelValue":r=>t.value=r,class:["v-bottom-sheet",{"v-bottom-sheet--inset":e.inset}]}),a)}),{}}});export{v as V};