import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.e05ac2f0.js";const A=JSON.parse('{"title":"ThemeProvider","description":"","frontmatter":{"title":"ThemeProvider","lang":"en"},"headers":[],"relativePath":"langs/en/theme/theme-provider.md","filePath":"langs/en/theme/theme-provider.md"}'),e={name:"langs/en/theme/theme-provider.md"},p=l(`<h1 id="themeprovider" tabindex="-1">ThemeProvider <a class="header-anchor" href="#themeprovider" aria-label="Permalink to &quot;ThemeProvider&quot;">​</a></h1><p>The component to inject styles in child components.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Passing the theme object created by createTheme allows you to customize the theme for the whole application or use it as the nested theme.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createTheme</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">ThemeProvider</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@fusion-ui-vue/theme</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">theme</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">createTheme</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">theme-provider</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">v-model:theme</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">theme</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">&lt;!-- Child --&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">theme-provider</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createTheme</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">ThemeProvider</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@fusion-ui-vue/theme</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">theme</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">createTheme</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">theme-provider</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">v-model:theme</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">theme</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- Child --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">theme-provider</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span></code></pre></div><p>ThemeProvider relies on the <code>provide</code> and <code>inject</code> feature of Vue to pass the theme down to the components, so you need to make sure that ThemeProvider is a parent of the components you are trying to customize.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Make sure create the theme at the root component (e.g. App.vue)</p></div><h2 id="use-the-custom-theme" tabindex="-1">Use the custom theme <a class="header-anchor" href="#use-the-custom-theme" aria-label="Permalink to &quot;Use the custom theme&quot;">​</a></h2><p>Use the createTheme function to generate the theme object with custom parameters. The default theme is generated when no arguments are passed. Use the custom theme.</p><p>It comes with just one source color. To enable the default theme, pass nothing to the first argument.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createTheme</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">ThemeProvider</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@fusion-ui-vue/theme</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">theme</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">createTheme</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">#2196F3</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">theme-provider</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">v-model:theme</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">theme</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#758575DD;">&lt;!-- Child --&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">theme-provider</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createTheme</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">ThemeProvider</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@fusion-ui-vue/theme</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">theme</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">createTheme</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">#2196F3</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">theme-provider</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">v-model:theme</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">theme</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">&lt;!-- Child --&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">theme-provider</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span></code></pre></div>`,11),o=[p];function t(c,r,y,i,h,m){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{A as __pageData,d as default};