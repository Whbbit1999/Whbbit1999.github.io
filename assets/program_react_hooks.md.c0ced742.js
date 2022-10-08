import{_ as s,o as n,c as a,a as l}from"./app.ed522904.js";const i=JSON.parse('{"title":"\u81EA\u5B9A\u4E49 hooks","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"styled-components","slug":"styled-components","link":"#styled-components","children":[]},{"level":2,"title":"storybook","slug":"storybook","link":"#storybook","children":[]},{"level":2,"title":"Hygen","slug":"hygen","link":"#hygen","children":[]},{"level":2,"title":"React Spring","slug":"react-spring","link":"#react-spring","children":[]}],"relativePath":"program/react/hooks.md","lastUpdated":1664082154000}'),o={name:"program/react/hooks.md"},p=l(`<h1 id="\u81EA\u5B9A\u4E49-hooks" tabindex="-1">\u81EA\u5B9A\u4E49 hooks <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-hooks" aria-hidden="true">#</a></h1><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u8FD9\u91CC\u7528\u4E00\u4E2A\u6309\u94AE\u70B9\u51FB\u540E\u6539\u53D8\u6587\u672C\u989C\u8272\u7684\u6848\u4F8B\u6765\u5C55\u793A\u81EA\u5B9A\u4E49 hooks</p><div class="info custom-block"><p class="custom-block-title">hooks \u6587\u4EF6\u540D</p><p>\u5728 React \u4E2D\u81EA\u5B9A\u4E49 hooks \u6587\u4EF6\u4E00\u822C\u4F7F\u7528 use \u5F00\u5934</p></div><p>jsx \u4E2D</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useState</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">react</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">./Button</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useColorSwitch</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">./useColorSwitch</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">App</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#BD976A;">color1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">handleBtn1Click</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useColorSwitch</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#BD976A;">color2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">handleBtn2Click</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useColorSwitch</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">#ffff00</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">#00ffff</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">className</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">App</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">Button</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">label</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">\u6309\u94AE</span><span style="color:#C98A7DAA;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">onClick</span><span style="color:#666666;">={</span><span style="color:#BD976A;">handleBtn1Click</span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&gt;&lt;/</span><span style="color:#B8A965;">Button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">style</span><span style="color:#666666;">={{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">color</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">color1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}}&gt;</span><span style="color:#DBD7CAEE;">\u8FD9\u91CC\u6F14\u793AuseState\u7684\u4F7F\u7528</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">Button</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">label</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">button</span><span style="color:#C98A7DAA;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">onClick</span><span style="color:#666666;">={</span><span style="color:#BD976A;">handleBtn2Click</span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">span</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">\u8FD9\u91CC\u65F6children\u5185\u5BB9</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">span</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&lt;/</span><span style="color:#B8A965;">Button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">style</span><span style="color:#666666;">={{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">color</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">color2</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}}&gt;</span><span style="color:#DBD7CAEE;">\u8FD9\u91CC\u6F14\u793AuseState\u7684\u4F7F\u7528</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">App</span><span style="color:#666666;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useState</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">react</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Button</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">./Button</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useColorSwitch</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">./useColorSwitch</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">App</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B07D48;">color1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">handleBtn1Click</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useColorSwitch</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B07D48;">color2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">handleBtn2Click</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useColorSwitch</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">#ffff00</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">#00ffff</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">className</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">App</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">Button</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">label</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">\u6309\u94AE</span><span style="color:#B56959AA;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">onClick</span><span style="color:#999999;">={</span><span style="color:#B07D48;">handleBtn1Click</span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&gt;&lt;/</span><span style="color:#998418;">Button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">style</span><span style="color:#999999;">={{</span><span style="color:#393A34;"> </span><span style="color:#998418;">color</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">color1</span><span style="color:#393A34;"> </span><span style="color:#999999;">}}&gt;</span><span style="color:#393A34;">\u8FD9\u91CC\u6F14\u793AuseState\u7684\u4F7F\u7528</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">Button</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">label</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">button</span><span style="color:#B56959AA;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">onClick</span><span style="color:#999999;">={</span><span style="color:#B07D48;">handleBtn2Click</span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">span</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">\u8FD9\u91CC\u65F6children\u5185\u5BB9</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">span</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&lt;/</span><span style="color:#998418;">Button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">style</span><span style="color:#999999;">={{</span><span style="color:#393A34;"> </span><span style="color:#998418;">color</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">color2</span><span style="color:#393A34;"> </span><span style="color:#999999;">}}&gt;</span><span style="color:#393A34;">\u8FD9\u91CC\u6F14\u793AuseState\u7684\u4F7F\u7528</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">App</span><span style="color:#999999;">;</span></span>
<span class="line"></span></code></pre></div><p>\u81EA\u5B9A\u4E49 hooks \u6587\u4EF6</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useState</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">react</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useColorSwitch</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">color1</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">#ff00ff</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">color2</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">#ff0000</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#BD976A;">color</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setColor</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useState</span><span style="color:#666666;">(</span><span style="color:#BD976A;">color1</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">handleBtnClick</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">setColor</span><span style="color:#666666;">(</span><span style="color:#BD976A;">color2</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#BD976A;">color</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">handleBtnClick</span><span style="color:#666666;">];</span></span>
<span class="line"><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useColorSwitch</span><span style="color:#666666;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useState</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">react</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useColorSwitch</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">color1</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">#ff00ff</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">color2</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">#ff0000</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B07D48;">color</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setColor</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useState</span><span style="color:#999999;">(</span><span style="color:#B07D48;">color1</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#59873A;">handleBtnClick</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">setColor</span><span style="color:#999999;">(</span><span style="color:#B07D48;">color2</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B07D48;">color</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">handleBtnClick</span><span style="color:#999999;">];</span></span>
<span class="line"><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useColorSwitch</span><span style="color:#999999;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="styled-components" tabindex="-1"><a href="https://styled-components.com/" target="_blank" rel="noreferrer">styled-components</a> <a class="header-anchor" href="#styled-components" aria-hidden="true">#</a></h2><h2 id="storybook" tabindex="-1"><a href="https://storybook.js.org/" target="_blank" rel="noreferrer">storybook</a> <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><h2 id="hygen" tabindex="-1">Hygen <a class="header-anchor" href="#hygen" aria-hidden="true">#</a></h2><h2 id="react-spring" tabindex="-1">React Spring <a class="header-anchor" href="#react-spring" aria-hidden="true">#</a></h2>`,12),e=[p];function t(c,r,y,A,D,B){return n(),a("div",null,e)}const C=s(o,[["render",t]]);export{i as __pageData,C as default};
