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
              {{ $t('pageCorporateIdentity.title') }}
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
                  Kurumsal Kimlik Tasarımı
                </h2>
                <h3>Kimliksiz Bir Kurum Düşünebiliyor Musunuz?</h3>
                <p>
                  Kurumsal kimlik çalışmaları; firmanızın veya oluşumunuzun diğerlerinden ayırt edilmesini ve fark
                  edilmesini sağlayan, akılda kalıcı, sizi temsil eden, sizi anlatan, davranışınız ve duruşunuz hakkında
                  görsel anlamda olumlu bir hissiyat oluşturan görsel çalışmaların bütünüdür.
                </p>
                <h3>Kurumsal kimlik çalışması profesyonellere bırakılmalıdır.</h3>
                <p>Çünkü iyi tasarlanmış bir kurumsal kimlik, yıllar boyunca sizi her alanda temsil edecektir. Bu
                  yönüyle diğer kurumsal çalışmalardan ayrılır. Bir katalog veya broşür zaman içerisinde yenilenebiliyor
                  olsa da kurumsal kimliğiniz çok sık aralıklarla değişmez, kolay kolay yenilenmez.
                </p>
                <p>Özenle çalışılmış, her detayı düşünülmüş bir kurumsal kimlik çalışmasıyla görselliğe ihtiyaç duyulan
                  her alanda işinizi kolaylaştıracaktır. Ürün ambalajlarında, tabela, bina içinde ve dışında yer alan
                  görsellerde, kartvizitte, antetli kağıdınızda, zarf, dosya, sertifika ve faturalarınızda kurumsal
                  kimliğiniz yer alır. Broşürler, kataloglar, reklamlar, takvim, banknot, ajanda gibi promosyon
                  ürünlerinde firmanızın imzası hep aynı çizgide devam eder.
                </p>
                <h3>Kurumsal Kimlik İmajınızdır</h3>
                <p>
                  Kurumsal kimliğin kapsamı ve hazırlanma süreci yapılacak öngörüşmede belirlenir. Beklentileriniz
                  doğrultusunda bir sonuca ulaşmak için özenli bir çalışma yapılması gereklidir. En iyi kurumsal kimlik
                  örnekleri araştırması yapıldığında görülecektir ki; en başarılı kurumsal kimlikler akılda kalıcı,
                  profesyonellerin elinden çıkmış olan ve her detayı düşünülmüş çalışmalardır.
                </p>
                <p>
                  Kurumsal kimlik örneklerini çok yakında bu sayfamızda paylaşacağız. Sayfamızı yakın bir tarihte
                  yeniden ziyaret etmeyi unutmayın.
                </p>
              </section>
              <section>
                <h2 class="title">
                  Kreatif Hizmetler
                </h2>
                <p>
                  Hızla dijitalleşen ve globalleşen dünyamızda artık bir web sitesine veya temel dijital ajans
                  hizmetlerine sahip olmak bir ayrıcalık değil bir zorunluluktur. Sizi rakiplerinizin önüne geçirecek
                  olan şey ise temel dijital ajans hizmetlerine ek ve onları tamamlayıcı kreatif hizmetlerdir.
                  Firmanızın rakiplerinizden neden farklı olduğunu anlattığınız ve size özgü olan yanlarınızı
                  yansıttığınız kreatif hizmetler firmanızı büyütmeniz için fazlaca önem arz etmektedir. Logo tasarımı,
                  amblem, kurumsal kimlik, katalog, broşür, ambalaj, poster ve benzeri çalışmaları kreatif hizmetler
                  kapsamında değerlendirilmektedir.
                </p>
                <h3>Kreatif Hizmetler Nelerdir?</h3>
                <ul>
                  <li>Logo ve Amblem Tasarım</li>
                  <li>Kartvizit Tasarımları</li>
                  <li>Antet ve Zarf Tasarımları</li>
                  <li>Katalog ve Broşür Çalışmaları</li>
                  <li>Afiş ve Poster Çalışmaları</li>
                  <li>Billboard ve Reklam Tasarımları</li>
                  <li>Dergi ve Gazete Reklam Çalışmaları</li>
                  <li>Fuar Standı Çalışmaları</li>
                  <li>Kurumsal Kimlik</li>
                  <li>Not defteri ve eşantiyon tasarımları</li>
                </ul>
              </section>
              <section>
                <h2 class="title">
                  Katalog Tasarım ve Basım Hizmeti
                </h2>
                <p>
                  Ürün ve hizmet tanıtımları için bir firmanın olmazsa olmaz ihtiyaçları arasında yer alan kataoglar
                  günümüzde yerini web sitelerine ve mobil uygulamalara bırakmış olsalar da tamamen vazgeçilmiş
                  değildir. Katalog ve broşürlerin kullanım amaçları ve satış-pazarlama alanındaki önemleri başkadır.
                  Prestij amacının yanında her daim erişilebilir ulaşılabilir durumda bulunması katalogların tercih
                  edilme sebepleri arasındadır. Katalog çalışması özenle yapılması gereken, baskıdan sonra düzeltilmesi
                  mümkün olmadığı için dikkatlice tasarlanmasını gerekli kılan bir hizmettir. Kağıdın cinsi, kataloğun
                  ebatı, kapak tasarımı kataloğu inceleyen kişiler üzerinde bırakacağı güçlü bir izlenim için önemlidir.
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
        image: require("@/assets/images/uploads/corporate-identity-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
