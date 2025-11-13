<!--
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-09-22 10:52:03
 * @FilePath: \mds\src\components\packages\button\src\main.vue
 * @Author: Devin
-->
<script>
import { renderFun } from './render';
import props from './props';

export default {
  name: 'CcButton',
  props: props,
  methods: {},
  computed: {
    selfClass() {
      let endArray = [...this.classArray];
      if (this.type === 'text') {
        endArray = [];
      } else if (this.type === 'textAdd') {
        endArray = ['iconfont', 'icon-tianjia', 'el-button--text', this.$style.icontianjia];
      } else if (this.type === 'basic') {
        endArray = ['button-basic-w', ...endArray];
      } else {
        endArray = ['button-basic', ...endArray];
      }
      return [...endArray,'cc-button'];
    }
  },
  render(h) {
    return renderFun(this, h);
  }
};
</script>
<style lang="scss" module>


.icontianjia {
  color: $TC3;
  & > span {
    padding-left: 8px;
  }
}
</style>
