<template>
  <div class="wrapper">
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
              {{ $t('pageFormula.title') }}
            </h1>
            <h3 class="title">
              "{{ $t('pageFormula.subTitle') }}".
            </h3>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
              <h3 class="title">
                {{ $t('pageFormula.sub_top_title') }}
              </h3>
              <p>
                {{ $t('pageFormula.sub_top_text') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section pt-0">
        <div class="container">
          <div class="text-center">
            <div class="md-layout">
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">
                    {{ $t('pageFormula.list.item_1_title') }}
                  </h4>
                  <p>
                    {{ $t('pageFormula.list.item_1_text') }}
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">
                    {{ $t('pageFormula.list.item_2_title') }}
                  </h4>
                  <p>
                    {{ $t('pageFormula.list.item_2_text') }}
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <h4 class="info-title">
                    {{ $t('pageFormula.list.item_3_title') }}
                  </h4>
                  <p>
                    {{ $t('pageFormula.list.item_3_text') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="section pb-0">
        <div class="container">
          <div class="inner" v-if="$i18n.locale === 'tr'" style="max-width: 610px; margin: 0 auto;">
            <h3 class="title">"Susan Hiçliğin Sembolü".</h3>

            <p>1915'te Petrograd (Rusya)'da<br>

              <b>"Son Fütürist Resim Sergisi o,lo": </b> <br>

              adıyla açılan serginin başköşesine büyük bir resim asılmıştı: Beyaz zemin üzerinde bir siyah kare. <br>

              Resmi yapan Kasimir Malevich yapıtına <b>"Sıfır-Biçim"</b> adını vermişti.<br>

              Bu yapıt herhangi bir nesneyi göstermiyor, bir şeyi anlatmıyor; nesnelerden, onların uyandıracağı
              duygular, çağrışımlar ve her türlü "ruhsal titreşim"den arınmış olan biçimi ifade ediyordu.

            </p>
            <div class="blockquote undefined">
              <small>
                Malevich'in sözüyle bu resim
              </small>

              <p>
                <b>“"Susan Hiçliğin Sembolü"ydü.”</b>
              </p>

            </div>
          </div>
          <div class="inner" v-if="$i18n.locale === 'en'" style="max-width: 610px; margin: 0 auto;">
            <h3 class="title">"Susan Hiçliğin Sembolü". EN</h3>

            <p>1915'te Petrograd (Rusya)'da<br>

              <b>"Son Fütürist Resim Sergisi o,lo": </b> <br>

              adıyla açılan serginin başköşesine büyük bir resim asılmıştı: Beyaz zemin üzerinde bir siyah kare. <br>

              Resmi yapan Kasimir Malevich yapıtına <b>"Sıfır-Biçim"</b> adını vermişti.<br>

              Bu yapıt herhangi bir nesneyi göstermiyor, bir şeyi anlatmıyor; nesnelerden, onların uyandıracağı
              duygular, çağrışımlar ve her türlü "ruhsal titreşim"den arınmış olan biçimi ifade ediyordu.

            </p>
            <div class="blockquote undefined">
              <small>
                Malevich'in sözüyle bu resim
              </small>

              <p>
                <b>“"Susan Hiçliğin Sembolü"ydü.”</b>
              </p>

            </div>
          </div>
          <div class="inner" v-if="$i18n.locale === 'ru'" style="max-width: 610px; margin: 0 auto;">
            <h3 class="title">"Susan Hiçliğin Sembolü". RU</h3>

            <p>1915'te Petrograd (Rusya)'da<br>

              <b>"Son Fütürist Resim Sergisi o,lo": </b> <br>

              adıyla açılan serginin başköşesine büyük bir resim asılmıştı: Beyaz zemin üzerinde bir siyah kare. <br>

              Resmi yapan Kasimir Malevich yapıtına <b>"Sıfır-Biçim"</b> adını vermişti.<br>

              Bu yapıt herhangi bir nesneyi göstermiyor, bir şeyi anlatmıyor; nesnelerden, onların uyandıracağı
              duygular, çağrışımlar ve her türlü "ruhsal titreşim"den arınmış olan biçimi ifade ediyordu.

            </p>
            <div class="blockquote undefined">
              <small>
                Malevich'in sözüyle bu resim
              </small>

              <p>
                <b>“"Susan Hiçliğin Sembolü"ydü.”</b>
              </p>

            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="md-layout" style="margin: 0 auto; max-width: 800px">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img :src="img1" alt="malevich">
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img :src="img2" alt="siyahkare-corner">
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img :src="img3" alt="blacksquare">
            </div>
          </div>
        </div>
      </div>
      <div class="section pt-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h3 class="title">
                {{ $t('pageFormula.sub_bottom_title') }}
              </h3>
              <p>
                {{ $t('pageFormula.sub_bottom_text_1') }}
                <br><br>
                {{ $t('pageFormula.sub_bottom_text_2') }}
              </p>
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
        image: require("@/assets/images/uploads/formula-bg.jpg"),
        img1: require("@/assets/images/pages/formula/malevich.png"),
        img2: require("@/assets/images/pages/formula/siyahkare-corner.jpg"),
        img3: require("@/assets/images/pages/formula/blacksquare.jpg")
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
