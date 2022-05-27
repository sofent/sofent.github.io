import{_ as s,c as a,o as e,a as n}from"./app.e540091e.js";const m='{"title":"VitePess \u76F8\u5173\u8BBE\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55","slug":"\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55"},{"level":2,"title":"\u8BA9vitepress\u652F\u6301mermaid","slug":"\u8BA9vitepress\u652F\u6301mermaid"}],"relativePath":"blog/vitepress.md"}',t={},p=n(`<h1 id="vitepess-\u76F8\u5173\u8BBE\u7F6E" tabindex="-1">VitePess \u76F8\u5173\u8BBE\u7F6E <a class="header-anchor" href="#vitepess-\u76F8\u5173\u8BBE\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55" tabindex="-1">\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55 <a class="header-anchor" href="#\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55" aria-hidden="true">#</a></h2><p>vitepress\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cbuild\u7684\u8F93\u51FA\u76EE\u5F55\u5728 <code> doc/.vitepress/dist </code> \u4F46\u5982\u679C\u662F\u60F3\u5728\u4E00\u4E2A\u4ED3\u5E93\u4E2D\u8FDB\u884C\u7F16\u8F91\uFF0C\u4F46\u5728\u53E6\u4E00\u4E2A\u4ED3\u5E93\u4E2D\u8FDB\u884C\u53D1\u5E03\u7684\u8BDD\uFF0C\u4F1A\u5BFC\u81F4\u51B2\u7A81\uFF0C\u6240\u4EE5\u60F3\u628Avitepress\u7684build\u8F93\u51FA\u76EE\u5F55\u8C03\u6574 \u7531\u4E8E\u4E4B\u524D\u6CA1\u6709\u4ED4\u7EC6\u770B\u6587\u6863\uFF0C\u4EE5\u4E3A\u53EF\u4EE5\u901A\u8FC7package.json\u8FDB\u884C\u4FEE\u6539</p><div class="language-json"><pre><code> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs --outDir outdir&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u8FD9\u6837\u4E0D\u751F\u6548\uFF0C\u7136\u540E\u67E5\u770Bvitepress\u7684config\u5B9A\u4E49\u624D\u77E5\u9053\uFF0C\u5982\u8981\u5728 <code>doc/.vitepress/config.js</code> \u4E2D\u4FEE\u6539\uFF0C\u7C7B\u4F3C\u5982\u4E0B</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;outdir&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6240\u4EE5\u7F16\u8F91\u7684\u65F6\u5019\u8FD8\u662F\u8981\u6253\u5F00IDE\u7684\u81EA\u5B9A\u4E49\u63D0\u793A\uFF0C\u53EF\u4EE5\u5C11\u8D70\u5F88\u591A\u5F2F\u8DEF</p><h2 id="\u8BA9vitepress\u652F\u6301mermaid" tabindex="-1">\u8BA9vitepress\u652F\u6301mermaid <a class="header-anchor" href="#\u8BA9vitepress\u652F\u6301mermaid" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cvitepress\u662F\u4E0D\u652F\u6301flowchart\u7EC4\u4EF6mermaid\u7684\uFF0C\u7528<code>markdown-it-meraid</code>\uFF0C\u5373\u901A\u8FC7\u5728<code>config.js</code>\u4E2D\u914D\u7F6Emd\u6269\u5C55\uFF0C\u53EA\u80FD\u5728\u9875\u9762\u4E0A\u751F\u6210\u7C7B\u4F3C\u5982\u4E0B\u7684\u4EE3\u7801</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mermaid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  GRAPH
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u662F\u7531\u4E8Evitepress\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u9875\u9762\u4E2D\u5BF9mermaid\u7684\u5F15\u7528\u5C31\u6CA1\u4E86\u3002\u5BFC\u81F4\u65E0\u6CD5\u6B63\u786E\u7684\u663E\u793A\u6D41\u7A0B\u56FE</p><p>\u7ECF\u8FC7\u5404\u79CD\u67E5\u627E\uFF0C\u53D1\u73B0\u6709\u4E2A\u5B9E\u73B0\u4E86\u4E00\u4E2A<code>vitepress-plugin-mermaid</code>\uFF0C\u867D\u7136\u4F7F\u7528\u8D77\u6765\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u603B\u7B97\u89E3\u51B3\u4E86\u95EE\u9898\u3002\u5177\u4F53\u7684\u53EF\u4EE5\u53C2\u8003<code>https://github.com/emersonbottero/vitepress-plugin-mermaid</code>\u4E0A\u7684\u8BF4\u660E\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7531\u4E8E\u81EA\u5DF1\u662F\u4F7F\u7528<code>yarn add</code> \u6DFB\u52A0\u4F9D\u8D56\uFF0C\u800C\u8BF4\u660E\u4E2D\u6307\u5B9A\u7684<code>npm i</code>,\u6240\u4EE5\u9700\u8981\u518D\u6DFB\u52A0\u5BF9 <code>mermaid mutation-observer</code> \u8FD9\u4E24\u4E2A\u7EC4\u4EF6\u7684\u4F9D\u8D56\u3002</p>`,13),o=[p];function r(c,i,d,l,u,k){return e(),a("div",null,o)}var g=s(t,[["render",r]]);export{m as __pageData,g as default};
