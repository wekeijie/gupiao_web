import{_ as L,a as C}from"./up-76cbebae.js";import{P as S}from"./topWrap-1c77684b.js";import{M as I,$ as E,z as _,ab as U,N,al as $,O as v,A as l,P as n,x as B,C as P,I as s,X as a,F as y,S as T,U as q,ac as k,G as D,H as M}from"./index-d8371085.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                */const x=r=>(D("data-v-3372a87f"),r=r(),M(),r),V={class:"tr-list"},z={style:{"text-align":"left"}},F={key:0,src:L},A={key:1,src:C},G=x(()=>s("th",{style:{"text-align":"right"}},"领涨股",-1)),O=x(()=>s("div",{style:{"background-color":"rgb(245, 245, 245)",height:"2px"}},null,-1)),X=["onClick"],j={class:"tr-one"},J={class:"tr-two",style:{"text-align":"right"}},K={class:"tr-three",style:{"text-align":"right"}},Q={__name:"HotList",setup(r){const w=I(),p=E(),u=_();let d=_(2);const i=_([]);let c=U({cate:2,page:1,limit:20});N(()=>{u.value=p.query.title,c.cate=p.query.code,g(),window.addEventListener("scroll",h)}),$(()=>{window.removeEventListener("scroll",h),i.value=[],d.value=0});const g=()=>{v.dispatch("market/getBoardList",c).then(t=>{i.value=[...i.value,...t.diff],d.value=Math.ceil(t.total/c.limit)})},b=()=>{if(c.page+1>d.value){v.dispatch("snackbar/warning",{active:!0,body:"已经是最后一页"});return}g()},h=()=>{let t=document.documentElement.scrollHeight,o=document.documentElement.scrollTop,e=document.documentElement.clientHeight;t-o<=e&&b()},f=t=>{if(t<0)return"green";if(t===0||t==="")return"black";if(t>0)return"red"},m=t=>t>0?"+"+t:t,H=(t,o,e)=>{w.push({path:t,query:{title:o,code:e}})};return(t,o)=>(l(),n("div",null,[B(S,null,{headerCenter:P(()=>[y(a(u.value),1)]),_:1}),s("table",null,[s("tbody",null,[s("tr",V,[s("th",z,a(u.value),1),s("th",{style:{"text-align":"right"},class:"cutUp",onClick:o[0]||(o[0]=e=>t.isUp=!t.isUp)},[y(" 涨跌幅 "),t.isUp?(l(),n("img",F)):(l(),n("img",A))]),G]),O,(l(!0),n(T,null,q(i.value,e=>(l(),n("tr",{class:"tr-list",key:e.f140,onClick:W=>H("/DetailList",e.f128,e.f12)},[s("td",j,[s("p",null,a(e.f14),1)]),s("td",J,[s("div",{class:k(["tr-two-number","text-"+f(e.f3)])},a(m(e.f3)+"%"),3)]),s("td",K,[s("p",null,a(e.f128),1),s("span",{class:k("text-"+f(e.f136))},a(m(e.f136)+"%"),3)])],8,X))),128))])])]))}},ot=R(Q,[["__scopeId","data-v-3372a87f"]]);export{ot as default};