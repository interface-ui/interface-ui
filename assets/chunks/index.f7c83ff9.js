import{i as M,e as _,c as k,b as S,d as V,w as z,a as P}from"./size.bae1d3d8.js";import{ab as R,e as h,g as x,d as E,ah as U,f as D,l as A,h as H,v as I,o as w,c as N,F as O,M as X,X as q,b as t,n as m,x as $,a4 as W,ai as Y,C as j,a6 as G,D as J}from"./framework.95a0123a.js";const K=e=>R(e)?!Number.isNaN(Number(e)):!1;function g(e,c="px"){const s=M(e)||K(e);return!s&&!e?"":s?`${e}${c}`:(R(e),e)}const Q=(e,c)=>{const s=_(e.color);return h(()=>k`
      & .${c.e("span")} {
        background-color: ${s.value??"var(--md-sys-color-primary)"};
      }
    `)},Z=(e,c)=>{const s=_(e.color),o=x(),{disabled:r}=(o==null?void 0:o.attrs)||{};return h(()=>{const i=e.modelValue?s.value||"var(--md-sys-color-primary)":"#fff",a=e.modelValue?s.value||"var(--md-sys-color-primary)":"#605959",f=e.modelValue?s.value||"var(--md-sys-color-primary)":"#000";return k`
      opacity: ${r===""?.5:1};
      --fn-switch-color: ${s.value||"var(--md-sys-color-primary)"};
      --fn-switch--track-color: ${f};
      --fn-switch--dot-color: ${i};
      --fn-switch--dot-hover-color: ${a};
      & .${c.e("icon")} {
        color: ${s.value||"var(--md-sys-color-primary)"};
      }
    `})},ee="update:modelValue",se=S({color:{type:[String,Function],default:"var(--fn-sys-color-ripple)"},center:{type:Boolean,default:!1}}),te=E({__name:"index",props:se,setup(e,{expose:c}){var C;const s=e,o=U([]),r=D(600),i=(C=x())==null?void 0:C.parent,a=V("ripple"),f=Q(s,a);let p=null,n=null;const u=l=>{const b=l.currentTarget,d=b.getBoundingClientRect(),v=Math.max(b.clientWidth,b.clientHeight),F=v/2,L=s.center?0:l.clientX-d.left-F,T=s.center?0:l.clientY-d.top-F;o.push({x:L,y:T,size:v})},y=()=>{p&&(clearTimeout(p),p=null)};return A(()=>{o.length>0&&(y(),p=setTimeout(()=>{o.length=0,y()},r.value*4))}),H(()=>{var l;i&&(n=(l=i.proxy)==null?void 0:l.$el.addEventListener("mousedown",u))}),I(()=>{var l;y(),n&&((l=i==null?void 0:i.proxy)==null||l.$el.removeEventListener(n),n=null)}),c({addRipple:u}),(l,b)=>(w(),N("span",{class:m([t(a).b(),t(f)])},[(w(!0),N(O,null,X(o,(d,v)=>(w(),N("span",{key:`ripple_${v}`,style:q({top:t(g)(d.y),left:t(g)(d.x),width:t(g)(d.size),height:t(g)(d.size)}),class:m([[t(a).e("span")],"pressed-state-layer"])},null,6))),128))],2))}}),B=z(te,"FnRipple");B.name="FnRipple";const oe=B,re=S({modelValue:{type:Boolean,required:!0},color:{type:[String,Function],default:"primary"},size:{type:String,value:P,default:"medium"},enableRipple:{type:Boolean,default:!0}}),ne=E({__name:"index",props:re,emits:["update:modelValue"],setup(e,{emit:c}){const s=e,o=x(),r=V("switch"),i=Z(s,r),a=h({get(){return s.modelValue},set(n){c(ee,n)}}),f=h(()=>{const{size:n}=s,{disabled:u}=(o==null?void 0:o.attrs)||{};return[r.b(),r.m(n),u===""?r.m("disabled"):""]}),p=h(()=>{const{disabled:n}=(o==null?void 0:o.attrs)||{};return[n===""?r.m("disabled"):r.m("enabled"),a.value?r.m("active"):""]});return(n,u)=>(w(),N("span",{class:m([...t(f),t(i)])},[$("div",{class:m([t(r).e(`overlay--${s.size}`),t(p)])},[$("div",{class:m([t(r).e(`dot--${s.size}`)])},null,2),W($("input",j(n.$attrs,{"onUpdate:modelValue":u[0]||(u[0]=y=>G(a)?a.value=y:null),class:[t(r).e("input")],type:"checkbox"}),null,16),[[Y,t(a)]]),J(t(oe),{color:s.color,center:""},null,8,["color"])],2),$("div",{class:m([t(r).e("track")])},null,2)],2))}}),ae=z(ne,"FnCheckbox");ae.name="FnSwitchNew";export{ae as F,ee as U,g as a,oe as b};
