<template>
  <div style="margin-left: 10vw">
    <!-- dmclick   点击时间
    dm_title   一级
    dm_option  二级
    dm_send    三级 -->
    <dm_bar
      @dmclick="ggsb"
      :dm_title="dm_title"
      :dm_option="dm_option"
      :dm_send="dm_send"
    >
    </dm_bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dm_title: [
        "概览",
        "视频广场",
        "分屏展示",
        "版本信息",
        "录像回看",
        "HUD视频中心",
      ],
      dm_option: [
        [],
        [
          "炼铁厂",
          "炼钢厂",
          "轧钢厂",
          "安保处",
          "线材",
          "置场",
          "工程施工现场",
          "环保置场",
          "其他",
        ],
        [],
        [],
        [],
        [],
      ],
      dm_send: [
        "123出铁场123",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
        "123出铁场",
      ],
    };
  },
  methods: {
    ggsb(parms) {
      // console.log(parms);
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>
