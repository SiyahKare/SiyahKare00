<template>
  <div
    id="vue-material-kit-pro"
    :class="{ 'nav-open': NavbarStore.showNavbar }"
    v-if="devMode"
  >
    <header_component :NavbarStore="NavbarStore">
    </header_component>
    <Nuxt/>
    <footer_component>
    </footer_component>
  </div>
  <div v-else>
    <input type="text" v-model="devInput" placeholder="pssw">
    <button @click="setDev">check</button>
  </div>
</template>

<script>
  import header_component from '../layout/MainNavbar'
  import footer_component from '../layout/MainFooter'

  export default {
    data() {
      return {
        devMode: true,
        devInput: '',
        NavbarStore: {
          showNavbar: false
        }
      }
    },
    created() {
      // if (process.browser) {
      //   const devmode = window.localStorage.getItem('dev');
      //   if (devmode === 'true') {
      //     this.devMode = true
      //   }
      // }

    },
    components: {
      header_component,
      footer_component
    },
    mounted() {
      let {bodyClass} = this.$options;
      if (bodyClass) {
        document.body.classList.add(bodyClass);
      }
    },
    beforeDestroy() {
      let {bodyClass} = this.$options;
      if (bodyClass) {
        document.body.classList.remove(bodyClass);
      }
    },
    methods: {
      setDev() {
        if (this.devInput === 'sk') {
          localStorage.setItem('dev', true)
          this.devMode = true
        }
      }
    }
  }
</script>
