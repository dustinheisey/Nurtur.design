module.exports = {
  "root": true,
  "env": {
    "browser": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "@open-wc",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:lit-a11y/recommended",
    "plugin:storybook/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "lit-a11y"
  ],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "always",
      {
        "ignorePackages": true
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "rollup.config.js",
        "web-test-runner.config.js"
      ],
      "env": {
        "node": true
      }
    },
    {
      "files": [
        "**/*.test.ts"
      ],
      "rules": {
        "@typescript-eslint/no-unused-expressions": 0
      }
    }
  ]
}