import{_ as s,c as n,o as a,a as t}from"./app.2a04e82f.js";const v='{"title":"\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"blog/outdir.md"}',e={},o=t(`<h1 id="\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55" tabindex="-1">\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55 <a class="header-anchor" href="#\u8BBE\u7F6Evitepress\u8F93\u51FA\u76EE\u5F55" aria-hidden="true">#</a></h1><p>vitepress\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cbuild\u7684\u8F93\u51FA\u76EE\u5F55\u5728 <code> doc/.vitepress/dist </code> \u4F46\u5982\u679C\u662F\u60F3\u5728\u4E00\u4E2A\u4ED3\u5E93\u4E2D\u8FDB\u884C\u7F16\u8F91\uFF0C\u4F46\u5728\u53E6\u4E00\u4E2A\u4ED3\u5E93\u4E2D\u8FDB\u884C\u53D1\u5E03\u7684\u8BDD\uFF0C\u4F1A\u5BFC\u81F4\u51B2\u7A81\uFF0C\u6240\u4EE5\u60F3\u628Avitepress\u7684build\u8F93\u51FA\u76EE\u5F55\u8C03\u6574 \u7531\u4E8E\u4E4B\u524D\u6CA1\u6709\u4ED4\u7EC6\u770B\u6587\u6863\uFF0C\u4EE5\u4E3A\u53EF\u4EE5\u901A\u8FC7package.json\u8FDB\u884C\u4FEE\u6539</p><div class="language-json"><pre><code> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs --outDir outdir&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u8FD9\u6837\u4E0D\u751F\u6548\uFF0C\u7136\u540E\u67E5\u770Bvitepress\u7684config\u5B9A\u4E49\u624D\u77E5\u9053\uFF0C\u5982\u8981\u5728 <code>doc/.vitepress/config.js</code> \u4E2D\u4FEE\u6539\uFF0C\u7C7B\u4F3C\u5982\u4E0B</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;outdir&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6240\u4EE5\u7F16\u8F91\u7684\u65F6\u5019\u8FD8\u662F\u8981\u6253\u5F00IDE\u7684\u81EA\u5B9A\u4E49\u63D0\u793A\uFF0C\u53EF\u4EE5\u5C11\u8D70\u5F88\u591A\u5F2F\u8DEF</p>`,6),p=[o];function r(c,i,d,u,l,k){return a(),n("div",null,p)}var f=s(e,[["render",r]]);export{v as __pageData,f as default};
