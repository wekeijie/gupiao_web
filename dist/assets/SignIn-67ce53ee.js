import{_ as M}from"./png-logo-31e6ff40.js";import{u as O,a as j,p as A}from"./vaildRule-961bf07c.js";import{L as G,p as H,a5 as Q,a as J,b as K,a9 as W,c as X,ap as Y,aq as Z,d as ee,f as ae,h as te,ar as se,i as oe,as as le,q as S,a3 as ne,at as re,l as ie,aa as de,n as ue,au as ce,av as me,o as ve,aw as pe,t as fe,ax as be,x as t,ay as ye,E as ge,a8 as L,D as k,az as ke,M as Ve,N as _e,z as p,ac as he,O as we,ao as xe,A as R,Q as Ce,I as r,C as d,B as Se,a2 as Pe,F as f,P as n,R as g,G as Ie,H as Be}from"./index-f82b3d32.js";import{a as Ae}from"./js.cookie-edb2da2a.js";import{_ as Le}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Re}from"./VForm-070bd9ed.js";import{V as c}from"./VTextField-a3badff2.js";import{V as $e}from"./VRow-089477b0.js";import{V as $}from"./VCol-abb9faef.js";import"./VInput-335c84e6.js";import"./index-b6624f02.js";const qe=G("v-alert-title"),Te=["success","info","warning","error"],ze=H({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Q,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Te.includes(e)},...J(),...K(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...te(),...se({variant:"flat"})},"VAlert"),De=oe()({name:"VAlert",props:ze(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{emit:b,slots:a}=V;const m=le(e,"modelValue"),i=S(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),_=S(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:y}=ne(e),{colorClasses:h,colorStyles:w,variantClasses:x}=re(_),{densityClasses:u}=ie(e),{dimensionStyles:l}=de(e),{elevationClasses:s}=ue(e),{locationStyles:o}=ce(e),{positionClasses:T}=me(e),{roundedClasses:z}=ve(e),{textColorClasses:D,textColorStyles:F}=pe(fe(e,"borderColor")),{t:N}=be(),P=S(()=>({"aria-label":N(e.closeLabel),onClick(C){m.value=!1,b("click:close",C)}}));return()=>{const C=!!(a.prepend||i.value),U=!!(a.title||e.title),E=!!(a.close||e.closable);return m.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},y.value,h.value,u.value,s.value,T.value,z.value,x.value,e.class],style:[w.value,l.value,o.value,e.style],role:"alert"},{default:()=>{var I,B;return[ye(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",D.value],style:F.value},null),C&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(L,{key:"prepend-defaults",disabled:!i.value,defaults:{VIcon:{density:e.density,icon:i.value,size:e.prominent?44:28}}},a.prepend):t(ge,{key:"prepend-icon",density:e.density,icon:i.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[U&&t(qe,{key:"title"},{default:()=>{var v;return[((v=a.title)==null?void 0:v.call(a))??e.title]}}),((I=a.text)==null?void 0:I.call(a))??e.text,(B=a.default)==null?void 0:B.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),E&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(L,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var v;return[(v=a.close)==null?void 0:v.call(a,{props:P.value})]}}):t(k,ke({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}}),q=e=>(Ie("data-v-be6b515e"),e=e(),Be(),e),Fe={class:"login-box"},Ne=q(()=>r("h1",null,"注册",-1)),Ue=q(()=>r("div",{class:"log-top"},[r("img",{src:M,class:"rounded-lg"})],-1)),Ee={class:"login-cont"},Me={class:"flexEnd inlin-customer"},Oe={class:"sign-in-box"},je={__name:"SignIn",setup(e){const V=Ve(),b=_e();p("password");const a=he({username:"",phone:"",code:"",password:"",passwordAgo:"",recom:""}),m=p(null),i=p(!1),_=()=>{i.value=!0;let l=60;m.value=window.setInterval(()=>{l==0?y():l--},1e3)},y=()=>{clearInterval(m.value),i.value=!1},h=()=>{if(a.phone.length<6||a.phone.length>11){n.dispatch("snackbar/warning",{active:!0,body:"请输入正确的手机号码"});return}_(),n.dispatch("user/sendSms",a.phone).then(l=>{n.dispatch("snackbar/success",{active:!0,body:"发送成功"})}).catch(()=>{y()})},w=async()=>{if(a.password.length<6){n.dispatch("snackbar/warning",{active:!0,body:"密码长度不能小于6位"});return}if(a.password!=a.passwordAgo){n.dispatch("snackbar/warning",{active:!0,body:"两次密码不一致"});return}if(a.code.length!=4){n.dispatch("snackbar/warning",{active:!0,body:"请输入正确的验证码"});return}if(a.username.length<3){n.dispatch("snackbar/warning",{active:!0,body:"账号长度不能小于3位"});return}if(a.phone.length<11){n.dispatch("snackbar/warning",{active:!0,body:"请输入正确的手机号码"});return}n.dispatch("user/register",{user_name:a.username,mobile:a.phone,password:a.password,verify_code:a.code,referrer:a.recom}).then(l=>{n.dispatch("snackbar/success",{active:!0,body:"注册成功！"}),u("Login")})};p();const x=p(0);we(()=>{const l=Ae.get("referrer");b.query.code?a.recom=b.query.code:l&&(a.recom=l),xe()});const u=l=>{V.push(l)};return(l,s)=>(R(),Ce("div",Fe,[Ne,Ue,r("div",Ee,[t(Re,{ref:"form"},{default:d(()=>[t(c,{variant:"underlined",modelValue:a.username,"onUpdate:modelValue":s[0]||(s[0]=o=>a.username=o),required:"",counter:12,clearable:"",label:"账号","hide-details":"auto",rules:g(O)},null,8,["modelValue","rules"]),t(c,{variant:"underlined",modelValue:a.phone,"onUpdate:modelValue":s[1]||(s[1]=o=>a.phone=o),required:"",counter:12,clearable:"",active:"",label:"手机号","hide-details":"auto",rules:g(j)},null,8,["modelValue","rules"]),t($e,{class:"ma-0 pa-0"},{default:d(()=>[t($,{cols:"8",class:"pa-0"},{default:d(()=>[t(c,{variant:"underlined",modelValue:a.code,"onUpdate:modelValue":s[2]||(s[2]=o=>a.code=o),required:"",counter:4,label:"验证码",type:"Number"},null,8,["modelValue"])]),_:1}),t($,{cols:"4",class:"px-1"},{default:d(()=>[t(k,{class:"text-none",color:"success",rounded:"",block:"",variant:"outlined",onClick:h,disabled:i.value},{default:d(()=>[f(" 发送 ")]),_:1},8,["disabled"])]),_:1})]),_:1}),t(c,{variant:"underlined",modelValue:a.password,"onUpdate:modelValue":s[3]||(s[3]=o=>a.password=o),required:"",label:"密码",type:"password",rules:g(A)},null,8,["modelValue","rules"]),t(c,{variant:"underlined",modelValue:a.passwordAgo,"onUpdate:modelValue":s[4]||(s[4]=o=>a.passwordAgo=o),required:"",label:"确认密码",type:"password",rules:g(A)},null,8,["modelValue","rules"]),t(c,{variant:"underlined",modelValue:a.recom,"onUpdate:modelValue":s[5]||(s[5]=o=>a.recom=o),required:"",counter:12,label:"推荐人"},null,8,["modelValue"]),r("div",Me,[r("p",null,[f(" 提示收不到验证码时请联系 "),r("span",{onClick:s[6]||(s[6]=o=>u("/online-service"))},"在线客服")])])]),_:1},512),x.value>55?(R(),Se(De,{key:0,text:"发送成功"})):Pe("",!0),t(k,{color:"#fb5c39",class:"mt-4",size:"x-large",block:"",onClick:w},{default:d(()=>[f(" 注册 ")]),_:1}),t(k,{color:"rgb(0, 191, 255)",class:"mt-4",size:"x-large",block:"",onClick:s[7]||(s[7]=o=>u("/"))},{default:d(()=>[f(" 返回 ")]),_:1}),r("div",Oe,[f(" 已有账号?"),r("span",{onClick:s[8]||(s[8]=o=>u("/Login"))},"马上登陆")])])]))}},ta=Le(je,[["__scopeId","data-v-be6b515e"]]);export{ta as default};