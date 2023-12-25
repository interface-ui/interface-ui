import{b as S,u as f,a as _,w as x}from"./use-color.4bef2795.js";import{u as z,c as m,a as A}from"./use-theme.3f20769a.js";import{s as B}from"./styled.1059e933.js";import{c as N,i as T}from"./size.daa38bd9.js";import{g as u,d as v,o as g,b,w as I,r as C,n as y,l as s,I as F,a1 as V,c as $,F as P,a as W,t as j,e as O,a5 as D,a6 as q,k as E,a2 as M,a3 as R}from"./framework.e8c749a8.js";const G=["title","body","label"],H=["h1","h2","h3","h4","h5","h6"],J={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},K=G.map(a=>N.map(t=>`${a}.${t}`)).flat(),L=[...H,...K],Q=S({variant:{type:String,values:L,default:"body.large"},component:{type:[String,Object]},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"},cs:{type:[Object,String]}}),U=a=>{const{variant:t}=a,[o,e,r]=t.match(/([\w\d]+)\.?(\w+)?/),n=z(),l=r?n.value.typography[e][r]:n.value.typography[e];return u(()=>{const[p]=f(a,"color"),d=a.cs?m(a.cs):"";return A(m({color:p.value,margin:0,border:"none",...l}),d)})},X=U,Y=v({__name:"index",props:Q,setup(a){const t=a,o=_("typography"),e=u(()=>{const{variant:n,component:l}=t,[p,d,h]=n.match(/([\w\d]+)\.?(\w+)?/);return[l??J[d]??"span",d,h]}),r=X(t);return(n,l)=>(g(),b(F(e.value[0]),{class:y([s(o).b(),n.$props.noWarp?s(o).m("nowarp"):"",n.$props.gutter?s(o).m("gutter"):"",s(r)])},{default:I(()=>[C(n.$slots,"default")]),_:3},8,["class"]))}}),k=x(Y,"InTypography");k.name="InTypography";const Z=k,tt=["dot","content"],at=S({content:{type:[String,Number,Object]},variant:{type:String,values:tt,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),et=v({__name:"index",props:at,setup(a){const t=a,o=V(),e=_("badge"),[r,n]=f(t,"color"),l={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},p=u(()=>o.default?m`
        ${t.xAlign}: 0;
        ${t.yAlign}: 0;
        position: absolute;
        transform: scale(1)
          translate(
            ${t.overlap?"0%":l[t.xAlign]},
            ${t.overlap?"0%":l[t.yAlign]}
          );
      `:""),d=u(()=>B(Z,{color:n.value})`
    background-color: ${r.value};
    height: ${t.variant==="dot"?"8px":"20px"};
    min-width: ${t.variant==="dot"?"8px":"20px"};
    border-radius: 10px;
    padding: ${t.variant==="dot"?"0":"6px"} !important;
  `),h=u(()=>{const{content:c,variant:i}=t;return i==="dot"||["string","number"].includes(typeof c)}),w=u(()=>{const{content:c,max:i}=t;return h.value?c&&i?["string","number"].includes(typeof c)?i&&+i<+c?`${i}+`:c:null:c:null});return(c,i)=>(g(),$("span",{class:y(s(e).b())},[C(c.$slots,"default"),h.value?(g(),b(s(d),{key:0,class:y([s(e).m("icon"),p.value]),variant:"label.small"},{default:I(()=>[t.variant!=="dot"?(g(),$(P,{key:0},[W(j(w.value),1)],64)):O("",!0)]),_:1},8,["class"])):(g(),b(t.content,{key:1,class:y([s(e).m("icon"),p.value])},null,8,["class"]))],2))}}),nt=x(et,"InBadge");nt.name="InBadge";const st=["circle","square","rounded"],ot=S({size:{type:[String,Number],default:40,validator:a=>T(a)||D(a)&&!isNaN(parseFloat(a))},variant:{type:String,values:st,default:"circle"},color:{type:[String,Function],default:"onSurface"},background:{type:[String,Function],default:"surfaceVariant"},cs:{type:[Object,String]}}),rt=a=>u(()=>{const[t]=f(a,"background"),[o]=f(a,"color"),e=m`
      height: ${a.size}px;
      width: ${a.size}px;
      min-width: ${a.size}px;
      background-color: ${t.value};
      color: ${o.value};
    `,r=a.cs?m(a.cs):"";return A(e,r)}),ct=rt,lt=v({inheritAttrs:!1}),it=v({...lt,__name:"index",props:ot,setup(a){const t=a,o=_("avatar"),e=ct(t),{class:r,...n}=q();return(l,p)=>(g(),$("div",{class:y([s(r),s(o).b(),s(o).m(t.variant),s(e)])},[C(l.$slots,"default",{},()=>[E("img",M(R(n)),null,16)])],2))}}),ut=x(it,"InAvatar");ut.name="InAvatar";export{ut as I,nt as a,Z as b,ot as c};
