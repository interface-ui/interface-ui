import{d as p,h as _,D as l,o as i,c,I as e,w as a,a as d,F as f}from"./framework.G0-1KnGU.js";import{u as b,V as k}from"./index.m2_F9Bgt.js";import{c as x}from"./index.TABJNjI_.js";const g=p({__name:"basic",setup(v){const n=_(!1);return(r,t)=>{const o=l("in-button"),s=l("in-modal");return i(),c(f,null,[e(o,{variant:"outlined",onClick:t[0]||(t[0]=u=>n.value=!n.value)},{default:a(()=>[d("Open modal")]),_:1}),e(s,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=u=>n.value=u)},null,8,["modelValue"])],64)}}}),B=p({__name:"backdrop",setup(v){b();const n=_(!1),r=k(x)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`;return(t,o)=>{const s=l("in-button"),u=l("in-card-content"),V=l("in-modal");return i(),c(f,null,[e(s,{variant:"outlined",onClick:o[0]||(o[0]=m=>n.value=!n.value)},{default:a(()=>[d("Open modal")]),_:1}),e(V,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=m=>n.value=m),backdrop:!1},{default:a(()=>[e(r,null,{default:a(()=>[e(u,null,{default:a(()=>[d(" The Modal without backdrop ")]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{g as _,B as a};
