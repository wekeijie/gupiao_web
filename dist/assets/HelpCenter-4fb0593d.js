import{_ as v}from"./rightImg-2896a6bb.js";import{P as y}from"./topWrap-ec770c33.js";import{P as g,Q as x,A as u,R as b,S as _,B as o,T as r,y as C,D as k,Y as q,_ as B,W as H,G as I,Z as d,J as a,H as R,I as S}from"./index-47fc8dab.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                */const p=e=>(R("data-v-361dbbf7"),e=e(),S(),e),N=p(()=>a("div",{style:{"background-color":"rgb(245, 245, 245)",height:"5px"}},null,-1)),P=["onClick"],T=p(()=>a("img",{src:v,alt:""},null,-1)),V={__name:"HelpCenter",setup(e){const h=g(),t=x(),l=u(""),n=u("");b(()=>{t.query.title&&(l.value=t.query.title),t.query.id&&(n.value=t.query.id),_.dispatch("helps/getList",n.value)});const f=(i,s)=>{h.push({path:i,query:{title:s.title,id:s.id}})};return(i,s)=>(o(),r("div",null,[C(y,null,{headerCenter:k(()=>[I(d(l.value),1)]),_:1}),N,(o(!0),r(q,null,B(H(_).state.helps.list,(c,m)=>(o(),r("div",{class:"line-box flexBetween",key:m,onClick:$=>f("/RichText",c)},[a("h2",null,d(c.title),1),T],8,P))),128))]))}},G=w(V,[["__scopeId","data-v-361dbbf7"]]);export{G as default};