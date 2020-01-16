<!-- app.vue -->
<template>
  <div class="app">
    <Button size="small" color="primary">Small</Button>
    <Button size="medium" color="warning">Medium</Button>
    <Button size="large" color="red">large</Button>
    <Button color="test">Default</Button>
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