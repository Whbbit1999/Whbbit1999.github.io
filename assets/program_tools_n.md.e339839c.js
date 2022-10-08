import{_ as s,o as a,c as n,a as l}from"./app.ed522904.js";const b=JSON.parse('{"title":"n \u5207\u6362 node \u7248\u672C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528 n \u5207\u6362\u7248\u672C\u65E0\u6548","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528-n-\u5207\u6362\u7248\u672C\u65E0\u6548","link":"#\u4E3A\u4EC0\u4E48\u4F7F\u7528-n-\u5207\u6362\u7248\u672C\u65E0\u6548","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"relativePath":"program/tools/n.md","lastUpdated":1659026257000}'),e={name:"program/tools/n.md"},p=l(`<h1 id="n-\u5207\u6362-node-\u7248\u672C" tabindex="-1">n \u5207\u6362 node \u7248\u672C <a class="header-anchor" href="#n-\u5207\u6362-node-\u7248\u672C" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">npm i -g n</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">npm i -g n</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528-n-\u5207\u6362\u7248\u672C\u65E0\u6548" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F7F\u7528 n \u5207\u6362\u7248\u672C\u65E0\u6548 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528-n-\u5207\u6362\u7248\u672C\u65E0\u6548" aria-hidden="true">#</a></h2><blockquote><p>n \u7684\u5B89\u88C5\u8DEF\u5F84\u548C node \u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u4E00\u81F4</p></blockquote><ol><li>\u67E5\u770B node \u5B89\u88C5\u8DEF\u5F84</li></ol><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">which node</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">which node</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u7F16\u8F91<code>.bash_profile</code>\u6587\u4EF6</li></ol><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">vim </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CAEE;">/.bash_profile</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">vim </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">export N_PREFIX=/usr/local/bin/node #\u6839\u636E\u4F60\u7684\u5B89\u88C5\u8DEF\u5F84\u800C\u5B9A</span></span>
<span class="line"><span style="color:#dbd7caee;">export PATH=$N_PREFIX/bin:$PATH</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393a34;">export N_PREFIX=/usr/local/bin/node #\u6839\u636E\u4F60\u7684\u5B89\u88C5\u8DEF\u5F84\u800C\u5B9A</span></span>
<span class="line"><span style="color:#393a34;">export PATH=$N_PREFIX/bin:$PATH</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><hr><ol start="3"><li>\u4FDD\u5B58\u5E76\u5237\u65B0\u6587\u4EF6</li></ol><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#B8A965;">source</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CAEE;">/.bash_profile</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#998418;">source</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u91CD\u65B0\u5B89\u88C5 n</li></ol><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">n stable</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">n stable</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6B21\u5C31\u53EF\u4EE5\u5207\u6362\u7248\u672C\u4E86\uFF0C\u4F46\u662F\u9700\u8981\u6388\u4E88 sudo \u6743\u9650</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">sudo n</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">sudo n</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1">\u53C2\u8003\u6587\u7AE0 <a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a></h2><p><a href="https://segmentfault.com/a/1190000038420280" target="_blank" rel="noreferrer">n \u6A21\u5757\u5207\u6362 node \u7248\u672C\u65E0\u6548\u7684\u89E3\u51B3\u529E\u6CD5</a></p>`,20),o=[p];function c(t,r,d,i,h,u){return a(),n("div",null,o)}const _=s(e,[["render",c]]);export{b as __pageData,_ as default};
