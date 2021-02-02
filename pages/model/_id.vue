<template lang="pug">
div
  h1
    |{{ $route.params.id }}
</template>

<script>
import * as THREE from 'three'

export default {
  data: () => ({
    light1: null,
    light2: null,
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

    await glTFLoader.loadAsync(`/models/sword_v1.glb`).then((response) => {
      model = response.scene.children
    })

    this.light1 = new THREE.PointLight('#ffffff', 1, 100)
    this.light2 = new THREE.AmbientLight('#cccccc')
    this.light1.position.set(20, 20, 20)
    this.sword = model.find((o) => {
      return o.name === 'Sword'
    })

    scene.add(this.light1)
    scene.add(this.light2)
    scene.add(this.sword)
  },
  destroyed() {
    const { scene } = this.webgl

    scene.remove(this.light1)
    scene.remove(this.light2)
    scene.remove(this.sword)
  },
}
</script>

<style lang="scss" scoped></style>
