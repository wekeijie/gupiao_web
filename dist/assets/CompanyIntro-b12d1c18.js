import{_ as d}from"./rightImg-2896a6bb.js";import{P as p}from"./topWrap-1c77684b.js";import{M as _,$ as u,N as h,O as i,z as m,A as s,P as a,x as f,C as x,S as y,U as g,Q as C,F as v,I as r,X as I,G as b,H as k}from"./index-d8371085.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                */const n=e=>(b("data-v-1b338f07"),e=e(),k(),e),B=n(()=>r("div",{style:{"background-color":"rgb(245, 245, 245)",height:"2px"}},null,-1)),N=["onClick"],R=n(()=>r("img",{src:d,alt:""},null,-1)),w={__name:"CompanyIntro",setup(e){const l=_();u(),h(()=>{i.dispatch("helps/getCompay")}),m([{title:"公司简介",id:1},{title:"资质证书",id:2},{title:"办公环境",id:3},{title:"风控体系",id:1},{title:"关于我们",id:2},{title:"联系我们",id:3}]);const c=t=>{l.push({path:"/RichText",query:{title:t.title,type:2,id:t.id}})};return(t,P)=>(s(),a("div",null,[f(p,null,{headerCenter:x(()=>[v("公司介绍")]),_:1}),B,(s(!0),a(y,null,g(C(i).state.helps.list,o=>(s(),a("div",{class:"line-box flexBetween",key:o.id,onClick:V=>c(o)},[r("h2",null,I(o.title),1),R],8,N))),128))]))}},q=S(w,[["__scopeId","data-v-1b338f07"]]);export{q as default};