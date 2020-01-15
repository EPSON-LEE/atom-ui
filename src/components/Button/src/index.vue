<template>
  <button class="button">
    <slot>
    </slot>
  </button>
</template>

<script>
  export default {
    props: {
      name: {
        required: true
      },
      type: {
        required: false
      },
    },
    data() {

    },
    method: {

    }
  }
</script>


<style>
  .button {
    width: 80px;
    height: 30px;
    border-radius: 3px;
    background: #ecf5ff;
    border: 1px solid #b3d8ff;
  }

  button {
    outline: none;
  }
</style>