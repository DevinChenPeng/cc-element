<!--
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-12-29 10:42:30
 * @FilePath: \cc-common-resource\packages\cc-icon-button\src\main.vue
 * @Author: Devin
-->
<script>
import props from './props';
import { renderFun } from './render';
import variableRoot from '../../../styles/variableRoot.scss';
import { iconClass, titleTexts } from '@/utils/cc-components-config/icon-button';
export default {
  name: 'IconButton',
  props: props,
  data() {
    return {
      icons: iconClass
    };
  },
  computed: {
    iconClass() {
      return this.icon || this.icons[this.iconType];
    },
    titleText() {
      return this.title || this.titleTexts[this.iconType];
    },
    variableRoot() {
      return variableRoot;
    },
    titleTexts() {
      return titleTexts;
    }
  },
  created() {},
  methods: {},
  render(h) {
    return renderFun(this, h);
  }
};
</script>

<style lang="scss" scoped>
button[disabled] {
  color: #ccc;
  cursor: not-allowed;
}
.button-icon.icon-yidongdao {
  cursor: grab;
}
.button-icon {
  color: var(--color);
  font-size: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--bg-color);
}
.button-icon:hover {
  background-color: var(--bg-color-hover);
  border-radius: 4px;
}
.button-icon + .button-icon {
  margin-left: 8px;
}
</style>
