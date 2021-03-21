import WebGLContent from '@/webgl/'
import pages from '@/assets/pages.json'

const webgl = new WebGLContent()

export const state = () => ({
  isMobile: false,
  isLandscape: false,
  isLoadedWebGL: false,
  isShownHeader: false,
  pages,
  resolution: {
    x: 0,
    y: 0,
  },
})

export const getters = {
  webgl() {
    return webgl
  },
}

export const mutations = {
  resize(state, { x, y }) {
    state.resolution.x = x
    state.resolution.y = y
    state.isMobile = x < 768
    state.isLandscape = x > y
  },
  loadedWebGL(state) {
    state.isLoadedWebGL = true
  },
  showHeader(state, bool) {
    state.isShownHeader = bool
  },
}
