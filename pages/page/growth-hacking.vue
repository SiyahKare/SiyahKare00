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
              {{ $t('pageGrowthHacking.title') }}
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
                <h2 class="title">
                  Hedef Kitle ve Dönüşüm Analizi
                </h2>
                <p>
                  Web sitenizin ziyaretçi analizi yapılması önemlidir. Kimlerin web sitenize hangi yolla ulaştığını,
                  sitenizde nasıl bir gezinim deneyimi yaşadığı, hangi sayfalarınızın en çok ziyaret edildiği, hangi
                  sayfalarınızınsa hiç ziyaret edilmediği önemlidir. Eğer online reklamcılıktan faydalanıyorsanız,
                  reklamlarınızın doğru kişilerin karşısına çıkıyor olmaları bütçenizin doğru harcanması için hedef
                  kitle analizi zorunlu bir hizmettir.
                </p>
              </section>
              <section>
                <h2 class="title">
                  Doğru Kişilere Doğru İçeriği Sunmak
                </h2>
                <p>
                  Hemen çıkma oranını düşürmek için yöntemler mi arıyorsunuz? Web sitenizde ziyaretçilerinizin daha uzun
                  süre kalmasını sağlamak için uygulanacak yöntemlerden yararlanabilirsiniz. Web sitenizde uzun süre
                  kalındığında, gelen kişiler birden çok sayfa gezdiğinde, web siteniz tekrar tekrar ziyaret edildiğinde
                  sitenizin iyi bir kullanıcı deneyimi sunan bir site olmasıyla birlikte arama motoru performansınızda
                  artışı izlemek sürpriz olmayacaktır.
                </p>
              </section>
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
        image: require("@/assets/images/uploads/growth-hacking-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
