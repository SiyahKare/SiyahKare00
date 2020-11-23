<template>
  <div class="wrapper app-sub-page">

    <div class="map-header"></div>
    <GMap
      class="page-header "
      ref="gMap"
      language="en"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :options="{fullscreenControl: false}"
      :zoom="15"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = location"
        :icon="markerOptions"
      >
        <GMapInfoWindow :options="{maxWidth: 200}">
          <code>
            lat: {{ location.lat }},
            lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>


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
                  <md-textarea v-model="form.msg"/>
                </md-field>

                <md-field class="no-After">
                  <div class="w-100" style="overflow: hidden">
                    <client-only>
                      <recaptcha @error="onError" @success="onSuccess" @expired="onExpired"/>
                    </client-only>
                  </div>
                </md-field>
                <div class="submit text-center mt-3">
                  <action-loader v-if="loader" :center="true"></action-loader>
                  <md-button v-else class="md-primary md-round" @click="sendContact">
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
                <div class="form-item w-100" v-if="success.length > 0">
                  <div class="alert alert-success" v-for="(item, index) in success" :key="index">
                    <div class="container">
                      <div class="alert-icon">
                        <md-icon>check_circle</md-icon>
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
                :img="miniLogo"
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
                    <b>Siyahkare Yazılım <br> Teknoloji San. Tic. A.Ş.</b> <br>
                    Körfez Mah. Yüce Rıfat Sokak <br>
                    NO: 73 Kat: 4 Daire: 9 <br>
                    İzmit/Kocaeli <br>
                    Alemdar V.D. 772 134 8192 <br>
                    Mersis No. 0772 134 8192 00001
                  </p>
                </div>
              </info-areas>
<!--              <info-areas-->
<!--                class="pt-0"-->
<!--                info-horizontal-->
<!--                :img="miniLogo"-->
<!--              >-->
<!--                <h4-->
<!--                  slot="title"-->
<!--                  class="info-title"-->
<!--                >-->
<!--                </h4>-->
<!--                <div-->
<!--                  slot="content"-->
<!--                  class="description"-->
<!--                >-->
<!--                  <p>-->
<!--                    Onur Mutlu IBAN <br>-->
<!--                    TR86 0006 2000 7170 0006 6533 77 <br>-->
<!--                    Garanti USD <br>-->
<!--                    TR34 0006 2000 7170 0009 0847 45 <br>-->
<!--                    BTC <br>-->
<!--                    1BeT6VBcK7wsYz2TVLvgnz52AzRHMg5dN7 <br>-->
<!--                    Ziraat <br>-->
<!--                    TR75 0011 1000 0000 0050 3399 27 <br>-->
<!--                    EnPara - Finansbank <br>-->
<!--                    1060936740 <br>-->
<!--                    -->
<!--                  </p>-->
<!--                </div>-->
<!--              </info-areas>-->
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
                    <a style="color: #999999" href="tel:+902623310807">+90 262 331 0807</a> <br>
                    <a style="color: #999999" href="tel:+902623240505">+90 262 324 0505</a> <br>
                    <a style="color: #999999" href="tel:+902623240504">+90 262 324 0504</a> <br>
                    <a style="color: #999999" href="tel:+902623240508">+90 262 324 0508</a> <br>
                    <span>Fax: </span><a style="color: #999999" href="fax:+902623310808">+90 262 331 0808</a> <br>
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
  import {marker} from "@/plugins/base64"

  export default {
    name: 'detail',
    mixins: [Mixins.HeaderImage],
    data() {
      return {
        loader: false,
        captcha: false,
        miniLogo: require("@/assets/images/siyahkare-mini.jpg"),
        markerOptions: {
          url: require("@/assets/images/marker.png"),
          size: {width: 60, height: 90, f: 'px', b: 'px',},
          scaledSize: {width: 30, height: 45, f: 'px', b: 'px',},
        },
        marker: require("@/assets/images/marker.png"),
        currentLocation: {},
        locations: [
          {
            lat: 40.763592,
            lng: 29.951220
          }
        ],
        pins: {
          selected: require("@/assets/images/marker.png"),
          notSelected: require("@/assets/images/marker.png")
        },
        clusterStyle: [
          {
            url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
            width: 56,
            height: 56,
            textColor: "#fff"
          }
        ],
        // from here
        image: require("@/assets/images/uploads/contact-bg.jpg"),
        form: {
          name: '',
          email: '',
          phone: '',
          msg: '',
        },
        errors: [],
        success: []
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    created() {
      console.log('CFEATET', this.$refs)
    },
    methods: {
      onSuccess(token) {
        // console.log('Succeeded:', token)
        // here you submit the form
        // this.$refs.form.submit()
        this.captcha = true
      },
      onExpired() {
        console.log('Expired')
        this.captcha = false
      },
      onError(error) {
        // console.log('Error happened:', error)
        this.captcha = false
      },
      sendContact() {
        const self = this;
        self.errors = [];
        self.success = [];

        if (self.checkForm(self.form)) {


          if (self.captcha) {
            self.loader = true
            self.$axios.post('https://panel.siyahkare.com/api/contact', self.form)
              .then(res => {
                // console.log('MAİl', res)
                if (res.data.Result !== undefined) {

                  self.$axios.post('https://panel.siyahkare.com/api/sendEmailContacts', self.form)
                    .then(mail => {
                      // console.log('MAİL', mail)
                      self.loader = false
                      self.success.push(self.$t('basic.successContact'))
                      self.resetForm()
                      this.$recaptcha.reset()
                    })

                }
              })
          } else {
            self.errors.push(self.$t('errors.captcha'))
          }


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
      },
      resetForm() {
        for (const [key, value] of Object.entries(this.form)) {
          // console.log(`${key}: ${value}`);
          this.form[key] = ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info .info-title {
    margin: 1.35rem 0 0.875rem;
  }

  .map-header {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #212121 !important;
  }
</style>

<style>
  .no-After:after {
    display: none !important;
  }
</style>
