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
              İş İlanları
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <section>
                <h2 class="title text-center">
                  İşleri keşfedin
                </h2>
              </section>
            </div>
            <div class="section">
              <div class="container">
                <div class="md-layout">
                  <div class="md-layout-item md-size-12 md-small-size-100">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-33 md-small-size-100" v-for="(item, index) in jobs"
                           :key="index">
                        <blog-card
                          :shadow-normal="false"
                          :no-colored-shadow="false"
                          :card-image="item.image !== null ? item.image : defaultImg"
                        >
                          <template slot="cardContent">
                            <h6 class="card-category">
                              {{item.category}}
                            </h6>
                            <h4 class="card-title">
                              <NuxtLink :to="'/page/job-detail/'+item.id">{{item.title}}</NuxtLink>
                            </h4>
                            <p class="card-description">
                              {{item.description}}
                              <NuxtLink :to="'/page/job-detail/'+item.id">İncele</NuxtLink>
                            </p>
                          </template>
                        </blog-card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        image: require("@/assets/images/uploads/job-postings-bg.jpg"),
        defaultImg: require("@/assets/images/uploads/job-default.jpg"),
        jobs: []
      }
    },
    mounted() {
      this.$axios.get('https://panel.siyahkare.com/api/jobAdvs').then(res => {
        // console.log(res.data.result)
        this.jobs = res.data.result;
        this.$nextTick(() => {
          setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
      })
    }
  }
</script>
