import{P as y}from"./topWrap-b45ed7c5.js";import{M as m,N as x,O as h,P as t,A as o,Q as d,x as r,C as i,U as L,X as b,S as g,I as s,W as a,F as l}from"./index-e6e2a5d7.js";import{V as u}from"./VSheet-b2fa7025.js";import{V as T}from"./VDivider-254daf42.js";/* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"d-flex justify-space-between mt-4"},V={class:"font-weight-bold"},w={class:"text-caption"},F={class:"text-body-2 font-weight-bold"},N={class:"w-full bg-red py-3 ban pl-3 text-body-2"},q={__name:"TraderRecord",setup(R){m();const n=x();h(()=>{n.query.id&&t.dispatch("copyTradeList/getTradeList",n.query.id)});const _=()=>t.state.copyTradeList.tradeList&&Array.isArray(t.state.copyTradeList.tradeList)?t.state.copyTradeList.tradeList.reduce(function(c,e){return c+parseFloat(e.unrealized_profit)},0).toFixed(2):0;return(p,c)=>(o(),d("div",null,[r(y,null,{headerCenter:i(()=>[l("近22交易日操盘记录")]),_:1}),(o(!0),d(L,null,b(g(t).state.copyTradeList.tradeList,(e,f)=>(o(),d("div",{class:"px-3",key:f},[s("div",v,[r(u,{class:""},{default:i(()=>[s("p",V,a(e.symbol_title),1),s("p",w,"买入日期:"+a(e.buy_date),1),s("p",F," 个股盈利百分比:"+a(e.unrealized_profit+"%"),1)]),_:2},1024),r(u,{class:"text-caption d-flex align-center"},{default:i(()=>[l(" 卖出日期:"+a(e.sell_date),1)]),_:2},1024)]),r(T,{class:"border-opacity-50 mt-2"})]))),128)),s("div",N," 近22交易日总收益:"+a(_()+"%"),1)]))}};export{q as default};