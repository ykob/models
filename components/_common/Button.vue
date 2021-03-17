<template lang="pug">
.button(
  :is = 'tag'
  :to = 'to'
  :style = 'styles'
  :class = 'classnames'
  @click = '$emit("click", $event)'
  )
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '42px',
    },
    role: {
      type: String,
      default: 'common',
    },
    radius: {
      type: String,
      default: '3px',
    },
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height,
        borderRadius: this.radius,
      }
    },
    classnames() {
      return [`${this.role}`]
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  overflow: hidden;
  text-decoration: none;
  &.common {
    border: 0;
    color: #fff;
    background-color: #000;
  }
  &.transparent {
    border: 0;
    background-color: none;
  }
}
</style>
