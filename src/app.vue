<!-- app.vue -->
<template>
  <div class="app">
    <Button color="primary">Primary</Button>
    <Button color="warning">Warning</Button>
    <Button color="red">Error</Button>
    <Button color="green">Pass</Button>
  </div>
</template>

<script>
  import Button from './components/atom-Button/src/atom-button.vue'
  export default {
    name: 'app',
    components: {
      Button
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    transform: rotate(0deg);
  }
</style>