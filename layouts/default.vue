<template lang="pug">
div(
  :class = 'classnames'
  )
  Nuxt
</template>

<script>
export default {
  computed: {
    classnames() {
      const { state } = this.$store

      return {
        'pc': !state.isMobile,
        'mobile': state.isMobile,
        'portrait': !state.isLandscape,
        'landscape': state.isLandscape,
      }
    },
    webgl() {
      return this.$store.getters.webgl
    },
  },
  async mounted() {
    const { getters } = this.$store

    window.addEventListener('resize', this.resize)

    this.resize()
    this.update()
    await this.webgl.init(getters.resolution)
    this.webgl.start()
  },
  methods: {
    update() {
      if (this.webgl) this.webgl.update()
      requestAnimationFrame(this.update)
    },
    resize() {
      const { getters, commit } = this.$store

      commit('resize', {
        x: window.innerWidth,
        y: window.innerHeight,
      })
      if (this.webgl) this.webgl.resize(getters.resolution)
    },
  },
}
</script>

<style></style>
