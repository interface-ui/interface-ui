import{d as p,r as _,o as i,t as c,b as o,f as a,S as d,F as f,a9 as l}from"./framework.7kcRRdgV.js";import{m as V,W as k,g as x}from"./theme.bt76IPpI.js";const $=p({__name:"basic",setup(v){const n=_(!1);return(r,t)=>{const e=l("in-button"),u=l("in-modal");return i(),c(f,null,[o(e,{variant:"outlined",onClick:t[0]||(t[0]=s=>n.value=!n.value)},{default:a(()=>[d("Open modal")]),_:1}),o(u,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=s=>n.value=s)},null,8,["modelValue"])],64)}}}),w=p({__name:"backdrop",setup(v){V();const n=_(!1),r=k(x)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`;return(t,e)=>{const u=l("in-button"),s=l("in-card-content"),b=l("in-modal");return i(),c(f,null,[o(u,{variant:"outlined",onClick:e[0]||(e[0]=m=>n.value=!n.value)},{default:a(()=>[d("Open modal")]),_:1}),o(b,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=m=>n.value=m),backdrop:!1},{default:a(()=>[o(r,null,{default:a(()=>[o(s,null,{default:a(()=>[d(" The Modal without backdrop ")]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{$ as _,w as a};
