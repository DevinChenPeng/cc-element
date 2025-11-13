/*
 * @Description:
 * @Date: 2021-09-17 15:48:56
 * @LastEditTime: 2021-10-11 14:24:25
 * @FilePath: \web-template\src\views\mds\components\date_select\code.js
 * @Author: Devin
 */
export default {
  code_1: `<pre class="language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDateSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></pre>`,
  code_2: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDateSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">:disabledTimeRange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ type: <span class="token punctuation">'</span>after<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDateSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">:disabledTimeRange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ type: <span class="token punctuation">'</span>before<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span></pre>`,
  code_3: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDateSelect</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disabledTimeRange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    type: <span class="token punctuation">'</span>range<span class="token punctuation">'</span>,
    startValue: <span class="token punctuation">'</span>2021-07-01<span class="token punctuation">'</span>,
    endValue: <span class="token punctuation">'</span>2021-10-01<span class="token punctuation">'</span>,
    dateFormat: <span class="token punctuation">'</span>YYYY-MM-DD<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDateSelect</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disabledTimeRange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
    type: <span class="token punctuation">'</span>range<span class="token punctuation">'</span>,
    startValue: <span class="token punctuation">'</span>2021-09-15<span class="token punctuation">'</span>,
    endValue: newDate,  // newDate = dayjs(new Date(), [<span class="token punctuation">'</span>YYYY-MM-DD<span class="token punctuation">'</span>])
    dateFormat: <span class="token punctuation">'</span>YYYY-MM-DD<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">/&gt;</span></span></pre>`,
  code_4: `<pre class="language-markup" contenteditable="false"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcDatePickerRange</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcDatePickerRange</span><span class="token punctuation">&gt;</span></span></pre>`
};
