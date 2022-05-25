import{_ as e,c as t,o as a,a as o}from"./app.85f648d0.js";const b='{"title":"\u4F7F\u7528GitAction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6574\u4F53\u6D41\u7A0B","slug":"\u6574\u4F53\u6D41\u7A0B"},{"level":2,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C"},{"level":2,"title":"GitAction\u5B9E\u73B0","slug":"gitaction\u5B9E\u73B0"},{"level":3,"title":"\u521B\u5EFAGitAction","slug":"\u521B\u5EFAgitaction"}],"relativePath":"blog/autodeploy.md"}',s={},n=o(`<h1 id="\u4F7F\u7528gitaction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1">\u4F7F\u7528GitAction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72 <a class="header-anchor" href="#\u4F7F\u7528gitaction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="\u6574\u4F53\u6D41\u7A0B" tabindex="-1">\u6574\u4F53\u6D41\u7A0B <a class="header-anchor" href="#\u6574\u4F53\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u76EE\u524Dblog\u91C7\u7528vitepress\u5DE5\u7A0B\uFF08\u4EE5\u4E0B\u79F0MD\u4ED3\u5E93\uFF09\u548C\u751F\u6210\u7684\u535A\u5BA2\u6587\u4EF6\uFF08\u4EE5\u4E0B\u79F0Blog\u4ED3\u5E93\uFF09\u72EC\u7ACB\u4ED3\u5E93\u7684\u65B9\u5F0F\uFF0C\u5373\u5C06vitepress build\u751F\u6210\u7684\u6587\u4EF6\u5355\u72EC\u4ED3\u5E93\u4F5C\u4E3A\u535A\u5BA2\u7684\u53D1\u5E03\u6E90\u6765\u5B9E\u65BD\u3002\u6574\u4E2A\u81EA\u52A8\u5316\u6240\u5E0C\u671B\u8FBE\u5230\u7684\u76EE\u7684\u662F\u5F53MD\u6709\u63D0\u4EA4\u7684\u65F6\u5019\u81EA\u52A8\u5316\u89E6\u53D1\u7F16\u8BD1\uFF0C\u5E76\u5C06\u7F16\u8BD1\u751F\u6210\u6587\u4EF6\u63D0\u4EA4\u5230Blog\u4ED3\u5E93\u3002</p><div class="language-mermaid"><pre><code><span class="token keyword">graph</span> LR
A<span class="token text string">[\u6587\u6863\u7F16\u8F91]</span> <span class="token arrow operator">--&gt;</span><span class="token label property">|\u63D0\u4EA4|</span>B<span class="token text string">(MD\u4ED3\u5E93)</span>
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">{Git Action}</span>
    C <span class="token arrow operator">--&gt;</span><span class="token label property">|\u7F16\u8BD1\u6210\u529F|</span> D<span class="token text string">[Blog\u4ED3\u5E93]</span>
</code></pre></div><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2><p>vitepress\u9ED8\u8BA4\u751F\u6210\u7684\u6587\u4EF6\u5728<code>docs/.vitepress/dist</code>\u4E2D\uFF0C\u6211\u4EEC\u5C06\u751F\u6210\u7684\u76EE\u5F55\u5728<code>config.js</code>\u4E2D\u4FEE\u6539\u6210<code>../blogdist</code>\uFF0C\u8FD9\u6837\u6587\u4EF6\u5C06\u751F\u6210\u5728<code>blogdist</code>\u4E2D\uFF0C\u65B9\u4FBF\u6211\u4EEC\u64CD\u4F5C\u3002\u6211\u4EEC\u5C06Blog\u4ED3\u5E93check\u5230\u548CMD\u4ED3\u5E93\u540C\u4E00\u7236\u76EE\u5F55\u7684<code>blogdist</code>\u3002\u5F53\u6211\u4EEC\u5B8C\u6210\u7F16\u8BD1\u540E\uFF0C\u5C06<code>blogdist</code>\u4E2D\u7684\u6587\u4EF6\u590D\u5236\u5230<code>../blogdist</code></p><div class="language-bash"><pre><code><span class="token builtin class-name">.</span>
\u251C\u2500 viteblog
\u2502  \u251C\u2500 docs
\u2502  \u2502  \u2514\u2500 .vitepress
\u2502  \u2514\u2500 blogdist
\u2514\u2500 blogdist
</code></pre></div><h2 id="gitaction\u5B9E\u73B0" tabindex="-1">GitAction\u5B9E\u73B0 <a class="header-anchor" href="#gitaction\u5B9E\u73B0" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFAgitaction" tabindex="-1">\u521B\u5EFAGitAction <a class="header-anchor" href="#\u521B\u5EFAgitaction" aria-hidden="true">#</a></h3><p>\u5728github\u9875\u9762\u4E2D\uFF0C\u9009\u62E9<code>Actions</code> tab\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355Action\uFF0C\u6211\u4EEC\u547D\u540D\u4E3A<code>AutoBuild.yml</code>, \u7136\u540E\u7F16\u8F91\u5185\u5BB9\u3002<br> \u9996\u5148\uFF0C\u6211\u4EEC\u7684\u76EE\u7684\u662F\u5F53\u6709\u63D0\u524D</p>`,10),i=[n];function c(d,r,l,p,g,h){return a(),t("div",null,i)}var u=e(s,[["render",c]]);export{b as __pageData,u as default};