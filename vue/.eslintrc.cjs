/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  "env": {
    "vue/setup-compiler-macros": true,
  },
  "prettier/prettier": [
    "error",
    { "singleQuote": false, "parser": "flow", "semi": [2, "never"] },
  ],
  "overrides": [
    {
      "files": [
        "**/__tests__/*.spec.{js,ts,jsx,tsx}",
        "cypress/integration/**.spec.{js,ts,jsx,tsx}",
      ],
      "extends": ["plugin:cypress/recommended"],
    },
  ],
}
