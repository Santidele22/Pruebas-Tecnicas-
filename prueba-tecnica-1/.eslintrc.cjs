module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,jsx}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Reglas específicas de React si es necesario
    "react/jsx-uses-react": "error",
    // Otras reglas personalizadas
  },
};
