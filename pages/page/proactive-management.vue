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
              {{ $t('pageProactiveManagement.title') }}
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
                  Proje Yönetim Sistemi
                </h2>
                <h3>
                  Proje Yönetim Sistemi Nedir?
                </h3>
                <p>Hedef ve amaçlara ulaşılması, bu hedeflerin doğru tanımlanması, kaynakların belirlenmesi, proje ekibinin organize edilmesi ve yönetilmesiyle mümkündür. Projenin projelendirildiği şekilde ilerleyebilmesi, diğer bir ifadeyle amaçlandığı biçimde sonuca ulaşması organizasyon yetkinliği gerektirir. Firmaların organizasyon güçlerini artırmak, proje süreçlerini hızlıca yönetmelerini sağlamak amacıyla özel proje yönetim sistemi yazılımları geliştiriyoruz.
                </p>
                <h3>Her Projenin Başlangıç ve Hedeflenen Bitiş Tarihi Vardır</h3>
                <p>
                  Planlama yapılmasının en önemli amacı planlanan işlerin zamanında ve olması gerektiği gibi tamamlanmasını sağlamaktır. Zamanı verimli kullanmak, farklı teknik yetkinliğe sahip ekip çalışanları arasında görevlendirme yaparak üretim ve hizmet süreçlerini daha hızlı sonuca ulaştırmak gibi birçok fayda proje yönetimindeki başarıyla beraber sağlanır.
                </p>
                <h3>Sınırlandırılamıyorsa Proje Değildir</h3>
                <p>
                  Her projenin belirli bir amacı, bütçesi, kaynakları ve hedeflerine bağlı olarak bir zaman planı vardır. Bir projenin kapsamını belirlenmesi, belirlenen kapsamda ilerlenmesi, proje adımlarının belirlenmesi ve sürecin izlenmesi iş süreçleri açısından olmazsa olmaz bir ihtiyaçtır.
                </p>
                <h3>
                  Küçük İşletmeler İçin Proje Yönetimi
                </h3>
                <p>
                  İnşaat sektörü proje yönetimi denildiğinde ilk akla gelen sektörlerin başında geliyor olsa da bugün hemen hemen her sektörde proje yönetim sistemlerinin kullanımı yaygındır. Küçük işletmelerde veya organizasyonlarda işlerin daha kolay yönetilmesi için son yıllarda daha esnek yapıda olan online proje yönetim yazılımlarından yararlanılmaya başlanmıştır. Cep telefonlarından erişiminin kolay olması, çalışanların iş akışlarını rahat bir şekilde takip edebilmeleri, tamamlanan görevlerden anlık bildirimler yoluyla yetkililerin haberdar olması gibi birçok özelliğiyle bugün proje yönetim sistemleri iş hayatının önemli bir parçası haline gelmiştir. Çünkü işi ve bütçeyi iyi yönetmek, zamanı iyi yönetmekle mümkündür.
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
    data(){
      return {
        image: require("@/assets/images/uploads/proactive-management-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
