<template>
  <footer class="footer footer-white footer-big"
          :class="{
    [`footer-${type}`]: type,
    [`footer-${size}`]: size
  }"
  >
    <div class="container">
      <div class="content">
        <div class="md-layout">
          <div
            :class="colClass"
          >
            <h5>SiyahKare</h5>
            <div class="footer-logo">
              <nuxt-link :to="'/'">
                <img :src="logo" alt="">
              </nuxt-link>
            </div>
            <div class="footer-login">
              <md-button class="md-primary" style="width: 100%; margin: 15px 0 0 0" @click="loginModal = true">
                <i class="material-icons">fingerprint</i> {{ $t('footer.login') }}
              </md-button>
            </div>
          </div>
          <div
            :class="colClass"
            v-for="(item, i) in navLinks"
            :key="i"
          >
            <h5>{{item.title[$i18n.locale]}}</h5>
            <ul class="links-vertical">
              <li
                v-for="(li, index) in item.subMenu"
                :key="index"
              >
                <nuxt-link :to="'/' + li.nLink">
                  {{
                  li.title[$i18n.locale].charAt(0).toUpperCase() + li.title[$i18n.locale].slice(1)
                  }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div
            :class="colClass"
          >
            <h5>{{ $t('footer.apps') }}</h5>
            <ul class="links-vertical footer-apps">
              <li>
                <nuxt-link :to="'/'">
                  <img :src="pwaApp" alt="pwa">
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">
                  <img :src="appleStore" alt="apple store">
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/'">
                  <img :src="playStore" alt="play store">
                </nuxt-link>
              </li>
            </ul>

          </div>

        </div>

        <div class="md-layout">
          <div class="footer-social">
            <h5>Follow Us</h5>
            <ul class="social-buttons">
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fa fa-twitter"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fa fa-facebook"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-whatsapp md-just-icon md-simple"
                >
                  <i class="fa fa-whatsapp"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fa fa-google"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fa fa-instagram"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-slack md-just-icon md-simple"
                >
                  <i class="fa fa-slack"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-github md-just-icon md-simple"
                >
                  <i class="fa fa-github"/>
                </md-button>
              </li>
              <li>
                <md-button
                  href="javascript:void(0)"
                  target="_blank"
                  class="md-youtube md-just-icon md-simple"
                >
                  <i class="fa fa-youtube-play"/>
                </md-button>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <hr>

      <div class="copyright">
        Copyright © 1999 - 2021 Siyahkare All Rights Reserved.
      </div>
    </div>
    <modal class="login-modal fade" custom="true" v-if="loginModal" @close="loginModal = false">
      <blog-card
        card-plain
        :shadow-normal="false"
        :no-colored-shadow="false"
        :card-image="logo"
      >
        <template slot="cardContent">
          <div class="login-form">
            <md-field class="md-form-group">
              <md-icon>mail</md-icon>
              <md-input
                :placeholder="$t('basic.mail')"
              />
            </md-field>
            <md-field class="md-form-group">
              <md-icon>lock_outline</md-icon>
              <md-input
                :placeholder="$t('basic.psw')"
              />
            </md-field>
            <md-button class="md-simple">{{ $t('footer.login') }}</md-button>
          </div>

        </template>
      </blog-card>

    </modal>
  </footer>
</template>
<script>

  import {Modal} from '@/components'

  export default {
    props: {
      backgroundColor: String,
      type: String,
      size: String
    },
    components: {
      Modal
    },
    computed: {
      navLinks() {
        return this.$store.state.app.navLinks
      }
    },
    data() {
      return {
        loginModal: false,
        colClass: 'md-layout-item md-medium-size-20 md-large-size-20 md-small-size-100',
        year: new Date().getFullYear(),
        logo: require("@/assets/images/SiyahKare.jpg"),
        appleStore: require("@/assets/images/appstore.png"),
        playStore: require("@/assets/images/googlestore.png"),
        pwaApp: require("@/assets/images/pwapp.png"),
      };
    }
  };
</script>
<style lang="scss">
  .footer-social {
    text-align: center;
    width: 100%;
    margin-top: 15px;
  }

  .footer-apps {
    a, img {
      max-width: 135px;
    }
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .login-modal {
    .card-blog {
      margin: 0;
      padding: 0 15px;
      .md-card-header {
        margin-top: -30px;
      }
    }
  }

</style>
