import{d as _,e as w,o as c,y as k,z as x,r as B,n as U,b as r,I as K,a6 as Q,a2 as Z,c as v,a as T,t as E,A as N,x as C,a7 as F,a8 as $,D as o,C as I,a4 as ee,f as b,B as h,M as q,F as Y,ah as W,aj as R}from"./framework.8c39f4f9.js";import{u as le}from"./emotion-css.esm.448a5830.js";import{s as X}from"./styled.a5980154.js";import{_ as M,w as j}from"./plugin-vue_export-helper.4dbbefff.js";import{c as L,f as H,u as G,a as te,e as O,b as y,d as ae,U as oe,h as ne,F as re}from"./index.7b75f57c.js";import{p as J}from"./dist.8b7644e2.js";const de=["title","body","label"],ie=["h1","h2","h3","h4","h5","h6"],se={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},ue=de.map(i=>L.map(e=>`${i}.${e}`)).flat(),fe=[...ie,...ue],pe=H({variant:{type:String,values:fe,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"}}),me=_({__name:"index",props:pe,setup(i){const e=i,n=G("typography"),t=te(),a=w(()=>{var s;const{variant:u,component:p}=e,[S,m,V]=u.match(/([\w\d]+)\.?(\w+)?/);return[(s=p??se[m])!=null?s:"span",m,V]}),l=w(()=>a.value[0]),d=O(e,"color","var(--md-sys-color-on-primary)"),f=w(()=>{const[s,u,p]=a.value,S=p?t.value.typography[u][p]:t.value.typography[u];return y({color:d.value,[`&:is(${l.value})`]:{margin:0,border:"none",...S}})});return(s,u)=>(c(),k(K(r(l)),{class:U([r(n).b(),e.noWarp?r(n).m("nowarp"):"",e.gutter?r(n).m("gutter"):"",r(f)])},{default:x(()=>[B(s.$slots,"default")]),_:3},8,["class"]))}});var ce=M(me,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/typography/src/index.vue"]]);const A=j(ce,"FnTypography");A.name="FnTypography";const xe=["outlined","filled","standard"],ve=H({modelValue:{type:String,required:!0,default:""},variant:{type:String,values:xe,default:"outlined"},label:{type:String},color:{type:[String,Function],default:"primary"},size:{type:String,values:L,default:"large"},cs:{type:[String,Array,Object]},error:{type:Boolean,default:!1},supportingText:{type:String}}),be=i=>{const e=y`
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    min-width: 0px;
    color: var(--fn-text-field-color);
    width: fit-content;
    & .fn-text-field--input-wrapper {
      height: var(--fn-text-field-height);
      position: relative;
      display: inline-flex;
      flex-direction: row;
      border-radius: inherit;
      overflow: hidden;
      align-items: center;
      transition: background-color 0.2s ease 0s;
      & > .fn-text-field--start-adornment {
        margin-left: 12px;
      }
      & > .fn-text-field--end-adornment {
        margin-right: 12px;
      }
      & > .fn-text-field--start-adornment,
      & > .fn-text-field--end-adornment {
        display: inline-flex;
        font-size: 24px;
        color: var(--md-sys-color-on-surface-variant);
      }
    }
    & .fn-text-field__label {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      text-overflow: ellipsis;
      text-align: left;
      z-index: 1;
      transform-origin: left;
      max-width: calc(100% - 32px) !important;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        padding 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }
    & .fn-text-field--border {
      position: absolute;
      pointer-events: none;
      width: 100%;
      margin: 0;
      inset: 0;
      overflow: hidden;
      border-style: solid;
      height: 100%;
    }
    &:focus-within {
      & .fn-text-field__label {
        color: var(--fn-text-field-color);
      }
    }
    & .fn-text-field__input {
      border: none;
      height: 100%;
      width: 100%;
      &:not([disabled]) {
        color: var(--md-sys-color-on-surface);
      }
      &::placeholder {
        opacity: 0;
        transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }
    }
    &--border {
      position: absolute;
      pointer-events: none;
      width: 100%;
      margin: 0;
      overflow: hidden;
      border-style: solid;
      height: 100%;
    }
    &:has(:required) {
      & .fn-text-field__label::after,
      & legend::after {
        content: ' *';
        color: var(--md-sys-color-error);
      }
    }
    &[disabled] {
      color: var(--fn-sys-color-disabled-level-0);
      & > .fn-text-field__label {
        color: inherit;
      }
      & > .fn-text-field--supporting-text {
        opacity: var(--md-sys-state-disabled-state-layer-opacity);
      }
      & > .fn-text-field--input-wrapper {
        color: inherit;
      }
    }
  `,n=y`
    border-radius: var(--md-sys-shape-corner-extra-small-default-size);
    & .fn-text-field--border {
      border-width: 1px;
      border-color: var(--md-sys-color-outline);
      border-radius: inherit;
      height: 100%;
    }
    & fieldset.fn-text-field--border {
      inset: -5px 0 0;
      height: auto;
      padding: 0 8px;
      & legend {
        float: unset;
        width: auto;
        overflow: hidden;
        display: block;
        padding: 0;
        height: 11px;
        font-size: 0.75rem;
        visibility: hidden;
        max-width: 0;
        transition: max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          padding 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        white-space: nowrap;
      }
    }
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-outline-hover);
    }
    & .fn-text-field__label {
      transform: translate(16px, calc((var(--fn-text-field-height) - 20px) / 2))
        scale(1);
    }
    & .fn-text-field--supporting-text {
      padding: 4px 16px 0;
    }
    &:focus-within {
      & .fn-text-field--border {
        border-width: 2px;
        border-color: var(--fn-text-field-color);
      }
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field__label {
        transform: translate(16px, -50%) scale(0.75);
      }
      & fieldset.fn-text-field--border legend {
        max-width: 100%;
        padding: 0 6px;
      }
    }
    & .fn-text-field__input {
      padding: 0 16px;
    }
    &[disabled] {
      & .fn-text-field--border,
      &:hover .fn-text-field--border {
        border-color: var(--fn-sys-color-disabled-level-1);
      }
    }
  `,t=y`
    & > .fn-text-field--input-wrapper {
      border-top-left-radius: var(
        --md-sys-shape-corner-extra-small-top-top-left
      );
      border-top-right-radius: var(
        --md-sys-shape-corner-extra-small-top-top-right
      );
      /**
        UPDATE NEEDED
        should use var(--md-sys-color-surface-container-heightest)
        @link https://m3.material.io/components/text-fields/specs
      */
      background-color: rgb(var(--md-sys-color-on-surface-rgb) / 0.04);
      &:hover {
        background-color: rgb(var(--md-sys-color-on-surface-rgb) / 0.08);
      }
    }
    & .fn-text-field__input {
      padding: calc(var(--fn-text-field-height) - 32px) 16px 8px;
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__label {
        transform: translate(
            16px,
            var(--fn-text-fiedl-filled-standard-label-translateY)
          )
          scale(0.75);
      }
    }
    & .fn-text-field--input-wrapper {
      > .fn-text-field--start-adornment {
        margin-bottom: 8px;
        margin-top: calc(var(--fn-text-field-height) - 32px);
      }
    }
    & .fn-text-field__label {
      transform: translate(16px, calc((var(--fn-text-field-height) - 20px) / 2))
        scale(1);
    }
    & .fn-text-field--supporting-text {
      padding: 4px 16px 0;
    }
    & .fn-text-field--border {
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 1px solid var(--md-sys-color-outline);
        pointer-events: none;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 2px solid var(--fn-text-field-color);
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }
    }
    &:focus-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
    }
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-outline-hover);
    }
    &[disabled] {
      & > .fn-text-field--input-wrapper {
        background-color: var(--fn-sys-color-disabled-level-1);
      }
    }
  `,a=y`
    & .fn-text-field__label {
      transform: translate(0, calc((var(--fn-text-field-height) - 20px) / 2))
        scale(1);
    }
    & .fn-text-field__input {
      padding: calc(var(--fn-text-field-height) - 32px) 0 8px;
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__label {
        transform: translate(
            0,
            var(--fn-text-fiedl-filled-standard-label-translateY)
          )
          scale(0.75);
      }
    }
    & .fn-text-field--supporting-text {
      padding: 4px 0 0;
    }
    & .fn-text-field--input-wrapper {
      > .fn-text-field--start-adornment {
        margin-left: 0;
        margin-right: 8px;
      }
      > .fn-text-field--end-adornment {
        margin-right: 0;
        margin-left: 8px;
      }
      > .fn-text-field--start-adornment,
      > .fn-text-field--end-adornment {
        margin-bottom: 8px;
        margin-top: calc(var(--fn-text-field-height) - 32px);
      }
    }
    & .fn-text-field--border {
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 1px solid var(--md-sys-color-outline);
        pointer-events: none;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 2px solid var(--fn-text-field-color);
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }
    }
    &:focus-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
    }
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-outline-hover);
    }
  `,l=y`
    --fn-text-field-height: 32px;
    --fn-text-fiedl-filled-standard-label-translateY: 0%;
    &.fn-text-field--filled,
    &.fn-text-field--standard {
      & .fn-text-field__input::placeholder {
        opacity: 1 !important;
      }
      & .fn-text-field__label {
        display: none;
      }
      & .fn-text-field__input {
        padding-bottom: 0;
      }
    }
  `,d=y`
    --fn-text-field-height: 40px;
    --fn-text-fiedl-filled-standard-label-translateY: -50%;
    &.fn-text-field--filled {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field__label {
        display: none;
      }
    }
  `,f=y`
    --fn-text-field-height: 56px;
    --fn-text-fiedl-filled-standard-label-translateY: 10%;
  `,s=y`
    & .fn-text-field__label,
    & .fn-text-field--supporting-text {
      color: var(--md-sys-color-error);
    }
    & .fn-text-field--border,
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-error);
      &::before {
        border-color: var(--md-sys-color-error);
      }
    }
  `;return w(()=>{const u=i.error?O(i,null,"var(--md-sys-color-error)"):O(i,"color","var(--md-sys-color-primary)"),p=i.cs?y(i.cs):"";return ae(y({"--fn-text-field-color":u.value}),e,{[n]:i.variant==="outlined"},{[t]:i.variant==="filled"},{[a]:i.variant==="standard"},{[l]:i.size==="small"},{[d]:i.size==="medium"},{[f]:i.size==="large"},{[s]:i.error},p)})},ge=_({__name:"index",props:ve,emits:["update:modelValue"],setup(i,{emit:e}){const n=i,t=Q(),a=Z(),l=G("text-field"),d=be(n),f=w({get(){return n.modelValue},set(m){e(oe,m)}}),s=()=>(Math.random()+1).toString(36).substring(7),u=t!=null&&t.id?t.id:`text-field-${s()}`,p=w(()=>{var m;return(m=n==null?void 0:n.label)!=null?m:""}),S=w(()=>{var m;const V=(m=a==null?void 0:a.startAdornment)==null?void 0:m.call(a);return!ne(n.modelValue)||!!V});return(m,V)=>(c(),v("div",{class:U([r(l).b(),r(l).m(n.variant),r(l).m(n.size),r(S)?r(l).m("content-within"):"",r(d)])},[n!=null&&n.label?(c(),k(r(A),{key:0,id:r(u),component:"label",class:U([r(l).e("label")]),color:"rgb(var(--md-sys-color-on-surface-rgb) / 0.6);","no-warp":""},{default:x(()=>[T(E(r(p)),1)]),_:1},8,["id","class"])):N("v-if",!0),C("div",{class:U([r(l).m("input-wrapper")])},[B(m.$slots,"startAdornment",F($({class:[r(l).m("start-adornment")]}))),o(r(re),I({id:r(u)},m.$attrs,{modelValue:r(f),"onUpdate:modelValue":V[0]||(V[0]=z=>ee(f)?f.value=z:null),class:[r(l).e("input")]}),null,16,["id","modelValue","class"]),B(m.$slots,"endAdornment",F($({class:[r(l).m("end-adornment")]}))),m.$props.variant==="outlined"&&(n!=null&&n.label)?(c(),v("fieldset",{key:0,class:U([r(l).m("border")])},[o(r(A),{component:"legend","no-warp":""},{default:x(()=>[T(E(r(p)),1)]),_:1})],2)):(c(),v("span",{key:1,class:U([r(l).m("border")])},null,2))],2),n!=null&&n.supportingText?(c(),k(r(A),{key:1,class:U([r(l).m("supporting-text")]),variant:"body.small","no-warp":""},{default:x(()=>[T(E(n.supportingText),1)]),_:1},8,["class"])):N("v-if",!0)],2))}});var ye=M(ge,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/text-field/src/index.vue"]]);const P=j(ye,"FnTextField");P.name="FnTextField";const he={fscw:"","gap-5":"","flex-nowrap":""},Ee=_({__name:"basic",setup(i){const e=b("");return(n,t)=>{const a=h("fn-text-field");return c(),v("div",he,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),label:"Outlined",placeholder:"Placeholder"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),variant:"filled",label:"Filled",placeholder:"Placeholder"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),variant:"standard",label:"Standard",placeholder:"Placeholder"},null,8,["modelValue"])])}}}),Be=_({__name:"form-props",setup(i){const e=b("Hello World"),n=b(""),t=["outlined","filled","standard"],a=X("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & .fn-text-field {
    width: calc(100% / 3.2);
  }

  & > div + div {
    margin-top: 30px;
  }
`;return(l,d)=>{const f=h("fn-text-field");return c(),k(a,{flex:"","flex-col":"","gap-10":""},{default:x(()=>[(c(!0),v(Y,null,q(r(t),s=>(c(),v("div",{key:s,fscw:"","gap-3":""},[o(f,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=u=>e.value=u),placeholder:"Required",label:"Required",variant:s,required:""},null,8,["modelValue","variant"]),o(f,{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=u=>e.value=u),placeholder:"Disabled",label:"Disabled",variant:s,disabled:""},null,8,["modelValue","variant"]),o(f,{modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=u=>n.value=u),placeholder:"Password",label:"Password",type:"password",variant:s},null,8,["modelValue","variant"]),o(f,{modelValue:e.value,"onUpdate:modelValue":d[3]||(d[3]=u=>e.value=u),placeholder:"Read Only",label:"Read Only",variant:s,readonly:""},null,8,["modelValue","variant"]),o(f,{modelValue:n.value,"onUpdate:modelValue":d[4]||(d[4]=u=>n.value=u),placeholder:"Number",label:"Number",type:"number",variant:s},null,8,["modelValue","variant"]),o(f,{modelValue:n.value,"onUpdate:modelValue":d[5]||(d[5]=u=>n.value=u),placeholder:"Search Field",label:"Search Field",type:"search",variant:s},null,8,["modelValue","variant"])]))),128))]),_:1})}}}),_e={flex:"","flex-col":"","gap-10":""},Ve={fscw:"","gap-5":"","flex-nowrap":""},we={fscw:"","gap-5":"","flex-nowrap":""},Se={fscw:"","gap-5":"","flex-nowrap":""},Oe=_({__name:"size",setup(i){const e=b("");return(n,t)=>{const a=h("fn-text-field");return c(),v("div",_e,[C("div",Ve,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),size:"small",label:"Outlined"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),size:"small",variant:"filled",label:"Filled"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),size:"small",variant:"standard",label:"Standard"},null,8,["modelValue"])]),C("div",we,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value=l),size:"medium",label:"Outlined"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[4]||(t[4]=l=>e.value=l),size:"medium",variant:"filled",label:"Filled"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value=l),size:"medium",variant:"standard",label:"Standard"},null,8,["modelValue"])]),C("div",Se,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value=l),label:"Outlined"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value=l),variant:"filled",label:"Filled"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value=l),variant:"standard",label:"Standard"},null,8,["modelValue"])])])}}}),Ie=_({__name:"label",setup(i){const e=b(""),n=X("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  .fn-text-field {
    width: 40%;
  }
  .fn-form-label {
    justify-content: center;
    .fn-typography {
      min-width: 80px;
    }
  }
`;return(t,a)=>{const l=h("fn-form-label");return c(),k(n,null,{default:x(()=>[o(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),control:r(P),label:"Outlined","label-placement":"left"},null,8,["modelValue","control"]),o(l,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value=d),control:r(P),variant:"filled",label:"Filled","label-placement":"left"},null,8,["modelValue","control"]),o(l,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value=d),control:r(P),variant:"standard",label:"Standard","label-placement":"left"},null,8,["modelValue","control"])]),_:1})}}}),ze={fscw:"","gap-5":""},Xe=_({__name:"icon",setup(i){const{AccountCircleFilled:e}=J,n=b(""),t=le(),a=X("div")`
  display: flex;
  align-items: center;
  & > .fn-icon {
    margin-right: 8px;
    display: inline-flex;
  }
`;return(l,d)=>{const f=h("fn-text-field");return c(),v("div",ze,[o(f,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=s=>n.value=s),size:"large",variant:"standard",label:"Standard",placeholder:"Internal Icon"},{startAdornment:x(s=>[o(r(e),I(s,{size:"24",color:r(t).schemes.onSurfaceVariant}),null,16,["color"])]),_:1},8,["modelValue"]),o(a,null,{default:x(()=>[o(r(e),{size:"24",color:r(t).schemes.onSurfaceVariant},null,8,["color"]),o(f,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=s=>n.value=s),size:"large",variant:"standard",label:"Standard",placeholder:"External Icon"},null,8,["modelValue"])]),_:1})])}}}),Ue={flex:"","flex-col":"","gap-5":""},Ne=_({__name:"icon-flexiable",setup(i){const{VisibilityFilled:e,VisibilityOffFilled:n}=J,t=b(""),a=b(""),l=b(""),d=b(!1),f=w(()=>d.value?"text":"password"),s=["outlined","filled","standard"];return(u,p)=>{const S=h("fn-typography"),m=h("fn-text-field"),V=h("fn-icon-button");return c(),v("div",Ue,[(c(!0),v(Y,null,q(r(s),z=>(c(),v("div",{key:z,flex:"","gap-5":""},[o(m,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=g=>t.value=g),size:"large",variant:z,label:"Weight",placeholder:"Weight"},{startAdornment:x(g=>[o(S,F($(g)),{default:x(()=>[T(" kg ")]),_:2},1040)]),_:2},1032,["modelValue","variant"]),o(m,{modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=g=>a.value=g),size:"large",variant:z,"supporting-text":"Input the amount",label:"Amount",placeholder:"Amount"},{endAdornment:x(g=>[o(S,F($(g)),{default:x(()=>[T(" $ ")]),_:2},1040)]),_:2},1032,["modelValue","variant"]),o(m,{modelValue:l.value,"onUpdate:modelValue":p[3]||(p[3]=g=>l.value=g),size:"large",variant:z,label:"Password","supporting-text":"Input your password",placeholder:"Password",type:r(f)},{endAdornment:x(g=>[o(V,I(g,{onClick:p[2]||(p[2]=D=>d.value=!d.value)}),{default:x(D=>[W(o(r(e),F($(D)),null,16),[[R,d.value]]),W(o(r(n),F($(D)),null,16),[[R,!d.value]])]),_:2},1040)]),_:2},1032,["modelValue","variant","type"])]))),128))])}}}),Fe={fscw:"","gap-5":"","flex-nowrap":""},We=_({__name:"color",setup(i){const e=b("");return(n,t)=>{const a=h("fn-text-field");return c(),v("div",Fe,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),color:"tertiary",label:"Tertiary"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),color:"#2E7D32",variant:"filled",label:"Custom Color"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),color:l=>l.colors.cyan[400],variant:"standard",label:"Theme Color"},null,8,["modelValue","color"])])}}}),$e={fscw:"","gap-5":"","flex-nowrap":""},Re=_({__name:"error",setup(i){const e=b("");return(n,t)=>{const a=h("fn-text-field");return c(),v("div",$e,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),error:"",label:"Outlined","supporting-text":"Some detail information"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),error:"",variant:"filled",label:"Filled","supporting-text":"Some detail information"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),error:"",variant:"standard",label:"Standard","supporting-text":"Some detail information"},null,8,["modelValue"])])}}});export{Ee as _,Be as a,Oe as b,Ie as c,Xe as d,Ne as e,We as f,Re as g};
