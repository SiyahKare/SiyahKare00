export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Siyahkare',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'SiyahKare Digital Solutions Consulting | 1.0.0'},
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'SiyahKare Digital Solutions Consulting | Gelecekte yapılabileceklerin sınırı nedir?'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'SiyahKare Digital Solutions Consulting | Gelecekte yapılabileceklerin sınırı nedir?'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'SiyahKare'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'SiyahKare Digital Solutions Consulting | Gelecekte yapılabileceklerin sınırı nedir?'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'twitter_card_image.jpg'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'SiyahKare Digital Solutions Consulting | Gelecekte yapılabileceklerin sınırı nedir?'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'SiyahKare DSC'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: ''
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: ''
      }
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
              basic: {
                mail: 'E-Posta',
                pssw: 'Şifre'
              },
              navbar: {
                contact: 'İLETİŞİM'
              },
              footer: {
                login: 'Giriş',
                apps: 'Uygulamalar'
              },
              pageIndex: {
                headDesc: 'Gelecekte Yapılabileceklerin Sınırı Nedir?'
              }
            },
            en: {
              greeting: 'Hello world!',
              basic: {
                mail: 'E-Mail',
                pssw: 'Password'
              },
              navbar: {
                contact: 'CONTACT'
              },
              footer: {
                login: 'Login',
                apps: 'Apps'
              },
              pageIndex: {
                headDesc: 'What is the Limit of What You Can Do in the Future?'
              }
            },
            ru: {
              greeting: 'Здравствуйте',
              basic: {
                mail: 'E-Mail',
                pssw: 'Password'
              },
              navbar: {
                contact: 'CONTACT',
                apps: 'Apps'
              },
              footer: {
                login: 'Login'
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
