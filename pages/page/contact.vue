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
              {{ $t('pageContact.title') }}
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-contact">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100 ml-auto">
              <h2 class="title mt-0">
                {{ $t('pageContact.sendUs') }}
              </h2>
              <p class="description">
                {{ $t('pageContact.sendUsText') }}
                <br>
                <br>
              </p>
              <form>
                <md-field>
                  <label>{{ $t('pageContact.form.name') }}</label>
                  <md-input
                    v-model="form.name"
                    type="text"
                  />
                </md-field>
                <md-field>
                  <label>{{ $t('pageContact.form.mail') }}</label>
                  <md-input
                    v-model="form.email"
                    type="email"
                  />
                </md-field>
                <md-field>
                  <label>{{ $t('pageContact.form.phone') }}</label>
                  <md-input
                    v-model="form.phone"
                    type="number"
                  />
                </md-field>
                <md-field>
                  <label>{{ $t('pageContact.form.msg') }}</label>
                  <md-textarea v-model="form.textarea"/>
                </md-field>
                <div class="submit text-center mt-3">
                  <md-button class="md-primary md-round" @click="sendContact">
                    {{ $t('pageContact.form.send') }}
                  </md-button>
                </div>
                <div class="form-item w-100" v-if="errors.length > 0">
                  <div class="alert alert-danger" v-for="(item, index) in errors" :key="index">
                    <div class="container">
                      <div class="alert-icon">
                        <md-icon>info_outline</md-icon>
                      </div>
                      <b> {{item}} </b>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
              <info-areas
                class="pt-0"
                info-horizontal
                icon-color="primary"
                icon="pin_drop"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Körfez Mah. Yüce Rıfat Sokak <br>
                    NO: 73 Kat: 4 Daire: 9 <br>
                    İzmit/Kocaeli
                  </p>
                </div>
              </info-areas>
              <info-areas
                class="pt-0"
                info-horizontal
                icon-color="primary"
                icon="phone"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Siyahkare <br>
                    <a style="color: #999999" href="tel:+902622910101">+90 262 291 0101</a> <br>
                    {{ $t('pageContact.openTime') }}, 8:00-18:00
                  </p>
                </div>
              </info-areas>
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
        image: require("@/assets/images/uploads/contact-bg.jpg"),
        form: {
          name: '',
          email: '',
          phone: '',
          textarea: '',
        },
        errors: [],
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    methods: {
      sendContact() {
        const self = this;
        self.errors = [];

        if (self.checkForm(self.form)) {
          // TODO send api
        } else {
          self.errors.push(self.$t('errors.allRequired'))
        }

      },
      checkForm(object) {
        let status = true;
        for (const [key, value] of Object.entries(object)) {
          // console.log(`${key}: ${value}`);
          if (value.trim() === '') status = false
        }
        return status
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info .info-title {
    margin: 1.35rem 0 0.875rem;
  }
</style>
