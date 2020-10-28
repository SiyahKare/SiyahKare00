<template>
  <div class="app-loading" v-if="loading">
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
         preserveAspectRatio="xMidYMid" class="lds-rolling" :style="'background:'+background">
      <circle cx="50" cy="50" fill="none" :stroke="color" stroke-width="10" r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(139.139 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"
                          keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
      </circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'loader',
    props: {
      width: {
        default: '100px'
      },
      height: {
        default: '100px'
      },
      background: {
        default: 'none'
      },
      color: {
        default: '#212121'
      }
    },
    data: () => ({
      loading: true
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    transition: 300ms;
  }
</style>
