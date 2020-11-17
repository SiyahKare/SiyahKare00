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
              {{ $t('pageTechnologyStack.title') }}
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100" v-for="(item,i) in cards" :key="i">
              <full-bg-card :card-image="item.img">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    {{item.category}}
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      {{item.title}}
                    </h3>
                  </a>
                  <!--                  <p class="card-description">-->
                  <!--                    Don't be scared of the truth because we need to restart the-->
                  <!--                    human foundation in truth And I love you like Kanye loves-->
                  <!--                    Kanye I love Rick Owens’ bed design but the back is...-->
                  <!--                  </p>-->
                  <!--                  <md-button-->
                  <!--                    href="javascript:void(0)"-->
                  <!--                    class="md-danger md-round"-->
                  <!--                  >-->
                  <!--                    <md-icon>format_align_left</md-icon> Read Article-->
                  <!--                  </md-button>-->
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

  import Mixins from "@/plugins/basicMixins";

  export default {
    name: 'detail',
    mixins: [Mixins.HeaderImage],
    data() {
      return {
        image: require("@/assets/images/uploads/technology-bg.jpg"),
        cards: [
          {
            category: 'SOFTWARE',
            title: 'PHP Programming Language',
            img: require("@/assets/images/card/card-php.jpg")
          },
          {
            category: 'SOFTWARE',
            title: 'Laravel',
            img: require("@/assets/images/card/card-laravel.webp")
          },
          {
            category: 'SOFTWARE',
            title: 'Mysql',
            img: require("@/assets/images/card/card-mysql.jpg")
          },
          {
            category: 'FRONT-END',
            title: 'VueJS',
            img: require("@/assets/images/card/card-vue.jpg")
          }
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
