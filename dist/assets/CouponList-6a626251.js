import{P as E}from"./topWrap-693c9b21.js";import{M as H,N as D,z as k,O as N,al as $,P as _,A as s,Q as l,x as v,C as m,I as e,Y as y,F as f,U as C,X as x,S as V,W as c,_ as L,G as P,H as M}from"./index-3a09e26e.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{V as T,a as U}from"./VCarouselItem-a4330072.js";/* empty css                                                                */import"./VWindowItem-0ce8a6ac.js";import"./ssrBoot-e463fe15.js";const n=u=>(P("data-v-69f2d185"),u=u(),M(),u),z={class:""},F=n(()=>e("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),q={class:"head-bottom"},A={class:"table-box flexStart"},G={class:"coupon-box"},O={key:0,class:"new-box"},Q={class:"flexBetween waite-box"},W={class:"flexStart"},X=n(()=>e("span",null,"¥",-1)),Y=["onClick"],j=n(()=>e("p",null,"使用范围：全平台",-1)),J=n(()=>e("span",null,"详情",-1)),K=[j,J],Z={key:1,class:"new-box have-used"},ee={class:"flexBetween waite-box"},oe={class:"flexStart"},te=n(()=>e("span",null,"¥",-1)),se=["onClick"],le=n(()=>e("p",null,"使用范围：全平台",-1)),ne=n(()=>e("span",null,"详情",-1)),ae=[le,ne],de={__name:"CouponList",setup(u){const S=H();D();const a=k(0),r=k(1);N(()=>{p(),window.addEventListener("scroll",g)}),$(()=>{window.removeEventListener("scroll",g)});const g=()=>{let d=document.documentElement.scrollHeight,t=document.documentElement.scrollTop,i=document.documentElement.clientHeight;d-t<=i&&I()},I=()=>{r.value=r.value+1,p()},w=d=>{a.value=d,r.value=1,_.dispatch("userCoupon/clearList"),p()},p=()=>{_.dispatch("userCoupon/getList",{status:a.value,page:r.value})},b=(d,t)=>{S.push({path:d,query:{order_id:t}})};return(d,t)=>(s(),l("div",z,[v(E,null,{headerCenter:m(()=>[f("利息券")]),_:1}),F,e("div",q,[e("div",A,[e("p",{class:y(a.value==0?"active-tab":""),onClick:t[0]||(t[0]=i=>w(0))}," 待使用 ",2),e("p",{class:y(a.value==1?"active-tab":""),onClick:t[1]||(t[1]=i=>w(1))}," 已使用 ",2)])]),e("div",G,[v(T,{"show-arrows":!1,"hide-delimiters":"",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=i=>a.value=i),height:"auto"},{default:m(()=>[(s(),l(C,null,x(2,(i,h)=>v(U,{key:h},{default:m(()=>[h==0?(s(),l("div",O,[(s(!0),l(C,null,x(V(_).state.userCoupon.list,o=>(s(),l("div",{class:"coupon-list",key:o.id},[e("div",Q,[e("h2",W,[X,f(" "+c(o.amount),1)]),e("div",null,[e("p",null,"ID:"+c(o.order_id),1),e("p",null,"余额 ¥ "+c(o.balance),1)])]),e("div",{class:"flexBetween coupon-detail",onClick:B=>b("/CouponDetail",o.order_id)},K,8,Y)]))),128))])):L("",!0),h==1?(s(),l("div",Z,[(s(!0),l(C,null,x(V(_).state.userCoupon.list,o=>(s(),l("div",{class:"coupon-list",key:o.id},[e("div",ee,[e("h2",oe,[te,f(" "+c(o.amount),1)]),e("div",null,[e("p",null,"ID:"+c(o.order_id),1),e("p",null,"余额 ¥ "+c(o.balance),1)])]),e("div",{class:"flexBetween coupon-detail",onClick:B=>b("/CouponDetail",o.order_id)},ae,8,se)]))),128))])):L("",!0)]),_:2},1024)),64))]),_:1},8,["modelValue"])])]))}},ve=R(de,[["__scopeId","data-v-69f2d185"]]);export{ve as default};