<template>
  <div :class="`${prefixCls}-ripple`">
    <div :class="`${prefixCls}-content`">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  const prefixCls = 'atom-button';

  export default {
    name: prefixCls,
    data() {
      return {
        prefixCls: prefixCls
      }
    }
  }
</script>