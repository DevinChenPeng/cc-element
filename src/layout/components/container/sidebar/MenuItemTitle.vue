<!--
 * @Description: 
 * @Date: 2021-09-14 15:42:54
 * @LastEditTime: 2021-09-17 17:47:30
 * @FilePath: \mds\src\layout\components\container\sidebar\MenuItemTitle.vue
 * @Author: Devin
-->
<script>
export default {
  name: 'MenuItemTitle',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      vnodes.push(<i class={['iconfont', icon, 'menu-item-icon']} />);
    }
    vnodes.push(
      <span slot="title" class={['menu-item-title']}>
        {title}
      </span>
    );
    return vnodes;
  }
};
</script>

<style scoped lang="scss">
</style>