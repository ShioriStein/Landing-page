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
          v-model="email"
          label="Email"
          :rules="emailRules"
          required
          @keyup.enter="keyEnter"
        ></v-text-field>
        <v-text-field v-show="false"></v-text-field>

        <v-btn
          @click="submitEmail"
          :loading="submitBtnLoading"
          color="#839B97"
          class="submit-btn white--text"
          >Send reset link</v-btn
        >
      </v-form>
      <h2 v-show="result">
        Your password reset request have successed and a link have been sent to
        you email.
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CONSTANTS from "@/constants";
const { ROUTERS } = CONSTANTS;
export default {
  data: () => ({
    errors: "",
    valid: true,
    email: "",
    result: false,
    submitBtnLoading: false,
    emailRules: [
      v => !!v || "Email is require",
      v =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid"
    ]
  }),
  computed: {
    ...mapState("auths", ["error"])
  },
  methods: {
    ...mapActions("auths", ["forgotPassword"]),
    returnSignin() {
      this.$router.push({ path: ROUTERS.SIGN_IN });
    },
    validate() {
      return this.$refs.form.validate();
    },
    keyEnter() {
      this.submitEmail();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submitEmail() {
      if (this.validate()) {
        this.submitBtnLoading = true;
        this.forgotPassword(this.email)
          .then(res => {
            if (res.status == 200) {
              this.submitBtnLoading = false;
              this.errors = "";
              this.result = true;
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
  components: {}
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
