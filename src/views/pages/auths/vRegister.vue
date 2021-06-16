<template>
  <div class="center max-height max-width main">
    <div class="center max-height">
      <div class="box--reg center">
        <div class="form--reg">
          <div class="center">
            <span class="box__reg--title">Đăng ký</span>
          </div>
          <div>
            <v-text-field
              v-model="user.email"
              label="Email"
              required
              type="email"
              append-icon="mdi-email"
              color="blue-grey lighten-3"
              :rules="[v => !!v || 'Email không được để trống']"
            ></v-text-field>
            <v-text-field
              v-model="user.name"
              label="Họ tên"
              required
              type="text"
              append-icon="mdi-lock"
              color="blue-grey lighten-3"
              :rules="[v => !!v || 'Tên không được để trống']"
            ></v-text-field>
            <v-select
              v-model="user.gender"
              label="Giới tính"
              required
              :items="genders"
              item-text="value"
              item-value="id"
              append-icon="mdi-lock"
              color="blue-grey lighten-3"
            ></v-select>
            <v-text-field
              v-model="user.phoneNumber"
              label="Số điện thoại"
              required
              type="number"
              append-icon="mdi-lock"
              color="blue-grey lighten-3"
              :rules="[v => !!v || 'Số điện thoại không được để trống']"
            ></v-text-field>
            <v-text-field
              v-model="user.dateOfBirth"
              label="Ngáy sinh"
              required
              type="date"
              append-icon="mdi-lock"
              color="blue-grey lighten-3"
              :rules="[v => !!v || 'Ngày sinh không được để trống']"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Mật khẩu"
              required
              type="password"
              append-icon="mdi-lock"
              color="blue-grey lighten-3"
              :rules="[v => !!v || 'Mật khẩu không được để trống']"
            ></v-text-field>
            <v-text-field
              v-model="user.confirmPassword"
              label="Nhập lại mật khẩu"
              required
              type="password"
              append-icon="mdi-lock"
              color="blue-grey lighten-3"
              :rules="[v => !!v || 'Mật khẩu không được để trống']"
            ></v-text-field>
          </div>
          <div class="center">
            <v-btn class="btn-submit mr-4 mt-4" @click="submit(user)">
              Đăng ký
            </v-btn>
          </div>
          <div class="mt-4">
            <router-link to="/dang-nhap">
              <a class="span-reg-bottom">Bạn đã có tài khoản ?</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    genders: [
      {
        id: 0,
        value: "Nam"
      },
      {
        id: 1,
        value: "Nữ"
      },
      {
        id: 2,
        value: "Khác"
      }
    ],
    user: {
      name: "",
      email: "",
      gender: 0,
      phoneNumber: "",
      dateOfBirth: Date.now(),
      password: "",
      confirmPassword: ""
    },
    text: ""
  }),
  methods: {
    ...mapActions("auths", ["registerUser"]),
    submit(user) {
      if (!user.name) {
        this.text = "Vui lòng điền tên";
      } else if (!user.email) {
        this.text = "Vui lòng điền email";
      } else if (!user.dateOfBirth) {
        this.text = "Vui lòng điền ngày sinh";
      } else if (!user.phoneNumber) {
        this.text = "Vui lòng điền SDT";
      } else if (!user.password) {
        this.text = "Vui lòng điền mật khẩu";
      } else if (!user.confirmPassword) {
        this.text = "Vui lòng điền mật khẩu xác nhận";
      } else {
        this.registerUser(user)
          .then(() => {
            this.$router.push("/dang-nhap");
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style scoped>
.main {
  background-image: url("../../../assets/image/backround-login.svg");
  background-size: 100%;
}
.max-height {
  height: 100%;
}
.max-width {
  width: 100%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.box-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.box--reg {
  width: 700px;
  height: 720px;
  border: 1px solid red;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
.form--reg {
  width: 540px;
  height: 580px;
}
.box__reg--title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 47px;
  color: red;
}
.btn-submit {
  height: 69px;
  width: 325px;
  background-color: #8bcdb9 !important;
  border-radius: 30px !important;
}
.link-forgot {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  text-decoration-line: underline;
  color: #ffffff;
}
.span-reg-bottom {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
}
.icon-reg {
  width: 35px !important;
  height: 35px !important;
  size: 20px;
}
@media only screen and (max-width: 900px) {
  .box--reg {
    width: 450px;
  }
}
</style>
