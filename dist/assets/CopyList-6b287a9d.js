import{P as g}from"./topWrap-dcb4862f.js";import{A as V,R as C,S as i,B as d,T as m,y as e,D as t,J as l,Y as x,_ as k,W as L,G as a,C as u,Z as r,E as b,a1 as y}from"./index-5d23612a.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{V as T,a as n}from"./VTabs-4cdff85b.js";import{V as s}from"./VCol-c2d27c15.js";import{V as B}from"./VRow-bbd13f96.js";import{V as S}from"./VSheet-db85fc7d.js";/* empty css                                                                */import"./VWindowItem-ad0ac016.js";import"./ssrBoot-51459d8f.js";import"./VSlideGroup-b5abc616.js";import"./index-21748244.js";const N={class:"bg-color ui-min-height"},D={class:"px-3 pt-3"},F={class:"ml-1"},A={class:"ml-1"},E={class:"ml-1"},P={class:"ml-1"},R={class:"ml-1 font-weight-bold text-red text-h6"},G={__name:"CopyList",setup(H){const c=V(0);C(()=>{_()});const _=()=>{i.dispatch("copyTradeList/getList",c.value)},h=p=>{i.dispatch("copyTradeList/cancel",{order_id:p}).then(()=>{i.dispatch("snackbar/success",{active:!0,body:"Success"}),_()})},v=()=>{_()};return(p,f)=>(d(),m(x,null,[e(g,null,{headerCenter:t(()=>[a("跟单明细")]),_:1}),l("div",N,[e(T,{"bg-color":"white","center-active":"",class:"mt-2 tab-text-color","selected-class":"tab-active-color",modelValue:c.value,"onUpdate:modelValue":[f[0]||(f[0]=o=>c.value=o),v]},{default:t(()=>[e(n,{value:0},{default:t(()=>[a("申请中")]),_:1}),e(n,{value:1},{default:t(()=>[a("跟单中")]),_:1}),e(n,{value:2},{default:t(()=>[a("已结束")]),_:1}),e(n,{value:3},{default:t(()=>[a("已撤销")]),_:1}),e(n,{value:4},{default:t(()=>[a("已驳回")]),_:1})]),_:1},8,["modelValue"]),l("div",D,[(d(!0),m(x,null,k(L(i).state.copyTradeList.list,o=>(d(),u(S,{class:"bg-white rounded-lg py-3 mb-2",key:o.order_id},{default:t(()=>[e(B,{class:"ma-0 pa-0"},{default:t(()=>[e(s,{class:"pa-0 pl-3 font-weight-bold order-color",cols:"8"},{default:t(()=>[a(" 单号:"),l("span",F,r(o.order_id),1)]),_:2},1024),e(s,{class:"pa-0 text-right pr-3 text-body-2 text-red",cols:"4"},{default:t(()=>[a(r(o.type),1)]),_:2},1024),e(s,{cols:"12",class:"text-body-2 body-text-color"},{default:t(()=>[a(" 投资者:"),l("span",A,r(o.investor),1)]),_:2},1024),e(s,{cols:"12",class:"text-body-2 body-text-color py-0"},{default:t(()=>[a(" 分成比例:"),l("span",E,r(o.profit_sharing+"%"),1)]),_:2},1024),e(s,{cols:"6",class:"text-body-2 body-text-color px-0 pl-3"},{default:t(()=>[a(" 时间:"),l("span",P,r(o.date),1)]),_:2},1024),e(s,{cols:"6",class:"text-body-2 body-text-color text-right py-0 pt-1 px-0 pr-3"},{default:t(()=>[a(" 跟单资金:"),l("span",R,r(o.amount),1)]),_:2},1024),e(s,{cols:"6"},{default:t(()=>[c.value==0?(d(),u(b,{key:0,variant:"outlined",rounded:"xl",class:"px-9",color:"warning",onClick:I=>h(o.order_id)},{default:t(()=>[a("撤销")]),_:2},1032,["onClick"])):y("",!0)]),_:2},1024),e(s,{cols:"6",class:"text-right"},{default:t(()=>[c.value!=0?(d(),u(b,{key:0,variant:"outlined",rounded:"xl",class:"px-9",color:"#FA8283",to:"/FollowDetail?order_id="+o.order_id},{default:t(()=>[a("查看详情")]),_:2},1032,["to"])):y("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])])],64))}},Q=w(G,[["__scopeId","data-v-fe1ba3bc"]]);export{Q as default};