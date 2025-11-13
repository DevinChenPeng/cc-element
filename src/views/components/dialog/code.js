/*
 * @Description:
 * @Date: 2021-09-17 15:48:56
 * @LastEditTime: 2021-10-15 11:49:50
 * @FilePath: \web-template\src\views\mds\components\dialog\code.js
 * @Author: Devin
 */
export default {
  code: `<pre class="language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDialog</span>
  <span class="token attr-name">:visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
  <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = false<span class="token punctuation">"</span></span>
  <span class="token attr-name">@handleCancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = false<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcDialog</span><span class="token punctuation">&gt;</span></span></pre>`,
  code1: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDialog</span>
  <span class="token attr-name">:visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>
  <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = false<span class="token punctuation">"</span></span>
  <span class="token attr-name">@handleCancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible = false<span class="token punctuation">"</span></span>
  <span class="token attr-name">:stopCloseFun</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stopCloseFun<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcDialog</span><span class="token punctuation">&gt;</span></span></pre><pre class=" language-javascript" contenteditable="false" data-mce-selected="1">methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">stopCloseFun</span><span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$cc_message_confirm</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$cc_message</span><span class="token punctuation">(</span><span class="token string">'阻止关闭'</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span></pre>`
};
