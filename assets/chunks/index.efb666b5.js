import{b as l,u as m,a as d,w as g}from"./useNamespace.e57db071.js";import{u as f,c as u,a as p}from"./emotion-css.esm.c63cfe69.js";import{e as h,d as v,D as S,C as y}from"./framework.8c39f4f9.js";const b=l({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},component:{type:[Object,String],default:"svg"},cs:{type:[Object,String,Array]}}),z=e=>h(()=>{const{typography:{pxToRem:n}}=f().value,[i]=m(e,"color");let o;const s=+e.size;if(isNaN(s)){const[r,t,c]=/(d+)(w+)/.exec(e.size)||[];o=c==="px"?n(+t):e.size}else o=n(s);const a=e.cs?u(e.cs):"";return p(u`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${o};
        color: ${i.value};
      `,a)}),C=z,I=v({props:b,setup(e,{slots:n}){var r;const i=d("svg-icon"),o=C(e),s=((r=n==null?void 0:n.default)==null?void 0:r.call(n))??[];if(s.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const a=e.component;return()=>{var t;return S(a,y({class:[i.b(),o.value]},(t=s[0])==null?void 0:t.props),{default:()=>{var c;return[(c=s[0])==null?void 0:c.children]}})}}}),F=g(I,"FnSvgIcon");F.name="FnSvgIcon";export{F,I as S};
