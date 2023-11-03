import{e as m,U as He,f as B,w as J,b as i,d as w,o as f,y as k,z as $,r as T,n as x,I as ct,h as re,g as Ie,a6 as te,a7 as ne,A as H,D as F,ao as Oe,C as U,B as W,ag as L,x as u,c as v,ai as N,T as he,X as V,a as X,t as C,aj as qt,ak as we,al as Ue,a0 as Xt,ap as ut,ah as Zt,a3 as me,_ as ge,F as ee,a5 as dt,S as Qt,a4 as Kt,a2 as Jt,M as pe,i as Yt,aq as en,ar as tn,K as Re,as as nn,u as on,l as rn,at as sn,au as an,av as ln,aw as cn,ax as un,ay as dn,az as fn,aA as pn,aB as hn,aC as mn,aD as gn,aE as bn,H as vn}from"./chunks/framework.34a1867b.js";import{V as yn,t as We}from"./chunks/theme.0853242e.js";import{u as O,w as R,a as Q,c as _n,b as be,d as xn}from"./chunks/useNamespace.948b7fc8.js";import{H as j,d as wn,s as $n,r as kn,C as ce,l as Sn,u as ft,b as $e,e as Be,f as Cn,g as Fn,h as Tn,z as Rn,i as ke,j as Bn,k as Ge,c as S,a as se}from"./chunks/emotion-css.esm.27878de9.js";import{t as pt,b as ue,c as zn,F as ht,d as de,a as An}from"./chunks/index.8d031b82.js";import{u as mt,a as Mn,n as fe,t as Hn,r as gt,b as In,d as bt,e as vt,i as On,c as ie,f as Pe,g as Pn}from"./chunks/size.c9509b6b.js";import{a as ze,U as oe,b as Ee,i as En,F as Ln}from"./chunks/index.2c76c5b3.js";import{S as ve,F as Vn}from"./chunks/index.a57e6ca6.js";import"./chunks/styled.d54a182d.js";/**
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
 */class Le{static harmonize(e,n){const o=j.fromInt(e),r=j.fromInt(n),s=wn(o.hue,r.hue),a=Math.min(s*.5,15),l=$n(o.hue+a*kn(o.hue,r.hue));return j.from(l,o.chroma,o.tone).toInt()}static hctHue(e,n,o){const r=Le.cam16Ucs(e,n,o),s=ce.fromInt(r),a=ce.fromInt(e);return j.from(s.hue,a.chroma,Sn(e)).toInt()}static cam16Ucs(e,n,o){const r=ce.fromInt(e),s=ce.fromInt(n),a=r.jstar,l=r.astar,c=r.bstar,p=s.jstar,h=s.astar,b=s.bstar,d=a+(p-a)*o,y=l+(h-l)*o,_=c+(b-c)*o;return ce.fromUcs(d,y,_).toInt()}}/**
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
 */class M{static fromInt(e){const n=j.fromInt(e);return M.fromHct(n)}static fromHct(e){return new M(e.hue,e.chroma,e)}static fromHueAndChroma(e,n){return new M(e,n,M.createKeyColor(e,n))}constructor(e,n,o){this.hue=e,this.chroma=n,this.keyColor=o,this.cache=new Map}static createKeyColor(e,n){let r=j.from(e,n,50),s=Math.abs(r.chroma-n);for(let a=1;a<50;a+=1){if(Math.round(n)===Math.round(r.chroma))return r;const l=j.from(e,n,50+a),c=Math.abs(l.chroma-n);c<s&&(s=c,r=l);const p=j.from(e,n,50-a),h=Math.abs(p.chroma-n);h<s&&(s=h,r=p)}return r}tone(e){let n=this.cache.get(e);return n===void 0&&(n=j.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,n)),n}getHct(e){return j.fromInt(this.tone(e))}}/**
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
 */class z{static of(e){return new z(e,!1)}static contentOf(e){return new z(e,!0)}static fromColors(e){return z.createPaletteFromColors(!1,e)}static contentFromColors(e){return z.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,n){const o=new z(n.primary,e);if(n.secondary){const r=new z(n.secondary,e);o.a2=r.a1}if(n.tertiary){const r=new z(n.tertiary,e);o.a3=r.a1}if(n.error){const r=new z(n.error,e);o.error=r.a1}if(n.neutral){const r=new z(n.neutral,e);o.n1=r.n1}if(n.neutralVariant){const r=new z(n.neutralVariant,e);o.n2=r.n2}return o}constructor(e,n){const o=j.fromInt(e),r=o.hue,s=o.chroma;n?(this.a1=M.fromHueAndChroma(r,s),this.a2=M.fromHueAndChroma(r,s/3),this.a3=M.fromHueAndChroma(r+60,s/2),this.n1=M.fromHueAndChroma(r,Math.min(s/12,4)),this.n2=M.fromHueAndChroma(r,Math.min(s/6,8))):(this.a1=M.fromHueAndChroma(r,Math.max(48,s)),this.a2=M.fromHueAndChroma(r,16),this.a3=M.fromHueAndChroma(r+60,24),this.n1=M.fromHueAndChroma(r,4),this.n2=M.fromHueAndChroma(r,8)),this.error=M.fromHueAndChroma(25,84)}}/**
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
 */class q{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(e){return q.lightFromCorePalette(z.of(e))}static dark(e){return q.darkFromCorePalette(z.of(e))}static lightContent(e){return q.lightFromCorePalette(z.contentOf(e))}static darkContent(e){return q.darkFromCorePalette(z.contentOf(e))}static lightFromCorePalette(e){return new q({primary:e.a1.tone(40),onPrimary:e.a1.tone(100),primaryContainer:e.a1.tone(90),onPrimaryContainer:e.a1.tone(10),secondary:e.a2.tone(40),onSecondary:e.a2.tone(100),secondaryContainer:e.a2.tone(90),onSecondaryContainer:e.a2.tone(10),tertiary:e.a3.tone(40),onTertiary:e.a3.tone(100),tertiaryContainer:e.a3.tone(90),onTertiaryContainer:e.a3.tone(10),error:e.error.tone(40),onError:e.error.tone(100),errorContainer:e.error.tone(90),onErrorContainer:e.error.tone(10),background:e.n1.tone(99),onBackground:e.n1.tone(10),surface:e.n1.tone(99),onSurface:e.n1.tone(10),surfaceVariant:e.n2.tone(90),onSurfaceVariant:e.n2.tone(30),outline:e.n2.tone(50),outlineVariant:e.n2.tone(80),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(20),inverseOnSurface:e.n1.tone(95),inversePrimary:e.a1.tone(80)})}static darkFromCorePalette(e){return new q({primary:e.a1.tone(80),onPrimary:e.a1.tone(20),primaryContainer:e.a1.tone(30),onPrimaryContainer:e.a1.tone(90),secondary:e.a2.tone(80),onSecondary:e.a2.tone(20),secondaryContainer:e.a2.tone(30),onSecondaryContainer:e.a2.tone(90),tertiary:e.a3.tone(80),onTertiary:e.a3.tone(20),tertiaryContainer:e.a3.tone(30),onTertiaryContainer:e.a3.tone(90),error:e.error.tone(80),onError:e.error.tone(20),errorContainer:e.error.tone(30),onErrorContainer:e.error.tone(80),background:e.n1.tone(10),onBackground:e.n1.tone(90),surface:e.n1.tone(10),onSurface:e.n1.tone(90),surfaceVariant:e.n2.tone(30),onSurfaceVariant:e.n2.tone(80),outline:e.n2.tone(60),outlineVariant:e.n2.tone(30),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(90),inverseOnSurface:e.n1.tone(20),inversePrimary:e.a1.tone(40)})}constructor(e){this.props=e}toJSON(){return{...this.props}}}/**
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
 */function Dn(t,e=[]){const n=z.of(t);return{source:t,schemes:{light:q.light(t),dark:q.dark(t)},palettes:{primary:n.a1,secondary:n.a2,tertiary:n.a3,neutral:n.n1,neutralVariant:n.n2,error:n.error},customColors:e.map(o=>jn(t,o))}}function jn(t,e){let n=e.value;const o=n,r=t;e.blend&&(n=Le.harmonize(o,r));const a=z.of(n).a1;return{color:e,value:n,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}const Se=(t,e,n)=>{const o=ft();return m(()=>{if(!e||!(e in t))return n??null;const r=t==null?void 0:t[e];if(typeof r=="function"){const{r:c,g:p,b:h}=$e(Be(r(o.value)));return`${c} ${p} ${h}`}if(typeof r=="string"&&r in o.value.schemes)return`var(--md-sys-color-${r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}-rgb)`;const{r:s,g:a,b:l}=$e(Be(r));return`${s} ${a} ${l}`})},Nn=t=>{He("ThemeContext",t)},g={fontFamily:'"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',htmlFontSize:16,fontSize:14,pxToRem:t=>{const e=g.fontSize/14;return`${t/g.htmlFontSize*e}rem`}},Un={...g,h1:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(57),fontStyle:"unset",letterSpacing:g.pxToRem(-.25),lineHeight:g.pxToRem(64),textTransform:"unset",textDecoration:"unset"},h2:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(45),fontStyle:"unset",letterSpacing:g.pxToRem(0),lineHeight:g.pxToRem(52),textTransform:"unset",textDecoration:"unset"},h3:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(36),fontStyle:"unset",letterSpacing:g.pxToRem(0),lineHeight:g.pxToRem(44),textTransform:"unset",textDecoration:"unset"},h4:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(32),fontStyle:"unset",letterSpacing:g.pxToRem(0),lineHeight:g.pxToRem(40),textTransform:"unset",textDecoration:"unset"},h5:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(28),fontStyle:"unset",letterSpacing:g.pxToRem(0),lineHeight:g.pxToRem(36),textTransform:"unset",textDecoration:"unset"},h6:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(24),fontStyle:"unset",letterSpacing:g.pxToRem(0),lineHeight:g.pxToRem(32),textTransform:"unset",textDecoration:"unset"},title:{small:{fontFamily:"Roboto",fontWeight:500,fontSize:g.pxToRem(14),fontStyle:"unset",letterSpacing:g.pxToRem(.1),lineHeight:g.pxToRem(20),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:500,fontSize:g.pxToRem(16),fontStyle:"unset",letterSpacing:g.pxToRem(.15000001),lineHeight:g.pxToRem(24),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(22),fontStyle:"unset",letterSpacing:g.pxToRem(0),lineHeight:g.pxToRem(28),textTransform:"unset",textDecoration:"unset"}},body:{small:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(12),fontStyle:"unset",letterSpacing:g.pxToRem(.40000001),lineHeight:g.pxToRem(16),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(14),fontStyle:"unset",letterSpacing:g.pxToRem(.25),lineHeight:g.pxToRem(20),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(16),fontStyle:"unset",letterSpacing:g.pxToRem(.5),lineHeight:g.pxToRem(24),textTransform:"unset",textDecoration:"unset"}},label:{small:{fontFamily:"Roboto",fontWeight:500,fontSize:g.pxToRem(11),fontStyle:"unset",letterSpacing:g.pxToRem(.5),lineHeight:g.pxToRem(16),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:400,fontSize:g.pxToRem(12),fontStyle:"unset",letterSpacing:g.pxToRem(.5),lineHeight:g.pxToRem(16),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:500,fontSize:g.pxToRem(14),fontStyle:"unset",letterSpacing:g.pxToRem(.1),lineHeight:g.pxToRem(20),textTransform:"unset",textDecoration:"unset"}}};let qe=class{constructor(e,n,o="light"){this.colors=Cn,this.states=Fn,this.elevations=Tn,this.typography=Un,this.zIndex=Rn,this.schemes=e,this.mode=o,this.palettes=n}setMode(e){this.mode=e}};const Wn=t=>{const e={};for(const[n,o]of Object.entries(t)){const r={};pt.forEach(s=>r[s]=ke(o.tone(+s))),e[n]=r}return e},Gn=t=>{const e={};return t.forEach(n=>{const{name:o,value:r}=n,s=z.of(r).a1,a={};pt.forEach(l=>a[l]=ke(s.tone(+l))),e[o.toLowerCase()]=a}),e},Xe=t=>{const e={},n={};for(const[o,r]of Object.entries(t.toJSON())){const s=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=ke(r),{r:l,g:c,b:p}=$e(r);e[o]=a,n[`--md-sys-color-${s}`]=a,n[`--md-sys-color-${s}-rgb`]=`${l} ${c} ${p}`}return{schemes:e,styles:n}},Ze=(t,e)=>{const n={},o={};return t.forEach(r=>{const{name:s}=r.color,a=e==="light"?r.light:r.dark;for(const[l,c]of Object.entries(a)){const p=l.startsWith("on")?l.replace("Color",`${s[0].toUpperCase()}${s.slice(1)}`):l.replace("color",s),h=p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),b=ke(c),{r:d,g:y,b:_}=$e(c);n[p]=b,o[`--md-sys-color-${h}`]=b,o[`--md-sys-color-${h}-rgb`]=`${d} ${y} ${_}`}}),{schemes:n,styles:o}},Qe=(...t)=>{const e={},n={};return t.forEach(o=>{Object.assign(e,o.schemes),Object.assign(n,o.styles)}),{schemes:e,styles:n}},qn=(t,e,n)=>{const{fontFamily:o,htmlFontSize:r}=n.typography;Bn({":root":{colorScheme:"light",...t==null?void 0:t.styles},':root[data-theme="dark"]':{colorScheme:"dark",...e==null?void 0:e.styles},html:{fontSize:r},body:{fontFamily:o,color:"var(--md-sys-color-on-surface)",fontSize:"1rem"}})},Xn=(t=Ge.source,e={},n=Ge.customColors)=>{const{schemes:o,mode:r}=e,s=Dn(Be(t),[...n,...e.customColors??[]]),a={...Wn(s.palettes),...Gn(n)},l=B(new qe({},a,r)),c=Qe(Xe(s.schemes.light),Ze(s.customColors,"light")),p=Qe(Xe(s.schemes.dark),Ze(s.customColors,"dark"));return J(()=>l.value.mode,h=>{const{schemes:b}=h==="dark"?p:c;l.value=new qe({...b,...o},a,h)},{immediate:!0}),qn(c,p,l.value),Nn(l),l};function yt(t){var e;const n=gt(t);return(e=n==null?void 0:n.$el)!=null?e:n}const _t=bt?window:void 0,Zn=bt?window.navigator:void 0;function Qn(...t){let e,n,o,r;if(Mn(t[0])?([n,o,r]=t,e=_t):[e,n,o,r]=t,!e)return fe;let s=fe;const a=J(()=>yt(e),c=>{s(),c&&(c.addEventListener(n,o,r),s=()=>{c.removeEventListener(n,o,r),s=fe})},{immediate:!0,flush:"post"}),l=()=>{a(),s()};return vt(l),l}function xt(t,e=!1){const n=B(),o=()=>n.value=!!t();return o(),Hn(o,e),n}function Kn(t={}){const{navigator:e=Zn,read:n=!1,source:o,copiedDuring:r=1500}=t,s=["copy","cut"],a=xt(()=>e&&"clipboard"in e),l=B(""),c=B(!1),p=mt(()=>c.value=!1,r);function h(){e.clipboard.readText().then(d=>{l.value=d})}if(a.value&&n)for(const d of s)Qn(d,h);async function b(d=gt(o)){a.value&&d!=null&&(await e.clipboard.writeText(d),l.value=d,c.value=!0,p.start())}return{isSupported:a,text:l,copied:c,copy:b}}const Ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Je="__vueuse_ssr_handlers__";Ke[Je]=Ke[Je]||{};var Ye=Object.getOwnPropertySymbols,Jn=Object.prototype.hasOwnProperty,Yn=Object.prototype.propertyIsEnumerable,eo=(t,e)=>{var n={};for(var o in t)Jn.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Ye)for(var o of Ye(t))e.indexOf(o)<0&&Yn.call(t,o)&&(n[o]=t[o]);return n};function to(t,e,n={}){const o=n,{window:r=_t}=o,s=eo(o,["window"]);let a;const l=xt(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},p=J(()=>yt(t),b=>{c(),l.value&&r&&b&&(a=new ResizeObserver(e),a.observe(b,s))},{immediate:!0,flush:"post"}),h=()=>{c(),p()};return vt(h),{isSupported:l,stop:h}}var et;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(et||(et={}));var no=Object.defineProperty,tt=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,ro=Object.prototype.propertyIsEnumerable,nt=(t,e,n)=>e in t?no(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,so=(t,e)=>{for(var n in e||(e={}))oo.call(e,n)&&nt(t,n,e[n]);if(tt)for(var n of tt(e))ro.call(e,n)&&nt(t,n,e[n]);return t};const ao={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};so({linear:In},ao);const Ae=t=>{const e={};return Object.keys(t).forEach(n=>{e[n]=i(t[n])}),e},io={cs:{type:[Object,String,Array]},component:{type:[String,Object],default:"button"}},lo=t=>{const e=S`
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
  `;return m(()=>{const n=t.cs?S(t.cs):"";return se(e,n)})},co=lo,uo=w({__name:"index",props:io,setup(t){const e=t,n=O("button-base"),o=co(e);return(r,s)=>(f(),k(ct(r.$props.component),{class:x([i(n).b(),i(o)])},{default:$(()=>[T(r.$slots,"default")]),_:3},8,["class"]))}}),wt=R(uo,"FnButtonBase");wt.name="FnButtonBase";const Ve=wt,fo=(t,e)=>{const n=t.color?Q(t,"color"):Q(t,"severity","var(--md-sys-color-primary)"),o=m(()=>ue.includes(t.severity)?`var(--md-sys-color-on-${t.severity})`:null),r=m(()=>ue.includes(t.severity)?`var(--md-sys-color-${t.severity}-container)`:null),s=m(()=>ue.includes(t.severity)?`var(--md-sys-color-${t.severity}-container-filled)`:null);return m(()=>S`
      --fn-alert-background: ${r.value};
      --fn-alert-background-filled: ${s.value};
      --fn-alert-color: ${n.value};
      --fn-alert-on-color: ${o.value??"var(--md-sys-color-on-primary)"};
    `)},po=(t,e)=>{const n=Q(t,"color","var(--md-sys-color-primary)"),o=Se(t,"color","var(--md-sys-color-primary)"),r=m(()=>ue.includes(t.color)?`var(--md-sys-color-on-${t.color})`:null);return m(()=>S`
      --fn-button-color: ${n.value};
      --fn-button-color-rgb: ${o.value};
      --fn-button-on-color: ${r.value??"var(--md-sys-color-on-primary)"};
      &.${e.m("filled")} {
          box-shadow: ${t.disableElevation?"var(--md-sys-elevation-level-0)":"var(--md-sys-elevation-level-2)"};
          &:not([disabled]):hover {
            box-shadow: ${t.disableElevation?"var(--md-sys-elevation-level-0)":"var(--md-sys-elevation-level-4)"};
          },
        },
      &.${e.m(t.size)} {
        height: ${Io[t.size]}px;
      }
    `)},ho=t=>{const e=m(()=>{const o={};return t.percentage&&On(t.percentage)&&t.percentage>0&&(o["--progress-bar-width"]=`${t.percentage}%`,o.height="0.5rem"),o.height=ze(t.height),o["--progress-bar-inner-bg"]=t.barColor,o["--progress-bar-out-bg"]=t.background,o["--bar-duration"]=t.duration?`${t.duration}s`:"2s",o["--progress-bar-bg"]=t.color,o["--current-progress"]=`${Number(t.percentage)/100*360}deg`,o}),n=m(()=>{const o={height:"auto"};return o["--current-progress"]=`${Number(t.percentage)/100*360}deg`,o});return{styleList:e,styleListCircle:n}};function A(t,e){mo(t)&&(t="100%");var n=go(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function _e(t){return Math.min(1,Math.max(0,t))}function mo(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function go(t){return typeof t=="string"&&t.indexOf("%")!==-1}function $t(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function xe(t){return t<=1?"".concat(Number(t)*100,"%"):t}function Y(t){return t.length===1?"0"+t:String(t)}function bo(t,e,n){return{r:A(t,255)*255,g:A(e,255)*255,b:A(n,255)*255}}function ot(t,e,n){t=A(t,255),e=A(e,255),n=A(n,255);var o=Math.max(t,e,n),r=Math.min(t,e,n),s=0,a=0,l=(o+r)/2;if(o===r)a=0,s=0;else{var c=o-r;switch(a=l>.5?c/(2-o-r):c/(o+r),o){case t:s=(e-n)/c+(e<n?6:0);break;case e:s=(n-t)/c+2;break;case n:s=(t-e)/c+4;break}s/=6}return{h:s,s:a,l}}function Ce(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vo(t,e,n){var o,r,s;if(t=A(t,360),e=A(e,100),n=A(n,100),e===0)r=n,s=n,o=n;else{var a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;o=Ce(l,a,t+1/3),r=Ce(l,a,t),s=Ce(l,a,t-1/3)}return{r:o*255,g:r*255,b:s*255}}function rt(t,e,n){t=A(t,255),e=A(e,255),n=A(n,255);var o=Math.max(t,e,n),r=Math.min(t,e,n),s=0,a=o,l=o-r,c=o===0?0:l/o;if(o===r)s=0;else{switch(o){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return{h:s,s:c,v:a}}function yo(t,e,n){t=A(t,360)*6,e=A(e,100),n=A(n,100);var o=Math.floor(t),r=t-o,s=n*(1-e),a=n*(1-r*e),l=n*(1-(1-r)*e),c=o%6,p=[n,a,s,s,l,n][c],h=[l,n,n,a,s,s][c],b=[s,s,l,n,n,a][c];return{r:p*255,g:h*255,b:b*255}}function st(t,e,n,o){var r=[Y(Math.round(t).toString(16)),Y(Math.round(e).toString(16)),Y(Math.round(n).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function _o(t,e,n,o,r){var s=[Y(Math.round(t).toString(16)),Y(Math.round(e).toString(16)),Y(Math.round(n).toString(16)),Y(xo(o))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function xo(t){return Math.round(parseFloat(t)*255).toString(16)}function at(t){return E(t)/255}function E(t){return parseInt(t,16)}function wo(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Me={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $o(t){var e={r:0,g:0,b:0},n=1,o=null,r=null,s=null,a=!1,l=!1;return typeof t=="string"&&(t=Co(t)),typeof t=="object"&&(G(t.r)&&G(t.g)&&G(t.b)?(e=bo(t.r,t.g,t.b),a=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):G(t.h)&&G(t.s)&&G(t.v)?(o=xe(t.s),r=xe(t.v),e=yo(t.h,o,r),a=!0,l="hsv"):G(t.h)&&G(t.s)&&G(t.l)&&(o=xe(t.s),s=xe(t.l),e=vo(t.h,o,s),a=!0,l="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=$t(n),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var ko="[-\\+]?\\d+%?",So="[-\\+]?\\d*\\.\\d+%?",K="(?:".concat(So,")|(?:").concat(ko,")"),Fe="[\\s|\\(]+(".concat(K,")[,|\\s]+(").concat(K,")[,|\\s]+(").concat(K,")\\s*\\)?"),Te="[\\s|\\(]+(".concat(K,")[,|\\s]+(").concat(K,")[,|\\s]+(").concat(K,")[,|\\s]+(").concat(K,")\\s*\\)?"),D={CSS_UNIT:new RegExp(K),rgb:new RegExp("rgb"+Fe),rgba:new RegExp("rgba"+Te),hsl:new RegExp("hsl"+Fe),hsla:new RegExp("hsla"+Te),hsv:new RegExp("hsv"+Fe),hsva:new RegExp("hsva"+Te),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Co(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(Me[t])t=Me[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=D.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=D.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=D.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=D.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=D.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=D.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=D.hex8.exec(t),n?{r:E(n[1]),g:E(n[2]),b:E(n[3]),a:at(n[4]),format:e?"name":"hex8"}:(n=D.hex6.exec(t),n?{r:E(n[1]),g:E(n[2]),b:E(n[3]),format:e?"name":"hex"}:(n=D.hex4.exec(t),n?{r:E(n[1]+n[1]),g:E(n[2]+n[2]),b:E(n[3]+n[3]),a:at(n[4]+n[4]),format:e?"name":"hex8"}:(n=D.hex3.exec(t),n?{r:E(n[1]+n[1]),g:E(n[2]+n[2]),b:E(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function G(t){return!!D.CSS_UNIT.exec(String(t))}var Fo=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var o;if(e instanceof t)return e;typeof e=="number"&&(e=wo(e)),this.originalInput=e;var r=$o(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(o=n.format)!==null&&o!==void 0?o:r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,o,r,s=e.r/255,a=e.g/255,l=e.b/255;return s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*o+.0722*r},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=$t(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=rt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=rt(this.r,this.g,this.b),n=Math.round(e.h*360),o=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsva(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=ot(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=ot(this.r,this.g,this.b),n=Math.round(e.h*360),o=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsla(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),st(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),_o(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),o=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(o,")"):"rgba(".concat(e,", ").concat(n,", ").concat(o,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(A(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(A(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+st(this.r,this.g,this.b,!1),n=0,o=Object.entries(Me);n<o.length;n++){var r=o[n],s=r[0],a=r[1];if(e===a)return s}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var o=!1,r=this.a<1&&this.a>=0,s=!n&&r&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),o||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=_e(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=_e(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=_e(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=_e(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),o=(n.h+e)%360;return n.h=o<0?360+o:o,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var o=this.toRgb(),r=new t(e).toRgb(),s=n/100,a={r:(r.r-o.r)*s+o.r,g:(r.g-o.g)*s+o.g,b:(r.b-o.b)*s+o.b,a:(r.a-o.a)*s+o.a};return new t(a)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var o=this.toHsl(),r=360/n,s=[this];for(o.h=(o.h-(r*e>>1)+720)%360;--e;)o.h=(o.h+r)%360,s.push(new t(o));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),o=n.h,r=n.s,s=n.v,a=[],l=1/e;e--;)a.push(new t({h:o,s:r,v:s})),s=(s+l)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),o=new t(e).toRgb();return new t({r:o.r+(n.r-o.r)*n.a,g:o.g+(n.g-o.g)*n.a,b:o.b+(n.b-o.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),o=n.h,r=[this],s=360/e,a=1;a<e;a++)r.push(new t({h:(o+a*s)%360,s:n.s,l:n.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();const To=t=>{const e=m(()=>{const o=[];return t.round&&o.push("is-round"),["fn-tag",`fn-tag--${t.type}`,`fn-tag--${t.size}`,...o]});return{styleList:m(()=>{const{color:o}=t,r={};if(o){const s=new Fo(o);r["--fn-tag-bg-color"]=s.tint(70).toString(),r["--fn-tag-text-color"]=o,r["--fn-tag-border-color"]=s.tint(60).toString()}return r}),classList:e}},Ro=["left","right","top","bottom"],Bo={error:"material-symbols:error-outline",warning:"material-symbols:warning-outline",info:"material-symbols:info-outline",success:"mdi:success"},zo=t=>{const n=Ie().emit,o=B(!1);function r(){document.body.style.overflow="hidden",document.body.style.width="calc(100% - 6px)",o.value=!0,n(oe,!0)}function s(){document.body.style.overflow="",document.body.style.width="",o.value=!1,n(oe,!1)}return J(()=>t.modelValue,a=>{a?r():o.value&&(o.value=!1)}),re(()=>{t.modelValue&&r()}),{doOpen:r,doClose:s,visible:o}},Ao=t=>{const e=Q(t,"color","var(--md-sys-color-primary)");return m(()=>S`
      --fn-link-color: ${e.value};
      --fn-link__underline--status: ${t.underline==="none"||t.underline==="hover"?"none":"underline"};
      --fn-link__underline--hover: ${t.underline==="none"?"none":(t.underline==="hover","underline")};
    `)},Mo=["text","filled","outlined"],Ho=["rounded","fullRounded","square"],Io={small:32,medium:40,large:48},kt={variant:{type:String,values:Mo,default:"filled"},shape:{type:String,values:Ho,default:"rounded"},size:{type:String,values:ie,default:"medium"},color:{type:[String,Function],default:"primary"},disableRipple:{type:Boolean,default:!1},disableElevation:{type:Boolean,default:!1}},Oo=w({__name:"index",props:kt,setup(t){const e=t,n=O("button"),o=po(e,n),r=m(()=>{const{variant:s,shape:a,size:l}=e;return[n.b(),n.m(l),n.m(a),n.m(s)]});return(s,a)=>(f(),k(i(Ve),{class:x([...i(r),`title-${e.size}`,i(o)])},{default:$(()=>[T(s.$slots,"default",te(ne({size:i(Pe)[e.size]}))),e.disableRipple?H("",!0):(f(),k(i(Ee),{key:0,color:e.variant==="filled"?void 0:e.color},null,8,["color"]))]),_:3},8,["class"]))}}),St=R(Oo,"FnButton");St.name="FnButton";const Po=St,Eo={size:{type:String,values:ie,default:"medium"},color:{type:[String,Function],default:"primary"},cs:{type:[Object,String,Array]}},Lo=(t,e)=>m(()=>{const n=Q(t,"color","var(--md-sys-color-primary)"),o=Se(t,"color","var(--md-sys-color-primary-rgb)"),r=t.cs?S(t.cs):"";return se(S`
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
        &.${e.m(t.size)} .fn-icon {
          font-size: ${Pe[t.size]}px;
        }
        @media (any-hover: hover) {
          &:not([disabled]):hover {
            background-color: rgb(
              var(--fn-icon-button-color-rgb) /
                var(--md-sys-state-hover-state-layer-opacity)
            );
          }
        }
      `,r)}),Vo=Lo,Do=w({__name:"index",props:Eo,setup(t){const e=t,n=O("icon-button"),o=Vo(e,n);return(r,s)=>(f(),k(i(Ve),{class:x([i(n).b(),i(n).m(r.$props.size),i(o)])},{default:$(()=>[T(r.$slots,"default",te(ne({size:i(Pe)[r.$props.size],color:r.$props.color}))),F(i(Ee),{color:r.$props.color,center:""},null,8,["color"])]),_:3},8,["class"]))}}),De=R(Do,"FnIconButton");De.name="FnIconButton";const je=De,jo=["horizontal","vertical"],No={...kt,orientation:{type:String,values:jo,default:"horizontal"}},Uo=w({props:No,setup(t,{slots:e,attrs:n}){var b;const o=O("button-group"),{orientation:r,...s}=Oe(t),a=Q(t,"color","var(--md-sys-color-primary)"),l=Se(t,"color","var(--md-sys-color-primary-rgb)"),c=m(()=>S`
        --fn-button-group-color: ${a.value};
        --fn-button-group-color-rgb: ${l.value};
      `),p=m(()=>{const{variant:d,shape:y,size:_}=Ae(s);return se([o.b(),o.m(_),o.m(y),o.m(d),o.m(r.value),c.value])}),h=(((b=e==null?void 0:e.default)==null?void 0:b.call(e))??[]).map(d=>F(d,U(Ae(s),n,d.props??{}),null));return()=>F("div",{class:p.value},[h])}}),Ct=R(Uo,"FnButtonGroup");Ct.name="FnButtonGroup";const Wo=Ct,Go=["filled","outlined"],qo={title:{type:String,default:""},severity:{type:String,default:"info"},icon:{type:String,default:""},variant:{type:String,values:Go,default:""},color:{type:[String,Function],default:""}},Xo=w({__name:"index",props:qo,setup(t){const e=t,n=O("alert"),o=fo(e),r=B(!0),s=m(()=>e.icon===!1?!1:e.icon?e.icon:Bo[e.severity]),a=()=>{};return(l,c)=>{const p=W("fn-icon");return f(),k(he,{name:"alert-fade"},{default:$(()=>[L(u("div",{class:x([i(n).b(),i(n).m(e.variant),i(n).m(e.severity),i(o)])},[i(s)?(f(),v("div",{key:0,class:x([i(n).m("icon")])},[F(p,{icon:i(s)},null,8,["icon"])],2)):H("",!0),u("div",{class:x([i(n).m("message")])},[T(l.$slots,"default")],2),u("div",{class:x([i(n).m("action")]),onClick:a},[T(l.$slots,"action")],2)],2),[[N,r.value]])]),_:3})}}}),Ft=R(Xo,"FnAlert");Ft.name="FnAlert";const Zo=Ft,Qo={underline:{type:String,values:["none","hover","always"],default:"hover",required:!1},color:{type:String,required:!1},icon:{type:String,required:!1}},Ko={key:0},Jo=w({__name:"index",props:Qo,setup(t){const e=t,n=O("link"),o=Ao(e);return(r,s)=>{const a=W("fn-icon");return f(),v("a",{class:x([i(n).b(),i(o)])},[r.icon?(f(),v("span",Ko,[F(a,{icon:r.icon,style:V(r.$slots.default?"margin-right: 3px;":"")},null,8,["icon","style"])])):H("",!0),u("span",null,[T(r.$slots,"default")])],2)}}}),Tt=R(Jo,"FnLink");Tt.name="FnLink";const Yo=Tt,er=["id"],tr={class:"message-content"},nr=["innerHTML"],or=w({__name:"index",props:{message:null,duration:{default:2e3},id:null,showIcon:{type:Boolean,default:!0},offset:{default:20},closeBtn:{type:Boolean,default:!1},severity:{default:"info"}},emits:["destroy"],setup(t,{expose:e}){const n=t,o=B(!1),r=B(0),s=B();let a=fe;function l(){n.duration!==0&&({stop:a}=mt(()=>{o.value=!1,a=fe},n.duration))}re(()=>{l(),o.value=!0}),to(s,()=>{r.value=s.value.getBoundingClientRect().height});const c=m(()=>sr(n.id)+n.offset),p=m(()=>r.value+c.value);return e({bottom:p,lastOffset:c,visible:o}),(h,b)=>(f(),k(he,{name:"fn-message-fade",onAfterLeave:b[2]||(b[2]=d=>h.$emit("destroy"))},{default:$(()=>[L(u("div",{id:t.id,ref_key:"elRef",ref:s,class:x(["fn-message",[`${t.severity}-container`]]),style:V({top:`${i(c)}px`}),onMouseenter:b[1]||(b[1]=(...d)=>i(a)&&i(a)(...d)),onMouseleave:l},[u("div",tr,[n.showIcon?(f(),v("i",{key:0,innerHTML:i(cr)(n.severity)},null,8,nr)):H("",!0),X(" "+C(t.message),1)]),t.closeBtn?(f(),v("div",{key:0,class:"close-btn",onClick:b[0]||(b[0]=d=>o.value=!1)})):H("",!0)],46,er),[[N,o.value]])]),_:1}))}}),Z=qt([]);let it=1;function Rt(t){const e=document.createElement("div"),n=`fn-message-${it}`,o=we(or,{...t,id:n,onDestroy:()=>{rr(n),Ue(null,e)}},()=>t.message);Ue(o,e),document.body.appendChild(e.firstElementChild);const r={id:n,vnode:o,component:o.component,props:t,close:()=>{o.component.exposed.visible.value=!1}};return Z.push(r),it++,r}function rr(t){const e=Z.findIndex(n=>n.id===t);e!==-1&&(Z[e].close(),Z.splice(e,1))}const sr=t=>{const e=Z.findIndex(o=>o.id===t),n=Z[e-1];return n?n.component.exposed.bottom.value:0};function ar(t){return function(e,n){return Rt({...n,message:e})}}function ir(){for(const t of Z)t.close();Z.splice(0,Z.length)}const lr=new Map([["success",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
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
</svg>`]]);function cr(t){return lr.get(t)}const ur=["error","success","warning","info"],Ne=Rt;for(const t of ur)Ne[t]=ar();Ne.closeAll=ir;const dr=_n(Ne,"$message"),fr=dr,pr={modelValue:Boolean,title:String,width:{type:[String,Number]},top:{type:[String,Number]},showClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},center:{type:Boolean,default:!1}},hr={click:t=>t instanceof MouseEvent},mr=Symbol("dialogInjectionKey"),gr=(t,e)=>{const o=Ie().emit;let r="";const s=B(!1),a=m(()=>{const d={},y="--fn-dialog";return t.fullscreen&&(d[`${y}-width`]="100%"),t.width&&!t.fullscreen&&(d[`${y}-width`]=ze(t.width)),!t.width&&!t.fullscreen&&(d[`${y}-width`]="30%"),t.top&&!t.fullscreen&&(d[`${y}-top`]=ze(t.top)),!t.top&&!t.fullscreen&&(d[`${y}-top`]="30vh"),d});function l(){b()}function c(){function d(y){y||(s.value=!1)}t.beforeClose?t.beforeClose(d):l()}function p(){t.closeOnClickModal&&c()}function h(){s.value=!0}function b(){s.value=!1,o(oe,!1)}return J(()=>t.modelValue,d=>{d?h():s.value&&l()}),J(()=>t.fullscreen,d=>{e.value&&(d?(r=e.value.style.transform,e.value.style.transform=""):e.value.style.transform=r)}),re(()=>{t.modelValue&&h()}),{handleClose:c,onModalClick:p,close:l,doClose:b,overlayDialogStyle:a,visible:s}},br=["onClick"],vr={class:"header"},yr={class:"dialog__content"},_r={class:"footer"},xr=w({__name:"index",props:pr,emits:hr,setup(t,{emit:e}){const n=t,{showClose:o}=Oe(n),r=B(),s=B(null),a=B(),{visible:l,handleClose:c,overlayDialogStyle:p}=gr(n,r);He(mr,{dialogRef:a});function h(b){if(!n.closeOnClickModal)return;const d=s.value;d!=null&&d.contains(b.target)||c(),e("click",b)}return(b,d)=>{const y=W("fn-icon");return f(),k(ut,{to:"body"},[F(he,{name:"dialog-fade"},{default:$(()=>[L(u("div",{ref_key:"containerRef",ref:r,class:"dialog",role:"dialog",onClick:Xt(h,["stop"])},[u("div",{ref_key:"targetDivRef",ref:s,class:x(["fn-overlay",{"is-align-center":n.center&&!n.fullscreen,"is-fullscreen":n.fullscreen}]),style:V(i(p))},[L(u("div",vr,[u("span",null,C(n.title),1),i(o)?H("",!0):(f(),v("span",{key:0,onClick:d[0]||(d[0]=(..._)=>i(c)&&i(c)(..._))},[F(y,{icon:"material-symbols:close"})]))],512),[[N,n.title]]),u("div",yr,[T(b.$slots,"default")]),u("div",_r,[T(b.$slots,"footer")])],6)],8,br),[[N,i(l)]])]),_:3})])}}}),Bt=R(xr,"FnDialog");Bt.name="FnDialog";const wr=Bt,$r=be({modelValue:{type:[String,Number,Boolean,Array,Object],required:!0},type:{type:String,default:""},cs:{type:[Object,String,Array]},internal:{type:Boolean,default:!1}}),kr=t=>m(()=>{const e=ft(),n=S([{background:"none",color:"inherit"},e.value.typography.body.large]),o=t.internal?S({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:"0px",left:"0px",margin:"0px",padding:"0px",zIndex:1}):"",r=t.cs?S(t.cs):"";return se(n,{[o]:t.internal},r)}),Sr=kr,Cr=["type"],Fr=w({__name:"index",props:$r,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=O("input-base"),r=Sr(n),s=m({get(){return n.modelValue},set(a){e("update:modelValue",a)}});return(a,l)=>L((f(),v("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>me(s)?s.value=c:null),type:a.$props.type,class:x([i(o).b(),i(r)])},null,10,Cr)),[[Zt,i(s)]])}}),zt=R(Fr,"FnInputBase");zt.name="FnInputBase";const ye=zt,Tr={name:"RadioButtonCheckedFilled",components:{FnSvgIcon:ve}},Rr=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})],-1);function Br(t,e,n,o,r,s){const a=W("fn-svg-icon");return f(),k(a,{cs:"fill: currentcolor;"},{default:$(()=>[Rr]),_:1})}const zr=ge(Tr,[["render",Br]]),Ar={name:"RadioButtonUncheckedFilled",components:{FnSvgIcon:ve}},Mr=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})],-1);function Hr(t,e,n,o,r,s){const a=W("fn-svg-icon");return f(),k(a,{cs:"fill: currentcolor;"},{default:$(()=>[Mr]),_:1})}const Ir=ge(Ar,[["render",Hr]]),Or={modelValue:{type:[String,Number,Boolean],required:!0},size:{type:String,value:ie,default:"medium"},color:{type:[String,Function],default:"primary"}},Pr=w({__name:"index",props:Or,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=O("radio"),r=m({get(){return n.modelValue},set(s){e(oe,s)}});return(s,a)=>(f(),k(i(De),U({component:"span"},{color:s.$props.color,size:s.$props.size,class:[i(o).b()]},{class:[i(o).b(),i(o).m(n.size)]}),{default:$(()=>[i(r)===s.$attrs.value?(f(),k(zr,{key:0})):(f(),k(Ir,{key:1})),F(i(ye),U(s.$attrs,{modelValue:i(r),"onUpdate:modelValue":a[0]||(a[0]=l=>me(r)?r.value=l:null),class:[i(o).e("input")],type:"radio",internal:""}),null,16,["modelValue","class"])]),_:1},16,["class"]))}}),At=R(Pr,"FnRadio");At.name="FnRadio";const Er=At,Lr={title:{type:String,default:"card-header"},border:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},separate:{type:Boolean,default:!1},width:{type:Number,default:300},background:{type:String,default:""}},Vr={class:"fn-card--title"},Dr={class:"fn-card--content"},jr=w({__name:"index",props:Lr,setup(t){const e=t,{border:n,hover:o}=e,r=m(()=>[{"has-border":n,"has-hover":o}]);return(s,a)=>(f(),v("div",{class:x(["fn-card",i(r)]),style:V({backgroundColor:e.background,width:`${e.width}px`})},[u("div",Vr,[u("span",null,[T(s.$slots,"header",{},()=>[X(C(s.title),1)])])]),u("div",Dr,[T(s.$slots,"default",{},()=>[X("content")])])],6))}}),Mt=R(jr,"FnCard");Mt.name="FnCard";const Nr=Mt,Ur={name:"CheckFilled",components:{FnSvgIcon:ve}},Wr=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})],-1);function Gr(t,e,n,o,r,s){const a=W("fn-svg-icon");return f(),k(a,{cs:"fill: currentcolor;"},{default:$(()=>[Wr]),_:1})}const qr=ge(Ur,[["render",Gr]]),Xr={small:28,medium:32,large:36},Zr=be({modelValue:{type:Boolean,default:""},color:{type:[String,Function],default:"primary"},size:{type:String,value:ie,default:"medium"},cs:{type:[Object,String,Array]},disabledIcon:{type:Boolean,default:!1}}),Qr=(t,e)=>{const n=Q(t,"color","var(--md-sys-color-primary)"),o=Se(t,"color","var(--md-sys-color-primary-rgb)"),r=m(()=>ue.includes(t.color)?`var(--md-sys-color-on-${t.color})`:"var(--md-sys-color-on-primary)"),s=S`
    --fn-switch-color: ${n.value};
    --fn-switch-color-rgb: ${o.value};
    --fn-switch-on-color: ${r.value};
    --fn-switch-height: ${Xr[t.size]}px;
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
      &:not([disabled]).${e==null?void 0:e.m("checked")}:hover {
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

    &.${e==null?void 0:e.m("checked")} {
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

      &.${e==null?void 0:e.m("checked")} {
        background-color: var(--fn-sys-color-disabled-level-1);
        & .fn-switch__thumb--icon-wrapper {
          background-color: var(--md-sys-color-surface);
        }
      }
    }
  `;return m(()=>{const a=t.cs?S(t.cs):"";return se(s,a)})},Kr=Qr,Jr=w({__name:"index",props:Zr,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=O("switch"),r=Kr(n,o),s=m({get(){return n.modelValue},set(a){e(oe,a)}});return(a,l)=>(f(),v("span",{class:x([i(o).b(),i(s)?i(o).m("checked"):i(o).m("unchecked"),i(r)])},[F(i(je),{class:x([i(o).e("thumb")]),color:n.color,disabled:a.$attrs.disabled,onClick:l[0]||(l[0]=c=>s.value=!i(s))},{default:$(()=>[u("span",{class:x([i(o).em("thumb","icon-wrapper")])},[T(a.$slots,"default",te(ne({size:16})),()=>[n.disabledIcon?H("",!0):(f(),k(qr,{key:0}))])],2)]),_:3},8,["class","color","disabled"]),F(i(ye),U(a.$attrs,{modelValue:i(s),"onUpdate:modelValue":l[1]||(l[1]=c=>me(s)?s.value=c:null),class:[i(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])],2))}}),Ht=R(Jr,"FnSwitch");Ht.name="FnSwitch";const Yr=Ht,es={percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},type:{type:String,default:"line"},height:{type:String,default:"0.5rem"},intermediate:{type:Boolean,default:!1},duration:{type:Number,default:2},width:{type:Number,default:120},strokeWidth:{type:Number,default:6},textInside:{type:Boolean,default:!1},background:{type:String,default:"#f5f5f6"},barColor:{type:String,default:"#3894ff"},color:{type:String,default:"#4987f8"},status:{type:String,default:""},striped:{type:Boolean,default:!1},stripedFlow:{type:Boolean,default:!1}},ts={style:{"margin-left":"5px"}},ns=["height"],os=["r","stroke","stroke-width"],rs=["r","stroke","stroke-width","stroke-dashoffset"],ss={key:0},as={key:1},is=w({__name:"index",props:es,setup(t){const e=t,n=m(()=>typeof e.percentage!="number"?0:e.percentage>100?100:e.percentage<0?0:e.percentage),o=e.width||120,r=m(()=>(o-e.strokeWidth)/2),s="fn-progress",a=o/2,l=o/2,c=2*Math.PI*r.value,p=m(()=>{if(typeof e.percentage!="number")return 0;{const _=e.percentage>100?100:e.percentage<0?0:e.percentage;return(1-Number(_)/100)*c}}),h=m(()=>e.intermediate?"bar-intermediate":""),b=m(()=>{let _="";return e.striped&&(_+="fn-progress-bar-striped ",e.stripedFlow&&(_+="fn-progress-bar-is-flow")),_}),{styleList:d,styleListCircle:y}=ho(e);return(_,I)=>(f(),v(ee,null,[e.type==="line"?(f(),v("div",{key:0,class:x(`${s} ${s}-line`),style:V(i(d))},[u("div",{class:x(`${s}-bar-out`)},[u("div",{class:x([`${s}-bar ${i(h)} ${i(b)}`])},null,2),L(u("div",{class:x(`${s}-text-inner`)},C(i(n))+"% ",3),[[N,e.textInside]])],2),L(u("div",{class:x(`${s}-text`)},[L(u("span",{class:x(`${s}-text-out`)},C(i(n))+"% ",3),[[N,!e.status&&!e.intermediate]]),L(u("span",ts,null,512),[[N,e.status]])],2),[[N,!e.textInside]])],6)):H("",!0),e.type==="circle"?(f(),v("div",{key:1,class:"fn-progress circle-progress",style:V(i(y))},[u("div",{class:"circle-content",style:V(`width:${i(o)}px;height: ${i(o)}px;`)},[(f(),v("svg",{width:"circleSize",height:i(o),class:"circle"},[u("circle",{r:i(r),cx:a,cy:l,fill:"transparent",stroke:e.background,"stroke-width":e.strokeWidth},null,8,os),u("circle",{r:i(r),cx:a,cy:l,fill:"transparent",stroke:e.color,"stroke-width":e.strokeWidth,"stroke-linecap":"round","stroke-dasharray":c,"stroke-dashoffset":i(p)},null,8,rs)],8,ns)),u("span",{class:"count-num",style:V([{"font-size":`${i(o)*.3}px`}])},[_.$slots.default?(f(),v("span",ss,[T(_.$slots,"default")])):(f(),v("span",as,C(e.percentage)+"% ",1))],4)],4)],4)):H("",!0)],64))}}),It=R(is,"FnProgress");It.name="FnProgress";const ls=It,cs=be({...zn,max:{type:[String,Number]},avatarBorder:{type:String,default:"var(--md-sys-color-background)"}}),us=w({props:cs,setup(t,{slots:e,attrs:n}){var b;const{max:o,avatarBorder:r,...s}=Oe(t),a=O("avatar-group"),l=((b=e==null?void 0:e.default)==null?void 0:b.call(e))??[];let c=l;if(o.value&&+o.value<l.length){const d=l.length-+o.value;c=[...l.slice(0,+o.value),F(ht,null,{default:()=>[X("+"),d]})]}const p=m(()=>c.map(d=>F(d,U(Ae(s),d.props??{}),null))),h=m(()=>{var y;const d=((y=n==null?void 0:n.class)==null?void 0:y.split(" "))??[];return d.push(a.b()),d.push(S`
        & .fn-avatar {
          border: 2px solid ${r.value};
        }
      `),se(d)});return()=>F("div",U(n,{class:h.value}),[p.value.reverse()])}}),Ot=R(us,"FnAvatarGroup");Ot.name="FnAvatarGroup";const ds=Ot,fs={type:{type:String,default:""},closable:{type:Boolean,default:!1},color:{type:String,default:""},size:{type:String,default:""},round:{type:Boolean,default:!1}},ps=w({__name:"index",props:fs,emits:["click","close"],setup(t,{emit:e}){const n=t,{classList:o,styleList:r}=To(n),s=l=>{e("close",l)},a=l=>{e("click",l)};return(l,c)=>(f(),v("span",{class:x(i(o)),style:V(i(r)),onClick:a},[u("span",null,[T(l.$slots,"default")]),l.closable?(f(),v("div",{key:0,class:"close-btn",onClick:s},"×")):H("",!0)],6))}}),Pt=R(ps,"FnTag");Pt.name="FnTag";const hs=Pt,ms={modelValue:{type:[Boolean,Array]},color:{type:[String,Function],default:"primary"},size:{type:String,value:ie,default:"medium"}},gs={name:"CheckBoxFilled",components:{FnSvgIcon:ve}},bs=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1);function vs(t,e,n,o,r,s){const a=W("fn-svg-icon");return f(),k(a,{cs:"fill: currentcolor;"},{default:$(()=>[bs]),_:1})}const ys=ge(gs,[["render",vs]]),_s={name:"CheckBoxOutlineBlankFilled",components:{FnSvgIcon:ve}},xs=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})],-1);function ws(t,e,n,o,r,s){const a=W("fn-svg-icon");return f(),k(a,{cs:"fill: currentcolor;"},{default:$(()=>[xs]),_:1})}const $s=ge(_s,[["render",ws]]),ks=w({__name:"index",props:ms,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=O("checkbox"),r=dt(),s=m({get(){return n.modelValue},set(l){e(oe,l)}}),a=m(()=>typeof s.value=="boolean"?s.value:s.value.includes(r.value));return(l,c)=>(f(),k(i(je),U({component:"span"},{color:l.$props.color,size:l.$props.size,class:[i(o).b(),i(o).m(n.size)]}),{default:$(p=>[T(l.$slots,"default",te(ne({checked:i(s),size:p.size,class:["fn-icon",i(o).e("icon")]})),()=>[i(a)?(f(),k(ys,{key:0})):(f(),k($s,{key:1}))]),F(i(ye),U(l.$attrs,{modelValue:i(s),"onUpdate:modelValue":c[0]||(c[0]=h=>me(s)?s.value=h:null),class:[i(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])]),_:3},16))}}),Et=R(ks,"FnCheckbox");Et.name="FnCheckbox";const Ss=Et,Lt=Symbol("breadcrumbKey"),Cs={separator:{type:String,default:"/"}},Fs=w({__name:"index",props:Cs,setup(t){const e=t,n=B();return He(Lt,e),re(()=>{const o=n.value.querySelectorAll(".fn-breadcrumb-item");if(o.length){const r=o[o.length-1].lastElementChild;r.style.display="none"}}),(o,r)=>(f(),v("div",{ref_key:"breadcrumb",ref:n,class:"fn-breadcrumb"},[T(o.$slots,"default")],512))}}),Vt=R(Fs,"FnBreadcrumb");Vt.name="FnBreadcrumb";const Ts=Vt,Rs={to:{type:xn([String,Object]),default:""},replace:{type:Boolean,default:!1}},Bs={class:"fn-breadcrumb-item"},zs={class:"fn-breadcrumb-separator"},As=w({__name:"index",props:Rs,setup(t){const e=t,n=Ie(),o=Qt(Lt,void 0),r=n.appContext.config.globalProperties.$router,s=()=>{!e.to||!r||(e.replace?r.replace(e.to):r.push(e.to))};return(a,l)=>{var c;return f(),v("span",Bs,[u("span",{ref:"link",class:x(["fn-breadcrumb-inner",[e.to?"fn-breadcrumb-link":""]]),onClick:s},[T(a.$slots,"default")],2),u("span",zs,C((c=i(o))==null?void 0:c.separator),1)])}}}),Dt=R(As,"FnBreadcrumbItem");Dt.name="FnBreadcrumbItem";const Ms=Dt,Hs=be({modelValue:Boolean,title:String,direction:{type:String,values:["left","right","top","bottom"],default:"left"}}),Is={class:"drawer-title"},Os={class:"drawer-body"},Ps=w({__name:"index",props:Hs,setup(t){const e=t,{visible:n,doClose:o}=zo(e),r=B(null),s=O("drawer"),a=m(()=>`${s.b()}--overlay`),l=m(()=>{const{direction:p}=e,h=[s.b()];return Kt(p)&&h.push(s.m(p)),h}),c=p=>{const h=r.value;h!=null&&h.contains(p.target)||o()};return(p,h)=>(f(),k(ut,{to:"body"},[i(n)?(f(),v("div",{key:0,ref:"elRef",class:x(i(a)),onClick:c},null,2)):H("",!0),F(he,{name:`slide-fade--${e.direction}`},{default:$(()=>[L(u("div",{ref_key:"targetDivRef",ref:r,class:x(i(l))},[u("header",null,[u("span",Is,C(e.title),1),u("span",{class:"drawer-close",onClick:h[0]||(h[0]=(...b)=>i(o)&&i(o)(...b))})]),u("div",Os,[T(p.$slots,"default")])],2),[[N,i(n)]])]),_:3},8,["name"])]))}}),jt=R(Ps,"FnDrawer");jt.name="FnDrawer";const Es=jt,Ls={label:{type:String,required:!0},control:{required:!0},labelPlacement:{type:String,values:Ro,default:"right"}},Vs=w({inheritAttrs:!1}),Ds=w({...Vs,__name:"index",props:Ls,setup(t){const e=t,n=O("form-label");return(o,r)=>(f(),v("label",{class:x([i(n).b(),i(n).m(e.labelPlacement)])},[(f(),k(ct(e.control),te(ne(o.$attrs)),null,16)),F(i(de),{variant:"body.large",component:"span",disabled:o.$attrs.disabled},{default:$(()=>[X(C(e.label),1)]),_:1},8,["disabled"])],2))}}),Nt=R(Ds,"FnFormLabel");Nt.name="FnFormLabel";const js=Nt,Ns=["outlined","filled","standard"],Us=be({modelValue:{type:String,required:!0,default:""},variant:{type:String,values:Ns,default:"outlined"},label:{type:String},color:{type:[String,Function],default:"primary"},size:{type:String,values:ie,default:"large"},cs:{type:[String,Array,Object]},error:{type:Boolean,default:!1},supportingText:{type:String}}),Ws=t=>{const e=S`
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
  `,a=S`
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
  `;return m(()=>{const p=t.error?Q(t,null,"var(--md-sys-color-error)"):Q(t,"color","var(--md-sys-color-primary)"),h=t.cs?S(t.cs):"";return se(S({"--fn-text-field-color":p.value}),e,{[n]:t.variant==="outlined"},{[o]:t.variant==="filled"},{[r]:t.variant==="standard"},{[s]:t.size==="small"},{[a]:t.size==="medium"},{[l]:t.size==="large"},{[c]:t.error},h)})},Gs=Ws,qs=w({__name:"index",props:Us,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=dt(),r=Jt(),s=O("text-field"),a=Gs(n),l=m({get(){return n.modelValue},set(d){e(oe,d)}}),c=()=>(Math.random()+1).toString(36).substring(7),p=o!=null&&o.id?o.id:`text-field-${c()}`,h=m(()=>(n==null?void 0:n.label)??""),b=m(()=>{var y;const d=(y=r==null?void 0:r.startAdornment)==null?void 0:y.call(r);return!En(n.modelValue)||!!d});return(d,y)=>(f(),v("div",{class:x([i(s).b(),i(s).m(n.variant),i(s).m(n.size),i(b)?i(s).m("content-within"):"",i(a)])},[n!=null&&n.label?(f(),k(i(de),{key:0,id:i(p),component:"label",class:x([i(s).e("label")]),color:"rgb(var(--md-sys-color-on-surface-rgb) / 0.6);","no-warp":""},{default:$(()=>[X(C(i(h)),1)]),_:1},8,["id","class"])):H("",!0),u("div",{class:x([i(s).m("input-wrapper")])},[T(d.$slots,"startAdornment",te(ne({class:[i(s).m("start-adornment")]}))),F(i(ye),U({id:i(p)},d.$attrs,{modelValue:i(l),"onUpdate:modelValue":y[0]||(y[0]=_=>me(l)?l.value=_:null),class:[i(s).e("input")]}),null,16,["id","modelValue","class"]),T(d.$slots,"endAdornment",te(ne({class:[i(s).m("end-adornment")]}))),d.$props.variant==="outlined"&&(n!=null&&n.label)?(f(),v("fieldset",{key:0,class:x([i(s).m("border")])},[F(i(de),{component:"legend","no-warp":""},{default:$(()=>[X(C(i(h)),1)]),_:1})],2)):(f(),v("span",{key:1,class:x([i(s).m("border")])},null,2))],2),n!=null&&n.supportingText?(f(),k(i(de),{key:1,class:x([i(s).m("supporting-text")]),variant:"body.small","no-warp":""},{default:$(()=>[X(C(n.supportingText),1)]),_:1},8,["class"])):H("",!0)],2))}}),Ut=R(qs,"FnTextField");Ut.name="FnTextField";const Xs=Ut,Zs=[Ve,Po,je,Wo,Zo,Yo,fr,wr,ye,Er,Yr,An,ls,Nr,hs,ht,ds,Ss,Ts,Ms,Ee,Es,js,de,Ln,Xs,Vn],Qs={install(t){Zs.forEach(e=>{t.component(e.name,e)})}},Ks=Qs;const Js={github:{type:String,default:"https://github.com/tsinghua-lau/fusion-ui"},codeSandBox:{type:String,default:"https://codesandbox.io/"},highlightedCode:{type:String,default:""},code:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},lang:{type:String,default:"vue"},expand:{type:Boolean,default:!1}},Ys={class:"o-demo_wrapper vp-raw bg"},ea={class:"relative"},ta={class:"o-demo_actions"},na=["href"],oa=u("div",{class:"o-demo_action_icon i-carbon:chemistry"},null,-1),ra=u("div",{class:"o-demo_tooltip","group-hover:opacity-100":""}," Open on Playground(WIP) ",-1),sa=[oa,ra],aa=["href"],ia=u("div",{class:"o-demo_action_icon i-carbon-logo-github"},null,-1),la=u("div",{class:"o-demo_tooltip","group-hover:opacity-100":""}," Edit on GitHub ",-1),ca=[ia,la],ua=u("div",{class:"o-demo_action_icon i-carbon:copy"},null,-1),da={class:"o-demo_tooltip","group-hover:opacity-100":""},fa=u("div",{class:"o-demo_action_icon i-carbon:fit-to-width"},null,-1),pa={class:"o-demo_tooltip","group-hover:opacity-100":""},ha=["innerHTML"],ma=w({__name:"index",props:Js,setup(t){const e=t,n=m(()=>decodeURIComponent(e.highlightedCode)),{copy:o,copied:r}=Kn({source:decodeURIComponent(e.code)}),[s,a]=Pn();return(l,c)=>{const p=W("ClientOnly");return f(),k(p,null,{default:$(()=>[u("div",U(l.$attrs,{class:"mt-6"}),[u("div",Ys,[T(l.$slots,"default")]),u("div",ea,[u("div",ta,[u("a",{class:"o-demo_action_item",group:"",href:l.codeSandBox,target:"_blank"},sa,8,na),u("a",{class:"o-demo_action_item",group:"",href:l.github,target:"_blank"},ca,8,aa),u("a",{class:"o-demo_action_item",group:"",onClick:c[0]||(c[0]=h=>i(o)())},[ua,u("div",da,C(i(r)?"Copied":"Copy code"),1)]),u("a",{class:"o-demo_action_item",group:"",onClick:c[1]||(c[1]=h=>i(a)())},[fa,u("div",pa,C(i(s)?"Hidden code":"Show code"),1)])]),L(u("div",{class:x(`language-${l.lang} extra-class`),innerHTML:i(n)},null,10,ha),[[N,i(s)]])])],16)]),_:3})}}}),ga=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"类型",scope:{customRender:"type"},width:"240"},{label:"默认值",scope:{customRender:"default"}}],ba=[{label:"name",scope:{customRender:"name"},width:"140"},{label:"description",scope:{customRender:"remark"}},{label:"type",scope:{customRender:"type"},width:"240"},{label:"default",scope:{customRender:"default"}}],va=[{label:"事件名",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"类型",scope:{customRender:"type"}}],ya=[{label:"Name",scope:{customRender:"name"},width:"140"},{label:"Description",scope:{customRender:"remark"}},{label:"Type",scope:{customRender:"type"}}],_a=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"参数",scope:{customRender:"params"}},{label:"返回值",scope:{customRender:"returns"}}],xa=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}}],wa=[{label:"name",scope:{customRender:"name"},width:"140"},{label:"description",scope:{customRender:"remark"}}],$a={propsZh:ga,propsEn:ba,eventsZh:va,eventsEn:ya,methods:_a,slotsZh:xa,slotsEn:wa},ka={mounted(t,e){let n=!1;function o(r){if(t.contains(r.target))return!1;!n&&e.value&&typeof e.value=="function"&&(e.value(r),n=!0)}t.__click_outside__=o,document.addEventListener("click",o)},beforeUnmount(t){document.removeEventListener("click",t.__click_outside__),delete t.__click_outside__}},Sa={class:"table-block"},Ca={class:"name-area"},Fa={class:"name-area-inner"},Ta={class:"remark-area"},Ra={class:"remark-area-inner"},Ba={class:"default-area"},za={class:"default-area-inner"},Aa={class:"params-area"},Ma={class:"params-area-inner"},Ha={class:"returns-area"},Ia={class:"returns-area-inner"},Oa={class:"type-area"},Pa={key:1,class:"type-area-inner"},Ea=["onClick"],La={key:0,class:"optional-area"},Va=w({__name:"index",props:{type:{type:String,default:"props"},src:{type:String,default:""},data:{type:Array,default:()=>[]}},setup(t){const e=t,n=B([]),o=s=>{for(let a=0;a<n.value.length;a++)n.value[a].name!==s.name&&(n.value[a].showTip=!1);setTimeout(()=>{s.showTip=!s.showTip},0)},r=s=>{s.showTip=!1};return J(()=>e.data,()=>{n.value=e.data},{immediate:!0,deep:!0}),(s,a)=>{const l=W("bp-table");return f(),v("div",Sa,[F(l,{cols:i($a)[t.type],"data-source":n.value},{name:$(({row:c})=>[u("div",Ca,[u("span",Fa,C(c.name||"-"),1)])]),remark:$(({row:c})=>[u("div",Ta,[u("span",Ra,C(c.remark||"-"),1)])]),default:$(({row:c})=>[u("div",Ba,[u("span",za,C(c.default||"-"),1)])]),params:$(({row:c})=>[u("div",Aa,[u("span",Ma,C(c.params||"-"),1)])]),returns:$(({row:c})=>[u("div",Ha,[u("span",Ia,C(c.returns||"-"),1)])]),type:$(({row:c})=>[L((f(),v("div",Oa,[typeof c.type=="object"?(f(!0),v(ee,{key:0},pe(c.type,(p,h)=>(f(),v("span",{key:h,class:"type-area-inner"},C(p),1))),128)):(f(),v("span",Pa,C(c.type||"-"),1)),c.type==="Enum"||c.type.includes("Enum")?(f(),v("span",{key:2,class:x(["ri-error-warning-fill",[{active:c.showTip}]]),onClick:p=>o(c)},"!",10,Ea)):H("",!0),F(he,null,{default:$(()=>[c.showTip?(f(),v("div",La,[u("span",null,C(c.optional.join(" | ")),1)])):H("",!0)]),_:2},1024)])),[[i(ka),()=>r(c)]])]),_:1},8,["cols","data-source"])])}}}),Da={class:"content"},ja={class:"content-container"},Na={class:"main"},Ua=u("div",{class:"vp-doc",flex:"","flex-col":"","items-center":"","mt-10":""},[u("h2",{id:"meet-the-team",op50:"","font-normal":"",p:"t-10 b-2"}," 贡献者 ")],-1),Wa={"p-10":""},lt=w({__name:"index",setup(t){const e=[{avatar:"https://www.github.com/tsinghua-lau.png",name:"tsinghua-lau",title:"ikun",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/tsinghua-lau"}]},{avatar:"https://www.github.com/sxiong5.png",name:"sxiong5",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/sxiong5"}]},{avatar:"https://www.github.com/windlil.png",name:"windlil",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/windlil"}]},{avatar:"https://www.github.com/kit-AB.png",name:"kit-AB",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/kit-AB"}]},{avatar:"https://www.github.com/Losonn.png",name:"Losonn",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/Losonn"}]},{avatar:"https://www.github.com/li-junpeng.png",name:"li-junpeng",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/li-junpeng"}]}];return(n,o)=>(f(),v("div",Da,[u("div",ja,[u("main",Na,[Ua,u("div",Wa,[F(i(yn),{size:"small",members:e})])])])]))}}),Ga=(t,e)=>{let n,o;return e=e||200,function(){const r=arguments,s=Date.now();n&&s-n<e?(clearTimeout(o),o=setTimeout(function(){n=s,t.apply(this,r)},e)):(n=s,t.apply(this,r))}},qa=function(t,e,n,o=!1){t&&e&&n&&t.addEventListener(e,n,o)},Xa=function(t,e,n,o=!1){t&&e&&n&&t.removeEventListener(e,n,o)},Za=t=>{const e=B(null),n=B([]),o=B("");let r=0,s=0,a=[],l=[];const c=80,p=()=>{const d=e.value,{cols:y}=t;if(!(y.length===0||y.length>99)){s=0,r=y.length,a=[];for(let _=0;_<y.length;_++){const{width:I,minWidth:P}=y[_];I&&(s+=Number(I),r--),P&&a.push(P)}o.value=d&&d.offsetWidth-6,l=h()||[],n.value=[];for(let _=0;_<y.length;_++)n.value.push({...t.cols[_],width:l[_]});return n.value}};function h(){const{cols:d}=t,y=[];let _=b();a.length&&a.forEach((I,P)=>{_>I&&(s+=I,r--,a.splice(P,1),_=b())});for(let I=0;I<d.length;I++){const{width:P,minWidth:le}=d[I];if(P){y.push(P);continue}if(le&&le>_){y.push(le);continue}y.push(_<c?c:_)}return y}function b(){const d=(o.value-s)/r;return Number(d).toFixed(2)}return J(()=>t.cols,()=>{p()}),re(()=>{Yt(()=>{p(),qa(window,"resize",Ga(()=>p(),400))})}),en(()=>Xa(window,"resize",()=>p())),{initColumns:p,bpTable:e,_table_width:o,columns:n}},Qa=["name","width"],Wt=w({__name:"col-group",props:{cols:{type:Array,default:()=>[]}},setup(t){return(e,n)=>(f(),v("colgroup",null,[(f(!0),v(ee,null,pe(t.cols,(o,r)=>(f(),v("col",{key:`bp-table-tr-${r}`,name:`bp_table_tr_${r}`,width:`${o.width}px`},null,8,Qa))),128))]))}}),Ka={class:"bp-table-header-thead"},Ja=w({__name:"table-header",props:{headerList:{type:Array,default:()=>[]},width:{type:[String,Number],default:""}},setup(t){const e=n=>[`text-${n.headerAlign||n.align||"left"}`];return(n,o)=>(f(),v("table",{class:"bp-table-header",style:V(`width:${t.width}px`)},[F(Wt,{cols:t.headerList},null,8,["cols"]),u("thead",Ka,[u("tr",null,[(f(!0),v(ee,null,pe(t.headerList,(r,s)=>(f(),v("th",{key:`bp-table-thead-${s}`,class:x(e(r))},C(r.label),3))),128))])])],4))}}),Ya={class:"bp-table-empty-tr"},ei=["colspan"],ti=w({__name:"empty",props:{colspan:{type:Number,default:0}},setup(t){return(e,n)=>(f(),v("tr",Ya,[u("td",{colspan:t.colspan}," 暂无数据 ",8,ei)]))}}),ni=u("div",{class:"scrollbar"},null,-1),oi={class:"bp-table-body-tbody"},ri=w({__name:"table",props:{cols:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]},height:{type:String,default:""},loading:{type:Boolean,default:!1},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1}},setup(t){const e=t,{bpTable:n,columns:o,_table_width:r}=Za(e),s=m(()=>e.dataSource.length===0),a=m(()=>e.border),l=m(()=>e.stripe),c=m(()=>e.height),p=m(()=>e.height?`width:${r.value}px;max-height:${e.height}px;height:${e.height}px;overflow-y:auto`:`width:${r.value}px`),h=m(()=>["bp-table-inner",{"bp-table-border":a.value},{"bp-table-stripe":l.value},{"bp-table-fixed-header":c.value}]),b=d=>[`text-${d.align||"left"}`];return(d,y)=>(f(),v("div",{ref_key:"bpTable",ref:n,class:"bp-table"},[u("div",{class:x(i(h))},[F(Ja,{"header-list":i(o),width:i(r)},null,8,["header-list","width"]),u("div",{class:"bp-table-body-area",style:V(i(p))},[ni,u("table",{class:"bp-table-body",style:V(`width:${i(r)}px`)},[F(Wt,{cols:i(o)},null,8,["cols"]),u("tbody",oi,[i(s)?(f(),k(ti,{key:0,colspan:i(o).length},null,8,["colspan"])):(f(!0),v(ee,{key:1},pe(t.dataSource,(_,I)=>(f(),v("tr",{key:`bp-table-tbody-tr-${I}`},[(f(!0),v(ee,null,pe(i(o),(P,le)=>(f(),v("td",{key:`bp-table-tbody-td-${I}-${le}`,class:x(b(P))},[P.scope?T(d.$slots,P.scope.customRender,{key:1,row:_,index:I,data:_[P.key]}):(f(),v(ee,{key:0},[X(C(_[P.key]),1)],64))],2))),128))]))),128))])],4)],4)],2)],512))}});const si={...We,setup(){re(()=>{const t=Xn();window.theme=tn(t.value);const e=document.documentElement,n=()=>{e.classList.contains("dark")?(e.setAttribute("data-theme","dark"),t.value.mode="dark"):(e.removeAttribute("data-theme"),t.value.mode="light")};n();const o=new MutationObserver(()=>{n(),o.takeRecords()});o.observe(e,{attributes:!0,childList:!1,subtree:!1})})},enhanceApp({app:t}){t.use(Ks),t.component("Demo",ma),t.component("BpTable",ri),t.component("TableBlock",Va),t.component("TeamMember",lt)},Layout(){return we(We.Layout,null,{"home-features-after":()=>we(lt)})}};function Gt(t){if(t.extends){const e=Gt(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const ae=Gt(si),ai=w({name:"VitePressApp",setup(){const{site:t}=on();return re(()=>{rn(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),sn(),an(),ln(),ae.setup&&ae.setup(),()=>we(ae.Layout)}});async function ii(){const t=ci(),e=li();e.provide(cn,t);const n=un(t.route);return e.provide(dn,n),e.component("Content",fn),e.component("ClientOnly",pn),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),ae.enhanceApp&&await ae.enhanceApp({app:e,router:t,siteData:hn}),{app:e,router:t,data:n}}function li(){return mn(ai)}function ci(){let t=Re,e;return gn(n=>{let o=bn(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),Re&&(t=!1),vn(()=>import(o),[])},ae.NotFound)}Re&&ii().then(({app:t,router:e,data:n})=>{e.go().then(()=>{nn(e.route,n.site),t.mount("#app")})});export{ii as createApp};
