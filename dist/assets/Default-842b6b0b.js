import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{p as x,m as M,a as p,b as T,c as E,d as R,e as $,f as B,g as G,h as L,i as V,u as A,j as F,k as j,t as n,l as q,n as H,o as J,q as u,r as K,s as U,V as Y,v as O,w as k,x as t,y as h,z as Q,A as C,B as S,C as a,D as i,E as c,F as r,G as W,H as X,I as d,J as Z,K as ee}from"./index-a3d9ae5d.js";import{u as I}from"./ssrBoot-e07c8991.js";const te=x({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...M(),...p(),...T(),...E(),...R(),...$({name:"bottom-navigation"}),...B({tag:"header"}),...G({modelValue:!0,selectedClass:"v-btn--selected"}),...L()},"VBottomNavigation"),ae=V()({name:"VBottomNavigation",props:te(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:o}=s;const{themeClasses:l}=A(),{borderClasses:g}=F(e),{backgroundColorClasses:_,backgroundColorStyles:v}=j(n(e,"bgColor")),{densityClasses:w}=q(e),{elevationClasses:N}=H(e),{roundedClasses:P}=J(e),{ssrBootStyles:z}=I(),y=u(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),f=n(e,"active"),{layoutItemStyles:D}=K({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:u(()=>f.value?y.value:0),elementSize:y,active:f,absolute:n(e,"absolute")});return U(e,Y),O({VBtn:{color:n(e,"color"),density:n(e,"density"),stacked:u(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),k(()=>t(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},l.value,_.value,g.value,w.value,N.value,P.value,e.class],style:[v.value,D.value,{height:h(y.value),transform:`translateY(${h(f.value?0:100,"%")})`},z.value,e.style]},{default:()=>[o.default&&t("div",{class:"v-bottom-navigation__content"},[o.default()])]})),{}}}),m=e=>(W("data-v-37d62f72"),e=e(),X(),e),oe=m(()=>d("span",null,"首页",-1)),se=m(()=>d("span",null,"行情",-1)),le=m(()=>d("span",null,"资讯",-1)),ne=m(()=>d("span",null,"合约",-1)),ue=m(()=>d("span",null,"我的",-1)),ie={__name:"Index",setup(e){return Q(null),(s,o)=>(C(),S(ae,{elevation:2,grow:"",color:"#3952E8"},{default:a(()=>[t(i,{value:"recent",class:"text-color",to:"/"},{default:a(()=>[t(c,{size:"x-large"},{default:a(()=>[r("mdi-home-variant-outline")]),_:1}),oe]),_:1}),t(i,{value:"favorites",class:"text-color",to:"/Market"},{default:a(()=>[t(c,{size:"x-large"},{default:a(()=>[r("mdi-chart-box-outline")]),_:1}),se]),_:1}),t(i,{value:"nearby",class:"text-color",to:"/news"},{default:a(()=>[t(c,{size:"x-large"},{default:a(()=>[r("mdi-newspaper-variant-multiple")]),_:1}),le]),_:1}),t(i,{value:"nearby",class:"text-color",to:"/contract"},{default:a(()=>[t(c,{size:"x-large"},{default:a(()=>[r("mdi-file-document-edit-outline")]),_:1}),ne]),_:1}),t(i,{value:"nearby",class:"text-color",to:"/user"},{default:a(()=>[t(c,{size:"x-large"},{default:a(()=>[r("mdi-account-outline")]),_:1}),ue]),_:1})]),_:1}))}},ce=b(ie,[["__scopeId","data-v-37d62f72"]]);const re=x({scrollable:Boolean,...p(),...B({tag:"main"})},"VMain"),de=V()({name:"VMain",props:re(),setup(e,s){let{slots:o}=s;const{mainStyles:l}=Z(),{ssrBootStyles:g}=I();return k(()=>t(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,g.value,e.style]},{default:()=>{var _,v;return[e.scrollable?t("div",{class:"v-main__scroller"},[(_=o.default)==null?void 0:_.call(o)]):(v=o.default)==null?void 0:v.call(o)]}})),{}}}),me={__name:"Default",setup(e){return(s,o)=>{const l=ee("router-view");return C(),S(de,{class:"auto-width mx-auto"},{default:a(()=>[t(l),t(ce)]),_:1})}}},ge=b(me,[["__scopeId","data-v-61a60f89"]]);export{ge as default};