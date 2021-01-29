import * as THREE from 'three'

export const state = () => ({
  resolution: new THREE.Vector2(),
  webgl: null,
  isMobile: false,
})

export const getters = {
  webgl(state) {
    return state.webgl
  },
}

export const mutations = {
  resize(state, { x, y }) {
    state.resolution.set(x, y)
    state.isMobile = x < 768
  },
}
