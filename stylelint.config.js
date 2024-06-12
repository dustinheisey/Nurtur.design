export default {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
}
