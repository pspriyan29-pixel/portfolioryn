
const nextConfig = require("@next/eslint-plugin-next");

module.exports = [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "@next/next": nextConfig,
    },
    rules: {
      ...nextConfig.configs.recommended.rules,
      ...nextConfig.configs["core-web-vitals"].rules,
    },
    languageOptions: {
      globals: {
        React: "readonly",
      },
    },
  },
];
