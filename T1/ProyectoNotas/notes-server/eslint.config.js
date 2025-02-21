// eslint.config.js
export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      env: {
        browser: true,
        node: true,
      },
      extends: ["eslint:recommended"],
      rules: {
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
      },
    },
  ];