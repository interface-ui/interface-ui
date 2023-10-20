import{u as T,c as h,a as B,b as _,d as C,w as x,e as v,t as N,i as P}from"./size.7b65ac24.js";import{d as f,e as i,D as V,C as W,o as y,y as b,z as k,r as S,n as m,b as r,I as D,c as $,F as I,a as j,t as q,A as E,aa as L,a3 as M,x as O,ab as R,ac as G}from"./framework.9e25c3b9.js";const H=["title","body","label"],J=["h1","h2","h3","h4","h5","h6"],w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},A=(e,t)=>(n,...u)=>{const o=T();return f({setup(l,{slots:a}){const s=i(()=>n instanceof Function?h(n(o==null?void 0:o.value)):h(n,...u));return()=>V(e,W(t,{class:s.value}),{default:()=>{var d;return[(d=a==null?void 0:a.default)==null?void 0:d.call(a)]}})}})},K=e=>{const{variant:t,component:n}=e,[u,o,l]=t.match(/([\w\d]+)\.?(\w+)?/),a=n??w[o]??"span",s=T(),c=l?s.value.typography[o][l]:s.value.typography[o];return i(()=>h({[`&:is(${a})`]:{margin:0,padding:0,border:"none",...c}}))},Q=H.map(e=>B.map(t=>`${e}.${t}`)).flat(),U=[...J,...Q],X=_({variant:{type:String,values:U,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1}}),Y=f({__name:"index",props:X,setup(e){const t=e,n=C("typography"),u=K(t),o=i(()=>{const{variant:a,component:s}=t,[c,d]=a.match(/([\w\d]+)\.?(\w+)?/);return s??w[d]??"span"}),l=i(()=>{const{noWarp:a,gutter:s}=t,c=[n.b(),u.value];return a&&c.push(n.m("nowarp")),s&&c.push(n.m("gutter")),c});return(a,s)=>(y(),b(D(r(o)),{class:m(r(l))},{default:k(()=>[S(a.$slots,"default")]),_:3},8,["class"]))}}),z=x(Y,"FnTypography");z.name="FnTypography";const Z=z,tt=["dot","content"],at=_({content:{type:[String,Number,Object]},variant:{type:String,values:tt,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),nt=f({__name:"index",props:at,setup(e){const t=e,n=C("badge"),u=v(t.color),o=i(()=>N.includes(t.color)?`var(--md-sys-color-on-${t.color})`:null),l={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},a=i(()=>h`
    ${t.xAlign}: 0;
    ${t.yAlign}: 0;
    transform: scale(1)
      translate(
        ${t.overlap?"0%":l[t.xAlign]},
        ${t.overlap?"0%":l[t.yAlign]}
      );
  `),s=A(Z)`
  background-color: ${u.value??"var(--md-sys-color-error)"};
  color: ${o.value};
  height: ${t.variant==="dot"?"8px":"20px"};
  min-width: ${t.variant==="dot"?"8px":"20px"};
  border-radius: 10px;
  padding: ${t.variant==="dot"?"0":"6px"} !important;
`,c=i(()=>{const{content:p,variant:g}=t;return g==="dot"||["string","number"].includes(typeof p)}),d=i(()=>{const{content:p,max:g}=t;return c.value?p&&g?["string","number"].includes(typeof p)?g&&+g<+p?`${g}+`:p:null:p:null}),F=A(t.content)``;return(p,g)=>(y(),$("span",{class:m(r(n).b())},[S(p.$slots,"default"),r(c)?(y(),b(s,{key:0,class:m([r(n).m("icon"),r(a)]),variant:"label.small"},{default:k(()=>[t.variant!=="dot"?(y(),$(I,{key:0},[j(q(r(d)),1)],64)):E("",!0)]),_:1},8,["class"])):(y(),b(F,{key:1,class:m([r(n).m("icon"),r(a)])},null,8,["class"]))],2))}}),et=x(nt,"FnBadge");et.name="FnBadge";const ot=["circle","square","rounded"],st=_({size:{type:[String,Number],default:40,validator:e=>P(e)||L(e)&&!isNaN(parseFloat(e))},variant:{type:String,values:ot,default:"circle"},color:{type:[String,Function],default:"var(--md-sys-color-on-surface)"},backgroundColor:{type:[String,Function],default:"var(--fn-sys-color-disabled-level-1)"}}),rt=f({inheritAttrs:!1}),ct=f({...rt,__name:"index",props:st,setup(e){const t=e,n=C("avatar"),u=v(t.backgroundColor),o=v(t.color),l=i(()=>h`
    height: ${t.size}px;
    width: ${t.size}px;
    background-color: ${u.value};
    color: ${o.value};
  `),{class:a,...s}=M();return(c,d)=>(y(),$("div",{class:m([r(a),r(n).b(),r(n).m(t.variant),r(l)])},[S(c.$slots,"default",{},()=>[O("img",R(G(s)),null,16)])],2))}}),lt=x(ct,"FnAvatar");lt.name="FnAvatar";export{lt as F,et as a,st as b,Z as c,A as s};
