export default {
  code1: `<pre class=" language-markup" contenteditable="false" data-mce-selected="1"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CcForm</span> 
  <span class="token attr-name">:forms</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>forms<span class="token punctuation">"</span></span>
  <span class="token attr-name">:submit-handler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submitHandler<span class="token punctuation">"</span></span>
  <span class="token attr-name">:backHandler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClose<span class="token punctuation">"</span></span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ElSearchForm<span class="token punctuation">"</span></span>
  <span class="token attr-name">labelPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span>
  <span class="token attr-name">:labelWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#slotSex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{params}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>params.porp<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-radio</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-radio</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-radio-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CcForm</span><span class="token punctuation">&gt;</span></span></pre>`,
  code2: `<pre class="language-javascript" contenteditable="false" data-mce-selected="1"><span class="token comment">// data</span>
  forms<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      maxlength<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$requiredInput<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'sex'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'性别'</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      slotName<span class="token operator">:</span> <span class="token string">'slotSex'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    birth<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'birth'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'出生年月'</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      disabledTimeRange<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'after'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$requiredSelect<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    education<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'education'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'学历'</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'博士'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'硕士'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'本科'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'大专'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'高中'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'初中'</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      disableValues<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'5'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      disableKey<span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span>
      changeSelect<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>educationChange
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    school<span class="token operator">:</span> <span class="token punctuation">{</span>
      porp<span class="token operator">:</span> <span class="token string">'school'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'学校'</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'四川大学'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'成都电子科技大学'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'其他'</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      hidden<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    nation<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'nation'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'民族'</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> nation56<span class="token punctuation">,</span>
      optionKeys<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'name'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    phone<span class="token operator">:</span> <span class="token punctuation">{</span>
      porp<span class="token operator">:</span> <span class="token string">'phone'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'联系电话'</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
      maxlength<span class="token operator">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'电子邮箱'</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span>
      maxlength<span class="token operator">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    address<span class="token operator">:</span> <span class="token punctuation">{</span>
      prop<span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">'家庭住址'</span><span class="token punctuation">,</span>
      itemType<span class="token operator">:</span> <span class="token string">'textarea'</span><span class="token punctuation">,</span>
      maxlength<span class="token operator">:</span> <span class="token number">500</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// method</span>
  <span class="token function">educationChange</span><span class="token punctuation">(</span><span class="token parameter">val, valObj, params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    params.school = ''
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token string">'education'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">=</span> <span class="token number">12</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token string">'school'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hidden <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token string">'education'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>span <span class="token operator">=</span> <span class="token number">24</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token string">'school'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>hidden <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>&#xFEFF;</pre>`

}