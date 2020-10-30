<template>
  <div class="wrapper">
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
              {{ $t('pageCloudServer.title') }}
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject1">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    SOFTWARE
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      PHP Programming Language
                    </h3>
                  </a>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-danger md-round"
                  >
                    <md-icon>format_align_left</md-icon> Read Article
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject2">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    SOFTWARE
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      C# Microsoft
                    </h3>
                  </a>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-primary md-round"
                  >
                    <md-icon>format_align_left</md-icon> Read Article
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-100">
              <full-bg-card :card-image="cardProject.cardProject3">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    FRONT-END
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      VueJS
                    </h3>
                  </a>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-warning md-round"
                  >
                    <md-icon>format_align_left</md-icon> Read Case Study
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-simple md-just-icon md-white"
                  >
                    <i class="fab fa-get-pocket" />
                    <md-tooltip md-direction="top">
                      Save to Pocket
                    </md-tooltip>
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

  import Mixins from "@/plugins/basicMixins";

  export default {
    name: 'detail',
    mixins: [Mixins.HeaderImage],
    data(){
      return {
        image: require("@/assets/images/uploads/cloud-computing-bg.png"),
        cardProject: {
          cardProject1: require("@/assets/images/card/card-php.jpg"),
          cardProject2: require("@/assets/images/card/card-csharp.jpg"),
          cardProject3: require("@/assets/images/card/card-vue.jpg"),
        },
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
