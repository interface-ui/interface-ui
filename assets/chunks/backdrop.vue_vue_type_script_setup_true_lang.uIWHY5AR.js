import{d as p,h as _,D as l,o as i,c,I as e,w as a,a as d,F as f}from"./framework._ihLCNCP.js";import{u as V,U as k}from"./index.6nNuSTqo.js";import{d as x}from"./index.oJKIa9gP.js";const $=p({__name:"basic",setup(v){const n=_(!1);return(r,t)=>{const o=l("in-button"),s=l("in-modal");return i(),c(f,null,[e(o,{variant:"outlined",onClick:t[0]||(t[0]=u=>n.value=!n.value)},{default:a(()=>[d("Open modal")]),_:1}),e(s,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=u=>n.value=u)},null,8,["modelValue"])],64)}}}),g=p({__name:"backdrop",setup(v){V();const n=_(!1),r=k(x)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`;return(t,o)=>{const s=l("in-button"),u=l("in-card-content"),b=l("in-modal");return i(),c(f,null,[e(s,{variant:"outlined",onClick:o[0]||(o[0]=m=>n.value=!n.value)},{default:a(()=>[d("Open modal")]),_:1}),e(b,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=m=>n.value=m),backdrop:!1},{default:a(()=>[e(r,null,{default:a(()=>[e(u,null,{default:a(()=>[d(" The Modal without backdrop ")]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{$ as _,g as a};
