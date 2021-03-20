<template lang="pug">
.header
  |Models
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$store.state.isMobile
    },
    buttonSize() {
      return this.isMobile ? '32px' : '40px'
    },
    iconSize() {
      return this.isMobile ? 32 : 40
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
  .pc & {
    height: 40px;
    top: 5%;
    font-size: 32px;
  }
  .mobile & {
    height: 32px;
    top: 16px;
    font-size: 21px;
  }
}
</style>
