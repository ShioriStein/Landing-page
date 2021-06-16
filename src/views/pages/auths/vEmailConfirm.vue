<template>
  <v-container>
    <v-card>
      <v-card-text>
        <h1 v-if="isSucceed">Xác nhận email thành công</h1>
        <h1 v-else>Xác nhận email thất bại</h1>
      </v-card-text>
      <v-card-actions>
        <v-btn link block color="primary" to="/dang-nhap"
          >Trở lại màn hình đăng nhập</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    isSucceed: false
  }),
  created() {
    var { userId, token } = this.$route.query;
    this.verifyEmail({ userId, token }).then(res => {
      this.isSucceed = res;
    });
  },
  methods: {
    ...mapActions("auths", ["verifyEmail"])
  }
};
</script>

<style></style>
