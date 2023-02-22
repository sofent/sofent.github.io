import{_ as l,c as o,a as p,b as s,d as n,e,o as t,r as c}from"./app.99163862.js";const m=JSON.parse('{"title":"使用GitAction实现自动化部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"整体流程","slug":"整体流程","link":"#整体流程","children":[]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"GitAction实现","slug":"gitaction实现","link":"#gitaction实现","children":[{"level":3,"title":"创建GitAction","slug":"创建gitaction","link":"#创建gitaction","children":[]},{"level":3,"title":"编译步骤","slug":"编译步骤","link":"#编译步骤","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"relativePath":"blog/autodeploy.md"}'),r={name:"blog/autodeploy.md"},i=s("h1",{id:"使用gitaction实现自动化部署",tabindex:"-1"},[n("使用GitAction实现自动化部署 "),s("a",{class:"header-anchor",href:"#使用gitaction实现自动化部署","aria-hidden":"true"},"#")],-1),y=s("h2",{id:"整体流程",tabindex:"-1"},[n("整体流程 "),s("a",{class:"header-anchor",href:"#整体流程","aria-hidden":"true"},"#")],-1),D=s("p",null,"目前blog采用vitepress工程（以下称MD仓库）和生成的博客文件（以下称Blog仓库）独立仓库的方式，即将vitepress build生成的文件单独仓库作为博客的发布源来实施。整个自动化所希望达到的目的是当MD有提交的时候自动化触发编译，并将编译生成文件提交到Blog仓库。",-1),C=e(`<h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-hidden="true">#</a></h2><p>vitepress默认生成的文件在<code>docs/.vitepress/dist</code>中，我们将生成的目录在<code>config.js</code>中修改成<code>../blogdist</code>，这样文件将生成在<code>blogdist</code>中，方便我们操作。我们将Blog仓库check到和MD仓库同一父目录的<code>blogdist</code>。当我们完成编译后，将<code>blogdist</code>中的文件复制到<code>../blogdist</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">├─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">viteblog</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">├─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.vitepress</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blogdist</span></span>
<span class="line"><span style="color:#FFCB6B;">└─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blogdist</span></span>
<span class="line"></span></code></pre></div><h2 id="gitaction实现" tabindex="-1">GitAction实现 <a class="header-anchor" href="#gitaction实现" aria-hidden="true">#</a></h2><h3 id="创建gitaction" tabindex="-1">创建GitAction <a class="header-anchor" href="#创建gitaction" aria-hidden="true">#</a></h3><p>在github页面中，选择<code>Actions</code> tab，创建一个简单Action，我们命名为<code>AutoBuild.yaml</code>, 然后编辑内容。<br> 首先，我们的目的是当有提交，或手动都可以触发编译,国为我们的主干是master，故监听master的变更：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CI</span></span>
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
<span class="line"></span></code></pre></div><h3 id="编译步骤" tabindex="-1">编译步骤 <a class="header-anchor" href="#编译步骤" aria-hidden="true">#</a></h3><p>然后我们来配置具体的编译步骤，首先是将我们的MD仓库和Blog仓库分别check下来.对MD仓库，可以直接使用内置的action进行，对blog仓库则需要我们自己使用shell来check，注意此时工作目录要设置为父目录</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
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
<span class="line"></span></code></pre></div><p>然后，我们需要设置node和yarn的环境，正好都有对应的action,注意要添加对vitepress的依赖。应该也有其他的方式来重新下载node_modules，但重新添加依赖好像是一个比较简单的方案。这里在配置过程中曾遇到一个错误，之前把node_modules直接提交到仓库中了，但不同平台的node_modules并不通用。故从仓库中去除，并通过添加依赖重新下载。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3.2.0</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">borales/actions-yarn@v2.3.0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">cmd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add --dev vitepress</span></span>
<span class="line"></span></code></pre></div><p>然后我们可以直接编译，并将文件copy到blog仓库所在的目录（这里应该需要先把原来文件删除，不然可能存在垃圾文件），注意这里的<code>git remote rm origin</code> ，这里因为后面的目录提交是通过添加upstream的方式实现的，如果不删除，则后面会报错</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">borales/actions-yarn@v2.3.0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#F07178;">cmd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">copy build file</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">working-directory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">              cp -rf docs/blogdist/* ../blogdist</span></span>
<span class="line"><span style="color:#C3E88D;">              cd ../blogdist</span></span>
<span class="line"><span style="color:#C3E88D;">              git remote rm origin        </span></span>
<span class="line"></span></code></pre></div><p>现在我们的blog仓库所在的目录是新的，我们需要提交并push到我们的blog仓库即可</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Push dir to Git</span></span>
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
<span class="line"></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h3><p>在最后一步提交到blog仓库的时候，可能会遇到<code>secrets.GITHUBTOKEN</code>没有权限的问题，所以我们需要在你的个人profile中生成一个有权限的token，然后在工程的安全设置作为安全key配置，然后引用这个安全key就可以。我们配置key名字叫<code>SUPER_TOKEN</code>,在这里<code>secrets.SUPER_TOKEN</code>引用</p>`,18);function A(d,F,h,u,g,E){const a=c("Mermaid");return t(),o("div",null,[i,y,D,p(a,{id:"mermaid_1a962853",graph:"graph%20LR%0AA%5B%E6%96%87%E6%A1%A3%E7%BC%96%E8%BE%91%5D%20--%3E%7C%E6%8F%90%E4%BA%A4%7CB(MD%E4%BB%93%E5%BA%93)%0A%20%20%20%20B%20--%3E%20C%7BGit%20Action%7D%0A%20%20%20%20C%20--%3E%7C%E7%BC%96%E8%AF%91%E6%88%90%E5%8A%9F%7C%20D%5BBlog%E4%BB%93%E5%BA%93%5D"}),C])}const f=l(r,[["render",A]]);export{m as __pageData,f as default};