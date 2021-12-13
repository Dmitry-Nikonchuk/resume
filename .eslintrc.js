module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    browser: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "linebreak-style": "off",
    "react/state-in-constructor": "off",
    "react/jsx-filename-extension": "off",
    "react/static-property-placement": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "arrow-parens": ["error", "as-needed"],
    "implicit-arrow-linebreak": "off",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
