import * as THREE from 'three'

export default class WebGLContent {
  constructor() {
    this.renderer = null
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock({
      autoStart: false,
    })
    this.camera = null
    this.controls = null
    this.glTFLoader = null
  }

  async init(resolution) {
    const canvas = document.getElementById('canvas-webgl')
    let Controls

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    this.renderer.setClearColor(0x000000, 0.0)

    await Promise.all([
      import('three/examples/jsm/controls/OrbitControls').then((module) => {
        Controls = module.OrbitControls
      }),
      import('three/examples/jsm/loaders/GLTFLoader').then((module) => {
        const Module = module.GLTFLoader
        this.glTFLoader = new Module()
      }),
      import('./Camera').then((module) => {
        const Module = module.default
        this.camera = new Module()
        this.camera.start()
      }),
    ])

    this.controls = new Controls(this.camera, this.renderer.domElement)
    this.resize(resolution)
  }

  start() {
    this.clock.start()
  }

  update() {
    if (this.clock.running === false) return

    // const time = this.clock.running === true ? this.clock.getDelta() : 0

    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  resize(resolution) {
    if (this.camera) this.camera.resize(resolution)
    if (this.renderer) this.renderer.setSize(resolution.x, resolution.y)
  }
}
