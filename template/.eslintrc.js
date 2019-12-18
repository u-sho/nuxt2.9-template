module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['!.eslintrc.js'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue'],
  rules: {
    strict: ['error', 'global']
  }
}
