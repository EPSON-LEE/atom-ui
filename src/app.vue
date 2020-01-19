<!-- app.vue -->
<template>
  <div class="app">
    <Button @click="showToastNormal" size="large" color="primary">large</Button>
    <Button @click="showToastError" size="small" color="red">Error</Button>
    <Button @click="showToastSuccess" size="medium" color="warning">Medium</Button>
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
    },
    methods: {
      showToastNormal() {
        this.$toast({
          content: "这是正常提示"
        })
      },
      showToastError() {
        this.$toast.error({
          content: "服务器开小差了",
          duration: 500
        })
      },
      showToastSuccess() {
        this.$toast.success({
          content: "服务器开小差了",
          duration: 500
        })
      }
    },
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