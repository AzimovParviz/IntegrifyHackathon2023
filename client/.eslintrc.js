module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: [0, "tab"],
    "linebreak-style": [
      "error",
      //or windows!!
      "unix",
    ],
    quotes: [0, "double"],
    semi: [0, "never"],
    "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": 0,
    
  },
};
