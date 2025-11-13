<!--
 * @Description:
 * @Date: 2021-06-09 20:29:41
 * @LastEditTime: 2021-10-13 15:00:17
 * @FilePath: \cc-common-resource\packages\cc-date-picker\src\main.vue
 * @Author: Devin
-->
<script>
import dayjs from "dayjs";
import props from "./props";
import { renderFun } from "./render";
export default {
  name: "CcDatePicker",
  props: props,
  data() {
    return {};
  },
  watch: {},
  created() {},
  computed: {
    pickerOptionsComputed() {
      let pickerOptions = {};
      if (this.disabledTimeRange) {
        pickerOptions.disabledDate = time => {
          if (this.disabledTimeRange.type === "after") {
            let startValue = this.disabledTimeRange.startValue
              ? new Date(this.disabledTimeRange.startValue)
              : Date.now();
            return time.getTime() > startValue;
          } else if (this.disabledTimeRange.type === "before") {
            let startValue = this.disabledTimeRange.startValue
              ? new Date(this.disabledTimeRange.startValue)
              : Date.now();
            return time.getTime() < startValue - 8.64e7;
          } else if (this.disabledTimeRange.type === "range") {
            return this.getTimeRange(time);
          }
        };
      }
      if (this.pickerOptions) {
        return this.pickerOptions;
      } else {
        return pickerOptions;
      }
    }
  },
  methods: {
    getTimeRange(time) {
      let endValue = new Date(this.disabledTimeRange.endValue);
      let startValue = this.disabledTimeRange.startValue
        ? new Date(this.disabledTimeRange.startValue)
        : Date.now();
      if (dayjs(startValue).isBefore(endValue)) {
        let startValueSelf = this.disabledTimeRange.startValue
          ? new Date(this.disabledTimeRange.startValue)
          : Date.now() - 8.64e7;
        if (endValue) {
          return time.getTime() > endValue || time.getTime() < startValueSelf;
        } else {
          return time.getTime() < startValueSelf;
        }
      } else {
        let startValueSelf = this.disabledTimeRange.startValue
          ? new Date(this.disabledTimeRange.startValue)
          : Date.now();
        if (endValue) {
          return time.getTime() < endValue || time.getTime() > startValueSelf;
        } else {
          return time.getTime() > startValueSelf;
        }
      }
    },
    handleInput($event) {
      this.$emit("input", $event);
    }
  },
  render(h) {
    return renderFun(this, h);
  }
};
</script>
<style lang="scss" scoped></style>
