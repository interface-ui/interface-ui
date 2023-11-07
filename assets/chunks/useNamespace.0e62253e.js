import{H as $,u as b,b as x,h as I}from"./emotion-css.esm.c63cfe69.js";import{f as g,e as w,a9 as N,aa as V,ab as F,S as O,b as B}from"./framework.8c39f4f9.js";/**
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
 */class i{static fromInt(e){const t=$.fromInt(e);return i.fromHct(t)}static fromHct(e){return new i(e.hue,e.chroma,e)}static fromHueAndChroma(e,t){return new i(e,t,i.createKeyColor(e,t))}constructor(e,t,a){this.hue=e,this.chroma=t,this.keyColor=a,this.cache=new Map}static createKeyColor(e,t){let s=$.from(e,t,50),c=Math.abs(s.chroma-t);for(let f=1;f<50;f+=1){if(Math.round(t)===Math.round(s.chroma))return s;const h=$.from(e,t,50+f),y=Math.abs(h.chroma-t);y<c&&(c=y,s=h);const d=$.from(e,t,50-f),m=Math.abs(d.chroma-t);m<c&&(c=m,s=d)}return s}tone(e){let t=this.cache.get(e);return t===void 0&&(t=$.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,t)),t}getHct(e){return $.fromInt(this.tone(e))}}/**
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
 */class l{static of(e){return new l(e,!1)}static contentOf(e){return new l(e,!0)}static fromColors(e){return l.createPaletteFromColors(!1,e)}static contentFromColors(e){return l.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,t){const a=new l(t.primary,e);if(t.secondary){const s=new l(t.secondary,e);a.a2=s.a1}if(t.tertiary){const s=new l(t.tertiary,e);a.a3=s.a1}if(t.error){const s=new l(t.error,e);a.error=s.a1}if(t.neutral){const s=new l(t.neutral,e);a.n1=s.n1}if(t.neutralVariant){const s=new l(t.neutralVariant,e);a.n2=s.n2}return a}constructor(e,t){const a=$.fromInt(e),s=a.hue,c=a.chroma;t?(this.a1=i.fromHueAndChroma(s,c),this.a2=i.fromHueAndChroma(s,c/3),this.a3=i.fromHueAndChroma(s+60,c/2),this.n1=i.fromHueAndChroma(s,Math.min(c/12,4)),this.n2=i.fromHueAndChroma(s,Math.min(c/6,8))):(this.a1=i.fromHueAndChroma(s,Math.max(48,c)),this.a2=i.fromHueAndChroma(s,16),this.a3=i.fromHueAndChroma(s+60,24),this.n1=i.fromHueAndChroma(s,4),this.n2=i.fromHueAndChroma(s,8)),this.error=i.fromHueAndChroma(25,84)}}const K=(r,e,t)=>w(()=>{const a=r==null?void 0:r[e];return typeof a=="function"?a(t.value):a in t.value.schemes?`var(--md-sys-color-${a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()})`:a}),D=(r,e,t)=>w(()=>{const a=r==null?void 0:r[e];let s;if(typeof a=="function")s=a(t.value);else if(a in t.value.schemes){const h=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return a.startsWith("on")?`var(--md-sys-color-${h})`:`var(--md-sys-color-on-${h})`}else if(a.startsWith("#"))s=a;else return a;const c=l.of(x(s)).a1,f=t.value.mode==="dark"?c.tone(20):c.tone(100);return I(f)}),R=(r,e)=>{const t=b();if(!e||!(e in r)||!["string","function"].includes(typeof r[e]))return[g(null),g(null)];const a=K(r,e,t),s=D(r,e,t);return[a,s]};function U(r,e){return r.install=t=>{t.component(e,r)},r}const X=(r,e)=>(r.install=t=>{r._context=t._context,t.config.globalProperties[e]=r},r);function S(r){for(var e=-1,t=r==null?0:r.length,a={};++e<t;){var s=r[e];a[s[0]]=s[1]}return a}const M="__epPropKey",Y=r=>r,T=r=>N(r)&&!!r[M],q=(r,e)=>{if(!N(r)||T(r))return r;const{values:t,required:a,default:s,type:c,validator:f}=r,y={type:c,required:!!a,validator:t||f?d=>{let m=!1,C=[];if(t&&(C=Array.from(t),V(r,"default")&&C.push(s),m||(m=C.includes(d))),f&&(m||(m=f(d))),!m&&C.length>0){const H=[...new Set(C)].map(A=>JSON.stringify(A)).join(", ");F(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${H}], got value ${JSON.stringify(d)}.`)}return m}:void 0,[M]:!0};return V(r,"default")&&(y.default=s),y},j=r=>S(Object.entries(r).map(([e,t])=>[e,q(t,e)])),p="fn",z="is-",v=(r,e,t,a,s)=>{let c=`${r}-${e}`;return t&&(c+=`-${t}`),a&&(c+=`__${a}`),s&&(c+=`--${s}`),c},E=Symbol("namespaceContextKey"),J=r=>{const e=r||O(E,g(p));return w(()=>B(e)||p)},_=(r,e)=>{const t=J(e);return{namespace:t,b:(n="")=>v(t.value,r,n,"",""),e:n=>n?v(t.value,r,"",n,""):"",m:n=>n?v(t.value,r,"","",n):"",be:(n,o)=>n&&o?v(t.value,r,n,o,""):"",em:(n,o)=>n&&o?v(t.value,r,"",n,o):"",bm:(n,o)=>n&&o?v(t.value,r,n,"",o):"",bem:(n,o,u)=>n&&o&&u?v(t.value,r,n,o,u):"",is:(n,...o)=>{const u=o.length>=1?o[0]:!0;return n&&u?`${z}${n}`:""},cssVar:n=>{const o={};for(const u in n)n[u]&&(o[`--${t.value}-${u}`]=n[u]);return o},cssStyle:n=>{const o={};for(const u in n)n[u]&&(o[`${u}`]=n[u]);return o},cssVarName:n=>`--${t.value}-${n}`,cssVarBlock:n=>{const o={};for(const u in n)n[u]&&(o[`--${t.value}-${r}-${u}`]=n[u]);return o},cssVarBlockName:n=>`--${t.value}-${r}-${n}`,getCssVar:n=>`var(--${t.value}-${n})`,getCssVarBlock:(n,o=r)=>`var(--${t.value}-${o}-${n})`}};export{l as C,_ as a,j as b,X as c,Y as d,R as u,U as w};
