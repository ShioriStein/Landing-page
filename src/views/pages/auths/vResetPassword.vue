<template>
  <div class="login-wrapper">
    <div class="login-wrapper-inner">
      <v-btn icon class="ma-2" @click="returnSignin">
        <v-icon x-large>mdi-chevron-left</v-icon>
      </v-btn>
      <h1>RESET PASSWORD</h1>
      <v-alert
        v-show="!result"
        v-if="errors !== ''"
        dense
        outlined
        type="error"
      >
        {{ errors }}
      </v-alert>
      <v-form ref="form" v-show="!result" v-model="valid" lazy-validation>
        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="password"
          label="Password"
          :type="show1 ? 'text' : 'password'"
          required
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="confirmPassword"
          label="Confirm password"
          :type="show2 ? 'text' : 'password'"
          required
          @click:append="show2 = !show2"
        ></v-text-field>

        <v-btn
          @click="submit"
          :loading="submitBtnLoading"
          color="#839B97"
          class="submit-btn white--text"
          >Reset password</v-btn
        >
      </v-form>
      <h2 v-show="result">
        Your password reset is done, you will be redirect to login view shortly.
        Reload if it not auto redirect.
      </h2>
    </div>
  </div>
</template>

<script>
import CONSTANTS from "@/constants";
const { ROUTERS, PAGE_NAMES } = CONSTANTS;

import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    errors: "",
    valid: true,
    email: "",
    password: "",
    confirmPassword: "",
    result: false,
    submitBtnLoading: false,
    show1: false,
    show2: false
  }),
  computed: {
    ...mapState("auths", ["error"])
  },
  methods: {
    ...mapActions("auths", ["resetPassword"]),
    returnSignin() {
      this.$router.push({ path: ROUTERS.SIGN_IN });
    },
    submit() {
      if (!this.$route.query.email || !this.$route.query.token) {
        this.errors = "Incorect reset password link";
      } else if (this.password != this.confirmPassword) {
        this.errors = "password and confirm password do not match";
      } else {
        this.submitBtnLoading = true;
        this.resetPassword({
          email: this.$route.query.email,
          token: this.$route.query.token,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
          .then(res => {
            if (res.status == 200) {
              this.submitBtnLoading = false;
              this.errors = "";
              this.result = true;
              setTimeout(
                () => this.$router.push({ name: PAGE_NAMES[ROUTERS.SIGN_IN] }),
                7000
              );
            } else {
              this.errors = res.response.data.message;
              this.submitBtnLoading = false;
            }
          })
          .catch(err => {
            this.errors = err.message;
          });
      }
    }
  },
  created() {},
  components: {}
};
</script>

<style lang="scss" scoped>
.submit-btn {
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 30px;
}
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
    h2 {
      text-align: center;
      color: var(--primary-color);
    }
  }
}
</style>
