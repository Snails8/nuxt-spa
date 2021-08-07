export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-spa',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      // 追記
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    { src: '~/assets/scss/app.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',

    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  env: {
    S3_URL: process.env.S3_URL,
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: process.env.BASE_URL,
    }
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          // API :RouteServiceProver のprefix=> route参照
          login: { url: '/api/admin/auth/login', method: 'post', propertyName: false },
          user: { url: '/api/admin/user', method: 'get', propertyName: false },
          logout: false
        },
        tokenRequired: false,
        tokenType: false,
      }
    },
    localStorage: false,
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
