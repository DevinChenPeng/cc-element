/*
 * @Description:
 * @Date: 2021-09-17 15:48:56
 * @LastEditTime: 2021-09-27 14:33:45
 * @FilePath: \mds\src\views\mds\components\select\code.js
 * @Author: Devin
 */
export default {
  code_1: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>默认选择器<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcSelect</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>多选选择器<span class="token punctuation">"</span></span> <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcSelect</span><span class="token punctuation">&gt;</span></span>
  
  options: [
    { id: '1', name: '王五' },
    { id: '2', name: '李四' }
  ]</pre>`,
  code_2: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcSelect</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data1<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>使用slot选择器<span class="token punctuation">"</span></span>
  <span class="token attr-name">:showOptionSlot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ optionLists, optionKeys }<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in optionLists<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item[optionKeys.value]<span class="token punctuation">"</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item[optionKeys.label] + <span class="token punctuation">'</span>slot<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item[optionKeys.value]<span class="token punctuation">"</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcSelect</span><span class="token punctuation">&gt;</span></span></pre>`,
  code_3: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcSelect</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data2<span class="token punctuation">"</span></span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/select/list<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>远程数据模式<span class="token punctuation">"</span></span>
  <span class="token attr-name">:optionKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ value: <span class="token punctuation">'</span>id<span class="token punctuation">'</span>, label: <span class="token punctuation">'</span>name<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span>
  <span class="token attr-name">filterable</span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcSelect</span><span class="token punctuation">&gt;</span></span></pre>`,
  code_4: `<pre class="language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcSelect</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/select/list<span class="token punctuation">"</span></span>
  <span class="token attr-name">:optionKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ value: <span class="token punctuation">'</span>id<span class="token punctuation">'</span>, label: <span class="token punctuation">'</span>name<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disableValues</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[false]<span class="token punctuation">"</span></span>
  <span class="token attr-name">disableKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>status<span class="token punctuation">"</span></span>
  <span class="token attr-name">filterable</span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcSelect</span><span class="token punctuation">&gt;</span></span></pre>`,
};
