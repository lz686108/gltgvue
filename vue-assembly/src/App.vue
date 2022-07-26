<template>
  <div id="app">
    <div id="nav"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // console.log(this.$route);
  },
};
</script>
<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
