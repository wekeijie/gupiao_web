import{M as _,z as t,ac as m,O as f,ao as v,A as w,Q as x,x as r,C as l,D as g,R as V,I as n,ag as c,ah as p,F as h}from"./index-b163a828.js";import{_ as b,a as C}from"./eyeHide-4892524c.js";import{p as y}from"./vaildRule-6cb0f110.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./VForm-62d1dffa.js";import{V as D}from"./VTextField-60c03713.js";import"./VInput-7dc2ce3e.js";import"./index-04b7f5a3.js";const F={class:"login-box"},I={src:b},N={src:C},P={__name:"ChangePassword",setup(R){_();const e=t("password"),s=m({password:""});t(0);const u=async()=>{const{valid:o}=await d.ctx.$refs.form.validate();console.log(o,"valid"),o&&(s.username==""||s.password=="")};let d=t();return f(()=>{d=v()}),(o,a)=>(w(),x("div",F,[r(B,{ref:"form"},{default:l(()=>[r(D,{variant:"underlined",modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=i=>s.password=i),required:"",counter:12,label:"新密码",type:e.value,rules:V(y)},{default:l(()=>[n("div",{class:"eye-show",onClick:a[0]||(a[0]=i=>e.value=="text"?e.value="password":e.value="text")},[c(n("img",I,null,512),[[p,e.value=="text"]]),c(n("img",N,null,512),[[p,e.value=="password"]])])]),_:1},8,["modelValue","type","rules"])]),_:1},512),r(g,{color:"#fb5c39",class:"mt-4",size:"x-large",block:"",onClick:u},{default:l(()=>[h(" 确认修改 ")]),_:1})]))}},O=k(P,[["__scopeId","data-v-416b9fb4"]]);export{O as default};