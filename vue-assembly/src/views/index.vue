<template>
  <div class="body">
    <myheader></myheader>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myheader from "@/components/header.vue";
import myfooter from "@/components/footer.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    myheader,
    myfooter,
  },
  created() {},
  mounted() {},
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background: #091022;
}
</style>
