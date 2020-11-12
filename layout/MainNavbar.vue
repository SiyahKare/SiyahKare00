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
    <div class="md-toolbar-row md-collapse-lateral" :lang="$i18n.locale">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          <nuxt-link class="logo-link" to="/" style="color: #ffffff">
            <i class="fa fa-cube"></i> <b>SiyahKare</b>
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
              <li class="md-list-item" v-for="item in navLinks">
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
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
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
                        <img :src="languages[$i18n.locale].flag" alt="flag">
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li
                          v-for="(li, key) in languages"
                          :key="key"
                          v-if="key !== $i18n.locale"
                        >
                          <nuxt-link
                            :to="switchLocalePath(li.short)"
                          >
                            <img :src="li.flag" alt="flag" style="padding-right: 3px">
                            {{ li.title[$i18n.locale] }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      class="md-success md-round"
                    >
                      <i class="fa fa-whatsapp"></i>
                      {{ $t('navbar.contact') }}
                    </md-button>
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
        extraNavClasses: "",
        toggledClass: false,
        brand: "SiyahKare",
        languages: {
          tr: {
            flag: require("@/assets/images/flags/TR.png"),
            title: {
              tr: 'Türkçe',
              en: 'Turkish',
              ru: 'турецкий'
            },
            short: 'tr'
          },
          en: {
            flag: require("@/assets/images/flags/EN.png"),
            title: {
              tr: 'İngilizce',
              en: 'English',
              ru: 'Ингилизце'
            },
            short: 'en'
          },
          ru: {
            flag: require("@/assets/images/flags/RU.png"),
            title: {
              tr: 'Rusca',
              en: 'Russian',
              ru: 'русский'
            },
            short: 'ru'
          }
        }
      };
    },
    computed: {
      showDownload() {
        const excludedRoutes = ["index"];
        return excludedRoutes.every(r => r !== this.$route.name);
      },
      navLinks() {
        return this.$store.state.app.navLinks
      }
    },
    mounted() {
      document.addEventListener("scroll", this.scrollListener);
    },
    beforeDestroy() {
      document.removeEventListener("scroll", this.scrollListener);
    },
    created() {
      // console.log('navLinks', this.navLinks)
      // console.log('this.getLangObj')
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


<style>

  .logo-link:hover {
    color: inherit !important;
  }
</style>
<style lang="scss" scoped>
  .md-toolbar {
    background-color: #212121!important;
  }
</style>
