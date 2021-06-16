<template>
  <v-app-bar app absolute elevate-on-scroll style="background-color: #F7F7E8">
    <v-text-field
      background-color="#CFD3CE"
      class="mx-4"
      append-icon="mdi-magnify"
      v-model="search"
      flat
      hide-details
      label="Search..."
      @keyup.enter="handleSearch(search)"
      solo
    ></v-text-field>
    <v-user-time></v-user-time>
    <v-spacer></v-spacer>
    <v-icon size="30">mdi-bell-outline</v-icon>
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text light v-bind="attrs" v-on="on">{{ fullName }}</v-btn>
      </template>
      <v-list light dense nav>
        <v-list-item link to="/thong-tin-ca-nhan">
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="logouts()">
          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CONSTANTS from "../../constants";
import VUserTime from "@/layouts/components/vUserTime";

const { ROUTERS, PAGE_NAMES } = CONSTANTS;

export default {
  components: { VUserTime },
  data: () => ({
    search: "",
    ROUTERS
  }),
  computed: {
    ...mapState("auths", ["has", "userInfo", "isAuthenticated"]),
    fullName() {
      return `${this.userInfo.firstName ?? "User"} ${this.userInfo.lastName ??
        "info"}`;
    }
  },
  async created() {
    await this.getInformation();
    if (!this.$route.params.companyId) {
      this.$router.push({
        name: PAGE_NAMES[ROUTERS.COMPANIES],
        params: { companyName: null, companyId: null }
      });
    }
  },
  methods: {
    ...mapActions("auths", ["logout", "getInformation"]),
    handleSearch(search) {
      if (search) this.$router.push({ name: "Search", query: { search } });
    },
    logouts() {
      const { fullPath: returnUrl } = this.$router.currentRoute;
      this.logout().then(() =>
        this.$router.push({
          name: PAGE_NAMES[ROUTERS.SIGN_IN],
          query: {
            returnUrl
          }
        })
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
