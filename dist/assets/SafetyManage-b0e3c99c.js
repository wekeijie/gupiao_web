import{_}from"./rightImg-2896a6bb.js";import{P as p}from"./topWrap-4236d3a4.js";import{M as h,N as m,z as x,O as v,P as o,A as l,Q as a,x as g,C as k,I as e,W as d,S as n,F as I,G as S,H as y}from"./index-49e62f91.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                */const s=c=>(S("data-v-ce3f9b66"),c=c(),y(),c),C={class:"line-box flexBetween"},w=s(()=>e("h2",null,"账户",-1)),B=s(()=>e("h2",null,"实名认证",-1)),R={class:"flexStart"},$={key:0},M={key:1},N=s(()=>e("img",{src:_,alt:""},null,-1)),P=s(()=>e("h2",null,"手机",-1)),V={class:"flexStart"},E=s(()=>e("img",{src:_,alt:""},null,-1)),H=s(()=>e("h2",null,"邮箱",-1)),T={class:"flexStart"},z={key:0},A={key:1},D=s(()=>e("img",{src:_,alt:""},null,-1)),F=s(()=>e("h2",null,"银行卡管理",-1)),G={class:"flexStart"},O=s(()=>e("img",{src:_,alt:""},null,-1)),Q=s(()=>e("h2",null,"账户密码",-1)),W=s(()=>e("div",{class:"flexStart"},[e("span",null,"已设置"),e("img",{src:_,alt:""})],-1)),j=[Q,W],q=s(()=>e("h2",null,"提现密码",-1)),J={class:"flexStart"},K={key:0},L={key:1},U=s(()=>e("img",{src:_,alt:""},null,-1)),X={__name:"SafetyManage",setup(c){const f=h();m(),x(!0),v(()=>{o.dispatch("user/getInfo")});const i=u=>{f.push(u)};return(u,t)=>(l(),a("div",null,[g(p,null,{headerCenter:k(()=>[I("账户和安全")]),_:1}),e("div",C,[w,e("span",null,d(n(o).state.user.userInfo.user_name),1)]),e("div",{class:"line-box flexBetween",onClick:t[0]||(t[0]=r=>i("/RealName"))},[B,e("div",R,[n(o).state.user.userInfo.name?(l(),a("span",$,d(n(o).state.user.userInfo.name),1)):(l(),a("span",M,"未认证")),N])]),e("div",{class:"line-box flexBetween",onClick:t[1]||(t[1]=r=>i("/RealPhone"))},[P,e("div",V,[e("span",null,d(n(o).state.user.userInfo.mobile),1),E])]),e("div",{class:"line-box flexBetween",onClick:t[2]||(t[2]=r=>i("/RealEmail"))},[H,e("div",T,[n(o).state.user.userInfo.email?(l(),a("span",z,d(n(o).state.user.userInfo.email),1)):(l(),a("span",A,"未绑定")),D])]),e("div",{class:"line-box flexBetween",onClick:t[3]||(t[3]=r=>i("/RealCard"))},[F,e("div",G,[e("span",null,d(n(o).state.user.userInfo.bank_total)+"张",1),O])]),e("div",{class:"line-box flexBetween",onClick:t[4]||(t[4]=r=>i("/RealCipher"))},j),e("div",{class:"line-box flexBetween",onClick:t[5]||(t[5]=r=>i("/RealTrading"))},[q,e("div",J,[n(o).state.user.userInfo.is_pay_pwd?(l(),a("span",K,"已设置")):(l(),a("span",L,"未设置")),U])])]))}},oe=b(X,[["__scopeId","data-v-ce3f9b66"]]);export{oe as default};