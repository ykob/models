<template lang="pug">
transition
  .header(
    v-show = 'isShown'
    )
    |Models
</template>

<script>
export default {
  computed: {
    isShown() {
      return this.$store.state.isShownHeader
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  right: 0;
  left: 0;
  z-index: z(header);
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.06em;
  @include l-pc {
    height: 40px;
    top: 5%;
    font-size: 32px;
  }
  @mixin l-mobile {
    height: 32px;
    top: 16px;
    font-size: 21px;
  }
}
</style>
