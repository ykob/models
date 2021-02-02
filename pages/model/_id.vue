<template lang="pug">
div
  h1
    |{{ $route.params.id }}
</template>

<script>
export default {
  computed: {
    webgl() {
      return this.$store.getters.webgl
    },
  },
  created() {
    console.log(this.webgl.glTFLoader)
  },
}
</script>

<style lang="scss" scoped></style>
