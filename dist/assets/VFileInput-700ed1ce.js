import{a as W,f as X,b as Y,c as Z}from"./VTextField-27342d9f.js";import{b as ee,u as le,c as $}from"./VInput-c97464db.js";import{p as te,d7 as ne,i as ae,aB as oe,aw as ue,q as s,z as C,a2 as ie,w as se,d4 as re,x as o,aD as V,U as h,d3 as ce,dq as x,bB as de,d5 as fe}from"./index-5cf2e4cb.js";import{V as ve}from"./VChip-4e1660f9.js";const me=te({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...ee({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ne(e).every(f=>f!=null&&typeof f=="object")},...W({clearable:!0})},"VFileInput"),ge=ae()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:D,emit:g,slots:n}=f;const{t:k}=oe(),a=ue(e,"modelValue"),{isFocused:v,focus:M,blur:N}=le(e),I=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),b=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),F=s(()=>x(b.value,I.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${x(r,I.value)})`:t})),U=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,F.value):k(e.counterString,l)}),S=C(),P=C(),i=C(),j=s(()=>v.value||e.active),w=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||M()}function q(l){z(l)}function E(l){g("mousedown:control",l)}function z(l){var t;(t=i.value)==null||t.click(),g("click:control",l)}function L(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return ie(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),se(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,O]=re(D),[{modelValue:pe,...T}]=$.filterProps(e),[_]=X(e);return o($,V({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-text-field--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":q},r,T,{centerAffix:!w.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:B,isReadonly:R,isValid:G}=c;return o(Y,V({ref:P,"prepend-icon":e.prependIcon,onMousedown:E,onClick:z,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:m.value,active:j.value||B.value,dirty:B.value,disabled:d.value,focused:v.value,error:G.value===!1}),{...n,default:H=>{var A;let{props:{class:J,...K}}=H;return o(h,null,[o("input",V({ref:i,type:"file",readonly:R.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),R.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const Q=u.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:N},K,O),null),o("div",{class:J},[!!((A=a.value)!=null&&A.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:b.value,totalBytesReadable:F.value}):e.chips?p.value.map(u=>o(ve,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:t?c=>{var m,d;return o(h,null,[(m=n.details)==null?void 0:m.call(n,c),l&&o(h,null,[o("span",null,null),o(Z,{active:!!((d=a.value)!=null&&d.length),value:U.value},n.counter)])])}:void 0})}),ce({},S,P,i)}});export{ge as V};