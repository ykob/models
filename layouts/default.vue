<template lang="pug">
div(
  :class = 'classnames'
  )
  .page
    Nuxt
  ExternalLinks
  canvas#canvas-webgl
</template>

<script>
export default {
  computed: {
    classnames() {
      const { state } = this.$store

      return {
        pc: !state.isMobile,
        mobile: state.isMobile,
        portrait: !state.isLandscape,
        landscape: state.isLandscape,
      }
    },
    webgl() {
      return this.$store.getters.webgl
    },
  },
  async mounted() {
    const { state, commit } = this.$store

    window.addEventListener('resize', this.resize)

    this.resize()
    this.update()
    await this.webgl.init(state.resolution)
    this.webgl.start()
    commit('loadedWebGL')
  },
  methods: {
    update() {
      this.webgl.update()
      requestAnimationFrame(this.update)
    },
    resize() {
      const { state, commit } = this.$store

      commit('resize', {
        x: window.innerWidth,
        y: window.innerHeight,
      })
      this.webgl.resize(state.resolution, state.isLandscape)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: z(page);
  pointer-events: none;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: z(canvas);
}
</style>
