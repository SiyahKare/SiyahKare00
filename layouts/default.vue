<template>
  <div
    id="vue-material-kit-pro"
    :class="{ 'nav-open': NavbarStore.showNavbar }"
  >
    <header_component :NavbarStore="NavbarStore">
    </header_component>
    <Nuxt/>
    <footer_component>
    </footer_component>
  </div>
</template>

<script>
  import header_component from '../layout/MainNavbar'
  import footer_component from '../layout/MainFooter'

  export default {
    data() {
      return {
        NavbarStore: {
          showNavbar: false
        }
      }
    },
    components: {
      header_component,
      footer_component
    },
    mounted() {
      let { bodyClass } = this.$options;
      if (bodyClass) {
        document.body.classList.add(bodyClass);
      }
    },
    beforeDestroy() {
      let { bodyClass } = this.$options;
      if (bodyClass) {
        document.body.classList.remove(bodyClass);
      }
    }
  }
</script>
