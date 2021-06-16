<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      :src="require(`@/assets/img/bgDrawer.jpg`)"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="require(`@/assets/img/logo.png`)" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img :src="require(`@/assets/img/logo.png`)" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">Download</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#pricing')">
          <span class="mr-2">Price</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contact</span>
        </v-btn>
        <v-btn v-show="!isLogin" text @click="logins()">
          <span class="mr-2">Login</span>
        </v-btn>
        <v-menu v-if="isLogin" offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on"
              ><span class="mr-2">{{ fullName }}</span></v-btn
            >
          </template>
          <v-list light dense nav>
            <v-list-item>
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
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
import { mapActions, mapState } from "vuex";
import CONSTANTS from "@/constants";

const { ROUTERS, PAGE_NAMES } = CONSTANTS;

export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contatos", "#contact"]
    ]
  }),
  computed: {
    ...mapState("auths", ["has", "userInfo", "isAuthenticated"]),
    fullName() {
      return `${this.userInfo.firstName ?? "User"} ${this.userInfo.lastName ??
        "info"}`;
    },
    isLogin() {
      const currentUser = JSON.parse(localStorage.getItem(CONSTANTS.USER));
      return currentUser ? true : false;
    }
  },
  created() {
    const currentUser = JSON.parse(localStorage.getItem(CONSTANTS.USER));
    if (currentUser) {
      this.getInformation();
    }
  },
  props: {
    color: String,
    flat: Boolean
  },
  methods: {
    ...mapActions("auths", ["logout", "getInformation"]),
    onResize() {
      this.isXs = window.innerWidth < 850;
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
    },
    logins() {
      const { fullPath: returnUrl } = this.$router.currentRoute;
      this.$router.push({
        name: PAGE_NAMES[ROUTERS.SIGN_IN],
        query: {
          returnUrl
        }
      });
    }
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>
