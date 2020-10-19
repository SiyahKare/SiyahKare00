<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-fixed"
    :class="{
      [`md-${type}`]: !navbarTransparent,
      [extraNavClasses]: navbarTransparent,
      'md-transparent': navbarTransparent
    }"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          <nuxt-link to="/"><i class="material-icons">home</i>
            {{ brand }} - {{$i18n.locale}}
          </nuxt-link>
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"/>
          <span class="icon-bar"/>
          <span class="icon-bar"/>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <!--              <li-->
              <!--                v-if="showDownload"-->
              <!--                class="md-list-item"-->
              <!--              >-->
              <!--                <a-->
              <!--                  href="javascript:void(0)"-->
              <!--                  class="md-list-item-router md-list-item-container md-button-clean dropdown"-->
              <!--                >-->
              <!--                  <div class="md-list-item-content">-->
              <!--                    <drop-down direction="down">-->
              <!--                      <md-button-->
              <!--                        slot="title"-->
              <!--                        class="md-button md-button-link md-white md-simple dropdown-toggle"-->
              <!--                        data-toggle="dropdown"-->
              <!--                      >-->
              <!--                        <i class="material-icons">apps</i>-->
              <!--                        <p>Components</p>-->
              <!--                      </md-button>-->
              <!--                      <ul class="dropdown-menu dropdown-with-icons">-->
              <!--                        <li>-->
              <!--                          <a href="/">-->
              <!--                            <i class="material-icons">layers</i>-->
              <!--                            Presentation-->
              <!--                          </a>-->
              <!--                        </li>-->
              <!--                        <li>-->
              <!--                          <a href="/">-->
              <!--                            <i class="material-icons">line_style</i>-->
              <!--                            All Components-->
              <!--                          </a>-->
              <!--                        </li>-->
              <!--                        <li>-->
              <!--                          <a :href="docs_link">-->
              <!--                            <i class="material-icons">content_paste</i>-->
              <!--                            Documentation-->
              <!--                          </a>-->
              <!--                        </li>-->
              <!--                      </ul>-->
              <!--                    </drop-down>-->
              <!--                  </div>-->
              <!--                </a>-->
              <!--              </li>-->


              <li v-if="!showPages" class="md-list-item" v-for="item in navLinks">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">{{item.icon}}</i>
                        <p>{{item.title[$i18n.locale]}}</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li
                          v-for="(li, index) in item.subMenu"
                          :key="index"
                        >

                          <nuxt-link v-if="li.nLink !== undefined" :to="'/' + li.nLink">
                            <i class="material-icons">{{ li.icon }}</i>
                            {{
                            li.title[$i18n.locale].charAt(0).toUpperCase() + li.title[$i18n.locale].slice(1)
                            }}
                          </nuxt-link>

                          <!--                          <a-->
                          <!--                            v-else-->
                          <!--                            :href="'#/sections#' + li.text"-->
                          <!--                            @click="-->
                          <!--                              () => {-->
                          <!--                                NavbarStore.showNavbar = false;-->
                          <!--                                toggledClass = false;-->
                          <!--                              }-->
                          <!--                            "-->
                          <!--                          >-->
                          <!--                            <i class="material-icons">{{ li.icon }}</i>-->
                          <!--                            {{-->
                          <!--                            li.title[$i18n.locale].charAt(0).toUpperCase() + li.title[$i18n.locale].slice(1)-->
                          <!--                            }}-->
                          <!--                          </a>-->
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>


              <li
                class="md-list-item"
                v-if="showPages"
              >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Components</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li
                          v-for="(li, index) in linksComponents"
                          :key="li.name"
                        >
                          <!--                          <a :href="'#/' + li.href">-->
                          <!--                            <i class="material-icons">{{ li.icon }}</i>-->
                          <!--                            {{ li.name }}-->
                          <!--                          </a>-->

                          <nuxt-link :to="'/' + li.nLink"><i class="material-icons">{{ linksExamples[index].icon }}</i>
                            {{ li.name }}
                          </nuxt-link>
                        </li>
                        <li>
                          <a :href="docs_link">
                            <i class="material-icons">content_paste</i>
                            Documentation
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>


              <li v-if="showPages" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_day</i>
                        <p>Sections</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <nuxt-link
                            v-if="$i18n.locale !== 'tr'"
                            :to="switchLocalePath('tr')"
                          >
                            Tr
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                          >
                            En
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            v-if="$i18n.locale !== 'ru'"
                            :to="switchLocalePath('ru')"
                          >
                            Ru
                          </nuxt-link>
                        </li>
                        <li
                          v-for="li in linksSections"
                          :key="li.name"
                        >

                          <nuxt-link v-if="li.nLink !== undefined" :to="'/' + li.nLink">
                            <i class="material-icons">{{ li.icon }}</i>
                            {{
                            li.name.charAt(0).toUpperCase() + li.name.slice(1)
                            }}
                          </nuxt-link>

                          <a
                            v-else
                            :href="'#/sections#' + li.name"
                            @click="
                              () => {
                                NavbarStore.showNavbar = false;
                                toggledClass = false;
                              }
                            "
                          >
                            <i class="material-icons">{{ li.icon }}</i>
                            {{
                            li.name.charAt(0).toUpperCase() + li.name.slice(1)
                            }}
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li v-if="showPages" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <p>Examples</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li
                          v-for="li in linksExamples"
                          :key="li.name"
                        >
                          <!--                          <a :href="'#/' + li.href">-->
                          <!--                            <i class="material-icons">{{ li.icon }}</i>-->
                          <!--                            {{ li.name }}-->
                          <!--                          </a>-->

                          <nuxt-link v-if="li.nLink !== undefined" :to="'/' + li.nLink"><i class="material-icons">{{
                            li.icon }}</i>
                            {{ li.name }}
                          </nuxt-link>
                          <nuxt-link v-else :to="li.href" no-prefetch><i class="material-icons">{{ li.icon }}</i>
                            {{ li.name }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li v-if="showPages" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      class="md-success md-round"
                    >
                      <md-icon>shopping_cart</md-icon>
                      Buy now
                    </md-button>
                  </div>
                </a>
              </li>

              <li v-if="!showPages" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      class="md-success md-round"
                    >
                      <md-icon>shopping_cart</md-icon>
                      {{ $t('navbar.contact') }}
                    </md-button>
                  </div>
                </a>
              </li>

              <li
                class="md-list-item"
              >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Dev</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#" @click.prevent="showPages = true">
                            <i class="material-icons">content_paste</i>
                            Material Menü
                          </a>
                        </li>
                        <li>
                          <a href="#" @click.prevent="showPages = false">
                            <i class="material-icons">content_paste</i>
                            SiyahKare Menü
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>


            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
  let resizeTimeout;

  function resizeThrottler(actualResizeHandler) {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }

  import MobileMenu from "@/layout/MobileMenu";

  export default {
    components: {
      MobileMenu
    },
    props: {
      type: {
        type: String,
        default: "white",
        validator(value) {
          return [
            "white",
            "default",
            "primary",
            "danger",
            "success",
            "warning",
            "info",
            "dark"
          ].includes(value);
        }
      },
      colorOnScroll: {
        type: Number,
        default: 100
      },
      navbarTransparent: {
        type: Boolean,
        default: true
      },
      NavbarStore: {
        default: {
          showNavbar: false
        }
      }
    },
    data() {
      return {
        devMode: false,
        showPages: false,
        docs_link:
          "https://demos.creative-tim.com/vue-material-kit-pro/documentation/",
        extraNavClasses: "",
        toggledClass: false,
        brand: "Vue Material Kit PRO",
        linksSections: [
          {name: "headers", icon: "dns", nLink: 'sections/Headers'},
          {name: "features", icon: "build", nLink: 'sections/Features'},
          {name: "blogs", icon: "list", nLink: 'sections/Blogs'},
          {name: "teams", icon: "people", nLink: 'sections/Teams'},
          {name: "projects", icon: "assignment", nLink: 'sections/Projects'},
          {name: "pricing", icon: "monetization_on", nLink: 'sections/Pricing'},
          {name: "testimonials", icon: "chat", nLink: 'sections/Testimonials'},
          {name: "contacts", icon: "call", nLink: 'sections/ContactUs'}
        ],
        linksExamples: [
          {name: "About Us", href: "about-us", icon: "account_balance", nLink: 'examples/AboutUs'},
          {name: "Blog Post", href: "blog-post", icon: "art_track", nLink: 'examples/BlogPost'},
          {name: "Blog Posts", href: "blog-posts", icon: "view_quilt", nLink: 'examples/BlogPosts'},
          {name: "Contact Us", href: "contact-us", icon: "location_on", nLink: 'examples/ContactUs'},
          {name: "Landing Page", href: "landing-page", icon: "view_day", nLink: 'examples/Landing'},
          {name: "Login Page", href: "login-page", icon: "fingerprint", nLink: 'examples/Login'},
          {name: "Pricing Page", href: "pricing-page", icon: "attach_money", nLink: 'examples/Pricing'},
          {
            name: "Shopping Cart",
            href: "shopping-cart",
            icon: "shopping_basket", nLink: 'examples/Shopping'
          },
          {name: "Ecommerce Page", href: "ecommerce-page", icon: "store", nLink: 'examples/Ecommerce'},
          {name: "Product Page", href: "product-page", icon: "shopping_cart", nLink: 'examples/Product'},
          {name: "Profile Page", href: "profile-page", icon: "account_circle", nLink: 'examples/Profile'},
          {name: "Signup Page", href: "signup-page", icon: "person_add", nLink: 'examples/Signup'},
          {name: "Error Page", href: "error-page", icon: "error", nLink: 'examples/Error'}
        ],
        linksComponents: [
          {name: "Basic Elements Section", icon: "account_balance", nLink: 'components/BasicElementsSection'},
          {name: "Cards Section", icon: "account_balance", nLink: 'components/CardsSection'},
          {name: "Comments Section", icon: "account_balance", nLink: 'components/CommentsSection'},
          {name: "Footer Section", icon: "account_balance", nLink: 'components/FooterSection'},
          {
            name: "Javascript Components Section",
            icon: "account_balance",
            nLink: 'components/JavascriptComponentsSection'
          },
          {name: "Navigation Section", icon: "account_balance", nLink: 'components/NavigationSection'},
          {name: "NavPills Section", icon: "account_balance", nLink: 'components/NavPillsSection'},
          {name: "Notifications Section", icon: "account_balance", nLink: 'components/NotificationsSection'},
          {name: "PreFooter Section", icon: "account_balance", nLink: 'components/PreFooterSection'},
          {name: "Small Navigation Section", icon: "account_balance", nLink: 'components/SmallNavigationSection'},
          {name: "Tables Section", icon: "account_balance", nLink: 'components/TablesSection'},
          {name: "Tabs Section", icon: "account_balance", nLink: 'components/TabsSection'},
          {name: "Typography Images Section", icon: "account_balance", nLink: 'components/TypographyImagesSection'},
        ],
        navLinks: [
          // {
          //   title: {
          //     tr: 'Formül',
          //     en: 'Formül-EN',
          //     ru: 'Formül-RU',
          //   },
          //   nLink: '',
          //   subMenu: [
          //     {
          //       text: {
          //         tr: 'example_TR',
          //         en: 'example_EN',
          //         ru: 'example_RU',
          //       },
          //       nLink: 'account_balance',
          //       icon: 'account_balance'
          //     }
          //   ]
          // },
          {
            title: {
              tr: 'FORMÜL',
              en: 'FORMULA',
              ru: 'FORMULA',
            },
            icon: 'apps',
            nLink: '',
            subMenu: [
              {
                "title": {
                  "tr": "Formül",
                  "en": "Formula",
                  "ru": "Formula"
                },
                "icon": "lightbulb_outline",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Hakkımızda",
                  "en": "About Us",
                  "ru": "About Us"
                },
                "icon": "info_outline",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Teknoloji Altyapımız",
                  "en": "Technology Stack",
                  "ru": "Technology Stack"
                },
                "icon": "layers",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Bulut Mimarisi",
                  "en": "Cloud Architecture",
                  "ru": "Cloud Architecture"
                },
                "icon": "cloud",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Referanslar",
                  "en": "References",
                  "ru": "References"
                },
                "icon": "content_paste",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "İletişim",
                  "en": "Contact",
                  "ru": "Contact"
                },
                "icon": "call",
                "nLink": "nLink"
              }
            ]
          },
          {
            title: {
              tr: 'SERVİSLER',
              en: 'SERVICES',
              ru: 'SERVICES',
            },
            icon: 'view_day',
            nLink: '',
            subMenu: [
              {
                "title": {
                  "tr": "Finansal Hizmetler",
                  "en": "Digital Marketing",
                  "ru": "Digital Marketing"
                },
                "icon": "dns",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Teknoloji Desteği",
                  "en": "Media Production",
                  "ru": "Media Production"
                },
                "icon": "build",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Dijital Pazarlama",
                  "en": "Growth Hacking",
                  "ru": "Growth Hacking"
                },
                "icon": "security",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Growth Hacking",
                  "en": "Web Development",
                  "ru": "Web Development"
                },
                "icon": "people",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Web Geliştirme",
                  "en": "Mobile Development",
                  "ru": "Mobile Development"
                },
                "icon": "assignment",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Mobil Geliştirme",
                  "en": "Fullstack Development",
                  "ru": "Fullstack Development"
                },
                "icon": "monetization_on",
                "nLink": "nLink"
              }
            ]
          },
          {
            title: {
              tr: 'ÇÖZÜMLER',
              en: 'SOLUTIONS',
              ru: 'SOLUTIONS',
            },
            icon: 'view_carousel',
            nLink: '',
            subMenu: [
              {
                "title": {
                  "tr": "E-Ticaret Çözümleri",
                  "en": "E-Commerce Solutions",
                  "ru": "E-Commerce Solutions"
                },
                "icon": "shopping_cart",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "İş Otomasyonları",
                  "en": "Business Automations",
                  "ru": "Business Automations"
                },
                "icon": "fingerprint",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Endüstriyel Blokzinciri",
                  "en": "Industrial Blockchain",
                  "ru": "Industrial Blockchain"
                },
                "icon": "art_track",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Kurs Otomasyonu",
                  "en": "Course Automation",
                  "ru": "Course Automation"
                },
                "icon": "view_quilt",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Proaktif Yönetim",
                  "en": "Proactive Management",
                  "ru": "Proactive Management"
                },
                "icon": "location_on",
                "nLink": "nLink"
              },
              {
                "title": {
                  "tr": "Yazılım Mühendisliği",
                  "en": "Software Engineering",
                  "ru": "Software Engineering"
                },
                "icon": "attach_money",
                "nLink": "nLink"
              }
            ]
          },
        ],
        test1: 'greeting'
      };
    },
    computed: {
      showDownload() {
        const excludedRoutes = ["index"];
        return excludedRoutes.every(r => r !== this.$route.name);
      }
    },
    mounted() {
      document.addEventListener("scroll", this.scrollListener);
    },
    beforeDestroy() {
      document.removeEventListener("scroll", this.scrollListener);
    },
    created() {
      console.log('navLinks', this.navLinks)
      console.log('this.getLangObj')
    },
    methods: {
      getLangObj(tr = '', en = '', ru = '') {
        return {
          tr: tr,
          en: en,
          ru: ru
        }
      },
      bodyClick() {
        let bodyClick = document.getElementById("bodyClick");

        if (bodyClick === null) {
          let body = document.querySelector("body");
          let elem = document.createElement("div");
          elem.setAttribute("id", "bodyClick");
          body.appendChild(elem);

          let bodyClick = document.getElementById("bodyClick");
          bodyClick.addEventListener("click", this.toggleNavbarMobile);
        } else {
          bodyClick.remove();
        }
      },
      toggleNavbarMobile() {
        this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
        this.toggledClass = !this.toggledClass;
        this.bodyClick();
      },
      handleScroll() {
        let scrollValue =
          document.body.scrollTop || document.documentElement.scrollTop;
        let navbarColor = document.getElementById("toolbar");
        this.currentScrollValue = scrollValue;
        if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
          this.extraNavClasses = `md-${this.type}`;
          navbarColor.classList.remove("md-transparent");
        } else {
          if (this.extraNavClasses) {
            this.extraNavClasses = "";
            navbarColor.classList.add("md-transparent");
          }
        }
      },
      scrollListener() {
        resizeThrottler(this.handleScroll);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .md-toolbar {
    background-color: #000000 !important;
  }
</style>
