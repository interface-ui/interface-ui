import{e as _,j as bt,k as vt,f as M,b as d,g as at,h as P,i as yt,w as mt,a5 as it,d as L,a6 as wt,l as xt,v as St,o as y,c as k,F as Mt,M as kt,X as H,D as _t,C as Ot,A as B,x as $,r as Rt,y as st,n as ot,a7 as At,z as Tt,a3 as It,a as Ht,t as Bt,a4 as Ft,T as Et,a8 as Nt,a9 as $t,aa as D}from"./framework.210bbf33.js";function ft(t,n){return t.install=e=>{e.component(n,t)},t}const Ct=(t,n)=>(t.install=e=>{t._context=e._context,e.config.globalProperties[n]=t},t);function u(t,n){Pt(t)&&(t="100%");var e=Lt(t);return t=n===360?t:Math.min(n,Math.max(0,parseFloat(t))),e&&(t=parseInt(String(t*n),10)/100),Math.abs(t-n)<1e-6?1:(n===360?t=(t<0?t%n+n:t%n)/parseFloat(String(n)):t=t%n/parseFloat(String(n)),t)}function A(t){return Math.min(1,Math.max(0,t))}function Pt(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Lt(t){return typeof t=="string"&&t.indexOf("%")!==-1}function ut(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function T(t){return t<=1?"".concat(Number(t)*100,"%"):t}function S(t){return t.length===1?"0"+t:String(t)}function zt(t,n,e){return{r:u(t,255)*255,g:u(n,255)*255,b:u(e,255)*255}}function U(t,n,e){t=u(t,255),n=u(n,255),e=u(e,255);var r=Math.max(t,n,e),a=Math.min(t,n,e),i=0,s=0,o=(r+a)/2;if(r===a)s=0,i=0;else{var f=r-a;switch(s=o>.5?f/(2-r-a):f/(r+a),r){case t:i=(n-e)/f+(n<e?6:0);break;case n:i=(e-t)/f+2;break;case e:i=(t-n)/f+4;break}i/=6}return{h:i,s,l:o}}function F(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+(n-t)*(6*e):e<1/2?n:e<2/3?t+(n-t)*(2/3-e)*6:t}function jt(t,n,e){var r,a,i;if(t=u(t,360),n=u(n,100),e=u(e,100),n===0)a=e,i=e,r=e;else{var s=e<.5?e*(1+n):e+n-e*n,o=2*e-s;r=F(o,s,t+1/3),a=F(o,s,t),i=F(o,s,t-1/3)}return{r:r*255,g:a*255,b:i*255}}function G(t,n,e){t=u(t,255),n=u(n,255),e=u(e,255);var r=Math.max(t,n,e),a=Math.min(t,n,e),i=0,s=r,o=r-a,f=r===0?0:o/r;if(r===a)i=0;else{switch(r){case t:i=(n-e)/o+(n<e?6:0);break;case n:i=(e-t)/o+2;break;case e:i=(t-n)/o+4;break}i/=6}return{h:i,s:f,v:s}}function Wt(t,n,e){t=u(t,360)*6,n=u(n,100),e=u(e,100);var r=Math.floor(t),a=t-r,i=e*(1-n),s=e*(1-a*n),o=e*(1-(1-a)*n),f=r%6,g=[e,s,i,i,o,e][f],p=[o,e,e,s,i,i][f],c=[i,i,o,e,e,s][f];return{r:g*255,g:p*255,b:c*255}}function Q(t,n,e,r){var a=[S(Math.round(t).toString(16)),S(Math.round(n).toString(16)),S(Math.round(e).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function qt(t,n,e,r,a){var i=[S(Math.round(t).toString(16)),S(Math.round(n).toString(16)),S(Math.round(e).toString(16)),S(Dt(r))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Dt(t){return Math.round(parseFloat(t)*255).toString(16)}function V(t){return h(t)/255}function h(t){return parseInt(t,16)}function Ut(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var C={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gt(t){var n={r:0,g:0,b:0},e=1,r=null,a=null,i=null,s=!1,o=!1;return typeof t=="string"&&(t=Xt(t)),typeof t=="object"&&(v(t.r)&&v(t.g)&&v(t.b)?(n=zt(t.r,t.g,t.b),s=!0,o=String(t.r).substr(-1)==="%"?"prgb":"rgb"):v(t.h)&&v(t.s)&&v(t.v)?(r=T(t.s),a=T(t.v),n=Wt(t.h,r,a),s=!0,o="hsv"):v(t.h)&&v(t.s)&&v(t.l)&&(r=T(t.s),i=T(t.l),n=jt(t.h,r,i),s=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(e=t.a)),e=ut(e),{ok:s,format:t.format||o,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:e}}var Qt="[-\\+]?\\d+%?",Vt="[-\\+]?\\d*\\.\\d+%?",w="(?:".concat(Vt,")|(?:").concat(Qt,")"),E="[\\s|\\(]+(".concat(w,")[,|\\s]+(").concat(w,")[,|\\s]+(").concat(w,")\\s*\\)?"),N="[\\s|\\(]+(".concat(w,")[,|\\s]+(").concat(w,")[,|\\s]+(").concat(w,")[,|\\s]+(").concat(w,")\\s*\\)?"),b={CSS_UNIT:new RegExp(w),rgb:new RegExp("rgb"+E),rgba:new RegExp("rgba"+N),hsl:new RegExp("hsl"+E),hsla:new RegExp("hsla"+N),hsv:new RegExp("hsv"+E),hsva:new RegExp("hsva"+N),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Xt(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var n=!1;if(C[t])t=C[t],n=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e=b.rgb.exec(t);return e?{r:e[1],g:e[2],b:e[3]}:(e=b.rgba.exec(t),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=b.hsl.exec(t),e?{h:e[1],s:e[2],l:e[3]}:(e=b.hsla.exec(t),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=b.hsv.exec(t),e?{h:e[1],s:e[2],v:e[3]}:(e=b.hsva.exec(t),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=b.hex8.exec(t),e?{r:h(e[1]),g:h(e[2]),b:h(e[3]),a:V(e[4]),format:n?"name":"hex8"}:(e=b.hex6.exec(t),e?{r:h(e[1]),g:h(e[2]),b:h(e[3]),format:n?"name":"hex"}:(e=b.hex4.exec(t),e?{r:h(e[1]+e[1]),g:h(e[2]+e[2]),b:h(e[3]+e[3]),a:V(e[4]+e[4]),format:n?"name":"hex8"}:(e=b.hex3.exec(t),e?{r:h(e[1]+e[1]),g:h(e[2]+e[2]),b:h(e[3]+e[3]),format:n?"name":"hex"}:!1)))))))))}function v(t){return!!b.CSS_UNIT.exec(String(t))}var ct=function(){function t(n,e){n===void 0&&(n=""),e===void 0&&(e={});var r;if(n instanceof t)return n;typeof n=="number"&&(n=Ut(n)),this.originalInput=n;var a=Gt(n);this.originalInput=n,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=e.format)!==null&&r!==void 0?r:a.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},t.prototype.getLuminance=function(){var n=this.toRgb(),e,r,a,i=n.r/255,s=n.g/255,o=n.b/255;return i<=.03928?e=i/12.92:e=Math.pow((i+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),.2126*e+.7152*r+.0722*a},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(n){return this.a=ut(n),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var n=this.toHsl().s;return n===0},t.prototype.toHsv=function(){var n=G(this.r,this.g,this.b);return{h:n.h*360,s:n.s,v:n.v,a:this.a}},t.prototype.toHsvString=function(){var n=G(this.r,this.g,this.b),e=Math.round(n.h*360),r=Math.round(n.s*100),a=Math.round(n.v*100);return this.a===1?"hsv(".concat(e,", ").concat(r,"%, ").concat(a,"%)"):"hsva(".concat(e,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var n=U(this.r,this.g,this.b);return{h:n.h*360,s:n.s,l:n.l,a:this.a}},t.prototype.toHslString=function(){var n=U(this.r,this.g,this.b),e=Math.round(n.h*360),r=Math.round(n.s*100),a=Math.round(n.l*100);return this.a===1?"hsl(".concat(e,", ").concat(r,"%, ").concat(a,"%)"):"hsla(".concat(e,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(n){return n===void 0&&(n=!1),Q(this.r,this.g,this.b,n)},t.prototype.toHexString=function(n){return n===void 0&&(n=!1),"#"+this.toHex(n)},t.prototype.toHex8=function(n){return n===void 0&&(n=!1),qt(this.r,this.g,this.b,this.a,n)},t.prototype.toHex8String=function(n){return n===void 0&&(n=!1),"#"+this.toHex8(n)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var n=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(n,", ").concat(e,", ").concat(r,")"):"rgba(".concat(n,", ").concat(e,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var n=function(e){return"".concat(Math.round(u(e,255)*100),"%")};return{r:n(this.r),g:n(this.g),b:n(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var n=function(e){return Math.round(u(e,255)*100)};return this.a===1?"rgb(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%)"):"rgba(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var n="#"+Q(this.r,this.g,this.b,!1),e=0,r=Object.entries(C);e<r.length;e++){var a=r[e],i=a[0],s=a[1];if(n===s)return i}return!1},t.prototype.toString=function(n){var e=!!n;n=n??this.format;var r=!1,a=this.a<1&&this.a>=0,i=!e&&a&&(n.startsWith("hex")||n==="name");return i?n==="name"&&this.a===0?this.toName():this.toRgbString():(n==="rgb"&&(r=this.toRgbString()),n==="prgb"&&(r=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(r=this.toHexString()),n==="hex3"&&(r=this.toHexString(!0)),n==="hex4"&&(r=this.toHex8String(!0)),n==="hex8"&&(r=this.toHex8String()),n==="name"&&(r=this.toName()),n==="hsl"&&(r=this.toHslString()),n==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(n){n===void 0&&(n=10);var e=this.toHsl();return e.l+=n/100,e.l=A(e.l),new t(e)},t.prototype.brighten=function(n){n===void 0&&(n=10);var e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(n/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(n/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(n/100)))),new t(e)},t.prototype.darken=function(n){n===void 0&&(n=10);var e=this.toHsl();return e.l-=n/100,e.l=A(e.l),new t(e)},t.prototype.tint=function(n){return n===void 0&&(n=10),this.mix("white",n)},t.prototype.shade=function(n){return n===void 0&&(n=10),this.mix("black",n)},t.prototype.desaturate=function(n){n===void 0&&(n=10);var e=this.toHsl();return e.s-=n/100,e.s=A(e.s),new t(e)},t.prototype.saturate=function(n){n===void 0&&(n=10);var e=this.toHsl();return e.s+=n/100,e.s=A(e.s),new t(e)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(n){var e=this.toHsl(),r=(e.h+n)%360;return e.h=r<0?360+r:r,new t(e)},t.prototype.mix=function(n,e){e===void 0&&(e=50);var r=this.toRgb(),a=new t(n).toRgb(),i=e/100,s={r:(a.r-r.r)*i+r.r,g:(a.g-r.g)*i+r.g,b:(a.b-r.b)*i+r.b,a:(a.a-r.a)*i+r.a};return new t(s)},t.prototype.analogous=function(n,e){n===void 0&&(n=6),e===void 0&&(e=30);var r=this.toHsl(),a=360/e,i=[this];for(r.h=(r.h-(a*n>>1)+720)%360;--n;)r.h=(r.h+a)%360,i.push(new t(r));return i},t.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new t(n)},t.prototype.monochromatic=function(n){n===void 0&&(n=6);for(var e=this.toHsv(),r=e.h,a=e.s,i=e.v,s=[],o=1/n;n--;)s.push(new t({h:r,s:a,v:i})),i=(i+o)%1;return s},t.prototype.splitcomplement=function(){var n=this.toHsl(),e=n.h;return[this,new t({h:(e+72)%360,s:n.s,l:n.l}),new t({h:(e+216)%360,s:n.s,l:n.l})]},t.prototype.onBackground=function(n){var e=this.toRgb(),r=new t(n).toRgb();return new t({r:r.r+(e.r-r.r)*e.a,g:r.g+(e.g-r.g)*e.a,b:r.b+(e.b-r.b)*e.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(n){for(var e=this.toHsl(),r=e.h,a=[this],i=360/n,s=1;s<n;s++)a.push(new t({h:(r+s*i)%360,s:e.s,l:e.l}));return a},t.prototype.equals=function(n){return this.toRgbString()===new t(n).toRgbString()},t}();const Kt=t=>{const n=_(()=>["fn-button",`fn-button--${t.type}`,`fn-button--${t.state}`,`fn-button--${t.shape}`,`fn-button--${t.size}`,{"is-disabled":t.disabled}]);return{styleList:_(()=>{const{color:r,background:a}=t,i={};if(r&&(i["--fn-button-text-color"]=r,i["--fn-button-text-hover-color"]=r,i["--fn-button-disabled-text-color"]=r),a){const s=new ct(a);i["--fn-button-bg-color"]=a,i["--fn-button-disabled-bg-color"]=a,i["--fn-button-disabled-border-color"]=s.tint(50).toString(),i["--fn-button-bg-hover-color"]=s.tint(50).toString(),i["--fn-button-border-hover-color"]=s.tint(50).toString(),i["--fn-button-border-color"]=s.tint(50).toString()}return i}),classList:n}};var X;const z=typeof window<"u",Yt=t=>typeof t=="number",K=()=>{};z&&((X=window==null?void 0:window.navigator)!=null&&X.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(t){return typeof t=="function"?t():d(t)}function Zt(t){return t}function ht(t){return bt()?(vt(t),!0):!1}function Jt(t,n=!0){at()?P(t):n?t():yt(t)}function te(t,n,e={}){const{immediate:r=!0}=e,a=M(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function o(){a.value=!1,s()}function f(...g){s(),a.value=!0,i=setTimeout(()=>{a.value=!1,i=null,t(...g)},lt(n))}return r&&(a.value=!0,z&&f()),ht(o),{isPending:a,start:f,stop:o}}function ee(t){var n;const e=lt(t);return(n=e==null?void 0:e.$el)!=null?n:e}const ne=z?window:void 0;function re(t,n=!1){const e=M(),r=()=>e.value=!!t();return r(),Jt(r,n),e}const Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z="__vueuse_ssr_handlers__";Y[Z]=Y[Z]||{};var J=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,se=(t,n)=>{var e={};for(var r in t)ae.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&J)for(var r of J(t))n.indexOf(r)<0&&ie.call(t,r)&&(e[r]=t[r]);return e};function oe(t,n,e={}){const r=e,{window:a=ne}=r,i=se(r,["window"]);let s;const o=re(()=>a&&"ResizeObserver"in a),f=()=>{s&&(s.disconnect(),s=void 0)},g=mt(()=>ee(t),c=>{f(),o.value&&a&&c&&(s=new ResizeObserver(n),s.observe(c,i))},{immediate:!0,flush:"post"}),p=()=>{f(),g()};return ht(p),{isSupported:o,stop:p}}var tt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(tt||(tt={}));var fe=Object.defineProperty,et=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,nt=(t,n,e)=>n in t?fe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,le=(t,n)=>{for(var e in n||(n={}))ue.call(n,e)&&nt(t,e,n[e]);if(et)for(var e of et(n))ce.call(n,e)&&nt(t,e,n[e]);return t};const he={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};le({linear:Zt},he);const de=t=>it(t)?!Number.isNaN(Number(t)):!1;const ge="utils/dom/style";function I(t,n="px"){const e=Yt(t)||de(t);return!e&&!t?"":e?`${t}${n}`:(it(t)||void 0,t)}const pe={type:{type:String,default:""},nativeType:{type:String,default:"button"},shape:{type:String,default:"round"},state:{type:String,default:""},size:{type:String,default:"medium"},icon:{type:String,default:""},color:{type:String,default:""},background:{type:String,default:""},disabled:Boolean,enableRipple:{type:Boolean,default:!0}},be={color:{type:String,default:"#fff"},center:{type:Boolean,default:!1}};var j=(t,n)=>{const e=t.__vccOpts||t;for(const[r,a]of n)e[r]=a;return e};const ve={class:"fn-ripple-root"},ye={name:"FuRipple"},me=L({...ye,props:be,setup(t,{expose:n}){var e;const r=t,a=wt([]),i=M(600),s=(e=at())==null?void 0:e.parent;let o=null,f=null;const g=_(()=>new ct(r.color).tint(70).toString()),p=l=>{const O=l.currentTarget,x=O.getBoundingClientRect(),R=Math.max(O.clientWidth,O.clientHeight),q=R/2,gt=r.center?0:l.clientX-x.left-q,pt=r.center?0:l.clientY-x.top-q;a.push({x:gt,y:pt,size:R})},c=()=>{o&&(clearTimeout(o),o=null)};return xt(()=>{a.length>0&&(c(),o=setTimeout(()=>{a.length=0,c()},i.value*4))}),P(()=>{var l;s&&(f=(l=s.proxy)==null?void 0:l.$el.addEventListener("mousedown",p))}),St(()=>{var l;c(),f&&((l=s==null?void 0:s.proxy)==null||l.$el.removeEventListener(f),f=null)}),n({addRipple:p}),(l,O)=>(y(),k("span",ve,[(y(!0),k(Mt,null,kt(a,(x,R)=>(y(),k("span",{key:`ripple_${R}`,style:H({top:d(I)(x.y),left:d(I)(x.x),width:d(I)(x.size),height:d(I)(x.size),"--fn-ripple-color":d(g)}),class:"fn-ripple"},null,4))),128))]))}});var we=j(me,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/ripple/src/index.vue"]]);const xe=ft(we,"FnRipple"),Se=["type"],Me={name:"FnButton"},ke=L({...Me,props:pe,emits:["click"],setup(t,{expose:n,emit:e}){const r=t,{classList:a,styleList:i}=Kt(r),s=M(),o=f=>{const{disabled:g}=At(r);if(g.value){f.preventDefault();return}e("click",f)};return n({el:s}),(f,g)=>{const p=_t("fn-icon");return y(),k("button",{ref_key:"buttonEl",ref:s,type:f.nativeType,class:ot(["fn-rippleBase-root",[...d(a)]]),style:H(d(i)),onClick:o},[f.icon?(y(),k("span",{key:0,style:H(f.$slots.default?"margin-right: 3px;":"")},[Ot(p,{icon:f.icon,color:"color",size:"13"},null,8,["icon"])],4)):B("v-if",!0),$("span",null,[Rt(f.$slots,"default")]),r.enableRipple&&!r.disabled?(y(),st(d(xe),{key:1})):B("v-if",!0)],14,Se)}}});var _e=j(ke,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/button/src/index.vue"]]);const Le=ft(_e,"FnButton"),Oe=["id"],Re={class:"message-content"},Ae=["innerHTML"],Te=L({__name:"index",props:{message:{type:String,required:!0},duration:{type:Number,required:!0,default:2e3},id:{type:String,required:!0},showIcon:{type:Boolean,required:!0,default:!0},offset:{type:Number,required:!0,default:20},closeBtn:{type:Boolean,required:!0,default:!1},type:{type:null,required:!0,default:"info"}},emits:["destroy"],setup(t,{expose:n}){const e=t,r=M(!1),a=M(0),i=M();let s=K;function o(){e.duration!==0&&({stop:s}=te(()=>{r.value=!1,s=K},e.duration))}P(()=>{o(),r.value=!0}),oe(i,()=>{a.value=i.value.getBoundingClientRect().height});const f=_(()=>Be(e.id)+e.offset),g=_(()=>a.value+f.value);return n({bottom:g,lastOffset:f,visible:r}),(p,c)=>(y(),st(Et,{name:"fn-message-fade",onAfterLeave:c[2]||(c[2]=l=>p.$emit("destroy")),persisted:""},{default:Tt(()=>[It($("div",{id:t.id,ref_key:"elRef",ref:i,class:ot(["fn-message",[`is-${t.type}`]]),style:H({top:`${d(f)}px`}),onMouseenter:c[1]||(c[1]=(...l)=>d(s)&&d(s)(...l)),onMouseleave:o},[$("div",Re,[e.showIcon?(y(),k("i",{key:0,innerHTML:d($e)(e.type)},null,8,Ae)):B("v-if",!0),Ht(" "+Bt(t.message),1)]),t.closeBtn?(y(),k("div",{key:0,class:"close-btn",onClick:c[0]||(c[0]=l=>r.value=!1)}," × ")):B("v-if",!0)],46,Oe),[[Ft,r.value]])]),_:1}))}});var Ie=j(Te,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/message/src/index.vue"]]);const m=Nt([]);let rt=1;function dt(t){const n=document.createElement("div"),e=`fn-message-${rt}`,r=$t(Ie,{...t,id:e,onDestroy:()=>{He(e),D(null,n)}},()=>t.message);D(r,n),document.body.appendChild(n.firstElementChild);const a={id:e,vnode:r,component:r.component,props:t,close:()=>{r.component.exposed.visible.value=!1}};return m.push(a),rt++,a}function He(t){const n=m.findIndex(e=>e.id===t);n!==-1&&(m[n].close(),m.splice(n,1))}const Be=t=>{const n=m.findIndex(r=>r.id===t),e=m[n-1];return e?e.component.exposed.bottom.value:0};function Fe(t){return function(n,e){return dt({...e,type:t,message:n})}}function Ee(){for(const t of m)t.close();m.splice(0,m.length)}const Ne=new Map([["success",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>`],["warning",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg>`],["danger",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`],["info",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`]]);function $e(t){return Ne.get(t)}const Ce=["info","success","warning","danger"],W=dt;for(const t of Ce)W[t]=Fe(t);W.closeAll=Ee;const ze=Ct(W,"$message");export{ze as F,ct as T,j as _,Le as a,I as b,xe as c,Yt as i,ft as w};