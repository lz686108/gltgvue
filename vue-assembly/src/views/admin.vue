<template>
  <!-- 头部 -->
  <div class="admin">
    <myheader :state="1"></myheader>
    <div style="display: flex">
      <dm_bar
        @dmclick="chooseleft"
        :dm_title="dm_title"
        :dm_option="dm_option"
        :dm_send="dm_send"
      >
      </dm_bar>
      <div class="right">
        <!-- vue缓存 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>

        <div class="footer">责任工程师：XXX IT开发：XXX UI设计：XXX</div>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from "@/components/header.vue";
// import mytable from "@/components/table.vue";
export default {
  data() {
    return {
      dm_title: [
        "表格",
        "时间表格",
        "表格样式",
        "组件库",
        "侧部菜单栏",
        "新版表格",
      ],
      dm_option: [],
      dm_send: [],
    };
  },
  methods: {
    chooseleft(parms) {
      console.log(parms.name);
      switch (parms.name) {
        case "表格":
          this.$router.push("/table");
          break;
        case "时间表格":
          this.$router.push("/table1");
          break;
        case "表格样式":
          this.$router.push("/table2");
          break;
        case "组件库":
          this.$router.push("/Component_library");
          break;
        case "侧部菜单栏":
          this.$router.push("/ce");
          break;
        case "新版表格":
          this.$router.push("table3");
          break;
        default:
          break;
      }
    },
  },
  components: {
    myheader,
  },
  created() {},
  mounted() {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.admin {
  background: #091022;
  width: 100vw;
  height: 100vh;
}

.left {
  background-color: #2a354b;
  width: 15vw;
  height: 91vh;
  color: #8cb0be;
  padding-top: 1vh;
}

.left_item {
  width: 100%;
  height: 5vh;
  /* background-color: #142752; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 0.9vw;
  cursor: pointer;
}

.left_img {
  width: 17.2px;
  height: 17.2px;
  margin-right: 1vw;
  margin-left: 1vw;
}

.left_img1 {
  width: 20px;
  height: 19px;
  margin-right: 1vw;
  margin-left: 1vw;
}

.left_img2 {
  width: 17px;
  height: 21px;
  margin-right: 1vw;
  margin-left: 1vw;
}

.right {
  width: 85vw;
  /* height: 92vh; */
  /* border: 1px solid red; */
}

.footer {
  width: 88vw;
  position: fixed;
  bottom: 0;
  line-height: 2.2vh;
  color: #fff;
  font-size: 0.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
