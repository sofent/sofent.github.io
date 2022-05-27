import{_ as n,c as s,o as a,e}from"./app.1bf35601.js";var t="/assets/refreshtoken.f9a3a1b4.png";const b='{"title":"\u963F\u91CC\u4E91\u76D8WebDav\u53CA\u6302\u8F7D\u672C\u5730\u78C1\u76D8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u963F\u91CC\u4E91\u76D8\u6302\u8F7DWebDav","slug":"\u963F\u91CC\u4E91\u76D8\u6302\u8F7Dwebdav"},{"level":3,"title":"\u83B7\u53D6RefreshToken","slug":"\u83B7\u53D6refreshtoken"},{"level":3,"title":"\u4F7F\u7528Docker\u521B\u5EFAWebDAV","slug":"\u4F7F\u7528docker\u521B\u5EFAwebdav"},{"level":3,"title":"\u5C06\u963F\u91CC\u4E91WebDAV\u6302\u8F7D\u4E3A\u672C\u5730\u78C1\u76D8","slug":"\u5C06\u963F\u91CC\u4E91webdav\u6302\u8F7D\u4E3A\u672C\u5730\u78C1\u76D8"}],"relativePath":"nas/aliyun.md"}',o={},p=e(`<h1 id="\u963F\u91CC\u4E91\u76D8webdav\u53CA\u6302\u8F7D\u672C\u5730\u78C1\u76D8" tabindex="-1">\u963F\u91CC\u4E91\u76D8WebDav\u53CA\u6302\u8F7D\u672C\u5730\u78C1\u76D8 <a class="header-anchor" href="#\u963F\u91CC\u4E91\u76D8webdav\u53CA\u6302\u8F7D\u672C\u5730\u78C1\u76D8" aria-hidden="true">#</a></h1><h2 id="\u963F\u91CC\u4E91\u76D8\u6302\u8F7Dwebdav" tabindex="-1">\u963F\u91CC\u4E91\u76D8\u6302\u8F7DWebDav <a class="header-anchor" href="#\u963F\u91CC\u4E91\u76D8\u6302\u8F7Dwebdav" aria-hidden="true">#</a></h2><p>\u8981\u4F7F\u7528Aliyun\u7F51\u76D8\uFF0C\u9996\u5148\u8981\u6709\u4E00\u4E2A\u7F51\u76D8\u8D26\u53F7\uFF0C\u5177\u4F53\u7684\u8D26\u53F7\u6CE8\u518C\u8BF7\u5230 <a href="https://pages.aliyundrive.com/mobile-page/web/beinvited.html" target="_blank" rel="noopener noreferrer">\u963F\u91CC\u4E91\u7F51\u76D8\u6CE8\u518C</a></p><h3 id="\u83B7\u53D6refreshtoken" tabindex="-1">\u83B7\u53D6RefreshToken <a class="header-anchor" href="#\u83B7\u53D6refreshtoken" aria-hidden="true">#</a></h3><p>\u914D\u7F6E\u963F\u91CC\u4E91\u76D8WebDav\u9700\u8981\u83B7\u53D6Refresh Toekn</p><ol><li>\u4F7F\u7528Chrome\u6253\u5F00 <a href="www.aliyundrive.com">\u963F\u91CC\u4E91\u76D8\u5B98\u7F51</a>\u5E76\u767B\u5F55</li><li>\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u5728<code>Console</code>\u4E2D\u8F93\u5165<div class="language-js"><pre><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u8F93\u51FA\u7684\u7ED3\u679C\u5373\u662FRefresh Token\uFF0C\u590D\u5236\u4EE5\u5907\u7528 <img src="`+t+`" alt=""></li></ol><h3 id="\u4F7F\u7528docker\u521B\u5EFAwebdav" tabindex="-1">\u4F7F\u7528Docker\u521B\u5EFAWebDAV <a class="header-anchor" href="#\u4F7F\u7528docker\u521B\u5EFAwebdav" aria-hidden="true">#</a></h3><p>\u5DF2\u7ECF\u6709\u5927\u795E\u5C06Docker\u955C\u50CF\u505A\u597D <code>messense/aliyundrive-webdav</code></p><p>\u521B\u5EFA\u4E00\u4E2A\u5B58\u5728\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\uFF0C\u6BD4\u5982<code>/etc/aliyundrive-webdav/</code></p><p>\u7136\u540E\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u8FD0\u884Cdocker</p><div class="language-sh"><pre><code>docker run -d --name=aliyundrive-webdav --restart=unless-stopped -p 8080:8080 \\
  -v /etc/aliyundrive-webdav/:/etc/aliyundrive-webdav/ \\
  -e REFRESH_TOKEN=&#39;your refresh token&#39; \\
  -e WEBDAV_AUTH_USER=admin \\
  -e WEBDAV_AUTH_PASSWORD=admin \\
  messense/aliyundrive-webdav
</code></pre></div><p>\u6CE8\u610F\u7AEF\u53E3\u53F7\u4FEE\u6539\u4E3A\u4F60\u60F3\u8981\u7684\u7AEF\u53E3\uFF0C\u7528\u6237\u540D\u548C\u5BC6\u7801\u4FEE\u6539\u4E3A\u4F60\u60F3\u8981\u7684\u5BC6\u7801\u3002</p><p>\u81F3\u6B64\u963F\u91CC\u4E91\u76D8\u7684\u7684WebDav\u670D\u52A1\u5C31\u521B\u5EFA\u597D\uFF0C\u4F60\u53EF\u4EE5\u5728Kodi\uFF0CInfuse\u6216\u5176\u4ED6\u652F\u6301WebDav\u7684\u8F6F\u4EF6\u4E2D\u4F7F\u7528\u4E86\u3002</p><h3 id="\u5C06\u963F\u91CC\u4E91webdav\u6302\u8F7D\u4E3A\u672C\u5730\u78C1\u76D8" tabindex="-1">\u5C06\u963F\u91CC\u4E91WebDAV\u6302\u8F7D\u4E3A\u672C\u5730\u78C1\u76D8 <a class="header-anchor" href="#\u5C06\u963F\u91CC\u4E91webdav\u6302\u8F7D\u4E3A\u672C\u5730\u78C1\u76D8" aria-hidden="true">#</a></h3><p><code>mumiehub/rclone-mount</code> \u662F\u4E00\u4E2A\u53EF\u4EE5\u628A\u4E00\u4E9B\u5E38\u89C1\u7684\u7F51\u76D8\u670D\u52A1\u6302\u8F7D\u4E3A\u672C\u5730\u78C1\u76D8\u7684Docker\u955C\u50CF\uFF0C\u4E5F\u652F\u6301WebDAV\u6302\u8F7D\u3002\u8BE6\u7EC6\u7684\u547D\u4EE4\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003<a href="https://registry.hub.docker.com/r/mumiehub/rclone-mount" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a></p><p>\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u8981\u5148\u521B\u5EFA\u4E24\u4E2A\u76EE\u5F55\uFF0C\u5206\u522B\u7528\u4E8E\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u4EE5\u53CA\u6302\u8F7D</p><div class="language-bash"><pre><code><span class="token function">mkdir</span> -p /home/myname/aliyun/config
<span class="token function">mkdir</span> -p /home/myname/aliyun/disk
</code></pre></div><p>\u7136\u540E\u4F7F\u7528\u5982\u4E0B\u7684\u547D\u4EE4\u8FD0\u884Cdocker</p><div class="language-bash"><pre><code><span class="token function">docker</span> run -d --name rclone-aliyun <span class="token punctuation">\\</span>
    --restart<span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
    --cap-add SYS_ADMIN <span class="token punctuation">\\</span>
    --device /dev/fuse <span class="token punctuation">\\</span>
    --security-opt apparmor:unconfined <span class="token punctuation">\\</span>
    -e <span class="token assign-left variable">RemotePath</span><span class="token operator">=</span><span class="token string">&quot;mediaefs:&quot;</span> <span class="token punctuation">\\</span>
    -e <span class="token assign-left variable">MountCommands</span><span class="token operator">=</span><span class="token string">&quot;--allow-other --allow-non-empty&quot;</span> <span class="token punctuation">\\</span>
    -v /home/myname/aliyun/config:/config <span class="token punctuation">\\</span>
    -v /home/myname/aliyun/disk:/mnt/mediaefs:shared <span class="token punctuation">\\</span>
    mumiehub/rclone-mount
</code></pre></div><p>\u4F46\u662Fdocker\u53EF\u80FD\u65E0\u6CD5\u6B63\u786E\u8FD0\u884C\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8FD8\u7F3A\u5C11\u6700\u91CD\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u5982\u679C\u6709\u53E6\u4E00\u53F0\u88C5\u6709rclone\u7684\u673A\u5668\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u53F0\u673A\u5668\u4E0A\u7684rclone\u6765\u521B\u5EFA\u914D\u7F6E\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u5BB9\u5668\u5185\u90E8\u6765\u521B\u5EFA</p><div class="language-bash"><pre><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it rclone-aliyun <span class="token function">sh</span>
</code></pre></div><p>\u8F93\u5165<code>rclone config</code>\u5F00\u59CB\u914D\u7F6E,\u8F93\u5165n\u5F00\u59CB\u521B\u5EFA\u65B0\u7684\u914D\u7F6E</p><div class="language-bash"><pre><code>n<span class="token punctuation">)</span> New remote
s<span class="token punctuation">)</span> Set configuration password
q<span class="token punctuation">)</span> Quit config
n/s/q<span class="token operator">&gt;</span> n
</code></pre></div><p>\u7136\u540E\u7ED9\u4F60\u7684\u914D\u7F6E\u8D77\u4E00\u4E2A\u540D\u5B57,\u8FD9\u91CC\u6211\u8D77\u7684\u662Faliyun</p><div class="language-bash"><pre><code>name<span class="token operator">&gt;</span> aliyun
</code></pre></div><p>\u4E4B\u540E\u4F1A\u51FA\u6765\u7F51\u76D8\u5404\u7C7B\u9009\u62E9\u7684\u754C\u9762\uFF0C\u6211\u4EEC\u8F93\u5165webdav</p><div class="language-bash"><pre><code>Type of storage to configure.
Enter a string value. Press Enter <span class="token keyword">for</span> the default <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>.
Choose a number from below, or <span class="token builtin class-name">type</span> <span class="token keyword">in</span> your own value
 <span class="token number">1</span> / 1Fichier
   <span class="token punctuation">\\</span> <span class="token string">&quot;fichier&quot;</span>
 <span class="token number">2</span> / Alias <span class="token keyword">for</span> an existing remote
   <span class="token punctuation">\\</span> <span class="token string">&quot;alias&quot;</span>
 <span class="token number">3</span> / Amazon Drive
   <span class="token punctuation">\\</span> <span class="token string">&quot;amazon cloud drive&quot;</span>
 <span class="token number">4</span> / Amazon S3 Compliant Storage Provider <span class="token punctuation">(</span>AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, Tencent COS, etc<span class="token punctuation">)</span>
   <span class="token punctuation">\\</span> <span class="token string">&quot;s3&quot;</span>
 <span class="token number">5</span> / Backblaze B2
   <span class="token punctuation">\\</span> <span class="token string">&quot;b2&quot;</span>
 <span class="token number">6</span> / Box
   <span class="token punctuation">\\</span> <span class="token string">&quot;box&quot;</span>
 <span class="token number">7</span> / Cache a remote
   <span class="token punctuation">\\</span> <span class="token string">&quot;cache&quot;</span>
 <span class="token number">8</span> / Citrix Sharefile
   <span class="token punctuation">\\</span> <span class="token string">&quot;sharefile&quot;</span>
 <span class="token number">9</span> / Dropbox
   <span class="token punctuation">\\</span> <span class="token string">&quot;dropbox&quot;</span>
<span class="token number">10</span> / Encrypt/Decrypt a remote
   <span class="token punctuation">\\</span> <span class="token string">&quot;crypt&quot;</span>
<span class="token number">11</span> / FTP Connection
   <span class="token punctuation">\\</span> <span class="token string">&quot;ftp&quot;</span>
<span class="token number">12</span> / Google Cloud Storage <span class="token punctuation">(</span>this is not Google Drive<span class="token punctuation">)</span>
   <span class="token punctuation">\\</span> <span class="token string">&quot;google cloud storage&quot;</span>
<span class="token number">13</span> / Google Drive
   <span class="token punctuation">\\</span> <span class="token string">&quot;drive&quot;</span>
<span class="token number">14</span> / Google Photos
   <span class="token punctuation">\\</span> <span class="token string">&quot;google photos&quot;</span>
<span class="token number">15</span> / Hubic
   <span class="token punctuation">\\</span> <span class="token string">&quot;hubic&quot;</span>
<span class="token number">16</span> / In memory object storage system.
   <span class="token punctuation">\\</span> <span class="token string">&quot;memory&quot;</span>
<span class="token number">17</span> / Jottacloud
   <span class="token punctuation">\\</span> <span class="token string">&quot;jottacloud&quot;</span>
<span class="token number">18</span> / Koofr
   <span class="token punctuation">\\</span> <span class="token string">&quot;koofr&quot;</span>
<span class="token number">19</span> / Local Disk
   <span class="token punctuation">\\</span> <span class="token string">&quot;local&quot;</span>
<span class="token number">20</span> / Mail.ru Cloud
   <span class="token punctuation">\\</span> <span class="token string">&quot;mailru&quot;</span>
<span class="token number">21</span> / Microsoft Azure Blob Storage
   <span class="token punctuation">\\</span> <span class="token string">&quot;azureblob&quot;</span>
<span class="token number">22</span> / Microsoft OneDrive
   <span class="token punctuation">\\</span> <span class="token string">&quot;onedrive&quot;</span>
<span class="token number">23</span> / OpenDrive
   <span class="token punctuation">\\</span> <span class="token string">&quot;opendrive&quot;</span>
<span class="token number">24</span> / OpenStack Swift <span class="token punctuation">(</span>Rackspace Cloud Files, Memset Memstore, OVH<span class="token punctuation">)</span>
   <span class="token punctuation">\\</span> <span class="token string">&quot;swift&quot;</span>
<span class="token number">25</span> / Pcloud
   <span class="token punctuation">\\</span> <span class="token string">&quot;pcloud&quot;</span>
<span class="token number">26</span> / Put.io
   <span class="token punctuation">\\</span> <span class="token string">&quot;putio&quot;</span>
<span class="token number">27</span> / SSH/SFTP Connection
   <span class="token punctuation">\\</span> <span class="token string">&quot;sftp&quot;</span>
<span class="token number">28</span> / Sugarsync
   <span class="token punctuation">\\</span> <span class="token string">&quot;sugarsync&quot;</span>
<span class="token number">29</span> / Transparently chunk/split large files
   <span class="token punctuation">\\</span> <span class="token string">&quot;chunker&quot;</span>
<span class="token number">30</span> / Union merges the contents of several upstream fs
   <span class="token punctuation">\\</span> <span class="token string">&quot;union&quot;</span>
<span class="token number">31</span> / Webdav
   <span class="token punctuation">\\</span> <span class="token string">&quot;webdav&quot;</span>
<span class="token number">32</span> / Yandex Disk
   <span class="token punctuation">\\</span> <span class="token string">&quot;yandex&quot;</span>
<span class="token number">33</span> / http Connection
   <span class="token punctuation">\\</span> <span class="token string">&quot;http&quot;</span>
<span class="token number">34</span> / premiumize.me
   <span class="token punctuation">\\</span> <span class="token string">&quot;premiumizeme&quot;</span>
<span class="token number">35</span> / seafile
   <span class="token punctuation">\\</span> <span class="token string">&quot;seafile&quot;</span>
Storage<span class="token operator">&gt;</span> webdav
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u9700\u8981\u8F93\u5165\u6211\u4EEC\u7684WebDAV\u670D\u52A1\u5730\u5740,\u5373\u6211\u4EEC\u521A\u624D\u521B\u5EFAwebdav\u670D\u52A1\u5668\u6240\u5728\u7684\u5730\u5740\u548C\u7AEF\u53E3,\u6BD4\u5982\u6211\u8FD9\u91CC\u8F93\u5165\u7684\u662F<code>http://192.168.1.222:8180</code></p><div class="language-bash"><pre><code>URL of http <span class="token function">host</span> to connect to
Enter a string value. Press Enter <span class="token keyword">for</span> the default <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>.
Choose a number from below, or <span class="token builtin class-name">type</span> <span class="token keyword">in</span> your own value
 <span class="token number">1</span> / Connect to example.com
   <span class="token punctuation">\\</span> <span class="token string">&quot;https://example.com&quot;</span>
url<span class="token operator">&gt;</span> http://192.168.1.222:8180
</code></pre></div><p>\u8F93\u5165\u9009\u62E9\u6211\u4EEC\u670D\u52A1\u5546\u7684\u7C7B\u578B\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9other</p><div class="language-bash"><pre><code>Name of the Webdav site/service/software you are using
Enter a string value. Press Enter <span class="token keyword">for</span> the default <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>.
Choose a number from below, or <span class="token builtin class-name">type</span> <span class="token keyword">in</span> your own value
 <span class="token number">1</span> / Nextcloud
   <span class="token punctuation">\\</span> <span class="token string">&quot;nextcloud&quot;</span>
 <span class="token number">2</span> / Owncloud
   <span class="token punctuation">\\</span> <span class="token string">&quot;owncloud&quot;</span>
 <span class="token number">3</span> / Sharepoint
   <span class="token punctuation">\\</span> <span class="token string">&quot;sharepoint&quot;</span>
 <span class="token number">4</span> / Other site/service or software
   <span class="token punctuation">\\</span> <span class="token string">&quot;other&quot;</span>
vendor<span class="token operator">&gt;</span> other
</code></pre></div><p>\u8F93\u5165\u6211\u4EEC\u4E4B\u524DWebdav\u670D\u52A1\u7684\u7528\u6237\u540D</p><div class="language-bash"><pre><code>User name
Enter a string value. Press Enter <span class="token keyword">for</span> the default <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>.
user<span class="token operator">&gt;</span> admin
</code></pre></div><p>\u9009\u62E9\u4F7F\u7528\u6211\u4EEC\u81EA\u5DF1\u7684\u5BC6\u7801</p><div class="language-bash"><pre><code>Password.
y<span class="token punctuation">)</span> Yes <span class="token builtin class-name">type</span> <span class="token keyword">in</span> my own password
g<span class="token punctuation">)</span> Generate random password
n<span class="token punctuation">)</span> No leave this optional password blank <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
y/g/n<span class="token operator">&gt;</span> y
</code></pre></div><p>\u8F93\u5165\u5BC6\u7801</p><div class="language-bash"><pre><code>Enter the password:
password:
Confirm the password:
password:
</code></pre></div><p>\u521B\u5EFAbearer token,\u6211\u8FD9\u91CC\u8F93\u5165\u7684\u662F123456</p><div class="language-bash"><pre><code>Bearer token instead of user/pass <span class="token punctuation">(</span>eg a Macaroon<span class="token punctuation">)</span>
Enter a string value. Press Enter <span class="token keyword">for</span> the default <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>.
bearer_token<span class="token operator">&gt;</span><span class="token number">123456</span>
</code></pre></div><p>\u662F\u5426\u4F7F\u7528\u9AD8\u7EA7\u8BBE\u7F6E\uFF0C\u6211\u4EEC\u4E0D\u7528\uFF0C\u76F4\u63A5\u56DE\u8F66.\u5373\u53EF\u770B\u5230\u6211\u4EEC\u914D\u7F6E\u597D\u7684\u5185\u5BB9</p><div class="language-bash"><pre><code>Edit advanced config? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>
y<span class="token punctuation">)</span> Yes
n<span class="token punctuation">)</span> No <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
y/n<span class="token operator">&gt;</span> 

Remote config
--------------------
<span class="token punctuation">[</span>aliyun<span class="token punctuation">]</span>
url <span class="token operator">=</span> http://xxxxxxxx:8180
vendor <span class="token operator">=</span> other
user <span class="token operator">=</span> admin
pass <span class="token operator">=</span> *** ENCRYPTED ***
bearer_token <span class="token operator">=</span> <span class="token number">123456</span>
</code></pre></div><p>\u7136\u540E\u68C0\u67E5\u4E00\u4E0B\u6211\u4EEC\u7684\u914D\u7F6E\u662F\u5426OK\uFF0C\u5982\u679C\u6CA1\u95EE\u9898\u76F4\u63A5\u56DE\u8F66\u5373\u53EF</p><div class="language-bash"><pre><code>y<span class="token punctuation">)</span> Yes this is OK <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
e<span class="token punctuation">)</span> Edit this remote
d<span class="token punctuation">)</span> Delete this remote
y/e/d<span class="token operator">&gt;</span> 
Current remotes:

Name                 Type
<span class="token operator">==</span><span class="token operator">==</span>                 <span class="token operator">==</span><span class="token operator">==</span>
aliyun               webdav
</code></pre></div><p>\u7136\u540E\u8F93\u5165q\uFF0C\u9000\u51FA\u914D\u7F6E</p><div class="language-bash"><pre><code>e<span class="token punctuation">)</span> Edit existing remote
n<span class="token punctuation">)</span> New remote
d<span class="token punctuation">)</span> Delete remote
r<span class="token punctuation">)</span> Rename remote
c<span class="token punctuation">)</span> Copy remote
s<span class="token punctuation">)</span> Set configuration password
q<span class="token punctuation">)</span> Quit config
e/n/d/r/c/s/q<span class="token operator">&gt;</span> q
</code></pre></div><p>\u81F3\u6B64\u6211\u4EEC\u5C31\u914D\u7F6E\u5B8C\u4E86\uFF0C\u5982\u679C\u4F60\u5728\u5176\u4ED6\u673A\u5668\u4E0A\u914D\u7F6E\uFF0C\u8BB0\u5F97\u5C06\u4F60\u7684\u914D\u7F6E\u6587\u4EF6copy\u5230\u4E4B\u524D\u6211\u4EEC\u521B\u5EFA\u7684\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u3002 \u5982\u679C\u4F7F\u7528docker\u914D\u7F6E\u7684\uFF0C\u521A\u4E0D\u9700\u8981\u4FEE\u6539\u3002\u4F46\u6211\u4EEC\u9700\u8981\u5C06\u539F\u6765\u7684\u5BB9\u5668\u5220\u9664\uFF0C\u7136\u540E\u628A<code>RemotePath</code>\u628A\u6211\u4EEC\u7684aliyun\u7ED9\u586B\u4E0A\uFF0C\u5373\u6211\u4EEC\u8981\u4F7F\u7528aliyun\u8FD9\u4E2A\u914D\u7F6E\u3002\u91CD\u542F\u8FD0\u884C\u5373\u53EF</p><p>\u7136\u540E\u53EF\u4EE5\u5728\u5BBF\u4E3B\u673A\u4E0A\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF0C\u67E5\u770B\u662F\u5426\u5DF2\u7ECF\u6B63\u786E\u6302\u8F7D</p><div class="language-bash"><pre><code><span class="token function">df</span> -h
</code></pre></div>`,48),c=[p];function u(r,l,i,k,d,g){return a(),s("div",null,c)}var h=n(o,[["render",u]]);export{b as __pageData,h as default};
