module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["vue"],
  rules: {
    "space-before-function-paren": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: 0,
    quotes: [0, "double"],
    "quote-props": 0,
    "no-tabs": "off",
  },
};
