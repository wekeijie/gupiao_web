import{u as M,a as O,p as A}from"./vaildRule-96cb2530.js";import{L as j,p as G,a4 as H,a as Q,b as J,a8 as K,c as W,ap as X,aq as Y,d as Z,f as ee,h as ae,ar as te,i as se,as as le,q as S,a2 as oe,at as ne,l as re,a9 as ie,n as de,au as ue,av as ce,o as me,aw as ve,t as pe,ax as fe,x as t,ay as be,E as ye,a7 as $,D as k,az as ge,M as ke,$ as Ve,z as p,ab as _e,N as he,ao as we,A as L,P as xe,I as r,C as d,B as Ce,ae as Se,F as f,O as o,Q as g,G as Pe,H as Ie}from"./index-12b354fd.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ae}from"./VForm-308279bc.js";import{V as c}from"./VTextField-9c14ecb4.js";import{V as $e}from"./VRow-f6d5c0e7.js";import{V as q}from"./VCol-62be88c0.js";import"./VInput-9b5ecfc2.js";import"./index-3c160825.js";const Le="/assets/png-logo-32b4889f.png";const qe=j("v-alert-title"),Re=["success","info","warning","error"],Te=G({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:H,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Re.includes(e)},...Q(),...J(),...K(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...te({variant:"flat"})},"VAlert"),ze=se()({name:"VAlert",props:Te(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{emit:b,slots:a}=V;const m=le(e,"modelValue"),i=S(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),_=S(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:y}=oe(e),{colorClasses:h,colorStyles:w,variantClasses:x}=ne(_),{densityClasses:u}=re(e),{dimensionStyles:n}=ie(e),{elevationClasses:s}=de(e),{locationStyles:l}=ue(e),{positionClasses:T}=ce(e),{roundedClasses:z}=me(e),{textColorClasses:D,textColorStyles:F}=ve(pe(e,"borderColor")),{t:N}=fe(),P=S(()=>({"aria-label":N(e.closeLabel),onClick(C){m.value=!1,b("click:close",C)}}));return()=>{const C=!!(a.prepend||i.value),U=!!(a.title||e.title),E=!!(a.close||e.closable);return m.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},y.value,h.value,u.value,s.value,T.value,z.value,x.value,e.class],style:[w.value,n.value,l.value,e.style],role:"alert"},{default:()=>{var I,B;return[be(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",D.value],style:F.value},null),C&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t($,{key:"prepend-defaults",disabled:!i.value,defaults:{VIcon:{density:e.density,icon:i.value,size:e.prominent?44:28}}},a.prepend):t(ye,{key:"prepend-icon",density:e.density,icon:i.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[U&&t(qe,{key:"title"},{default:()=>{var v;return[((v=a.title)==null?void 0:v.call(a))??e.title]}}),((I=a.text)==null?void 0:I.call(a))??e.text,(B=a.default)==null?void 0:B.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),E&&t("div",{key:"close",class:"v-alert__close"},[a.close?t($,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var v;return[(v=a.close)==null?void 0:v.call(a,{props:P.value})]}}):t(k,ge({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}}),R=e=>(Pe("data-v-30b8707f"),e=e(),Ie(),e),De={class:"login-box"},Fe=R(()=>r("h1",null,"注册",-1)),Ne=R(()=>r("div",{class:"log-top"},[r("img",{src:Le,class:"rounded-lg"})],-1)),Ue={class:"login-cont"},Ee={class:"flexEnd inlin-customer"},Me={class:"sign-in-box"},Oe={__name:"SignIn",setup(e){const V=ke(),b=Ve();p("password");const a=_e({username:"",phone:"",code:"",password:"",passwordAgo:"",recom:""}),m=p(null),i=p(!1),_=()=>{i.value=!0;let n=60;m.value=window.setInterval(()=>{n==0?y():n--},1e3)},y=()=>{clearInterval(m.value),i.value=!1},h=()=>{if(a.phone.length<6||a.phone.length>11){o.dispatch("snackbar/warning",{active:!0,body:"请输入正确的手机号码"});return}_(),o.dispatch("user/sendSms",a.phone).then(n=>{o.dispatch("snackbar/success",{active:!0,body:"发送成功"})}).catch(()=>{y()})},w=async()=>{if(a.password.length<6){o.dispatch("snackbar/warning",{active:!0,body:"密码长度不能小于6位"});return}if(a.password!=a.passwordAgo){o.dispatch("snackbar/warning",{active:!0,body:"两次密码不一致"});return}if(a.code.length!=4){o.dispatch("snackbar/warning",{active:!0,body:"请输入正确的验证码"});return}if(a.username.length<3){o.dispatch("snackbar/warning",{active:!0,body:"账号长度不能小于3位"});return}if(a.phone.length<11){o.dispatch("snackbar/warning",{active:!0,body:"请输入正确的手机号码"});return}o.dispatch("user/register",{user_name:a.username,mobile:a.phone,password:a.password,verify_code:a.code,referrer:a.recom}).then(n=>{o.dispatch("snackbar/success",{active:!0,body:"注册成功！"}),u("Login")})};p();const x=p(0);he(()=>{b.query.code&&(a.recom=b.query.code),we()});const u=n=>{V.push(n)};return(n,s)=>(L(),xe("div",De,[Fe,Ne,r("div",Ue,[t(Ae,{ref:"form"},{default:d(()=>[t(c,{variant:"underlined",modelValue:a.username,"onUpdate:modelValue":s[0]||(s[0]=l=>a.username=l),required:"",counter:12,clearable:"",label:"账号","hide-details":"auto",rules:g(M)},null,8,["modelValue","rules"]),t(c,{variant:"underlined",modelValue:a.phone,"onUpdate:modelValue":s[1]||(s[1]=l=>a.phone=l),required:"",counter:12,clearable:"",active:"",label:"手机号","hide-details":"auto",rules:g(O)},null,8,["modelValue","rules"]),t($e,{class:"ma-0 pa-0"},{default:d(()=>[t(q,{cols:"8",class:"pa-0"},{default:d(()=>[t(c,{variant:"underlined",modelValue:a.code,"onUpdate:modelValue":s[2]||(s[2]=l=>a.code=l),required:"",counter:4,label:"验证码",type:"Number"},null,8,["modelValue"])]),_:1}),t(q,{cols:"4",class:"px-1"},{default:d(()=>[t(k,{class:"text-none",color:"success",rounded:"",block:"",variant:"outlined",onClick:h,disabled:i.value},{default:d(()=>[f(" 发送 ")]),_:1},8,["disabled"])]),_:1})]),_:1}),t(c,{variant:"underlined",modelValue:a.password,"onUpdate:modelValue":s[3]||(s[3]=l=>a.password=l),required:"",label:"密码",type:"password",rules:g(A)},null,8,["modelValue","rules"]),t(c,{variant:"underlined",modelValue:a.passwordAgo,"onUpdate:modelValue":s[4]||(s[4]=l=>a.passwordAgo=l),required:"",label:"确认密码",type:"password",rules:g(A)},null,8,["modelValue","rules"]),t(c,{variant:"underlined",modelValue:a.recom,"onUpdate:modelValue":s[5]||(s[5]=l=>a.recom=l),required:"",counter:12,label:"推荐人"},null,8,["modelValue"]),r("div",Ee,[r("p",null,[f(" 提示收不到验证码时请联系 "),r("span",{onClick:s[6]||(s[6]=l=>u("/online-service"))},"在线客服")])])]),_:1},512),x.value>55?(L(),Ce(ze,{key:0,text:"发送成功"})):Se("",!0),t(k,{color:"#fb5c39",class:"mt-4",size:"x-large",block:"",onClick:w},{default:d(()=>[f(" 注册 ")]),_:1}),t(k,{color:"rgb(0, 191, 255)",class:"mt-4",size:"x-large",block:"",onClick:s[7]||(s[7]=l=>u("/"))},{default:d(()=>[f(" 返回 ")]),_:1}),r("div",Me,[f(" 已有账号?"),r("span",{onClick:s[8]||(s[8]=l=>u("/Login"))},"马上登陆")])])]))}},Ze=Be(Oe,[["__scopeId","data-v-30b8707f"]]);export{Ze as default};