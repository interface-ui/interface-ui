import{b as S,u as h,a as _,w as x}from"./useNamespace.8c56bd7a.js";import{e as p,d as v,o as y,y as b,z as C,r as F,n as m,b as a,I as k,c as $,F as w,a as B,t as T,A as N,a7 as V,a8 as P,x as W,a3 as j,a4 as D}from"./framework.531afec9.js";import{u as I,c as f,a as O}from"./use-theme.7c45fed0.js";import{s as q}from"./styled.f32fb97c.js";import{c as E,i as M}from"./size.5dec05a1.js";const R=["title","body","label"],G=["h1","h2","h3","h4","h5","h6"],A={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},H=R.map(e=>E.map(t=>`${e}.${t}`)).flat(),J=[...G,...H],K=S({variant:{type:String,values:J,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"},cs:{type:[Object,String]}}),L=e=>{const{variant:t,component:o}=e,[g,r,c]=t.match(/([\w\d]+)\.?(\w+)?/),s=o??A[r]??"span",l=I(),u=c?l.value.typography[r][c]:l.value.typography[r];return p(()=>{const[d]=h(e,"color"),n=e.cs?f(e.cs):"";return O(f({[`&:is(${s})`]:{color:d.value,margin:0,border:"none",...u}}),n)})},Q=L,U=v({__name:"index",props:K,setup(e){const t=e,o=_("typography"),g=p(()=>{const{variant:s,component:l}=t,[u,d,n]=s.match(/([\w\d]+)\.?(\w+)?/);return[l??A[d]??"span",d,n]}),r=p(()=>g.value[0]),c=Q(t);return(s,l)=>(y(),b(k(a(r)),{class:m([a(o).b(),t.noWarp?a(o).m("nowarp"):"",t.gutter?a(o).m("gutter"):"",a(c)])},{default:C(()=>[F(s.$slots,"default")]),_:3},8,["class"]))}}),z=x(U,"FnTypography");z.name="FnTypography";const X=z,Y=["dot","content"],Z=S({content:{type:[String,Number,Object]},variant:{type:String,values:Y,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),tt=v({__name:"index",props:Z,setup(e){const t=e,o=_("badge"),[g,r]=h(t,"color"),c={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},s=p(()=>f`
    ${t.xAlign}: 0;
    ${t.yAlign}: 0;
    transform: scale(1)
      translate(
        ${t.overlap?"0%":c[t.xAlign]},
        ${t.overlap?"0%":c[t.yAlign]}
      );
  `),l=p(()=>q(X,{color:r.value})`
    background-color: ${g.value};
    height: ${t.variant==="dot"?"8px":"20px"};
    min-width: ${t.variant==="dot"?"8px":"20px"};
    border-radius: 10px;
    padding: ${t.variant==="dot"?"0":"6px"} !important;
  `),u=p(()=>{const{content:n,variant:i}=t;return i==="dot"||["string","number"].includes(typeof n)}),d=p(()=>{const{content:n,max:i}=t;return u.value?n&&i?["string","number"].includes(typeof n)?i&&+i<+n?`${i}+`:n:null:n:null});return(n,i)=>(y(),$("span",{class:m(a(o).b())},[F(n.$slots,"default"),a(u)?(y(),b(a(l),{key:0,class:m([a(o).m("icon"),a(s)]),variant:"label.small"},{default:C(()=>[t.variant!=="dot"?(y(),$(w,{key:0},[B(T(a(d)),1)],64)):N("",!0)]),_:1},8,["class"])):(y(),b(t.content,{key:1,class:m([a(o).m("icon"),a(s)])},null,8,["class"]))],2))}}),at=x(tt,"FnBadge");at.name="FnBadge";const et=["circle","square","rounded"],nt=S({size:{type:[String,Number],default:40,validator:e=>M(e)||V(e)&&!isNaN(parseFloat(e))},variant:{type:String,values:et,default:"circle"},color:{type:[String,Function],default:"onSurface"},backgroundColor:{type:[String,Function],default:"surfaceVariant"}}),ot=v({inheritAttrs:!1}),st=v({...ot,__name:"index",props:nt,setup(e){const t=e,o=_("avatar"),[g]=h(t,"backgroundColor"),[r]=h(t,"color"),c=p(()=>f`
    height: ${t.size}px;
    width: ${t.size}px;
    background-color: ${g.value};
    color: ${r.value};
  `),{class:s,...l}=P();return(u,d)=>(y(),$("div",{class:m([a(s),a(o).b(),a(o).m(t.variant),a(c)])},[F(u.$slots,"default",{},()=>[W("img",j(D(l)),null,16)])],2))}}),rt=x(st,"FnAvatar");rt.name="FnAvatar";export{at as F,rt as a,X as b,nt as c};
