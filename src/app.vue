<!-- app.vue -->
<template>
  <div class="app">
    <Button type="primary">Test</Button>
  </div>
</template>

<script>
  import Button from './components/Button/src/index.vue'
  export default {
    name: 'app',
    components: {
      Button
    },
    data() {

    }
  }
</script>

<style scoped>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: red;
    margin-top: 60px;
    transform: rotate(0deg);
  }
</style>