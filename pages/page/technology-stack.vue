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
              How We Built the Most Successful Castle Ever
            </h1>
            <h4>
              The last 48 hours of my life were total madness. This is what I
              did.
            </h4>
            <br>
            <md-button
              class="md-success md-lg md-round"
            >
              <md-icon>format_align_left</md-icon>Read Article
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="title">
                The Castle Looks Different at Night...
              </h3>
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
        image: require("@/assets/images/uploads/technology-bg.jpg"),
        cardImg1:require("@/assets/images/uploads/technology-bg.jpg"),
        cardImg2:require("@/assets/images/uploads/technology-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
