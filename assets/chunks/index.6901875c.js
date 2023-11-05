import{b as $,u as S,a as h,w as _}from"./useNamespace.cfd15732.js";import{d as f,e as c,o as g,y as v,z as C,r as x,n as m,b as a,I as k,c as b,F as B,a as N,t as T,A as w,a5 as V,a6 as P,x as W,a7 as D,a8 as I}from"./framework.8c39f4f9.js";import{u as j,c as F}from"./emotion-css.esm.448a5830.js";import{c as q,t as E,i as M}from"./size.5973b14d.js";import{s as O}from"./styled.a5980154.js";const R=["title","body","label"],G=["h1","h2","h3","h4","h5","h6"],H={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},J=R.map(n=>q.map(t=>`${n}.${t}`)).flat(),K=[...G,...J],L=$({variant:{type:String,values:K,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"}}),Q=f({__name:"index",props:L,setup(n){const t=n,r=S("typography"),p=j(),u=c(()=>{const{variant:s,component:l}=t,[o,e,z]=s.match(/([\w\d]+)\.?(\w+)?/);return[l??H[e]??"span",e,z]}),i=c(()=>u.value[0]),d=h(t,"color","var(--md-sys-color-on-primary)"),y=c(()=>{const[s,l,o]=u.value,e=o?p.value.typography[l][o]:p.value.typography[l];return F({color:d.value,[`&:is(${i.value})`]:{margin:0,border:"none",...e}})});return(s,l)=>(g(),v(k(a(i)),{class:m([a(r).b(),t.noWarp?a(r).m("nowarp"):"",t.gutter?a(r).m("gutter"):"",a(y)])},{default:C(()=>[x(s.$slots,"default")]),_:3},8,["class"]))}}),A=_(Q,"FnTypography");A.name="FnTypography";const U=A,X=["dot","content"],Y=$({content:{type:[String,Number,Object]},variant:{type:String,values:X,default:"content"},color:{type:[String,Function],default:"error"},max:{type:[String,Number]},overlap:{type:Boolean,default:!1},xAlign:{type:String,values:["left","right"],default:"right"},yAlign:{type:String,values:["top","bottom"],default:"top"}}),Z=f({__name:"index",props:Y,setup(n){const t=n,r=S("badge"),p=h(t,"color","var(--md-sys-color-error)"),u=c(()=>E.includes(t.color)?`var(--md-sys-color-on-${t.color})`:"var(--md-sys-color-on-primary)"),i={top:"-50%",bottom:"50%",right:"50%",left:"-50%"},d=c(()=>F`
    ${t.xAlign}: 0;
    ${t.yAlign}: 0;
    transform: scale(1)
      translate(
        ${t.overlap?"0%":i[t.xAlign]},
        ${t.overlap?"0%":i[t.yAlign]}
      );
  `),y=c(()=>O(U,{color:u.value})`
    background-color: ${p.value};
    height: ${t.variant==="dot"?"8px":"20px"};
    min-width: ${t.variant==="dot"?"8px":"20px"};
    border-radius: 10px;
    padding: ${t.variant==="dot"?"0":"6px"} !important;
  `),s=c(()=>{const{content:o,variant:e}=t;return e==="dot"||["string","number"].includes(typeof o)}),l=c(()=>{const{content:o,max:e}=t;return s.value?o&&e?["string","number"].includes(typeof o)?e&&+e<+o?`${e}+`:o:null:o:null});return(o,e)=>(g(),b("span",{class:m(a(r).b())},[x(o.$slots,"default"),a(s)?(g(),v(a(y),{key:0,class:m([a(r).m("icon"),a(d)]),variant:"label.small"},{default:C(()=>[t.variant!=="dot"?(g(),b(B,{key:0},[N(T(a(l)),1)],64)):w("",!0)]),_:1},8,["class"])):(g(),v(t.content,{key:1,class:m([a(r).m("icon"),a(d)])},null,8,["class"]))],2))}}),tt=_(Z,"FnBadge");tt.name="FnBadge";const at=["circle","square","rounded"],ot=$({size:{type:[String,Number],default:40,validator:n=>M(n)||V(n)&&!isNaN(parseFloat(n))},variant:{type:String,values:at,default:"circle"},color:{type:[String,Function],default:"onSurface"},backgroundColor:{type:[String,Function],default:"surfaceVariant"}}),et=f({inheritAttrs:!1}),nt=f({...et,__name:"index",props:ot,setup(n){const t=n,r=S("avatar"),p=h(t,"backgroundColor"),u=h(t,"color"),i=c(()=>F`
    height: ${t.size}px;
    width: ${t.size}px;
    background-color: ${p.value};
    color: ${u.value};
  `),{class:d,...y}=P();return(s,l)=>(g(),b("div",{class:m([a(d),a(r).b(),a(r).m(t.variant),a(i)])},[x(s.$slots,"default",{},()=>[W("img",D(I(y)),null,16)])],2))}}),rt=_(nt,"FnAvatar");rt.name="FnAvatar";export{rt as F,tt as a,ot as b,U as c};
