import{H as h}from"./use-theme.7c45fed0.js";/**
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
 */class n{static fromInt(t){const r=h.fromInt(t);return n.fromHct(r)}static fromHct(t){return new n(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){return new n(t,r,n.createKeyColor(t,r))}constructor(t,r,e){this.hue=t,this.chroma=r,this.keyColor=e,this.cache=new Map}static createKeyColor(t,r){let a=h.from(t,r,50),s=Math.abs(a.chroma-r);for(let m=1;m<50;m+=1){if(Math.round(r)===Math.round(a.chroma))return a;const i=h.from(t,r,50+m),c=Math.abs(i.chroma-r);c<s&&(s=c,a=i);const f=h.from(t,r,50-m),u=Math.abs(f.chroma-r);u<s&&(s=u,a=f)}return a}tone(t){let r=this.cache.get(t);return r===void 0&&(r=h.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return h.fromInt(this.tone(t))}}/**
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
 */class o{static of(t){return new o(t,!1)}static contentOf(t){return new o(t,!0)}static fromColors(t){return o.createPaletteFromColors(!1,t)}static contentFromColors(t){return o.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,r){const e=new o(r.primary,t);if(r.secondary){const a=new o(r.secondary,t);e.a2=a.a1}if(r.tertiary){const a=new o(r.tertiary,t);e.a3=a.a1}if(r.error){const a=new o(r.error,t);e.error=a.a1}if(r.neutral){const a=new o(r.neutral,t);e.n1=a.n1}if(r.neutralVariant){const a=new o(r.neutralVariant,t);e.n2=a.n2}return e}constructor(t,r){const e=h.fromInt(t),a=e.hue,s=e.chroma;r?(this.a1=n.fromHueAndChroma(a,s),this.a2=n.fromHueAndChroma(a,s/3),this.a3=n.fromHueAndChroma(a+60,s/2),this.n1=n.fromHueAndChroma(a,Math.min(s/12,4)),this.n2=n.fromHueAndChroma(a,Math.min(s/6,8))):(this.a1=n.fromHueAndChroma(a,Math.max(48,s)),this.a2=n.fromHueAndChroma(a,16),this.a3=n.fromHueAndChroma(a+60,24),this.n1=n.fromHueAndChroma(a,4),this.n2=n.fromHueAndChroma(a,8)),this.error=n.fromHueAndChroma(25,84)}}export{o as C};
