import{d as _,e as V,o as c,y as T,z as v,r as D,n as w,b as n,I as G,a5 as J,a2 as K,c as b,a as F,t as A,A as I,x as k,a6 as U,a7 as $,D as o,C as X,a3 as Q,f as g,B as y,M as R,F as q,ag as O,ai as N}from"./framework.34a1867b.js";import{u as Z}from"./emotion-css.esm.27878de9.js";import{s as B}from"./styled.d54a182d.js";import{_ as Y,w as M}from"./plugin-vue_export-helper.4dbbefff.js";import{c as j,f as L,u as H,a as ee,e as E,b as h,d as le,U as te,h as ae,F as oe}from"./index.626633b9.js";import{h as W,b as ne,x as re}from"./dist.392a2792.js";const de=["title","body","label"],ie=["h1","h2","h3","h4","h5","h6"],se={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",title:"h6",body:"p",label:"span"},ue=de.map(i=>j.map(e=>`${i}.${e}`)).flat(),fe=[...ie,...ue],pe=L({variant:{type:String,values:fe,default:"body.large"},component:{type:String},noWarp:{type:Boolean,default:!1},gutter:{type:Boolean,default:!1},color:{type:[String,Function],default:"onSurface"}}),me=_({__name:"index",props:pe,setup(i){const e=i,r=H("typography"),t=ee(),a=V(()=>{var s;const{variant:u,component:x}=e,[S,p,m]=u.match(/([\w\d]+)\.?(\w+)?/);return[(s=x??se[p])!=null?s:"span",p,m]}),l=V(()=>a.value[0]),d=E(e,"color","var(--md-sys-color-on-primary)"),f=V(()=>{const[s,u,x]=a.value,S=x?t.value.typography[u][x]:t.value.typography[u];return h({color:d.value,[`&:is(${l.value})`]:{margin:0,border:"none",...S}})});return(s,u)=>(c(),T(G(n(l)),{class:w([n(r).b(),e.noWarp?n(r).m("nowarp"):"",e.gutter?n(r).m("gutter"):"",n(f)])},{default:v(()=>[D(s.$slots,"default")]),_:3},8,["class"]))}});var ce=Y(me,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/typography/src/index.vue"]]);const C=M(ce,"FnTypography");C.name="FnTypography";const xe=["outlined","filled","standard"],ve=L({modelValue:{type:String,required:!0,default:""},variant:{type:String,values:xe,default:"outlined"},label:{type:String},color:{type:[String,Function],default:"primary"},size:{type:String,values:j,default:"large"},cs:{type:[String,Array,Object]},error:{type:Boolean,default:!1},supportingText:{type:String}}),be=i=>{const e=h`
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
  `,r=h`
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
  `,t=h`
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
  `,a=h`
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
  `,l=h`
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
  `,d=h`
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
  `,f=h`
    --fn-text-field-height: 56px;
    --fn-text-fiedl-filled-standard-label-translateY: 10%;
  `,s=h`
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
  `;return V(()=>{const u=i.error?E(i,null,"var(--md-sys-color-error)"):E(i,"color","var(--md-sys-color-primary)"),x=i.cs?h(i.cs):"";return le(h({"--fn-text-field-color":u.value}),e,{[r]:i.variant==="outlined"},{[t]:i.variant==="filled"},{[a]:i.variant==="standard"},{[l]:i.size==="small"},{[d]:i.size==="medium"},{[f]:i.size==="large"},{[s]:i.error},x)})},ge=_({__name:"index",props:ve,emits:["update:modelValue"],setup(i,{emit:e}){const r=i,t=J(),a=K(),l=H("text-field"),d=be(r),f=V({get(){return r.modelValue},set(p){e(te,p)}}),s=()=>(Math.random()+1).toString(36).substring(7),u=t!=null&&t.id?t.id:`text-field-${s()}`,x=V(()=>{var p;return(p=r==null?void 0:r.label)!=null?p:""}),S=V(()=>{var p;const m=(p=a==null?void 0:a.startAdornment)==null?void 0:p.call(a);return!ae(r.modelValue)||!!m});return(p,m)=>(c(),b("div",{class:w([n(l).b(),n(l).m(r.variant),n(l).m(r.size),n(S)?n(l).m("content-within"):"",n(d)])},[r!=null&&r.label?(c(),T(n(C),{key:0,id:n(u),component:"label",class:w([n(l).e("label")]),color:"rgb(var(--md-sys-color-on-surface-rgb) / 0.6);","no-warp":""},{default:v(()=>[F(A(n(x)),1)]),_:1},8,["id","class"])):I("v-if",!0),k("div",{class:w([n(l).m("input-wrapper")])},[D(p.$slots,"startAdornment",U($({class:[n(l).m("start-adornment")]}))),o(n(oe),X({id:n(u)},p.$attrs,{modelValue:n(f),"onUpdate:modelValue":m[0]||(m[0]=z=>Q(f)?f.value=z:null),class:[n(l).e("input")]}),null,16,["id","modelValue","class"]),D(p.$slots,"endAdornment",U($({class:[n(l).m("end-adornment")]}))),p.$props.variant==="outlined"&&(r!=null&&r.label)?(c(),b("fieldset",{key:0,class:w([n(l).m("border")])},[o(n(C),{component:"legend","no-warp":""},{default:v(()=>[F(A(n(x)),1)]),_:1})],2)):(c(),b("span",{key:1,class:w([n(l).m("border")])},null,2))],2),r!=null&&r.supportingText?(c(),T(n(C),{key:1,class:w([n(l).m("supporting-text")]),variant:"body.small","no-warp":""},{default:v(()=>[F(A(r.supportingText),1)]),_:1},8,["class"])):I("v-if",!0)],2))}});var he=Y(ge,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/text-field/src/index.vue"]]);const P=M(he,"FnTextField");P.name="FnTextField";const ye={fscw:"","gap-5":"","flex-nowrap":""},Ee=_({__name:"basic",setup(i){const e=g("");return(r,t)=>{const a=y("fn-text-field");return c(),b("div",ye,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),label:"Outlined",placeholder:"Placeholder"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),variant:"filled",label:"Filled",placeholder:"Placeholder"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),variant:"standard",label:"Standard",placeholder:"Placeholder"},null,8,["modelValue"])])}}}),Xe=_({__name:"form-props",setup(i){const e=g("Hello World"),r=g(""),t=["outlined","filled","standard"],a=B("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & .fn-text-field {
    width: calc(100% / 3.2);
  }

  & > div + div {
    margin-top: 30px;
  }
`;return(l,d)=>{const f=y("fn-text-field");return c(),T(a,{flex:"","flex-col":"","gap-10":""},{default:v(()=>[(c(!0),b(q,null,R(n(t),s=>(c(),b("div",{key:s,fscw:"","gap-3":""},[o(f,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=u=>e.value=u),placeholder:"Required",label:"Required",variant:s,required:""},null,8,["modelValue","variant"]),o(f,{modelValue:e.value,"onUpdate:modelValue":d[1]||(d[1]=u=>e.value=u),placeholder:"Disabled",label:"Disabled",variant:s,disabled:""},null,8,["modelValue","variant"]),o(f,{modelValue:r.value,"onUpdate:modelValue":d[2]||(d[2]=u=>r.value=u),placeholder:"Password",label:"Password",type:"password",variant:s},null,8,["modelValue","variant"]),o(f,{modelValue:e.value,"onUpdate:modelValue":d[3]||(d[3]=u=>e.value=u),placeholder:"Read Only",label:"Read Only",variant:s,readonly:""},null,8,["modelValue","variant"]),o(f,{modelValue:r.value,"onUpdate:modelValue":d[4]||(d[4]=u=>r.value=u),placeholder:"Number",label:"Number",type:"number",variant:s},null,8,["modelValue","variant"]),o(f,{modelValue:r.value,"onUpdate:modelValue":d[5]||(d[5]=u=>r.value=u),placeholder:"Search Field",label:"Search Field",type:"search",variant:s},null,8,["modelValue","variant"])]))),128))]),_:1})}}}),_e={flex:"","flex-col":"","gap-10":""},Ve={fscw:"","gap-5":"","flex-nowrap":""},we={fscw:"","gap-5":"","flex-nowrap":""},Se={fscw:"","gap-5":"","flex-nowrap":""},Be=_({__name:"size",setup(i){const e=g("");return(r,t)=>{const a=y("fn-text-field");return c(),b("div",_e,[k("div",Ve,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),size:"small",label:"Outlined"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),size:"small",variant:"filled",label:"Filled"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),size:"small",variant:"standard",label:"Standard"},null,8,["modelValue"])]),k("div",we,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value=l),size:"medium",label:"Outlined"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[4]||(t[4]=l=>e.value=l),size:"medium",variant:"filled",label:"Filled"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value=l),size:"medium",variant:"standard",label:"Standard"},null,8,["modelValue"])]),k("div",Se,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value=l),label:"Outlined"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value=l),variant:"filled",label:"Filled"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value=l),variant:"standard",label:"Standard"},null,8,["modelValue"])])])}}}),Ie=_({__name:"label",setup(i){const e=g(""),r=B("div")`
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
`;return(t,a)=>{const l=y("fn-form-label");return c(),T(r,null,{default:v(()=>[o(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),control:n(P),label:"Outlined","label-placement":"left"},null,8,["modelValue","control"]),o(l,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value=d),control:n(P),variant:"filled",label:"Filled","label-placement":"left"},null,8,["modelValue","control"]),o(l,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value=d),control:n(P),variant:"standard",label:"Standard","label-placement":"left"},null,8,["modelValue","control"])]),_:1})}}}),ze={fscw:"","gap-5":""},Oe=_({__name:"icon",setup(i){const e=g(""),r=Z(),t=B("div")`
  display: flex;
  align-items: center;
  & > .fn-icon {
    margin-right: 8px;
    display: inline-flex;
  }
`;return(a,l)=>{const d=y("fn-text-field");return c(),b("div",ze,[o(d,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=f=>e.value=f),size:"large",variant:"standard",label:"Standard",placeholder:"Internal Icon"},{startAdornment:v(f=>[o(n(W),X(f,{size:"24",color:n(r).schemes.onSurfaceVariant}),null,16,["color"])]),_:1},8,["modelValue"]),o(t,null,{default:v(()=>[o(n(W),{size:"24",color:n(r).schemes.onSurfaceVariant},null,8,["color"]),o(d,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=f=>e.value=f),size:"large",variant:"standard",label:"Standard",placeholder:"External Icon"},null,8,["modelValue"])]),_:1})])}}}),Ue={flex:"","flex-col":"","gap-5":""},Ne=_({__name:"icon-flexiable",setup(i){const e=g(""),r=g(""),t=g(""),a=g(!1),l=V(()=>a.value?"text":"password"),d=["outlined","filled","standard"];return(f,s)=>{const u=y("fn-typography"),x=y("fn-text-field"),S=y("fn-icon-button");return c(),b("div",Ue,[(c(!0),b(q,null,R(n(d),p=>(c(),b("div",{key:p,flex:"","gap-5":""},[o(x,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=m=>e.value=m),size:"large",variant:p,label:"Weight",placeholder:"Weight"},{startAdornment:v(m=>[o(u,U($(m)),{default:v(()=>[F("kg")]),_:2},1040)]),_:2},1032,["modelValue","variant"]),o(x,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=m=>r.value=m),size:"large",variant:p,"supporting-text":"Input the amount",label:"Amount",placeholder:"Amount"},{endAdornment:v(m=>[o(u,U($(m)),{default:v(()=>[F(" $ ")]),_:2},1040)]),_:2},1032,["modelValue","variant"]),o(x,{modelValue:t.value,"onUpdate:modelValue":s[3]||(s[3]=m=>t.value=m),size:"large",variant:p,label:"Password","supporting-text":"Input your password",placeholder:"Password",type:n(l)},{endAdornment:v(m=>[o(S,X(m,{onClick:s[2]||(s[2]=z=>a.value=!a.value)}),{default:v(z=>[O(o(n(ne),U($(z)),null,16),[[N,a.value]]),O(o(n(re),U($(z)),null,16),[[N,!a.value]])]),_:2},1040)]),_:2},1032,["modelValue","variant","type"])]))),128))])}}}),$e={fscw:"","gap-5":"","flex-nowrap":""},We=_({__name:"color",setup(i){const e=g("");return(r,t)=>{const a=y("fn-text-field");return c(),b("div",$e,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),color:"tertiary",label:"Tertiary"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),color:"#2E7D32",variant:"filled",label:"Custom Color"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),color:l=>l.colors.cyan[400],variant:"standard",label:"Theme Color"},null,8,["modelValue","color"])])}}}),Fe={fscw:"","gap-5":"","flex-nowrap":""},Re=_({__name:"error",setup(i){const e=g("");return(r,t)=>{const a=y("fn-text-field");return c(),b("div",Fe,[o(a,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),error:"",label:"Outlined","supporting-text":"Some detail information"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l),error:"",variant:"filled",label:"Filled","supporting-text":"Some detail information"},null,8,["modelValue"]),o(a,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value=l),error:"",variant:"standard",label:"Standard","supporting-text":"Some detail information"},null,8,["modelValue"])])}}});export{Ee as _,Xe as a,Be as b,Ie as c,Oe as d,Ne as e,We as f,Re as g};
