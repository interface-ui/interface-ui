import{e as m,f as A,w as X,b as a,d as x,o as u,y as $,z as w,r as C,n as v,I as Xe,h as J,g as ke,a7 as Q,a8 as K,A as R,D as F,ao as Se,C as V,ah as P,x as d,c as b,aj as H,T as ie,B as U,X as E,a as D,t as k,ak as Tt,a3 as me,al as ze,U as Qe,a0 as It,ap as Ke,ai as Ot,a4 as le,_ as ce,F as q,a6 as Ze,S as Pt,a5 as Et,a2 as Lt,M as ae,i as Ht,aq as Vt,ar as Nt,K as _e,as as Dt,u as jt,l as Ut,at as Wt,au as Gt,av as qt,aw as Xt,ax as Qt,ay as Kt,az as Zt,aA as Yt,aB as Jt,aC as en,aD as tn,aE as nn,H as on}from"./chunks/framework.8c39f4f9.js";import{V as rn,t as Te}from"./chunks/theme.b19cd6ee.js";import{u as T,w as B,a as Z,c as sn,b as de,d as an}from"./chunks/useNamespace.cfd15732.js";import{u as Ye,g as Ie,j as Oe,c as S,a as ee}from"./chunks/emotion-css.esm.448a5830.js";import{a as xe,U as Y,b as Fe,u as ln,i as cn,F as dn,c as un}from"./chunks/index.2544a3a3.js";import{u as Je,b as fn,n as re,d as pn,r as et,e as hn,f as tt,g as nt,t as ot,i as mn,c as ne,h as Ce,j as bn}from"./chunks/size.5973b14d.js";import{S as ue,F as gn}from"./chunks/index.d5660b0b.js";import{b as vn,F as rt,c as se,a as yn}from"./chunks/index.6901875c.js";import"./chunks/styled.a5980154.js";const be=(e,t,n)=>{const o=Ye();return m(()=>{if(!t||!(t in e))return n??null;const r=e==null?void 0:e[t];if(typeof r=="function"){const{r:c,g:p,b:h}=Ie(Oe(r(o.value)));return`${c} ${p} ${h}`}if(typeof r=="string"&&r in o.value.schemes)return`var(--md-sys-color-${r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}-rgb)`;const{r:s,g:i,b:l}=Ie(Oe(r));return`${s} ${i} ${l}`})};function st(e){var t;const n=et(e);return(t=n==null?void 0:n.$el)!=null?t:n}const at=tt?window:void 0,_n=tt?window.navigator:void 0;function xn(...e){let t,n,o,r;if(fn(e[0])?([n,o,r]=e,t=at):[t,n,o,r]=e,!t)return re;let s=re;const i=X(()=>st(t),c=>{s(),c&&(c.addEventListener(n,o,r),s=()=>{c.removeEventListener(n,o,r),s=re})},{immediate:!0,flush:"post"}),l=()=>{i(),s()};return nt(l),l}function it(e,t=!1){const n=A(),o=()=>n.value=!!e();return o(),pn(o,t),n}function wn(e={}){const{navigator:t=_n,read:n=!1,source:o,copiedDuring:r=1500}=e,s=["copy","cut"],i=it(()=>t&&"clipboard"in t),l=A(""),c=A(!1),p=Je(()=>c.value=!1,r);function h(){t.clipboard.readText().then(f=>{l.value=f})}if(i.value&&n)for(const f of s)xn(f,h);async function g(f=et(o)){i.value&&f!=null&&(await t.clipboard.writeText(f),l.value=f,c.value=!0,p.start())}return{isSupported:i,text:l,copied:c,copy:g}}const Pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ee="__vueuse_ssr_handlers__";Pe[Ee]=Pe[Ee]||{};var Le=Object.getOwnPropertySymbols,$n=Object.prototype.hasOwnProperty,kn=Object.prototype.propertyIsEnumerable,Sn=(e,t)=>{var n={};for(var o in e)$n.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Le)for(var o of Le(e))t.indexOf(o)<0&&kn.call(e,o)&&(n[o]=e[o]);return n};function Fn(e,t,n={}){const o=n,{window:r=at}=o,s=Sn(o,["window"]);let i;const l=it(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},p=X(()=>st(e),g=>{c(),l.value&&r&&g&&(i=new ResizeObserver(t),i.observe(g,s))},{immediate:!0,flush:"post"}),h=()=>{c(),p()};return nt(h),{isSupported:l,stop:h}}var He;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(He||(He={}));var Cn=Object.defineProperty,Ve=Object.getOwnPropertySymbols,Bn=Object.prototype.hasOwnProperty,An=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?Cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mn=(e,t)=>{for(var n in t||(t={}))Bn.call(t,n)&&Ne(e,n,t[n]);if(Ve)for(var n of Ve(t))An.call(t,n)&&Ne(e,n,t[n]);return e};const Rn={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Mn({linear:hn},Rn);const we=e=>{const t={};return Object.keys(e).forEach(n=>{t[n]=a(e[n])}),t},zn={cs:{type:[Object,String,Array]},component:{type:[String,Object],default:"button"}},Tn=e=>{const t=S`
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
  `;return m(()=>{const n=e.cs?S(e.cs):"";return ee(t,n)})},In=Tn,On=x({__name:"index",props:zn,setup(e){const t=e,n=T("button-base"),o=In(t);return(r,s)=>(u(),$(Xe(r.$props.component),{class:v([a(n).b(),a(o)])},{default:w(()=>[C(r.$slots,"default")]),_:3},8,["class"]))}}),lt=B(On,"FnButtonBase");lt.name="FnButtonBase";const Be=lt,Pn=(e,t)=>{const n=Z(e,"color","var(--md-sys-color-primary)"),o=be(e,"color","var(--md-sys-color-primary)"),r=m(()=>ot.includes(e.color)?`var(--md-sys-color-on-${e.color})`:null);return m(()=>S`
      --fn-button-color: ${n.value};
      --fn-button-color-rgb: ${o.value};
      --fn-button-on-color: ${r.value??"var(--md-sys-color-on-primary)"};
      &.${t.m("filled")} {
          box-shadow: ${e.disableElevation?"var(--md-sys-elevation-level-0)":"var(--md-sys-elevation-level-2)"};
          &:not([disabled]):hover {
            box-shadow: ${e.disableElevation?"var(--md-sys-elevation-level-0)":"var(--md-sys-elevation-level-4)"};
          },
        },
      &.${t.m(e.size)} {
        height: ${oo[e.size]}px;
      }
    `)},En=e=>{const t=m(()=>{const o={};return e.percentage&&mn(e.percentage)&&e.percentage>0&&(o["--progress-bar-width"]=`${e.percentage}%`,o.height="0.5rem"),o.height=xe(e.height),o["--progress-bar-inner-bg"]=e.barColor,o["--progress-bar-out-bg"]=e.background,o["--bar-duration"]=e.duration?`${e.duration}s`:"2s",o["--progress-bar-bg"]=e.color,o["--current-progress"]=`${Number(e.percentage)/100*360}deg`,o}),n=m(()=>{const o={height:"auto"};return o["--current-progress"]=`${Number(e.percentage)/100*360}deg`,o});return{styleList:t,styleListCircle:n}};function M(e,t){Ln(e)&&(e="100%");var n=Hn(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function pe(e){return Math.min(1,Math.max(0,e))}function Ln(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Hn(e){return typeof e=="string"&&e.indexOf("%")!==-1}function ct(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function he(e){return e<=1?"".concat(Number(e)*100,"%"):e}function G(e){return e.length===1?"0"+e:String(e)}function Vn(e,t,n){return{r:M(e,255)*255,g:M(t,255)*255,b:M(n,255)*255}}function De(e,t,n){e=M(e,255),t=M(t,255),n=M(n,255);var o=Math.max(e,t,n),r=Math.min(e,t,n),s=0,i=0,l=(o+r)/2;if(o===r)i=0,s=0;else{var c=o-r;switch(i=l>.5?c/(2-o-r):c/(o+r),o){case e:s=(t-n)/c+(t<n?6:0);break;case t:s=(n-e)/c+2;break;case n:s=(e-t)/c+4;break}s/=6}return{h:s,s:i,l}}function ge(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Nn(e,t,n){var o,r,s;if(e=M(e,360),t=M(t,100),n=M(n,100),t===0)r=n,s=n,o=n;else{var i=n<.5?n*(1+t):n+t-n*t,l=2*n-i;o=ge(l,i,e+1/3),r=ge(l,i,e),s=ge(l,i,e-1/3)}return{r:o*255,g:r*255,b:s*255}}function je(e,t,n){e=M(e,255),t=M(t,255),n=M(n,255);var o=Math.max(e,t,n),r=Math.min(e,t,n),s=0,i=o,l=o-r,c=o===0?0:l/o;if(o===r)s=0;else{switch(o){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4;break}s/=6}return{h:s,s:c,v:i}}function Dn(e,t,n){e=M(e,360)*6,t=M(t,100),n=M(n,100);var o=Math.floor(e),r=e-o,s=n*(1-t),i=n*(1-r*t),l=n*(1-(1-r)*t),c=o%6,p=[n,i,s,s,l,n][c],h=[l,n,n,i,s,s][c],g=[s,s,l,n,n,i][c];return{r:p*255,g:h*255,b:g*255}}function Ue(e,t,n,o){var r=[G(Math.round(e).toString(16)),G(Math.round(t).toString(16)),G(Math.round(n).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function jn(e,t,n,o,r){var s=[G(Math.round(e).toString(16)),G(Math.round(t).toString(16)),G(Math.round(n).toString(16)),G(Un(o))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Un(e){return Math.round(parseFloat(e)*255).toString(16)}function We(e){return O(e)/255}function O(e){return parseInt(e,16)}function Wn(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var $e={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gn(e){var t={r:0,g:0,b:0},n=1,o=null,r=null,s=null,i=!1,l=!1;return typeof e=="string"&&(e=Qn(e)),typeof e=="object"&&(N(e.r)&&N(e.g)&&N(e.b)?(t=Vn(e.r,e.g,e.b),i=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):N(e.h)&&N(e.s)&&N(e.v)?(o=he(e.s),r=he(e.v),t=Dn(e.h,o,r),i=!0,l="hsv"):N(e.h)&&N(e.s)&&N(e.l)&&(o=he(e.s),s=he(e.l),t=Nn(e.h,o,s),i=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=ct(n),{ok:i,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var qn="[-\\+]?\\d+%?",Xn="[-\\+]?\\d*\\.\\d+%?",W="(?:".concat(Xn,")|(?:").concat(qn,")"),ve="[\\s|\\(]+(".concat(W,")[,|\\s]+(").concat(W,")[,|\\s]+(").concat(W,")\\s*\\)?"),ye="[\\s|\\(]+(".concat(W,")[,|\\s]+(").concat(W,")[,|\\s]+(").concat(W,")[,|\\s]+(").concat(W,")\\s*\\)?"),L={CSS_UNIT:new RegExp(W),rgb:new RegExp("rgb"+ve),rgba:new RegExp("rgba"+ye),hsl:new RegExp("hsl"+ve),hsla:new RegExp("hsla"+ye),hsv:new RegExp("hsv"+ve),hsva:new RegExp("hsva"+ye),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Qn(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if($e[e])e=$e[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=L.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=L.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=L.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=L.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=L.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=L.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=L.hex8.exec(e),n?{r:O(n[1]),g:O(n[2]),b:O(n[3]),a:We(n[4]),format:t?"name":"hex8"}:(n=L.hex6.exec(e),n?{r:O(n[1]),g:O(n[2]),b:O(n[3]),format:t?"name":"hex"}:(n=L.hex4.exec(e),n?{r:O(n[1]+n[1]),g:O(n[2]+n[2]),b:O(n[3]+n[3]),a:We(n[4]+n[4]),format:t?"name":"hex8"}:(n=L.hex3.exec(e),n?{r:O(n[1]+n[1]),g:O(n[2]+n[2]),b:O(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function N(e){return!!L.CSS_UNIT.exec(String(e))}var Kn=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var o;if(t instanceof e)return t;typeof t=="number"&&(t=Wn(t)),this.originalInput=t;var r=Gn(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(o=n.format)!==null&&o!==void 0?o:r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,o,r,s=t.r/255,i=t.g/255,l=t.b/255;return s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*o+.0722*r},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=ct(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=je(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=je(this.r,this.g,this.b),n=Math.round(t.h*360),o=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsva(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=De(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=De(this.r,this.g,this.b),n=Math.round(t.h*360),o=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsla(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Ue(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),jn(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),o=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(o,")"):"rgba(".concat(t,", ").concat(n,", ").concat(o,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(M(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(M(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Ue(this.r,this.g,this.b,!1),n=0,o=Object.entries($e);n<o.length;n++){var r=o[n],s=r[0],i=r[1];if(t===i)return s}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var o=!1,r=this.a<1&&this.a>=0,s=!n&&r&&(t.startsWith("hex")||t==="name");return s?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),o||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=pe(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=pe(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=pe(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=pe(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),o=(n.h+t)%360;return n.h=o<0?360+o:o,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var o=this.toRgb(),r=new e(t).toRgb(),s=n/100,i={r:(r.r-o.r)*s+o.r,g:(r.g-o.g)*s+o.g,b:(r.b-o.b)*s+o.b,a:(r.a-o.a)*s+o.a};return new e(i)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var o=this.toHsl(),r=360/n,s=[this];for(o.h=(o.h-(r*t>>1)+720)%360;--t;)o.h=(o.h+r)%360,s.push(new e(o));return s},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),o=n.h,r=n.s,s=n.v,i=[],l=1/t;t--;)i.push(new e({h:o,s:r,v:s})),s=(s+l)%1;return i},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),o=new e(t).toRgb();return new e({r:o.r+(n.r-o.r)*n.a,g:o.g+(n.g-o.g)*n.a,b:o.b+(n.b-o.b)*n.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),o=n.h,r=[this],s=360/t,i=1;i<t;i++)r.push(new e({h:(o+i*s)%360,s:n.s,l:n.l}));return r},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();const Zn=e=>{const t=m(()=>{const o=[];return e.round&&o.push("is-round"),["fn-tag",`fn-tag--${e.type}`,`fn-tag--${e.size}`,...o]});return{styleList:m(()=>{const{color:o}=e,r={};if(o){const s=new Kn(o);r["--fn-tag-bg-color"]=s.tint(70).toString(),r["--fn-tag-text-color"]=o,r["--fn-tag-border-color"]=s.tint(60).toString()}return r}),classList:t}},Yn=["left","right","top","bottom"],Jn=e=>{const n=ke().emit,o=A(!1);function r(){document.body.style.overflow="hidden",document.body.style.width="calc(100% - 6px)",o.value=!0,n(Y,!0)}function s(){document.body.style.overflow="",document.body.style.width="",o.value=!1,n(Y,!1)}return X(()=>e.modelValue,i=>{i?r():o.value&&(o.value=!1)}),J(()=>{e.modelValue&&r()}),{doOpen:r,doClose:s,visible:o}},eo=e=>{const t=Z(e,"color","var(--md-sys-color-primary)");return m(()=>S`
      --fn-link-color: ${t.value};
      --fn-link__underline--status: ${e.underline==="none"||e.underline==="hover"?"none":"underline"};
      --fn-link__underline--hover: ${e.underline==="none"?"none":(e.underline==="hover","underline")};
    `)},to=["text","filled","outlined"],no=["rounded","fullRounded","square"],oo={small:32,medium:40,large:48},dt={variant:{type:String,values:to,default:"filled"},shape:{type:String,values:no,default:"rounded"},size:{type:String,values:ne,default:"medium"},color:{type:[String,Function],default:"primary"},disableRipple:{type:Boolean,default:!1},disableElevation:{type:Boolean,default:!1}},ro=x({__name:"index",props:dt,setup(e){const t=e,n=T("button"),o=Pn(t,n),r=m(()=>{const{variant:s,shape:i,size:l}=t;return[n.b(),n.m(l),n.m(i),n.m(s)]});return(s,i)=>(u(),$(a(Be),{class:v([...a(r),`title-${t.size}`,a(o)])},{default:w(()=>[C(s.$slots,"default",Q(K({size:a(Ce)[t.size]}))),t.disableRipple?R("",!0):(u(),$(a(Fe),{key:0,color:t.variant==="filled"?void 0:t.color},null,8,["color"]))]),_:3},8,["class"]))}}),ut=B(ro,"FnButton");ut.name="FnButton";const so=ut,ao={size:{type:String,values:ne,default:"medium"},color:{type:[String,Function],default:"primary"},cs:{type:[Object,String,Array]}},io=(e,t)=>m(()=>{const n=Z(e,"color","var(--md-sys-color-primary)"),o=be(e,"color","var(--md-sys-color-primary-rgb)"),r=e.cs?S(e.cs):"";return ee(S`
        --fn-icon-button-color: ${n.value};
        --fn-icon-button-color-rgb: ${o.value};
        background-color: transparent;
        appearance: none;
        padding: 8px;
        border-radius: 50%;
        height: fit-content;
        color: var(--fn-icon-button-color);
        &[disabled] {
          color: var(--fn-sys-color-disabled-level-0);
        }
        &.${t.m(e.size)} .fn-icon {
          font-size: ${Ce[e.size]}px;
        }
        @media (any-hover: hover) {
          &:not([disabled]):hover {
            background-color: rgb(
              var(--fn-icon-button-color-rgb) /
                var(--md-sys-state-hover-state-layer-opacity)
            );
          }
        }
      `,r)}),lo=io,co=x({__name:"index",props:ao,setup(e){const t=e,n=T("icon-button"),o=lo(t,n);return(r,s)=>(u(),$(a(Be),{class:v([a(n).b(),a(n).m(r.$props.size),a(o)])},{default:w(()=>[C(r.$slots,"default",Q(K({size:a(Ce)[r.$props.size],color:r.$props.color}))),F(a(Fe),{color:r.$props.color,center:""},null,8,["color"])]),_:3},8,["class"]))}}),Ae=B(co,"FnIconButton");Ae.name="FnIconButton";const Me=Ae,uo=["horizontal","vertical"],fo={...dt,orientation:{type:String,values:uo,default:"horizontal"}},po=x({props:fo,setup(e,{slots:t,attrs:n}){var g;const o=T("button-group"),{orientation:r,...s}=Se(e),i=Z(e,"color","var(--md-sys-color-primary)"),l=be(e,"color","var(--md-sys-color-primary-rgb)"),c=m(()=>S`
        --fn-button-group-color: ${i.value};
        --fn-button-group-color-rgb: ${l.value};
      `),p=m(()=>{const{variant:f,shape:y,size:_}=we(s);return ee([o.b(),o.m(_),o.m(y),o.m(f),o.m(r.value),c.value])}),h=(((g=t==null?void 0:t.default)==null?void 0:g.call(t))??[]).map(f=>F(f,V(we(s),n,f.props??{}),null));return()=>F("div",{class:p.value},[h])}}),ft=B(po,"FnButtonGroup");ft.name="FnButtonGroup";const ho=ft,mo=["filled","outlined"],bo={title:{type:String,default:""},severity:{type:String,default:"info"},icon:{type:String,default:""},variant:{type:String,values:mo,default:""},color:{type:[String,Function],default:""}},go=x({__name:"index",props:bo,setup(e){const t=e,n=T("alert"),o=ln(t),r=A(!0),s=m(()=>t.icon!=="false"),i=()=>{};return(l,c)=>(u(),$(ie,{name:"alert-fade"},{default:w(()=>[P(d("div",{class:v([a(n).b(),a(n).m(t.variant),a(o)])},[a(s)?(u(),b("div",{key:0,class:v([a(n).m("icon")])},null,2)):R("",!0),d("div",{class:v([a(n).m("message")])},[C(l.$slots,"default")],2),d("div",{class:v([a(n).m("action")]),onClick:i},[C(l.$slots,"action")],2)],2),[[H,r.value]])]),_:3}))}}),pt=B(go,"FnAlert");pt.name="FnAlert";const vo=pt,yo={underline:{type:String,values:["none","hover","always"],default:"hover",required:!1},color:{type:String,required:!1},icon:{type:String,required:!1}},_o={key:0},xo=x({__name:"index",props:yo,setup(e){const t=e,n=T("link"),o=eo(t);return(r,s)=>{const i=U("fn-icon");return u(),b("a",{class:v([a(n).b(),a(o)])},[r.icon?(u(),b("span",_o,[F(i,{icon:r.icon,style:E(r.$slots.default?"margin-right: 3px;":"")},null,8,["icon","style"])])):R("",!0),d("span",null,[C(r.$slots,"default")])],2)}}}),ht=B(xo,"FnLink");ht.name="FnLink";const wo=ht,$o=["id"],ko={class:"message-content"},So=["innerHTML"],Fo=x({__name:"index",props:{message:null,duration:{default:2e3},id:null,showIcon:{type:Boolean,default:!0},offset:{default:20},closeBtn:{type:Boolean,default:!1},severity:{default:"info"}},emits:["destroy"],setup(e,{expose:t}){const n=e,o=A(!1),r=A(0),s=A();let i=re;function l(){n.duration!==0&&({stop:i}=Je(()=>{o.value=!1,i=re},n.duration))}J(()=>{l(),o.value=!0}),Fn(s,()=>{r.value=s.value.getBoundingClientRect().height});const c=m(()=>Bo(n.id)+n.offset),p=m(()=>r.value+c.value);return t({bottom:p,lastOffset:c,visible:o}),(h,g)=>(u(),$(ie,{name:"fn-message-fade",onAfterLeave:g[2]||(g[2]=f=>h.$emit("destroy"))},{default:w(()=>[P(d("div",{id:e.id,ref_key:"elRef",ref:s,class:v(["fn-message",[`${e.severity}-container`]]),style:E({top:`${a(c)}px`}),onMouseenter:g[1]||(g[1]=(...f)=>a(i)&&a(i)(...f)),onMouseleave:l},[d("div",ko,[n.showIcon?(u(),b("i",{key:0,innerHTML:a(zo)(n.severity)},null,8,So)):R("",!0),D(" "+k(e.message),1)]),e.closeBtn?(u(),b("div",{key:0,class:"close-btn",onClick:g[0]||(g[0]=f=>o.value=!1)})):R("",!0)],46,$o),[[H,o.value]])]),_:1}))}}),j=Tt([]);let Ge=1;function mt(e){const t=document.createElement("div"),n=`fn-message-${Ge}`,o=me(Fo,{...e,id:n,onDestroy:()=>{Co(n),ze(null,t)}},()=>e.message);ze(o,t),document.body.appendChild(t.firstElementChild);const r={id:n,vnode:o,component:o.component,props:e,close:()=>{o.component.exposed.visible.value=!1}};return j.push(r),Ge++,r}function Co(e){const t=j.findIndex(n=>n.id===e);t!==-1&&(j[t].close(),j.splice(t,1))}const Bo=e=>{const t=j.findIndex(o=>o.id===e),n=j[t-1];return n?n.component.exposed.bottom.value:0};function Ao(e){return function(t,n){return mt({...n,message:t})}}function Mo(){for(const e of j)e.close();j.splice(0,j.length)}const Ro=new Map([["success",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>`],["warning",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg>`],["error",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`],["info",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`]]);function zo(e){return Ro.get(e)}const To=["error","success","warning","info"],Re=mt;for(const e of To)Re[e]=Ao();Re.closeAll=Mo;const Io=sn(Re,"$message"),Oo=Io,Po={modelValue:Boolean,title:String,width:{type:[String,Number]},top:{type:[String,Number]},showClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},center:{type:Boolean,default:!1}},Eo={click:e=>e instanceof MouseEvent},Lo=Symbol("dialogInjectionKey"),Ho=(e,t)=>{const o=ke().emit;let r="";const s=A(!1),i=m(()=>{const f={},y="--fn-dialog";return e.fullscreen&&(f[`${y}-width`]="100%"),e.width&&!e.fullscreen&&(f[`${y}-width`]=xe(e.width)),!e.width&&!e.fullscreen&&(f[`${y}-width`]="30%"),e.top&&!e.fullscreen&&(f[`${y}-top`]=xe(e.top)),!e.top&&!e.fullscreen&&(f[`${y}-top`]="30vh"),f});function l(){g()}function c(){function f(y){y||(s.value=!1)}e.beforeClose?e.beforeClose(f):l()}function p(){e.closeOnClickModal&&c()}function h(){s.value=!0}function g(){s.value=!1,o(Y,!1)}return X(()=>e.modelValue,f=>{f?h():s.value&&l()}),X(()=>e.fullscreen,f=>{t.value&&(f?(r=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=r)}),J(()=>{e.modelValue&&h()}),{handleClose:c,onModalClick:p,close:l,doClose:g,overlayDialogStyle:i,visible:s}},Vo=["onClick"],No={class:"header"},Do={class:"dialog__content"},jo={class:"footer"},Uo=x({__name:"index",props:Po,emits:Eo,setup(e,{emit:t}){const n=e,{showClose:o}=Se(n),r=A(),s=A(null),i=A(),{visible:l,handleClose:c,overlayDialogStyle:p}=Ho(n,r);Qe(Lo,{dialogRef:i});function h(g){if(!n.closeOnClickModal)return;const f=s.value;f!=null&&f.contains(g.target)||c(),t("click",g)}return(g,f)=>{const y=U("fn-icon");return u(),$(Ke,{to:"body"},[F(ie,{name:"dialog-fade"},{default:w(()=>[P(d("div",{ref_key:"containerRef",ref:r,class:"dialog",role:"dialog",onClick:It(h,["stop"])},[d("div",{ref_key:"targetDivRef",ref:s,class:v(["fn-overlay",{"is-align-center":n.center&&!n.fullscreen,"is-fullscreen":n.fullscreen}]),style:E(a(p))},[P(d("div",No,[d("span",null,k(n.title),1),a(o)?R("",!0):(u(),b("span",{key:0,onClick:f[0]||(f[0]=(..._)=>a(c)&&a(c)(..._))},[F(y,{icon:"material-symbols:close"})]))],512),[[H,n.title]]),d("div",Do,[C(g.$slots,"default")]),d("div",jo,[C(g.$slots,"footer")])],6)],8,Vo),[[H,a(l)]])]),_:3})])}}}),bt=B(Uo,"FnDialog");bt.name="FnDialog";const Wo=bt,Go=de({modelValue:{type:[String,Number,Boolean,Array,Object],required:!0},type:{type:String,default:""},cs:{type:[Object,String,Array]},internal:{type:Boolean,default:!1}}),qo=e=>m(()=>{const t=Ye(),n=S([{background:"none",color:"inherit"},t.value.typography.body.large]),o=e.internal?S({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:"0px",left:"0px",margin:"0px",padding:"0px",zIndex:1}):"",r=e.cs?S(e.cs):"";return ee(n,{[o]:e.internal},r)}),Xo=qo,Qo=["type"],Ko=x({__name:"index",props:Go,emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=T("input-base"),r=Xo(n),s=m({get(){return n.modelValue},set(i){t("update:modelValue",i)}});return(i,l)=>P((u(),b("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>le(s)?s.value=c:null),type:i.$props.type,class:v([a(o).b(),a(r)])},null,10,Qo)),[[Ot,a(s)]])}}),gt=B(Ko,"FnInputBase");gt.name="FnInputBase";const fe=gt,Zo={name:"RadioButtonCheckedFilled",components:{FnSvgIcon:ue}},Yo=d("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[d("path",{d:"M0 0h24v24H0z",fill:"none"}),d("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})],-1);function Jo(e,t,n,o,r,s){const i=U("fn-svg-icon");return u(),$(i,{cs:"fill: currentcolor;"},{default:w(()=>[Yo]),_:1})}const er=ce(Zo,[["render",Jo]]),tr={name:"RadioButtonUncheckedFilled",components:{FnSvgIcon:ue}},nr=d("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[d("path",{d:"M0 0h24v24H0z",fill:"none"}),d("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})],-1);function or(e,t,n,o,r,s){const i=U("fn-svg-icon");return u(),$(i,{cs:"fill: currentcolor;"},{default:w(()=>[nr]),_:1})}const rr=ce(tr,[["render",or]]),sr={modelValue:{type:[String,Number,Boolean],required:!0},size:{type:String,value:ne,default:"medium"},color:{type:[String,Function],default:"primary"}},ar=x({__name:"index",props:sr,emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=T("radio"),r=m({get(){return n.modelValue},set(s){t(Y,s)}});return(s,i)=>(u(),$(a(Ae),V({component:"span"},{color:s.$props.color,size:s.$props.size,class:[a(o).b()]},{class:[a(o).b(),a(o).m(n.size)]}),{default:w(()=>[a(r)===s.$attrs.value?(u(),$(er,{key:0})):(u(),$(rr,{key:1})),F(a(fe),V(s.$attrs,{modelValue:a(r),"onUpdate:modelValue":i[0]||(i[0]=l=>le(r)?r.value=l:null),class:[a(o).e("input")],type:"radio",internal:""}),null,16,["modelValue","class"])]),_:1},16,["class"]))}}),vt=B(ar,"FnRadio");vt.name="FnRadio";const ir=vt,lr={title:{type:String,default:"card-header"},border:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},separate:{type:Boolean,default:!1},width:{type:Number,default:300},background:{type:String,default:""}},cr={class:"fn-card--title"},dr={class:"fn-card--content"},ur=x({__name:"index",props:lr,setup(e){const t=e,{border:n,hover:o}=t,r=m(()=>[{"has-border":n,"has-hover":o}]);return(s,i)=>(u(),b("div",{class:v(["fn-card",a(r)]),style:E({backgroundColor:t.background,width:`${t.width}px`})},[d("div",cr,[d("span",null,[C(s.$slots,"header",{},()=>[D(k(s.title),1)])])]),d("div",dr,[C(s.$slots,"default",{},()=>[D("content")])])],6))}}),yt=B(ur,"FnCard");yt.name="FnCard";const fr=yt,pr={name:"CheckFilled",components:{FnSvgIcon:ue}},hr=d("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[d("path",{d:"M0 0h24v24H0z",fill:"none"}),d("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})],-1);function mr(e,t,n,o,r,s){const i=U("fn-svg-icon");return u(),$(i,{cs:"fill: currentcolor;"},{default:w(()=>[hr]),_:1})}const br=ce(pr,[["render",mr]]),gr={small:28,medium:32,large:36},vr=de({modelValue:{type:Boolean,default:""},color:{type:[String,Function],default:"primary"},size:{type:String,value:ne,default:"medium"},cs:{type:[Object,String,Array]},disabledIcon:{type:Boolean,default:!1}}),yr=(e,t)=>{const n=Z(e,"color","var(--md-sys-color-primary)"),o=be(e,"color","var(--md-sys-color-primary-rgb)"),r=m(()=>ot.includes(e.color)?`var(--md-sys-color-on-${e.color})`:"var(--md-sys-color-on-primary)"),s=S`
    --fn-switch-color: ${n.value};
    --fn-switch-color-rgb: ${o.value};
    --fn-switch-on-color: ${r.value};
    --fn-switch-height: ${gr[e.size]}px;
    display: inline-flex;
    align-items: center;
    position: relative;
    aspect-ratio: 52 / 32;
    box-sizing: border-box;
    border: 2px solid var(--md-sys-color-outline);
    border-radius: var(--md-sys-shape-corner-extra-large-default-size);
    cursor: pointer;
    height: var(--fn-switch-height);
    /**
    UPDATE NEEDED
    should use var(--md-sys-color-surface-container-heightest)
    @link https://m3.material.io/components/text-fields/specs
  */
    color: var(--md-sys-color-surface-variant);
    background-color: transparent;
    transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    @media (any-hover: hover) {
      --fn-switch-hover-color: rgb(
        var(--fn-switch-color-rgb) /
          var(--md-sys-state-hover-state-layer-opacity)
      );
      --fn-switch-checked-hover-color: color-mix(
        in srgb,
        var(--fn-switch-color),
        var(--fn-sys-color-switch-reverse)
          var(--md-sys-state-hover-state-layer-opacity-percentage)
      );
      &:hover {
        background-color: var(--fn-switch-hover-color);
      }
      &:not([disabled]).${t==null?void 0:t.m("checked")}:hover {
        border-color: var(--fn-switch-checked-hover-color);
        background-color: var(--fn-switch-checked-hover-color);
      }
    }

    & .fn-switch__thumb {
      z-index: 2;
      --interval: 3px;
      --wrapper-height: calc(
        var(--fn-switch-height) - 4px - var(--interval) * 2
      );
      left: calc(
        -1 * (var(--fn-switch-height) - 4px - var(--wrapper-height) * 0.66) / 2
      );
      transition: left 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      & .fn-switch__thumb--icon-wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: var(--wrapper-height);
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 50%;
        background-color: var(--md-sys-color-outline);
        transform: scale(0.66);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        & .fn-icon {
          font-size: 16px;
          transform: scale(0);
          transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        }
      }
    }

    &.${t==null?void 0:t.m("checked")} {
      color: var(--fn-switch-color);
      border-color: var(--fn-switch-color);
      background-color: var(--fn-switch-color);
      & .fn-switch__thumb {
        left: calc(100% - var(--fn-switch-height) - var(--interval) + 2px);
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--fn-switch-on-color);
          transform: scale(1);
          & .fn-icon {
            transform: scale(1);
          }
        }
      }
    }

    &[disabled] {
      cursor: default;
      color: var(--md-sys-color-on-surface);
      border-color: var(--fn-sys-color-disabled-level-1);

      & .fn-switch__thumb {
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--fn-sys-color-disabled-level-0);
          & .fn-icon {
            color: var(--fn-sys-color-disabled-level-0);
          }
        }
      }

      @media (any-hover: hover) {
        &:hover {
          background-color: transparent;
        }
      }

      &.${t==null?void 0:t.m("checked")} {
        background-color: var(--fn-sys-color-disabled-level-1);
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--md-sys-color-surface);
        }
      }
    }
  `;return m(()=>{const i=e.cs?S(e.cs):"";return ee(s,i)})},_r=yr,xr=x({__name:"index",props:vr,emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=T("switch"),r=_r(n,o),s=m({get(){return n.modelValue},set(i){t(Y,i)}});return(i,l)=>(u(),b("span",{class:v([a(o).b(),a(s)?a(o).m("checked"):a(o).m("unchecked"),a(r)])},[F(a(Me),{class:v([a(o).e("thumb")]),color:n.color,disabled:i.$attrs.disabled,onClick:l[0]||(l[0]=c=>s.value=!a(s))},{default:w(()=>[d("span",{class:v([a(o).em("thumb","icon-wrapper")])},[C(i.$slots,"default",Q(K({size:16})),()=>[n.disabledIcon?R("",!0):(u(),$(br,{key:0}))])],2)]),_:3},8,["class","color","disabled"]),F(a(fe),V(i.$attrs,{modelValue:a(s),"onUpdate:modelValue":l[1]||(l[1]=c=>le(s)?s.value=c:null),class:[a(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])],2))}}),_t=B(xr,"FnSwitch");_t.name="FnSwitch";const wr=_t,$r={percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},type:{type:String,default:"line"},height:{type:String,default:"0.5rem"},intermediate:{type:Boolean,default:!1},duration:{type:Number,default:2},width:{type:Number,default:120},strokeWidth:{type:Number,default:6},textInside:{type:Boolean,default:!1},background:{type:String,default:"#f5f5f6"},barColor:{type:String,default:"#3894ff"},color:{type:String,default:"#4987f8"},status:{type:String,default:""},striped:{type:Boolean,default:!1},stripedFlow:{type:Boolean,default:!1}},kr={style:{"margin-left":"5px"}},Sr=["height"],Fr=["r","stroke","stroke-width"],Cr=["r","stroke","stroke-width","stroke-dashoffset"],Br={key:0},Ar={key:1},Mr=x({__name:"index",props:$r,setup(e){const t=e,n=m(()=>typeof t.percentage!="number"?0:t.percentage>100?100:t.percentage<0?0:t.percentage),o=t.width||120,r=m(()=>(o-t.strokeWidth)/2),s="fn-progress",i=o/2,l=o/2,c=2*Math.PI*r.value,p=m(()=>{if(typeof t.percentage!="number")return 0;{const _=t.percentage>100?100:t.percentage<0?0:t.percentage;return(1-Number(_)/100)*c}}),h=m(()=>t.intermediate?"bar-intermediate":""),g=m(()=>{let _="";return t.striped&&(_+="fn-progress-bar-striped ",t.stripedFlow&&(_+="fn-progress-bar-is-flow")),_}),{styleList:f,styleListCircle:y}=En(t);return(_,z)=>(u(),b(q,null,[t.type==="line"?(u(),b("div",{key:0,class:v(`${s} ${s}-line`),style:E(a(f))},[d("div",{class:v(`${s}-bar-out`)},[d("div",{class:v([`${s}-bar ${a(h)} ${a(g)}`])},null,2),P(d("div",{class:v(`${s}-text-inner`)},k(a(n))+"% ",3),[[H,t.textInside]])],2),P(d("div",{class:v(`${s}-text`)},[P(d("span",{class:v(`${s}-text-out`)},k(a(n))+"% ",3),[[H,!t.status&&!t.intermediate]]),P(d("span",kr,null,512),[[H,t.status]])],2),[[H,!t.textInside]])],6)):R("",!0),t.type==="circle"?(u(),b("div",{key:1,class:"fn-progress circle-progress",style:E(a(y))},[d("div",{class:"circle-content",style:E(`width:${a(o)}px;height: ${a(o)}px;`)},[(u(),b("svg",{width:"circleSize",height:a(o),class:"circle"},[d("circle",{r:a(r),cx:i,cy:l,fill:"transparent",stroke:t.background,"stroke-width":t.strokeWidth},null,8,Fr),d("circle",{r:a(r),cx:i,cy:l,fill:"transparent",stroke:t.color,"stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-dasharray":c,"stroke-dashoffset":a(p)},null,8,Cr)],8,Sr)),d("span",{class:"count-num",style:E([{"font-size":`${a(o)*.3}px`}])},[_.$slots.default?(u(),b("span",Br,[C(_.$slots,"default")])):(u(),b("span",Ar,k(t.percentage)+"% ",1))],4)],4)],4)):R("",!0)],64))}}),xt=B(Mr,"FnProgress");xt.name="FnProgress";const Rr=xt,zr=de({...vn,max:{type:[String,Number]},avatarBorder:{type:String,default:"var(--md-sys-color-background)"}}),Tr=x({props:zr,setup(e,{slots:t,attrs:n}){var g;const{max:o,avatarBorder:r,...s}=Se(e),i=T("avatar-group"),l=((g=t==null?void 0:t.default)==null?void 0:g.call(t))??[];let c=l;if(o.value&&+o.value<l.length){const f=l.length-+o.value;c=[...l.slice(0,+o.value),F(rt,null,{default:()=>[D("+"),f]})]}const p=m(()=>c.map(f=>F(f,V(we(s),f.props??{}),null))),h=m(()=>{var y;const f=((y=n==null?void 0:n.class)==null?void 0:y.split(" "))??[];return f.push(i.b()),f.push(S`
        & .fn-avatar {
          border: 2px solid ${r.value};
        }
      `),ee(f)});return()=>F("div",V(n,{class:h.value}),[p.value.reverse()])}}),wt=B(Tr,"FnAvatarGroup");wt.name="FnAvatarGroup";const Ir=wt,Or={type:{type:String,default:""},closable:{type:Boolean,default:!1},color:{type:String,default:""},size:{type:String,default:""},round:{type:Boolean,default:!1}},Pr=x({__name:"index",props:Or,emits:["click","close"],setup(e,{emit:t}){const n=e,{classList:o,styleList:r}=Zn(n),s=l=>{t("close",l)},i=l=>{t("click",l)};return(l,c)=>(u(),b("span",{class:v(a(o)),style:E(a(r)),onClick:i},[d("span",null,[C(l.$slots,"default")]),l.closable?(u(),b("div",{key:0,class:"close-btn",onClick:s},"×")):R("",!0)],6))}}),$t=B(Pr,"FnTag");$t.name="FnTag";const Er=$t,Lr={modelValue:{type:[Boolean,Array]},color:{type:[String,Function],default:"primary"},size:{type:String,value:ne,default:"medium"}},Hr={name:"CheckBoxFilled",components:{FnSvgIcon:ue}},Vr=d("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[d("path",{d:"M0 0h24v24H0z",fill:"none"}),d("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1);function Nr(e,t,n,o,r,s){const i=U("fn-svg-icon");return u(),$(i,{cs:"fill: currentcolor;"},{default:w(()=>[Vr]),_:1})}const Dr=ce(Hr,[["render",Nr]]),jr={name:"CheckBoxOutlineBlankFilled",components:{FnSvgIcon:ue}},Ur=d("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[d("path",{d:"M0 0h24v24H0z",fill:"none"}),d("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})],-1);function Wr(e,t,n,o,r,s){const i=U("fn-svg-icon");return u(),$(i,{cs:"fill: currentcolor;"},{default:w(()=>[Ur]),_:1})}const Gr=ce(jr,[["render",Wr]]),qr=x({__name:"index",props:Lr,emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=T("checkbox"),r=Ze(),s=m({get(){return n.modelValue},set(l){t(Y,l)}}),i=m(()=>typeof s.value=="boolean"?s.value:s.value.includes(r.value));return(l,c)=>(u(),$(a(Me),V({component:"span"},{color:l.$props.color,size:l.$props.size,class:[a(o).b(),a(o).m(n.size)]}),{default:w(p=>[C(l.$slots,"default",Q(K({checked:a(s),size:p.size,class:["fn-icon",a(o).e("icon")]})),()=>[a(i)?(u(),$(Dr,{key:0})):(u(),$(Gr,{key:1}))]),F(a(fe),V(l.$attrs,{modelValue:a(s),"onUpdate:modelValue":c[0]||(c[0]=h=>le(s)?s.value=h:null),class:[a(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])]),_:3},16))}}),kt=B(qr,"FnCheckbox");kt.name="FnCheckbox";const Xr=kt,St=Symbol("breadcrumbKey"),Qr={separator:{type:String,default:"/"}},Kr=x({__name:"index",props:Qr,setup(e){const t=e,n=A();return Qe(St,t),J(()=>{const o=n.value.querySelectorAll(".fn-breadcrumb-item");if(o.length){const r=o[o.length-1].lastElementChild;r.style.display="none"}}),(o,r)=>(u(),b("div",{ref_key:"breadcrumb",ref:n,class:"fn-breadcrumb"},[C(o.$slots,"default")],512))}}),Ft=B(Kr,"FnBreadcrumb");Ft.name="FnBreadcrumb";const Zr=Ft,Yr={to:{type:an([String,Object]),default:""},replace:{type:Boolean,default:!1}},Jr={class:"fn-breadcrumb-item"},es={class:"fn-breadcrumb-separator"},ts=x({__name:"index",props:Yr,setup(e){const t=e,n=ke(),o=Pt(St,void 0),r=n.appContext.config.globalProperties.$router,s=()=>{!t.to||!r||(t.replace?r.replace(t.to):r.push(t.to))};return(i,l)=>{var c;return u(),b("span",Jr,[d("span",{ref:"link",class:v(["fn-breadcrumb-inner",[t.to?"fn-breadcrumb-link":""]]),onClick:s},[C(i.$slots,"default")],2),d("span",es,k((c=a(o))==null?void 0:c.separator),1)])}}}),Ct=B(ts,"FnBreadcrumbItem");Ct.name="FnBreadcrumbItem";const ns=Ct,os=de({modelValue:Boolean,title:String,direction:{type:String,values:["left","right","top","bottom"],default:"left"}}),rs={class:"drawer-title"},ss={class:"drawer-body"},as=x({__name:"index",props:os,setup(e){const t=e,{visible:n,doClose:o}=Jn(t),r=A(null),s=T("drawer"),i=m(()=>`${s.b()}--overlay`),l=m(()=>{const{direction:p}=t,h=[s.b()];return Et(p)&&h.push(s.m(p)),h}),c=p=>{const h=r.value;h!=null&&h.contains(p.target)||o()};return(p,h)=>(u(),$(Ke,{to:"body"},[a(n)?(u(),b("div",{key:0,ref:"elRef",class:v(a(i)),onClick:c},null,2)):R("",!0),F(ie,{name:`slide-fade--${t.direction}`},{default:w(()=>[P(d("div",{ref_key:"targetDivRef",ref:r,class:v(a(l))},[d("header",null,[d("span",rs,k(t.title),1),d("span",{class:"drawer-close",onClick:h[0]||(h[0]=(...g)=>a(o)&&a(o)(...g))})]),d("div",ss,[C(p.$slots,"default")])],2),[[H,a(n)]])]),_:3},8,["name"])]))}}),Bt=B(as,"FnDrawer");Bt.name="FnDrawer";const is=Bt,ls={label:{type:String,required:!0},control:{required:!0},labelPlacement:{type:String,values:Yn,default:"right"}},cs=x({inheritAttrs:!1}),ds=x({...cs,__name:"index",props:ls,setup(e){const t=e,n=T("form-label");return(o,r)=>(u(),b("label",{class:v([a(n).b(),a(n).m(t.labelPlacement)])},[(u(),$(Xe(t.control),Q(K(o.$attrs)),null,16)),F(a(se),{variant:"body.large",component:"span",disabled:o.$attrs.disabled},{default:w(()=>[D(k(t.label),1)]),_:1},8,["disabled"])],2))}}),At=B(ds,"FnFormLabel");At.name="FnFormLabel";const us=At,fs=["outlined","filled","standard"],ps=de({modelValue:{type:String,required:!0,default:""},variant:{type:String,values:fs,default:"outlined"},label:{type:String},color:{type:[String,Function],default:"primary"},size:{type:String,values:ne,default:"large"},cs:{type:[String,Array,Object]},error:{type:Boolean,default:!1},supportingText:{type:String}}),hs=e=>{const t=S`
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
  `,n=S`
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
  `,o=S`
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
  `,r=S`
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
  `,s=S`
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
  `,i=S`
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
  `,l=S`
    --fn-text-field-height: 56px;
    --fn-text-fiedl-filled-standard-label-translateY: 10%;
  `,c=S`
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
  `;return m(()=>{const p=e.error?Z(e,null,"var(--md-sys-color-error)"):Z(e,"color","var(--md-sys-color-primary)"),h=e.cs?S(e.cs):"";return ee(S({"--fn-text-field-color":p.value}),t,{[n]:e.variant==="outlined"},{[o]:e.variant==="filled"},{[r]:e.variant==="standard"},{[s]:e.size==="small"},{[i]:e.size==="medium"},{[l]:e.size==="large"},{[c]:e.error},h)})},ms=hs,bs=x({__name:"index",props:ps,emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=Ze(),r=Lt(),s=T("text-field"),i=ms(n),l=m({get(){return n.modelValue},set(f){t(Y,f)}}),c=()=>(Math.random()+1).toString(36).substring(7),p=o!=null&&o.id?o.id:`text-field-${c()}`,h=m(()=>(n==null?void 0:n.label)??""),g=m(()=>{var y;const f=(y=r==null?void 0:r.startAdornment)==null?void 0:y.call(r);return!cn(n.modelValue)||!!f});return(f,y)=>(u(),b("div",{class:v([a(s).b(),a(s).m(n.variant),a(s).m(n.size),a(g)?a(s).m("content-within"):"",a(i)])},[n!=null&&n.label?(u(),$(a(se),{key:0,id:a(p),component:"label",class:v([a(s).e("label")]),color:"rgb(var(--md-sys-color-on-surface-rgb) / 0.6);","no-warp":""},{default:w(()=>[D(k(a(h)),1)]),_:1},8,["id","class"])):R("",!0),d("div",{class:v([a(s).m("input-wrapper")])},[C(f.$slots,"startAdornment",Q(K({class:[a(s).m("start-adornment")]}))),F(a(fe),V({id:a(p)},f.$attrs,{modelValue:a(l),"onUpdate:modelValue":y[0]||(y[0]=_=>le(l)?l.value=_:null),class:[a(s).e("input")]}),null,16,["id","modelValue","class"]),C(f.$slots,"endAdornment",Q(K({class:[a(s).m("end-adornment")]}))),f.$props.variant==="outlined"&&(n!=null&&n.label)?(u(),b("fieldset",{key:0,class:v([a(s).m("border")])},[F(a(se),{component:"legend","no-warp":""},{default:w(()=>[D(k(a(h)),1)]),_:1})],2)):(u(),b("span",{key:1,class:v([a(s).m("border")])},null,2))],2),n!=null&&n.supportingText?(u(),$(a(se),{key:1,class:v([a(s).m("supporting-text")]),variant:"body.small","no-warp":""},{default:w(()=>[D(k(n.supportingText),1)]),_:1},8,["class"])):R("",!0)],2))}}),Mt=B(bs,"FnTextField");Mt.name="FnTextField";const gs=Mt,vs=[Be,so,Me,ho,vo,wo,Oo,Wo,fe,ir,wr,yn,Rr,fr,Er,rt,Ir,Xr,Zr,ns,Fe,is,us,se,dn,gs,gn],ys={install(e){vs.forEach(t=>{e.component(t.name,t)})}},_s=ys;const xs={github:{type:String,default:"https://github.com/tsinghua-lau/fusion-ui"},codeSandBox:{type:String,default:"https://codesandbox.io/"},highlightedCode:{type:String,default:""},code:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},lang:{type:String,default:"vue"},expand:{type:Boolean,default:!1}},ws={class:"o-demo_wrapper vp-raw bg"},$s={class:"relative"},ks={class:"o-demo_actions"},Ss=["href"],Fs=d("div",{class:"o-demo_action_icon i-carbon:chemistry"},null,-1),Cs=d("div",{class:"o-demo_tooltip","group-hover:opacity-100":""}," Open on Playground(WIP) ",-1),Bs=[Fs,Cs],As=["href"],Ms=d("div",{class:"o-demo_action_icon i-carbon-logo-github"},null,-1),Rs=d("div",{class:"o-demo_tooltip","group-hover:opacity-100":""}," Edit on GitHub ",-1),zs=[Ms,Rs],Ts=d("div",{class:"o-demo_action_icon i-carbon:copy"},null,-1),Is={class:"o-demo_tooltip","group-hover:opacity-100":""},Os=d("div",{class:"o-demo_action_icon i-carbon:fit-to-width"},null,-1),Ps={class:"o-demo_tooltip","group-hover:opacity-100":""},Es=["innerHTML"],Ls=x({__name:"index",props:xs,setup(e){const t=e,n=m(()=>decodeURIComponent(t.highlightedCode)),{copy:o,copied:r}=wn({source:decodeURIComponent(t.code)}),[s,i]=bn();return(l,c)=>{const p=U("ClientOnly");return u(),$(p,null,{default:w(()=>[d("div",V(l.$attrs,{class:"mt-6"}),[d("div",ws,[C(l.$slots,"default")]),d("div",$s,[d("div",ks,[d("a",{class:"o-demo_action_item",group:"",href:l.codeSandBox,target:"_blank"},Bs,8,Ss),d("a",{class:"o-demo_action_item",group:"",href:l.github,target:"_blank"},zs,8,As),d("a",{class:"o-demo_action_item",group:"",onClick:c[0]||(c[0]=h=>a(o)())},[Ts,d("div",Is,k(a(r)?"Copied":"Copy code"),1)]),d("a",{class:"o-demo_action_item",group:"",onClick:c[1]||(c[1]=h=>a(i)())},[Os,d("div",Ps,k(a(s)?"Hidden code":"Show code"),1)])]),P(d("div",{class:v(`language-${l.lang} extra-class`),innerHTML:a(n)},null,10,Es),[[H,a(s)]])])],16)]),_:3})}}}),Hs=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"类型",scope:{customRender:"type"},width:"240"},{label:"默认值",scope:{customRender:"default"}}],Vs=[{label:"name",scope:{customRender:"name"},width:"140"},{label:"description",scope:{customRender:"remark"}},{label:"type",scope:{customRender:"type"},width:"240"},{label:"default",scope:{customRender:"default"}}],Ns=[{label:"事件名",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"类型",scope:{customRender:"type"}}],Ds=[{label:"Name",scope:{customRender:"name"},width:"140"},{label:"Description",scope:{customRender:"remark"}},{label:"Type",scope:{customRender:"type"}}],js=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"参数",scope:{customRender:"params"}},{label:"返回值",scope:{customRender:"returns"}}],Us=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}}],Ws=[{label:"name",scope:{customRender:"name"},width:"140"},{label:"description",scope:{customRender:"remark"}}],Gs={propsZh:Hs,propsEn:Vs,eventsZh:Ns,eventsEn:Ds,methods:js,slotsZh:Us,slotsEn:Ws},qs={mounted(e,t){let n=!1;function o(r){if(e.contains(r.target))return!1;!n&&t.value&&typeof t.value=="function"&&(t.value(r),n=!0)}e.__click_outside__=o,document.addEventListener("click",o)},beforeUnmount(e){document.removeEventListener("click",e.__click_outside__),delete e.__click_outside__}},Xs={class:"table-block"},Qs={class:"name-area"},Ks={class:"name-area-inner"},Zs={class:"remark-area"},Ys={class:"remark-area-inner"},Js={class:"default-area"},ea={class:"default-area-inner"},ta={class:"params-area"},na={class:"params-area-inner"},oa={class:"returns-area"},ra={class:"returns-area-inner"},sa={class:"type-area"},aa={key:1,class:"type-area-inner"},ia=["onClick"],la={key:0,class:"optional-area"},ca=x({__name:"index",props:{type:{type:String,default:"props"},src:{type:String,default:""},data:{type:Array,default:()=>[]}},setup(e){const t=e,n=A([]),o=s=>{for(let i=0;i<n.value.length;i++)n.value[i].name!==s.name&&(n.value[i].showTip=!1);setTimeout(()=>{s.showTip=!s.showTip},0)},r=s=>{s.showTip=!1};return X(()=>t.data,()=>{n.value=t.data},{immediate:!0,deep:!0}),(s,i)=>{const l=U("bp-table");return u(),b("div",Xs,[F(l,{cols:a(Gs)[e.type],"data-source":n.value},{name:w(({row:c})=>[d("div",Qs,[d("span",Ks,k(c.name||"-"),1)])]),remark:w(({row:c})=>[d("div",Zs,[d("span",Ys,k(c.remark||"-"),1)])]),default:w(({row:c})=>[d("div",Js,[d("span",ea,k(c.default||"-"),1)])]),params:w(({row:c})=>[d("div",ta,[d("span",na,k(c.params||"-"),1)])]),returns:w(({row:c})=>[d("div",oa,[d("span",ra,k(c.returns||"-"),1)])]),type:w(({row:c})=>[P((u(),b("div",sa,[typeof c.type=="object"?(u(!0),b(q,{key:0},ae(c.type,(p,h)=>(u(),b("span",{key:h,class:"type-area-inner"},k(p),1))),128)):(u(),b("span",aa,k(c.type||"-"),1)),c.type==="Enum"||c.type.includes("Enum")?(u(),b("span",{key:2,class:v(["ri-error-warning-fill",[{active:c.showTip}]]),onClick:p=>o(c)},"!",10,ia)):R("",!0),F(ie,null,{default:w(()=>[c.showTip?(u(),b("div",la,[d("span",null,k(c.optional.join(" | ")),1)])):R("",!0)]),_:2},1024)])),[[a(qs),()=>r(c)]])]),_:1},8,["cols","data-source"])])}}}),da={class:"content"},ua={class:"content-container"},fa={class:"main"},pa=d("div",{class:"vp-doc",flex:"","flex-col":"","items-center":"","mt-10":""},[d("h2",{id:"meet-the-team",op50:"","font-normal":"",p:"t-10 b-2"}," 贡献者 ")],-1),ha={"p-10":""},qe=x({__name:"index",setup(e){const t=[{avatar:"https://www.github.com/tsinghua-lau.png",name:"tsinghua-lau",title:"ikun",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/tsinghua-lau"}]},{avatar:"https://www.github.com/sxiong5.png",name:"sxiong5",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/sxiong5"}]},{avatar:"https://www.github.com/windlil.png",name:"windlil",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/windlil"}]},{avatar:"https://www.github.com/kit-AB.png",name:"kit-AB",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/kit-AB"}]},{avatar:"https://www.github.com/Losonn.png",name:"Losonn",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/Losonn"}]},{avatar:"https://www.github.com/li-junpeng.png",name:"li-junpeng",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/li-junpeng"}]}];return(n,o)=>(u(),b("div",da,[d("div",ua,[d("main",fa,[pa,d("div",ha,[F(a(rn),{size:"small",members:t})])])])]))}}),ma=(e,t)=>{let n,o;return t=t||200,function(){const r=arguments,s=Date.now();n&&s-n<t?(clearTimeout(o),o=setTimeout(function(){n=s,e.apply(this,r)},t)):(n=s,e.apply(this,r))}},ba=function(e,t,n,o=!1){e&&t&&n&&e.addEventListener(t,n,o)},ga=function(e,t,n,o=!1){e&&t&&n&&e.removeEventListener(t,n,o)},va=e=>{const t=A(null),n=A([]),o=A("");let r=0,s=0,i=[],l=[];const c=80,p=()=>{const f=t.value,{cols:y}=e;if(!(y.length===0||y.length>99)){s=0,r=y.length,i=[];for(let _=0;_<y.length;_++){const{width:z,minWidth:I}=y[_];z&&(s+=Number(z),r--),I&&i.push(I)}o.value=f&&f.offsetWidth-6,l=h()||[],n.value=[];for(let _=0;_<y.length;_++)n.value.push({...e.cols[_],width:l[_]});return n.value}};function h(){const{cols:f}=e,y=[];let _=g();i.length&&i.forEach((z,I)=>{_>z&&(s+=z,r--,i.splice(I,1),_=g())});for(let z=0;z<f.length;z++){const{width:I,minWidth:oe}=f[z];if(I){y.push(I);continue}if(oe&&oe>_){y.push(oe);continue}y.push(_<c?c:_)}return y}function g(){const f=(o.value-s)/r;return Number(f).toFixed(2)}return X(()=>e.cols,()=>{p()}),J(()=>{Ht(()=>{p(),ba(window,"resize",ma(()=>p(),400))})}),Vt(()=>ga(window,"resize",()=>p())),{initColumns:p,bpTable:t,_table_width:o,columns:n}},ya=["name","width"],Rt=x({__name:"col-group",props:{cols:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(u(),b("colgroup",null,[(u(!0),b(q,null,ae(e.cols,(o,r)=>(u(),b("col",{key:`bp-table-tr-${r}`,name:`bp_table_tr_${r}`,width:`${o.width}px`},null,8,ya))),128))]))}}),_a={class:"bp-table-header-thead"},xa=x({__name:"table-header",props:{headerList:{type:Array,default:()=>[]},width:{type:[String,Number],default:""}},setup(e){const t=n=>[`text-${n.headerAlign||n.align||"left"}`];return(n,o)=>(u(),b("table",{class:"bp-table-header",style:E(`width:${e.width}px`)},[F(Rt,{cols:e.headerList},null,8,["cols"]),d("thead",_a,[d("tr",null,[(u(!0),b(q,null,ae(e.headerList,(r,s)=>(u(),b("th",{key:`bp-table-thead-${s}`,class:v(t(r))},k(r.label),3))),128))])])],4))}}),wa={class:"bp-table-empty-tr"},$a=["colspan"],ka=x({__name:"empty",props:{colspan:{type:Number,default:0}},setup(e){return(t,n)=>(u(),b("tr",wa,[d("td",{colspan:e.colspan}," 暂无数据 ",8,$a)]))}}),Sa=d("div",{class:"scrollbar"},null,-1),Fa={class:"bp-table-body-tbody"},Ca=x({__name:"table",props:{cols:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]},height:{type:String,default:""},loading:{type:Boolean,default:!1},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1}},setup(e){const t=e,{bpTable:n,columns:o,_table_width:r}=va(t),s=m(()=>t.dataSource.length===0),i=m(()=>t.border),l=m(()=>t.stripe),c=m(()=>t.height),p=m(()=>t.height?`width:${r.value}px;max-height:${t.height}px;height:${t.height}px;overflow-y:auto`:`width:${r.value}px`),h=m(()=>["bp-table-inner",{"bp-table-border":i.value},{"bp-table-stripe":l.value},{"bp-table-fixed-header":c.value}]),g=f=>[`text-${f.align||"left"}`];return(f,y)=>(u(),b("div",{ref_key:"bpTable",ref:n,class:"bp-table"},[d("div",{class:v(a(h))},[F(xa,{"header-list":a(o),width:a(r)},null,8,["header-list","width"]),d("div",{class:"bp-table-body-area",style:E(a(p))},[Sa,d("table",{class:"bp-table-body",style:E(`width:${a(r)}px`)},[F(Rt,{cols:a(o)},null,8,["cols"]),d("tbody",Fa,[a(s)?(u(),$(ka,{key:0,colspan:a(o).length},null,8,["colspan"])):(u(!0),b(q,{key:1},ae(e.dataSource,(_,z)=>(u(),b("tr",{key:`bp-table-tbody-tr-${z}`},[(u(!0),b(q,null,ae(a(o),(I,oe)=>(u(),b("td",{key:`bp-table-tbody-td-${z}-${oe}`,class:v(g(I))},[I.scope?C(f.$slots,I.scope.customRender,{key:1,row:_,index:z,data:_[I.key]}):(u(),b(q,{key:0},[D(k(_[I.key]),1)],64))],2))),128))]))),128))])],4)],4)],2)],512))}});const Ba={...Te,setup(){J(()=>{const e=un();window.theme=Nt(e.value);const t=document.documentElement,n=()=>{t.classList.contains("dark")?(t.setAttribute("data-theme","dark"),e.value.mode="dark"):(t.removeAttribute("data-theme"),e.value.mode="light")};n();const o=new MutationObserver(()=>{n(),o.takeRecords()});o.observe(t,{attributes:!0,childList:!1,subtree:!1})})},enhanceApp({app:e}){e.use(_s),e.component("Demo",Ls),e.component("BpTable",Ca),e.component("TableBlock",ca),e.component("TeamMember",qe)},Layout(){return me(Te.Layout,null,{"home-features-after":()=>me(qe)})}};function zt(e){if(e.extends){const t=zt(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const te=zt(Ba),Aa=x({name:"VitePressApp",setup(){const{site:e}=jt();return J(()=>{Ut(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Wt(),Gt(),qt(),te.setup&&te.setup(),()=>me(te.Layout)}});async function Ma(){const e=za(),t=Ra();t.provide(Xt,e);const n=Qt(e.route);return t.provide(Kt,n),t.component("Content",Zt),t.component("ClientOnly",Yt),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),te.enhanceApp&&await te.enhanceApp({app:t,router:e,siteData:Jt}),{app:t,router:e,data:n}}function Ra(){return en(Aa)}function za(){let e=_e,t;return tn(n=>{let o=nn(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),_e&&(e=!1),on(()=>import(o),[])},te.NotFound)}_e&&Ma().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Dt(t.route,n.site),e.mount("#app")})});export{Ma as createApp};
