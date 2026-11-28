module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  extends: ["eslint:recommended"],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "script",
  },

  globals: {
    chrome: "readonly",
    browser: "readonly",
  },
};
