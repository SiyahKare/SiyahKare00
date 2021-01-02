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
              {{ $t('pageConsultancy.title') }}
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
                  Bilgi Teknoloji Danışmanlığı
                </h2>
                <ul>
                  <li>İş hedefleri ve teknoloji gereksinimlerini anlamak üzere müşteri ile iletişime geçmek</li>
                  <li>Bilgi sistemi gerekliliklerini ve proje hedeflerini belirlemek</li>
                  <li>Müşterilere, uygun donanım, yazılım ve sistemleri önermek</li>
                  <li>Uygulama süreçlerini detaylandıran periyodik raporlar üretmek ve müşteriye sunmak</li>
                  <li>Teknolojiyi periyodik olarak gözden geçirmek ve sistem geliştirmeleri için öneriler sunmak</li>
                  <li>Bilgi teknolojileri girişimlerini yönetmek ve şirket içi teknik personelle iş birliği yapmak</li>
                  <li>Mevcut sistemleri gözden geçirmek ve iyileştirmeler önermek</li>
                  <li>Yeni sistemler hakkında kullanıcılara eğitim vermek</li>
                </ul>
                <h3>Yönetim Danışmanlığı</h3>
                <p>
                  Yönetim Danışmanlığı Hizmeti , şirketlere uzun süre insan kaynağından, yönetim anlayışına, şirket
                  organizasyonunda belirtilen başlıkların niteliklerine sahip olan yönetim kadrosuna,yerleşmiş olan
                  yönetim anlayışına kadar tüm süreçleri kontrol eder.
                </p>
                <p>
                  Şirketlerin devamlılığının ve verimliliğinin sürdürülebilir olması ; şirket ve şirketteki bireyler
                  arasındaki dengelerin iyi bir yönetim sistemi ile ilişkilendirilmesiyle mümkündür.
                </p>
                <p>
                  Ortak Akıl Yönetim Danışmanlık, alanında uzman danışman kadrosu ile uygulamaya dayalı ve bizzat
                  işletmenin gerçeklerini dikkate alarak şirket için sağlıklı bir Yönetim Sistemi Yapılanması
                  sağlamaktadır.
                  <br>
                  Bunlar:
                  <br>Yönetim kurulu organizasyon yapısının oluşturulması
                  <br>Yönetim kurulunun yapısı ve verimliliği hakkında analiz yapmak
                  <br>Yönetim kurulu raporlama sisteminin oluşturulması
                </p>
                <p>
                  Yönetim kurulu üyeleri ve üst düzey yöneticilerin performans değerlendirmeleri doğrultusunda ilke ve
                  uygulamaların belirlenmesi ve denetlenmesi ,
                </p>
                <p>
                  Şirketin uzun vadeli hedeflerini dikkate alarak yönetim kurulu üyeleri ve üst düzey yöneticilerin
                  ücretlendirme politikalarının belirlenmesi ,
                </p>
                <p>
                  Şirket’in oluşturduğu / oluşturacağı sistem ve süreçlerin analiz edilerek değerlendirilmesi ve yönetim
                  kuruluna öneri olarak sunulması. Onaylanan uygulamaların şirket performansını artırıcı yönetim
                  uygulamalarını hayata geçirilmesi
                </p>
                <p>
                  İşletme için kurumsal 5 yıllık stratejik hedeflerin planlanması
                </p>
                <p>
                  İşletmenin hedef odaklı bir yapıya dönüşmesi için icra kurulunun oluşturulması ve kurula uygun görev
                  ve sorumlulukların belirlenmesi
                </p>
                <p>
                  “Kurumsal Yetki Matrisi” ile tüm personelin görev ve yetki dağılımlarının yapılandırılması
                </p>
                <p>
                  Kurum iç denetim birimini oluşturarak denetimini yapmak ve sistemli şekilde yönetim kuruluna
                  raporlamak
                </p>
                <p>
                  Kurumsal toplantı formatı oluşturmak, yönetmek ve takip etmek
                </p>
                <h3>Araştırma Etiği Danışmanlığı</h3>
                <p>
                  Bir araştırmada araştırma etiği, doğru araştırma yöntemleri kadar önemli bir konudur. Araştırmacılar
                  istedikleri her türlü araştırmayı diledikleri biçimde yapamazlar. Her araştırmada araştırmacının etik
                  olarak uyması gereken bazı standartlar ve kurallar vardır.
                </p>
                <p>
                  Aşağıdaki araştırma etiği hakkındaki mesleki ahlak kuralları, araştırmanın amaçlarına katkıda bulunur,
                  iş birliği için gerekli değerleri destekler, araştırmacıların kamuya olan sorumluluğunu garantiye
                  alır, kamu desteği ile güvenilirlik sağlar ve çeşitli ahlaki ve sosyal değerleri güçlendirir:
                </p>
                <p>
                  1. İlk kural açıklıktır. Diğer bir deyimle araştırmacı kullandığı verileri, malzemeleri, teçhizatları,
                  kaynakları ve bulguları toplumla paylaşmak zorundadır. Eleştirilere ve yeni fikirlere açık olmalıdır.
                </p>
                <p>
                  2. Dürüstlük ve gerçeklik: Araştırmacı bulgularını uydurmamalı, başka bir yerden çalmamalı ya da
                  yanlış yorumlamamalıdır. Sonuçları, metotları, prosedürleri doğru raporlamalı ve meslektaşlarını,
                  sponsorları ve kamuyu yanıltmamalıdır. Araştırmayı kötüye kullanıyorsa, bu da bilim etiğine aykırı bir
                  davranıştır
                </p>
                <p>
                  3. Araştırmacının ilgilendiği objeye veya konuya bir zarar vermemesi gerekir. Buna bağlı olarak
                  araştırmacı insanların mahremiyetine ve sırlarına saygılı olmalı ve araştırmasında izin verilmediği
                  sürece şahıs isimlerini kullanmamalıdır. Ayrıca araştırmacı kendi kimliğini de saklamamalıdır.
                </p>
                <p>
                  4. Fikri mülkiyet: Patent, telif hakkı ve diğer fikri mülkiyetlere saygılı olunması gerekir. İzinsiz
                  veri, yöntem ve sonuçlar kullanılmamalı ve katkıda bulunanlar mutlaka referans gösterilmelidir.
                </p>
                <p>
                  5. Gizlilik: Gizli iletişimler, personel kayıtları, ticari ve askeri sırlar, hasta kayıtları
                  korunmalıdır.
                </p>
                <p>
                  6. Objektif olmak: Taraflı deney tasarımı, veri analizi ve yorumdan kaçınılmalıdır.
                </p>
                <p>
                  7. Bütünlük ve tutarlılık sağlanmalıdır.
                </p>
                <p>
                  8. Dikkatsizlik yüzünden yapılan hata ve atlamalar, çalışmanın baştan sona ciddi olarak incelenmesiyle
                  engellenmelidir.
                </p>
                <p>
                  9. Sosyal sorumluluk: Sosyal hasarlara yol açabilecek araştırmalardan kaçınılmalıdır.
                </p>
                <p>
                  10. Ayrımcılık: Bilimsel yetki ve bütünlük ile ilişkisi olmayan cinsiyet, ırk, köken ve diğer
                  faktörleri kullanarak ayrımcılık yapılmaması gerekir.
                </p>
                <p>
                  11. İlgili kanunların bilinip, bunlara uyulması lazımdır.
                </p>
                <p>
                  12. Hayvanlara özen gösterme: Araştırma sırasında kullanılan hayvanlara gereken ilgi ve saygı
                  gösterilmeli. İyi tasarlanmamış ve gereksiz hayvan deneyleri yapılmamalıdır.
                </p>
                <p>
                  13. İnsanları koruma: İnsani konularda yürütülen araştırmalarda risk ve zarar minimize edilmeli, insan
                  onuru, mahremiyeti ve otonomisi korunmalı. Çocuk, gelişimle veya kavramayla ilgili engelli, huzur
                  evinde yaşayan, evsiz veya kanuni bir statüsü olmayan savunmasız kişileri içeren araştırmalarda özel
                  önlemler alınmalıdır. Araştırmanın yükü de faydaları da adil bir şekilde dağıtılmalıdır.
                  <br><br>
                  Ulusal ve uluslararası düzenlemeler, yönetmeliklerle çerçevesi çizilmiş olan insan ve hayvanlarda
                  yapılacak araştırmaların planlanması ve uygulanması, araştırma etiğinin en önemli başlıklarıdır.
                  Araştırma etiği daha çok tıbbi araştırmalar için kullanılmakta olan bir kavramdır ancak kuşkusuz,
                  sosyal bilimlerde yürütülen araştırmalar da daha farklı bir boyutta araştırma etiğinin ilgi alanına
                  girmektedir.
                  <br><br>
                  Çarpıcı bir örnek
                  <br>
                  Araştırma etiği, temel davranış standartlarına bağlı kalmak açısından önemlidir. Bu bir çalışmada
                  özellikle insanlar veya hayvanlar kullanıldığında kritiktir. Paolo Macchiarini olayı araştırmanın kötü
                  yönetiminin nasıl bir insanın hayatını mahvedebileceğinin en çarpıcı örneğidir. Zira Macchiari’nin
                  etik kurallara uymadığı, sahtecilik yaptığı, yapay soluk borusu yapımında yasal olmayan yollara
                  başvurduğu, hastalarını üzerinde izinsiz deneyler yaptığı, ölümlere sebebiyet verdiği ve yapmadığı
                  bilimsel araştırmaları gerçekmiş gibi göstererek İsveç’ten yüklü miktarda para aldığı ortaya
                  çıkmıştır.
                </p>
                <p>
                  Yapılmaması gerekenler <br>
                  Yukarıda araştırma etiğinin olmazsa olmazlarından söz ettik. Gelin bir de araştırmacıların yapmaması
                  gerekenlere değinelim:
                </p>
                <ul>
                  <li>Çalışmalarına katılması için kimseyi zorlamamalı ya da rüşvet teklif etmemeliler.</li>
                  <li>Katılımcıları kandırmamalı, gözlerini boyamamalılar.</li>
                  <li>Verilerle oynamamalılar.</li>
                  <li>Katılımcılara, araştırma hakkında bilgi vermeden ve kendilerinden sözlü elektronik kayıt ya da
                    imzalı izin almadan, katılımcıları çalışmaya dâhil etmemeliler.
                  </li>
                  <li>Katılımcılara araştırma öncesinde, sırasında ve sonrasında çekilme hakkı olduğunu bildirmeli ve
                    isterlerse verilerinin geri çekilmesi hakkına sahip olduklarını da belirtmeliler.
                  </li>
                </ul>
                <h3>Danışman seçiminde nelere dikkat edilmelidir</h3>
                <p>
                  Aşağıdaki araştırma etiği hakkındaki mesleki ahlak kuralları, araştırmanın amaçlarına katkıda bulunur,
                  iş birliği için gerekli değerleri destekler, araştırmacıların kamuya olan sorumluluğunu garantiye
                  alır, kamu desteği ile güvenilirlik sağlar ve çeşitli ahlaki ve sosyal değerleri güçlendirir:
                </p>
                <ul>
                  <li>1. İlk kural açıklıktır. Diğer bir deyimle araştırmacı kullandığı verileri, malzemeleri,
                    teçhizatları, kaynakları ve bulguları toplumla paylaşmak zorundadır. Eleştirilere ve yeni fikirlere
                    açık olmalıdır.
                  </li>
                  <li>2. Dürüstlük ve gerçeklik: Araştırmacı bulgularını uydurmamalı, başka bir yerden çalmamalı ya da
                    yanlış yorumlamamalıdır. Sonuçları, metotları, prosedürleri doğru raporlamalı ve meslektaşlarını,
                    sponsorları ve kamuyu yanıltmamalıdır. Araştırmayı kötüye kullanıyorsa, bu da bilim etiğine aykırı
                    bir davranıştır
                  </li>
                  <li>3. Araştırmacının ilgilendiği objeye veya konuya bir zarar vermemesi gerekir. Buna bağlı olarak
                    araştırmacı insanların mahremiyetine ve sırlarına saygılı olmalı ve araştırmasında izin verilmediği
                    sürece şahıs isimlerini kullanmamalıdır. Ayrıca araştırmacı kendi kimliğini de saklamamalıdır.
                  </li>
                  <li>4. Fikri mülkiyet: Patent, telif hakkı ve diğer fikri mülkiyetlere saygılı olunması gerekir.
                    İzinsiz veri, yöntem ve sonuçlar kullanılmamalı ve katkıda bulunanlar mutlaka referans
                    gösterilmelidir.
                  </li>
                  <li>5. Gizlilik: Gizli iletişimler, personel kayıtları, ticari ve askeri sırlar, hasta kayıtları
                    korunmalıdır.
                  </li>
                  <li>6. Objektif olmak: Taraflı deney tasarımı, veri analizi ve yorumdan kaçınılmalıdır.</li>
                  <li>7. Bütünlük ve tutarlılık sağlanmalıdır.</li>
                  <li>8. Dikkatsizlik yüzünden yapılan hata ve atlamalar, çalışmanın baştan sona ciddi olarak
                    incelenmesiyle engellenmelidir.
                  </li>
                  <li>9. Sosyal sorumluluk: Sosyal hasarlara yol açabilecek araştırmalardan kaçınılmalıdır.</li>
                  <li>10. Ayrımcılık: Bilimsel yetki ve bütünlük ile ilişkisi olmayan cinsiyet, ırk, köken ve diğer
                    faktörleri kullanarak ayrımcılık yapılmaması gerekir.
                  </li>
                  <li>11. İlgili kanunların bilinip, bunlara uyulması lazımdır.</li>
                  <li>12. Hayvanlara özen gösterme: Araştırma sırasında kullanılan hayvanlara gereken ilgi ve saygı
                    gösterilmeli. İyi tasarlanmamış ve gereksiz hayvan deneyleri yapılmamalıdır.
                  </li>
                  <li>13. İnsanları koruma: İnsani konularda yürütülen araştırmalarda risk ve zarar minimize edilmeli,
                    insan onuru, mahremiyeti ve otonomisi korunmalı. Çocuk, gelişimle veya kavramayla ilgili engelli,
                    huzur evinde yaşayan, evsiz veya kanuni bir statüsü olmayan savunmasız kişileri içeren
                    araştırmalarda özel önlemler alınmalıdır. Araştırmanın yükü de faydaları da adil bir şekilde
                    dağıtılmalıdır.
                    <br><br>
                    Ulusal ve uluslararası düzenlemeler, yönetmeliklerle çerçevesi çizilmiş olan insan ve hayvanlarda
                    yapılacak araştırmaların planlanması ve uygulanması, araştırma etiğinin en önemli başlıklarıdır.
                    Araştırma etiği daha çok tıbbi araştırmalar için kullanılmakta olan bir kavramdır ancak kuşkusuz,
                    sosyal bilimlerde yürütülen araştırmalar da daha farklı bir boyutta araştırma etiğinin ilgi alanına
                    girmektedir.
                    <br><br>
                    Çarpıcı bir örnek
                    <br><br>Araştırma etiği, temel davranış standartlarına bağlı kalmak açısından önemlidir. Bu bir
                    çalışmada özellikle insanlar veya hayvanlar kullanıldığında kritiktir. Paolo Macchiarini olayı
                    araştırmanın kötü yönetiminin nasıl bir insanın hayatını mahvedebileceğinin en çarpıcı örneğidir.
                    Zira Macchiari’nin etik kurallara uymadığı, sahtecilik yaptığı, yapay soluk borusu yapımında yasal
                    olmayan yollara başvurduğu, hastalarını üzerinde izinsiz deneyler yaptığı, ölümlere sebebiyet
                    verdiği ve yapmadığı bilimsel araştırmaları gerçekmiş gibi göstererek İsveç’ten yüklü miktarda para
                    aldığı ortaya çıkmıştır.
                    <br><br>Yapılmaması gerekenler
                    <br><br>Yukarıda araştırma etiğinin olmazsa olmazlarından söz ettik. Gelin bir de araştırmacıların
                    yapmaması gerekenlere değinelim:
                    <ul>
                      <li>Çalışmalarına katılması için kimseyi zorlamamalı ya da rüşvet teklif etmemeliler.</li>
                      <li>Katılımcıları kandırmamalı, gözlerini boyamamalılar.</li>
                      <li>Verilerle oynamamalılar.</li>
                      <li>Katılımcılara, araştırma hakkında bilgi vermeden ve kendilerinden sözlü elektronik kayıt ya da
                        imzalı izin almadan, katılımcıları çalışmaya dâhil etmemeliler.
                      </li>
                      <li>Katılımcılara araştırma öncesinde, sırasında ve sonrasında çekilme hakkı olduğunu bildirmeli
                        ve isterlerse verilerinin geri çekilmesi hakkına sahip olduklarını da belirtmeliler.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h2>Eğitim Danışmanlığı</h2>
                <h3>Eğitim Danışmanı Kimdir?</h3>
                <p>
                  Eğitim danışmanı; özel eğitim kurumlarında veli ve öğrenciler ile iletişime geçerek, onlara kurumu
                  tanıtıp sağlanacak eğitim hakkında bilgi verir. Bulunduğu kuruma öğrenci kazandırmak için çalışır.
                  Öğrenciler ile profesyonel ilişki kurarak, çözüm önerileri üretir.
                </p>
                <h3>Eğitim Danışmanının Sorumlulukları Nelerdir?</h3>
                <p>
                  Öğrencinin geleceğini inşa etmeye yardımcı olma, veli ve öğrenciye iyi bir hizmet sunma ve kurum
                  tanıtımının yapılması işlerini yürüten eğitim danışmanının diğer sorumlulukları şunlardır;
                </p>
                <p>
                  Kuruma gelen öğrenci adaylarının ihtiyacı olan eğitim programlarını belirleyerek, onları eğitim almaya
                  ikna etmek ve kuruma yeni öğrenciler kazandırmak,
                </p>
                <p>
                  Telefonla veya yüz yüze eğitim danışmanlığı hizmeti vermek,
                </p>
                <p>
                  Satış hedefine ulaşmak için; planlama, organizasyon ve koordinasyon yapmak,
                </p>
                <p>
                  Kuruma yeni öğrenci ve prestij kazandıracak pazarlama ve tanıtım faaliyetlerini planlamak,
                </p>
                <p>
                  Bireysel ve kurumsal müşteri portföyü oluşturmak,
                </p>
                <p>
                  Kayıt sonrası öğrencilerin gelişimlerini takip etmek ve sorunlarına çözüm önerileri üretmek,
                </p>
                <p>
                  İstek ve şikayetlere zamanında ve etkin bir şekilde cevap vermek,
                </p>
                <p>
                  Kurumda bulunan diğer ekipler ile entegre çalışmak,
                </p>
                <p>
                  Kurum içi işleyişi, tertibi, sistemi ve iş akışını belirli bir düzen çerçevesinde takip etmek ve
                  yapılan her işi raporlayarak yöneticilere sunmak,
                </p>
                <p>
                  Günlük dökümantasyon ve ofis işlemlerini eksiksiz bir şekilde tamamlamak.
                </p>
                <h3>Eğitim Danışmanı Nasıl Olunur?</h3>
                <p>
                  Eğitim danışmanı olmak için, en az lise mezunu olma şartı aranmaktadır. Çeşitli kurumların verdiği
                  eğitim danışmanı ilanına başvurmak yeterlidir.
                </p>
                <h3>İşverenlerin Eğitim Danışmanında Aradığı Nitelikler Nelerdir?</h3>
                <p>
                  Sistemli çalışan, güler yüzlü ve ekip çalışmasına yatkın olan eğitim danışmanlarının diğer nitelikleri
                  şunlardır;
                </p>
                <p>
                  İş disiplinine sahip olmak,
                </p>
                <p>
                  Dinamik çalışma ortamına uyum sağlama yeteneği sergilemek,
                </p>
                <p>
                  Planlama ve organizasyon becerisi göstermek,
                </p>
                <p>
                  Problem çözme yeteneğine sahip olmak,
                </p>
                <p>
                  İnsan ilişkilerinde başarılı olmak,
                </p>
                <p>
                  Sözlü ve yazılı iletişim kanallarını etkin bir şekilde kullanabilmek,
                </p>
                <p>
                  Öğrenmeye ve gelişime açık olmak,
                </p>
                <p>
                  Yoğun çalışma temposuna uyum sağlayabilmek,
                </p>
                <p>
                  Yüksek motivasyon sahibi olmak,
                </p>
                <p>
                  Güler yüzlü ve samimi olmak.
                </p>
                <h3>Marka ve patent danışmanlığı</h3>
                <p>
                  Cumhuriyetin ilk yıllarından itibaren sinaî hakların korunmasına önem verilmiştir. 1994 yılında Türk
                  Patent Enstitüsü´nün kuruluşu ile bu alanda bir dönüm noktası olmuştur. Hukuk derslerinde dahi yeri
                  olan fikri ve sınai haklar marka danışmanlığı olan avukatlar aracılığı ve konu hakkında vekilliği olan
                  marka danışmanlığı alanında uzmanlaşan bireyler tarafından yapılmaktadır. Marka tescil süreci uzun
                  soluklu 8 -12 ay arası hatta bazı durumlarda 16-24 aya kadar uzayabilen bilgi gerektiren bir süreçtir.
                  Marka başvurunuz yapıldığı andan itibaren noksan evrak, itiraz, karşı görüş, bakanlık kararları,
                  tescil kararları gibi takip ve titizlik gerektiren süreçlere dağılmaktadır. Tüm detaylar hakkında
                  bireyler, yeterli ve gerekli bilgi birikimine sahip olmadıkları için bir Marka danışmanı ihtiyacı
                  oluşur. İşlemler hakkında marka danışmanlığı yapacak kişinin uzman ve bilinir bir kurum olması en
                  dikkat edilmesi gereken noktalardan birisidir. Günümüzde Türk Patent Enstitüsü ile firma, vekil
                  arasındaki tüm işlemler tebligat ve online evrak aracılığı ile yapılmaktadır. Bu gibi durumlardan
                  gelen evrak ve bildirinin enstitünün vereceği zaman diliminde yapılmaması durumunda markanız verilen
                  hükmü direkt kabul etmiş sayılacaktır. Bu noktada marka danışmanı olan kurum ve uzmanlar; ulaşılabilir
                  ve aynı zamanda gelen evrak ve müvekkil arasındaki iletişimi çapraz bir şekilde yönetebiliyor
                  olmalıdır.
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
        image: require("@/assets/images/uploads/consultancy-bg.jpg"),
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
