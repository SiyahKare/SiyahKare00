<template>
  <div class="app-loading" v-if="loading">
    <!--    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"-->
    <!--         preserveAspectRatio="xMidYMid" class="lds-rolling" :style="'background:'+background">-->
    <!--      <circle cx="50" cy="50" fill="none" :stroke="color" stroke-width="10" r="35"-->
    <!--              stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(139.139 50 50)">-->
    <!--        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"-->
    <!--                          keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>-->
    <!--      </circle>-->
    <!--    </svg>-->
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
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


  .sk-cube-grid {
    width: 104px;
    height: 104px;
    margin: 100px auto;
    /*background-size: cover;*/
    /*background-position: center;*/
    background-repeat: no-repeat;
    /*background-image: url("/siyahkare-mini.jpg");*/
  }

  .sk-cube {
    background-color: white;
  }


  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #333;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 3.3s infinite ease-in-out;
    animation: sk-cubeGridScaleDelay 3.3s infinite ease-in-out;
  }

  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    background-image: url("/loader/1.jpg");

  }

  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    background-image: url("/loader/2.jpg");
  }

  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    background-image: url("/loader/3.jpg");
  }

  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    background-image: url("/loader/4.jpg");
  }

  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    background-image: url("/loader/5.jpg");
  }

  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    background-image: url("/loader/6.jpg");
  }

  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    background-image: url("/loader/7.jpg");
  }

  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    background-image: url("/loader/8.jpg");
  }

  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    background-image: url("/loader/9.jpg");
  }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }


</style>
