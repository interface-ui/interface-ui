import{f as m,a as v,g,d as u,e as f,u as p}from"./size.a557f17c.js";import{g as h,d as w,H as b,L as y}from"./framework.c340a892.js";var d;const z=typeof window<"u",x=e=>typeof e=="number";z&&((d=window==null?void 0:window.navigator)!=null&&d.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const C=m({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},component:{type:[Object,String],default:"svg"},cs:{type:[Object,String]}}),N=e=>h(()=>{const{typography:{pxToRem:n}}=v().value,[s]=g(e,"color");let o;const t=+e.size;if(isNaN(t)){const[i,c,r]=/(d+)(w+)/.exec(e.size)||[];o=r==="px"?n(+c):e.size}else o=n(t);const a=e.cs?u(e.cs):"";return f(u`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${o};
        color: ${s.value};
      `,a)});var F=w({props:C,setup(e,{slots:n}){var s,o;const t=p("svg-icon"),a=N(e),i=(o=(s=n==null?void 0:n.default)==null?void 0:s.call(n))!=null?o:[];if(i.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const c=e.component;return()=>{var r;return b(c,y({class:[t.b(),a.value]},(r=i[0])==null?void 0:r.props),{default:()=>{var l;return[(l=i[0])==null?void 0:l.children]}})}}});export{F,x as i};
