<template>
  <div class="links">
    <div v-for="item in links" :key="item.herf" class="link-item">
      <a :href="item.herf">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: { links: Array },
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang='scss'>
.links {
  .link-item {
      height: 32px;
      display: flex;
      align-items: center;
  }
}
</style>