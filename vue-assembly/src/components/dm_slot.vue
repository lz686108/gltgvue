<template>
  <!-- <div class="dm_flex_t" :style="row == '24' ? 'width:66.4%' : 'width:32.9%'"> -->
  <div
    class="dm_flex_t"
    :style="
      row == '24'
        ? 'width:100%'
        : row == '8'
        ? 'width:32.9%'
        : row == '6'
        ? 'width:24.5%'
        : row == '12'
        ? 'width:49.7%'
        : row == '4'
        ? 'width:16%'
        : ''
    "
  >
    <slot></slot>
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
    row: {
      type: String,
    },
  },
  methods: {},
  components: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>