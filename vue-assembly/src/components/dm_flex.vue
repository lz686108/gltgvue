<template>
  <div class="dm_flex_u">
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
</style>