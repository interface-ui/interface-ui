import{e as H,j as _e,k as we,f as I,b as c,g as ce,h as q,i as xe,w as ke,a5 as le,d as O,a6 as Se,l as Me,v as Oe,o as d,c as y,F as Re,M as Ae,X as E,D as B,C as w,A as N,x as j,r as Ie,y as P,n as de,a7 as Be,z as b,a3 as $e,a as m,t as Ce,a4 as Te,T as Fe,a8 as He,a9 as Ee,aa as K,_ as U}from"./framework.e77ac3ad.js";function he(e,n){return e.install=t=>{t.component(n,e)},e}const Ne=(e,n)=>(e.install=t=>{e._context=t._context,t.config.globalProperties[n]=e},e);function l(e,n){Pe(e)&&(e="100%");var t=Le(e);return e=n===360?e:Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:(n===360?e=(e<0?e%n+n:e%n)/parseFloat(String(n)):e=e%n/parseFloat(String(n)),e)}function C(e){return Math.min(1,Math.max(0,e))}function Pe(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Le(e){return typeof e=="string"&&e.indexOf("%")!==-1}function ge(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function T(e){return e<=1?"".concat(Number(e)*100,"%"):e}function A(e){return e.length===1?"0"+e:String(e)}function ze(e,n,t){return{r:l(e,255)*255,g:l(n,255)*255,b:l(t,255)*255}}function Y(e,n,t){e=l(e,255),n=l(n,255),t=l(t,255);var r=Math.max(e,n,t),a=Math.min(e,n,t),s=0,i=0,o=(r+a)/2;if(r===a)i=0,s=0;else{var u=r-a;switch(i=o>.5?u/(2-r-a):u/(r+a),r){case e:s=(n-t)/u+(n<t?6:0);break;case n:s=(t-e)/u+2;break;case t:s=(e-n)/u+4;break}s/=6}return{h:s,s:i,l:o}}function L(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*(6*t):t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function De(e,n,t){var r,a,s;if(e=l(e,360),n=l(n,100),t=l(t,100),n===0)a=t,s=t,r=t;else{var i=t<.5?t*(1+n):t+n-t*n,o=2*t-i;r=L(o,i,e+1/3),a=L(o,i,e),s=L(o,i,e-1/3)}return{r:r*255,g:a*255,b:s*255}}function Z(e,n,t){e=l(e,255),n=l(n,255),t=l(t,255);var r=Math.max(e,n,t),a=Math.min(e,n,t),s=0,i=r,o=r-a,u=r===0?0:o/r;if(r===a)s=0;else{switch(r){case e:s=(n-t)/o+(n<t?6:0);break;case n:s=(t-e)/o+2;break;case t:s=(e-n)/o+4;break}s/=6}return{h:s,s:u,v:i}}function je(e,n,t){e=l(e,360)*6,n=l(n,100),t=l(t,100);var r=Math.floor(e),a=e-r,s=t*(1-n),i=t*(1-a*n),o=t*(1-(1-a)*n),u=r%6,h=[t,i,s,s,o,t][u],p=[o,t,t,i,s,s][u],f=[s,s,o,t,t,i][u];return{r:h*255,g:p*255,b:f*255}}function J(e,n,t,r){var a=[A(Math.round(e).toString(16)),A(Math.round(n).toString(16)),A(Math.round(t).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function We(e,n,t,r,a){var s=[A(Math.round(e).toString(16)),A(Math.round(n).toString(16)),A(Math.round(t).toString(16)),A(qe(r))];return a&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function qe(e){return Math.round(parseFloat(e)*255).toString(16)}function ee(e){return g(e)/255}function g(e){return parseInt(e,16)}function Ue(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var W={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ge(e){var n={r:0,g:0,b:0},t=1,r=null,a=null,s=null,i=!1,o=!1;return typeof e=="string"&&(e=Xe(e)),typeof e=="object"&&(_(e.r)&&_(e.g)&&_(e.b)?(n=ze(e.r,e.g,e.b),i=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):_(e.h)&&_(e.s)&&_(e.v)?(r=T(e.s),a=T(e.v),n=je(e.h,r,a),i=!0,o="hsv"):_(e.h)&&_(e.s)&&_(e.l)&&(r=T(e.s),s=T(e.l),n=De(e.h,r,s),i=!0,o="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=ge(t),{ok:i,format:e.format||o,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:t}}var Qe="[-\\+]?\\d+%?",Ve="[-\\+]?\\d*\\.\\d+%?",M="(?:".concat(Ve,")|(?:").concat(Qe,")"),z="[\\s|\\(]+(".concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")\\s*\\)?"),D="[\\s|\\(]+(".concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")[,|\\s]+(").concat(M,")\\s*\\)?"),v={CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+D),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+D),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+D),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Xe(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var n=!1;if(W[e])e=W[e],n=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=v.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=v.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=v.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=v.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=v.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=v.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=v.hex8.exec(e),t?{r:g(t[1]),g:g(t[2]),b:g(t[3]),a:ee(t[4]),format:n?"name":"hex8"}:(t=v.hex6.exec(e),t?{r:g(t[1]),g:g(t[2]),b:g(t[3]),format:n?"name":"hex"}:(t=v.hex4.exec(e),t?{r:g(t[1]+t[1]),g:g(t[2]+t[2]),b:g(t[3]+t[3]),a:ee(t[4]+t[4]),format:n?"name":"hex8"}:(t=v.hex3.exec(e),t?{r:g(t[1]+t[1]),g:g(t[2]+t[2]),b:g(t[3]+t[3]),format:n?"name":"hex"}:!1)))))))))}function _(e){return!!v.CSS_UNIT.exec(String(e))}var Ke=function(){function e(n,t){n===void 0&&(n=""),t===void 0&&(t={});var r;if(n instanceof e)return n;typeof n=="number"&&(n=Ue(n)),this.originalInput=n;var a=Ge(n);this.originalInput=n,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=t.format)!==null&&r!==void 0?r:a.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},e.prototype.getLuminance=function(){var n=this.toRgb(),t,r,a,s=n.r/255,i=n.g/255,o=n.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),.2126*t+.7152*r+.0722*a},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(n){return this.a=ge(n),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var n=this.toHsl().s;return n===0},e.prototype.toHsv=function(){var n=Z(this.r,this.g,this.b);return{h:n.h*360,s:n.s,v:n.v,a:this.a}},e.prototype.toHsvString=function(){var n=Z(this.r,this.g,this.b),t=Math.round(n.h*360),r=Math.round(n.s*100),a=Math.round(n.v*100);return this.a===1?"hsv(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var n=Y(this.r,this.g,this.b);return{h:n.h*360,s:n.s,l:n.l,a:this.a}},e.prototype.toHslString=function(){var n=Y(this.r,this.g,this.b),t=Math.round(n.h*360),r=Math.round(n.s*100),a=Math.round(n.l*100);return this.a===1?"hsl(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(n){return n===void 0&&(n=!1),J(this.r,this.g,this.b,n)},e.prototype.toHexString=function(n){return n===void 0&&(n=!1),"#"+this.toHex(n)},e.prototype.toHex8=function(n){return n===void 0&&(n=!1),We(this.r,this.g,this.b,this.a,n)},e.prototype.toHex8String=function(n){return n===void 0&&(n=!1),"#"+this.toHex8(n)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var n=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(n,", ").concat(t,", ").concat(r,")"):"rgba(".concat(n,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var n=function(t){return"".concat(Math.round(l(t,255)*100),"%")};return{r:n(this.r),g:n(this.g),b:n(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var n=function(t){return Math.round(l(t,255)*100)};return this.a===1?"rgb(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%)"):"rgba(".concat(n(this.r),"%, ").concat(n(this.g),"%, ").concat(n(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var n="#"+J(this.r,this.g,this.b,!1),t=0,r=Object.entries(W);t<r.length;t++){var a=r[t],s=a[0],i=a[1];if(n===i)return s}return!1},e.prototype.toString=function(n){var t=!!n;n=n??this.format;var r=!1,a=this.a<1&&this.a>=0,s=!t&&a&&(n.startsWith("hex")||n==="name");return s?n==="name"&&this.a===0?this.toName():this.toRgbString():(n==="rgb"&&(r=this.toRgbString()),n==="prgb"&&(r=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(r=this.toHexString()),n==="hex3"&&(r=this.toHexString(!0)),n==="hex4"&&(r=this.toHex8String(!0)),n==="hex8"&&(r=this.toHex8String()),n==="name"&&(r=this.toName()),n==="hsl"&&(r=this.toHslString()),n==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l+=n/100,t.l=C(t.l),new e(t)},e.prototype.brighten=function(n){n===void 0&&(n=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(n/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(n/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(n/100)))),new e(t)},e.prototype.darken=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.l-=n/100,t.l=C(t.l),new e(t)},e.prototype.tint=function(n){return n===void 0&&(n=10),this.mix("white",n)},e.prototype.shade=function(n){return n===void 0&&(n=10),this.mix("black",n)},e.prototype.desaturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s-=n/100,t.s=C(t.s),new e(t)},e.prototype.saturate=function(n){n===void 0&&(n=10);var t=this.toHsl();return t.s+=n/100,t.s=C(t.s),new e(t)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(n){var t=this.toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,new e(t)},e.prototype.mix=function(n,t){t===void 0&&(t=50);var r=this.toRgb(),a=new e(n).toRgb(),s=t/100,i={r:(a.r-r.r)*s+r.r,g:(a.g-r.g)*s+r.g,b:(a.b-r.b)*s+r.b,a:(a.a-r.a)*s+r.a};return new e(i)},e.prototype.analogous=function(n,t){n===void 0&&(n=6),t===void 0&&(t=30);var r=this.toHsl(),a=360/t,s=[this];for(r.h=(r.h-(a*n>>1)+720)%360;--n;)r.h=(r.h+a)%360,s.push(new e(r));return s},e.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new e(n)},e.prototype.monochromatic=function(n){n===void 0&&(n=6);for(var t=this.toHsv(),r=t.h,a=t.s,s=t.v,i=[],o=1/n;n--;)i.push(new e({h:r,s:a,v:s})),s=(s+o)%1;return i},e.prototype.splitcomplement=function(){var n=this.toHsl(),t=n.h;return[this,new e({h:(t+72)%360,s:n.s,l:n.l}),new e({h:(t+216)%360,s:n.s,l:n.l})]},e.prototype.onBackground=function(n){var t=this.toRgb(),r=new e(n).toRgb();return new e({r:r.r+(t.r-r.r)*t.a,g:r.g+(t.g-r.g)*t.a,b:r.b+(t.b-r.b)*t.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(n){for(var t=this.toHsl(),r=t.h,a=[this],s=360/n,i=1;i<n;i++)a.push(new e({h:(r+i*s)%360,s:t.s,l:t.l}));return a},e.prototype.equals=function(n){return this.toRgbString()===new e(n).toRgbString()},e}();const Ye=e=>{const n=H(()=>["fn-button",`fn-button--${e.type}`,`fn-button--${e.state}`,`fn-button--${e.shape}`,`fn-button--${e.size}`,{"is-disabled":e.disabled}]);return{styleList:H(()=>{const{color:r,background:a}=e,s={};if(r&&(s["--fn-button-text-color"]=r,s["--fn-button-text-hover-color"]=r,s["--fn-button-disabled-text-color"]=r),a){const i=new Ke(a);s["--fn-button-bg-color"]=a,s["--fn-button-disabled-bg-color"]=a,s["--fn-button-disabled-border-color"]=i.tint(50).toString(),s["--fn-button-bg-hover-color"]=i.tint(50).toString(),s["--fn-button-border-hover-color"]=i.tint(50).toString(),s["--fn-button-border-color"]=i.tint(50).toString()}return s}),classList:n}};var te;const G=typeof window<"u",Ze=e=>typeof e=="number",ne=()=>{};G&&((te=window==null?void 0:window.navigator)!=null&&te.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pe(e){return typeof e=="function"?e():c(e)}function Je(e){return e}function ve(e){return _e()?(we(e),!0):!1}function et(e,n=!0){ce()?q(e):n?e():xe(e)}function tt(e,n,t={}){const{immediate:r=!0}=t,a=I(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function o(){a.value=!1,i()}function u(...h){i(),a.value=!0,s=setTimeout(()=>{a.value=!1,s=null,e(...h)},pe(n))}return r&&(a.value=!0,G&&u()),ve(o),{isPending:a,start:u,stop:o}}function nt(e){var n;const t=pe(e);return(n=t==null?void 0:t.$el)!=null?n:t}const rt=G?window:void 0;function at(e,n=!1){const t=I(),r=()=>t.value=!!e();return r(),et(r,n),t}const re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ae="__vueuse_ssr_handlers__";re[ae]=re[ae]||{};var se=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ot=(e,n)=>{var t={};for(var r in e)st.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&se)for(var r of se(e))n.indexOf(r)<0&&it.call(e,r)&&(t[r]=e[r]);return t};function ut(e,n,t={}){const r=t,{window:a=rt}=r,s=ot(r,["window"]);let i;const o=at(()=>a&&"ResizeObserver"in a),u=()=>{i&&(i.disconnect(),i=void 0)},h=ke(()=>nt(e),f=>{u(),o.value&&a&&f&&(i=new ResizeObserver(n),i.observe(f,s))},{immediate:!0,flush:"post"}),p=()=>{u(),h()};return ve(p),{isSupported:o,stop:p}}var ie;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ie||(ie={}));var ft=Object.defineProperty,oe=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,ue=(e,n,t)=>n in e?ft(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,dt=(e,n)=>{for(var t in n||(n={}))ct.call(n,t)&&ue(e,t,n[t]);if(oe)for(var t of oe(n))lt.call(n,t)&&ue(e,t,n[t]);return e};const ht={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};dt({linear:Je},ht);const gt=e=>le(e)?!Number.isNaN(Number(e)):!1;function F(e,n="px"){const t=Ze(e)||gt(e);return!t&&!e?"":t?`${e}${n}`:(le(e),e)}const pt={type:{type:String,default:""},nativeType:{type:String,default:"button"},shape:{type:String,default:"round"},state:{type:String,default:""},size:{type:String,default:"medium"},icon:{type:String,default:""},color:{type:String,default:""},background:{type:String,default:""},disabled:Boolean,enableRipple:{type:Boolean,default:!0}},vt={color:{type:String,default:"#ffffff"},center:{type:Boolean,default:!1}};var Q=(e,n)=>{const t=e.__vccOpts||e;for(const[r,a]of n)t[r]=a;return t};const bt={class:"fn-ripple-root"},mt={name:"FuRipple"},yt=O({...mt,props:vt,setup(e,{expose:n}){var t;const r=e,a=Se([]),s=I(600),i=(t=ce())==null?void 0:t.parent;let o=null,u=null;const h=f=>{const S=f.currentTarget,R=S.getBoundingClientRect(),$=Math.max(S.clientWidth,S.clientHeight),X=$/2,me=r.center?0:f.clientX-R.left-X,ye=r.center?0:f.clientY-R.top-X;a.push({x:me,y:ye,size:$})},p=()=>{o&&(clearTimeout(o),o=null)};return Me(()=>{a.length>0&&(p(),o=setTimeout(()=>{a.length=0,p()},s.value*4))}),q(()=>{var f;i&&(u=(f=i.proxy)==null?void 0:f.$el.addEventListener("mousedown",h))}),Oe(()=>{var f;p(),u&&((f=i==null?void 0:i.proxy)==null||f.$el.removeEventListener(u),u=null)}),n({addRipple:h}),(f,S)=>(d(),y("span",bt,[(d(!0),y(Re,null,Ae(a,(R,$)=>(d(),y("span",{key:`ripple_${$}`,style:E({backgroundColor:r.color,top:c(F)(R.y),left:c(F)(R.x),width:c(F)(R.size),height:c(F)(R.size)}),class:"fn-ripple pressed-state-layer"},null,4))),128))]))}});var _t=Q(yt,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/ripple/src/index.vue"]]);const wt=he(_t,"FnRipple"),xt=["type"],kt={name:"FnButton"},St=O({...kt,props:pt,emits:["click"],setup(e,{expose:n,emit:t}){const r=e,{classList:a,styleList:s}=Ye(r),i=I(),o=u=>{const{disabled:h}=Be(r);if(h.value){u.preventDefault();return}t("click",u)};return n({el:i}),(u,h)=>{const p=B("fn-icon");return d(),y("button",{ref_key:"buttonEl",ref:i,type:u.nativeType,class:de(["fn-rippleBase-root",[...c(a)]]),style:E(c(s)),onClick:o},[u.icon?(d(),y("span",{key:0,style:E(u.$slots.default?"margin-right: 3px;":"")},[w(p,{icon:u.icon,color:"color",size:"13"},null,8,["icon"])],4)):N("v-if",!0),j("span",null,[Ie(u.$slots,"default")]),r.enableRipple&&!r.disabled?(d(),P(c(wt),{key:1})):N("v-if",!0)],14,xt)}}});var Mt=Q(St,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/button/src/index.vue"]]);const Ot=he(Mt,"FnButton"),Rt=["id"],At={class:"message-content"},It=["innerHTML"],Bt=O({__name:"index",props:{message:{type:String,required:!0},duration:{type:Number,required:!0,default:2e3},id:{type:String,required:!0},showIcon:{type:Boolean,required:!0,default:!0},offset:{type:Number,required:!0,default:20},closeBtn:{type:Boolean,required:!0,default:!1},type:{type:null,required:!0,default:"info"}},emits:["destroy"],setup(e,{expose:n}){const t=e,r=I(!1),a=I(0),s=I();let i=ne;function o(){t.duration!==0&&({stop:i}=tt(()=>{r.value=!1,i=ne},t.duration))}q(()=>{o(),r.value=!0}),ut(s,()=>{a.value=s.value.getBoundingClientRect().height});const u=H(()=>Tt(t.id)+t.offset),h=H(()=>a.value+u.value);return n({bottom:h,lastOffset:u,visible:r}),(p,f)=>(d(),P(Fe,{name:"fn-message-fade",onAfterLeave:f[2]||(f[2]=S=>p.$emit("destroy")),persisted:""},{default:b(()=>[$e(j("div",{id:e.id,ref_key:"elRef",ref:s,class:de(["fn-message",[`is-${e.type}`]]),style:E({top:`${c(u)}px`}),onMouseenter:f[1]||(f[1]=(...S)=>c(i)&&c(i)(...S)),onMouseleave:o},[j("div",At,[t.showIcon?(d(),y("i",{key:0,innerHTML:c(Nt)(t.type)},null,8,It)):N("v-if",!0),m(" "+Ce(e.message),1)]),e.closeBtn?(d(),y("div",{key:0,class:"close-btn",onClick:f[0]||(f[0]=S=>r.value=!1)}," × ")):N("v-if",!0)],46,Rt),[[Te,r.value]])]),_:1}))}});var $t=Q(Bt,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/message/src/index.vue"]]);const k=He([]);let fe=1;function be(e){const n=document.createElement("div"),t=`fn-message-${fe}`,r=Ee($t,{...e,id:t,onDestroy:()=>{Ct(t),K(null,n)}},()=>e.message);K(r,n),document.body.appendChild(n.firstElementChild);const a={id:t,vnode:r,component:r.component,props:e,close:()=>{r.component.exposed.visible.value=!1}};return k.push(a),fe++,a}function Ct(e){const n=k.findIndex(t=>t.id===e);n!==-1&&(k[n].close(),k.splice(n,1))}const Tt=e=>{const n=k.findIndex(r=>r.id===e),t=k[n-1];return t?t.component.exposed.bottom.value:0};function Ft(e){return function(n,t){return be({...t,type:e,message:n})}}function Ht(){for(const e of k)e.close();k.splice(0,k.length)}const Et=new Map([["success",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
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
</svg>`]]);function Nt(e){return Et.get(e)}const Pt=["info","success","warning","danger"],V=be;for(const e of Pt)V[e]=Ft(e);V.closeAll=Ht;const x=Ne(V,"$message"),Lt={class:"container"},zt=O({__name:"base",setup(e){return(n,t)=>{const r=B("FnButton");return d(),y("div",Lt,[w(r,{onClick:t[0]||(t[0]=a=>c(x)({message:"this is a message."}))},{default:b(()=>[m(" Show message ")]),_:1})])}}});const Gt=U(zt,[["__scopeId","data-v-fb2416a8"]]),Dt={class:"container"},jt=O({__name:"type",setup(e){return(n,t)=>{const r=B("FnButton");return d(),y("div",Dt,[w(r,{onClick:t[0]||(t[0]=a=>c(x)({message:"Default"}))},{default:b(()=>[m(" Default ")]),_:1}),w(r,{state:"success",onClick:t[1]||(t[1]=a=>c(x)({message:"Congrats, this is a success message.",type:"success"}))},{default:b(()=>[m(" Success ")]),_:1}),w(r,{state:"warning",onClick:t[2]||(t[2]=a=>c(x)({message:"Warning, this is a warning message.",type:"warning"}))},{default:b(()=>[m(" Warning ")]),_:1}),w(r,{state:"danger",onClick:t[3]||(t[3]=a=>c(x)({message:"Oops, this is a error message.",type:"danger"}))},{default:b(()=>[m(" Error ")]),_:1})])}}});const Qt=U(jt,[["__scopeId","data-v-bbba0bce"]]),Wt={class:"container"},qt=O({__name:"time",setup(e){return(n,t)=>{const r=B("FnButton");return d(),y("div",Wt,[w(r,{onClick:t[0]||(t[0]=a=>c(x)({message:"Default delay 2s",type:"success"}))},{default:b(()=>[m(" Default delay 2s ")]),_:1}),w(r,{onClick:t[1]||(t[1]=a=>c(x)({message:"Delay 3s",type:"success",duration:3e3}))},{default:b(()=>[m(" Delay 3s ")]),_:1}),w(r,{onClick:t[2]||(t[2]=a=>c(x)({message:"It keeps showing",type:"success",duration:0,closeBtn:!0}))},{default:b(()=>[m(" It keeps showing ")]),_:1})])}}});const Vt=U(qt,[["__scopeId","data-v-92c3bd4b"]]),Xt=O({__name:"close",setup(e){return(n,t)=>(d(),P(c(Ot),{onClick:t[0]||(t[0]=r=>n.FnMessage({message:"Show Close Button",type:"success",duration:0,closeBtn:!0}))},{default:b(()=>[m(" Show Close Button ")]),_:1}))}}),Kt=O({__name:"icon",setup(e){return(n,t)=>{const r=B("FnButton");return d(),P(r,{onClick:t[0]||(t[0]=a=>c(x)({message:"Close logo",showIcon:!1}))},{default:b(()=>[m(" Close logo ")]),_:1})}}});export{Gt as D,Xt as _,Qt as a,Vt as b,Kt as c};