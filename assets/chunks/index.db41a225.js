import{b as l,u as m,a as d}from"./use-color.1a34fd9f.js";import{u as f,c as u,a as p}from"./use-theme.7c5c5ef1.js";import{g,d as h,H as b,L as y}from"./framework.ab2f636e.js";const z=l({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},component:{type:[Object,String],default:"svg"},cs:{type:[Object,String]}}),v=e=>g(()=>{const{typography:{pxToRem:n}}=f().value,[i]=m(e,"color");let o;const s=+e.size;if(isNaN(s)){const[a,t,c]=/(d+)(w+)/.exec(e.size)||[];o=c==="px"?n(+t):e.size}else o=n(s);const r=e.cs?u(e.cs):"";return p(u`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${o};
        color: ${i.value};
      `,r)}),C=v,F=h({props:z,setup(e,{slots:n}){var a;const i=d("svg-icon"),o=C(e),s=((a=n==null?void 0:n.default)==null?void 0:a.call(n))??[];if(s.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const r=e.component;return()=>{var t;return b(r,y({class:[i.b(),o.value]},(t=s[0])==null?void 0:t.props),{default:()=>{var c;return[(c=s[0])==null?void 0:c.children]}})}}});export{F};
