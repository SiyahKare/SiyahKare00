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
              {{ $t('pageIndustrialBlockchain.title') }}
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
                  Blockchain Hizmetleri
                </h2>
                <p>Uzman blockchain danışmanlık ve geliştirme hizmetleri.</p>
                <p>ITO’ya anahtar teslimi bir yaklaşım sunuyoruz ve size white paper, açıklayıcı video ve web
                  sitesinden, küresel entegre bir dijital pazarlama kampanyası, gerçek dünya kullanışlılığı için
                  kurumsal ortaklıklar, kitlesel satış sözleşmesi ve güvenlik denetimi ve önde gelen borsalarda
                  listelenme gibi hizmetler sunuyoruz.</p>
                <h3>Token Pazarlama</h3>
                <ul>
                  <li>Bounty Kampanyası</li>
                  <li>Dijital Pazarlama</li>
                  <li>Halkla ilişkiler</li>
                  <li>Topluluk yönetimi</li>
                </ul>
                <h3>Token Geliştirme</h3>
                <ul>
                  <li>Token Sözleşmesi</li>
                  <li>Kitlesel Satış Sözleşmesi</li>
                  <li>Güvenlik Denetimi</li>
                  <li>Sözleşme Dağıtımı</li>
                </ul>
                <h3>Token Dağıtımları</h3>
                <ul>
                  <li>Borsada Listelenme</li>
                  <li>Kurumsal Ortaklıklar</li>
                  <li>Bölge temsilciliği</li>
                  <li>Yasal / Muhasebe</li>
                </ul>
                <h3>Blockchain Eğitimi</h3>
                <p>
                  Dahili ve harici eğitim ve öğretim seminerleri, atölye çalışmaları, firma içi eğitimler, kurumsal
                  eğitimler, görüşmeler ve blok zincir teknolojisi ve ilgili uygulama alanları hakkında karmaşık blok
                  zinciri ekosistemi ve tüm yönleriyle ilgili derinlemesine bilgi sağlayacak öğretici materyaller
                  sunuyoruz.
                </p>
                <h3>Blockchain Araştırma</h3>
                <p>
                  Kendi uzmanlarımız tarafından gerçekleştirilen kripto para ve dağıtık defter teknolojisi alanlarındaki
                  en ileri araştırmalarımızın sonuçlarına erişim imkanı bulabilirsiniz. Sonuçlarımızı ve bulgularımızı
                  konferanslarda ve yayınlar halinde paylaşırız.
                </p>
                <h3>Blockchain Geliştirme</h3>
                <p>
                  Size ölçeklenebilir ve dağıtık uygulamalar ile özel yapılı protokollerin programlanmasını sağlıyoruz.
                  Ayrıca, blok zincir teknolojisinin entegrasyonu ve uyarlanması sürecinin tamamında mevcut şirket
                  ağınıza destek veriyoruz.
                </p>
                <ul>
                  <li>Blockchain ile entegrasyon</li>
                  <li>Akıllı Sözleşme Geliştirme</li>
                  <li>Cüzdan / Explorer</li>
                  <li>Analizler</li>
                </ul>
                <h3>Blockchain Kapital</h3>
                <ul>
                  <li>SAFT Yatırımı</li>
                  <li>Melek Yatırımı</li>
                  <li>ITO Likiditasyonu</li>
                  <li>Sermaye yönetimi</li>
                </ul>
                <h3>Bizim Vizyonumuz</h3>
                <p>
                  Blockchain teknolojisinin potansiyelini ortaya çıkarmak ve daha da ileriye götürmek en büyük
                  vizyonumuz.
                </p>
                <p>
                  Blockchain Danışmanlık olarak, blok zincir ve kripto ile ilgili ürün ve web servislerini geliştirir,
                  korur ve değerlendiririz ve dünya çapındaki ortaklarımız için ilgili teknolojik ve operasyonel
                  konularda uzun vadeli yardım ve tavsiyeler sağlarız.
                </p>
                <p>
                  Ekiplerimiz birden fazla disiplinde çalıştığı için, herhangi bir blok zincir teknolojisinin tüm
                  özelliklerini tek bir çatı altında bulacaksınız. Ayrıca, blok zincir üstünde faaliyet gösteren
                  finansal framework’ler ve web hizmetleri geliştiriyoruz.
                </p>
                <h3>Blockchain Potansiyeli</h3>
                <p>
                  Blockchain teknolojisi, şirketleri yönetme şeklimizi değiştirme potansiyeline sahiptir! En göze çarpan
                  faydaları arasında veri güvenliği ve kimlik doğrulama, şeffaflık ve arabuluculuk vardır. Şu anda,
                  teknoloji henüz emekleme aşamasındadır, ancak çoktan ortaya bazı etkileyici uygulamalar çıkmış
                  durumdadır. Farklı endüstri dallarındaki blok zincir uygulamalarını birlikte keşfediyoruz.
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
        image: require("@/assets/images/uploads/industrial-blockchain-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
