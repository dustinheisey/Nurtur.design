import { typescriptParser } from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import openWcConfig from "@open-wc/eslint-config";
import storybookConfig from "eslint-plugin-storybook";

export default [
  {
    files: ["*.js", "*.ts", "*.jsx", "*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "storybook": storybookConfig,
    },
    rules: {
      ...openWcConfig.rules,
      ...prettierConfig.rules,
      "import/no-unresolved": "off", // Customize as needed
      "@typescript-eslint/no-unused-vars": ["error"],
      "storybook/prefer-storybook-args": "warn",
      "lit/no-template-bind": "error",
    },
  },
];
