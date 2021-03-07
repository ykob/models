<template lang="pug">
.wrap
  .content
    h1
      |Models
    p
      |It is my learning records of Blender.
    .d-f.jc-c
      Button(
        tag = 'NuxtLink'
        :to = 'to'
        :width = 'isMobile ? "144px" : "180px"'
        :height = 'isMobile ? "48px" : "56px"'
        :radius = 'isMobile ? "24px" : "28px"'
        )
        |Enter
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$store.state.isMobile
    },
    to() {
      return `/model/${this.$store.state.pages[0].id}/`
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  pointer-events: auto;
  text-align: center;
}
h1 {
  margin: 0;
  font-size: 9vw;
}
p {
  font-size: 2vw;
}
</style>
