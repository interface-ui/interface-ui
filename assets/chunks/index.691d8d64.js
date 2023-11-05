import{_ as w,w as x}from"./plugin-vue_export-helper.4dbbefff.js";import{a as N,i as V,b as m,d as k,u as F,e as I,f as P,c as W,g as T}from"./index.7b75f57c.js";import{e as v,ac as X,d as S,o as b,y as E,z as j,r as O,n as z,b as i,I as Y,ad as Z,g as q,l as G,h as J,v as K,c as C,F as Q,M as ee,X as ne,a7 as te,a8 as oe,D as H,C as se}from"./framework.8c39f4f9.js";import{i as re}from"./index.ce4c193d.js";function ce(e){return e>>24&255}function ie(e){return e>>16&255}function ae(e){return e>>8&255}function le(e){return e&255}function A(e){const o=ie(e),t=ae(e),s=le(e),n=ce(e);return{r:o,g:t,b:s,a:n}}function R(e){e=e.replace("#","");const o=e.length===3,t=e.length===6,s=e.length===8;if(!o&&!t&&!s)throw new Error("unexpected hex "+e);let n=0,r=0,c=0;return o?(n=p(e.slice(0,1).repeat(2)),r=p(e.slice(1,2).repeat(2)),c=p(e.slice(2,3).repeat(2))):t?(n=p(e.slice(0,2)),r=p(e.slice(2,4)),c=p(e.slice(4,6))):s&&(n=p(e.slice(2,4)),r=p(e.slice(4,6)),c=p(e.slice(6,8))),(255<<24|(n&255)<<16|(r&255)<<8|c&255)>>>0}function p(e){return parseInt(e,16)}const ue=(e,o,t)=>{const s=N();return v(()=>{if(!o||!(o in e))return t??null;const n=e==null?void 0:e[o];if(typeof n=="function"){const{r:a,g:u,b:y}=A(R(n(s.value)));return`${a} ${u} ${y}`}if(typeof n=="string"&&n in s.value.schemes)return`var(--md-sys-color-${n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}-rgb)`;const{r,g:c,b:d}=A(R(n));return`${r} ${c} ${d}`})};function _(e,o="px"){const t=re(e)||V(e);return!t&&!e?"":t?`${e}${o}`:(X(e),e)}const pe={cs:{type:[Object,String,Array]},component:{type:[String,Object],default:"button"}},de=e=>{const o=m`
    position: relative;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    text-transform: uppercase !important;
    vertical-align: middle;
    cursor: pointer;
    outline: 0px;
    appearance: none;
    &[disabled] {
      cursor: default;
    }
  `;return v(()=>{const t=e.cs?m(e.cs):"";return k(o,t)})},fe=S({__name:"index",props:pe,setup(e){const o=e,t=F("button-base"),s=de(o);return(n,r)=>(b(),E(Y(n.$props.component),{class:z([i(t).b(),i(s)])},{default:j(()=>[O(n.$slots,"default")]),_:3},8,["class"]))}});var me=w(fe,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/button-base/src/index.vue"]]);const L=x(me,"FnButtonBase");L.name="FnButtonBase";const ge=(e,o)=>{const t=I(e,"color","var(--fn-sys-color-ripple)");return v(()=>m`
      --fn-ripple--duration: ${e.duration}ms;
      & .${o.e("span")} {
        background-color: ${t.value};
      }
    `)},be=P({color:{type:[String,Function],default:"var(--fn-sys-color-ripple)"},center:{type:Boolean,default:!1},duration:{type:Number,default:600}}),ve=S({__name:"index",props:be,setup(e,{expose:o}){var t;const s=e,n=Z([]),r=(t=q())==null?void 0:t.parent,c=F("ripple"),d=ge(s,c);let a=null,u=null;const y=l=>{const g=l.currentTarget,f=g.getBoundingClientRect(),h=Math.max(g.clientWidth,g.clientHeight),$=h/2,U=s.center?g.clientWidth/2-$:l.clientX-f.left-$,D=s.center?g.clientHeight/2-$:l.clientY-f.top-$;n.push({x:U,y:D,size:h})},B=()=>{a&&(clearTimeout(a),a=null)};return G(()=>{n.length>0&&(B(),a=setTimeout(()=>{n.length=0,B()},s.duration*2))}),J(()=>{var l;r&&(u=(l=r.proxy)==null?void 0:l.$el.addEventListener("mousedown",y))}),K(()=>{var l;B(),u&&((l=r==null?void 0:r.proxy)==null||l.$el.removeEventListener(u),u=null)}),o({addRipple:y}),(l,g)=>(b(),C("span",{class:z([i(c).b(),i(d)])},[(b(!0),C(Q,null,ee(n,(f,h)=>(b(),C("span",{key:`ripple_${h}`,style:ne({top:i(_)(f.y),left:i(_)(f.x),width:i(_)(f.size),height:i(_)(f.size)}),class:z([[i(c).e("span")],"pressed-state-layer"])},null,6))),128))],2))}});var ye=w(ve,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/ripple/src/index.vue"]]);const M=x(ye,"FnRipple");M.name="FnRipple";const he={size:{type:String,values:W,default:"medium"},color:{type:[String,Function],default:"primary"},cs:{type:[Object,String,Array]}},$e=(e,o)=>v(()=>{const t=I(e,"color","var(--md-sys-color-primary)"),s=ue(e,"color","var(--md-sys-color-primary-rgb)"),n=e.cs?m(e.cs):"";return k(m`
        --fn-icon-button-color: ${t.value};
        --fn-icon-button-color-rgb: ${s.value};
        background-color: transparent;
        appearance: none;
        padding: 8px;
        border-radius: 50%;
        height: fit-content;
        color: var(--fn-icon-button-color);
        &[disabled] {
          color: var(--fn-sys-color-disabled-level-0);
        }
        &.${o.m(e.size)} .fn-icon {
          font-size: ${T[e.size]}px;
        }
        @media (any-hover: hover) {
          &:not([disabled]):hover {
            background-color: rgb(
              var(--fn-icon-button-color-rgb) /
                var(--md-sys-state-hover-state-layer-opacity)
            );
          }
        }
      `,n)}),_e=S({__name:"index",props:he,setup(e){const o=e,t=F("icon-button"),s=$e(o,t);return(n,r)=>(b(),E(i(L),{class:z([i(t).b(),i(t).m(n.$props.size),i(s)])},{default:j(()=>[O(n.$slots,"default",te(oe({size:i(T)[n.$props.size],color:n.$props.color}))),H(i(M),{color:n.$props.color,center:""},null,8,["color"])]),_:3},8,["class"]))}});var ze=w(_e,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/icon-button/src/index.vue"]]);const Fe=x(ze,"FnIconButton");Fe.name="FnIconButton";const Se=P({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},component:{type:[Object,String,Array],default:"svg"},cs:{type:[Object,String,Array]}}),Be=e=>v(()=>{const{typography:{pxToRem:o}}=N().value,t=I(e,"color");let s;const n=+e.size;if(isNaN(n)){const[c,d,a]=/(d+)(w+)/.exec(e.size)||[];s=a==="px"?o(+d):e.size}else s=o(n);const r=e.cs?m(e.cs):"";return k(m`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${s};
        color: ${t.value};
      `,r)});var Ie=S({props:Se,setup(e,{slots:o}){var t,s;const n=F("svg-icon"),r=Be(e),c=(s=(t=o==null?void 0:o.default)==null?void 0:t.call(o))!=null?s:[];if(c.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const d=e.component;return()=>{var a;return H(d,se({class:[n.b(),r.value]},(a=c[0])==null?void 0:a.props),{default:()=>{var u;return[(u=c[0])==null?void 0:u.children]}})}}});export{Ie as F,Fe as a};
