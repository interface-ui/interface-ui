import{u as T,c as h,a as k,b as _,d as x,w as C,e as f,t as N,i as P}from"./size.08e1112c.js";import{d as m,e as i,aa as V,C as W,o as g,y as b,z as w,r as S,n as y,b as r,I as D,c as $,F as I,a as j,t as q,A as E,a3 as L,x as M,ab as O,ac as R}from"./framework.d1d929f2.js";const G=["title","body","label"],H=["h1","h2","h3","h4","h5","h6"],z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},A=(o,t)=>(a,...u)=>{const s=T();return m({setup(l,{slots:n}){const e=i(()=>a instanceof Function?h(a(s==null?void 0:s.value)):h(a,...u));return()=>V(o,W(t,{class:e.value}),n)}})},J=o=>{const{variant:t,component:a}=o,[u,s,l]=t.match(/([\w\d]+)\.?(\w+)?/),n=a??z[s]??"span",e=T(),c=l?e.value.typography[s][l]:e.value.typography[s];return i(()=>h({[`&:is(${n})`]:{margin:0,padding:0,border:"none",...c}}))},K=G.map(o=>k.map(t=>`${o}.${t}`)).flat(),Q=[...H,...K],U=_({variant:{type:String,values:Q,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1}}),X=m({__name:"index",props:U,setup(o){const t=o,a=x("typography"),u=J(t),s=i(()=>{const{variant:n,component:e}=t,[c,v]=n.match(/([\w\d]+)\.?(\w+)?/);return e??z[v]??"span"}),l=i(()=>{const{noWarp:n,gutter:e}=t,c=[a.b(),u.value];return n&&c.push(a.m("nowarp")),e&&c.push(a.m("gutter")),c});return(n,e)=>(g(),b(D(r(s)),{class:y(r(l))},{default:w(()=>[S(n.$slots,"default")]),_:3},8,["class"]))}}),B=C(X,"FnTypography");B.name="FnTypography";const Y=B,Z=["dot","content"],tt=_({content:{type:[String,Number,Object]},variant:{type:String,values:Z,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),at=m({__name:"index",props:tt,setup(o){const t=o,a=x("badge"),u=f(t.color),s=i(()=>N.includes(t.color)?`var(--md-sys-color-on-${t.color})`:null),l={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},n=i(()=>h`
    ${t.xAlign}: 0;
    ${t.yAlign}: 0;
    transform: scale(1)
      translate(
        ${t.overlap?"0%":l[t.xAlign]},
        ${t.overlap?"0%":l[t.yAlign]}
      );
  `),e=A(Y)`
  background-color: ${u.value??"var(--md-sys-color-error)"};
  color: ${s.value};
  height: ${t.variant==="dot"?"8px":"20px"};
  min-width: ${t.variant==="dot"?"8px":"20px"};
  border-radius: 10px;
  padding: ${t.variant==="dot"?"0":"6px"} !important;
`,c=i(()=>{const{content:p,variant:d}=t;return d==="dot"||["string","number"].includes(typeof p)}),v=i(()=>{const{content:p,max:d}=t;return c.value?p&&d?["string","number"].includes(typeof p)?d&&+d<+p?`${d}+`:p:null:p:null}),F=A(t.content)``;return(p,d)=>(g(),$("span",{class:y(r(a).b())},[S(p.$slots,"default"),r(c)?(g(),b(e,{key:0,class:y([r(a).m("icon"),r(n)]),variant:"label.small"},{default:w(()=>[t.variant!=="dot"?(g(),$(I,{key:0},[j(q(r(v)),1)],64)):E("",!0)]),_:1},8,["class"])):(g(),b(F,{key:1,class:y([r(a).m("icon"),r(n)])},null,8,["class"]))],2))}}),nt=C(at,"FnBadge");nt.name="FnBadge";const ot=["circle","square","rounded"],st=_({size:{type:[Number,String],values:k,default:40,validator:o=>P(o)},variant:{type:String,values:ot,default:"circle"},color:{type:[String,Function],default:"var(--md-sys-color-on-surface)"},backgroundColor:{type:[String,Function],default:"var(--fn-sys-color-disabled-level-1)"}}),et=m({inheritAttrs:!1}),rt=m({...et,__name:"index",props:st,setup(o){const t=o,a=x("avatar"),u=f(t.backgroundColor),s=f(t.color),l=i(()=>h`
    height: ${t.size}px;
    width: ${t.size}px;
    background-color: ${u.value};
    color: ${s.value};
  `),{class:n,...e}=L();return(c,v)=>(g(),$("div",{class:y([r(n),r(a).b(),r(a).m(t.variant),r(l)])},[S(c.$slots,"default",{},()=>[M("img",O(R(e)),null,16)])],2))}}),ct=C(rt,"FnAvatar");ct.name="FnAvatar";export{nt as F,ct as a,st as b,Y as c,A as s};
