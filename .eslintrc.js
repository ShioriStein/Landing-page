module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "development" ? "warn" : "error",
    "no-debugger": "error",
    camelcase: "error",
    "no-alert": "error",
    "no-else-return": "error",
    "default-case": "error",
    "no-invalid-this": "error"
  }
};
