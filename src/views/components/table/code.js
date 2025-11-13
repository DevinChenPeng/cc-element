/*
 * @Description:
 * @Date: 2021-09-17 15:48:56
 * @LastEditTime: 2021-09-23 16:15:28
 * @FilePath: \mds\src\views\mds\components\table\code.js
 * @Author: Devin
 */
export default {
  code1: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>local<span class="token punctuation">"</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>
<pre class="language-javascript" contenteditable="false" data-mce-selected="1">columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
    minWidth<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    fixed<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'生日'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'邮箱'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'性别'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'地址'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

tableData<span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  date<span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token string">'yyyy-MM-dd'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">cname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  status<span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">'男'</span> <span class="token operator">:</span> <span class="token string">'女'</span><span class="token punctuation">,</span>
  address<span class="token operator">:</span> Random<span class="token punctuation">.</span><span class="token function">region</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></pre>`,
  code2: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns4<span class="token punctuation">"</span></span>
  <span class="token attr-name">:dataHandler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item)=&gt;{
    item.isEditor = Random.boolean();
    return item;
  }<span class="token punctuation">"</span></span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cc-table<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>
<pre class=" language-javascript" contenteditable="false" data-mce-selected="1">columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'姓名'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'生日'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'邮箱'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'性别'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'地址'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'isEditor'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'是否编辑状态'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span></pre>`,
  code3: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
    <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>append<span class="token punctuation">"</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>public.operation<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120px<span class="token punctuation">"</span></span>
    <span class="token attr-name">fixed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconButton</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IconButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>`,
  code4: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color:red<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>这是自定义的表头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#sex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ row }<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span><span class="token punctuation">&gt;</span></span>这是slot方式：{{ row.status }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>
<pre class=" language-javascript" contenteditable="false" data-mce-selected="1">columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
    slotHeaderName<span class="token operator">:</span> <span class="token string">"name"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'生日'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'邮箱'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'性别'</span><span class="token punctuation">,</span>
    slotName<span class="token operator">:</span> <span class="token string">'sex'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'地址'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'这是使用render函数处理后的地址：'</span> <span class="token operator">+</span> row<span class="token punctuation">.</span>address<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span></pre>`,
  code5: `<pre class="language-markup" contenteditable="false"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
<span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
<span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
<span class="token attr-name">:setupSort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>id<span class="token punctuation">'</span></span>
<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sort-table<span class="token punctuation">"</span></span>
<span class="token attr-name">@sortTableDropHandler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sortTableDropHandler<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>append<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span> <span class="token attr-name">class-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>end-operation<span class="token punctuation">"</span></span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t(<span class="token punctuation">'</span>public.operation<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconButton</span> <span class="token attr-name">iconType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>move<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sortClass<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IconButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>`,
  code6: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
<span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
<span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
<span class="token attr-name">:infiniteScroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>`,
  code7: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>
<pre class="language-javascript" contenteditable="false" data-mce-selected="1">columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'序号'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'姓名'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'生日'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'邮箱'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'性别'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'地址'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span></pre>`,
  code8: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcTable</span>
<span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/table/list<span class="token punctuation">"</span></span>
<span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns5<span class="token punctuation">"</span></span>
<span class="token attr-name">:customSort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcTable</span><span class="token punctuation">&gt;</span></span></pre>
<pre class=" language-javascript" contenteditable="false">columns<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'姓名'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'生日'</span><span class="token punctuation">,</span>
    sortable<span class="token operator">:</span> <span class="token string">'custom'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'邮箱'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'性别'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'地址'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span></pre>`
};
