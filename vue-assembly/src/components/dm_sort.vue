<template>
  <div class="dm_ab" ref="s1">
    <div class="dm_sort_flex">
      <div>{{ name }}</div>
      <img class="dm_sort" src="../assets/icon/sort.png" @click="show = true" />
    </div>
    <div class="dm_ssort" v-show="show">
      <div
        @click="sort_list('升序')"
        :style="cur === '升序' ? 'background: #3e5a81;' : ''"
      >
        升序
      </div>
      <div
        @click="sort_list('降序')"
        :style="cur === '降序' ? 'background: #3e5a81;' : ''"
      >
        降序
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: "",
      show: false,
    };
  },
  props: {
    keys: {
      key: String,
    },
    name: {
      key: String,
    },
  },
  methods: {
    sort_list(e) {
      this.cur = e;
      this.show = false;
      this.$emit("dmclick", { sort: this.cur, key: this.keys });
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