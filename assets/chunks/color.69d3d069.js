import{_ as a,C as o,o as s,b as u,d as p,h as f,z as i,c as _,H as r,F as l}from"./framework.64a5e477.js";const v={};function d(t,e){const n=o("fn-progress");return s(),u(n)}const b=a(v,[["render",d]]),g={};function x(t,e){const n=o("fn-progress");return s(),u(n,{variant:"linear"})}const y=a(g,[["render",x]]),F=p({__name:"determinate",setup(t){const e=f(0),n=setInterval(()=>{e.value=e.value>=100?0:e.value+10},800);return i(()=>{clearInterval(n)}),(c,k)=>{const m=o("fn-progress");return s(),_(l,null,[r(m,{value:e.value,status:"determinate"},null,8,["value"]),r(m,{variant:"linear",value:e.value,status:"determinate"},null,8,["value"])],64)}}}),C={};function $(t,e){const n=o("fn-progress");return s(),_(l,null,[r(n),r(n,{variant:"linear"})],64)}const I=a(C,[["render",$]]),h={};function D(t,e){const n=o("fn-progress");return s(),_(l,null,[r(n,{color:"error"}),r(n,{color:c=>c.colors.cyan[400]},null,8,["color"]),r(n,{color:"error",variant:"linear"}),r(n,{color:c=>c.colors.cyan[400],variant:"linear"},null,8,["color"])],64)}const z=a(h,[["render",D]]);export{b as D,F as _,y as a,I as b,z as c};