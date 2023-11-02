import{e as m,U as Ie,f as z,w as J,b as i,d as w,o as f,y as S,z as $,r as T,n as x,I as ut,h as se,g as He,a3 as ne,a4 as oe,A as I,D as F,ap as Oe,C as j,B as G,a6 as L,x as u,c as v,a7 as U,T as ge,X as V,a as Z,t as C,ak as qt,al as xe,am as We,a0 as Xt,aq as dt,aj as Zt,a5 as be,_ as ve,a8 as Qt,F as te,S as Kt,a9 as Jt,aa as Yt,a2 as en,M as me,i as tn,ar as nn,K as Re,as as on,u as rn,l as sn,at as an,au as ln,av as cn,aw as un,ax as dn,ay as fn,az as pn,aA as hn,aB as mn,aC as gn,aD as bn,aE as vn,H as yn}from"./chunks/framework.b3e6ced0.js";import{V as _n,t as Ge}from"./chunks/theme.7b7190bb.js";import{d as ft,e as xn,n as fe,t as wn,r as pt,f as $n,g as ht,h as mt,u as H,w as R,a as W,i as kn,c as ie,j as Pe,k as Sn,b as le,l as Cn,m as Fn}from"./chunks/size.464db0c3.js";import{H as N,d as Tn,s as Rn,r as zn,C as de,l as An,u as Ee,a as we,b as ze,e as Bn,f as Mn,g as In,z as Hn,h as $e,i as On,j as qe,c as k,k as Y}from"./chunks/emotion-css.esm.99145d6a.js";import{t as gt,b as pe,c as Pn,F as bt,d as he,a as En}from"./chunks/index.4249e986.js";import{a as Ae,U as re,b as Le,i as Ln,F as Vn}from"./chunks/index.f326be82.js";import"./chunks/styled.27926f81.js";/**
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
 */class Ve{static harmonize(e,n){const o=N.fromInt(e),r=N.fromInt(n),s=Tn(o.hue,r.hue),a=Math.min(s*.5,15),l=Rn(o.hue+a*zn(o.hue,r.hue));return N.from(l,o.chroma,o.tone).toInt()}static hctHue(e,n,o){const r=Ve.cam16Ucs(e,n,o),s=de.fromInt(r),a=de.fromInt(e);return N.from(s.hue,a.chroma,An(e)).toInt()}static cam16Ucs(e,n,o){const r=de.fromInt(e),s=de.fromInt(n),a=r.jstar,l=r.astar,c=r.bstar,p=s.jstar,h=s.astar,g=s.bstar,d=a+(p-a)*o,y=l+(h-l)*o,_=c+(g-c)*o;return de.fromUcs(d,y,_).toInt()}}/**
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
 */class M{static fromInt(e){const n=N.fromInt(e);return M.fromHct(n)}static fromHct(e){return new M(e.hue,e.chroma,e)}static fromHueAndChroma(e,n){return new M(e,n,M.createKeyColor(e,n))}constructor(e,n,o){this.hue=e,this.chroma=n,this.keyColor=o,this.cache=new Map}static createKeyColor(e,n){let r=N.from(e,n,50),s=Math.abs(r.chroma-n);for(let a=1;a<50;a+=1){if(Math.round(n)===Math.round(r.chroma))return r;const l=N.from(e,n,50+a),c=Math.abs(l.chroma-n);c<s&&(s=c,r=l);const p=N.from(e,n,50-a),h=Math.abs(p.chroma-n);h<s&&(s=h,r=p)}return r}tone(e){let n=this.cache.get(e);return n===void 0&&(n=N.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,n)),n}getHct(e){return N.fromInt(this.tone(e))}}/**
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
 */class A{static of(e){return new A(e,!1)}static contentOf(e){return new A(e,!0)}static fromColors(e){return A.createPaletteFromColors(!1,e)}static contentFromColors(e){return A.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,n){const o=new A(n.primary,e);if(n.secondary){const r=new A(n.secondary,e);o.a2=r.a1}if(n.tertiary){const r=new A(n.tertiary,e);o.a3=r.a1}if(n.error){const r=new A(n.error,e);o.error=r.a1}if(n.neutral){const r=new A(n.neutral,e);o.n1=r.n1}if(n.neutralVariant){const r=new A(n.neutralVariant,e);o.n2=r.n2}return o}constructor(e,n){const o=N.fromInt(e),r=o.hue,s=o.chroma;n?(this.a1=M.fromHueAndChroma(r,s),this.a2=M.fromHueAndChroma(r,s/3),this.a3=M.fromHueAndChroma(r+60,s/2),this.n1=M.fromHueAndChroma(r,Math.min(s/12,4)),this.n2=M.fromHueAndChroma(r,Math.min(s/6,8))):(this.a1=M.fromHueAndChroma(r,Math.max(48,s)),this.a2=M.fromHueAndChroma(r,16),this.a3=M.fromHueAndChroma(r+60,24),this.n1=M.fromHueAndChroma(r,4),this.n2=M.fromHueAndChroma(r,8)),this.error=M.fromHueAndChroma(25,84)}}/**
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
 */class X{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(e){return X.lightFromCorePalette(A.of(e))}static dark(e){return X.darkFromCorePalette(A.of(e))}static lightContent(e){return X.lightFromCorePalette(A.contentOf(e))}static darkContent(e){return X.darkFromCorePalette(A.contentOf(e))}static lightFromCorePalette(e){return new X({primary:e.a1.tone(40),onPrimary:e.a1.tone(100),primaryContainer:e.a1.tone(90),onPrimaryContainer:e.a1.tone(10),secondary:e.a2.tone(40),onSecondary:e.a2.tone(100),secondaryContainer:e.a2.tone(90),onSecondaryContainer:e.a2.tone(10),tertiary:e.a3.tone(40),onTertiary:e.a3.tone(100),tertiaryContainer:e.a3.tone(90),onTertiaryContainer:e.a3.tone(10),error:e.error.tone(40),onError:e.error.tone(100),errorContainer:e.error.tone(90),onErrorContainer:e.error.tone(10),background:e.n1.tone(99),onBackground:e.n1.tone(10),surface:e.n1.tone(99),onSurface:e.n1.tone(10),surfaceVariant:e.n2.tone(90),onSurfaceVariant:e.n2.tone(30),outline:e.n2.tone(50),outlineVariant:e.n2.tone(80),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(20),inverseOnSurface:e.n1.tone(95),inversePrimary:e.a1.tone(80)})}static darkFromCorePalette(e){return new X({primary:e.a1.tone(80),onPrimary:e.a1.tone(20),primaryContainer:e.a1.tone(30),onPrimaryContainer:e.a1.tone(90),secondary:e.a2.tone(80),onSecondary:e.a2.tone(20),secondaryContainer:e.a2.tone(30),onSecondaryContainer:e.a2.tone(90),tertiary:e.a3.tone(80),onTertiary:e.a3.tone(20),tertiaryContainer:e.a3.tone(30),onTertiaryContainer:e.a3.tone(90),error:e.error.tone(80),onError:e.error.tone(20),errorContainer:e.error.tone(30),onErrorContainer:e.error.tone(80),background:e.n1.tone(10),onBackground:e.n1.tone(90),surface:e.n1.tone(10),onSurface:e.n1.tone(90),surfaceVariant:e.n2.tone(30),onSurfaceVariant:e.n2.tone(80),outline:e.n2.tone(60),outlineVariant:e.n2.tone(30),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(90),inverseOnSurface:e.n1.tone(20),inversePrimary:e.a1.tone(40)})}constructor(e){this.props=e}toJSON(){return{...this.props}}}/**
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
 */function Dn(t,e=[]){const n=A.of(t);return{source:t,schemes:{light:X.light(t),dark:X.dark(t)},palettes:{primary:n.a1,secondary:n.a2,tertiary:n.a3,neutral:n.n1,neutralVariant:n.n2,error:n.error},customColors:e.map(o=>Nn(t,o))}}function Nn(t,e){let n=e.value;const o=n,r=t;e.blend&&(n=Ve.harmonize(o,r));const a=A.of(n).a1;return{color:e,value:n,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}const ke=(t,e,n)=>{const o=Ee();return m(()=>{if(!e||!(e in t))return n??null;const r=t==null?void 0:t[e];if(typeof r=="function"){const{r:c,g:p,b:h}=we(ze(r(o.value)));return`${c} ${p} ${h}`}if(typeof r=="string"&&r in o.value.schemes)return`var(--md-sys-color-${r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}-rgb)`;const{r:s,g:a,b:l}=we(ze(r));return`${s} ${a} ${l}`})},jn=t=>{Ie("ThemeContext",t)},b={fontFamily:'"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',htmlFontSize:16,fontSize:14,pxToRem:t=>{const e=b.fontSize/14;return`${t/b.htmlFontSize*e}rem`}},Un={...b,h1:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(57),fontStyle:"unset",letterSpacing:b.pxToRem(-.25),lineHeight:b.pxToRem(64),textTransform:"unset",textDecoration:"unset"},h2:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(45),fontStyle:"unset",letterSpacing:b.pxToRem(0),lineHeight:b.pxToRem(52),textTransform:"unset",textDecoration:"unset"},h3:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(36),fontStyle:"unset",letterSpacing:b.pxToRem(0),lineHeight:b.pxToRem(44),textTransform:"unset",textDecoration:"unset"},h4:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(32),fontStyle:"unset",letterSpacing:b.pxToRem(0),lineHeight:b.pxToRem(40),textTransform:"unset",textDecoration:"unset"},h5:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(28),fontStyle:"unset",letterSpacing:b.pxToRem(0),lineHeight:b.pxToRem(36),textTransform:"unset",textDecoration:"unset"},h6:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(24),fontStyle:"unset",letterSpacing:b.pxToRem(0),lineHeight:b.pxToRem(32),textTransform:"unset",textDecoration:"unset"},title:{small:{fontFamily:"Roboto",fontWeight:500,fontSize:b.pxToRem(14),fontStyle:"unset",letterSpacing:b.pxToRem(.1),lineHeight:b.pxToRem(20),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:500,fontSize:b.pxToRem(16),fontStyle:"unset",letterSpacing:b.pxToRem(.15000001),lineHeight:b.pxToRem(24),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(22),fontStyle:"unset",letterSpacing:b.pxToRem(0),lineHeight:b.pxToRem(28),textTransform:"unset",textDecoration:"unset"}},body:{small:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(12),fontStyle:"unset",letterSpacing:b.pxToRem(.40000001),lineHeight:b.pxToRem(16),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(14),fontStyle:"unset",letterSpacing:b.pxToRem(.25),lineHeight:b.pxToRem(20),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(16),fontStyle:"unset",letterSpacing:b.pxToRem(.5),lineHeight:b.pxToRem(24),textTransform:"unset",textDecoration:"unset"}},label:{small:{fontFamily:"Roboto",fontWeight:500,fontSize:b.pxToRem(11),fontStyle:"unset",letterSpacing:b.pxToRem(.5),lineHeight:b.pxToRem(16),textTransform:"unset",textDecoration:"unset"},medium:{fontFamily:"Roboto",fontWeight:400,fontSize:b.pxToRem(12),fontStyle:"unset",letterSpacing:b.pxToRem(.5),lineHeight:b.pxToRem(16),textTransform:"unset",textDecoration:"unset"},large:{fontFamily:"Roboto",fontWeight:500,fontSize:b.pxToRem(14),fontStyle:"unset",letterSpacing:b.pxToRem(.1),lineHeight:b.pxToRem(20),textTransform:"unset",textDecoration:"unset"}}};let Xe=class{constructor(e,n,o="light"){this.colors=Bn,this.states=Mn,this.elevations=In,this.typography=Un,this.zIndex=Hn,this.schemes=e,this.mode=o,this.palettes=n}setMode(e){this.mode=e}};const Wn=t=>{const e={};for(const[n,o]of Object.entries(t)){const r={};gt.forEach(s=>r[s]=$e(o.tone(+s))),e[n]=r}return e},Gn=t=>{const e={};return t.forEach(n=>{const{name:o,value:r}=n,s=A.of(r).a1,a={};gt.forEach(l=>a[l]=$e(s.tone(+l))),e[o.toLowerCase()]=a}),e},Ze=t=>{const e={},n={};for(const[o,r]of Object.entries(t.toJSON())){const s=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=$e(r),{r:l,g:c,b:p}=we(r);e[o]=a,n[`--md-sys-color-${s}`]=a,n[`--md-sys-color-${s}-rgb`]=`${l} ${c} ${p}`}return{schemes:e,styles:n}},Qe=(t,e)=>{const n={},o={};return t.forEach(r=>{const{name:s}=r.color,a=e==="light"?r.light:r.dark;for(const[l,c]of Object.entries(a)){const p=l.startsWith("on")?l.replace("Color",`${s[0].toUpperCase()}${s.slice(1)}`):l.replace("color",s),h=p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),g=$e(c),{r:d,g:y,b:_}=we(c);n[p]=g,o[`--md-sys-color-${h}`]=g,o[`--md-sys-color-${h}-rgb`]=`${d} ${y} ${_}`}}),{schemes:n,styles:o}},Ke=(...t)=>{const e={},n={};return t.forEach(o=>{Object.assign(e,o.schemes),Object.assign(n,o.styles)}),{schemes:e,styles:n}},qn=(t,e,n)=>{const{fontFamily:o,htmlFontSize:r}=n.typography;On({":root":{colorScheme:"light",...t==null?void 0:t.styles},':root[data-theme="dark"]':{colorScheme:"dark",...e==null?void 0:e.styles},html:{fontSize:r},body:{fontFamily:o,color:"var(--md-sys-color-on-surface)",fontSize:"1rem"}})},Xn=(t=qe.source,e={},n=qe.customColors)=>{const{schemes:o,mode:r}=e,s=document.documentElement,a=Dn(ze(t),[...n,...e.customColors??[]]),l={...Wn(a.palettes),...Gn(n)},c=z(new Xe({},l,r)),p=Ke(Ze(a.schemes.light),Qe(a.customColors,"light")),h=Ke(Ze(a.schemes.dark),Qe(a.customColors,"dark"));return J(()=>c.value.mode,g=>{s.setAttribute("data-theme",g);const{schemes:d}=g==="dark"?h:p;c.value=new Xe({...d,...o},l,g)},{immediate:!0}),qn(p,h,c.value),jn(c),c};function vt(t){var e;const n=pt(t);return(e=n==null?void 0:n.$el)!=null?e:n}const yt=ht?window:void 0,Zn=ht?window.navigator:void 0;function Qn(...t){let e,n,o,r;if(xn(t[0])?([n,o,r]=t,e=yt):[e,n,o,r]=t,!e)return fe;let s=fe;const a=J(()=>vt(e),c=>{s(),c&&(c.addEventListener(n,o,r),s=()=>{c.removeEventListener(n,o,r),s=fe})},{immediate:!0,flush:"post"}),l=()=>{a(),s()};return mt(l),l}function _t(t,e=!1){const n=z(),o=()=>n.value=!!t();return o(),wn(o,e),n}function Kn(t={}){const{navigator:e=Zn,read:n=!1,source:o,copiedDuring:r=1500}=t,s=["copy","cut"],a=_t(()=>e&&"clipboard"in e),l=z(""),c=z(!1),p=ft(()=>c.value=!1,r);function h(){e.clipboard.readText().then(d=>{l.value=d})}if(a.value&&n)for(const d of s)Qn(d,h);async function g(d=pt(o)){a.value&&d!=null&&(await e.clipboard.writeText(d),l.value=d,c.value=!0,p.start())}return{isSupported:a,text:l,copied:c,copy:g}}const Je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ye="__vueuse_ssr_handlers__";Je[Ye]=Je[Ye]||{};var et=Object.getOwnPropertySymbols,Jn=Object.prototype.hasOwnProperty,Yn=Object.prototype.propertyIsEnumerable,eo=(t,e)=>{var n={};for(var o in t)Jn.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&et)for(var o of et(t))e.indexOf(o)<0&&Yn.call(t,o)&&(n[o]=t[o]);return n};function to(t,e,n={}){const o=n,{window:r=yt}=o,s=eo(o,["window"]);let a;const l=_t(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},p=J(()=>vt(t),g=>{c(),l.value&&r&&g&&(a=new ResizeObserver(e),a.observe(g,s))},{immediate:!0,flush:"post"}),h=()=>{c(),p()};return mt(h),{isSupported:l,stop:h}}var tt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(tt||(tt={}));var no=Object.defineProperty,nt=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,ro=Object.prototype.propertyIsEnumerable,ot=(t,e,n)=>e in t?no(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,so=(t,e)=>{for(var n in e||(e={}))oo.call(e,n)&&ot(t,n,e[n]);if(nt)for(var n of nt(e))ro.call(e,n)&&ot(t,n,e[n]);return t};const ao={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};so({linear:$n},ao);const Be=t=>{const e={};return Object.keys(t).forEach(n=>{e[n]=i(t[n])}),e},io={cs:{type:[Object,String,Array]},component:{type:[String,Object],default:"button"}},lo=t=>{const e=k`
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
  `;return m(()=>{const n=t.cs?k(t.cs):"";return Y(e,n)})},co=lo,uo=w({__name:"index",props:io,setup(t){const e=t,n=H("button-base"),o=co(e);return(r,s)=>(f(),S(ut(r.$props.component),{class:x([i(n).b(),i(o)])},{default:$(()=>[T(r.$slots,"default")]),_:3},8,["class"]))}}),xt=R(uo,"FnButtonBase");xt.name="FnButtonBase";const De=xt,fo=(t,e)=>{const n=t.color?W(t,"color"):W(t,"severity","var(--md-sys-color-primary)"),o=m(()=>pe.includes(t.severity)?`var(--md-sys-color-on-${t.severity})`:null),r=m(()=>pe.includes(t.severity)?`var(--md-sys-color-${t.severity}-container)`:null),s=m(()=>pe.includes(t.severity)?`var(--md-sys-color-${t.severity}-container-filled)`:null);return m(()=>k`
      --fn-alert-background: ${r.value};
      --fn-alert-background-filled: ${s.value};
      --fn-alert-color: ${n.value};
      --fn-alert-on-color: ${o.value??"var(--md-sys-color-on-primary)"};
    `)},po=(t,e)=>{const n=W(t,"color","var(--md-sys-color-primary)"),o=ke(t,"color","var(--md-sys-color-primary)"),r=m(()=>pe.includes(t.color)?`var(--md-sys-color-on-${t.color})`:null);return m(()=>k`
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
        height: ${Ho[t.size]}px;
      }
    `)},ho=t=>{const e=m(()=>{const o={};return t.percentage&&kn(t.percentage)&&t.percentage>0&&(o["--progress-bar-width"]=`${t.percentage}%`,o.height="0.5rem"),o.height=Ae(t.height),o["--progress-bar-inner-bg"]=t.barColor,o["--progress-bar-out-bg"]=t.background,o["--bar-duration"]=t.duration?`${t.duration}s`:"2s",o["--progress-bar-bg"]=t.color,o["--current-progress"]=`${Number(t.percentage)/100*360}deg`,o}),n=m(()=>{const o={height:"auto"};return o["--current-progress"]=`${Number(t.percentage)/100*360}deg`,o});return{styleList:e,styleListCircle:n}};function B(t,e){mo(t)&&(t="100%");var n=go(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function ye(t){return Math.min(1,Math.max(0,t))}function mo(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function go(t){return typeof t=="string"&&t.indexOf("%")!==-1}function wt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function _e(t){return t<=1?"".concat(Number(t)*100,"%"):t}function ee(t){return t.length===1?"0"+t:String(t)}function bo(t,e,n){return{r:B(t,255)*255,g:B(e,255)*255,b:B(n,255)*255}}function rt(t,e,n){t=B(t,255),e=B(e,255),n=B(n,255);var o=Math.max(t,e,n),r=Math.min(t,e,n),s=0,a=0,l=(o+r)/2;if(o===r)a=0,s=0;else{var c=o-r;switch(a=l>.5?c/(2-o-r):c/(o+r),o){case t:s=(e-n)/c+(e<n?6:0);break;case e:s=(n-t)/c+2;break;case n:s=(t-e)/c+4;break}s/=6}return{h:s,s:a,l}}function Ce(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vo(t,e,n){var o,r,s;if(t=B(t,360),e=B(e,100),n=B(n,100),e===0)r=n,s=n,o=n;else{var a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;o=Ce(l,a,t+1/3),r=Ce(l,a,t),s=Ce(l,a,t-1/3)}return{r:o*255,g:r*255,b:s*255}}function st(t,e,n){t=B(t,255),e=B(e,255),n=B(n,255);var o=Math.max(t,e,n),r=Math.min(t,e,n),s=0,a=o,l=o-r,c=o===0?0:l/o;if(o===r)s=0;else{switch(o){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return{h:s,s:c,v:a}}function yo(t,e,n){t=B(t,360)*6,e=B(e,100),n=B(n,100);var o=Math.floor(t),r=t-o,s=n*(1-e),a=n*(1-r*e),l=n*(1-(1-r)*e),c=o%6,p=[n,a,s,s,l,n][c],h=[l,n,n,a,s,s][c],g=[s,s,l,n,n,a][c];return{r:p*255,g:h*255,b:g*255}}function at(t,e,n,o){var r=[ee(Math.round(t).toString(16)),ee(Math.round(e).toString(16)),ee(Math.round(n).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function _o(t,e,n,o,r){var s=[ee(Math.round(t).toString(16)),ee(Math.round(e).toString(16)),ee(Math.round(n).toString(16)),ee(xo(o))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function xo(t){return Math.round(parseFloat(t)*255).toString(16)}function it(t){return E(t)/255}function E(t){return parseInt(t,16)}function wo(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var Me={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $o(t){var e={r:0,g:0,b:0},n=1,o=null,r=null,s=null,a=!1,l=!1;return typeof t=="string"&&(t=Co(t)),typeof t=="object"&&(q(t.r)&&q(t.g)&&q(t.b)?(e=bo(t.r,t.g,t.b),a=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):q(t.h)&&q(t.s)&&q(t.v)?(o=_e(t.s),r=_e(t.v),e=yo(t.h,o,r),a=!0,l="hsv"):q(t.h)&&q(t.s)&&q(t.l)&&(o=_e(t.s),s=_e(t.l),e=vo(t.h,o,s),a=!0,l="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=wt(n),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var ko="[-\\+]?\\d+%?",So="[-\\+]?\\d*\\.\\d+%?",K="(?:".concat(So,")|(?:").concat(ko,")"),Fe="[\\s|\\(]+(".concat(K,")[,|\\s]+(").concat(K,")[,|\\s]+(").concat(K,")\\s*\\)?"),Te="[\\s|\\(]+(".concat(K,")[,|\\s]+(").concat(K,")[,|\\s]+(").concat(K,")[,|\\s]+(").concat(K,")\\s*\\)?"),D={CSS_UNIT:new RegExp(K),rgb:new RegExp("rgb"+Fe),rgba:new RegExp("rgba"+Te),hsl:new RegExp("hsl"+Fe),hsla:new RegExp("hsla"+Te),hsv:new RegExp("hsv"+Fe),hsva:new RegExp("hsva"+Te),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Co(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(Me[t])t=Me[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=D.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=D.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=D.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=D.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=D.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=D.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=D.hex8.exec(t),n?{r:E(n[1]),g:E(n[2]),b:E(n[3]),a:it(n[4]),format:e?"name":"hex8"}:(n=D.hex6.exec(t),n?{r:E(n[1]),g:E(n[2]),b:E(n[3]),format:e?"name":"hex"}:(n=D.hex4.exec(t),n?{r:E(n[1]+n[1]),g:E(n[2]+n[2]),b:E(n[3]+n[3]),a:it(n[4]+n[4]),format:e?"name":"hex8"}:(n=D.hex3.exec(t),n?{r:E(n[1]+n[1]),g:E(n[2]+n[2]),b:E(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function q(t){return!!D.CSS_UNIT.exec(String(t))}var Fo=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var o;if(e instanceof t)return e;typeof e=="number"&&(e=wo(e)),this.originalInput=e;var r=$o(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(o=n.format)!==null&&o!==void 0?o:r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,o,r,s=e.r/255,a=e.g/255,l=e.b/255;return s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*o+.0722*r},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=wt(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=st(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=st(this.r,this.g,this.b),n=Math.round(e.h*360),o=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsva(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=rt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=rt(this.r,this.g,this.b),n=Math.round(e.h*360),o=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(o,"%, ").concat(r,"%)"):"hsla(".concat(n,", ").concat(o,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),at(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),_o(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),o=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(o,")"):"rgba(".concat(e,", ").concat(n,", ").concat(o,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(B(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(B(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+at(this.r,this.g,this.b,!1),n=0,o=Object.entries(Me);n<o.length;n++){var r=o[n],s=r[0],a=r[1];if(e===a)return s}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var o=!1,r=this.a<1&&this.a>=0,s=!n&&r&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),o||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=ye(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=ye(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=ye(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=ye(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),o=(n.h+e)%360;return n.h=o<0?360+o:o,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var o=this.toRgb(),r=new t(e).toRgb(),s=n/100,a={r:(r.r-o.r)*s+o.r,g:(r.g-o.g)*s+o.g,b:(r.b-o.b)*s+o.b,a:(r.a-o.a)*s+o.a};return new t(a)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var o=this.toHsl(),r=360/n,s=[this];for(o.h=(o.h-(r*e>>1)+720)%360;--e;)o.h=(o.h+r)%360,s.push(new t(o));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),o=n.h,r=n.s,s=n.v,a=[],l=1/e;e--;)a.push(new t({h:o,s:r,v:s})),s=(s+l)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),o=new t(e).toRgb();return new t({r:o.r+(n.r-o.r)*n.a,g:o.g+(n.g-o.g)*n.a,b:o.b+(n.b-o.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),o=n.h,r=[this],s=360/e,a=1;a<e;a++)r.push(new t({h:(o+a*s)%360,s:n.s,l:n.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();const To=t=>{const e=m(()=>{const o=[];return t.round&&o.push("is-round"),["fn-tag",`fn-tag--${t.type}`,`fn-tag--${t.size}`,...o]});return{styleList:m(()=>{const{color:o}=t,r={};if(o){const s=new Fo(o);r["--fn-tag-bg-color"]=s.tint(70).toString(),r["--fn-tag-text-color"]=o,r["--fn-tag-border-color"]=s.tint(60).toString()}return r}),classList:e}},Ro=["left","right","top","bottom"],zo={error:"material-symbols:error-outline",warning:"material-symbols:warning-outline",info:"material-symbols:info-outline",success:"mdi:success"},Ao=t=>{const n=He().emit,o=z(!1);function r(){document.body.style.overflow="hidden",document.body.style.width="calc(100% - 6px)",o.value=!0,n(re,!0)}function s(){document.body.style.overflow="",document.body.style.width="",o.value=!1,n(re,!1)}return J(()=>t.modelValue,a=>{a?r():o.value&&(o.value=!1)}),se(()=>{t.modelValue&&r()}),{doOpen:r,doClose:s,visible:o}},Bo=t=>{const e=W(t,"color","var(--md-sys-color-primary)");return m(()=>k`
      --fn-link-color: ${e.value};
      --fn-link__underline--status: ${t.underline==="none"||t.underline==="hover"?"none":"underline"};
      --fn-link__underline--hover: ${t.underline==="none"?"none":(t.underline==="hover","underline")};
    `)},Mo=["text","filled","outlined"],Io=["rounded","fullRounded","square"],Ho={small:32,medium:40,large:48},$t={variant:{type:String,values:Mo,default:"filled"},shape:{type:String,values:Io,default:"rounded"},size:{type:String,values:ie,default:"medium"},color:{type:[String,Function],default:"primary"},disableRipple:{type:Boolean,default:!1},disableElevation:{type:Boolean,default:!1}},Oo=w({__name:"index",props:$t,setup(t){const e=t,n=H("button"),o=po(e,n),r=m(()=>{const{variant:s,shape:a,size:l}=e;return[n.b(),n.m(l),n.m(a),n.m(s)]});return(s,a)=>(f(),S(i(De),{class:x([...i(r),`title-${e.size}`,i(o)])},{default:$(()=>[T(s.$slots,"default",ne(oe({size:i(Pe)[e.size]}))),e.disableRipple?I("",!0):(f(),S(i(Le),{key:0,color:e.variant==="filled"?void 0:e.color},null,8,["color"]))]),_:3},8,["class"]))}}),kt=R(Oo,"FnButton");kt.name="FnButton";const Po=kt,Eo={size:{type:String,values:ie,default:"medium"},color:{type:[String,Function],default:"primary"},cs:{type:[Object,String,Array]}},Lo=(t,e)=>m(()=>{const n=W(t,"color","var(--md-sys-color-primary)"),o=ke(t,"color","var(--md-sys-color-primary-rgb)"),r=t.cs?k(t.cs):"";return Y(k`
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
      `,r)}),Vo=Lo,Do=w({__name:"index",props:Eo,setup(t){const e=t,n=H("icon-button"),o=Vo(e,n);return(r,s)=>(f(),S(i(De),{class:x([i(n).b(),i(n).m(r.$props.size),i(o)])},{default:$(()=>[T(r.$slots,"default",ne(oe({size:i(Pe)[r.$props.size],color:r.$props.color}))),F(i(Le),{color:r.$props.color,center:""},null,8,["color"])]),_:3},8,["class"]))}}),Ne=R(Do,"FnIconButton");Ne.name="FnIconButton";const je=Ne,No=["horizontal","vertical"],jo={...$t,orientation:{type:String,values:No,default:"horizontal"}},Uo=w({props:jo,setup(t,{slots:e,attrs:n}){var g;const o=H("button-group"),{orientation:r,...s}=Oe(t),a=W(t,"color","var(--md-sys-color-primary)"),l=ke(t,"color","var(--md-sys-color-primary-rgb)"),c=m(()=>k`
        --fn-button-group-color: ${a.value};
        --fn-button-group-color-rgb: ${l.value};
      `),p=m(()=>{const{variant:d,shape:y,size:_}=Be(s);return Y([o.b(),o.m(_),o.m(y),o.m(d),o.m(r.value),c.value])}),h=(((g=e==null?void 0:e.default)==null?void 0:g.call(e))??[]).map(d=>F(d,j(Be(s),n,d.props??{}),null));return()=>F("div",{class:p.value},[h])}}),St=R(Uo,"FnButtonGroup");St.name="FnButtonGroup";const Wo=St,Go=["filled","outlined"],qo={title:{type:String,default:""},severity:{type:String,default:"info"},icon:{type:String,default:""},variant:{type:String,values:Go,default:""},color:{type:[String,Function],default:""}},Xo=w({__name:"index",props:qo,setup(t){const e=t,n=H("alert"),o=fo(e),r=z(!0),s=m(()=>e.icon===!1?!1:e.icon?e.icon:zo[e.severity]),a=()=>{};return(l,c)=>{const p=G("fn-icon");return f(),S(ge,{name:"alert-fade"},{default:$(()=>[L(u("div",{class:x([i(n).b(),i(n).m(e.variant),i(n).m(e.severity),i(o)])},[i(s)?(f(),v("div",{key:0,class:x([i(n).m("icon")])},[F(p,{icon:i(s)},null,8,["icon"])],2)):I("",!0),u("div",{class:x([i(n).m("message")])},[T(l.$slots,"default")],2),u("div",{class:x([i(n).m("action")]),onClick:a},[T(l.$slots,"action")],2)],2),[[U,r.value]])]),_:3})}}}),Ct=R(Xo,"FnAlert");Ct.name="FnAlert";const Zo=Ct,Qo={underline:{type:String,values:["none","hover","always"],default:"hover",required:!1},color:{type:String,required:!1},icon:{type:String,required:!1}},Ko={key:0},Jo=w({__name:"index",props:Qo,setup(t){const e=t,n=H("link"),o=Bo(e);return(r,s)=>{const a=G("fn-icon");return f(),v("a",{class:x([i(n).b(),i(o)])},[r.icon?(f(),v("span",Ko,[F(a,{icon:r.icon,style:V(r.$slots.default?"margin-right: 3px;":"")},null,8,["icon","style"])])):I("",!0),u("span",null,[T(r.$slots,"default")])],2)}}}),Ft=R(Jo,"FnLink");Ft.name="FnLink";const Yo=Ft,er=["id"],tr={class:"message-content"},nr=["innerHTML"],or=w({__name:"index",props:{message:null,duration:{default:2e3},id:null,showIcon:{type:Boolean,default:!0},offset:{default:20},closeBtn:{type:Boolean,default:!1},severity:{default:"info"}},emits:["destroy"],setup(t,{expose:e}){const n=t,o=z(!1),r=z(0),s=z();let a=fe;function l(){n.duration!==0&&({stop:a}=ft(()=>{o.value=!1,a=fe},n.duration))}se(()=>{l(),o.value=!0}),to(s,()=>{r.value=s.value.getBoundingClientRect().height});const c=m(()=>sr(n.id)+n.offset),p=m(()=>r.value+c.value);return e({bottom:p,lastOffset:c,visible:o}),(h,g)=>(f(),S(ge,{name:"fn-message-fade",onAfterLeave:g[2]||(g[2]=d=>h.$emit("destroy"))},{default:$(()=>[L(u("div",{id:t.id,ref_key:"elRef",ref:s,class:x(["fn-message",[`${t.severity}-container`]]),style:V({top:`${i(c)}px`}),onMouseenter:g[1]||(g[1]=(...d)=>i(a)&&i(a)(...d)),onMouseleave:l},[u("div",tr,[n.showIcon?(f(),v("i",{key:0,innerHTML:i(cr)(n.severity)},null,8,nr)):I("",!0),Z(" "+C(t.message),1)]),t.closeBtn?(f(),v("div",{key:0,class:"close-btn",onClick:g[0]||(g[0]=d=>o.value=!1)})):I("",!0)],46,er),[[U,o.value]])]),_:1}))}}),Q=qt([]);let lt=1;function Tt(t){const e=document.createElement("div"),n=`fn-message-${lt}`,o=xe(or,{...t,id:n,onDestroy:()=>{rr(n),We(null,e)}},()=>t.message);We(o,e),document.body.appendChild(e.firstElementChild);const r={id:n,vnode:o,component:o.component,props:t,close:()=>{o.component.exposed.visible.value=!1}};return Q.push(r),lt++,r}function rr(t){const e=Q.findIndex(n=>n.id===t);e!==-1&&(Q[e].close(),Q.splice(e,1))}const sr=t=>{const e=Q.findIndex(o=>o.id===t),n=Q[e-1];return n?n.component.exposed.bottom.value:0};function ar(t){return function(e,n){return Tt({...n,message:e})}}function ir(){for(const t of Q)t.close();Q.splice(0,Q.length)}const lr=new Map([["success",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
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
</svg>`]]);function cr(t){return lr.get(t)}const ur=["error","success","warning","info"],Ue=Tt;for(const t of ur)Ue[t]=ar();Ue.closeAll=ir;const dr=Sn(Ue,"$message"),fr=dr,pr={modelValue:Boolean,title:String,width:{type:[String,Number]},top:{type:[String,Number]},showClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},center:{type:Boolean,default:!1}},hr={click:t=>t instanceof MouseEvent},mr=Symbol("dialogInjectionKey"),gr=(t,e)=>{const o=He().emit;let r="";const s=z(!1),a=m(()=>{const d={},y="--fn-dialog";return t.fullscreen&&(d[`${y}-width`]="100%"),t.width&&!t.fullscreen&&(d[`${y}-width`]=Ae(t.width)),!t.width&&!t.fullscreen&&(d[`${y}-width`]="30%"),t.top&&!t.fullscreen&&(d[`${y}-top`]=Ae(t.top)),!t.top&&!t.fullscreen&&(d[`${y}-top`]="30vh"),d});function l(){g()}function c(){function d(y){y||(s.value=!1)}t.beforeClose?t.beforeClose(d):l()}function p(){t.closeOnClickModal&&c()}function h(){s.value=!0}function g(){s.value=!1,o(re,!1)}return J(()=>t.modelValue,d=>{d?h():s.value&&l()}),J(()=>t.fullscreen,d=>{e.value&&(d?(r=e.value.style.transform,e.value.style.transform=""):e.value.style.transform=r)}),se(()=>{t.modelValue&&h()}),{handleClose:c,onModalClick:p,close:l,doClose:g,overlayDialogStyle:a,visible:s}},br=["onClick"],vr={class:"header"},yr={class:"dialog__content"},_r={class:"footer"},xr=w({__name:"index",props:pr,emits:hr,setup(t,{emit:e}){const n=t,{showClose:o}=Oe(n),r=z(),s=z(null),a=z(),{visible:l,handleClose:c,overlayDialogStyle:p}=gr(n,r);Ie(mr,{dialogRef:a});function h(g){if(!n.closeOnClickModal)return;const d=s.value;d!=null&&d.contains(g.target)||c(),e("click",g)}return(g,d)=>{const y=G("fn-icon");return f(),S(dt,{to:"body"},[F(ge,{name:"dialog-fade"},{default:$(()=>[L(u("div",{ref_key:"containerRef",ref:r,class:"dialog",role:"dialog",onClick:Xt(h,["stop"])},[u("div",{ref_key:"targetDivRef",ref:s,class:x(["fn-overlay",{"is-align-center":n.center&&!n.fullscreen,"is-fullscreen":n.fullscreen}]),style:V(i(p))},[L(u("div",vr,[u("span",null,C(n.title),1),i(o)?I("",!0):(f(),v("span",{key:0,onClick:d[0]||(d[0]=(..._)=>i(c)&&i(c)(..._))},[F(y,{icon:"material-symbols:close"})]))],512),[[U,n.title]]),u("div",yr,[T(g.$slots,"default")]),u("div",_r,[T(g.$slots,"footer")])],6)],8,br),[[U,i(l)]])]),_:3})])}}}),Rt=R(xr,"FnDialog");Rt.name="FnDialog";const wr=Rt,$r=le({modelValue:{type:[String,Number,Boolean,Array,Object],required:!0},type:{type:String,default:""},cs:{type:[Object,String,Array]},internal:{type:Boolean,default:!1}}),kr=t=>m(()=>{const e=Ee(),n=k([{background:"none",color:"inherit"},e.value.typography.body.large]),o=t.internal?k({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:"0px",left:"0px",margin:"0px",padding:"0px",zIndex:1}):"",r=t.cs?k(t.cs):"";return Y(n,{[o]:t.internal},r)}),Sr=kr,Cr=["type"],Fr=w({__name:"index",props:$r,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=H("input-base"),r=Sr(n),s=m({get(){return n.modelValue},set(a){e("update:modelValue",a)}});return(a,l)=>L((f(),v("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>be(s)?s.value=c:null),type:a.$props.type,class:x([i(o).b(),i(r)])},null,10,Cr)),[[Zt,i(s)]])}}),zt=R(Fr,"FnInputBase");zt.name="FnInputBase";const Se=zt,Tr=le({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},cs:{type:[Object,String,Array]}}),Rr=t=>m(()=>{const{typography:{pxToRem:e}}=Ee().value,n=W(t,"color");let o;const r=+t.size;if(isNaN(r)){const[a,l,c]=/(d+)(w+)/.exec(t.size)||[];o=c==="px"?e(+l):t.size}else o=e(r);const s=t.cs?k(t.cs):"";return Y(k`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${o};
        color: ${n.value};
      `,s)}),zr=Rr,ce=w({props:Tr,setup(t,{slots:e}){var s;const n=H("svg-icon"),o=zr(t),r=((s=e==null?void 0:e.default)==null?void 0:s.call(e))??[];if(r.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");return()=>{var a,l;return F("svg",j({class:[n.b(),o.value]},(a=r[0])==null?void 0:a.props),[(l=r[0])==null?void 0:l.children])}}}),Ar={name:"RadioButtonCheckedFilled",components:{FnSvgIcon:ce}},Br=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})],-1);function Mr(t,e,n,o,r,s){const a=G("fn-svg-icon");return f(),S(a,{cs:"fill: currentcolor;"},{default:$(()=>[Br]),_:1})}const Ir=ve(Ar,[["render",Mr]]),Hr={name:"RadioButtonUncheckedFilled",components:{FnSvgIcon:ce}},Or=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})],-1);function Pr(t,e,n,o,r,s){const a=G("fn-svg-icon");return f(),S(a,{cs:"fill: currentcolor;"},{default:$(()=>[Or]),_:1})}const Er=ve(Hr,[["render",Pr]]),Lr={modelValue:{type:[String,Number,Boolean],required:!0},size:{type:String,value:ie,default:"medium"},color:{type:[String,Function],default:"primary"}},Vr=w({__name:"index",props:Lr,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=H("radio"),r=m({get(){return n.modelValue},set(s){e(re,s)}});return(s,a)=>(f(),S(i(Ne),j({component:"span"},{color:s.$props.color,size:s.$props.size,class:[i(o).b()]},{class:[i(o).b(),i(o).m(n.size)]}),{default:$(()=>[i(r)===s.$attrs.value?(f(),S(Ir,{key:0})):(f(),S(Er,{key:1})),L(u("input",j(s.$attrs,{"onUpdate:modelValue":a[0]||(a[0]=l=>be(r)?r.value=l:null),class:[[i(o).e("input")],"fn-form__input"],type:"radio"}),null,16),[[Qt,i(r)]])]),_:1},16,["class"]))}}),At=R(Vr,"FnRadio");At.name="FnRadio";const Dr=At,Nr={title:{type:String,default:"card-header"},border:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},separate:{type:Boolean,default:!1},width:{type:Number,default:300},background:{type:String,default:""}},jr={class:"fn-card--title"},Ur={class:"fn-card--content"},Wr=w({__name:"index",props:Nr,setup(t){const e=t,{border:n,hover:o}=e,r=m(()=>[{"has-border":n,"has-hover":o}]);return(s,a)=>(f(),v("div",{class:x(["fn-card",i(r)]),style:V({backgroundColor:e.background,width:`${e.width}px`})},[u("div",jr,[u("span",null,[T(s.$slots,"header",{},()=>[Z(C(s.title),1)])])]),u("div",Ur,[T(s.$slots,"default",{},()=>[Z("content")])])],6))}}),Bt=R(Wr,"FnCard");Bt.name="FnCard";const Gr=Bt,qr={name:"CheckFilled",components:{FnSvgIcon:ce}},Xr=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})],-1);function Zr(t,e,n,o,r,s){const a=G("fn-svg-icon");return f(),S(a,{cs:"fill: currentcolor;"},{default:$(()=>[Xr]),_:1})}const Qr=ve(qr,[["render",Zr]]),Kr={small:28,medium:32,large:36},Jr=le({modelValue:{type:Boolean,default:""},color:{type:[String,Function],default:"primary"},size:{type:String,value:ie,default:"medium"},cs:{type:[Object,String,Array]},disabledIcon:{type:Boolean,default:!1}}),Yr=(t,e)=>{const n=W(t,"color","var(--md-sys-color-primary)"),o=ke(t,"color","var(--md-sys-color-primary-rgb)"),r=m(()=>pe.includes(t.color)?`var(--md-sys-color-on-${t.color})`:"var(--md-sys-color-on-primary)"),s=k`
    --fn-switch-color: ${n.value};
    --fn-switch-color-rgb: ${o.value};
    --fn-switch-on-color: ${r.value};
    --fn-switch-height: ${Kr[t.size]}px;
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
  `;return m(()=>{const a=t.cs?k(t.cs):"";return Y(s,a)})},es=Yr,ts=w({__name:"index",props:Jr,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=H("switch"),r=es(n,o),s=m({get(){return n.modelValue},set(a){e(re,a)}});return(a,l)=>(f(),v("span",{class:x([i(o).b(),i(s)?i(o).m("checked"):i(o).m("unchecked"),i(r)])},[F(i(je),{class:x([i(o).e("thumb")]),color:n.color,disabled:a.$attrs.disabled,onClick:l[0]||(l[0]=c=>s.value=!i(s))},{default:$(()=>[u("span",{class:x([i(o).em("thumb","icon-wrapper")])},[T(a.$slots,"default",ne(oe({size:16})),()=>[n.disabledIcon?I("",!0):(f(),S(Qr,{key:0}))])],2)]),_:3},8,["class","color","disabled"]),F(i(Se),j(a.$attrs,{modelValue:i(s),"onUpdate:modelValue":l[1]||(l[1]=c=>be(s)?s.value=c:null),class:[i(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])],2))}}),Mt=R(ts,"FnSwitch");Mt.name="FnSwitch";const ns=Mt,os={percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},type:{type:String,default:"line"},height:{type:String,default:"0.5rem"},intermediate:{type:Boolean,default:!1},duration:{type:Number,default:2},width:{type:Number,default:120},strokeWidth:{type:Number,default:6},textInside:{type:Boolean,default:!1},background:{type:String,default:"#f5f5f6"},barColor:{type:String,default:"#3894ff"},color:{type:String,default:"#4987f8"},status:{type:String,default:""},striped:{type:Boolean,default:!1},stripedFlow:{type:Boolean,default:!1}},rs={style:{"margin-left":"5px"}},ss=["height"],as=["r","stroke","stroke-width"],is=["r","stroke","stroke-width","stroke-dashoffset"],ls={key:0},cs={key:1},us=w({__name:"index",props:os,setup(t){const e=t,n=m(()=>typeof e.percentage!="number"?0:e.percentage>100?100:e.percentage<0?0:e.percentage),o=e.width||120,r=m(()=>(o-e.strokeWidth)/2),s="fn-progress",a=o/2,l=o/2,c=2*Math.PI*r.value,p=m(()=>{if(typeof e.percentage!="number")return 0;{const _=e.percentage>100?100:e.percentage<0?0:e.percentage;return(1-Number(_)/100)*c}}),h=m(()=>e.intermediate?"bar-intermediate":""),g=m(()=>{let _="";return e.striped&&(_+="fn-progress-bar-striped ",e.stripedFlow&&(_+="fn-progress-bar-is-flow")),_}),{styleList:d,styleListCircle:y}=ho(e);return(_,O)=>(f(),v(te,null,[e.type==="line"?(f(),v("div",{key:0,class:x(`${s} ${s}-line`),style:V(i(d))},[u("div",{class:x(`${s}-bar-out`)},[u("div",{class:x([`${s}-bar ${i(h)} ${i(g)}`])},null,2),L(u("div",{class:x(`${s}-text-inner`)},C(i(n))+"% ",3),[[U,e.textInside]])],2),L(u("div",{class:x(`${s}-text`)},[L(u("span",{class:x(`${s}-text-out`)},C(i(n))+"% ",3),[[U,!e.status&&!e.intermediate]]),L(u("span",rs,null,512),[[U,e.status]])],2),[[U,!e.textInside]])],6)):I("",!0),e.type==="circle"?(f(),v("div",{key:1,class:"fn-progress circle-progress",style:V(i(y))},[u("div",{class:"circle-content",style:V(`width:${i(o)}px;height: ${i(o)}px;`)},[(f(),v("svg",{width:"circleSize",height:i(o),class:"circle"},[u("circle",{r:i(r),cx:a,cy:l,fill:"transparent",stroke:e.background,"stroke-width":e.strokeWidth},null,8,as),u("circle",{r:i(r),cx:a,cy:l,fill:"transparent",stroke:e.color,"stroke-width":e.strokeWidth,"stroke-linecap":"round","stroke-dasharray":c,"stroke-dashoffset":i(p)},null,8,is)],8,ss)),u("span",{class:"count-num",style:V([{"font-size":`${i(o)*.3}px`}])},[_.$slots.default?(f(),v("span",ls,[T(_.$slots,"default")])):(f(),v("span",cs,C(e.percentage)+"% ",1))],4)],4)],4)):I("",!0)],64))}}),It=R(us,"FnProgress");It.name="FnProgress";const ds=It,fs=le({...Pn,max:{type:[String,Number]},avatarBorder:{type:String,default:"var(--md-sys-color-background)"}}),ps=w({props:fs,setup(t,{slots:e,attrs:n}){var g;const{max:o,avatarBorder:r,...s}=Oe(t),a=H("avatar-group"),l=((g=e==null?void 0:e.default)==null?void 0:g.call(e))??[];let c=l;if(o.value&&+o.value<l.length){const d=l.length-+o.value;c=[...l.slice(0,+o.value),F(bt,null,{default:()=>[Z("+"),d]})]}const p=m(()=>c.map(d=>F(d,j(Be(s),d.props??{}),null))),h=m(()=>{var y;const d=((y=n==null?void 0:n.class)==null?void 0:y.split(" "))??[];return d.push(a.b()),d.push(k`
        & .fn-avatar {
          border: 2px solid ${r.value};
        }
      `),Y(d)});return()=>F("div",j(n,{class:h.value}),[p.value.reverse()])}}),Ht=R(ps,"FnAvatarGroup");Ht.name="FnAvatarGroup";const hs=Ht,ms={type:{type:String,default:""},closable:{type:Boolean,default:!1},color:{type:String,default:""},size:{type:String,default:""},round:{type:Boolean,default:!1}},gs=w({__name:"index",props:ms,emits:["click","close"],setup(t,{emit:e}){const n=t,{classList:o,styleList:r}=To(n),s=l=>{e("close",l)},a=l=>{e("click",l)};return(l,c)=>(f(),v("span",{class:x(i(o)),style:V(i(r)),onClick:a},[u("span",null,[T(l.$slots,"default")]),l.closable?(f(),v("div",{key:0,class:"close-btn",onClick:s},"×")):I("",!0)],6))}}),Ot=R(gs,"FnTag");Ot.name="FnTag";const bs=Ot,vs={modelValue:{type:[Boolean,Array]},color:{type:[String,Function],default:"primary"},size:{type:String,value:ie,default:"medium"}},ys={name:"CheckBoxFilled",components:{FnSvgIcon:ce}},_s=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1);function xs(t,e,n,o,r,s){const a=G("fn-svg-icon");return f(),S(a,{cs:"fill: currentcolor;"},{default:$(()=>[_s]),_:1})}const ws=ve(ys,[["render",xs]]),$s={name:"CheckBoxOutlineBlankFilled",components:{FnSvgIcon:ce}},ks=u("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[u("path",{d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})],-1);function Ss(t,e,n,o,r,s){const a=G("fn-svg-icon");return f(),S(a,{cs:"fill: currentcolor;"},{default:$(()=>[ks]),_:1})}const Cs=ve($s,[["render",Ss]]),Fs=w({__name:"index",props:vs,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=H("checkbox"),r=m({get(){return n.modelValue},set(s){e(re,s)}});return(s,a)=>(f(),S(i(je),j({component:"span"},{color:s.$props.color,size:s.$props.size,class:[i(o).b(),i(o).m(n.size)]}),{default:$(l=>[T(s.$slots,"default",ne(oe({checked:i(r),size:l.size,class:["fn-icon",i(o).e("icon")]})),()=>[i(r)?(f(),S(ws,{key:0})):(f(),S(Cs,{key:1}))]),F(i(Se),j(s.$attrs,{modelValue:i(r),"onUpdate:modelValue":a[0]||(a[0]=c=>be(r)?r.value=c:null),class:[i(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])]),_:3},16))}}),Pt=R(Fs,"FnCheckbox");Pt.name="FnCheckbox";const Ts=Pt,Et=Symbol("breadcrumbKey"),Rs={separator:{type:String,default:"/"}},zs=w({__name:"index",props:Rs,setup(t){const e=t,n=z();return Ie(Et,e),se(()=>{const o=n.value.querySelectorAll(".fn-breadcrumb-item");if(o.length){const r=o[o.length-1].lastElementChild;r.style.display="none"}}),(o,r)=>(f(),v("div",{ref_key:"breadcrumb",ref:n,class:"fn-breadcrumb"},[T(o.$slots,"default")],512))}}),Lt=R(zs,"FnBreadcrumb");Lt.name="FnBreadcrumb";const As=Lt,Bs={to:{type:Cn([String,Object]),default:""},replace:{type:Boolean,default:!1}},Ms={class:"fn-breadcrumb-item"},Is={class:"fn-breadcrumb-separator"},Hs=w({__name:"index",props:Bs,setup(t){const e=t,n=He(),o=Kt(Et,void 0),r=n.appContext.config.globalProperties.$router,s=()=>{!e.to||!r||(e.replace?r.replace(e.to):r.push(e.to))};return(a,l)=>{var c;return f(),v("span",Ms,[u("span",{ref:"link",class:x(["fn-breadcrumb-inner",[e.to?"fn-breadcrumb-link":""]]),onClick:s},[T(a.$slots,"default")],2),u("span",Is,C((c=i(o))==null?void 0:c.separator),1)])}}}),Vt=R(Hs,"FnBreadcrumbItem");Vt.name="FnBreadcrumbItem";const Os=Vt,Ps=le({modelValue:Boolean,title:String,direction:{type:String,values:["left","right","top","bottom"],default:"left"}}),Es={class:"drawer-title"},Ls={class:"drawer-body"},Vs=w({__name:"index",props:Ps,setup(t){const e=t,{visible:n,doClose:o}=Ao(e),r=z(null),s=H("drawer"),a=m(()=>`${s.b()}--overlay`),l=m(()=>{const{direction:p}=e,h=[s.b()];return Jt(p)&&h.push(s.m(p)),h}),c=p=>{const h=r.value;h!=null&&h.contains(p.target)||o()};return(p,h)=>(f(),S(dt,{to:"body"},[i(n)?(f(),v("div",{key:0,ref:"elRef",class:x(i(a)),onClick:c},null,2)):I("",!0),F(ge,{name:`slide-fade--${e.direction}`},{default:$(()=>[L(u("div",{ref_key:"targetDivRef",ref:r,class:x(i(l))},[u("header",null,[u("span",Es,C(e.title),1),u("span",{class:"drawer-close",onClick:h[0]||(h[0]=(...g)=>i(o)&&i(o)(...g))})]),u("div",Ls,[T(p.$slots,"default")])],2),[[U,i(n)]])]),_:3},8,["name"])]))}}),Dt=R(Vs,"FnDrawer");Dt.name="FnDrawer";const Ds=Dt,Ns={label:{type:String,required:!0},control:{required:!0},labelPlacement:{type:String,values:Ro,default:"right"}},js=w({inheritAttrs:!1}),Us=w({...js,__name:"index",props:Ns,setup(t){const e=t,n=H("form-label");return(o,r)=>(f(),v("label",{class:x([i(n).b(),i(n).m(e.labelPlacement)])},[(f(),S(ut(e.control),ne(oe(o.$attrs)),null,16)),F(i(he),{variant:"body.large",component:"span",disabled:o.$attrs.disabled},{default:$(()=>[Z(C(e.label),1)]),_:1},8,["disabled"])],2))}}),Nt=R(Us,"FnFormLabel");Nt.name="FnFormLabel";const Ws=Nt,Gs=["outlined","filled","standard"],qs=le({modelValue:{type:String,required:!0,default:""},variant:{type:String,values:Gs,default:"outlined"},label:{type:String},color:{type:[String,Function],default:"primary"},size:{type:String,values:ie,default:"large"},cs:{type:[String,Array,Object]},error:{type:Boolean,default:!1},supportingText:{type:String}}),Xs=t=>{const e=k`
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
        font-size: 16px;
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
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
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
      & .fn-text-field__label::after {
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
  `,n=k`
    border-radius: var(--md-sys-shape-corner-extra-small-default-size);
    & .fn-text-field--border {
      border-width: 1px;
      border-color: var(--md-sys-color-outline);
      border-radius: inherit;
      inset: -5px 0 0;
      height: auto;
      padding: 0 8px;
      & > legend {
        float: unset;
        width: auto;
        overflow: hidden;
        display: block;
        padding: 0;
        height: 11px;
        font-size: 0.75rem;
        visibility: hidden;
        max-width: 0;
        transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms,
          padding 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
        white-space: nowrap;
        position: relative;
        left: -0.1em;
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
        transform: translate(17px, -50%) scale(0.75);
      }
      & legend {
        max-width: 100%;
        padding: 0 8px;
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
  `,o=k`
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
            10px,
            var(--fn-text-fiedl-filled-standard-label-translateY)
          )
          scale(0.75);
        padding: 0 8px;
      }
    }
    & .fn-text-field--input-wrapper {
      > .fn-text-field--start-adornment {
        padding-bottom: 8px;
        padding-top: calc(var(--fn-text-field-height) - 32px);
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
  `,r=k`
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
        padding-bottom: 8px;
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
  `,s=k`
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
  `,a=k`
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
  `,l=k`
    --fn-text-field-height: 56px;
    --fn-text-fiedl-filled-standard-label-translateY: 10%;
  `,c=k`
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
  `;return m(()=>{const p=t.error?W(t,null,"var(--md-sys-color-error)"):W(t,"color","var(--md-sys-color-primary)"),h=t.cs?k(t.cs):"";return Y(k({"--fn-text-field-color":p.value}),e,{[n]:t.variant==="outlined"},{[o]:t.variant==="filled"},{[r]:t.variant==="standard"},{[s]:t.size==="small"},{[a]:t.size==="medium"},{[l]:t.size==="large"},{[c]:t.error},h)})},Zs=Xs,Qs=w({__name:"index",props:qs,emits:["update:modelValue"],setup(t,{emit:e}){const n=t,o=Yt(),r=en(),s=H("text-field"),a=Zs(n),l=m({get(){return n.modelValue},set(d){e(re,d)}}),c=()=>(Math.random()+1).toString(36).substring(7),p=o!=null&&o.id?o.id:`text-field-${c()}`,h=m(()=>(n==null?void 0:n.label)??""),g=m(()=>{var y;const d=(y=r==null?void 0:r.startAdornment)==null?void 0:y.call(r);return!Ln(n.modelValue)||!!d});return(d,y)=>(f(),v("div",{class:x([i(s).b(),i(s).m(n.variant),i(s).m(n.size),i(g)?i(s).m("content-within"):"",i(a)])},[n!=null&&n.label?(f(),S(i(he),{key:0,component:"label",class:x([i(s).e("label")]),color:"rgb(var(--md-sys-color-on-surface-rgb) / 0.6);","no-warp":""},{default:$(()=>[Z(C(i(h)),1)]),_:1},8,["class"])):I("",!0),u("div",{class:x([i(s).m("input-wrapper")])},[T(d.$slots,"startAdornment",ne(oe({class:[i(s).m("start-adornment")],color:"onSurfaceVariant"}))),F(i(Se),j({id:i(p)},d.$attrs,{modelValue:i(l),"onUpdate:modelValue":y[0]||(y[0]=_=>be(l)?l.value=_:null),class:[i(s).e("input")],type:"text"}),null,16,["id","modelValue","class"]),T(d.$slots,"endAdornment",ne(oe({class:[i(s).m("end-adornment")],color:"onSurfaceVariant"}))),d.$props.variant==="outlined"?(f(),v("fieldset",{key:0,class:x([i(s).m("border")])},[F(i(he),{component:"legend","no-warp":""},{default:$(()=>[Z(C(i(h)),1)]),_:1})],2)):(f(),v("span",{key:1,class:x([i(s).m("border")])},null,2))],2),n!=null&&n.supportingText?(f(),S(i(he),{key:1,class:x([i(s).m("supporting-text")]),variant:"body.small","no-warp":""},{default:$(()=>[Z(C(n.supportingText),1)]),_:1},8,["class"])):I("",!0)],2))}}),jt=R(Qs,"FnTextField");jt.name="FnTextField";const Ks=jt,Ut=R(ce,"FnSvgIcon");Ut.name="FnSvgIcon";const Js=Ut,Ys=[De,Po,je,Wo,Zo,Yo,fr,wr,Se,Dr,ns,En,ds,Gr,bs,bt,hs,Ts,As,Os,Le,Ds,Ws,he,Vn,Ks,Js],ea={install(t){Ys.forEach(e=>{t.component(e.name,e)})}},ta=ea;const na={github:{type:String,default:"https://github.com/tsinghua-lau/fusion-ui"},codeSandBox:{type:String,default:"https://codesandbox.io/"},highlightedCode:{type:String,default:""},code:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},lang:{type:String,default:"vue"},expand:{type:Boolean,default:!1}},oa={class:"o-demo_wrapper vp-raw bg"},ra={class:"relative"},sa={class:"o-demo_actions"},aa=["href"],ia=u("div",{class:"o-demo_action_icon i-carbon:chemistry"},null,-1),la=u("div",{class:"o-demo_tooltip","group-hover:opacity-100":""}," Open on Playground(WIP) ",-1),ca=[ia,la],ua=["href"],da=u("div",{class:"o-demo_action_icon i-carbon-logo-github"},null,-1),fa=u("div",{class:"o-demo_tooltip","group-hover:opacity-100":""}," Edit on GitHub ",-1),pa=[da,fa],ha=u("div",{class:"o-demo_action_icon i-carbon:copy"},null,-1),ma={class:"o-demo_tooltip","group-hover:opacity-100":""},ga=u("div",{class:"o-demo_action_icon i-carbon:fit-to-width"},null,-1),ba={class:"o-demo_tooltip","group-hover:opacity-100":""},va=["innerHTML"],ya=w({__name:"index",props:na,setup(t){const e=t,n=m(()=>decodeURIComponent(e.highlightedCode)),{copy:o,copied:r}=Kn({source:decodeURIComponent(e.code)}),[s,a]=Fn();return(l,c)=>{const p=G("ClientOnly");return f(),S(p,null,{default:$(()=>[u("div",j(l.$attrs,{class:"mt-6"}),[u("div",oa,[T(l.$slots,"default")]),u("div",ra,[u("div",sa,[u("a",{class:"o-demo_action_item",group:"",href:l.codeSandBox,target:"_blank"},ca,8,aa),u("a",{class:"o-demo_action_item",group:"",href:l.github,target:"_blank"},pa,8,ua),u("a",{class:"o-demo_action_item",group:"",onClick:c[0]||(c[0]=h=>i(o)())},[ha,u("div",ma,C(i(r)?"Copied":"Copy code"),1)]),u("a",{class:"o-demo_action_item",group:"",onClick:c[1]||(c[1]=h=>i(a)())},[ga,u("div",ba,C(i(s)?"Hidden code":"Show code"),1)])]),L(u("div",{class:x(`language-${l.lang} extra-class`),innerHTML:i(n)},null,10,va),[[U,i(s)]])])],16)]),_:3})}}}),_a=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"类型",scope:{customRender:"type"},width:"240"},{label:"默认值",scope:{customRender:"default"}}],xa=[{label:"name",scope:{customRender:"name"},width:"140"},{label:"description",scope:{customRender:"remark"}},{label:"type",scope:{customRender:"type"},width:"240"},{label:"default",scope:{customRender:"default"}}],wa=[{label:"事件名",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"类型",scope:{customRender:"type"}}],$a=[{label:"Name",scope:{customRender:"name"},width:"140"},{label:"Description",scope:{customRender:"remark"}},{label:"Type",scope:{customRender:"type"}}],ka=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}},{label:"参数",scope:{customRender:"params"}},{label:"返回值",scope:{customRender:"returns"}}],Sa=[{label:"名称",scope:{customRender:"name"},width:"140"},{label:"说明",scope:{customRender:"remark"}}],Ca=[{label:"name",scope:{customRender:"name"},width:"140"},{label:"description",scope:{customRender:"remark"}}],Fa={propsZh:_a,propsEn:xa,eventsZh:wa,eventsEn:$a,methods:ka,slotsZh:Sa,slotsEn:Ca},Ta={mounted(t,e){let n=!1;function o(r){if(t.contains(r.target))return!1;!n&&e.value&&typeof e.value=="function"&&(e.value(r),n=!0)}t.__click_outside__=o,document.addEventListener("click",o)},beforeUnmount(t){document.removeEventListener("click",t.__click_outside__),delete t.__click_outside__}},Ra={class:"table-block"},za={class:"name-area"},Aa={class:"name-area-inner"},Ba={class:"remark-area"},Ma={class:"remark-area-inner"},Ia={class:"default-area"},Ha={class:"default-area-inner"},Oa={class:"params-area"},Pa={class:"params-area-inner"},Ea={class:"returns-area"},La={class:"returns-area-inner"},Va={class:"type-area"},Da={key:1,class:"type-area-inner"},Na=["onClick"],ja={key:0,class:"optional-area"},Ua=w({__name:"index",props:{type:{type:String,default:"props"},src:{type:String,default:""},data:{type:Array,default:()=>[]}},setup(t){const e=t,n=z([]),o=s=>{for(let a=0;a<n.value.length;a++)n.value[a].name!==s.name&&(n.value[a].showTip=!1);setTimeout(()=>{s.showTip=!s.showTip},0)},r=s=>{s.showTip=!1};return J(()=>e.data,()=>{n.value=e.data},{immediate:!0,deep:!0}),(s,a)=>{const l=G("bp-table");return f(),v("div",Ra,[F(l,{cols:i(Fa)[t.type],"data-source":n.value},{name:$(({row:c})=>[u("div",za,[u("span",Aa,C(c.name||"-"),1)])]),remark:$(({row:c})=>[u("div",Ba,[u("span",Ma,C(c.remark||"-"),1)])]),default:$(({row:c})=>[u("div",Ia,[u("span",Ha,C(c.default||"-"),1)])]),params:$(({row:c})=>[u("div",Oa,[u("span",Pa,C(c.params||"-"),1)])]),returns:$(({row:c})=>[u("div",Ea,[u("span",La,C(c.returns||"-"),1)])]),type:$(({row:c})=>[L((f(),v("div",Va,[typeof c.type=="object"?(f(!0),v(te,{key:0},me(c.type,(p,h)=>(f(),v("span",{key:h,class:"type-area-inner"},C(p),1))),128)):(f(),v("span",Da,C(c.type||"-"),1)),c.type==="Enum"||c.type.includes("Enum")?(f(),v("span",{key:2,class:x(["ri-error-warning-fill",[{active:c.showTip}]]),onClick:p=>o(c)},"!",10,Na)):I("",!0),F(ge,null,{default:$(()=>[c.showTip?(f(),v("div",ja,[u("span",null,C(c.optional.join(" | ")),1)])):I("",!0)]),_:2},1024)])),[[i(Ta),()=>r(c)]])]),_:1},8,["cols","data-source"])])}}}),Wa={class:"content"},Ga={class:"content-container"},qa={class:"main"},Xa=u("div",{class:"vp-doc",flex:"","flex-col":"","items-center":"","mt-10":""},[u("h2",{id:"meet-the-team",op50:"","font-normal":"",p:"t-10 b-2"}," 贡献者 ")],-1),Za={"p-10":""},ct=w({__name:"index",setup(t){const e=[{avatar:"https://www.github.com/tsinghua-lau.png",name:"tsinghua-lau",title:"ikun",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/tsinghua-lau"}]},{avatar:"https://www.github.com/sxiong5.png",name:"sxiong5",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/sxiong5"}]},{avatar:"https://www.github.com/windlil.png",name:"windlil",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/windlil"}]},{avatar:"https://www.github.com/kit-AB.png",name:"kit-AB",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/kit-AB"}]},{avatar:"https://www.github.com/Losonn.png",name:"Losonn",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/Losonn"}]},{avatar:"https://www.github.com/li-junpeng.png",name:"li-junpeng",title:"An open source developer",desc:"Team member of FusionUi",links:[{icon:"github",link:"https://github.com/li-junpeng"}]}];return(n,o)=>(f(),v("div",Wa,[u("div",Ga,[u("main",qa,[Xa,u("div",Za,[F(i(_n),{size:"small",members:e})])])])]))}}),Qa=(t,e)=>{let n,o;return e=e||200,function(){const r=arguments,s=Date.now();n&&s-n<e?(clearTimeout(o),o=setTimeout(function(){n=s,t.apply(this,r)},e)):(n=s,t.apply(this,r))}},Ka=function(t,e,n,o=!1){t&&e&&n&&t.addEventListener(e,n,o)},Ja=function(t,e,n,o=!1){t&&e&&n&&t.removeEventListener(e,n,o)},Ya=t=>{const e=z(null),n=z([]),o=z("");let r=0,s=0,a=[],l=[];const c=80,p=()=>{const d=e.value,{cols:y}=t;if(!(y.length===0||y.length>99)){s=0,r=y.length,a=[];for(let _=0;_<y.length;_++){const{width:O,minWidth:P}=y[_];O&&(s+=Number(O),r--),P&&a.push(P)}o.value=d&&d.offsetWidth-6,l=h()||[],n.value=[];for(let _=0;_<y.length;_++)n.value.push({...t.cols[_],width:l[_]});return n.value}};function h(){const{cols:d}=t,y=[];let _=g();a.length&&a.forEach((O,P)=>{_>O&&(s+=O,r--,a.splice(P,1),_=g())});for(let O=0;O<d.length;O++){const{width:P,minWidth:ue}=d[O];if(P){y.push(P);continue}if(ue&&ue>_){y.push(ue);continue}y.push(_<c?c:_)}return y}function g(){const d=(o.value-s)/r;return Number(d).toFixed(2)}return J(()=>t.cols,()=>{p()}),se(()=>{tn(()=>{p(),Ka(window,"resize",Qa(()=>p(),400))})}),nn(()=>Ja(window,"resize",()=>p())),{initColumns:p,bpTable:e,_table_width:o,columns:n}},ei=["name","width"],Wt=w({__name:"col-group",props:{cols:{type:Array,default:()=>[]}},setup(t){return(e,n)=>(f(),v("colgroup",null,[(f(!0),v(te,null,me(t.cols,(o,r)=>(f(),v("col",{key:`bp-table-tr-${r}`,name:`bp_table_tr_${r}`,width:`${o.width}px`},null,8,ei))),128))]))}}),ti={class:"bp-table-header-thead"},ni=w({__name:"table-header",props:{headerList:{type:Array,default:()=>[]},width:{type:[String,Number],default:""}},setup(t){const e=n=>[`text-${n.headerAlign||n.align||"left"}`];return(n,o)=>(f(),v("table",{class:"bp-table-header",style:V(`width:${t.width}px`)},[F(Wt,{cols:t.headerList},null,8,["cols"]),u("thead",ti,[u("tr",null,[(f(!0),v(te,null,me(t.headerList,(r,s)=>(f(),v("th",{key:`bp-table-thead-${s}`,class:x(e(r))},C(r.label),3))),128))])])],4))}}),oi={class:"bp-table-empty-tr"},ri=["colspan"],si=w({__name:"empty",props:{colspan:{type:Number,default:0}},setup(t){return(e,n)=>(f(),v("tr",oi,[u("td",{colspan:t.colspan}," 暂无数据 ",8,ri)]))}}),ai=u("div",{class:"scrollbar"},null,-1),ii={class:"bp-table-body-tbody"},li=w({__name:"table",props:{cols:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]},height:{type:String,default:""},loading:{type:Boolean,default:!1},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1}},setup(t){const e=t,{bpTable:n,columns:o,_table_width:r}=Ya(e),s=m(()=>e.dataSource.length===0),a=m(()=>e.border),l=m(()=>e.stripe),c=m(()=>e.height),p=m(()=>e.height?`width:${r.value}px;max-height:${e.height}px;height:${e.height}px;overflow-y:auto`:`width:${r.value}px`),h=m(()=>["bp-table-inner",{"bp-table-border":a.value},{"bp-table-stripe":l.value},{"bp-table-fixed-header":c.value}]),g=d=>[`text-${d.align||"left"}`];return(d,y)=>(f(),v("div",{ref_key:"bpTable",ref:n,class:"bp-table"},[u("div",{class:x(i(h))},[F(ni,{"header-list":i(o),width:i(r)},null,8,["header-list","width"]),u("div",{class:"bp-table-body-area",style:V(i(p))},[ai,u("table",{class:"bp-table-body",style:V(`width:${i(r)}px`)},[F(Wt,{cols:i(o)},null,8,["cols"]),u("tbody",ii,[i(s)?(f(),S(si,{key:0,colspan:i(o).length},null,8,["colspan"])):(f(!0),v(te,{key:1},me(t.dataSource,(_,O)=>(f(),v("tr",{key:`bp-table-tbody-tr-${O}`},[(f(!0),v(te,null,me(i(o),(P,ue)=>(f(),v("td",{key:`bp-table-tbody-td-${O}-${ue}`,class:x(g(P))},[P.scope?T(d.$slots,P.scope.customRender,{key:1,row:_,index:O,data:_[P.key]}):(f(),v(te,{key:0},[Z(C(_[P.key]),1)],64))],2))),128))]))),128))])],4)],4)],2)],512))}});const ci={...Ge,setup(){se(()=>{Xn();const t=document.documentElement,e=()=>{t.classList.contains("dark")?t.setAttribute("data-theme","dark"):t.removeAttribute("data-theme")};e();const n=new MutationObserver(()=>{e(),n.takeRecords()});n.observe(t,{attributes:!0,childList:!1,subtree:!1})})},enhanceApp({app:t}){t.use(ta),t.component("Demo",ya),t.component("BpTable",li),t.component("TableBlock",Ua),t.component("TeamMember",ct)},Layout(){return xe(Ge.Layout,null,{"home-features-after":()=>xe(ct)})}};function Gt(t){if(t.extends){const e=Gt(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const ae=Gt(ci),ui=w({name:"VitePressApp",setup(){const{site:t}=rn();return se(()=>{sn(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),an(),ln(),cn(),ae.setup&&ae.setup(),()=>xe(ae.Layout)}});async function di(){const t=pi(),e=fi();e.provide(un,t);const n=dn(t.route);return e.provide(fn,n),e.component("Content",pn),e.component("ClientOnly",hn),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),ae.enhanceApp&&await ae.enhanceApp({app:e,router:t,siteData:mn}),{app:e,router:t,data:n}}function fi(){return gn(ui)}function pi(){let t=Re,e;return bn(n=>{let o=vn(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),Re&&(t=!1),yn(()=>import(o),[])},ae.NotFound)}Re&&di().then(({app:t,router:e,data:n})=>{e.go().then(()=>{on(e.route,n.site),t.mount("#app")})});export{di as createApp};
