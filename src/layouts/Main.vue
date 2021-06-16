<template>
  <v-app style="background-color:#E5E5E5">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <NavBar v-show="!overlay" />
    <v-navigation-drawer
      v-show="!overlay"
      class="elevation-0 sidebar"
      app
      permanent
    >
      <v-list-item class="sidebar-header">
        <v-list-item-content class="project-name">
          <v-list-item-title>Easy Business</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-side-bar></v-side-bar>
    </v-navigation-drawer>
    <v-main class="main">
      <v-container class="px-4 py-0 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <v-card
              v-if="!!crumbs && !overlay"
              color="#F7F7E8"
              class="elevation-0"
            >
              <v-breadcrumbs :items="crumbs" large> </v-breadcrumbs>
            </v-card>
            <router-view class="mt-3" v-if="!overlay"></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="footer" padless color="primary">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import NavBar from "./components/vNavBar";
import menus from "@/layouts/menus";
import VSideBar from "@/layouts/components/vSideBar";

export default {
  data() {
    return {
      items: menus,
      overlay: true
    };
  },
  computed: {
    ...mapState("company", ["company", "chooseCompany"]),
    ...mapState("errors", ["error"]),
    ...mapState("auths", ["userInfo", "permissions", "roles"]),
    ...mapGetters("auths", ["hasPermission", "permissions", "roles"]),
    crumbs() {
      const { breadCrumbs } = this.$route.meta;
      return breadCrumbs;
    },
    menus() {
      return this.items.filter(item => this.canSee(item));
    }
  },
  watch: {
    userInfo: function() {
      this.overlay =
        Object.keys(this.userInfo).length === 0 &&
        this.userInfo.constructor === Object;
    }
  },
  methods: {
    ...mapActions("company", [
      "getAllCompany",
      "getAllCompanies",
      "chooseCompanyAction"
    ]),
    ...mapActions("auths", ["checkSpecialRole", "checkAuthorize"]),
    canSee(item) {
      const { link: name } = item;
      const { route } = this.$router.resolve({ name });
      const { meta } = route;
      const { authorize } = meta;
      if (authorize.length === 0) return true;
      return authorize.some(el => this.hasPermission(el));
    }
  },
  created() {
    this.getAllCompanies().then(() => {});
  },
  components: {
    VSideBar,
    NavBar
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.full-height {
  height: 100%;
}
.main {
  &-sub {
    background: var(--background-color) !important;

    .theme--light.v-tabs > .v-tabs-bar {
      background-color: inherit !important;
    }
  }

  &-container {
    background: var(--background-color);
    border-radius: 20px;
    padding: 25px;
  }
}
.sidebar {
  background: var(--secondary-color) !important;

  &-header {
    height: 64px;
    background-color: var(--primary-color);

    .project-name {
      color: #fff !important;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
  }
}

.app-bar {
  .v-toolbar__content {
    padding: 0 !important;
  }

  background: var(--background-color) !important;
}
.footer {
  margin-top: 20px;
}
</style>
