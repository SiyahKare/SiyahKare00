export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Siyahkare',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './node_modules/element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/main', mode: 'client'},

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['tr', 'en', 'ru'],
        defaultLocale: 'tr',
        vueI18n: {
          fallbackLocale: 'tr',
          messages: {
            tr: {
              greeting: 'Merhaba!',
              navbar: {
                contact: 'İLETİŞİM'
              },
              pageIndex: {
                headDesc: 'Gelecekte Yapılabileceklerin Sınırı Nedir?'
              }
            },
            en: {
              greeting: 'Hello world!',
              navbar: {
                contact: 'CONTACT'
              },
              pageIndex: {
                headDesc: 'What is the Limit of What You Can Do in the Future?'
              }
            },
            ru: {
              greeting: 'Здравствуйте',
              navbar: {
                contact: 'CONTACT'
              },
              pageIndex: {
                headDesc: 'What is the Limit of What You Can Do in the Future?'
              }
            }
          }
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/nuxt/',
  },
  generate: {
    dir: 'public'
  }
}
