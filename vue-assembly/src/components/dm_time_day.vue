<template>
  <div class="dm_header">
    <div class="dm_header1">
      <img src="../assets/time.png" alt="" />
      <div class="xg_time_control">
        <el-date-picker
          v-model="time"
          type="date"
          placeholder="选择日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          prefix-icon="none"
          clear-icon="none"
          @change="tim()"
        >
        </el-date-picker>
      </div>
      <div class="dm_day dm_day1" @click="day(1)">前一天</div>
      <div class="dm_day" @click="day(2)">当 天</div>
      <div class="dm_day" @click="day(3)">后一天</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  props: {
    dmshow: {
      type: Boolean,
    },
  },
  methods: {
    tim() {
      this.$emit("dmclick", this.time);
    },
    // 前一天  当天 后一天方法
    day(e) {
      if (e == 1) {
        this.time = this.$api.timeFormat(
          new Date(this.time) * 1 - 86400 * 1000 * 1,
          "day"
        );
      }
      if (e == 2) {
        this.time = this.$api.timeFormat(new Date() * 1, "day");
      }
      if (e == 3) {
        this.time = this.$api.timeFormat(
          new Date(this.time) * 1 + 86400 * 1000 * 1,
          "day"
        );
      }
      this.$emit("dmclick", this.time);
    },
  },
  components: {},
  created() {},
  mounted() {
    this.time = this.$api.timeFormat(new Date() * 1, "day");
    this.$emit("dmclick", this.time);
  },
};
</script>
<style scoped>
.dm_header {
  /* width: 87.5vw;
  margin: 0 auto; */
  display: flex;
  justify-content: space-between;
}
.dm_header1 {
  background: #1d3466;
  border-radius: 4px 4px 4px 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.2vh;
  padding-right: 0.2vw;
  position: relative;
}
.dm_header1 img {
  width: 0.9vw;
  height: 0.9vw;
  margin-left: 0.5vw;
}
.dm_day {
  min-width: 3vw;
  color: #fff;
  text-align: center;
  line-height: 2.5vh;
  background: #0058ce;
  border-radius: 3px;
  margin-left: 0.5vw;
  font-size: 0.7vw;
  z-index: 999;
  cursor: pointer;
}
.dm_day1 {
  /* margin-left: -0.5vw; */
}
.xg_time_control {
  margin-left: 0.5vw;
}
::v-deep .xg_time_control .el-input--prefix .el-input__inner {
  height: 3.2vh;
  width: 4vw;
  padding: 0;
  overflow: hidden;
  font-size: 0.7vw;
  background: #1d3466;
  border: none;
  color: #809dd2;
  padding-top: 0.24vh;
}
::v-deep .xg_time_control .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 3.5vw;
}

.new_text {
  position: absolute;
  top: 0vh;
}
</style>