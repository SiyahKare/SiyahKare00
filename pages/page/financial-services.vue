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
              {{ $t('pageFinancialServices.title') }}
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
                <h3><b>Varlık ve Servet Yönetimi</b></h3>
                <p>
                  Varlık yönetimi sektörüne küresel olarak entegre edilmiş güvence,
                  vergi danışmanlığı, risk yönetimi, araştırma ve analiz hizmetleri sunmaktayız.
                </p>
                <p>
                  Tüm dünyada olduğu gibi Türkiye’de de hızla büyüyen varlık ve servet yönetimi sektöründe regülasyon,
                  uyum, risk yönetimi, raporlama ve vergileme giderek daha sıkı kurallara bağlanıyor ve daha karmaşık
                  hale geliyor. Yatırımcılar daha kolay erişilebilir çözümler, daha güvenilir hizmet sağlayıcılar ve
                  daha şeffaf yatırım ürünleri tercih ediyorlar. Yatırımcıların alternatif varlık sınıflarına ve yatırım
                  araçlarına, portföylerinin profesyonel olarak yönetilmesine, riskin dağıtılması esasına dayanan
                  kolektif yatırım araçlarına ihtiyaç ve ilgisi artıyor.
                </p>
                <p>
                  Öte yandan güçlü bir rekabetin yaşandığı bir ortamda kazanan yöneticilerin çözüm, ürün ve hizmetlerini
                  çeşitlendirerek, müşteri odaklı hizmet sunabilen, aynı zamanda yatırımcıların risklerini ve
                  maliyetlerini iyi yönetip, mevzuata uygun hareket edebilenler olacağı tahmin ediliyor.
                </p>
                <p>
                  SiyahKare olarak küresel uzmanlık ağımız ile vergi planlamasından,
                  çeşitli yatırım yapılarının ve fonlarının kurulmasına, süreçlerin ve raporlama altyapısının
                  oluşturulmasından, FATCA, CRS uyumunun sağlanmasına, yönetişim ve BT altyapısının seçilmesi ve
                  iyileştirilmesine destek olunmasından, denetim ve strateji oluşumuna kadar tüm boyutlarda
                  müşterilerimizin geleceğine destek veriyoruz.
                </p>
                <p>Hizmet verdiğimiz kişiler:</p>
                <ul>
                  <li>Bireysel yatırımcılar</li>
                  <li>Portföy yönetim şirketleri</li>
                  <li>Yatırım danışmanları</li>
                  <li>Özel bankacılık ve servet yönetimi şirketleri</li>
                  <li>Ülke fonları</li>
                  <li>Girişim sermayesi fonları ve ortaklıkları</li>
                  <li>Gayrimenkul yatırım fonları ve ortaklıkları</li>
                  <li>Menkul kıymet yatırım fonları ve ortaklıkları</li>
                  <li>Aile ofisleri</li>
                  <li>Emeklilik fonları</li>
                </ul>
                <h3><b>Gayrimenkul Danışmanlığı</b></h3>
                <p>
                  Amacımız, mevcut gayrimenkullerin en iyi şekilde kullanılmasını sağlamak, yatırım yapma ya da yatırımı
                  azaltma sürecini etkili bir şekilde kolaylaştırmaktır.
                  Bununla birlikte portföy yönetimini en iyi duruma getirme,iş süreçlerini geliştirme ve gayrimenkul
                  yaşam döngüsünün tüm aşamalarında teknik ve ekonomik açıdan incelemeler yürütme konusunda destek
                  sunuyoruz.
                  Her proje için müşterilerimize mümkün olan en iyi faydayı sunan profesyonel hizmeti sağlamak üzere
                  gayrimenkul uzmanlarından oluşan çekirdek bir ekip seçiyoruz.
                </p>
                <h3><b>Finansal Strateji</b></h3>
                <p>
                  Denetim, muhasebe danışmanlığı, vergi, uyum süreçleri ve risk yönetimi, dış kaynak kullanımı, sermaye
                  piyasalarına erişim, bilgi riski ve güvenliği,
                  veri kalitesi, birleşme & satın alım işlemleri ve diğer hizmetleri kapsayan farklı bir yaklaşım
                  sunuyoruz.
                  Finansal kurumların bugün karşılaştıkları kritik konular işlerinin tüm boyutlarını etkiliyor. Sektörün
                  gündeminde düzenleyici reformlar, finansal raporlama gereksinimleri, uygun maliyetli teknolojilerin
                  uygulanması, yetenek edinimi ve paydaşların artan talepleri var.
                  Bu zorluklar, finansal kurumları stratejilerini yeniden değerlendirmeye yönlendiriyor.
                  Uzmanlarımız, bankacılık ve sermaye piyasalarını, sigortacılık sektörünü ve yatırım yönetimini
                  etkileyen günümüzün en büyük zorluklarında size yardımcı olurlar.
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
        image: require("@/assets/images/uploads/financial-services-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
