import{_ as y}from"./close-d0614903.js";import{P as h}from"./topWrap-0f2941b3.js";import{M as g,N as x,z as i,ad as C,A as S,Q as k,x as o,C as u,I as s,ae as w,F as v,D as A,G as F,H as I,P as d}from"./index-5cf2e4cb.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./VSheet-72be076f.js";import{V as m}from"./VTextField-27342d9f.js";import{V as P}from"./VFileInput-700ed1ce.js";/* empty css                                                                */import"./index-6ba7e40e.js";import"./VInput-c97464db.js";import"./VChip-4e1660f9.js";const D="/assets/startAuthor-be9b6e3f.png";const p=n=>(F("data-v-0c624ddd"),n=n(),I(),n),N=p(()=>s("div",{class:"invite-cont"},[s("img",{src:D,alt:""})],-1)),z=p(()=>s("p",null,"立即申请",-1)),E=[z],H={class:"prop-title flexEnd"},M=p(()=>s("p",null,"明星投资者申请",-1)),O={class:"btn-box"},R={__name:"StarAuthor",setup(n){g(),x();const r=i(!1);i(123123);const c=i(),l=C({name:"",company:"",year:0,summary:"",avatar:""}),f=()=>{if(!V(l)){d.dispatch("snackbar/warning",{active:!0,body:"所有内容不能为空"});return}d.dispatch("trade/apply",l).then(()=>{d.dispatch("snackbar/success",{active:!0,body:"申请成功，请等待审核！"}),r.value=!1})},V=t=>{for(var e in t)if(t.hasOwnProperty(e)&&(t[e]===null||t[e]===void 0||t[e]===""))return!1;return!0},_=t=>{let e=new FormData;e.append("file",t[0]),d.dispatch("trade/uploadFile",e).then(a=>{l.avatar=a.filename,d.dispatch("snackbar/success",{active:!0,body:"上传成功"})})},b=i([t=>!t||!t.length||t[0].size<2e6||"Avatar size should be less than 2 MB!"]);return(t,e)=>(S(),k("div",null,[o(h,null,{headerCenter:u(()=>[v("明星投资者计划")]),_:1}),N,s("div",{class:"bottom-btn flexCenter",onClick:e[0]||(e[0]=a=>r.value=!0)},E),o(w,{modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=a=>r.value=a),class:"align-center justify-center"},{default:u(()=>[o(B,{style:{},width:"350px",rounded:"lg "},{default:u(()=>[s("div",H,[M,s("img",{src:y,alt:"",onClick:e[1]||(e[1]=a=>r.value=!1)})]),s("div",null,[o(m,{modelValue:l.name,"onUpdate:modelValue":e[2]||(e[2]=a=>l.name=a),density:"default",variant:"underlined",clearable:"","hide-details":"",label:"操盘师名字"},null,8,["modelValue"]),o(m,{modelValue:l.company,"onUpdate:modelValue":e[3]||(e[3]=a=>l.company=a),variant:"underlined",clearable:"","hide-details":"",label:"就职单位"},null,8,["modelValue"]),o(m,{modelValue:l.year,"onUpdate:modelValue":e[4]||(e[4]=a=>l.year=a),variant:"underlined",clearable:"","hide-details":"",label:"投资年数（单位：年）"},null,8,["modelValue"]),o(m,{modelValue:l.summary,"onUpdate:modelValue":e[5]||(e[5]=a=>l.summary=a),variant:"underlined",clearable:"","hide-details":"",label:"特别说明"},null,8,["modelValue"]),o(P,{rules:b.value,modelValue:c.value,"onUpdate:modelValue":[e[6]||(e[6]=a=>c.value=a),_],accept:"image/png, image/jpeg, image/bmp",placeholder:"请上传个人照片","prepend-icon":"mdi-camera",variant:"underlined","hide-details":"",label:"上传图片"},null,8,["rules","modelValue"])]),s("div",O,[o(A,{block:"",color:"#e61919",onClick:f},{default:u(()=>[v("提交")]),_:1})])]),_:1})]),_:1},8,["modelValue"])]))}},Z=U(R,[["__scopeId","data-v-0c624ddd"]]);export{Z as default};