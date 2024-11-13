import postcssEasyImport from 'postcss-easy-import';
import postcssPresetEnv from 'postcss-preset-env';
import cssNano from 'cssnano';

export default {
  plugins: [
    postcssEasyImport,
    postcssPresetEnv({ stage: 0 }),
    cssNano({
      preset: 'advanced'
    })
  ]
};
