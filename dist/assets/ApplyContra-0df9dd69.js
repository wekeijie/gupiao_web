import{P as F,A as n,an as H,R as N,S as c,B as g,T as w,y as t,D as e,J as p,E as b,X as P,Y as I,G as a,F as L,aq as R,ct as $,Z as i,W as h,_ as M,C as q,a2 as z,as as G,a3 as J,a4 as W,H as X,I as Y}from"./index-47fc8dab.js";import{P as Z}from"./topWrap-ec770c33.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{V as f}from"./VRow-a2a5129c.js";import{V as S}from"./VSheet-342721c0.js";import{V as K}from"./VBottomSheet-ef81621b.js";import{V as l}from"./VCol-1981e852.js";import{V as O}from"./VDivider-320364d5.js";import{V as Q}from"./VSelect-8537cfaf.js";import{V as tt,c as et,a as at}from"./VList-e71fdf25.js";/* empty css                                                                */import"./VTextField-41384a6f.js";import"./index-fbd6c71b.js";import"./VInput-da574717.js";import"./VMenu-118be6fc.js";import"./VVirtualScroll-6e9a9080.js";import"./VCheckboxBtn-895403a9.js";import"./VSelectionControl-d0b895ca.js";import"./VChip-8d28dc16.js";import"./VSlideGroup-e5865372.js";import"./ssrBoot-dadcdfe7.js";const A=v=>(X("data-v-710b8962"),v=v(),Y(),v),lt={class:"bg-color ui-min-height"},st={class:"topup-bg"},ot={class:"px-3 pt-10"},dt={class:"px-3 mt-n16"},ct={class:"text-red"},it=A(()=>p("div",{class:"text-body-1 mb-3"},"请选择申请额度",-1)),ut=A(()=>p("span",{class:"text-h6"},"合约详情",-1)),rt={__name:"ApplyContra",setup(v){const B=F();n();const x=n(!1),m=n({title:"",day:""}),_=n({});n(0);const r=n(500),y=n(!1),V=n(0),d=H({total:0,expand:0,loss_waring:0,loss_fail:0,rate:0});N(()=>{c.dispatch("user/userInfo"),c.dispatch("contract/getType").then(()=>{k(c.state.contract.typeList[0])})});const T=u=>({title:"¥ "+u.limit*r.value,subtitle:u.title}),D=()=>{const u={amount:r.value,type_id:m.value.id,limit_id:_.value.id};c.dispatch("contract/create",u).then(()=>{c.dispatch("snackbar/success",{active:!0,body:"申请成功！"}),y.value=!1,B.push("/contract")})},k=u=>{m.value=u,E(u.id),x.value=!1},E=u=>{c.dispatch("contract/getLimit",u).then(s=>{C(s[0].id)})},C=u=>{const s=c.state.contract.limitList.find(o=>o.id==u);V.value=s.id,_.value=s},U=()=>{if(r.value>c.state.user.info.balance){c.dispatch("snackbar/warning",{active:!0,body:"保证金不足，请存款！"});return}d.expand=r.value*_.value.limit,d.total=d.expand+r.value,d.loss_waring=d.expand+r.value*.5,d.loss_fail=d.expand+r.value*.2,d.rate=d.expand*(_.value.rate/100),y.value=!0};return(u,s)=>(g(),w(I,null,[t(Z,null,{headerCenter:e(()=>[a("申请合约")]),_:1}),p("div",lt,[p("div",st,[p("div",ot,[t(f,{class:"ma-0 pa-0 border-bottom-line"},{default:e(()=>[t(l,{class:"px-0",cols:"1"},{default:e(()=>[t(L,{color:"white"},{default:e(()=>[a("mdi-currency-cny")]),_:1})]),_:1}),t(l,{cols:"11"},{default:e(()=>[R(p("input",{type:"number",class:"amount",placeholder:"请输入保证金金额","onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o)},null,512),[[$,r.value]])]),_:1})]),_:1})])]),p("div",dt,[t(S,{class:"bg-white rounded-lg py-3"},{default:e(()=>[t(f,{class:"ma-0 pa-0"},{default:e(()=>[t(l,{cols:"6",class:"text-body-1"},{default:e(()=>[a("钱包可用余额")]),_:1}),t(l,{cols:"6",class:"text-body-1 text-right"},{default:e(()=>[a("¥"+i(h(c).state.user.info.balance),1)]),_:1})]),_:1}),t(O),t(f,{class:"ma-0 pa-0 mt-2"},{default:e(()=>[t(l,{cols:"6",class:"text-body-1"},{default:e(()=>[a("合约类型")]),_:1}),t(l,{cols:"6",class:"text-body-1 text-right",onClick:s[1]||(s[1]=o=>x.value=!0)},{default:e(()=>[p("span",ct,i(m.value.title+"-操盘"+m.value.day+"天"),1),t(L,{size:"large",color:"#8E8E8E"},{default:e(()=>[a("mdi-chevron-right")]),_:1})]),_:1})]),_:1})]),_:1}),t(S,{class:"bg-white rounded-lg py-3 mt-3 px-3"},{default:e(()=>[it,t(f,{class:"ma-0 pa-0"},{default:e(()=>[t(Q,{modelValue:V.value,"onUpdate:modelValue":[s[2]||(s[2]=o=>V.value=o),C],label:"Select",items:h(c).state.contract.limitList,variant:"underlined","item-props":T,"item-value":"id"},null,8,["modelValue","items"])]),_:1})]),_:1})])]),t(b,{block:"",color:"#445CED",class:"text-white rounded-0 py-7 text-h6 fixed",style:{bottom:"0px"},onClick:U},{default:e(()=>[a("立即申请")]),_:1}),t(K,{modelValue:x.value,"onUpdate:modelValue":s[3]||(s[3]=o=>x.value=o)},{default:e(()=>[t(tt,null,{default:e(()=>[t(et,{class:"w-100"},{default:e(()=>[a(" 选择合约类型 ")]),_:1}),(g(!0),w(I,null,M(h(c).state.contract.typeList,o=>(g(),q(at,{key:o.title,title:o.title+o.day+"天",onClick:nt=>k(o)},null,8,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"]),t(P,{modelValue:y.value,"onUpdate:modelValue":s[5]||(s[5]=o=>y.value=o),persistent:"",width:"1024"},{default:e(()=>[t(z,null,{default:e(()=>[t(G,null,{default:e(()=>[ut]),_:1}),t(J,null,{default:e(()=>[t(f,{class:"mx-0 pa-0 text-body-1 text-grey-darken-1"},{default:e(()=>[t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("总操盘资金")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(d.total),1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("保证金/本金")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(r.value),1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("配资资金")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(d.expand)+"/"+i(_.value.limit),1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("亏损预警线")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(d.loss_waring),1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("亏损平仓线")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(d.loss_fail),1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("利率")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(_.value.rate+"%"),1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("产生利息")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(d.rate.toFixed(2))+"元",1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("资金使用时间")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(m.value.day)+"天后自动续期",1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("可用利息券")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(h(c).state.user.info.interest_amount)+"元",1)]),_:1}),t(l,{cols:"6",class:"py-1"},{default:e(()=>[a("准备资金")]),_:1}),t(l,{cols:"6",class:"py-1 text-right"},{default:e(()=>[a(i(d.expand),1)]),_:1})]),_:1})]),_:1}),t(W,null,{default:e(()=>[t(f,{class:"ma-0 pa-0"},{default:e(()=>[t(l,{cols:"6",class:"px-0"},{default:e(()=>[t(b,{color:"blue-darken-1",block:"",variant:"text",onClick:s[4]||(s[4]=o=>y.value=!1)},{default:e(()=>[a(" 取消 ")]),_:1})]),_:1}),t(l,{cols:"6",class:"px-0"},{default:e(()=>[t(b,{color:"blue-darken-1",block:"",variant:"text",onClick:D},{default:e(()=>[a(" 提交 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Et=j(rt,[["__scopeId","data-v-710b8962"]]);export{Et as default};