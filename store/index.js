import * as THREE from 'three'
import WebGLContent from '@/webgl/'

const webgl = new WebGLContent()
const resolution = new THREE.Vector2()

export const state = () => ({
  isMobile: false,
})

export const getters = {
  resolution() {
    return resolution
  },
  webgl() {
    return webgl
  },
}

export const mutations = {
  resize(state, { x, y }) {
    resolution.set(x, y)
    state.isMobile = x < 768
  },
}
