import{P as x,A as _,an as V,R as b,aC as k,S as a,B as m,T as I,y as l,D as r,J as s,E as C,G as f,W as p,aq as i,ar as u,C as T,a1 as B,H as R,I as P}from"./index-d1d8e427.js";import{_ as h,a as g}from"./eyeHide-4892524c.js";import{p as v}from"./vaildRule-7f5885e5.js";import{P as S}from"./topWrap-3013fb30.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{V as N}from"./VForm-7fc87c82.js";import{V as q}from"./VDivider-0cc4884c.js";import{V as w}from"./VTextField-6f87966f.js";/* empty css                                                                */import"./VInput-03ffe64e.js";import"./index-b03892c7.js";const c=n=>(R("data-v-c2adaefd"),n=n(),P(),n),E={class:"login-box"},F=c(()=>s("p",null,"当前取款密码",-1)),H={src:h},U={src:g},$=c(()=>s("p",null,"新取款密码",-1)),z={src:h},A={src:g},G={class:"login-box"},J=c(()=>s("p",{class:"forget-box"},null,-1)),L={__name:"RealTrading",setup(n){x();const e=_("password"),t=V({password:"",new_password:""}),y=async()=>{if(a.state.user.userInfo.is_pay_pwd){if(t.new_password.length<6||t.password.length<6){a.dispatch("snackbar/error",{active:!0,body:"取款密码不能小于6位数字"});return}}else if(t.password.length<6){a.dispatch("snackbar/error",{active:!0,body:"取款密码不能小于6位数字"});return}a.dispatch("user/changePayPassword",t).then(()=>{a.dispatch("snackbar/success",{active:!0,body:"修改成功!"}),a.dispatch("user/getInfo")})};return _(),b(()=>{k(),a.state.user.userInfo.user_name||a.dispatch("user/getInfo")}),(M,o)=>(m(),I("div",null,[l(S,null,{headerCenter:r(()=>[f("更改取款密码")]),_:1}),l(q,{thickness:3}),s("div",E,[l(N,{ref:"form"},{default:r(()=>[l(w,{variant:"underlined",modelValue:t.password,"onUpdate:modelValue":o[1]||(o[1]=d=>t.password=d),required:"",counter:12,label:"请输入当前账号取款密码",type:e.value,rules:p(v)},{prepend:r(()=>[F]),default:r(()=>[s("div",{class:"eye-show",onClick:o[0]||(o[0]=d=>e.value=="text"?e.value="password":e.value="text")},[i(s("img",H,null,512),[[u,e.value=="text"]]),i(s("img",U,null,512),[[u,e.value=="password"]])])]),_:1},8,["modelValue","type","rules"]),p(a).state.user.userInfo.is_pay_pwd?(m(),T(w,{key:0,variant:"underlined",modelValue:t.new_password,"onUpdate:modelValue":o[3]||(o[3]=d=>t.new_password=d),required:"",counter:12,label:"请输入新取款密码",type:e.value,rules:p(v)},{prepend:r(()=>[$]),default:r(()=>[s("div",{class:"eye-show",onClick:o[2]||(o[2]=d=>e.value=="text"?e.value="password":e.value="text")},[i(s("img",z,null,512),[[u,e.value=="text"]]),i(s("img",A,null,512),[[u,e.value=="password"]])])]),_:1},8,["modelValue","type","rules"])):B("",!0)]),_:1},512)]),s("div",G,[l(C,{color:"success",class:"mt-2",size:"x-large",block:"",onClick:y},{default:r(()=>[f(" 提交 ")]),_:1}),J])]))}},te=D(L,[["__scopeId","data-v-c2adaefd"]]);export{te as default};