<template>
  <div class="wrapper">

    <!--    <loader v-if="!isReady"></loader>-->

    <parallax
      class="page-header index header-filter clear-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="header-video">
        <span class="video-overlay"></span>
        <div class="video-frame">
          <video autoplay muted loop :poster="videoPoster" class="video">
            <source :src="video" type="video/mp4">
          </video>
        </div>
      </div>
      <!--      <div class="header-layout md-layout">-->
      <!--        <div class="md-layout-item">-->
      <!--          <div class="image-wrapper">-->
      <!--            <div class="brand">-->
      <!--              <h3 class="title">-->
      <!--                {{ $t('pageIndex.headDesc') }}-->
      <!--              </h3>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </parallax>
    <div
      id="main-panel"
      class="main main-raised"
    >


      <div class="section index-card">
        <div class="container">
          <div class="md-layout">
            <!--            <div-->
            <!--              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"-->
            <!--            >-->
            <!--              <h2 class="title text-center">-->
            <!--                <img :src="logo2" alt="logo" style="max-width: 150px">-->
            <!--                <br>-->
            <!--                SiyahKare-->
            <!--                Digital Çözümler-->
            <!--              </h2>-->
            <!--            </div>-->

          </div>
          <!--          <div class="features-list">-->
          <!--            <div class="f-list-item" v-for="(item, i) in features" :key="i">-->
          <!--              <info-areas-->
          <!--                icon-color="default"-->
          <!--                :icon="item.icon"-->
          <!--                text-center-->
          <!--              >-->
          <!--                <h4-->
          <!--                  slot="title"-->
          <!--                  class="info-title"-->
          <!--                >-->
          <!--                  {{item.text}}-->
          <!--                </h4>-->
          <!--                &lt;!&ndash;                <p slot="content">&ndash;&gt;-->
          <!--                &lt;!&ndash;                  {{item.text}}&ndash;&gt;-->
          <!--                &lt;!&ndash;                </p>&ndash;&gt;-->
          <!--              </info-areas>-->
          <!--            </div>-->
          <!--          </div>-->

          <div class="features text-center">
            <img :src="logo2" alt="logo" style="max-width: 150px">
            <h1 class="description text-center">
              <b>SiyahKare</b> <br>
              <b> {{ $t('pageIndex.about.p1') }}</b> <br>
            </h1>
            <h2 class="description text-center">
              {{ $t('pageIndex.about.p2') }} <br>
              <br>
              {{ $t('pageIndex.about.p3') }} <br>
            </h2>
            <h3 class="description text-center">
              <b>{{ $t('pageIndex.about.p4') }}</b> <br>
              {{ $t('pageIndex.about.p5') }}<br>
              {{ $t('pageIndex.about.p6') }} <br>
            </h3>
            <h1 class="description text-center">
              <b>{{ $t('pageIndex.about.p7') }} <br> {{ $t('pageIndex.about.p8') }}</b><br>
            </h1>
          </div>

          <div class="md-layout">
            <div v-for="(item, index) in cardSection" style="max-height: 425px;"
                 class="md-layout-item md-large-size-33 md-small-size-100"
                 :key="index">
              <blog-card
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="item.img"
                class="sk-card"
                :url="item.url"
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
                {{ $t('pageIndex.offerForm.title') }}
              </h2>
            </div>
          </div>
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
            >
              <div class="offer-form">

                <p class="description color-white">
                  {{ $t('pageIndex.offerForm.desc') }}
                </p>

                <form class="form">
                  <div class="form-item">
                    <md-field class="has-white">
                      <label>{{ $t('pageIndex.offerForm.name') }}</label>
                      <md-input
                        v-model="offerForm.name"
                        type="text"
                      />
                    </md-field>
                  </div>
                  <div class="form-item">
                    <md-field class="has-white">
                      <label>{{ $t('pageIndex.offerForm.phone') }}</label>
                      <md-input
                        v-model="offerForm.phone"
                        type="number"
                      />
                    </md-field>
                  </div>
                  <div class="form-item">
                    <md-field class="has-white">
                      <label>{{ $t('pageIndex.offerForm.company') }}</label>
                      <md-input
                        v-model="offerForm.firm_name"
                        type="email"
                      />
                    </md-field>

                  </div>
                  <div class="form-item">
                    <md-field class="has-white">
                      <label>{{ $t('pageIndex.offerForm.service') }}</label>
                      <md-select
                        id="selectSize"
                        v-model="offerForm.service"
                        name="selectSize"
                      >
                        <md-option v-for="(service, index) in offerServiceItems" :key="index" :value="service.value">
                          {{service.text}}
                        </md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="form-item">
                    <md-field class="has-white">
                      <label>{{ $t('pageIndex.offerForm.mail') }}</label>
                      <md-input
                        v-model="offerForm.email"
                        type="email"
                      />
                    </md-field>
                  </div>
                  <div class="form-item w-100" style="overflow: hidden">
                    <client-only>
                      <recaptcha @error="onError" @success="onSuccess" @expired="onExpired"/>
                    </client-only>
                  </div>
                  <div class="form-item w-100">
                    <div class="submit mt-3">
                      <action-loader v-if="loader" :center="true"></action-loader>
                      <button v-else class="offer-btn" type="button" @click="sendOffer">{{
                        $t('pageIndex.offerForm.submit') }}
                      </button>
                    </div>
                  </div>
                  <div class="form-item w-100" v-if="errors.length > 0">
                    <div class="alert alert-danger" v-for="(item, index) in errors" :key="index">
                      <div class="container">
                        <!--                        <button type="button" aria-hidden="true" class="close"-->
                        <!--                                @click="event => removeNotify(event,'alert-danger')">-->
                        <!--                          <md-icon>clear</md-icon>-->
                        <!--                        </button>-->
                        <div class="alert-icon">
                          <md-icon>info_outline</md-icon>
                        </div>
                        <b> {{item}} </b>
                      </div>
                    </div>
                  </div>
                  <div class="form-item w-100" v-if="success.length > 0">
                    <div class="alert alert-success" v-for="(item, index) in success" :key="index">
                      <div class="container">
                        <div class="alert-icon">
                          <md-icon>check_circle</md-icon>
                        </div>
                        <b> {{item}} </b>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
            >
              <div class="offer-video">
                <iframe style="border: 0"
                        src='https://player.vimeo.com/video/349107223?'></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="section index-job">
        <div class="container">
          <h2 class="title text-center">
            {{ $t('basic.job') }}
          </h2>
          <el-carousel
            indicator-position="none"
            class="no-border no-height ref-slider-job"
            trigger="click"
            :loop="true"
            :autoplay="false"
            :type="isMobile ? 'false' : 'card'"
            :height="isMobile ? 'auto': '275px !important'"
          >

            <el-carousel-item class="job-list" v-for="(item, index) in jobItems" :key="index"
                              @click="goTo('/page/job-detail/'+item.id)">
              <!--              <div class="reference-item" v-for="(subItem, i) in item.images" :key="i"><img :src="subItem.src" alt="">-->
              <!--              </div>-->
              <profile-card
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-gray" @click="goTo('/page/job-detail/'+item.id)">
                    {{item.category}}
                  </h6>
                  <h4 class="card-title" @click="goTo('/page/job-detail/'+item.id)">
                    {{item.title}}
                  </h4>
                  <p class="card-description" @click="goTo('/page/job-detail/'+item.id)">
                    {{maxStr(item.description)}}
                  </p>
                  <md-button @click="goTo('/page/job-detail/'+item.id)" class="md-primary small">
                    İncele
                  </md-button>
                </template>
              </profile-card>
            </el-carousel-item>
          </el-carousel>
          <div class="text-center" style="margin-top: 10px">
            <md-button @click="goTo('/page/job-postings')" class="md-info small">
              Tüm İlanlar
            </md-button>
          </div>
        </div>
      </div>


      <div class="section index-references">
        <div class="container">
          <h2 class="title text-center">
            {{ $t('basic.references') }}
          </h2>
          <el-carousel
            indicator-position="none"
            class="no-border no-height ref-slider"
            trigger="click"
            height="150px !important"
          >

            <el-carousel-item class="reference-list" v-for="(item, index) in references" :key="index">
              <div class="reference-item" v-for="(subItem, i) in item.images" :key="i"><img :src="subItem.src" alt="">
              </div>
            </el-carousel-item>

          </el-carousel>
        </div>
      </div>

      <div class="section index-card" style="display: none !important;">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h2 class="title text-center">
                Diğer Card Alanı
              </h2>
            </div>

          </div>
        </div>

        <div class="container">
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
        default: require("@/assets/images/video_poster.png")
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
        isMobile: false,
        loader: false,
        captcha: false,
        offerForm: {
          name: '',
          phone: '',
          firm_name: '',
          service: '',
          email: '',
        },
        success: '',
        errors: [],
        isReady: false,
        video: require("@/assets/video/siyahkare.mp4"),
        videoPoster: require("@/assets/video/video_poster.png"),
        firstname: null,
        email: null,
        password: null,
        leafShow: false,
        logo2: require("@/assets/images/siyahkare2.png"),
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
            img: require("@/assets/images/pages/index/img-1.png"),
            title: 'Blockchain Tabanlı Küresel Ödeme Araçları',
            text: 'Blockchain, Büyük Veri ve Yapay Zeka ile Finansal Hizmetlerin Yeniden Tasarlanması',
            url: 'https://bitkare.siyahkare.com'
          },
          {
            img: require("@/assets/images/pages/index/img-2.png"),
            title: 'TEKNOLOJİ DESTEĞİ',
            text: 'Teknoloji Projelerinize Danışmanlık Destek Hizmetleri',
            url: 'https://siyahkare.org'
          },
          {
            img: require("@/assets/images/pages/index/img-3.png"),
            title: 'DİJİTAL PAZARLAMA',
            text: 'Doğru insanlara doğru kanaldan ulaşın',
            url: 'http://qrkare.com'
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
        ],
        references: [
          {
            "images": [
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2018/05/englishhome.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2020/01/dardenia.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2018/05/uğur-okulları.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2018/05/pimapen.png"
              }
            ]
          },
          {
            "images": [
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2018/05/alfa.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2019/09/glovo.jpg"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2020/04/borel-2.jpg"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2020/01/cartonnetwork.png"
              }
            ]
          },
          {
            "images": [
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2019/12/bosch.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2018/05/panasonic-1.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2020/01/burgan_leasing.png"
              },
              {
                "src": "https://www.videosanat.com/wp-content/uploads/2019/02/ibrahim_ethem.jpg"
              }
            ]
          },
        ],
        jobItems: [],
        offerServiceItems: [
          {
            text: 'Tanıtım Filmi',
            value: '1'
          },
          {
            text: 'Reklam Filmi',
            value: '2'
          },
          {
            text: 'Kurumsal Video Çözümleri',
            value: '3'
          },
          {
            text: 'Animasyon',
            value: '4'
          },
          {
            text: 'Etkinlik',
            value: '5'
          },
          {
            text: 'Diğer',
            value: '6'
          }
        ]
      };
    },
    mounted() {
      this.leafActive();
      window.addEventListener("resize", this.leafActive);
      document.addEventListener("scroll", this.scrollListener);

      this.$axios.get('https://panel.siyahkare.com/api/jobAdvs').then(res => {
        // console.log(res.data.result)
        this.jobItems = res.data.result;
        // this.$nextTick(() => {
        //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
        // })
      })

      this.isMobile = this.checkMobile()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    },
    created() {

      this.maxStr('Some very long string');


      if (process.browser) {

        if (screen.width >= 1400) {
          this.video = require("@/assets/video/siyahkare_720.mp4");
        } else if (screen.width >= 900) {
        } else {
          this.video = require("@/assets/video/siyahkare_360.mp4");
        }

        window.onNuxtReady((app) => {
          this.isReady = true
        })
      }
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.leafActive);
      document.removeEventListener("scroll", this.scrollListener);
    },
    methods: {
      maxStr(str, numb = 90) {
        if (str.length > numb) str = str.substring(0, numb).trim() + '...';

        return str;
      },
      onSuccess(token) {
        // console.log('Succeeded:', token)
        // here you submit the form
        // this.$refs.form.submit()
        this.captcha = true
      },
      onExpired() {
        console.log('Expired')
        this.captcha = false
      },
      onError(error) {
        // console.log('Error happened:', error)
        this.captcha = false
      },
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
      },
      sendOffer() {
        const self = this;
        self.errors = [];
        self.success = [];

        if (self.checkForm(self.offerForm)) {

          if (self.captcha) {
            self.loader = true
            self.$axios.post('https://panel.siyahkare.com/api/offers', self.offerForm)
              .then(res => {
                // console.log('MAİl', res)
                if (res.data.Result !== undefined) {

                  self.$axios.post('https://panel.siyahkare.com/api/sendEmailOffers', self.offerForm)
                    .then(mail => {
                      // console.log('MAİL', mail)
                      self.loader = false
                      self.success.push(self.$t('basic.successOffer'))
                      self.resetForm()
                      this.$recaptcha.reset()
                    })

                }
              })
          } else {
            self.errors.push(self.$t('errors.captcha'))
          }

          // api/index.php/
        } else {
          self.errors.push(self.$t('errors.allRequired'))
        }

      },
      checkForm(object) {
        let status = true;
        for (const [key, value] of Object.entries(object)) {
          // console.log(`${key}: ${value}`);
          if (value.trim() === '') status = false
        }
        return status
      },
      resetForm() {
        for (const [key, value] of Object.entries(this.offerForm)) {
          // console.log(`${key}: ${value}`);
          this.offerForm[key] = ''
        }
      },
      goTo(link) {
        this.$router.push({
          path: link
        })
      },
      checkMobile() {
        let check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
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

    .footer {
      .footer-logo {
        margin: 0 auto;
      }

      .md-layout-item {
        text-align: center;
      }

      .footer-apps {
        a {
          margin: 0 auto;
        }
      }
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

      iframe, .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

  .page-header {
    &.index {
      align-items: flex-end;
      padding-bottom: 150px;
    }
  }

  .features {
    max-width: 730px;
    margin: 0 auto;
  }

  .reference-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    .ref-slider {
      .el-carousel__container {
        height: 150px !important;
      }
    }

    .index-references {
      .reference-item {
        img {
          max-width: 120px;
          margin: 0 auto;
        }
      }
    }
  }

  .index-references {
    padding-bottom: 0;
  }

  .offer-form {
    .form {
      display: inline-block;
      width: 100%;
      margin: -10px 0;

      .form-item {
        width: 50%;
        float: left;
        margin: 10px 0;
        padding: 0 10px;

        &.w-100 {
          width: 100%;
        }
      }
    }
  }

  .offer-btn {
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 4px;
    width: 100%;
    color: #ffffff;
    cursor: pointer;
    line-height: 30px;
    transition: 300ms;

    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }

  .color-white {
    color: #ffffff;
  }

  .offer-video {
    position: relative;
    width: 100%;
    /*height: 0;*/
    height: 100% !important;
    /*padding-bottom: 56.27198%;*/

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100% !important;
    }
  }

  .index-job {
    .md-card-header-image {
      display: none !important;
    }

    .job-list {
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*align-items: center;*/

      .md-card {
        width: 61%;
        margin: 10px auto 0 auto;

        .card-title {
          height: 50px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .index-job {
      .job-list {
        .md-card {
          width: 90%;
        }
      }
      .el-carousel__arrow--left {
        top: 85%;
        left: 30%;
        display: block !important;
      }
      .el-carousel__arrow--right {
        top: 85%;
        right: 30%;
        display: block !important;
      }
    }

  }


</style>
