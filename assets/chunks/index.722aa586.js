import{b as S,u as h,a as _,w as x}from"./useNamespace.b896a71a.js";import{u as k,c as f,a as w}from"./use-theme.a95fd13d.js";import{s as z}from"./styled.cfaead92.js";import{c as B,i as N}from"./size.318a9896.js";import{g as u,d as v,o as g,b,w as C,r as F,n as m,l as o,I as T,c as $,F as V,a as P,t as W,e as j,a5 as D,a6 as I,k as O,a2 as q,a3 as E}from"./framework.d007f42b.js";const M=["title","body","label"],R=["h1","h2","h3","h4","h5","h6"],G={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},H=M.map(a=>B.map(t=>`${a}.${t}`)).flat(),J=[...R,...H],K=S({variant:{type:String,values:J,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"},cs:{type:[Object,String]}}),L=a=>{const{variant:t}=a,[n,c,l]=t.match(/([\w\d]+)\.?(\w+)?/),r=k(),s=l?r.value.typography[c][l]:r.value.typography[c];return u(()=>{const[i]=h(a,"color"),d=a.cs?f(a.cs):"";return w(f({color:i.value,margin:0,border:"none",...s}),d)})},Q=L,U=v({__name:"index",props:K,setup(a){const t=a,n=_("typography"),c=u(()=>{const{variant:s,component:i}=t,[d,y,e]=s.match(/([\w\d]+)\.?(\w+)?/);return[i??G[y]??"span",y,e]}),l=u(()=>c.value[0]),r=Q(t);return(s,i)=>(g(),b(T(l.value),{class:m([o(n).b(),t.noWarp?o(n).m("nowarp"):"",t.gutter?o(n).m("gutter"):"",o(r)])},{default:C(()=>[F(s.$slots,"default")]),_:3},8,["class"]))}}),A=x(U,"FnTypography");A.name="FnTypography";const X=A,Y=["dot","content"],Z=S({content:{type:[String,Number,Object]},variant:{type:String,values:Y,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),tt=v({__name:"index",props:Z,setup(a){const t=a,n=_("badge"),[c,l]=h(t,"color"),r={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},s=u(()=>f`
    ${t.xAlign}: 0;
    ${t.yAlign}: 0;
    transform: scale(1)
      translate(
        ${t.overlap?"0%":r[t.xAlign]},
        ${t.overlap?"0%":r[t.yAlign]}
      );
  `),i=u(()=>z(X,{color:l.value})`
    background-color: ${c.value};
    height: ${t.variant==="dot"?"8px":"20px"};
    min-width: ${t.variant==="dot"?"8px":"20px"};
    border-radius: 10px;
    padding: ${t.variant==="dot"?"0":"6px"} !important;
  `),d=u(()=>{const{content:e,variant:p}=t;return p==="dot"||["string","number"].includes(typeof e)}),y=u(()=>{const{content:e,max:p}=t;return d.value?e&&p?["string","number"].includes(typeof e)?p&&+p<+e?`${p}+`:e:null:e:null});return(e,p)=>(g(),$("span",{class:m(o(n).b())},[F(e.$slots,"default"),d.value?(g(),b(o(i),{key:0,class:m([o(n).m("icon"),s.value]),variant:"label.small"},{default:C(()=>[t.variant!=="dot"?(g(),$(V,{key:0},[P(W(y.value),1)],64)):j("",!0)]),_:1},8,["class"])):(g(),b(t.content,{key:1,class:m([o(n).m("icon"),s.value])},null,8,["class"]))],2))}}),at=x(tt,"FnBadge");at.name="FnBadge";const et=["circle","square","rounded"],nt=S({size:{type:[String,Number],default:40,validator:a=>N(a)||D(a)&&!isNaN(parseFloat(a))},variant:{type:String,values:et,default:"circle"},color:{type:[String,Function],default:"onSurface"},backgroundColor:{type:[String,Function],default:"surfaceVariant"}}),ot=v({inheritAttrs:!1}),st=v({...ot,__name:"index",props:nt,setup(a){const t=a,n=_("avatar"),[c]=h(t,"backgroundColor"),[l]=h(t,"color"),r=u(()=>f`
    height: ${t.size}px;
    width: ${t.size}px;
    background-color: ${c.value};
    color: ${l.value};
  `),{class:s,...i}=I();return(d,y)=>(g(),$("div",{class:m([o(s),o(n).b(),o(n).m(t.variant),r.value])},[F(d.$slots,"default",{},()=>[O("img",q(E(i)),null,16)])],2))}}),rt=x(st,"FnAvatar");rt.name="FnAvatar";export{rt as F,at as a,X as b,nt as c};
