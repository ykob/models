import * as THREE from 'three'
import WebGLContent from '@/webgl/'
import pages from '@/assets/pages.json'

const webgl = new WebGLContent()
const resolution = new THREE.Vector2()

export const state = () => ({
  isMobile: false,
  isLandscape: false,
  pages,
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
    state.isLandscape = x > y
  },
}
