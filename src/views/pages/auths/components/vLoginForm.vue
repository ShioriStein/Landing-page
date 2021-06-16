<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      ref="email"
      v-model="email"
      label="User name or email"
      :rules="userNameRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      :rules="passwordRules"
      required
      @keyup.enter="keyEnter"
    ></v-text-field>

    <div class="button-group mb-5 mt-2">
      <v-checkbox
        class="mt-0 pt-0"
        v-model="rememberMe"
        label="Remember me"
        hide-details
      ></v-checkbox>
      <router-link :to="ROUTERS.FORGOT_PASSWORD">Forgot password?</router-link>
    </div>

    <v-btn
      @click="submit({ email, password, rememberMe })"
      :loading="submitBtnLoading"
      color="#839B97"
      class="submit-btn white--text"
      >Login</v-btn
    >
  </v-form>
</template>

<script>
import CONSTANTS from "@/constants";
const { ROUTERS } = CONSTANTS;
import { mapActions } from "vuex";
export default {
  data: () => ({
    submitBtnLoading: false,
    valid: true,
    email: "",
    password: "",
    rememberMe: false,
    ROUTERS,
    userNameRules: [v => !!v || "Username or email is require"],
    passwordRules: [v => !!v || "Password is require"]
  }),
  methods: {
    ...mapActions("auths", ["loginJWT"]),
    keyEnter() {
      this.submit({
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      });
    },
    validate() {
      return this.$refs.form.validate();
    },
    submit(user) {
      if (this.validate()) {
        this.submitBtnLoading = true;
        this.loginJWT(user)
          .then(() => {
            this.submitBtnLoading = false;
            const returnUrl = this.$route.query.returnUrl ?? "/";
            this.$router.push(returnUrl);
          })
          .catch(err => {
            this.$emit("errors", err.response.data.message);
            this.submitBtnLoading = false;
          });
      }
    }
  },
  created() {},
  mounted() {
    this.$refs.email.focus();
  }
};
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit-btn {
  display: block;
  width: 50%;
  margin: 0 auto;
  border-radius: 30px;
}
</style>
