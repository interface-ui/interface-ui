import{b as _,u as f,a as x,w as F}from"./singleton.e13de263.js";import{u as z,c as m,a as w}from"./use-theme.1d54c98e.js";import{s as B}from"./styled.9dd08d4d.js";import{c as N,i as T}from"./size.6fc7cbf1.js";import{g as u,d as v,o as d,b as $,w as A,r as C,n as y,l as n,I as V,a1 as P,c as S,F as W,a as j,t as O,e as D,a5 as I,a6 as q,k as E,a2 as M,a3 as R}from"./framework.c340a892.js";const G=["title","body","label"],H=["h1","h2","h3","h4","h5","h6"],J={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},K=G.map(a=>N.map(t=>`${a}.${t}`)).flat(),L=[...H,...K],Q=_({variant:{type:String,values:L,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"},cs:{type:[Object,String]}}),U=a=>{const{variant:t}=a,[s,e,r]=t.match(/([\w\d]+)\.?(\w+)?/),l=z(),c=r?l.value.typography[e][r]:l.value.typography[e];return u(()=>{const[i]=f(a,"color"),h=a.cs?m(a.cs):"";return w(m({color:i.value,margin:0,border:"none",...c}),h)})},X=U,Y=v({__name:"index",props:Q,setup(a){const t=a,s=x("typography"),e=u(()=>{const{variant:c,component:i}=t,[h,g,b]=c.match(/([\w\d]+)\.?(\w+)?/);return[i??J[g]??"span",g,b]}),r=u(()=>e.value[0]),l=X(t);return(c,i)=>(d(),$(V(r.value),{class:y([n(s).b(),t.noWarp?n(s).m("nowarp"):"",t.gutter?n(s).m("gutter"):"",n(l)])},{default:A(()=>[C(c.$slots,"default")]),_:3},8,["class"]))}}),k=F(Y,"FnTypography");k.name="FnTypography";const Z=k,tt=["dot","content"],at=_({content:{type:[String,Number,Object]},variant:{type:String,values:tt,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),et=v({__name:"index",props:at,setup(a){const t=a,s=P(),e=x("badge"),[r,l]=f(t,"color"),c={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},i=u(()=>s.default?m`
        ${t.xAlign}: 0;
        ${t.yAlign}: 0;
        position: absolute;
        transform: scale(1)
          translate(
            ${t.overlap?"0%":c[t.xAlign]},
            ${t.overlap?"0%":c[t.yAlign]}
          );
      `:""),h=u(()=>B(Z,{color:l.value})`
    background-color: ${r.value};
    height: ${t.variant==="dot"?"8px":"20px"};
    min-width: ${t.variant==="dot"?"8px":"20px"};
    border-radius: 10px;
    padding: ${t.variant==="dot"?"0":"6px"} !important;
  `),g=u(()=>{const{content:o,variant:p}=t;return p==="dot"||["string","number"].includes(typeof o)}),b=u(()=>{const{content:o,max:p}=t;return g.value?o&&p?["string","number"].includes(typeof o)?p&&+p<+o?`${p}+`:o:null:o:null});return(o,p)=>(d(),S("span",{class:y(n(e).b())},[C(o.$slots,"default"),g.value?(d(),$(n(h),{key:0,class:y([n(e).m("icon"),i.value]),variant:"label.small"},{default:A(()=>[t.variant!=="dot"?(d(),S(W,{key:0},[j(O(b.value),1)],64)):D("",!0)]),_:1},8,["class"])):(d(),$(t.content,{key:1,class:y([n(e).m("icon"),i.value])},null,8,["class"]))],2))}}),nt=F(et,"FnBadge");nt.name="FnBadge";const st=["circle","square","rounded"],ot=_({size:{type:[String,Number],default:40,validator:a=>T(a)||I(a)&&!isNaN(parseFloat(a))},variant:{type:String,values:st,default:"circle"},color:{type:[String,Function],default:"onSurface"},background:{type:[String,Function],default:"surfaceVariant"},cs:{type:[Object,String]}}),rt=a=>u(()=>{const[t]=f(a,"background"),[s]=f(a,"color"),e=m`
      height: ${a.size}px;
      width: ${a.size}px;
      min-width: ${a.size}px;
      background-color: ${t.value};
      color: ${s.value};
    `,r=a.cs?m(a.cs):"";return w(e,r)}),ct=rt,lt=v({inheritAttrs:!1}),it=v({...lt,__name:"index",props:ot,setup(a){const t=a,s=x("avatar"),e=ct(t),{class:r,...l}=q();return(c,i)=>(d(),S("div",{class:y([n(r),n(s).b(),n(s).m(t.variant),n(e)])},[C(c.$slots,"default",{},()=>[E("img",M(R(l)),null,16)])],2))}}),ut=F(it,"FnAvatar");ut.name="FnAvatar";export{ut as F,nt as a,Z as b,ot as c};
