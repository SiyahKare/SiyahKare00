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
              {{ $t('pageAbout.title') }}
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h2 class="title">
                {{ $t('pageAbout.sub_top_title') }}
              </h2>
              <h5 class="description">
                {{ $t('pageAbout.sub_top_text') }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <img :src="images.logo" alt="Logo" style="width: auto">
      </div>
      <div class="section section-about-services section-features-2">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title">
                {{ $t('pageAbout.sub_middle_title') }}
              </h2>
              <h5 class="description">
                {{ $t('pageAbout.sub_middle_text') }}
              </h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="gesture"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  {{ $t('pageAbout.list.item_1_title') }}
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    {{ $t('pageAbout.list.item_1_text') }}
                  </p>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="build"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  {{ $t('pageAbout.list.item_2_title') }}
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    {{ $t('pageAbout.list.item_2_text') }}
                  </p>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="mode_edit"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  {{ $t('pageAbout.list.item_3_title') }}
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    {{ $t('pageAbout.list.item_3_text') }}
                  </p>
                </div>
              </info-areas>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center pb-0">
        <img :src="images.logo2" alt="Logo" style="max-width: 256px">
      </div>
      <div class="section section-about-services section-features-2">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h5 class="description">
                {{ $t('pageAbout.longText.p1') }}
                <br>
                <br>
                {{ $t('pageAbout.longText.p2') }}
                <br>
                <br>
                {{ $t('pageAbout.longText.p3') }}
                <br>
                <br>
                {{ $t('pageAbout.longText.p4') }}
              </h5>
              <!--              <h5 class="description" v-if="$i18n.locale === 'tr'">-->
              <!--                {{ $t('pageAbout.sub_middle_text') }}-->
              <!--              </h5>-->
              <!--              <h5 class="description" v-if="$i18n.locale === 'en'">-->
              <!--                {{ $t('pageAbout.sub_middle_text') }}-->
              <!--              </h5>-->
              <!--              <h5 class="description" v-if="$i18n.locale === 'ru'">-->
              <!--                {{ $t('pageAbout.sub_middle_text') }}-->
              <!--              </h5>-->
            </div>
          </div>
        </div>
      </div>
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h2 class="title">
                {{ $t('pageAbout.sub_bottom_title') }}
              </h2>
              <h5 class="description" v-html="$t('pageAbout.sub_bottom_text')">
              </h5>
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
    name: 'about',
    mixins: [Mixins.HeaderImage],
    data() {
      return {
        image: require("@/assets/images/uploads/about-bg.jpg"),
        images: {
          logo: require("@/assets/images/SiyahKare.jpg"),
          logo2: require("@/assets/images/siyahkare2.png")
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
