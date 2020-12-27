export default {
  ssr: false,
  target: 'static',
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],
  transpileDependencies: ['vuex-module-decorators'],
  plugins: [
    // '~/plugins/yahoo/index.ts',
    '~/plugins/faunaDB.ts'
  ]
}