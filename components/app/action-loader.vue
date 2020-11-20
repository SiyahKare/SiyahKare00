<template>
  <div class="action-loader">
    <div class="loader"></div>
  </div>
</template>


<script>
  export default {
    name: 'action-loader',
    data() {
      return {}
    }
  }
</script>

<style>
  .loader {
    border: 6px solid #f3f3f3; /* Light grey */
    border-top: 6px solid #212121; /* Blue */
    border-radius: 50%;
    width: 45px;
    height: 45px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
