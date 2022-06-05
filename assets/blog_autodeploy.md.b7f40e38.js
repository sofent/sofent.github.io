import{_ as l,c as o,a as p,b as s,d as n,e,r as t,o as c}from"./app.32114734.js";const E='{"title":"\u4F7F\u7528GitAction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6574\u4F53\u6D41\u7A0B","slug":"\u6574\u4F53\u6D41\u7A0B"},{"level":2,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C"},{"level":2,"title":"GitAction\u5B9E\u73B0","slug":"gitaction\u5B9E\u73B0"},{"level":3,"title":"\u521B\u5EFAGitAction","slug":"\u521B\u5EFAgitaction"},{"level":3,"title":"\u7F16\u8BD1\u6B65\u9AA4","slug":"\u7F16\u8BD1\u6B65\u9AA4"},{"level":3,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"blog/autodeploy.md"}',r={name:"blog/autodeploy.md"},i=s("h1",{id:"\u4F7F\u7528gitaction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72",tabindex:"-1"},[n("\u4F7F\u7528GitAction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72 "),s("a",{class:"header-anchor",href:"#\u4F7F\u7528gitaction\u5B9E\u73B0\u81EA\u52A8\u5316\u90E8\u7F72","aria-hidden":"true"},"#")],-1),y=s("h2",{id:"\u6574\u4F53\u6D41\u7A0B",tabindex:"-1"},[n("\u6574\u4F53\u6D41\u7A0B "),s("a",{class:"header-anchor",href:"#\u6574\u4F53\u6D41\u7A0B","aria-hidden":"true"},"#")],-1),D=s("p",null,"\u76EE\u524Dblog\u91C7\u7528vitepress\u5DE5\u7A0B\uFF08\u4EE5\u4E0B\u79F0MD\u4ED3\u5E93\uFF09\u548C\u751F\u6210\u7684\u535A\u5BA2\u6587\u4EF6\uFF08\u4EE5\u4E0B\u79F0Blog\u4ED3\u5E93\uFF09\u72EC\u7ACB\u4ED3\u5E93\u7684\u65B9\u5F0F\uFF0C\u5373\u5C06vitepress build\u751F\u6210\u7684\u6587\u4EF6\u5355\u72EC\u4ED3\u5E93\u4F5C\u4E3A\u535A\u5BA2\u7684\u53D1\u5E03\u6E90\u6765\u5B9E\u65BD\u3002\u6574\u4E2A\u81EA\u52A8\u5316\u6240\u5E0C\u671B\u8FBE\u5230\u7684\u76EE\u7684\u662F\u5F53MD\u6709\u63D0\u4EA4\u7684\u65F6\u5019\u81EA\u52A8\u5316\u89E6\u53D1\u7F16\u8BD1\uFF0C\u5E76\u5C06\u7F16\u8BD1\u751F\u6210\u6587\u4EF6\u63D0\u4EA4\u5230Blog\u4ED3\u5E93\u3002",-1),C=e(`<h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2><p>vitepress\u9ED8\u8BA4\u751F\u6210\u7684\u6587\u4EF6\u5728<code>docs/.vitepress/dist</code>\u4E2D\uFF0C\u6211\u4EEC\u5C06\u751F\u6210\u7684\u76EE\u5F55\u5728<code>config.js</code>\u4E2D\u4FEE\u6539\u6210<code>../blogdist</code>\uFF0C\u8FD9\u6837\u6587\u4EF6\u5C06\u751F\u6210\u5728<code>blogdist</code>\u4E2D\uFF0C\u65B9\u4FBF\u6211\u4EEC\u64CD\u4F5C\u3002\u6211\u4EEC\u5C06Blog\u4ED3\u5E93check\u5230\u548CMD\u4ED3\u5E93\u540C\u4E00\u7236\u76EE\u5F55\u7684<code>blogdist</code>\u3002\u5F53\u6211\u4EEC\u5B8C\u6210\u7F16\u8BD1\u540E\uFF0C\u5C06<code>blogdist</code>\u4E2D\u7684\u6587\u4EF6\u590D\u5236\u5230<code>../blogdist</code></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 viteblog</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 blogdist</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 blogdist</span></span>
<span class="line"></span></code></pre></div><h2 id="gitaction\u5B9E\u73B0" tabindex="-1">GitAction\u5B9E\u73B0 <a class="header-anchor" href="#gitaction\u5B9E\u73B0" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFAgitaction" tabindex="-1">\u521B\u5EFAGitAction <a class="header-anchor" href="#\u521B\u5EFAgitaction" aria-hidden="true">#</a></h3><p>\u5728github\u9875\u9762\u4E2D\uFF0C\u9009\u62E9<code>Actions</code> tab\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355Action\uFF0C\u6211\u4EEC\u547D\u540D\u4E3A<code>AutoBuild.yaml</code>, \u7136\u540E\u7F16\u8F91\u5185\u5BB9\u3002<br> \u9996\u5148\uFF0C\u6211\u4EEC\u7684\u76EE\u7684\u662F\u5F53\u6709\u63D0\u4EA4\uFF0C\u6216\u624B\u52A8\u90FD\u53EF\u4EE5\u89E6\u53D1\u7F16\u8BD1,\u56FD\u4E3A\u6211\u4EEC\u7684\u4E3B\u5E72\u662Fmaster\uFF0C\u6545\u76D1\u542Cmaster\u7684\u53D8\u66F4\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Controls when the workflow will run</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># Triggers the workflow on push or pull request events but only for the master branch</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pull_request</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">workflow_dispatch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7F16\u8BD1\u6B65\u9AA4" tabindex="-1">\u7F16\u8BD1\u6B65\u9AA4 <a class="header-anchor" href="#\u7F16\u8BD1\u6B65\u9AA4" aria-hidden="true">#</a></h3><p>\u7136\u540E\u6211\u4EEC\u6765\u914D\u7F6E\u5177\u4F53\u7684\u7F16\u8BD1\u6B65\u9AA4\uFF0C\u9996\u5148\u662F\u5C06\u6211\u4EEC\u7684MD\u4ED3\u5E93\u548CBlog\u4ED3\u5E93\u5206\u522Bcheck\u4E0B\u6765.\u5BF9MD\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5185\u7F6E\u7684action\u8FDB\u884C\uFF0C\u5BF9blog\u4ED3\u5E93\u5219\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u4F7F\u7528shell\u6765check\uFF0C\u6CE8\u610F\u6B64\u65F6\u5DE5\u4F5C\u76EE\u5F55\u8981\u8BBE\u7F6E\u4E3A\u7236\u76EE\u5F55</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># The type of runner that the job will run on</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone old blog</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">working-directory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./..</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">         df -hT $PWD</span></span>
<span class="line"><span style="color:#C3E88D;">         git clone https://github.com/sofent/sofent.github.io blogdist</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u8BBE\u7F6Enode\u548Cyarn\u7684\u73AF\u5883\uFF0C\u6B63\u597D\u90FD\u6709\u5BF9\u5E94\u7684action,\u6CE8\u610F\u8981\u6DFB\u52A0\u5BF9vitepress\u7684\u4F9D\u8D56\u3002\u5E94\u8BE5\u4E5F\u6709\u5176\u4ED6\u7684\u65B9\u5F0F\u6765\u91CD\u65B0\u4E0B\u8F7Dnode_modules\uFF0C\u4F46\u91CD\u65B0\u6DFB\u52A0\u4F9D\u8D56\u597D\u50CF\u662F\u4E00\u4E2A\u6BD4\u8F83\u7B80\u5355\u7684\u65B9\u6848\u3002\u8FD9\u91CC\u5728\u914D\u7F6E\u8FC7\u7A0B\u4E2D\u66FE\u9047\u5230\u4E00\u4E2A\u9519\u8BEF\uFF0C\u4E4B\u524D\u628Anode_modules\u76F4\u63A5\u63D0\u4EA4\u5230\u4ED3\u5E93\u4E2D\u4E86\uFF0C\u4F46\u4E0D\u540C\u5E73\u53F0\u7684node_modules\u5E76\u4E0D\u901A\u7528\u3002\u6545\u4ECE\u4ED3\u5E93\u4E2D\u53BB\u9664\uFF0C\u5E76\u901A\u8FC7\u6DFB\u52A0\u4F9D\u8D56\u91CD\u65B0\u4E0B\u8F7D\u3002</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3.2.0</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">borales/actions-yarn@v2.3.0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">cmd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add --dev vitepress</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u7F16\u8BD1\uFF0C\u5E76\u5C06\u6587\u4EF6copy\u5230blog\u4ED3\u5E93\u6240\u5728\u7684\u76EE\u5F55\uFF08\u8FD9\u91CC\u5E94\u8BE5\u9700\u8981\u5148\u628A\u539F\u6765\u6587\u4EF6\u5220\u9664\uFF0C\u4E0D\u7136\u53EF\u80FD\u5B58\u5728\u5783\u573E\u6587\u4EF6\uFF09\uFF0C\u6CE8\u610F\u8FD9\u91CC\u7684<code>git remote rm origin</code> \uFF0C\u8FD9\u91CC\u56E0\u4E3A\u540E\u9762\u7684\u76EE\u5F55\u63D0\u4EA4\u662F\u901A\u8FC7\u6DFB\u52A0upstream\u7684\u65B9\u5F0F\u5B9E\u73B0\u7684\uFF0C\u5982\u679C\u4E0D\u5220\u9664\uFF0C\u5219\u540E\u9762\u4F1A\u62A5\u9519</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">borales/actions-yarn@v2.3.0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#F07178;">cmd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">copy build file</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">working-directory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">              cp -rf docs/blogdist/* ../blogdist</span></span>
<span class="line"><span style="color:#C3E88D;">              cd ../blogdist</span></span>
<span class="line"><span style="color:#C3E88D;">              git remote rm origin        </span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\u6211\u4EEC\u7684blog\u4ED3\u5E93\u6240\u5728\u7684\u76EE\u5F55\u662F\u65B0\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u63D0\u4EA4\u5E76push\u5230\u6211\u4EEC\u7684blog\u4ED3\u5E93\u5373\u53EF</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Push dir to Git</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">liziwl/git-push-action@v1.0.4</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Username of token holder</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">git_token_holder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;github username&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Token for the destination repo. Can be passed in using $\\{{ secrets.GIT_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">git_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.SUPER_TOKEN }}</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Repository URL after &quot;https://&quot;, like &quot;github.com/USER_NAME/REPO_NAME.git&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">repository_url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;blog repo&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Directory to push</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">push_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../blogdist</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># User to commit</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">commit_user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;git user&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Email of the user to commit</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">commit_email</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&lt;git user mail&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Destination branch to push changes</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># Commit messgae</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">commit_message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auto build</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><p>\u5728\u6700\u540E\u4E00\u6B65\u63D0\u4EA4\u5230blog\u4ED3\u5E93\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230<code>secrets.GITHUBTOKEN</code>\u6CA1\u6709\u6743\u9650\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728\u4F60\u7684\u4E2A\u4EBAprofile\u4E2D\u751F\u6210\u4E00\u4E2A\u6709\u6743\u9650\u7684token\uFF0C\u7136\u540E\u5728\u5DE5\u7A0B\u7684\u5B89\u5168\u8BBE\u7F6E\u4F5C\u4E3A\u5B89\u5168key\u914D\u7F6E\uFF0C\u7136\u540E\u5F15\u7528\u8FD9\u4E2A\u5B89\u5168key\u5C31\u53EF\u4EE5\u3002\u6211\u4EEC\u914D\u7F6Ekey\u540D\u5B57\u53EB<code>SUPER_TOKEN</code>,\u5728\u8FD9\u91CC<code>secrets.SUPER_TOKEN</code>\u5F15\u7528</p>`,18);function A(F,d,u,h,g,m){const a=t("Mermaid");return c(),o("div",null,[i,y,D,p(a,{id:"mermaid_1a962853",graph:`graph LR
A[\u6587\u6863\u7F16\u8F91] -->|\u63D0\u4EA4|B(MD\u4ED3\u5E93)
    B --> C{Git Action}
    C -->|\u7F16\u8BD1\u6210\u529F| D[Blog\u4ED3\u5E93]`}),C])}var f=l(r,[["render",A]]);export{E as __pageData,f as default};
