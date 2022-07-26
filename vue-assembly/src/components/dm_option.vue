<template>
  <div class="dm_ab" ref="s1">
    <div class="dm_option" @click="option_click()">
      <div class="dm_op_text" :style="cur == '' ? 'color:#999' : ''">
        {{ cur == "" ? "请选择" : cur }}
      </div>
      <img v-if="!show" src="../assets/bar_icon/shouye_icon2@2x.png" alt="" />
      <img v-else src="../assets/bar_icon/shouye_icon1@2x.png" alt="" />
      <div v-if="show" class="dm_opti">
        <div class="dm_nav"></div>
        <div>
          <div
            @click="shou(item)"
            :style="cur == item ? 'background:rgb(62, 90, 129)' : ''"
            class="dm_option dm_option1"
            v-for="(item, index) in dm_list"
            :key="index"
          >
            <div class="dm_op_text">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
      show: false,
      cur: "",
    };
  },
  props: {
    dm_list: {
      type: Array,
    },
  },
  methods: {
    shou(e) {
      this.cur = e;
      this.show = true;
      this.$emit("dmclick", this.cur);
    },
    option_click() {
      this.show = !this.show;
    },
  },
  components: {},
  created() {},
  mounted() {
    document.addEventListener(
      "click",
      (e) => {
        let s1 = this.$refs.s1;
        if (!s1.contains(e.target)) {
          this.show = false;
        }
      },
      true
    );
  },
};
</script>
<style scoped>
</style>