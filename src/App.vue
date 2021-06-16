<template>
  <router-view> </router-view>
</template>
<script>
export default {
  computed: {},
  data() {
    return {};
  },
  watch: {
    error(val) {
      this.$toast(val);
    }
  },
  methods: {},
  created() {}
};
</script>
