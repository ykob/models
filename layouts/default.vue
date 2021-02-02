<template lang="pug">
div(
  :class = 'classnames'
  )
  .page(
    v-if = 'isLoaded'
    )
    Nuxt
  canvas#canvas-webgl
</template>

<script>
export default {
  data: () => ({
    isLoaded: false
  }),
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
    const { getters } = this.$store

    window.addEventListener('resize', this.resize)

    this.resize()
    this.update()
    await this.webgl.init(getters.resolution)
    this.webgl.start()
    this.isLoaded = true
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

<style lang="scss" scoped>
.page {
  position: relative;
  z-index: z(page);
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: z(canvas);
}
</style>
