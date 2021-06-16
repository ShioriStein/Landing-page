const state = () => ({
  items: [
    { title: "LĨNH VỰC", href: "/admin/linhvuc", icon: "mdi-home-outline" },
    { title: "KHÓA HỌC", href: "/admin/khoahoc", icon: "mdi-shield-account" },
    { title: "NGƯỜI DÙNG", href: "/admin/user", icon: "mdi-palette-swatch" }
  ],
  NavBar: [
    { title: "ACADEMY", href: "/", icon: "" },
    { title: "Đăng nhập", href: "/dang-nhap", icon: "" }
  ]
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
