import{u as T,c as h,a as k,b as _,d as x,w as C,e as f,t as N,i as P}from"./size.bae1d3d8.js";import{d as m,e as i,aa as V,C as W,o as g,y as b,z as w,r as S,n as y,b as r,I as D,c as $,F as I,a as j,t as q,A as E,ab as L,a3 as M,x as O,ac as R,ad as G}from"./framework.95a0123a.js";const H=["title","body","label"],J=["h1","h2","h3","h4","h5","h6"],z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},A=(a,t)=>(n,...u)=>{const o=T();return m({setup(l,{slots:s}){const e=i(()=>n instanceof Function?h(n(o==null?void 0:o.value)):h(n,...u));return()=>V(a,W(t,{class:e.value}),s)}})},K=a=>{const{variant:t,component:n}=a,[u,o,l]=t.match(/([\w\d]+)\.?(\w+)?/),s=n??z[o]??"span",e=T(),c=l?e.value.typography[o][l]:e.value.typography[o];return i(()=>h({[`&:is(${s})`]:{margin:0,padding:0,border:"none",...c}}))},Q=H.map(a=>k.map(t=>`${a}.${t}`)).flat(),U=[...J,...Q],X=_({variant:{type:String,values:U,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1}}),Y=m({__name:"index",props:X,setup(a){const t=a,n=x("typography"),u=K(t),o=i(()=>{const{variant:s,component:e}=t,[c,v]=s.match(/([\w\d]+)\.?(\w+)?/);return e??z[v]??"span"}),l=i(()=>{const{noWarp:s,gutter:e}=t,c=[n.b(),u.value];return s&&c.push(n.m("nowarp")),e&&c.push(n.m("gutter")),c});return(s,e)=>(g(),b(D(r(o)),{class:y(r(l))},{default:w(()=>[S(s.$slots,"default")]),_:3},8,["class"]))}}),B=C(Y,"FnTypography");B.name="FnTypography";const Z=B,tt=["dot","content"],at=_({content:{type:[String,Number,Object]},variant:{type:String,values:tt,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),nt=m({__name:"index",props:at,setup(a){const t=a,n=x("badge"),u=f(t.color),o=i(()=>N.includes(t.color)?`var(--md-sys-color-on-${t.color})`:null),l={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},s=i(()=>h`
    ${t.xAlign}: 0;
    ${t.yAlign}: 0;
    transform: scale(1)
      translate(
        ${t.overlap?"0%":l[t.xAlign]},
        ${t.overlap?"0%":l[t.yAlign]}
      );
  `),e=A(Z)`
  background-color: ${u.value??"var(--md-sys-color-error)"};
  color: ${o.value};
  height: ${t.variant==="dot"?"8px":"20px"};
  min-width: ${t.variant==="dot"?"8px":"20px"};
  border-radius: 10px;
  padding: ${t.variant==="dot"?"0":"6px"} !important;
`,c=i(()=>{const{content:p,variant:d}=t;return d==="dot"||["string","number"].includes(typeof p)}),v=i(()=>{const{content:p,max:d}=t;return c.value?p&&d?["string","number"].includes(typeof p)?d&&+d<+p?`${d}+`:p:null:p:null}),F=A(t.content)``;return(p,d)=>(g(),$("span",{class:y(r(n).b())},[S(p.$slots,"default"),r(c)?(g(),b(e,{key:0,class:y([r(n).m("icon"),r(s)]),variant:"label.small"},{default:w(()=>[t.variant!=="dot"?(g(),$(I,{key:0},[j(q(r(v)),1)],64)):E("",!0)]),_:1},8,["class"])):(g(),b(F,{key:1,class:y([r(n).m("icon"),r(s)])},null,8,["class"]))],2))}}),st=C(nt,"FnBadge");st.name="FnBadge";const ot=["circle","square","rounded"],et=_({size:{type:[String,Number],default:40,validator:a=>P(a)||L(a)&&!isNaN(parseFloat(a))||k.includes(a)},variant:{type:String,values:ot,default:"circle"},color:{type:[String,Function],default:"var(--md-sys-color-on-surface)"},backgroundColor:{type:[String,Function],default:"var(--fn-sys-color-disabled-level-1)"}}),rt=m({inheritAttrs:!1}),ct=m({...rt,__name:"index",props:et,setup(a){const t=a,n=x("avatar"),u=f(t.backgroundColor),o=f(t.color),l=i(()=>h`
    height: ${t.size}px;
    width: ${t.size}px;
    background-color: ${u.value};
    color: ${o.value};
  `),{class:s,...e}=M();return(c,v)=>(g(),$("div",{class:y([r(s),r(n).b(),r(n).m(t.variant),r(l)])},[S(c.$slots,"default",{},()=>[O("img",R(G(e)),null,16)])],2))}}),lt=C(ct,"FnAvatar");lt.name="FnAvatar";export{st as F,lt as a,et as b,Z as c,A as s};
