import{P as T}from"./topWrap-3013fb30.js";import{P as q,Q as O,A as _,R,S as n,av as S,a5 as U,B as c,T as r,y as C,D as F,J as t,Z as e,W as u,$ as v,G as j,Y as y,_ as b,a1 as p,H as z,I as E}from"./index-d1d8e427.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{V as M}from"./VTooltip-22120fa4.js";import{V as Y,a as G}from"./VCarouselItem-78edf50d.js";/* empty css                                                                */import"./VWindowItem-8fd58fdd.js";import"./ssrBoot-e991e08f.js";const i=k=>(z("data-v-3507ad0a"),k=k(),E(),k),J=i(()=>t("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),Q={class:"pact-title"},W={class:"flexAroud amount-cont-box"},Z={class:"amount-list"},K=i(()=>t("p",null,"操盘资金",-1)),X={class:"amount-list"},tt=i(()=>t("p",null,"配资金额",-1)),st={class:"amount-list"},et=i(()=>t("p",null,"触发警戒",-1)),lt=i(()=>t("p",{class:"double-decoration text-blue-accent-4"},"触发止损",-1)),ot={class:"amount-list"},at=i(()=>t("p",null,"可用余额",-1)),nt={class:"amount-list"},ct=i(()=>t("p",null,"冻结资金",-1)),rt={class:"amount-list"},it=i(()=>t("p",null,"证券市值",-1)),dt={class:"amount-list"},ut=i(()=>t("p",null,"合约市值",-1)),_t={class:"amount-list"},ht=i(()=>t("p",null,"扩大配资",-1)),pt={class:"amount-list"},vt=i(()=>t("p",null,"追保金额",-1)),gt={class:"amount-list"},yt=i(()=>t("p",null,"提盈金额",-1)),bt={class:"amount-list"},xt=i(()=>t("p",null,"合约盈亏",-1)),mt=i(()=>t("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),kt={class:"head-bottom"},ft={class:"table-box flexStart"},wt={class:"coupon-box"},Ct={key:0,class:"new-box"},Ft=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"名称"),t("th",{style:{"text-align":"right"}},"现价/成本"),t("th",{style:{"text-align":"right"}},"盈亏"),t("th",{style:{"text-align":"right"}},"持仓"),t("th",{style:{"text-align":"right"}},"市值")],-1)),Vt={class:"tr-one"},$t={class:"tr-two"},It={class:"tr-two-number"},Dt={class:"tr-two-number"},Lt={class:"tr-three",style:{"text-align":"right"}},St={class:"tr-three",style:{"text-align":"right"}},At={key:1,class:"new-box"},Bt={class:"head-bottom"},Pt={class:"table-box flexStart"},Nt={key:0,class:""},Tt=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"ID"),t("th",{style:{}},"扩大金额"),t("th",{style:{"text-align":"right"}},"操作时间")],-1)),qt={class:"tr-one"},Ot={class:"tr-two"},Rt={class:"tr-two-number"},Ut={class:"tr-three",style:{"text-align":"right"}},jt={class:"tr-two-number"},zt={key:1,class:""},Et=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"ID"),t("th",{style:{}},"追加金额"),t("th",{style:{"text-align":"right"}},"操作时间")],-1)),Ht={class:"tr-one"},Mt={class:"tr-two"},Yt={class:"tr-two-number"},Gt={class:"tr-three",style:{"text-align":"right"}},Jt={class:"tr-two-number"},Qt={key:2,class:"new-box"},Wt=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"名称"),t("th",{style:{"text-align":"right"}},"价格/类型"),t("th",{style:{"text-align":"right"}},"数量"),t("th",{style:{"text-align":"right"}},"成交时间")],-1)),Zt=["onClick"],Kt={class:"tr-one"},Xt={class:"double-decoration text-blue-accent-4"},ts={class:"tr-two"},ss={key:0,class:"tr-two-number"},es={key:1,class:"tr-two-number"},ls={class:"tr-two-number"},os={class:"tr-three",style:{"text-align":"right"}},as={class:"tr-two-number"},ns={class:"tr-three",style:{"text-align":"right"}},cs={key:3,class:"new-box"},rs=i(()=>t("tr",{class:"tr-list"},[t("th",{style:{"text-align":"left"}},"名称/代码"),t("th",{style:{"text-align":"right"}},"价格"),t("th",{style:{"text-align":"right"}},"数量/类型"),t("th",{style:{"text-align":"right"}},"状态")],-1)),is={class:"tr-one"},ds={class:"tr-two"},us={key:0,class:"tr-two-number text-right"},_s={key:1,class:"tr-two-number text-right"},hs={class:"tr-three",style:{"text-align":"right"}},ps={class:"tr-two-number"},vs={class:"tr-three",style:{"text-align":"right"}},gs={key:0},ys={key:1},bs={__name:"PactDetail",setup(k){const A=q(),$=O(),h=_(0),g=_(0),x=_(0),f=_(0),w=_(!1),I=_(0),D=_([]);_(0);const L=_(0);R(()=>{$.query.code&&(x.value=$.query.code),n.dispatch("contract/getDetail",x.value).then(d=>{let o=d.stock.reduce((a,l)=>a+=parseFloat(l.sell)*l.number,0);I.value=parseFloat(o.toFixed(2)),D.value=P(d.stock)})});const B=d=>(d.reduce((a,l)=>a+parseFloat(l),0)/d.length).toFixed(2),P=d=>{const o=d.reduce((a,l)=>{let s=parseFloat(S(l.price,l.sell,l.number)),m=parseFloat(l.sell)*l.number;return a[l.code]?(a[l.code].amount+=s,a[l.code].number+=l.number,a[l.code].capit+=m,a[l.code].cost.push(l.price)):a[l.code]={...l,amount:s,cost:[l.price],capit:m},a},{});return Object.values(o)};U(()=>n.state.contract.staock_list,(d,o)=>{let a=0;d.length>0&&d.forEach(s=>{let m=S(s.price,s.sell,s.number);a+=parseFloat(m)});let l=parseFloat(a)+parseFloat(n.state.contract.detail.unrealized);f.value=parseFloat(l.toFixed(2)),L.value=f.value+parseFloat(n.state.contract.detail.total_amount)-parseFloat(n.state.contract.detail.stop_loss)});const N=d=>{A.push({path:"/market/detail",query:{order_id:d}})},V=d=>{d==1?n.dispatch("contract/getAmountList",x.value):d==2?n.dispatch("contract/getAllList",x.value):d==3&&n.dispatch("contract/getOrderList",x.value),h.value=d};return(d,o)=>(c(),r("div",null,[C(T,null,{headerCenter:F(()=>[j("合约详情")]),_:1}),J,t("div",Q,[t("p",null,e(u(n).state.contract.detail.title),1),t("p",null,"["+e(u(n).state.contract.detail.order_id)+"]",1)]),t("div",W,[t("div",Z,[t("span",null,e(u(n).state.contract.detail.total_amount),1),K]),t("div",X,[t("span",null,e(u(n).state.contract.detail.expand_amount),1),tt]),t("div",st,[t("span",null,e(u(n).state.contract.detail.caution_line),1),et]),t("div",{class:"amount-list",onClick:o[1]||(o[1]=a=>w.value=!w.value)},[t("span",null,e(u(n).state.contract.detail.stop_loss),1),lt,C(M,{activator:"parent",location:"bottom",modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=a=>w.value=a)},{default:F(()=>[t("div",null,"距离强制平仓还差: "+e(L.value),1)]),_:1},8,["modelValue"])]),t("div",ot,[t("span",null,e(u(n).state.contract.detail.balance),1),at]),t("div",nt,[t("span",null,e(u(n).state.contract.detail.fee),1),ct]),t("div",rt,[t("span",null,e(I.value),1),it]),t("div",dt,[t("span",null,e(parseFloat(u(n).state.contract.detail.total_amount)+f.value),1),ut]),t("div",_t,[t("span",null,e(u(n).state.contract.detail.expend_total),1),ht]),t("div",pt,[t("span",null,e(u(n).state.contract.detail.append_total),1),vt]),t("div",gt,[t("span",null,e(u(n).state.contract.detail.withdraw),1),yt]),t("div",bt,[t("span",null,e(f.value),1),xt])]),mt,t("div",kt,[t("div",ft,[t("p",{class:v(h.value==0?"active-tab":""),onClick:o[2]||(o[2]=a=>h.value=0)}," 合约持仓 ",2),t("p",{class:v(h.value==1?"active-tab":""),onClick:o[3]||(o[3]=a=>V(1))}," 资金明细 ",2),t("p",{class:v(h.value==2?"active-tab":""),onClick:o[4]||(o[4]=a=>V(2))}," 成交明细 ",2),t("p",{class:v(h.value==3?"active-tab":""),onClick:o[5]||(o[5]=a=>V(3))}," 我的委托 ",2)])]),t("div",wt,[C(Y,{"show-arrows":!1,"hide-delimiters":"",modelValue:h.value,"onUpdate:modelValue":o[8]||(o[8]=a=>h.value=a),height:"auto"},{default:F(()=>[(c(),r(y,null,b(4,(a,l)=>C(G,{key:l},{default:F(()=>[l==0?(c(),r("div",Ct,[t("table",null,[t("tbody",null,[Ft,(c(!0),r(y,null,b(D.value,s=>(c(),r("tr",{class:"tr-list",key:s.code},[t("td",Vt,[t("h4",null,e(s.title),1)]),t("td",$t,[t("div",It,e(s.sell)+"/"+e(B(s.cost)),1)]),t("td",{class:v(["tr-three",[s.amount>0?"text-red":"text-green"]]),style:{"text-align":"right"}},[t("div",Dt,e(s.amount),1)],2),t("td",Lt,e(s.number),1),t("td",St,e(s.capit.toFixed(2)),1)]))),128))])])])):p("",!0),l==1?(c(),r("div",At,[t("div",Bt,[t("div",Pt,[t("p",{class:v(g.value==0?"active-tab":""),onClick:o[6]||(o[6]=s=>g.value=0)}," 扩大配资 ",2),t("p",{class:v(g.value==1?"active-tab":""),onClick:o[7]||(o[7]=s=>g.value=1)}," 增加保证金 ",2)])]),g.value==0?(c(),r("div",Nt,[t("table",null,[t("tbody",null,[Tt,(c(!0),r(y,null,b(u(n).state.contract.amountList.expend,s=>(c(),r("tr",{class:"tr-list",key:s.id},[t("td",qt,[t("h4",null,e(s.id),1)]),t("td",Ot,[t("div",Rt,e(s.amount),1)]),t("td",Ut,[t("div",jt,e(s.date),1)])]))),128))])])])):p("",!0),g.value==1?(c(),r("div",zt,[t("table",null,[t("tbody",null,[Et,(c(!0),r(y,null,b(u(n).state.contract.amountList.append,s=>(c(),r("tr",{class:"tr-list",key:s.id},[t("td",Ht,[t("h4",null,e(s.id),1)]),t("td",Mt,[t("div",Yt,e(s.amount),1)]),t("td",Gt,[t("div",Jt,e(s.date),1)])]))),128))])])])):p("",!0)])):p("",!0),l==2?(c(),r("div",Qt,[t("table",null,[t("tbody",null,[Wt,(c(!0),r(y,null,b(u(n).state.contract.allList,s=>(c(),r("tr",{class:"tr-list",key:s.code,onClick:m=>N(s.id)},[t("td",Kt,[t("h4",Xt,e(s.title),1)]),t("td",ts,[s.type=="BUY"?(c(),r("div",ss,e(s.buy_price),1)):(c(),r("div",es,e(s.sell_price),1)),t("span",ls,e(s.type_string),1)]),t("td",os,[t("div",as,e(s.number),1)]),t("td",ns,[t("p",null,e(s.date),1)])],8,Zt))),128))])])])):p("",!0),l==3?(c(),r("div",cs,[t("table",null,[t("tbody",null,[rs,(c(!0),r(y,null,b(u(n).state.contract.orderList,s=>(c(),r("tr",{class:"tr-list",key:s.code},[t("td",is,[t("h4",null,e(s.title),1),t("p",null,e(s.code),1)]),t("td",ds,[s.type=="买入"?(c(),r("div",us,e(s.buy_price),1)):p("",!0),s.type=="卖出"?(c(),r("div",_s,e(s.sell_price),1)):p("",!0)]),t("td",hs,[t("div",ps,e(s.number)+"/"+e(s.type),1)]),t("td",vs,[s.status==1?(c(),r("p",gs,"成交")):(c(),r("p",ys,"等待"))])]))),128))])])])):p("",!0)]),_:2},1024)),64))]),_:1},8,["modelValue"])])]))}},$s=H(bs,[["__scopeId","data-v-3507ad0a"]]);export{$s as default};