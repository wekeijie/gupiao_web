import{P as B}from"./topWrap-3013fb30.js";import{p as C,a as V,b as P,f as k,h as A,i as D,al as F,l as I,x as N,y as o,z as R,P as w,Q as H,R as S,S as s,B as r,T as l,D as _,J as t,a2 as x,G as L,a3 as y,Y as b,_ as v,Z as i,W as c}from"./index-d1d8e427.js";import{V as T}from"./VDivider-0cc4884c.js";/* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";const z=C({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...V(),...P(),...k(),...A()},"VTable"),g=D()({name:"VTable",props:z(),setup(n,p){let{slots:e,emit:h}=p;const{themeClasses:d}=F(n),{densityClasses:a}=I(n);return N(()=>o(n.tag,{class:["v-table",{"v-table--fixed-height":!!n.height,"v-table--fixed-header":n.fixedHeader,"v-table--fixed-footer":n.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":n.hover},d.value,a.value,n.class],style:n.style},{default:()=>{var u,m,f;return[(u=e.top)==null?void 0:u.call(e),e.default?o("div",{class:"v-table__wrapper",style:{height:R(n.height)}},[o("table",null,[e.default()])]):(m=e.wrapper)==null?void 0:m.call(e),(f=e.bottom)==null?void 0:f.call(e)]}})),{}}}),E={class:"bg-blue-darken-3 py-6 px-5"},G=t("div",{class:"text-h6 text-center"},"合伙人核定",-1),J=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"团队人数"),t("th",{class:"text-left"},"合伙人等级")])],-1),M={key:0},Q={key:1},U={key:2},W=t("div",{class:"mt-3 text-caption text-indeent text-grey-darken-1"}," 不同团队人数对应不同合伙人等级，团队人数包含由你邀请码注册进来的人，也包含你邀请的人的邀请码再注册进来的人，比如你邀请A,A邀请B,B又邀请C，那么A、B、C都属于你的团队人员。 ",-1),Y=t("div",{class:"text-h6 text-center"},"合伙人团队分成",-1),Z=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"团队人数"),t("th",{class:"text-left"},"合伙人等级"),t("th",{class:"text-left"},"分成比例")])],-1),$={class:"text-caption"},j={key:0},q={key:1},K={key:2},O={key:3},X=t("div",{class:"mt-3 text-caption text-indeent text-grey-darken-1"}," 不同团队人数对应不同的团队分成比例，团队人数包含由你邀请码注册进来的人，也包含你邀请的人的邀请码再邀请的人，你邀请A,A邀请B,B又邀请C,那么A、B、C都属于您的团队。假设你的团队人数是45人，整个团队所有人当天跟单总收益10万，那么你的团队分成为100000*4.2%=4200元。 ",-1),lt={__name:"Partner",setup(n){w(),H(),S(()=>{s.state.copyTrade.partner.length<=0&&s.dispatch("copyTrade/getPartner")});const p=(e,h)=>parseInt(e)+1+"-"+h;return(e,h)=>(r(),l("div",null,[o(B,null,{headerCenter:_(()=>[L("合伙人制度")]),_:1}),t("div",E,[o(x,{class:"pt-3"},{default:_(()=>[G,o(y,null,{default:_(()=>[o(g,null,{default:_(()=>[J,t("tbody",null,[(r(!0),l(b,null,v(c(s).state.copyTrade.partner,(d,a)=>(r(),l("tr",{key:a},[a==0?(r(),l("td",M,"0 - "+i(d.limit),1)):a==c(s).state.copyTrade.partner.length-1?(r(),l("td",Q,i(parseInt(c(s).state.copyTrade.partner[a-1].limit)+1+"-"),1)):(r(),l("td",U,i(p(c(s).state.copyTrade.partner[a-1].limit,d.limit)),1)),t("td",null,i(d.title),1)]))),128))])]),_:1}),o(T,{class:"border-opacity-100 mt-3 mb-3",color:"info"}),W]),_:1})]),_:1}),o(x,{class:"mt-10 pt-3"},{default:_(()=>[Y,o(y,null,{default:_(()=>[o(g,null,{default:_(()=>[Z,t("tbody",$,[(r(!0),l(b,null,v(c(s).state.copyTrade.partner,(d,a)=>(r(),l("tr",{key:a},[a==0?(r(),l("td",j,"0 - "+i(d.limit),1)):a==c(s).state.copyTrade.partner.length?(r(),l("td",q,i(parseInt(c(s).state.copyTrade.partner[a-1].limit)+1+"-"),1)):a==c(s).state.copyTrade.partner.length-1?(r(),l("td",K,i(parseInt(c(s).state.copyTrade.partner[a-1].limit)+1+"-"),1)):(r(),l("td",O,i(p(c(s).state.copyTrade.partner[a-1].limit,d.limit)),1)),t("td",null,i(d.title),1),t("td",null,i(d.split+"%"),1)]))),128))])]),_:1}),o(T,{class:"border-opacity-100 mt-3 mb-3",color:"info"}),X]),_:1})]),_:1})])]))}};export{lt as default};