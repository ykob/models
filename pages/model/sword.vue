<template lang="pug">
div
  h1
    |Sword
</template>

<script>
export default {
  data: () => ({
    sword: null,
  }),
  computed: {
    webgl() {
      return this.$store.getters.webgl
    },
  },
  async created() {
    const { glTFLoader, scene } = this.webgl
    let model

    await glTFLoader.loadAsync('/models/sword_v1.glb').then((response) => {
      model = response.scene.children
    })
    this.sword = model.find((o) => {
      return o.name === 'Sword'
    })
    scene.add(this.sword)
  },
  destroyed() {
    const { scene } = this.webgl

    scene.remove(this.sword)
  },
}
</script>

<style lang="scss" scoped></style>
