import{b as l,a as m,u as d,w as g}from"./useNamespace.948b7fc8.js";import{u as f,c as u,a as p}from"./emotion-css.esm.27878de9.js";import{e as h,d as v,D as y,C as S}from"./framework.34a1867b.js";const b=l({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},component:{type:[Object,String,Array],default:"svg"},cs:{type:[Object,String,Array]}}),z=e=>h(()=>{const{typography:{pxToRem:n}}=f().value,i=m(e,"color");let o;const s=+e.size;if(isNaN(s)){const[a,t,c]=/(d+)(w+)/.exec(e.size)||[];o=c==="px"?n(+t):e.size}else o=n(s);const r=e.cs?u(e.cs):"";return p(u`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${o};
        color: ${i.value};
      `,r)}),C=z,I=v({props:b,setup(e,{slots:n}){var a;const i=d("svg-icon"),o=C(e),s=((a=n==null?void 0:n.default)==null?void 0:a.call(n))??[];if(s.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const r=e.component;return()=>{var t;return y(r,S({class:[i.b(),o.value]},(t=s[0])==null?void 0:t.props),{default:()=>{var c;return[(c=s[0])==null?void 0:c.children]}})}}}),F=g(I,"FnSvgIcon");F.name="FnSvgIcon";export{F,I as S};
