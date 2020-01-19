<!-- main.vue -->
<template>
  <div class="atom-toast" :class="type ? `atom-toast--${type}` : ''">
    <p>{{ content }}</p>
  </div>
</template>
<script>
  export default {
    name: "Toast",
    data() {
      return {
        duration: 3000,
        content: "",
        type: ""
      }
    },
    mounted() {
      setTimeout(() => {
        // 3s 后通过父级移除子元素的方式来移除该组件实例和 DOM 节点
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, this.duration);
    }
  };
</script>