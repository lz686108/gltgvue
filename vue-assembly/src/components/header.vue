<template>
  <div class="lw_header">
    <div class="lw_header-1">
      <img src="../assets/logo.png" class="pic-1" alt=""/>
      <div class="text">高炉铁沟运维管控平台</div>
      <div class="tab" v-if="state != 1">
        <div
            class="tab-1 border-1"
            v-for="(item, index) in name"
            :key="index"
            @click="tab(index)"
            :class="[cur == index ? 'border-1' : 'border-2']"
            @mouseover="aa(item)"
        >
          {{ item }}
          <div class="border" v-if="cur == index"></div>
          <div class="lw_box">
            <div class="lw_box1"></div>
            <div
                class="lw_box_test"
                v-for="(item, index) in second_level"
                :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lw_header-1">
      <img
          v-if="state != 1"
          src="../assets/set.png"
          class="pic-2"
          alt=""
      />
      <img v-if="state == 1" src="../assets/1@2x.png" class="pic-2" alt=""/>
      <div class="chn">{{ chn }}</div>
      <div class="pho">
        <img :src="photoURL" alt=""/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["state"],
  data() {
    return {
      card: "",
      chn: "",
      photoURL: "",
      name: ["顶层", "材料信息", "施工管控", "运行监测", "供应商评价", "铁钩履历复盘"],
      cur: 0,
      second_level: [],
    };
  },
  methods: {
    aa(msg) {
      if (msg == "采购计划跟踪") {
        this.second_level = ["测试1", "测试1"];
      } else if (msg == "销售计划跟踪") {
        this.second_level = ["测试2", "测试2"];
      } else {
        this.second_level = [];
      }
    },
    tab(e) {
      this.cur = e;
      console.log(this.cur);
      switch (this.cur) {
        case 0:
          this.$router.push("/dc");
          break;
        case 1:
          this.$router.push("/clxx");
          break;
        case 2:
          this.$router.push("/sggk");
          break;
        case 3:
          this.$router.push("/yxjc");
          break;
        case 4:
          this.$router.push("/gyspj");
          break;
        case 5:
          this.$router.push("/tgllfp");
          break;
        default:
          break;
      }
    },
    admin() {
      alert("123")
    },
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },
    select(text) {
      var token = this.getQueryString("token");
      // var card=this.getQueryString("card");
      var permission = text; //权限名
      this.$axios('http://so.newsteel.ai:8888/shiro/web/authc/isPermitted?permission=bf:tiegs:view&token=' + token).then((res) => {
        res
      })
    }
  },
  created() {
    this.token = this.getQueryString("token");
    this.card = this.getQueryString("card");
    sessionStorage.setItem("card", this.card);
    if (this.card == null) {
      window.location.href =
          "http://10.6.1.129/login/index.html?url=" + window.location.href;
    }
    sessionStorage.setItem("card", this.card);
    this.card = sessionStorage.getItem("card");
    this.$axios("http://10.6.1.198:8888/shiro/web/authc/address", {
      params: {
        user: this.card,
      },
    }).then((res) => {
      this.chn = res.data.obj.chn;
      this.photoURL = res.data.obj.photoURL;
      sessionStorage.setItem("chn", this.chn);
    });
  },
  mounted() {
    this.select("bf:tiegs:view");
  },
};
</script>
<style>
.el-avatar > img {
  width: 1vw;
  /* width: 100% !important; */
}
</style>

<style scoped>
.pho {
  width: 1.8vw;
  height: 1.8vw;
  border-radius: 50%;
  margin-right: 1vw;
  overflow: hidden;
}

.pho img {
  width: 100%;
  margin-top: -0.5vh;
}

.lw_header {
  width: 100vw;
  height: 6vh;
  background: #151e2d;
  display: flex;
  justify-content: space-between;
}

.lw_header-1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.lw_header-1 .pic-1 {
  width: 0.8vw;
  height: 3.5vh;
  margin-left: 1vw;
}

.lw_header-1 .pic-2 {
  width: 1vw;
  height: 2vh;
  margin-right: 1vw;
  cursor: pointer;
}

.text {
  color: #c7d0d7;
  font-size: 1.1vw;
  padding-left: 1vw;
  font-weight: bold;
}

.photo {
  margin-right: 2vw;
}

.chn {
  color: #a0bad6;
  font-size: 1vw;
  padding-right: 1vw;
}

.tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  margin-left: 6.5vw;
  position: relative;
}

.tab-1 {
  margin-right: 2vw;
  cursor: pointer;
  height: 6vh;
  line-height: 6vh;
  position: relative;
  font-size: 0.8vw;
  display: flex;
  justify-content: center;
}

.border {
  position: absolute;
  bottom: 0;
  width: 2.5vw;
  height: 3px;
  background: #e0b564;
  transition: transform 0.6s;
}

.border-1 {
  color: #e0b564;
}

.border-2 {
  color: #718294;
}

.lw_box {
  width: 10vw;
  position: absolute;
  top: 6vh;
  left: 0.5vw;
  background: rgba(21, 30, 45, 0.9);
  border-radius: 4px;
  color: #fff;
  display: none;
}

.lw_box1 {
  width: 10vw;
  height: 1vh;
  background: #091022;
}

.lw_box_test {
  line-height: 4vh;
  padding-left: 1.2vw;
}

.tab-1:hover .lw_box {
  display: block;
}

.lw_box_test:hover {
  background: #3e5a81;
}
</style>
  