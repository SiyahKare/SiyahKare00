export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
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
    ['nuxt-gmaps', {
      key: 'AIzaSyBqtFXt-4q2jrPdEoMV_j3bcVlV6b4y7VA',
      //you can use libraries: ['places']
    }],
    [
      'nuxt-i18n',
      {
        defaultLocale: 'tr',
        locales: ['en', 'ru', 'tr'],
        vueI18n: {
          fallbackLocale: 'tr',
          messages: {
            tr: {
              greeting: 'Merhaba!',
              basic: {
                mail: 'E-Posta',
                pssw: 'Şifre',
                references: 'Referanslarımız',
                webpage: 'Web Sitesi',
                goToWebSite: 'Web Siteye Git'
              },
              navbar: {
                contact: 'İLETİŞİM'
              },
              footer: {
                login: 'Giriş',
                apps: 'Uygulamalar'
              },
              errors: {
                allRequired: 'Lütfen Tüm Alanları Doldurunuz'
              },
              pageIndex: {
                headDesc: 'Gelecekte Yapılabileceklerin Sınırı Nedir?',
                about: {
                  p1: 'Digital Çözümler',
                  p2: 'Dijital çağda kapsamlı deneyimler geliştiriyoruz',
                  p3: 'Eşsiz deneyimler yaratmak için kapsamlı bir hizmet yelpazesi sunuyoruz',
                  p4: 'her zaman benzersiz fikirlere odaklanıyoruz',
                  p5: 'gelecek için olasılıkların',
                  p6: 'sınırlarını zorluyoruz',
                  p7: 'Gelecek nesil için',
                  p8: 'imkansız olan nedir?',
                },
                offerForm: {
                  title: 'Teklif Al',
                  desc: 'formu hemen doldurun, işletme veya ürününüz için en uygun tekliflere ücretsiz ulaşın.',
                  name: 'Adı Soyad',
                  phone: 'Telefon',
                  company: 'Firma Adı',
                  service: 'Almak İstediğiniz Hizmet',
                  mail: 'E-Posta',
                  submit: 'Gönder'
                }
              },
              pageAbout: {
                title: 'Hakkımızda',
                sub_top_title: 'SiyahKare Dijital Çözümler',
                sub_top_text: 'Ekibimiz 1995 yılından bu yana bilişim sektöründe etkin çalışan, yüzden fazla dijital projeye imza atmış her biri alanında uzman kişilerin SiyahKare markası altında toplanmasıyla oluşmuştur.',
                sub_middle_title: 'Gelecekte yapılabileceklerin sınırı nedir?',
                sub_middle_text: 'Bütünleşik dijital hizmetler sunan SiyahKare, "müşterilerin ihtiyaçlarına cevap verecek optimum çözümler üretme" sloganıyla çalışmalarını sürdürmektedir.',
                list: {
                  item_1_title: 'Misyonumuz',
                  item_1_text: 'Müşterimizin istekleri doğrultusunda, ihtiyaçlarının en elverişli koşullarda kaliteli ve ekonomik yollarla karşılanması amacıyla işlevsel ve doğru stratejilerin geliştirilmesi, planlanması, uygulanması ve bu hizmetin bir bütün olarak doğru zamanda ve uygun maliyetlerle sunulmasıdır.',
                  item_2_title: 'Kalite Politikamız',
                  item_2_text: 'Oluşturduğumuz vizyon, misyon ve kurumsal değerler ışığında müşteri memnuniyetini temel hedef almak, sürekli gelişme ve iyileştirme ilkesiyle kaliteyi üretmek ve yönetmek, başlıca politikamızdır.',
                  item_3_title: 'Strateji',
                  item_3_text: 'SiyahKare stratejisinin temeli, yaptığımız her iş ve aldığımız her karar için müşterlerimizi ilk plana koymaya ve müşterilerimizle uzun vadeli iş ortaklığı yaratmaya dayanır.',
                },
                longText: {
                  p1: 'SiyahKare, kurum içi kültür ve yönetim proseslerini çalışanlarının müşterilerimize  en fazla faydayı sağlaması, katma değer yaratması yönünde motive eder ve yetkilendirir. Müşterilerimizin çizgisini daima yükseltmek ve gelecekte yaşanacak değişimlere karşı müşterilerimizi önceden adapte etmek onları bu doğrultudaki hedef ve potansiyellere göre hazırlamak temel ilkelerimizdir.',
                  p2: 'SiyahKare birlikte heyecenla çalışabileceğimiz ve herbirimizin yeni değerler katabileceği bir iş ortamına sahiptir. Gerekli araç ve destek sağlandığında en iyi işi çıkarmak yaklaşamını benimsiyor, çıkaracağımız işlerin kalite ve başarısına inanıyoruz. Teknoloji odaklı yeni iş kollarından yararlanarak, müşterilerimizle geliştirdiğimiz güçlü sinerjiyi yüksek getirili e-iş fırsatlarına dönüştürmek için çalışıyoruz.',
                  p3: 'Başarımızın anahtarı proje hedeflerinin ötesine odaklanmış, birbirlerini tamamlayıcı uzmanlık alanlarında çalışan geniş ekibimizle şirketimiz içindeki takımlar ve organizasyonlarımız arasındaki verimli işbirliğiyle; uzun vadeli stratejileri takip eden çözümler üretmeyi ve %100 müşteri memnuniyetine dayanan koşulsuz pozitif referans sağlamayı kendimize ilke edinmiş olmamızdır.',
                  p4: 'Açıklık ve dürüstlük ilkesiyle tüm işlerimizde ve ilişkilerimizde doğrudan iletişimi esas alıyoruz.Edindiğimiz ilkelerin bize güven, saygı ve bağlılık kazandıracağı bilinciyle hareket ediyor en yüksek iş etik ve değerlerini doğrudan sahipleniyoruz. Bu bilinç ile hazırladığımız çözümleri şartsız olarak önceden belirlenmiş süre, bütçe ve terminler dahilinde tamamlıyor ve sunulan çözümün güncel kalması için takibi ve teknik desteği sürdürüyoruz.'
                },
                sub_bottom_title: 'Bizimle çalışmak ister misiniz?',
                sub_bottom_text: 'Yetenekli ve hevesli dijital kahramanlarla çalışmaya açığız. Daha fazla işbirliği için',
                contact_us: 'bize ulaşın.'
              },
              pageFormula: {
                title: 'Formül',
                subTitle: 'Susan Hiçliğin Sembolü',
                sub_top_title: 'SiyahKare Dijital Çözümler',
                sub_top_text: 'E-Ticaret Çözümleri, Online ve Mobil Uygulamalar, Profesyonel Sosyal Platform Servisleri, Yazılım Geliştirme ve Endüstriyel Yazılım Otomasyonlarını en son teknolojileri kullanarak üretirken, proje bazlı dijital çözümler sunuyoruz.',
                list: {
                  item_1_title: 'Strateji',
                  item_1_text: 'Pazar Araştırması, Proje Yönetimi, Kullanıcı Algısı Yönetimi, Veri Analizi, Stratejik Planlama ve Teknoloji Danışmanlığı',
                  item_2_title: 'Tasarım',
                  item_2_text: 'Özel Çözüm Web Siteleri, Online Uygulamalar, Profesyonel Sosyal Platform Yönetimi, Kurumsal Medya Danışmanlığı ve Tüm Dijital Uygulamalar',
                  item_3_title: 'Geliştirme',
                  item_3_text: 'Her zaman özgün fikirlere odaklanıyoruz. Kullanıcı dostu ve fonksiyonel yeni nesil uygulamaları geliştirirken, gelecekte yapılabileceklerin sınırlarını zorluyoruz.',
                },
                sub_bottom_title: 'Suprematizm * - Nesnesiz Dünya Çağı"',
                sub_bottom_text_1: "Malevich, ''yemlik'' diye adlandırdığı nesneler dünyasından kurtuluşun sembolü olarak ''Sıfır-Biçim''i görüyordu. \"Sanatı nesneler dünyasının yükünden kurtarabilmenin çaresizliği içinde kare biçimine sığındım.\" diyordu. \"Sıfır-Biçim\" Malevich'e göre yalnız sanat için değil, insanlık için de kurtuluşun sembolüydü. \"Sıfır-Biçim\" nesnelerin, mal ve mülk hırsının, her türlü çıkarın yok olacağı, insanlara mutluluk getirecek bir çağın habercisiydi. Bu çağa Malevich \"Suprematizm - Nesnesiz Dünya Çağı'' diyordu. Suprematizm Çağında insanlar, yaşam kavgası içinde boğuşmayacak, yüksek değerler gerçekleşecek, eşitlik, kardeşlik ve barış içinde mutluluğa kavuşacaklardı.Suprematizm Çağı yaratıcılık çağı olacaktı. Nesneler dünyasından sıyrılan insan, \"Hiçlik\" içine atılacak ve onun içinde eriyecekti. Fakat ''Hiçlik'' yok olmak değil; nesnelerin boyunduruğundan kurtulmak, evrene ve evrensel oluşuma açılma özgürlüğüydü.",
                sub_bottom_text_2: '* Suprematizm : 1913\'te Rusya\'da Malevich tarafından başlatılan bir soyut sanat hareketi. "Suprema" dünyası salt bir düzlem üzerindeki dikdörtgen dünyasıdır. Resim yabancı elemanlardan arındırılmıştır.'
              },
              pageTechnologyStack: {
                title: 'Teknoloji Altyapımız'
              },
              pageContact: {
                title: 'İletişim',
                sendUs: 'Bize Ulaşın',
                sendUsText: 'Ürünlerimizle ilgili her konuda bizimle iletişime geçebilirsiniz.en kısa sürede sizinle iletişime geçeceğiz.',
                form: {
                  name: 'İsim Soyisim',
                  mail: 'Mail adresiniz',
                  phone: 'Telefon',
                  msg: 'Mesajınız',
                  send: 'Gönder'
                },
                openTime: 'Paz - Cuma'
              },
              pageCloudServer: {
                title: 'Bulut Mimarisi'
              },
              pageReferences: {
                title: 'Referanslar'
              },
              pageFinancialServices: {
                title: 'Finansal Hizmetler'
              },
              pageDigitalMarketing: {
                title: 'Dijital Pazarlama'
              },
              pageTechnologySupport: {
                title: 'Teknoloji Desteği'
              },
              pageGrowthHacking: {
                title: 'Growth Hacking'
              },
              pageWebDevelopment: {
                title: 'Web Geliştirme'
              },
              pageMobileDevelopment: {
                title: 'Mobil Geliştirme'
              },
              pageEcommerceSolutions: {
                title: 'E-Ticaret Çözümleri'
              },
              pageBusinessAutomations: {
                title: 'İş Otomasyonları'
              },
              pageIndustrialBlockchain: {
                title: 'Endüstriyel Blockchain'
              },
              pageCourseAutomation: {
                title: 'Ders Otomasyonu'
              },
              pageProactiveManagement: {
                title: 'Proaktif Yönetim'
              },
              pageSoftwareEngineering: {
                title: 'Yazılım Mühendisliği'
              },
              pageCorporateIdentity: {
                title: 'Kurumsal Kimlik'
              },
              pageConsultancy: {
                title: 'Danışmanlık'
              },
              pageTeam: {
                title: 'Ekibimiz'
              }
            },
            en: {
              greeting: 'Hello world!',
              basic: {
                mail: 'E-Mail',
                pssw: 'Password',
                references: 'References',
                webpage: 'Web Page',
                goToWebSite: 'Visit Website'
              },
              navbar: {
                contact: 'CONTACT'
              },
              errors: {
                allRequired: 'Please fill de blank Fields'
              },
              footer: {
                login: 'Login',
                apps: 'Apps'
              },
              pageIndex: {
                headDesc: 'What is the Limit of What You Can Do in the Future?',
                about: {
                  p1: 'Dijital Solutions',
                  p2: 'We develop extensive experiences in the digital age',
                  p3: 'We offer a comprehensive range of services to create unique experiences',
                  p4: 'we always focus on unique ideas',
                  p5: 'your possibilities for the future',
                  p6: 'we are pushing the limits',
                  p7: 'For the next generation',
                  p8: 'what is impossible?',
                },
                pageIndex: {
                  headDesc: 'What is the Limit of What You Can Do in the Future?',
                  offerForm: {
                    title: 'Get Offer',
                    desc: 'Fill out the form now and get free offers for your business or product.',
                    name: 'Name Surname',
                    phone: 'Phone',
                    company: 'Company Name',
                    service: 'The Service You Want To Get',
                    mail: 'Email',
                    submit: 'Send'
                  }
                }
              }
            },
            ru: {
              greeting: 'Здравствуйте',
              basic: {
                mail: 'E-Mail',
                pssw: 'Password',
                references: 'References',
                webpage: 'Web Page',
                goToWebSite: 'Visit Website'
              },
              navbar: {
                contact: 'CONTACT',
                apps: 'Apps'
              },
              errors: {
                allRequired: 'Please fill de blank Fields'
              },
              footer: {
                login: 'Login'
              },
              pageIndex: {
                headDesc: 'What is the Limit of What You Can Do in the Future?',
                about: {
                  p1: 'Dijital Solutions',
                  p2: 'We develop extensive experiences in the digital age',
                  p3: 'We offer a comprehensive range of services to create unique experiences',
                  p4: 'we always focus on unique ideas',
                  p5: 'your possibilities for the future',
                  p6: 'we are pushing the limits',
                  p7: 'For the next generation',
                  p8: 'what is impossible?',
                },
                offerForm: {
                  title: 'Get Offer',
                  desc: 'Fill out the form now and get free offers for your business or product.',
                  name: 'Name Surname',
                  phone: 'Phone',
                  company: 'Company Name',
                  service: 'The Service You Want To Get',
                  mail: 'Email',
                  submit: 'Send'
                }
              }
            }
          }
        }
      }
    ],
    '@nuxtjs/axios',
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/nuxt/',
  },
  generate: {
    dir: 'public'
  },
  loading: '~/components/app/loader.vue'
}
