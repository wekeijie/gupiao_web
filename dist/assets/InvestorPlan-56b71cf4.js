import{P as oe}from"./topWrap-1c77684b.js";import{p as se,i as re,d4 as ue,as as ie,q as I,z as x,aa as de,cn as ce,N as fe,a0 as b,bC as me,w as ve,d6 as xe,x as t,az as A,S,ag as q,bS as ge,ck as Ve,d5 as pe,bx as D,d7 as he,y as ye,cZ as we,ab as be,A as _e,P as Ce,C as i,D as H,R as Fe,I as B,F as R,Y as ke,W as Pe,Z as Ie,_ as Re,O as _}from"./index-d8371085.js";import{a as Se,f as Be,b as Te,c as Me,V as E}from"./VTextField-3000edc0.js";import{b as Ne,u as Ue,c as W}from"./VInput-cbf38124.js";import{V as ze}from"./VFileInput-6bc4c37a.js";import{V as Ae}from"./VRow-32f843d5.js";import{V as Y}from"./VCol-1c382ae9.js";/* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";import"./index-88d7e4f0.js";import"./VChip-1db02d20.js";const De="/assets/trade_bg_01_03-73e837fc.png",He="/assets/trade_bg_01_04-0c51edef.png",Ee="/assets/trade_bg_01_05-ae0d5786.png";const Ge=se({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ne(),...Se()},"VTextarea"),Oe=re()({name:"VTextarea",directives:{Intersect:ue},inheritAttrs:!1,props:Ge(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,g){let{attrs:p,emit:o,slots:c}=g;const u=ie(e,"modelValue"),{isFocused:V,focus:T,blur:s}=Ue(e),a=I(()=>typeof e.counterValue=="function"?e.counterValue(u.value):(u.value||"").toString().length),n=I(()=>{if(p.maxlength)return p.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function J(l,d){var r,f;!e.autofocus||!l||(f=(r=d[0].target)==null?void 0:r.focus)==null||f.call(r)}const G=x(),C=x(),O=de(""),F=x(),K=I(()=>e.persistentPlaceholder||V.value||e.active);function M(){var l;F.value!==document.activeElement&&((l=F.value)==null||l.focus()),V.value||T()}function L(l){M(),o("click:control",l)}function Q(l){o("mousedown:control",l)}function X(l){l.stopPropagation(),M(),D(()=>{u.value="",he(e["onClick:clear"],l)})}function j(l){var r;const d=l.target;if(u.value=d.value,(r=e.modelModifiers)!=null&&r.trim){const f=[d.selectionStart,d.selectionEnd];D(()=>{d.selectionStart=f[0],d.selectionEnd=f[1]})}}const h=x(),k=x(+e.rows),N=I(()=>["plain","underlined"].includes(e.variant));ce(()=>{e.autoGrow||(k.value=+e.rows)});function y(){e.autoGrow&&D(()=>{if(!h.value||!C.value)return;const l=getComputedStyle(h.value),d=getComputedStyle(C.value.$el),r=parseFloat(l.getPropertyValue("--v-field-padding-top"))+parseFloat(l.getPropertyValue("--v-input-padding-top"))+parseFloat(l.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,P=parseFloat(l.lineHeight),U=Math.max(parseFloat(e.rows)*P+r,parseFloat(d.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*P+r||1/0,v=we(f??0,U,z);k.value=Math.floor((v-r)/P),O.value=ye(v)})}fe(y),b(u,y),b(()=>e.rows,y),b(()=>e.maxRows,y),b(()=>e.density,y);let m;return b(h,l=>{l?(m=new ResizeObserver(y),m.observe(h.value)):m==null||m.disconnect()}),me(()=>{m==null||m.disconnect()}),ve(()=>{const l=!!(c.counter||e.counter||e.counterValue),d=!!(l||c.details),[r,f]=xe(p),[{modelValue:P,...U}]=W.filterProps(e),[z]=Be(e);return t(W,A({ref:G,modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":N.value},e.class],style:e.style},r,U,{centerAffix:k.value===1&&!N.value,focused:V.value}),{...c,default:v=>{let{isDisabled:w,isDirty:$,isReadonly:ee,isValid:te}=v;return t(Te,A({ref:C,style:{"--v-textarea-control-height":O.value},onClick:L,onMousedown:Q,"onClick:clear":X,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{active:K.value||$.value,centerAffix:k.value===1&&!N.value,dirty:$.value||e.dirty,disabled:w.value,focused:V.value,error:te.value===!1}),{...c,default:ae=>{let{props:{class:Z,...le}}=ae;return t(S,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),q(t("textarea",A({ref:F,class:Z,value:u.value,onInput:j,autofocus:e.autofocus,readonly:ee.value,disabled:w.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:M,onBlur:s},le,f),null),[[ge("intersect"),{handler:J},null,{once:!0}]]),e.autoGrow&&q(t("textarea",{class:[Z,"v-textarea__sizer"],"onUpdate:modelValue":ne=>u.value=ne,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Ve,u.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:d?v=>{var w;return t(S,null,[(w=c.details)==null?void 0:w.call(c,v),l&&t(S,null,[t("span",null,null),t(Me,{active:e.persistentCounter||V.value,value:a.value,max:n.value},c.counter)])])}:void 0})}),pe({},G,C,F)}}),$e=B("img",{src:De,class:"w-100"},null,-1),Ze=B("img",{src:He,class:"w-100"},null,-1),qe=B("img",{src:Ee,class:"w-100"},null,-1),We=B("span",{class:"text-h6"},"明星投资者申请",-1),nt={__name:"InvestorPlan",setup(e){const g=x(!1),p=x(),o=be({name:"",company:"",year:"",summary:"",avatar:""}),c=()=>{if(!u(o)){_.dispatch("snackbar/warning",{active:!0,body:"所有内容不能为空"});return}_.dispatch("trade/apply",o).then(()=>{g.value=!1,_.dispatch("snackbar/success",{active:!0,body:"申请成功，请等待审核！"})})},u=s=>{for(var a in s)if(s.hasOwnProperty(a)&&(s[a]===null||s[a]===void 0||s[a]===""))return!1;return!0},V=s=>{let a=new FormData;a.append("file",s[0]),_.dispatch("trade/uploadFile",a).then(n=>{o.avatar=n.filename,_.dispatch("snackbar/success",{active:!0,body:"上传成功"})})},T=x([s=>!s||!s.length||s[0].size<2e6||"Avatar size should be less than 2 MB!"]);return(s,a)=>(_e(),Ce(S,null,[t(oe,null,{headerCenter:i(()=>[R("明星投资者计划")]),_:1}),$e,Ze,qe,t(H,{block:"",color:"white",class:"fixed rounded-0 py-6 text-indigo-accent-2 text-subtitle-1",style:{bottom:"0px"},onClick:a[0]||(a[0]=n=>g.value=!0)},{default:i(()=>[R("立即申请")]),_:1}),t(Fe,{modelValue:g.value,"onUpdate:modelValue":a[7]||(a[7]=n=>g.value=n),persistent:"",width:"1024"},{default:i(()=>[t(ke,null,{default:i(()=>[t(Pe,null,{default:i(()=>[We]),_:1}),t(Ie,null,{default:i(()=>[t(E,{modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=n=>o.name=n),density:"default",variant:"underlined",clearable:"","hide-details":"",label:"操盘师名字"},null,8,["modelValue"]),t(E,{modelValue:o.company,"onUpdate:modelValue":a[2]||(a[2]=n=>o.company=n),variant:"underlined",clearable:"","hide-details":"",label:"就职单位"},null,8,["modelValue"]),t(E,{modelValue:o.year,"onUpdate:modelValue":a[3]||(a[3]=n=>o.year=n),variant:"underlined",clearable:"","hide-details":"",label:"投资年数（单位：年）",type:"number"},null,8,["modelValue"]),t(Oe,{label:"简介",variant:"underlined","auto-grow":"",modelValue:o.summary,"onUpdate:modelValue":a[4]||(a[4]=n=>o.summary=n)},null,8,["modelValue"]),t(ze,{rules:T.value,modelValue:p.value,"onUpdate:modelValue":[a[5]||(a[5]=n=>p.value=n),V],accept:"image/png, image/jpeg, image/bmp",placeholder:"请上传个人照片",variant:"underlined","hide-details":"",label:"上传图片"},null,8,["rules","modelValue"])]),_:1}),t(Re,null,{default:i(()=>[t(Ae,{class:"ma-0 pa-0"},{default:i(()=>[t(Y,{cols:"6",class:"px-0"},{default:i(()=>[t(H,{color:"blue-darken-1",block:"",variant:"text",onClick:a[6]||(a[6]=n=>g.value=!1)},{default:i(()=>[R(" 取消 ")]),_:1})]),_:1}),t(Y,{cols:"6",class:"px-0"},{default:i(()=>[t(H,{color:"blue-darken-1",block:"",variant:"text",onClick:c},{default:i(()=>[R(" 提交 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{nt as default};