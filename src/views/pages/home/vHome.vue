<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <home />
      <about />
      <download />
      <pricing :plans="plansCache" />
      <contact />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
import download from "./components/DownloadSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    navigation,
    foote,
    home,
    about,
    download,
    pricing,
    contact
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
    plansCache: [
      {
        id: 0,
        name: "",
        numOfEmployee: 50,
        sizeOfDrive: 5120,
        cost: 0,
        numOfUser: 1
      }
    ]
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
    this.getPlans().then(() => {
      this.plansCache = this.plans;
    });
  },
  computed: {
    ...mapState("auths", ["permissions", "roles"]),
    ...mapState("errors", ["error"]),
    ...mapState("plans", ["plans"])
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
    error(val) {
      this.$toast(val);
    }
  },

  methods: {
    ...mapActions("plans", ["getPlans"]),
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
<style lang="scss"></style>
