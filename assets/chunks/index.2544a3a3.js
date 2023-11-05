import{a as D,b as j,u as B,w as U}from"./useNamespace.cfd15732.js";import{U as Y,f as Q,w as _,am as tt,a9 as et,a5 as L,e as S,g as V,d as J,ad as ot,l as nt,h as rt,v as st,o as H,c as z,F as at,M as it,X as ct,b as h,n as T,x as F,D as lt,ah as ut,an as mt,C as ft,a4 as pt}from"./framework.8c39f4f9.js";import{H as x,d as ht,s as dt,r as yt,C as R,l as gt,b as xt,e as Ct,f as St,z as bt,h as A,i as Tt,g as X,j as Rt,k as P,c as E}from"./emotion-css.esm.448a5830.js";import{a as Z,i as vt,t as w,c as $t}from"./size.5973b14d.js";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static harmonize(t,e){const r=x.fromInt(t),o=x.fromInt(e),s=ht(r.hue,o.hue),i=Math.min(s*.5,15),c=dt(r.hue+i*yt(r.hue,o.hue));return x.from(c,r.chroma,r.tone).toInt()}static hctHue(t,e,r){const o=I.cam16Ucs(t,e,r),s=R.fromInt(o),i=R.fromInt(t);return x.from(s.hue,i.chroma,gt(t)).toInt()}static cam16Ucs(t,e,r){const o=R.fromInt(t),s=R.fromInt(e),i=o.jstar,c=o.astar,u=o.bstar,l=s.jstar,m=s.astar,y=s.bstar,d=i+(l-i)*r,C=c+(m-c)*r,g=u+(y-u)*r;return R.fromUcs(d,C,g).toInt()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{static fromInt(t){const e=x.fromInt(t);return p.fromHct(e)}static fromHct(t){return new p(t.hue,t.chroma,t)}static fromHueAndChroma(t,e){return new p(t,e,p.createKeyColor(t,e))}constructor(t,e,r){this.hue=t,this.chroma=e,this.keyColor=r,this.cache=new Map}static createKeyColor(t,e){let o=x.from(t,e,50),s=Math.abs(o.chroma-e);for(let i=1;i<50;i+=1){if(Math.round(e)===Math.round(o.chroma))return o;const c=x.from(t,e,50+i),u=Math.abs(c.chroma-e);u<s&&(s=u,o=c);const l=x.from(t,e,50-i),m=Math.abs(l.chroma-e);m<s&&(s=m,o=l)}return o}tone(t){let e=this.cache.get(t);return e===void 0&&(e=x.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}getHct(t){return x.fromInt(this.tone(t))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{static of(t){return new f(t,!1)}static contentOf(t){return new f(t,!0)}static fromColors(t){return f.createPaletteFromColors(!1,t)}static contentFromColors(t){return f.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,e){const r=new f(e.primary,t);if(e.secondary){const o=new f(e.secondary,t);r.a2=o.a1}if(e.tertiary){const o=new f(e.tertiary,t);r.a3=o.a1}if(e.error){const o=new f(e.error,t);r.error=o.a1}if(e.neutral){const o=new f(e.neutral,t);r.n1=o.n1}if(e.neutralVariant){const o=new f(e.neutralVariant,t);r.n2=o.n2}return r}constructor(t,e){const r=x.fromInt(t),o=r.hue,s=r.chroma;e?(this.a1=p.fromHueAndChroma(o,s),this.a2=p.fromHueAndChroma(o,s/3),this.a3=p.fromHueAndChroma(o+60,s/2),this.n1=p.fromHueAndChroma(o,Math.min(s/12,4)),this.n2=p.fromHueAndChroma(o,Math.min(s/6,8))):(this.a1=p.fromHueAndChroma(o,Math.max(48,s)),this.a2=p.fromHueAndChroma(o,16),this.a3=p.fromHueAndChroma(o+60,24),this.n1=p.fromHueAndChroma(o,4),this.n2=p.fromHueAndChroma(o,8)),this.error=p.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return b.lightFromCorePalette(f.of(t))}static dark(t){return b.darkFromCorePalette(f.of(t))}static lightContent(t){return b.lightFromCorePalette(f.contentOf(t))}static darkContent(t){return b.darkFromCorePalette(f.contentOf(t))}static lightFromCorePalette(t){return new b({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new b({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,t=[]){const e=f.of(n);return{source:n,schemes:{light:b.light(n),dark:b.dark(n)},palettes:{primary:e.a1,secondary:e.a2,tertiary:e.a3,neutral:e.n1,neutralVariant:e.n2,error:e.error},customColors:t.map(r=>wt(n,r))}}function wt(n,t){let e=t.value;const r=e,o=n;t.blend&&(e=I.harmonize(r,o));const i=f.of(e).a1;return{color:t,value:e,light:{color:i.tone(40),onColor:i.tone(100),colorContainer:i.tone(90),onColorContainer:i.tone(10)},dark:{color:i.tone(80),onColor:i.tone(20),colorContainer:i.tone(30),onColorContainer:i.tone(90)}}}const kt=n=>{Y("ThemeContext",n)},a={fontFamily:'"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',htmlFontSize:16,fontSize:14,pxToRem:n=>{const t=a.fontSize/14;return`${n/a.htmlFontSize*t}rem`}},Ht={...a,h1:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(57),fontStyle:"unset",letterSpacing:a.pxToRem(-.25),lineHeight:a.pxToRem(64),textTransform:"unset",textDecoration:"unset"},h2:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(45),fontStyle:"unset",letterSpacing:a.pxToRem(0),lineHeight:a.pxToRem(52),textTransform:"unset",textDecoration:"unset"},h3:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(36),fontStyle:"unset",letterSpacing:a.pxToRem(0),lineHeight:a.pxToRem(44),textTransform:"unset",textDecoration:"unset"},h4:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(32),fontStyle:"unset",letterSpacing:a.pxToRem(0),lineHeight:a.pxToRem(40),textTransform:"unset",textDecoration:"unset"},h5:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(28),fontStyle:"unset",letterSpacing:a.pxToRem(0),lineHeight:a.pxToRem(36),textTransform:"unset",textDecoration:"unset"},h6:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(24),fontStyle:"unset",letterSpacing:a.pxToRem(0),lineHeight:a.pxToRem(32),textTransform:"unset",textDecoration:"unset"},title:{small:{fontFamily:"Roboto",fontWeight:500,fontSize:a.pxToRem(14),fontStyle:"unset",letterSpacing:a.pxToRem(.1),lineHeight:a.pxToRem(20),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:500,fontSize:a.pxToRem(16),fontStyle:"unset",letterSpacing:a.pxToRem(.15000001),lineHeight:a.pxToRem(24),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(22),fontStyle:"unset",letterSpacing:a.pxToRem(0),lineHeight:a.pxToRem(28),textTransform:"unset",textDecoration:"unset"}},body:{small:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(12),fontStyle:"unset",letterSpacing:a.pxToRem(.40000001),lineHeight:a.pxToRem(16),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(14),fontStyle:"unset",letterSpacing:a.pxToRem(.25),lineHeight:a.pxToRem(20),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(16),fontStyle:"unset",letterSpacing:a.pxToRem(.5),lineHeight:a.pxToRem(24),textTransform:"unset",textDecoration:"unset"}},label:{small:{fontFamily:"Roboto",fontWeight:500,fontSize:a.pxToRem(11),fontStyle:"unset",letterSpacing:a.pxToRem(.5),lineHeight:a.pxToRem(16),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:400,fontSize:a.pxToRem(12),fontStyle:"unset",letterSpacing:a.pxToRem(.5),lineHeight:a.pxToRem(16),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:500,fontSize:a.pxToRem(14),fontStyle:"unset",letterSpacing:a.pxToRem(.1),lineHeight:a.pxToRem(20),textTransform:"unset",textDecoration:"unset"}}};class N{constructor(t,e,r="light"){this.colors=xt,this.states=Ct,this.elevations=St,this.typography=Ht,this.zIndex=bt,this.schemes=t,this.mode=r,this.palettes=e}setMode(t){this.mode=t}}const zt=n=>{const t={};for(const[e,r]of Object.entries(n)){const o={};Z.forEach(s=>o[s]=A(r.tone(+s))),t[e]=o}return t},Dt=n=>{const t={};return n.forEach(e=>{const{name:r,value:o}=e,s=f.of(o).a1,i={};Z.forEach(c=>i[c]=A(s.tone(+c))),t[r.toLowerCase()]=i}),t},M=n=>{const t={},e={};for(const[r,o]of Object.entries(n.toJSON())){const s=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=A(o),{r:c,g:u,b:l}=X(o);t[r]=i,e[`--md-sys-color-${s}`]=i,e[`--md-sys-color-${s}-rgb`]=`${c} ${u} ${l}`}return{schemes:t,styles:e}},O=(n,t)=>{const e={},r={};return n.forEach(o=>{const{name:s}=o.color,i=t==="light"?o.light:o.dark;for(const[c,u]of Object.entries(i)){const l=c.startsWith("on")?c.replace("Color",`${s[0].toUpperCase()}${s.slice(1)}`):c.replace("color",s),m=l.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),y=A(u),{r:d,g:C,b:g}=X(u);e[l]=y,r[`--md-sys-color-${m}`]=y,r[`--md-sys-color-${m}-rgb`]=`${d} ${C} ${g}`}}),{schemes:e,styles:r}},W=(...n)=>{const t={},e={};return n.forEach(r=>{Object.assign(t,r.schemes),Object.assign(e,r.styles)}),{schemes:t,styles:e}},At=(n,t,e)=>{const{fontFamily:r,htmlFontSize:o}=e.typography;Tt({":root":{colorScheme:"light",...n==null?void 0:n.styles},':root[data-theme="dark"]':{colorScheme:"dark",...t==null?void 0:t.styles},html:{fontSize:o},body:{fontFamily:r,color:"var(--md-sys-color-on-surface)",fontSize:"1rem"}})},Vt=(n=P.source,t={},e=P.customColors)=>{const{schemes:r,mode:o}=t,s=Ft(Rt(n),[...e,...t.customColors??[]]),i={...zt(s.palettes),...Dt(e)},c=Q(new N({},i,o)),u=W(M(s.schemes.light),O(s.customColors,"light")),l=W(M(s.schemes.dark),O(s.customColors,"dark"));return _(()=>c.value.mode,m=>{const{schemes:y}=m==="dark"?l:u;c.value=new N({...y,...r},i,m)},{immediate:!0}),At(u,l,c.value),kt(c),c},Kt=n=>!n&&n!==0||tt(n)&&n.length===0||et(n)&&!Object.keys(n).length,Et=n=>L(n)?!Number.isNaN(Number(n)):!1;function k(n,t="px"){const e=vt(n)||Et(n);return!e&&!n?"":e?`${n}${t}`:(L(n),n)}const It=Vt();function Pt(n,t){if(t in n)return n[t]}const Yt=(n,t)=>{const e=n.color?D(n,"color"):D(n,"severity","var(--md-sys-color-primary)"),r=S(()=>Pt(It.value.palettes.error,"40")),o=S(()=>w.includes(n.severity)?`var(--md-sys-color-on-${n.severity})`:null),s=S(()=>n.color?w.includes(n.color)?`var(--md-sys-color-${n.color}-container)`:n.color:w.includes(n.severity)?`var(--md-sys-color-${n.severity}-container)`:null),i=S(()=>w.includes(n.severity)?`var(--md-sys-color-${n.severity}-container-filled)`:null);return S(()=>E`
      --fn-alert-2222: ${r.value};
      --fn-alert-background: ${s.value};
      --fn-alert-background-filled: ${i.value};
      --fn-alert-color: ${e.value};
      --fn-alert-on-color: ${o.value??"var(--md-sys-color-on-primary)"};
    `)},Nt=(n,t)=>{const e=D(n,"color","var(--fn-sys-color-ripple)");return S(()=>E`
      --fn-ripple--duration: ${n.duration}ms;
      & .${t.e("span")} {
        background-color: ${e.value};
      }
    `)},Mt=(n,t)=>{const e=D(n,"color","var(--md-sys-color-primary)"),r=V(),{disabled:o}=(r==null?void 0:r.attrs)||{};return S(()=>{const s=n.modelValue?e.value||"var(--md-sys-color-primary)":"#fff",i=n.modelValue?e.value||"var(--md-sys-color-primary)":"#605959",c=n.modelValue?e.value||"var(--md-sys-color-primary)":"#000";return E`
      opacity: ${o===""?.5:1};
      --fn-switch-color: ${e.value||"var(--md-sys-color-primary)"};
      --fn-switch--track-color: ${c};
      --fn-switch--dot-color: ${s};
      --fn-switch--dot-hover-color: ${i};
      & .${t.e("icon")} {
        color: ${e.value||"var(--md-sys-color-primary)"};
      }
    `})},Ot="update:modelValue",Wt=j({color:{type:[String,Function],default:"var(--fn-sys-color-ripple)"},center:{type:Boolean,default:!1},duration:{type:Number,default:600}}),jt=J({__name:"index",props:Wt,setup(n,{expose:t}){var y;const e=n,r=ot([]),o=(y=V())==null?void 0:y.parent,s=B("ripple"),i=Nt(e,s);let c=null,u=null;const l=d=>{const C=d.currentTarget,g=C.getBoundingClientRect(),v=Math.max(C.clientWidth,C.clientHeight),$=v/2,G=e.center?C.clientWidth/2-$:d.clientX-g.left-$,K=e.center?C.clientHeight/2-$:d.clientY-g.top-$;r.push({x:G,y:K,size:v})},m=()=>{c&&(clearTimeout(c),c=null)};return nt(()=>{r.length>0&&(m(),c=setTimeout(()=>{r.length=0,m()},e.duration*2))}),rt(()=>{var d;o&&(u=(d=o.proxy)==null?void 0:d.$el.addEventListener("mousedown",l))}),st(()=>{var d;m(),u&&((d=o==null?void 0:o.proxy)==null||d.$el.removeEventListener(u),u=null)}),t({addRipple:l}),(d,C)=>(H(),z("span",{class:T([h(s).b(),h(i)])},[(H(!0),z(at,null,it(r,(g,v)=>(H(),z("span",{key:`ripple_${v}`,style:ct({top:h(k)(g.y),left:h(k)(g.x),width:h(k)(g.size),height:h(k)(g.size)}),class:T([[h(s).e("span")],"pressed-state-layer"])},null,6))),128))],2))}}),q=U(jt,"FnRipple");q.name="FnRipple";const Bt=q,Ut=j({modelValue:{type:Boolean,required:!0},color:{type:[String,Function],default:"primary"},size:{type:String,value:$t,default:"medium"},enableRipple:{type:Boolean,default:!0}}),Lt=J({__name:"index",props:Ut,emits:["update:modelValue"],setup(n,{emit:t}){const e=n,r=V(),o=B("switch-new"),s=Mt(e,o),i=S({get(){return e.modelValue},set(l){t(Ot,l)}}),c=S(()=>{const{size:l}=e,{disabled:m}=(r==null?void 0:r.attrs)||{};return[o.b(),o.m(l),m===""?o.m("disabled"):""]}),u=S(()=>{const{disabled:l}=(r==null?void 0:r.attrs)||{};return[l===""?o.m("disabled"):o.m("enabled"),i.value?o.m("active"):""]});return(l,m)=>(H(),z("span",{class:T([...h(c),h(s)])},[F("div",{class:T([h(o).e(`overlay--${e.size}`),h(u)])},[F("div",{class:T([h(o).e(`dot--${e.size}`)])},[lt(h(Bt),{color:e.color,duration:1200,center:""},null,8,["color"])],2),ut(F("input",ft(l.$attrs,{"onUpdate:modelValue":m[0]||(m[0]=y=>pt(i)?i.value=y:null),class:[h(o).e("input")],type:"checkbox"}),null,16),[[mt,h(i)]])],2),F("div",{class:T([h(o).e("track")])},null,2)],2))}}),Jt=U(Lt,"FnCheckbox");Jt.name="FnSwitchNew";export{Jt as F,Ot as U,k as a,Bt as b,Vt as c,Kt as i,Yt as u};
