<template>
  <div class="login-wrapper">
    <div class="login-wrapper-inner">
      <h1>LOGIN</h1>
      <v-alert v-if="error !== ''" dense outlined type="error">
        {{ error }}
      </v-alert>
      <v-login-form @errors="getError" />
    </div>
  </div>
</template>

<script>
import vLoginForm from "./components/vLoginForm.vue";
export default {
  data: () => ({
    error: ""
  }),
  methods: {
    getError(err) {
      this.error = err;
    }
  },
  computed: {},
  components: { vLoginForm },
  created() {}
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  background: url("../../../assets/image/bg-login.svg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &-inner {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    width: 80%;
    max-width: 500px;
    padding: 30px;
    > * + * {
      margin-top: 20px;
    }
    h1 {
      text-align: center;
      color: var(--primary-color);
    }
  }
}
</style>
