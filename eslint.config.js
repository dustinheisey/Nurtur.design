import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginLit from 'eslint-plugin-lit'
import eslintPluginStorybook from 'eslint-plugin-storybook'
import eslintPluginHTML from '@html-eslint/eslint-plugin'
import js from '@eslint/js'
import eslintPluginWC from 'eslint-plugin-wc'
import globals from 'globals'

export default [
  eslintConfigPrettier,
  {
    ignores: ['dist/**', 'node_modules/**', '!.storybook'],
  },
  {
    files: ['src/**/*.js'],
    plugins: {
      eslintPluginLit,
      eslintPluginStorybook,
      eslintPluginHTML,
      eslintPluginWC,
    },
    rules: { ...js.configs.recommended.rules },
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
      },
    },
  },
]
