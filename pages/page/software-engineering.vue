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
              {{ $t('pageSoftwareEngineering.title') }}
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
                  Yazılım Geliştirme
                </h2>
                <p>
                  Web tabanlı ve mobil uygulama üzerinde çalışan yazılımlar üretiyoruz. Ürettiğimiz yazılım uygulamaları
                  PHP-MySQL sisteminde çalışan modüler yapıda hazırlanmış özelliktedir. İçerik yönetim sistemleri,
                  eticaret, B2B ve B2C amaçlı uygulamalar, entegrasyonlar, sunum-sipariş sistemleri, müşteri ilişkileri
                  yönetim sistemi, proje yönetim sistemi, online rezervasyon sistemleri, saha takip programı, yemek
                  sipariş sistemi, anket siteleri, fotoğraf ve video galierileri, üretim takip ve raporlama sistemleri
                  ve benzeri yazılımlar deneyim sahibi olduğumuz yazılım türleridir.
                </p>
                <br>
                <p>
                  Web tabanlı yazılımların yanında son yıllarda mobil uygulamalar konusunda da sunum, sipariş, tanıtım
                  ve B2B e-ticaret alanlarında çalışmalarına ağırlık vermeye başladık. Bunun başlıca sebebi mobil
                  cihazlar üzerinden internete erişenlerin sayısında gün geçtikçe artması. Artık bilgisayar başına
                  geçmeden mobil cihaz üzerinden birçok işlem gerçekleştirilmektedir. Geniş kullanım alanına sahip
                  olması bakımından mobil uygulamaların önemi ilerleyen yıllarda daha fazla artacağa benziyor. Siz de
                  firmanız için özel bir mobil uygulama tercih ediyorsanız bu konuda taleplerinizi değerlendirip çözüm
                  tekliflerimizi sunmak isteriz. Bizimle iletişime geçmek için tıklayın.

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
        image: require("@/assets/images/uploads/technology-support-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
