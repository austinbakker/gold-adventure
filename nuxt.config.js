export default {
  ssr: false,
  target: 'static',
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/yahoo/index.ts'
  ]
}