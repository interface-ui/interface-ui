import{_ as a}from"./chunks/base.vue_vue_type_script_setup_true_lang.cf7001f0.js";import{d as E,c as l,C as s,z as C,Q as o,D as p,o as t}from"./chunks/framework.bd9bd2f3.js";const D=o('<h1 id="drawer" tabindex="-1">Drawer <a class="header-anchor" href="#drawer" aria-label="Permalink to &quot;Drawer&quot;">​</a></h1><p>This is a drawer that can slide out of the page from <code>left</code> | <code>right</code> | <code>top</code> or <code>bottom</code>.</p><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2><p><code>model-value</code> attribute to control the display and hidden state of <code>Drawer</code></p>',4),B=JSON.parse('{"title":"Drawer","description":"","frontmatter":{"title":"Drawer","lang":"en"},"headers":[],"relativePath":"langs/en/components/drawer.md"}'),e={name:"langs/en/components/drawer.md"},i=E({...e,setup(A){return(c,r)=>{const n=p("demo");return t(),l("div",null,[D,s(n,{code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20visible%20%3D%20ref(false)%0Aconst%20direction%20%3D%20ref('left')%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20space-y-5%3E%0A%20%20%20%20%3Cfn-button%20variant%3D%22text%22%20%40click%3D%22visible%20%3D%20true%3Bdirection%20%3D%20'left'%22%3E%0A%20%20%20%20%20%20LEFT%0A%20%20%20%20%3C%2Ffn-button%3E%0A%20%20%20%20%3Cfn-button%20variant%3D%22text%22%20%40click%3D%22visible%20%3D%20true%3Bdirection%20%3D%20'top'%22%3E%0A%20%20%20%20%20%20TOP%0A%20%20%20%20%3C%2Ffn-button%3E%0A%20%20%20%20%3Cfn-button%20variant%3D%22text%22%20%40click%3D%22visible%20%3D%20true%3Bdirection%20%3D%20'right'%22%3E%0A%20%20%20%20%20%20RIGHT%0A%20%20%20%20%3C%2Ffn-button%3E%0A%20%20%20%20%3Cfn-button%20variant%3D%22text%22%20%40click%3D%22visible%20%3D%20true%3Bdirection%20%3D%20'bottom'%22%3E%0A%20%20%20%20%20%20BOTTOM%0A%20%20%20%20%3C%2Ffn-button%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cfn-drawer%0A%20%20%20%20v-model%3D%22visible%22%0A%20%20%20%20title%3D%22Drawer%20Title%22%0A%20%20%20%20%3Adirection%3D%22direction%22%0A%20%20%3E%0A%20%20%20%20%3Cdiv%20class%3D%22p-5%22%3E%0A%20%20%20%20%20%20%3Cp%3ESome%20contents...%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%3ESome%20contents...%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%3ESome%20contents...%3C%2Fp%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Ffn-drawer%3E%0A%3C%2Ftemplate%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22shiki%20vitesse-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Edirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Eleft%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Espace-y-5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Bleft%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20LEFT%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Btop%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20TOP%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Bright%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20RIGHT%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Bbottom%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20BOTTOM%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-drawer%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Etitle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3EDrawer%20Title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%3Adirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Edirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ep-5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3ESome%20contents...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3ESome%20contents...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3ESome%20contents...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efn-drawer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20vitesse-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Edirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Eleft%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Espace-y-5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Bleft%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20LEFT%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Btop%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20TOP%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Bright%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20RIGHT%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evariant%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evisible%20%3D%20true%3Bdirection%20%3D%20%26%2339%3Bbottom%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20BOTTOM%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-drawer%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Etitle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3EDrawer%20Title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%3Adirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Edirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ep-5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3ESome%20contents...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3ESome%20contents...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3ESome%20contents...%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efn-drawer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/home/runner/work/fusion-ui/fusion-ui/docs/example/drawer/base.vue",title:"",desc:"",github:"https://github.com/fusion-ui-vue/fusion-ui/tree/master/docs/example/drawer/base.vue"},{default:C(()=>[s(a)]),_:1})])}}});export{B as __pageData,i as default};
