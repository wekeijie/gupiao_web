import{M as B,z as b,ac as R,O as L,P as r,A as d,Q as _,x as e,C as t,I as l,D as S,T as f,F as i,R as g,E as D,ag as P,ck as E,W as V,ad as M,Y as v,B as N,G as j,H as z}from"./index-f82b3d32.js";import{P as F}from"./topWrap-d8042dc2.js";import{j as H}from"./constName-c3bc78a5.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{V as k}from"./VRow-089477b0.js";import{V as C}from"./VSheet-ae2fad93.js";import{V as c}from"./VCol-abb9faef.js";import{V as q,b as A,a as G}from"./VList-a7857a29.js";/* empty css                                                                */import"./index-b6624f02.js";import"./ssrBoot-66abb193.js";import"./VDivider-af46c2f6.js";const w=p=>(j("data-v-ef10373f"),p=p(),z(),p),J={class:"bg-color ui-min-height"},O={class:"topup-bg"},Q={class:"px-3 pt-10"},W={class:"px-3 mt-n16"},Y=w(()=>l("div",{class:"text-body-1"},"请选择充值金额",-1)),K=w(()=>l("div",{class:"text-body-1"},"请选择充值渠道",-1)),X={__name:"TopUp",setup(p){const h=B(),o=b(100);let u=R({title:"请选择",icon:"",slug:"",min:0,amount:0});const y=b([]);L(()=>{r.dispatch("topUp/getList").then(()=>{r.state.topUp.list[0]?y.value=r.state.topUp.list:x()})});const U=(a,n,s)=>{u=a.id},I=()=>{if(o.value<u.min){r.dispatch("snackbar/warning",{active:!0,body:"金额不能低于最低金额"});return}if(u.slug==""){x();return}r.dispatch("topUp/subPut",{name:"",slug:u.slug,amount:o.value}).then(a=>{if(a.type==0){window.open(a.url,"_blank");return}a.type==1&&T("/TopUp/unionpay",a.url)})},T=(a,n="")=>{h.push({path:a,query:{orderid:n}})},x=()=>{r.dispatch("snackbar/warning",{active:!0,body:"通道维护中，请稍后尝试或联系在线客服！"})};return(a,n)=>(d(),_(f,null,[e(F,null,{headerCenter:t(()=>[i("充值")]),headerRight:t(()=>[l("p",{onClick:n[0]||(n[0]=s=>g(H)(g(h),"/Recordslist",{title:"充值审核记录"}))}," 账单 ")]),_:1}),l("div",J,[l("div",O,[l("div",Q,[e(k,{class:"ma-0 pa-0 border-bottom-line"},{default:t(()=>[e(c,{class:"px-0",cols:"1"},{default:t(()=>[e(D,{color:"white"},{default:t(()=>[i("mdi-currency-cny")]),_:1})]),_:1}),e(c,{cols:"11"},{default:t(()=>[P(l("input",{type:"number",class:"amount",placeholder:"请输入充值金额","onUpdate:modelValue":n[1]||(n[1]=s=>o.value=s)},null,512),[[E,o.value]])]),_:1})]),_:1})])]),l("div",W,[e(C,{class:"white rounded-lg py-4 px-3"},{default:t(()=>[Y,e(k,{class:"ma-0 pa-0 mt-4"},{default:t(()=>[(d(),_(f,null,V([100,500,1e3,3e3,5e3,1e4],(s,m)=>e(c,{cols:"3",class:M(["mr-7 px-0 text-center rounded mb-3 border-line",{"money-bg-active":o.value===s,"money-bg":o.value!=s}]),key:m,onClick:Z=>o.value=s},{default:t(()=>[i(" ¥"+v(s)+"元 ",1)]),_:2},1032,["onClick","class"])),64)),e(c,{cols:"6",class:"pa-0 text-body-1 mt-2"},{default:t(()=>[i("应付金额")]),_:1}),e(c,{cols:"6",class:"pa-0 text-right text-body-1 text-red pr-6 mt-2"},{default:t(()=>[i("¥"+v(o.value)+"元",1)]),_:1})]),_:1})]),_:1}),e(C,{class:"white rounded-lg py-4 mt-5 px-3"},{default:t(()=>[K,e(q,{density:"compact","onClick:select":U},{default:t(()=>[(d(!0),_(f,null,V(y.value,(s,m)=>(d(),N(G,{key:m,value:s,color:"primary"},{default:t(()=>[e(A,{textContent:v(s.title)},null,8,["textContent"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),e(S,{block:"",color:"#445CED",class:"text-white rounded-0 py-6 text-body-1 fixed",style:{bottom:"0px"},onClick:I},{default:t(()=>[i("充值")]),_:1})],64))}},dt=$(X,[["__scopeId","data-v-ef10373f"]]);export{dt as default};