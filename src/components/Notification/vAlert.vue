<template>
  <div>
    <v-alert :value="toggle" :type="getType" dismissible @input="alertClose">
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ""
    },
    typeAlert: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isLoading: true,
      search: null,
      searched: [],
      test: "success"
    };
  },
  methods: {
    alertClose() {
      if (this.toggle == true) {
        this.$emit("alertClose");
      }
    }
  },
  computed: {
    getType() {
      return this.typeAlert || this.test;
    },
    getToggle() {
      return this.toggle;
    }
  }
};
</script>

<style lang="scss"></style>
