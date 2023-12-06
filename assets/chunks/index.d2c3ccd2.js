import{b as l,u as m,a as g,w as d}from"./install.9dd8a85e.js";import{u as f,c as u,a as p}from"./use-theme.152c0be8.js";import{g as h,d as v,H as S,L as b}from"./framework.e05ac2f0.js";const y=l({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},component:{type:[Object,String],default:"svg"},cs:{type:[Object,String]}}),z=e=>h(()=>{const{typography:{pxToRem:n}}=f().value,[i]=m(e,"color");let o;const s=+e.size;if(isNaN(s)){const[r,t,c]=/(d+)(w+)/.exec(e.size)||[];o=c==="px"?n(+t):e.size}else o=n(s);const a=e.cs?u(e.cs):"";return p(u`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${o};
        color: ${i.value};
      `,a)}),I=z,C=v({props:y,setup(e,{slots:n}){var r;const i=g("svg-icon"),o=I(e),s=((r=n==null?void 0:n.default)==null?void 0:r.call(n))??[];if(s.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const a=e.component;return()=>{var t;return S(a,b({class:[i.b(),o.value]},(t=s[0])==null?void 0:t.props),{default:()=>{var c;return[(c=s[0])==null?void 0:c.children]}})}}}),F=d(C,"FnSvgIcon");F.name="FnSvgIcon";export{F,C as S};
