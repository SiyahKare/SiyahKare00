<template>
  <div class="wrapper app-sub-page">
    <parallax
      class="page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">
              {{ $t('pageTeam.title') }}
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div
        class="section section-team-3"
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
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100" v-for="(item, i) in members" :key="i">
              <profile-card
                card-plain
                type="horizontal"
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="item.img"
              >
                <template slot="cardContent">
                  <h4 class="card-title">
                    {{item.name}}
                  </h4>
                  <h6 class="card-category text-muted">
                    {{item.title}}
                  </h6>
                  <!--                  <p class="card-description">-->
                  <!--                    {{item.desc}}-->
                  <!--                  </p>-->
                </template>
                <template slot="cardAction">

                  <md-button v-if="item.mail !== ''" :href="'mailto:'+item.mail" target="_blank" class="md-just-icon md-simple"><i
                    class="fa fa-envelope" aria-hidden="true"></i></md-button>

                  <md-button
                    v-for="(social, index) in item.social"
                    :key="index"
                    :href="social.link"
                    :class="'md-'+social.name"
                    class="md-just-icon md-simple"
                  >
                    <i :class="social.icon"></i>
                  </md-button>
                </template>
              </profile-card>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Mixins from "@/plugins/basicMixins";

  export default {
    name: 'detail',
    mixins: [Mixins.HeaderImage],
    data() {
      return {
        teamBg: require("@/assets/img/bg5.jpg"),
        image: require("@/assets/images/uploads/team-bg.jpg"),
        members: [
          {
            name: 'Onur Mutlu',
            title: 'CEO - Founder - Fullstack',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'onurmutlu@gmail.com',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'Ekim Ünal',
            title: 'CTO - CoFounder - Fullstack',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: '',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          },
          {
            name: 'asdasdasd',
            title: 'asdasdasd',
            img: require("@/assets/img/examples/card-profile4.jpg"),
            desc: '',
            mail: 'asdasd',
            social: [
              {
                name: 'linkedin',
                link: '',
                icon: 'fa fa-twitter'
              },
              {
                name: 'twitter',
                link: '',
                icon: 'fa fa-linkedin'
              },
              {
                name: 'instagram',
                link: '',
                icon: 'fa fa-instagram'
              }
            ]
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    methods: {
      sectionTeam(image) {
        return {
          backgroundImage: `url(${image})`
        };
      }
    }
  }
</script>
