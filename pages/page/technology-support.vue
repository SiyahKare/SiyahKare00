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
              {{ $t('pageTechnologySupport.title') }}
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
                  Teknoloji Danışmanlığı Hizmetleri
                </h2>
                <p>
                  Günümüz iş hayatında bilişim teknolojilerinden her alanda faydalanarak güçlü ve donanımlı olmak,
                  kurumlara büyük avantaj ve rakiplere oranla farklılıklar yaratmaktadır. Bilgi teknolojilerinin etkili
                  ve aktif şekilde kullanımı kaynakların en verimli şekilde kullanılarak yönetilmesini, zaman ve
                  personelden tasarrufu, kalite ve verimlilikte artış sağlar.
                </p>
                <p>
                  SiyahKare , profesyonel danışmanlık ekibi ile kurumlara çalıştıkları alanda daha fazla değer
                  yaratabilmeleri için stratejik danışmanlık hizmetleri sunmaktadır. Analiz, Optimizasyon ve
                  Entegrasyonun her aşamasında ideal çözümler üretilerek, kurumlara temel faaliyet alanlarına daha fazla
                  yoğunlaşabilme ve operasyonel maliyetleri minimuma indirme imkanı sağlanmaktadır.
                </p>
                <p>
                  Teknoloji Danışmanlığı Hizmetleri kapsamında mevcut altyapının incelenmesi, sistemlerin
                  kullanılabilirlik durumlarının raporlanması, en yeni teknolojilerin ihtiyaçları karşılayacak şekilde
                  yapılandırılması ve hayata geçirilmesi gibi işlemler gerçekleştirilmektedir. Danışmanlarımız strateji
                  geliştirme, analiz ve modernizasyon, optimizasyon, fizibilite kontrolü, entegrasyon ve kurulum gibi
                  teknolojinin gerektirdiği tüm alanlarda hizmet vermektedir.
                </p>
                <p>
                  Bunların yanı sıra uzun ve orta vadeli BT startejilerinin geliştirilmesi, planlama, bütçe yönetimi
                  konularında derin sektör tecrübesi ve bilgi birikimi ile kurumlara etkin öneriler sunan SiyahKare, iş
                  yapış biçimlerinde iyileşme ve rekabet avantajı sağlamayı hedeflemektedir.
                </p>
                <p>
                  SiyahKare olarak, teknoloji danışmanlığı hizmetleri kapsamında ve diğer tüm bilgi teknolojileri
                  alanlarında hizmet kalitesine verdiğimiz önem ile gerek yapılacak çalışmanın ön analiz ve kurgulama
                  aşamalarında, gerekse hizmetin eksiksiz ve doğru biçimde sağlanması noktasında tüm risk ve öncelikleri
                  kapsamlı şekilde belirleyerek, yapılan çalışmalardan maksimum faydanın elde edilebilmesine odaklanarak
                  başarı sağlıyoruz.
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
