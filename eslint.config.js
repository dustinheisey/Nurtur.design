import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';

export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...storybook.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    files: ['**/*.ts']
  },
  {
    ignores: ['!.storybook', 'node_modules', 'dist']
  }
]);
