import{_ as f,B as a,o as l,c as r,x as n,D as e,F as d,d as u,z as s,a as p}from"./framework.4b7f70f7.js";const b={},m={"space-y-5":"","w-full":""},g=n("br",null,null,-1);function T(_,c){const t=a("fn-alert");return l(),r(d,null,[n("div",m,[e(t,{state:"info",closable:"",description:"This is a description."}),e(t,{state:"success",description:"This is a description.",closable:""}),e(t,{state:"danger",description:"This is a description.",closable:""}),e(t,{state:"warning",description:"This is a description.",closable:""})]),g],64)}const E=f(b,[["render",T]]),x={"space-y-5":"","w-full":""},$=n("br",null,null,-1),I=u({__name:"close",setup(_){const c=t=>{alert("close")};return(t,i)=>{const o=a("fn-alert"),h=a("fn-icon");return l(),r(d,null,[n("div",x,[e(o,{state:"info",description:"This is a description."}),e(o,{state:"success",description:"This is a description.",closable:"",onClose:c}),e(o,{state:"danger",description:"This is a description.",onClose:c},{closeArea:s(()=>[p(" Ikun ")]),_:1}),e(o,{state:"warning",description:"This is a description.",onClose:c},{closeArea:s(()=>[e(h,{icon:"ant-design:apple-outlined"})]),_:1})]),$],64)}}}),w={"space-y-5":"","w-full":""},A=n("br",null,null,-1),q=u({__name:"center",setup(_){return(c,t)=>{const i=a("fn-icon"),o=a("fn-alert");return l(),r(d,null,[n("div",w,[e(o,{center:"",state:"info",description:"This is a description."},{closeArea:s(()=>[e(i,{icon:"streamline-emojis:artist-palette"})]),_:1}),e(o,{center:"",state:"success",description:"This is a description."},{closeArea:s(()=>[e(i,{icon:"streamline-emojis:artist-palette"})]),_:1}),e(o,{state:"danger",center:"",description:"This is a description."},{closeArea:s(()=>[e(i,{icon:"streamline-emojis:artist-palette"})]),_:1}),e(o,{center:"",state:"warning",description:"This is a description."},{closeArea:s(()=>[e(i,{icon:"streamline-emojis:artist-palette"})]),_:1})]),A],64)}}}),C={},y={"space-y-5":"","w-full":""},v=n("br",null,null,-1);function B(_,c){const t=a("fn-alert");return l(),r(d,null,[n("div",y,[e(t,{title:"This is a title.",description:"This is a description.",state:"info",closable:""}),e(t,{title:"This is a title.",state:"success",description:"This is a description.",closable:""}),e(t,{title:"This is a title.",state:"danger",description:"This is a description.",closable:""}),e(t,{title:"This is a title.",state:"warning",description:"This is a description.",closable:""})]),v],64)}const G=f(C,[["render",B]]),j={},D={"space-y-5":"","w-full":""},M=n("br",null,null,-1);function z(_,c){const t=a("fn-icon"),i=a("fn-alert");return l(),r(d,null,[n("div",D,[e(i,{state:"info","fixed-tip":"Message：",description:"Use flexTip to add front fixed content to the description."},{fixedArea:s(()=>[e(t,{icon:"twemoji:1st-place-medal",size:"20"})]),_:1}),e(i,{state:"success",description:"Use flexTip to add front fixed content to the description.",closable:""},{fixedArea:s(()=>[e(t,{icon:"twemoji:2nd-place-medal",size:"20"})]),_:1}),e(i,{state:"danger",title:"This is a title.",description:"Use flexTip to add front fixed content to the description.",closable:""},{fixedArea:s(()=>[e(t,{icon:"twemoji:3rd-place-medal",size:"20"})]),_:1}),e(i,{state:"warning",title:"This is a title.",description:"Use flexTip to add front fixed content to the description.",closable:""},{fixedArea:s(()=>[p(" Message: ")]),_:1})]),M],64)}const H=f(j,[["render",z]]),U={},k={"space-y-5":"","w-full":""},N=n("br",null,null,-1);function V(_,c){const t=a("fn-alert");return l(),r(d,null,[n("div",k,[e(t,{state:"info",scrollable:"",duration:"10",description:"By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."}),e(t,{state:"success","fixed-tip":"Message：",scrollable:"",duration:"8",description:"By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute.",closable:""}),e(t,{state:"warning",scrollable:"",direction:"top",description:"By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute.",closable:""},{fixedArea:s(()=>[p(" Message: ")]),_:1}),e(t,{state:"danger",scrollable:"",direction:"top",title:"This is a title",duration:"5",description:"By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute.",closable:""},{fixedArea:s(()=>[p(" Message: ")]),_:1})]),N],64)}const J=f(U,[["render",V]]);export{E as D,I as _,q as a,G as b,H as c,J as d};