import Vue from "vue";
import Vuetify from "vuetify";

// don't forget to import CSS styles
import "vuetify/dist/vuetify.min.css"; // Add this line

Vue.use(Vuetify);

const opts = {
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#119DA4",
        secondary: "#171b34",
        accent: "3D87E4"
      }
    }
  },
  options: {
    customProperties: true
  },
  icons: {
    iconfont: "mdi"
  }
};

export default new Vuetify(opts);
