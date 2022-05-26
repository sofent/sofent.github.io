import{_ as e,c as t,o as r,e as i}from"./app.2d97cddc.js";const m='{"title":"Git\u4F7F\u7528\u76F8\u5173\u7684\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u51B3refusing to merge unrelated histories","slug":"\u89E3\u51B3refusing-to-merge-unrelated-histories"}],"relativePath":"tech/git.md"}',a={},s=i(`<h1 id="git\u4F7F\u7528\u76F8\u5173\u7684\u95EE\u9898" tabindex="-1">Git\u4F7F\u7528\u76F8\u5173\u7684\u95EE\u9898 <a class="header-anchor" href="#git\u4F7F\u7528\u76F8\u5173\u7684\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="\u89E3\u51B3refusing-to-merge-unrelated-histories" tabindex="-1">\u89E3\u51B3refusing to merge unrelated histories <a class="header-anchor" href="#\u89E3\u51B3refusing-to-merge-unrelated-histories" aria-hidden="true">#</a></h2><p>\u4ECA\u5929\u7684\u4F7F\u7528\u521B\u5EFA\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u4F7F\u7528github\u7684\u5728\u7EBF\u7F16\u8F91\u521B\u5EFA\u4E86\u4E00\u90E8\u5206\u5185\u5BB9\u3002\u7136\u540E\u5728\u672C\u5730\u7F16\u8F91\u53C8Push\u5230\u4E86\u53E6\u4E00\u4E2A\u5206\u652F\u3002<br> \u5728\u4F7F\u7528<code>git merge master</code> \u5408\u5E76\u4EE3\u7801\u7684\u65F6\u5019\u9047\u5230\u4E86</p><div class="language-sh"><pre><code> blogdist git:(main) git merge master
fatal: refusing to merge unrelated histories
</code></pre></div><p>\u67E5\u4E86\u4E00\u4E0B\uFF0C\u6CA1\u6709\u76F8\u5173\u6027\u7684\u4E24\u4E2A\u5206\u652F\u9ED8\u8BA4\u662F\u65E0\u6CD5\u5408\u5E76\u7684\uFF0C\u597D\u5728git\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u9009\u62E9\uFF0C\u53EA\u8981\u4F7F\u7528<code>--allow-unrelated-histories</code>\u9009\u9879\u5373\u53EF\u5141\u8BB8\u5408\u5E76,\u5B8C\u6574\u547D\u4EE4\u5982</p><div class="language-sh"><pre><code>git merge master --allow-unrelated-histories
</code></pre></div>`,6),o=[s];function d(n,c,g,l,h,_){return r(),t("div",null,o)}var p=e(a,[["render",d]]);export{m as __pageData,p as default};
