import{K as v,L as x,r as b,N as o,a0 as a,Y as t,J as d,P as g,T as u,a4 as k,a5 as S,ae as y,a7 as p,a2 as l,W as V,X as C}from"./index-18fd14b8.js";import{_ as w}from"./search-e322bae4.js";import{_ as B,a as I}from"./selef-8144ed19.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{V as R}from"./VCol-c53513fd.js";import{V as $}from"./VTextField-fdef04a6.js";import"./index-ab39924d.js";import"./VInput-376e9d03.js";const m=r=>(V("data-v-9889b498"),r=r(),C(),r),q={class:"search-cont"},F={class:"flexBetween search-top"},L={class:"flexStart search-box"},P=m(()=>t("img",{src:w,alt:""},null,-1)),T=["onSubmit"],D=m(()=>t("div",{class:"search-title"},"股票",-1)),E=["onClick"],J={key:0,src:B,alt:""},K={key:1,src:I,alt:""},M={__name:"Search",setup(r){const i=v();x();const n=b(),h=()=>{if(n.value.length<2){l.dispatch("snackbar/warning",{active:!0,body:"请输入名称或者编码"});return}l.dispatch("market/search",n.value)},f=(c,s,e,_)=>{i.push({path:c,query:{code:e,title:s,prefix:_}})};return(c,s)=>(o(),a("div",q,[t("div",F,[t("div",L,[P,d(R,{cols:"12",sm:"2"},{default:g(()=>[t("form",{onSubmit:y(h,["prevent"])},[d($,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=e=>n.value=e),variant:"none","single-line":"",required:"",clearable:"","hide-details":"auto",label:"搜索",solo:""},null,8,["modelValue"])],40,T)]),_:1})]),t("h3",{onClick:s[1]||(s[1]=e=>u(i).go(-1))},"取消")]),D,(o(!0),a(k,null,S(u(l).state.market.search_list,e=>(o(),a("div",{class:"flexBetween history-box",key:e.code,onClick:_=>f("/ChanrtPage",e.name,e.prefix)},[t("div",null,[t("h3",null,p(e.name),1),t("p",null,p(e.code),1)]),e>3?(o(),a("img",J)):(o(),a("img",K))],8,E))),128))]))}},H=N(M,[["__scopeId","data-v-9889b498"]]);export{H as default};