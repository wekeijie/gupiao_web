import{p as E,cR as Q,a as F,g as Z,f as T,h as w,aF as z,i as $,al as j,v as ee,w as ae,t as r,x as le,y as l,a8 as P,ag as V,cS as x,m as te,b as ne,c as se,cT as ie,d as ce,cU as de,ah as oe,cV as ue,ac as re,j as ve,aG as pe,l as fe,n as me,o as ke,ai as he,r as ye,cW as Ce,cX as Ve,q as b,aq as _,b$ as be,aK as Pe,F as v,aj as p,ar as ge,Y as D,cY as L}from"./index-d1d8e427.js";import{V as Ie}from"./index-b03892c7.js";import{m as Se,V as R}from"./VSlideGroup-60309714.js";const q=Symbol.for("vuetify:v-chip-group"),Ae=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Q},...Se(),...F(),...Z({selectedClass:"v-chip--selected"}),...T(),...w(),...z({variant:"tonal"})},"VChipGroup");$()({name:"VChipGroup",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:c}=f;const{themeClasses:o}=j(e),{isSelected:t,select:m,next:k,prev:h,selected:y}=ee(e,q);return ae({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),le(()=>{const C=R.filterProps(e);return l(R,P(C,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:k,prev:h,selected:y.value})]}})}),{}}});const Ge=E({activeClass:String,appendAvatar:String,appendIcon:V,closable:Boolean,closeIcon:{type:V,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:V,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:x(),onClickOnce:x(),...te(),...F(),...ne(),...se(),...ie(),...ce(),...de(),...oe(),...T({tag:"span"}),...w(),...z({variant:"tonal"})},"VChip"),De=$()({name:"VChip",directives:{Ripple:ue},props:Ge(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,f){let{attrs:c,emit:o,slots:t}=f;const{t:m}=re(),{borderClasses:k}=ve(e),{colorClasses:h,colorStyles:y,variantClasses:C}=pe(e),{densityClasses:u}=fe(e),{elevationClasses:K}=me(e),{roundedClasses:M}=ke(e),{sizeClasses:O}=he(e),{themeClasses:X}=j(e),g=ye(e,"modelValue"),a=Ce(e,q,!1),s=Ve(e,c),Y=b(()=>e.link!==!1&&s.isLink.value),i=b(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),N=b(()=>({"aria-label":m(e.closeLabel),onClick(n){n.preventDefault(),n.stopPropagation(),g.value=!1,o("click:close",n)}}));function I(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function U(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),I(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),W=!!(d||t.append),H=!!(t.close||e.closable),S=!!(t.filter||e.filter)&&a,A=!!(e.prependIcon||e.prependAvatar),J=!!(A||t.prepend),G=!a||a.isSelected.value;return g.value&&_(l(n,P({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":S,"v-chip--pill":e.pill},X.value,k.value,G?h.value:void 0,u.value,K.value,M.value,O.value,C.value,a==null?void 0:a.selectedClass.value,e.class],style:[G?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:i.value?0:void 0,onClick:I,onKeydown:i.value&&!Y.value&&U},s.linkProps),{default:()=>{var B;return[Pe(i.value,"v-chip"),S&&l(Ie,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(p,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[ge,a.isSelected.value]])]}),J&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(p,{key:"prepend-defaults",disabled:!A,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(D,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(L,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content","data-no-activator":""},[((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),W&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(p,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(D,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(L,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&l("button",P({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},N.value),[t.close?l(p,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[be("ripple"),i.value&&e.ripple,null]])}}});export{De as V};