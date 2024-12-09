import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import pluginCypress from 'eslint-plugin-cypress/flat';
import eslintConfigPrettier from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['!.storybook', '**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  ...pluginVueA11y.configs['flat/recommended'],

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/*.test.ts']
  },

  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}']
  },
  {
    extends: [...storybook.configs['flat/recommended']],
    files: ['**/*.stories.ts'],
    rules: {}
  },
  eslintConfigPrettier
];
