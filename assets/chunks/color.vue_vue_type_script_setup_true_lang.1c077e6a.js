import{d as u,f as n,o as s,y as d,z as i,a as _,D as r}from"./framework.41b990db.js";const v=u({__name:"base",setup(p){const e=n(1),o=n(2);return(c,a)=>{const l=r("fn-radio");return s(),d(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),value:o.value},{default:i(()=>[_(" Radio ")]),_:1},8,["modelValue","value"])}}}),f=u({__name:"disabled",setup(p){const e=n(1),o=n(1);return(c,a)=>{const l=r("fn-radio");return s(),d(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),value:o.value,disabled:""},{default:i(()=>[_(" Radio ")]),_:1},8,["modelValue","value"])}}}),V=u({__name:"option-list-horizontal",setup(p){const e=n(0),o=[{value:0,label:"Radio1"},{value:1,label:"Radio2"},{value:2,label:"Radio3",disabled:!0}];return(c,a)=>{const l=r("fn-radio");return s(),d(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),"option-list":o},{default:i(()=>[_(" Radio ")]),_:1},8,["modelValue"])}}}),b=u({__name:"option-list",setup(p){const e=n(0),o=[{value:0,label:"Radio1"},{value:1,label:"Radio2"},{value:2,label:"Radio3",disabled:!0}];return(c,a)=>{const l=r("fn-radio");return s(),d(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),horizontal:!1,"option-list":o},{default:i(()=>[_(" Radio ")]),_:1},8,["modelValue"])}}}),R=u({__name:"color",setup(p){const e=n(0),o=[{value:0,label:"Radio1"},{value:1,label:"Radio2"},{value:2,label:"Radio3"}];return(c,a)=>{const l=r("fn-radio");return s(),d(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),color:"#925ccf","option-list":o},{default:i(()=>[_(" Radio ")]),_:1},8,["modelValue"])}}});export{v as _,f as a,V as b,b as c,R as d};