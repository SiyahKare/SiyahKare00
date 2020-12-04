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
              İş Başvurusu
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-text" v-if="selected !== null">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <section>
                <h2 class="title text-center">
                  {{selected.title}}
                </h2>
              </section>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <section>
                <h3 class="title">
                  description
                </h3>
                <p>
                  {{selected.description}}
                </p>
              </section>
              <section>
                <h3 class="title">
                  to_do
                </h3>
                <p>
                  {{selected.to_do}}
                </p>
              </section>
              <section>
                <h3 class="title">
                  skills
                </h3>
                <p>
                  {{selected.skills}}
                </p>
              </section>
              <section>
                <h3 class="title">
                  learn
                </h3>
                <p>
                  {{selected.learn}}
                </p>
              </section>
            </div>
          </div>

          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title mt-0">
                Ekibimize Katıl!
              </h2>
              <p class="description">
                İsim Soyisim, E-posta adresini ve CV ni yolla.
              </p>
              <form style="position: relative">
                <action-loader v-if="loader"></action-loader>
                <md-field>
                  <label>İsim Soyisim</label>
                  <md-input
                    v-model="form.name_surname"
                    type="text"
                  />
                </md-field>
                <!--                <md-field class="md-error">-->
                <!--                  <label>Error Input</label>-->
                <!--                  <md-input-->
                <!--                    v-model="form.email"-->
                <!--                    type="text"-->
                <!--                  />-->
                <!--                  <md-icon>clear</md-icon>-->
                <!--                </md-field>-->

                <md-field>
                  <label>E-Posta Adresi</label>
                  <md-input
                    v-model="form.email"
                    type="email"
                  />
                </md-field>

                <file-upload
                  v-if="fileActive"
                  type="input"
                  placeholder="CV (sadece PDF)"
                  input-name="fileSimple2"
                  btn-icon="attach_file"
                  with-button
                  @onChange="onFileChange"
                />


                <md-field class="no-After">
                  <div class="w-100" style="overflow: hidden">
                    <client-only>
                      <recaptcha @error="onError" @success="onSuccess" @expired="onExpired"/>
                    </client-only>
                  </div>
                </md-field>


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

                <div class="submit mt-3">
                  <md-button class="md-primary md-round" @click="submit">
                    Gönder
                  </md-button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Mixins from "@/plugins/basicMixins";

  import {FileUpload} from "@/components";

  export default {
    name: 'detail',
    mixins: [Mixins.HeaderImage],
    components: {
      FileUpload
    },
    data() {
      return {
        image: require("@/assets/images/uploads/job-postings-bg.jpg"),
        defaultImg: require("@/assets/images/uploads/job-default.jpg"),
        jobs: [],
        selected: null,
        form: {
          job_advs_id: null,
          name_surname: '',
          email: '',
          cv: null
        },
        errors: [],
        success: [],
        captcha: false,
        loader: false,
        fileActive: true
      }
    },
    mounted() {

      if (this.$route.params.id === undefined) this.$router.push({
        path: '/page/job-postings'
      });

      this.$axios.get('https://panel.siyahkare.com/api/jobAdvs').then(res => {
        const id = parseInt(this.$route.params.id);
        this.jobs = res.data.result;
        this.selected = res.data.result.find(x => x.id === id);
        this.form.job_advs_id = this.$route.params.id;
        this.$nextTick(() => {
          setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
      })
    },
    methods: {
      submit() {
        const self = this;

        if (self.checkForm() && self.captcha) {
          self.loader = true

          let formData = new FormData();

          formData.append('job_advs_id', self.form.job_advs_id);
          formData.append('name_surname', self.form.name_surname);
          formData.append('email', self.form.email);
          formData.append('cv', self.form.cv);

          self.$axios.post('https://panel.siyahkare.com/api/jobApp', formData)
            .then(res => {
              self.success.push(self.$t('basic.successContact'))
              self.resetForm()
              this.$recaptcha.reset()
              self.loader = false
            })
            .catch(err => {
              console.log('error', err.response)
            })


        } else {
          self.errors.push(self.$t('errors.allRequired'))
        }

      },
      checkForm() {
        const self = this;
        self.errors = [];
        self.success = [];

        let status = true;

        Object.keys(self.form).forEach(val => {
          if (val === 'cv') {
            if ((self.form.cv === null)) status = false
          } else {
            console.log(val)
            if (self.form[val].trim() === '') status = false
          }
        })

        return status
      },
      onFileChange(file) {
        this.errors = [];
        if (file[0].type !== 'application/pdf') {
          this.errors.push(this.$t('errors.onlyPdf'))
        } else {
          this.form.cv = file[0]
        }

      },
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
      resetForm() {
        for (const [key, value] of Object.entries(this.form)) {
          // console.log(`${key}: ${value}`);
          key === 'cv' ? this.form[key] = null : this.form[key] = '';
        }

        this.fileActive = false;
        setTimeout(() => {
          this.fileActive = true
        })
      }
    }
  }
</script>

<style>
  .no-After:after {
    display: none !important;
  }
</style>
