<template lang="pug">
div
  h1
    |Sword
  NuxtLink(
    to = '/'
    )
    |Home
</template>

<script>
export default {
  computed: {
    webgl() {
      return this.$store.getters.webgl
    },
  },
  created() {
    this.webgl.load('sword')
  },
  destroyed() {
    this.webgl.destroy('sword')
  },
}
</script>

<style lang="scss" scoped></style>
