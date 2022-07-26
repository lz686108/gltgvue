<template>
  <div class="Side_menu_bar">
    <div class="side_index" v-for="(item, index) in dm_title" :key="index">
      <div
        class="side_index side_flex1"
        :style="bar_title_click1 === index ? 'background:#192633' : ''"
        @click.stop="bar_title_c(index, item)"
      >
        <img :src="arr[index].img" alt="" />
        <span class="side_text">{{ item }}</span>
      </div>
      <el-collapse-transition>
        <div
          v-show="
            index === bar_title_click && bar_title_click === bar_title_click
          "
        >
          <div
            class="side_left"
            v-for="(item1, index1) in dm_option[index]"
            :key="index1"
            @click.stop="bar_frist_c(index1, item1, item)"
          >
            <div
              class="side_child"
              :key="index1"
              :style="
                bar_frist_click === index1
                  ? 'border-right:0.25vw solid #e0b564'
                  : ''
              "
            >
              <img
                v-if="bar_frist_click === index1 && dm_send.length != 0"
                src="../assets/bar_icon/shouye_icon1@2x.png"
                alt=""
              />
              <img
                v-if="bar_frist_click !== index1 && dm_send.length != 0"
                src="../assets/bar_icon/shouye_icon2@2x.png"
                alt=""
              />
              <span>{{ item1 }}</span>
            </div>
            <el-collapse-transition>
              <div class="side_flex_cou" v-show="index1 === bar_frist_click">
                <div
                  :style="bar_send_click === index2 ? 'background:#3E5A81' : ''"
                  class="side_child1"
                  v-for="(item2, index2) in dm_send"
                  :key="index2"
                  @click.stop="bar_send_c(index2, item2, item1)"
                >
                  <span>{{ item2 }}</span>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar_title_click1: 0,
      bar_title_click: 0,
      bar_frist_click: 0,
      bar_send_click: "",
      arr: [
        {
          img: require("@/assets/bar_icon/shouye_icon4@2x.png"),
        },
        {
          img: require("@/assets/bar_icon/shouye_icon3@2x.png"),
        },
        {
          img: require("@/assets/bar_icon/shouye_icon5@2x.png"),
        },
        {
          img: require("@/assets/bar_icon/shouye_icon6@2x.png"),
        },
        {
          img: require("@/assets/bar_icon/shouye_icon7@2x.png"),
        },
        {
          img: require("@/assets/bar_icon/shouye_icon8@2x.png"),
        },
      ],
    };
  },
  props: {
    dm_title: {
      type: Array,
    },
    dm_option: {
      type: Array,
    },
    dm_send: {
      type: Array,
    },
  },
  methods: {
    bar_title_c(e, msg) {
      if (this.bar_title_click === e) {
        // 三级目录为空
        this.bar_send_click = "";
        this.bar_title_click = "";
      } else {
        this.bar_title_click = e;
        this.bar_title_click1 = e;
        this.bar_frist_click = "";
      }

      //选择跳转路由
      this.$emit("dmclick", {
        title: this.bar_title_click,
        name: msg,
        type: "一级",
      });
    },
    //二级目录
    bar_frist_c(e, msg, msg1) {
      console.log(this.bar_send_click);
      if (e === this.bar_frist_click) {
        this.bar_frist_click = "";
        this.bar_send_click = this.bar_send_click;
        return;
      }
      this.bar_frist_click = e;
      this.$emit("dmclick", {
        title: this.bar_frist_click,
        name: msg,
        name1: msg1,
        type: "二级",
      });
    },
    bar_send_c(e, msg, msg1) {
      this.bar_send_click = e;
      console.log(this.bar_send_click);
      //选择跳转路由
      this.$emit("dmclick", {
        title: this.bar_send_click,
        name: msg,
        name1: msg1,
        type: "三级",
      });
    },
  },
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.Side_menu_bar {
  width: 15vw;
  height: 93.7vh;
  background: #2a354b;
}
.side_index {
  width: 100%;
  background: #2a354b;
  color: #fff;
  font-size: 0.8vw;
  cursor: pointer;
}
.side_index img {
  width: 0.8vw;
  height: 0.8vw;
  margin-left: 0.7vw;
}
.side_text {
  padding-left: 0.4vw;
}
.side_flex1 {
  height: 5vh;
  display: flex;
  align-items: center;
}
.side_flex {
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.side_flex_cou {
  min-height: auto;
  max-height: 28vh;
  overflow: scroll;
}
.side_child {
  width: 14vw;
  height: 4vh;
  background: #1e2d42;
  color: #fff;
  font-size: 0.7vw;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.side_child span {
  padding-left: 0.5vw;
}
.side_child1 {
  width: 12.5vw;
  height: 4vh;
  color: #bde5f7;
  font-size: 0.6vw;
  display: flex;
  align-items: center;
  margin-left: 1.5vw;
}
.side_child1:hover {
  background: #25416a;
}
.side_left {
  margin-left: 1vw;
}
.side_child img {
  width: 0.5vw;
  height: 0.6vh;
}
</style>
