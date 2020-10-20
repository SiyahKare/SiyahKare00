<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter clear-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="header-video">
        <span class="video-overlay"></span>
        <div class="video-frame">
          <iframe src="https://player.vimeo.com/video/23385554?background=1" frameborder="0" webkitallowfullscreen
                  mozallowfullscreen allowfullscreen></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div class="header-layout md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img
              v-show="leafShow"
              :src="leaf4"
              alt="leaf4"
              class="leaf4"
            >
            <img
              v-show="leafShow"
              :src="leaf3"
              alt="leaf3"
              class="leaf3"
            >
            <img
              v-show="leafShow"
              :src="leaf2"
              alt="leaf2"
              class="leaf2"
            >
            <img
              v-show="leafShow"
              :src="leaf1"
              alt="leaf1"
              class="leaf1"
            >
            <div class="brand">
              <h1>
                SiyahKare
              </h1>
              <span class="pro-badge">
                Pro
              </span>
              <h3 class="title">
                {{ $t('pageIndex.headDesc') }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div
      id="main-panel"
      class="main main-raised"
    >


      <div class="section index-card">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">
                SiyahKare
                Digital Çözümler
              </h2>
            </div>

          </div>
          <div class="features-list">
            <div class="f-list-item" v-for="(item, i) in features" :key="i">
              <info-areas
                icon-color="default"
                :icon="item.icon"
                text-center
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  {{item.text}}
                </h4>
                <!--                <p slot="content">-->
                <!--                  {{item.text}}-->
                <!--                </p>-->
              </info-areas>
            </div>
          </div>

          <div class="md-layout">
            <div v-for="(item, index) in cardSection" class="md-layout-item md-large-size-33 md-small-size-100"
                 :key="index">
              <blog-card
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="item.img"
                class="sk-card"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    {{item.title}}
                  </h6>
                  <p class="card-description">
                    {{item.text}}
                  </p>
                </template>
              </blog-card>
            </div>
          </div>

        </div>
      </div>


      <div
        class="section section-team-5 section-image"
        :style="setBg(pageMiddle.bgImg)"
      >
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title">
                The Executive Team 5
              </h2>
              <h5 class="description">
                This is the paragraph where you can write more details about your
                team. Keep you user engaged by providing meaningful information.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="section index-card">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">
                Diğer Card Alanı
              </h2>
            </div>

          </div>
        </div>

        <div class="md-layout">
          <div v-for="(item, index) in cardSection2" class="md-layout-item md-large-size-33 md-small-size-100"
               :key="index">
            <full-bg-card :card-image="item.img">
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Productivy Apps
                </h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">
                    The Best Productivity Apps on Market
                  </h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-simple"
                >
                  <md-icon>subject</md-icon>
                  Read Article
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-simple"
                >
                  <md-icon>watch_later</md-icon>
                  Watch Later
                </md-button>
              </template>
            </full-bg-card>

          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import BasicElements from "./components/BasicElementsSection";
  import Navigation from "./components/NavigationSection";
  import SmallNavigation from "./components/SmallNavigationSection";
  import Tabs from "./components/TabsSection";
  import NavPills from "./components/NavPillsSection";
  import Notifications from "./components/NotificationsSection";
  import TypographyImages from "./components/TypographyImagesSection";
  import JavascriptComponents from "./components/JavascriptComponentsSection";
  import PreFooterAreas from "./components/PreFooterSection";
  import FooterAreas from "./components/FooterSection";
  import Tables from "./components/TablesSection";
  import Comments from "./components/CommentsSection";
  import Cards from "./components/CardsSection";
  import Mixins from "@/plugins/basicMixins";

  export default {
    name: "Index",
    components: {
      BasicElements,
      Navigation,
      SmallNavigation,
      Tabs,
      NavPills,
      Notifications,
      TypographyImages,
      JavascriptComponents,
      PreFooterAreas,
      FooterAreas,
      Tables,
      Comments,
      Cards
    },
    mixins: [Mixins.VerticalNav, Mixins.HeaderImage],
    bodyClass: "index-page",
    props: {
      image: {
        type: String,
        default: require("@/assets/img/vue-mk-header.jpg")
      },
      leaf4: {
        type: String,
        default: require("@/assets/img/leaf4.png")
      },
      leaf3: {
        type: String,
        default: require("@/assets/img/leaf3.png")
      },
      leaf2: {
        type: String,
        default: require("@/assets/img/leaf2.png")
      },
      leaf1: {
        type: String,
        default: require("@/assets/img/leaf1.png")
      },
      landing: {
        type: String,
        default: require("@/assets/img/landing.jpg")
      },
      profile: {
        type: String,
        default: require("@/assets/img/profile.jpg")
      }
    },
    data() {
      return {
        firstname: null,
        email: null,
        password: null,
        leafShow: false,
        features: [
          {
            text: 'Dijital çağda kapsamlı deneyimler geliştiriyoruz',
            icon: 'code',
          },
          {
            text: 'Eşsiz deneyimler yaratmak için kapsamlı bir hizmet yelpazesi sunuyoruz',
            icon: 'format_paint'
          },
          {
            text: 'her zaman benzersiz fikirlere odaklanıyoruz',
            icon: 'dashboard'
          },
          {
            text: 'gelecek için olasılıkların sınırlarını zorluyoruz',
            icon: 'access_time'
          },
          {
            text: 'Gelecek nesil için imkansız olan nedir ?',
            icon: 'view_carousel'
          },
        ],
        cardSection: [
          {
            img: require("@/assets/images/card-header/1.jpeg"),
            title: 'Blockchain Tabanlı Küresel Ödeme Araçları',
            text: 'Blockchain, Büyük Veri ve Yapay Zeka ile Finansal Hizmetlerin Yeniden Tasarlanması'
          },
          {
            img: require("@/assets/images/card-header/3.jpeg"),
            title: 'TEKNOLOJİ DESTEĞİ',
            text: 'Teknoloji Projelerinize Danışmanlık Destek Hizmetleri',
          },
          {
            img: require("@/assets/images/card-header/4.jpeg"),
            title: 'DİJİTAL PAZARLAMA',
            text: 'Doğru insanlara doğru kanaldan ulaşın',
          }
        ],
        pageMiddle: {
          bgImg: require("@/assets/images/pages/index/middle.jpg")
        },
        cardSection2: [
          {
            img: require("@/assets/images/card-header/5.jpeg"),
          },
          {
            img: require("@/assets/images/card-header/8.jpeg"),
          },
          {
            img: require("@/assets/images/card-header/11.jpeg"),
          }
        ]
      };
    },
    mounted() {
      this.leafActive();
      window.addEventListener("resize", this.leafActive);
      document.addEventListener("scroll", this.scrollListener);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.leafActive);
      document.removeEventListener("scroll", this.scrollListener);
    },
    methods: {
      leafActive() {
        if (window.innerWidth < 768) {
          this.leafShow = false;
        } else {
          this.leafShow = true;
        }
      },
      setBg(img) {
        return {
          backgroundImage: `url(${img})`
        };
      }
    }
  };
</script>
<style lang="scss">
  .section-download {
    .md-button + .md-button {
      margin-left: 5px;
    }
  }

  .vertical-nav-active {
    display: block;
  }

  @media all and (min-width: 991px) {
    .btn-container {
      display: flex;
    }
  }

  @media all and (max-width: 768px) {
    .vertical-nav-active {
      display: none;
    }
  }

  .mb-0 {
    padding-bottom: 0 !important;
  }

  #morphing-cards {
    padding-top: 70px;
  }

  .header-video {
    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 3;
    }

    .video-frame {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  .header-layout {
    z-index: 5 !important;
  }

  .sk-card {
    background: red;
    height: 100%;
    margin-top: 15px;

    .md-card-header {
      margin-left: 0 !important;
      margin-right: 0 !important;
      margin-top: 0;

      .img {
        height: 280px;
        object-fit: cover;
      }
    }

    .md-card-content {

    }
  }

  .features-list {
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;

    .f-list-item {
      flex-grow: 1;
      width: 33%;

      .md-icon {
        font-size: 3rem !important;
      }
    }
  }
</style>
