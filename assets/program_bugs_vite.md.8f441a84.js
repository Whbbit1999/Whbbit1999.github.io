import{_ as s,o as n,c as a,a as l}from"./app.ed522904.js";const h=JSON.parse('{"title":"vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue+ts \u5DE5\u7A0B\uFF1A\u627E\u4E0D\u5230\u6A21\u5757\u201C@/api/user\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E","slug":"vue-ts-\u5DE5\u7A0B\uFF1A\u627E\u4E0D\u5230\u6A21\u5757\u201C-api-user\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E","link":"#vue-ts-\u5DE5\u7A0B\uFF1A\u627E\u4E0D\u5230\u6A21\u5757\u201C-api-user\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E","children":[]},{"level":2,"title":"vue3 \u9879\u76EE\u62A5\u9519\uFF1A\u65E0\u6CD5\u4F7F\u7528 JSX\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86 \\"--jsx\\" \u6807\u5FD7","slug":"vue3-\u9879\u76EE\u62A5\u9519\uFF1A\u65E0\u6CD5\u4F7F\u7528-jsx\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86-jsx-\u6807\u5FD7","link":"#vue3-\u9879\u76EE\u62A5\u9519\uFF1A\u65E0\u6CD5\u4F7F\u7528-jsx\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86-jsx-\u6807\u5FD7","children":[]}],"relativePath":"program/bugs/vite.md","lastUpdated":1658244845000}'),p={name:"program/bugs/vite.md"},o=l(`<h1 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h1><h2 id="vue-ts-\u5DE5\u7A0B\uFF1A\u627E\u4E0D\u5230\u6A21\u5757\u201C-api-user\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E" tabindex="-1">vue+ts \u5DE5\u7A0B\uFF1A\u627E\u4E0D\u5230\u6A21\u5757\u201C@/api/user\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#vue-ts-\u5DE5\u7A0B\uFF1A\u627E\u4E0D\u5230\u6A21\u5757\u201C-api-user\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u5728 <code>tsconfig.node.json</code> / <code>tsconfig.json</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965AA;">&quot;</span><span style="color:#B8A965;">compilerOptions</span><span style="color:#B8A965AA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line highlighted"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965AA;">&quot;</span><span style="color:#B8A965;">baseUrl</span><span style="color:#B8A965AA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">./</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line highlighted"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965AA;">&quot;</span><span style="color:#B8A965;">paths</span><span style="color:#B8A965AA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line highlighted"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965AA;">&quot;</span><span style="color:#B8A965;">@/*</span><span style="color:#B8A965AA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">src/*</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">]</span></span>
<span class="line highlighted"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418AA;">&quot;</span><span style="color:#998418;">compilerOptions</span><span style="color:#998418AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#998418AA;">&quot;</span><span style="color:#998418;">baseUrl</span><span style="color:#998418AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">./</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#998418AA;">&quot;</span><span style="color:#998418;">paths</span><span style="color:#998418AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">      </span><span style="color:#998418AA;">&quot;</span><span style="color:#998418;">@/*</span><span style="color:#998418AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">src/*</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">]</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="vue3-\u9879\u76EE\u62A5\u9519\uFF1A\u65E0\u6CD5\u4F7F\u7528-jsx\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86-jsx-\u6807\u5FD7" tabindex="-1">vue3 \u9879\u76EE\u62A5\u9519\uFF1A\u65E0\u6CD5\u4F7F\u7528 JSX\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86 &quot;--jsx&quot; \u6807\u5FD7 <a class="header-anchor" href="#vue3-\u9879\u76EE\u62A5\u9519\uFF1A\u65E0\u6CD5\u4F7F\u7528-jsx\uFF0C\u9664\u975E\u63D0\u4F9B\u4E86-jsx-\u6807\u5FD7" aria-hidden="true">#</a></h2><p>\u5728 <code>tsconfig.node.json</code> / <code>tsconfig.json</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965AA;">&quot;</span><span style="color:#B8A965;">compilerOptions</span><span style="color:#B8A965AA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line highlighted"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965AA;">&quot;</span><span style="color:#B8A965;">jsx</span><span style="color:#B8A965AA;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">preserve</span><span style="color:#C98A7DAA;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418AA;">&quot;</span><span style="color:#998418;">compilerOptions</span><span style="color:#998418AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#998418AA;">&quot;</span><span style="color:#998418;">jsx</span><span style="color:#998418AA;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">preserve</span><span style="color:#B56959AA;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,A,y,i,u){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{h as __pageData,B as default};
