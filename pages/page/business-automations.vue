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
              {{ $t('pageBusinessAutomations.title') }}
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
                  Online Teklif Yönetim Yazılımı
                </h2>
                <h3>Her Teklif Bir Fırsattır</h3>
                <p>
                  Online teklif yönetim yazılımı, sisteme tanımlanan müşterilerinize online ortamda teklif
                  gönderilmesine ve tekliflerin durumunun takip edilmesine olanak tanıyan web tabanlı online teklif
                  takip ve yönetim yazılımıdır. Sistemin standart özelliğinde; kendi hazırladığınız PDF, Word, Excel
                  belgelerini sisteme yüklenerek müşterilerinize teklif yazılımı üzerinden e-posta ile
                  gönderebilirsiniz. Gönderilen tekliflerin durumlarını görüntüleyebilir, sonrasında tekliflerin
                  durumlarına göre filtreleyebilirsiniz. Kayıtlı tekliflerinizi gönderim tarihlerine göre
                  listeleyebilirsiniz. Sistem üzerinden gönderilen teklifler alıcıya ulaştıktan sonra sisteme alıcıya
                  ulaştığına dair bilgi ulaşır. Alıcıların teklifi sistem üzerinden indirmeleri istenir. Teklifin
                  indirilip indirilmediği bilgisi panel üzerinden görüntülenebilmektedir.
                </p>
                <p>
                  Ürün Yönetimi ve Teklif Oluşturma Sistemi : Ürünlerinizi sisteme yükleyebilir, ürün kod numarasıyla
                  veya ürün ismiyle kalem kalem seçimler yaparak farklı fiyatlandırma yapabilirsiniz. Ayrıca iskonto
                  oranları veya teklif detaylarını sistem üzerinden yazarak önceden belirlenmiş bir formata uygun
                  biçimde sistem üzerinden PDF çıktısı oluşturabilirsiniz.
                </p>
                <p>
                  Excel Veri Yönetimi: Cari kayıtları, ürünleri ve fiyat listelerini, oluşturulan / gönderilen
                  tekliflerin Excel çıktısını alabilir ve düzenleyerek sisteme geri yükleyebilirsiniz.
                </p>
                <p>
                  Web Sitesi Entegrasyon: Web sitenizin iletişim formundan gelen verilerin fırsat olara kaydedilmesini
                  sağlayabilirsiniz.
                </p>
                <p>
                  Bulut Depolama Entegrasyonu: Teklif dosyalarınızı size özel ayrı bir bulut sunucuda saklamak
                  istiyorsanız online teklif yönetim sistemini bulut depolama servis sağlayıcılarıyla entegre çalışır
                  hale getirebilmekteyiz. Bulut sunucunuzun entegrasyonu destekliyor olması gerekmektedir. (ör: dropbox)
                </p>
              </section>
              <section>
                <h2 class="title">
                  CRM - Müşteri İlişkileri Yönetimi Yazılımı
                </h2>
                <p>
                  CRM, yani bilinen haliyle “Müşteri İlişkileri Yönetimi” firmanızın mevcut ve potansiyel müşterileriyle
                  olan etkileşimlerini yönettiğiniz dijital çözümlerdir.
                </p>
                <p>
                  Hangi verileri yönetmek istediğinize bağlı olarak hangi CRM yazılımından yararlanacağınıza karar
                  verebilirsiniz. Bazı firmalar satış-pazarlama çalışmalarının bir parçası olarak kurumsal
                  yazılımlarının CRM modüllerini yeterli bulabiliyorken bazılarıysa daha derin veri analizleri
                  yapabilecekleri özel CRM yazılımlarını tercih etmektedir. Ne istediğini bilen kişiler için hangi
                  verilerin nasıl yönetileceğinin belirlenmesi, CRM yazılımı geliştirilmesi süreçlerini
                  kolaylaştırabiliyor. CRM yazılımın kimler tarafından nasıl kullanılacağının belirlenmesi, gerekli
                  eğitimlerin yapılması ve ekipteki herkes tarafından bu sistemin benimsenmesi önemlidir.
                </p>
                <h3>E-ticaret Sitenizle veya Kurumsal Sitenizle Entegre Çalışan CRM Yazılımı</h3>
                <p>
                  Bir e-ticaret sitesi sahibiyseniz, çok sayıda üyeniz bulunuyorsa bu üyelerin satın alma ve gezinim
                  verilerinin doğru okunması, müşteri etkileşimlerinin yönetilmesi, doğru analizler yapılarak sitenizin
                  içeriğini ve ürünlerinizi doğru yönetmeniz için adeta olmazsa olmaz bir şarttır. Web sitenizden gelen
                  iletişim kayıtlarının ve satış verilerinin CRM yazılımına aktarılması için entegrasyon çalışmaları
                  sağlamaktayız. Aynı zamanda bu verileri çekmek, onları doğru biçimde yönetmek için özel CRM yazılımı
                  geliştirmekteyiz.
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
        image: require("@/assets/images/uploads/business-automations-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
