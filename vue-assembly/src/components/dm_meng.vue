<template>
  <div class="dm_mask">
    <div class="dm_dialog">
      <div class="dm_flex" style="height: 6vh">
        <p>新增</p>
        <!-- <img
          @click="dmshow = false"
          src="../assets/img_icon/guanbi@2x.png"
          alt=""
        /> -->
      </div>
      <!-- <div class="dm_flex" style="width: 90%; flex-wrap: wrap">
            <div class="dm_flex1">
              <span>姓名</span>
              <input type="text" placeholder="请输入" v-model="arr.name" />
            </div>
            <div class="dm_flex1">
              <span>年龄</span>
              <div class="xg_input">
                <el-select placeholder="请选择年龄" v-model="arr.age">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="dm_flex1">
              <span>处分时间</span>
              <div class="xg_input">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  v-model="arr.time"
                >
                </el-date-picker>
              </div>
            </div>
          </div> -->
      <!-- 卡槽 -->
      <slot></slot>
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
  methods: {},
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.dm_header {
  width: 80vw;
  height: 70vh;
  background: red;
}
</style>