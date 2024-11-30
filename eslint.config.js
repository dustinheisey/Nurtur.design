import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default typescriptEslint.config(
  { ignores: ['*.d.ts', '!.storybook', 'node_modules', '**/dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
      ...pluginVueA11y.configs['flat/recommended']
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser
      }
    },
    rules: {}
  },
  {
    extends: [...storybook.configs['flat/recommended']],
    files: ['**/*.stories.ts'],
    rules: {}
  },
  eslintConfigPrettier
);
