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
              {{ $t('pageCourseAutomation.title') }}
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
                  Yeni Nesil Bulut Tabanlı Kurs ve 0kul Otomasyonu
                </h2>
                <p>
                  Dijital Mutlu , Eğitim sektöründeki kurumların Öğrenci Kayıt, Görüşme, Muhasebe, Organizasyon,
                  Kampanya, Sınav Işlemleri Ve Raporlama gibi birçok işini tek bir sistem üzerinden yürüterek tamamen
                  kurumsallaşmış bir yapı oluşturmak ve şirketçe doğru verilere ulaşıp karlılığı artırmak amacıyla yeni
                  sesil çözümler sunan, hiçbir teknik bilgi gerektirmeyen bir yönetim yazılımıdır.
                </p>
                <h3>Bulut Sistem Ile Her Yerden</h3>
                <p>
                  Web tabanlı teknoloji sayesinde Dijital Mutlu’ya internetin olduğu her yerden, her cihazdan, herhangi
                  bir kurulum yapılmaksızın, dilediğiniz internet tarayıcısıyla erişebilirsiniz. Üstelik bulut
                  teknolojisi sayesinde verileriniz her gün otomatik olarak yedeklenir. Böylelikle herhangi bir veri
                  kaybı yaşamazsınız. Üstelik şimdi mobil uygulamalar sayesinde öğrencileriniz de Dijital Mutlu ile tüm
                  eğitim süreçlerini kesintisiz takip etsin.
                </p>
                <h3>Öğrenci ve Veli Uygulamaları</h3>
                <p>
                  Öğrencileriniz öğrenci ekranları ile tüm ödemelerini ve borçlarını takip edebildiği gibi, kurumunuzda
                  yaptığınız tüm KTT, LGS, TYT, AYT ve YDT sınavlarını ve uyguladığınız tüm diğer sınavların sonuçlarını
                  saniyeler içerisinde ekranlarında görürler. Ayrıca ders programı, devamsızlık, sosyal etkinlikler ve
                  aklınıza gelebilecek diğer tüm içerikleri mobil uygulamalarla takip ederler.
                </p>
                <h3>Kurslara Özel Otomasyon</h3>
                <p>
                  Şubelerinizin ve çalışanlarınızın zamanını alan birçok süreci bırakın Dijital Mutlu sizin yerinize
                  takip etsin, siz de zamanınızı kurumunuzu geliştirmek ve satışlarınızı arttırmak için kullanın.
                  Şubeleriniz ve çalışanlarınız sizlerin belirlediği ekranlardan işlem yaparken siz de markanızı temsil
                  eden tüm şubelerdeki genel akışı, öğrenci durumunu ve mali raporları marka ekranıyla tek bir yerden
                  izleyin.
                </p>
                <h3>Dijital Mutlu Hep Yanında</h3>
                <p>
                  Masaüstü ekranlarınız dışında IOS ve Android uygulamalarla Dijital Mutlu şimdi öğrenci ve velilerinize
                  daha yakın.
                </p>
                <h3>Ödeme Takip Ekranı</h3>
                <p>
                  Öğrencileriniz anlık ödemelerini, kalan ve geciken ödemelerini anlık otomatik smsler dışında
                  dilerseniz mobil ekranlarında da görürler. Böylelikle tahsilat süreçlerinizin daha düzenli hale
                  gelmesini sağlayabilirsiniz.
                </p>
                <h3>Devamsızlık Takip</h3>
                <p>
                  Devam – devamsızlık durumlarını hangi derslere girip girmediklerini mobil uygulama ekranında
                  öğrencileriniz ve velileriniz takip etsinler. Ayrıca toplam eğitim süresi ve toplam girilmeyen dersler
                  de raporlanır.
                </p>
                <h3>Sosyal Etkinlikler</h3>
                <p>
                  Gruplara özel organize ettiğiniz ücretli veya ücretsiz sosyal etkinlikleri öğrencileriniz Dijital
                  Mutlu uygulaması ile görebilir, diledikleri etkinliklere katılım onayını tek bir tıklama yoluyla
                  verebilirler.
                </p>
                <h3>Sınav Ekranı</h3>
                <p>
                  Sınav takviminizi ve sınavlarınız sonuçlarını öğrencileriniz anlık olarak takip etsinler. Optik
                  Sınavlarınızı isterseniz de tüm sınav sonuçlarınızı saniyeler içerisinde öğrencilerinizle paylaşın.
                </p>
                <h3>Online Sınavlar</h3>
                <p>
                  Yazı, görsel veya ses dosyalarınızla Online Sınavlar oluşturun, hatta isterseniz sınav saatini ve
                  süresini belirleyin. Öğrencileriniz oluşturduğunuz sınavları uzaktan çözsünler sonuçlara dakikalar
                  içerisinde ulaşsınlar.
                </p>
                <h3>Online Eğitim</h3>
                <p>
                  Ders videolarınız, dökümanlarınızı ve ödevlerinizi öğrencilerinizle anında paylaşın ve onları Uzaktan
                  eğitimlerle de destekleyin.
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
        image: require("@/assets/images/uploads/course-automation-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
