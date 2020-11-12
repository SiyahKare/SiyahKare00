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
              {{ $t('pageMobileDevelopment.title') }}
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
                  Mobil Uygulama
                </h2>
                <p>
                  Mobil uygulamalar üzerinden hızlıca yapabileceğimiz bir işlemi masaüstü bilgisayarımızı açmadan
                  halledebilmenin yollarını arıyoruz. Hız çağında yaşıyoruz ve hayatımızı kolaylaştıran mobil
                  uygulamalarını severek kullanıyoruz. İşle ilgili gelişmeleri takip etmek, yeni modellerden haberdar
                  olmak, fırsatları yakalamak ve kampanaylardan zamanında haberdar olmak için cep telefonumuzda yüklü
                  olan model uygulamalara her fırsatta göz atmayı ihmal etmiyoruz. Biz de masaüstü bilgisayarımızı
                  açmadan mobil uygulamalar üzerinden hızlıca işlem yapabilmenin yollarını arıyoruz.
                </p>
                <h3>Düşük Maliyetlerle Sahip Olabileceğiniz Pratik Mobil Uygulamalar</h3>
                <p>
                  Herkes gibi siz de iş süreçlerinizi hızlandırmak ister misiniz? Müşterilerinize yeni modellerinizi
                  daha hızlı sunmak, anlık geri bildirimler almak, ekibinizi cep telefonunuzdan yönetmek istiyorsanız
                  işinize daha fazla hakim olmayı kolaylaştıran kurumsal yazılım çözümlerinden yararlanabilirsiniz.
                  Ayrıca pazarlama ve satış faaliyetlerinizi kolaylaştıracak sunum, sipariş ve bilgilendirme
                  uygulamalarını deneyebilirsiniz.
                </p>
                <h3>Satış ve Pazarlamaya Yönelik Mobil Uygulamalar</h3>
                <p>
                  Müşterilerinize yeni modellerinizi sunmakta gecikiyor musunuz? Satış ve sunum uygulamalarından
                  yararlanarak yeni modellerinizi müşterilerinize sunabilirsiniz. Tekstil, takı, mobilya, aksesuar gibi
                  modelin, sunumun, görselliğin daha ön planda olduğu sektörler için artık mobil uygulamalar bugün en
                  verimli pazarlama araçlarından sayılmaktadır.
                </p>
                <p>
                  Firmanız için mobil uygulama yaptırmak istiyorsanız, bizimle iletişim formumuz üzerinden temasa
                  geçebilir, sunduğumuz özel çözümleri öğrenebilirsiniz.
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
        image: require("@/assets/images/uploads/mobile-development-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
