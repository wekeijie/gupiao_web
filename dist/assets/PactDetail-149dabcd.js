import{P as V}from"./topWrap-d5c96c0d.js";import{K as L,L as I,r as f,o as D,a2 as l,N as o,a0 as a,J as k,P as w,Y as t,a7 as s,T as n,aa as u,S,a4 as h,a5 as p,ac as v,W as $,X as P}from"./index-18fd14b8.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z,a as A}from"./VCarouselItem-abec12c0.js";/* empty css                                                                */import"./ssrBoot-2508ec0f.js";const i=x=>($("data-v-8560a0ba"),x=x(),P(),x),B=i(()=>t("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),T={class:"pact-title"},q={class:"flexAroud amount-cont-box"},R={class:"amount-list"},E=i(()=>t("p",null,"操盘资金",-1)),F={class:"amount-list"},H=i(()=>t("p",null,"配资金额",-1)),J={class:"amount-list"},K=i(()=>t("p",null,"触发警戒",-1)),M={class:"amount-list"},O=i(()=>t("p",null,"出发止损",-1)),U={class:"amount-list"},W=i(()=>t("p",null,"可用余额",-1)),X={class:"amount-list"},Y=i(()=>t("p",null,"冻结资金",-1)),j={class:"amount-list"},G=i(()=>t("p",null,"证券市值",-1)),Q={class:"amount-list"},Z=i(()=>t("p",null,"合约市值",-1)),tt={class:"amount-list"},st=i(()=>t("p",null,"扩大配资",-1)),et={class:"amount-list"},lt=i(()=>t("p",null,"追保金额",-1)),ot={class:"amount-list"},at=i(()=>t("p",null,"提盈金额",-1)),nt={class:"amount-list"},it=i(()=>t("p",null,"合约盈亏",-1)),ct=i(()=>t("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),dt={class:"head-bottom"},rt={class:"table-box flexStart"},_t={class:"coupon-box"},ut={key:0,class:"new-box"},ht=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"名称"),t("th",{style:{"text-align":"right"}},"现价"),t("th",{style:{"text-align":"right"}},"盈亏"),t("th",{style:{"text-align":"right"}},"持仓")],-1)),pt={class:"tr-one"},vt={class:"tr-two"},gt={class:"tr-two-number"},yt={class:"tr-three",style:{"text-align":"right"}},bt={class:"tr-two-number"},xt={class:"tr-three",style:{"text-align":"right"}},mt={key:1,class:"new-box"},ft={class:"head-bottom"},kt={class:"table-box flexStart"},wt={key:0,class:""},Ct=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"ID"),t("th",{style:{}},"扩大金额"),t("th",{style:{"text-align":"right"}},"操作时间")],-1)),Vt={class:"tr-one"},Lt={class:"tr-two"},It={class:"tr-two-number"},Dt={class:"tr-three",style:{"text-align":"right"}},St={class:"tr-two-number"},$t={key:1,class:""},Pt=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"ID"),t("th",{style:{}},"追加金额"),t("th",{style:{"text-align":"right"}},"操作时间")],-1)),Nt={class:"tr-one"},zt={class:"tr-two"},At={class:"tr-two-number"},Bt={class:"tr-three",style:{"text-align":"right"}},Tt={class:"tr-two-number"},qt={key:2,class:"new-box"},Rt=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"名称"),t("th",{style:{"text-align":"right"}},"价格"),t("th",{style:{"text-align":"right"}},"数量"),t("th",{style:{"text-align":"right"}},"成交时间")],-1)),Et={class:"tr-one"},Ft={class:"tr-two"},Ht={class:"tr-two-number"},Jt={class:"tr-three",style:{"text-align":"right"}},Kt={class:"tr-two-number"},Mt={class:"tr-three",style:{"text-align":"right"}},Ot={key:3,class:"new-box"},Ut=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"名称"),t("th",{style:{"text-align":"right"}},"价格"),t("th",{style:{"text-align":"right"}},"数量"),t("th",{style:{"text-align":"right"}},"状态")],-1)),Wt={class:"tr-one"},Xt={class:"tr-two"},Yt={class:"tr-two-number"},jt={class:"tr-three",style:{"text-align":"right"}},Gt={class:"tr-two-number"},Qt={class:"tr-three",style:{"text-align":"right"}},Zt={key:0},ts={key:1},ss={__name:"PactDetail",setup(x){L();const C=I(),d=f(0),r=f(0),g=f(0);D(()=>{C.query.code&&(g.value=C.query.code),l.dispatch("contract/getDetail",g.value)});const m=y=>{y==1?l.dispatch("contract/getAmountList",g.value):y==2?l.dispatch("contract/getAllList",g.value):y==3&&l.dispatch("contract/getOrderList",g.value),d.value=y};return(y,c)=>(o(),a("div",null,[k(V,null,{headerCenter:w(()=>[S("合约详情")]),_:1}),B,t("div",T,[t("p",null,s(n(l).state.contract.detail.title),1),t("p",null,"["+s(n(l).state.contract.detail.order_id)+"]",1)]),t("div",q,[t("div",R,[t("span",null,s(n(l).state.contract.detail.total_amount),1),E]),t("div",F,[t("span",null,s(n(l).state.contract.detail.expand_amount),1),H]),t("div",J,[t("span",null,s(n(l).state.contract.detail.caution_line),1),K]),t("div",M,[t("span",null,s(n(l).state.contract.detail.stop_loss),1),O]),t("div",U,[t("span",null,s(n(l).state.contract.detail.balance),1),W]),t("div",X,[t("span",null,s(n(l).state.contract.detail.fee),1),Y]),t("div",j,[t("span",null,s(n(l).state.contract.detail.stock_total),1),G]),t("div",Q,[t("span",null,s(n(l).state.contract.detail.contract_total),1),Z]),t("div",tt,[t("span",null,s(n(l).state.contract.detail.expend_total),1),st]),t("div",et,[t("span",null,s(n(l).state.contract.detail.append_total),1),lt]),t("div",ot,[t("span",null,s(n(l).state.contract.detail.withdraw),1),at]),t("div",nt,[t("span",null,s(n(l).state.contract.detail.unrealized),1),it])]),ct,t("div",dt,[t("div",rt,[t("p",{class:u(d.value==0?"active-tab":""),onClick:c[0]||(c[0]=_=>d.value=0)}," 合约持仓 ",2),t("p",{class:u(d.value==1?"active-tab":""),onClick:c[1]||(c[1]=_=>m(1))}," 资金明细 ",2),t("p",{class:u(d.value==2?"active-tab":""),onClick:c[2]||(c[2]=_=>m(2))}," 成交明细 ",2),t("p",{class:u(d.value==3?"active-tab":""),onClick:c[3]||(c[3]=_=>m(3))}," 我的委托 ",2)])]),t("div",_t,[k(z,{"show-arrows":!1,"hide-delimiters":"",modelValue:d.value,"onUpdate:modelValue":c[6]||(c[6]=_=>d.value=_),height:"auto"},{default:w(()=>[(o(),a(h,null,p(4,(_,b)=>k(A,{key:b},{default:w(()=>[b==0?(o(),a("div",ut,[t("table",null,[t("tbody",null,[ht,(o(!0),a(h,null,p(n(l).state.contract.staock_list,e=>(o(),a("tr",{class:"tr-list",key:e.code},[t("td",pt,[t("h4",null,s(e.title),1)]),t("td",vt,[t("div",gt,s(e.price),1)]),t("td",yt,[t("div",bt,s(e.unrealized_profit),1)]),t("td",xt,s(e.number),1)]))),128))])])])):v("",!0),b==1?(o(),a("div",mt,[t("div",ft,[t("div",kt,[t("p",{class:u(r.value==0?"active-tab":""),onClick:c[4]||(c[4]=e=>r.value=0)}," 扩大配资 ",2),t("p",{class:u(r.value==1?"active-tab":""),onClick:c[5]||(c[5]=e=>r.value=1)}," 增加保证金 ",2)])]),r.value==0?(o(),a("div",wt,[t("table",null,[t("tbody",null,[Ct,(o(!0),a(h,null,p(n(l).state.contract.amountList.expend,e=>(o(),a("tr",{class:"tr-list",key:e.id},[t("td",Vt,[t("h4",null,s(e.id),1)]),t("td",Lt,[t("div",It,s(e.amount),1)]),t("td",Dt,[t("div",St,s(e.date),1)])]))),128))])])])):v("",!0),r.value==1?(o(),a("div",$t,[t("table",null,[t("tbody",null,[Pt,(o(!0),a(h,null,p(n(l).state.contract.amountList.append,e=>(o(),a("tr",{class:"tr-list",key:e.id},[t("td",Nt,[t("h4",null,s(e.id),1)]),t("td",zt,[t("div",At,s(e.amount),1)]),t("td",Bt,[t("div",Tt,s(e.date),1)])]))),128))])])])):v("",!0)])):v("",!0),b==2?(o(),a("div",qt,[t("table",null,[t("tbody",null,[Rt,(o(!0),a(h,null,p(n(l).state.contract.allList,e=>(o(),a("tr",{class:"tr-list",key:e.code},[t("td",Et,[t("h4",null,s(e.title),1)]),t("td",Ft,[t("div",Ht,s(e.price),1)]),t("td",Jt,[t("div",Kt,s(e.number),1)]),t("td",Mt,[t("p",null,s(e.date),1)])]))),128))])])])):v("",!0),b==3?(o(),a("div",Ot,[t("table",null,[t("tbody",null,[Ut,(o(!0),a(h,null,p(n(l).state.contract.orderList,e=>(o(),a("tr",{class:"tr-list",key:e.code},[t("td",Wt,[t("h4",null,s(e.title),1)]),t("td",Xt,[t("div",Yt,s(e.price),1)]),t("td",jt,[t("div",Gt,s(e.number),1)]),t("td",Qt,[e.status==1?(o(),a("p",Zt,"成交")):(o(),a("p",ts,"等待"))])]))),128))])])])):v("",!0)]),_:2},1024)),64))]),_:1},8,["modelValue"])])]))}},cs=N(ss,[["__scopeId","data-v-8560a0ba"]]);export{cs as default};