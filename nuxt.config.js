export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GUIHOS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
    ]
  },

  css: [
    '@/assets/css/typografy.css'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  build: {
    extend(config, { isDev, isClient }) {
      // Agrega el cargador para archivos PDF
      config.module.rules.push({
        test: /\.pdf|docx/,
        use: 'raw-loader'
      });
    }
  }
}
