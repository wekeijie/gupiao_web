import{P as l}from"./topWrap-4236d3a4.js";import{M as p,N as u,z as n,O as m,P as h,A as f,Q as g,x as o,C as d,I as e,F as v,W as a,S as c,G as x,H as b}from"./index-49e62f91.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{V as S}from"./VSheet-16aa9a79.js";import{V}from"./VDivider-2b039046.js";/* empty css                                                                */const w=t=>(x("data-v-81235c4b"),t=t(),b(),t),D={class:"bg-color min-height"},I=w(()=>e("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),H={class:"px-3"},M={class:"text-center text-subtitle-1 font-weight-medium"},N=["innerHTML"],k={class:"text-right mr-9"},B={__name:"Detail",setup(t){p();const i=u(),_=n("通知内容");let s=n({title:"",content:"",date:""});return m(async()=>{if(i.query.id){const r=await h.dispatch("message/getShow",i.query.id);s.value=r}}),(r,C)=>(f(),g("div",D,[o(l,null,{headerCenter:d(()=>[v(a(_.value),1)]),_:1}),I,e("div",H,[o(S,{class:"pa-3 rounded-lg"},{default:d(()=>[e("div",M,a(c(s).title),1),o(V,{class:"mt-3"}),e("div",{innerHTML:c(s).content,class:"mt-4"},null,8,N),e("div",k,a(c(s).date),1)]),_:1})])]))}},A=y(B,[["__scopeId","data-v-81235c4b"]]);export{A as default};