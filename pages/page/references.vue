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
              {{ $t('pageReferences.title') }}
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
                    {{ $t('basic.webpage') }}
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      Melek Arıcı
                    </h3>
                  </a>
                  <p class="card-description">
                    <br><br><br>
                  </p>
                  <md-button
                    href="https://melekarici.com"
                    class="md-primary md-round"
                    target="_blank"
                  >
                    <md-icon>format_align_left</md-icon>
                    {{ $t('basic.goToWebSite') }}
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject2">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    {{ $t('basic.webpage') }}
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      Mutlu Kurs
                    </h3>
                  </a>
                  <p class="card-description">
                    <br><br><br>
                  </p>
                  <md-button
                    href="https://mutluozelkurs.com"
                    class="md-primary md-round"
                    target="_blank"
                  >
                    <md-icon>format_align_left</md-icon>
                    {{ $t('basic.goToWebSite') }}
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject3">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    {{ $t('basic.webpage') }}
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      Hello Barefoot
                    </h3>
                  </a>
                  <p class="card-description">
                    <br><br><br>
                  </p>
                  <md-button
                    href="https://hellobarefoot.com/"
                    class="md-primary md-round"
                    target="_blank"
                  >
                    <md-icon>format_align_left</md-icon>
                    {{ $t('basic.goToWebSite') }}
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject4">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    Blockchain Wallet
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      CMDX
                    </h3>
                  </a>
                  <p class="card-description">
                    <br><br><br>
                  </p>
                  <md-button
                    href="https://cmdx.io"
                    class="md-primary md-round"
                    target="_blank"
                  >
                    <md-icon>format_align_left</md-icon>
                    {{ $t('basic.goToWebSite') }}
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
    data() {
      return {
        image: require("@/assets/images/uploads/reference-bg.jpg"),
        cardProject: {
          cardProject1: require("@/assets/images/uploads/melek-arici.png"),
          cardProject2: require("@/assets/images/uploads/mutlu-kurs.png"),
          cardProject3: require("@/assets/images/uploads/barefoot.png"),
          cardProject4: require("@/assets/images/uploads/cmdx.png"),
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
