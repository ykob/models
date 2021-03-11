import * as THREE from 'three'

export default class WebGLContent {
  constructor() {
    this.renderer = null
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock({
      autoStart: false,
    })
    this.camera = null
    this.floor = null
    this.controls = null
    this.glTFLoader = null
    this.directionalLight = null
    this.pointLight1 = null
    this.pointLight2 = null
    this.directionalLight = null
    this.ambientLight = null
    this.models = Array(4)
    this.currentNum = 0
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
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputEncoding = THREE.GammaEncoding

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
      import('./Floor').then((module) => {
        const Module = module.default
        this.floor = new Module()
        this.floor.position.y = -10
        this.floor.rotation.x = (-90 * Math.PI) / 180
        this.scene.add(this.floor)
      }),
    ])

    this.controls = new Controls(this.camera, this.renderer.domElement)
    this.controls.dampingFactor = 0.1
    this.controls.enabled = false
    this.controls.enableDamping = true
    this.controls.enablePan = false
    this.controls.maxDistance = 45 * 2
    this.controls.minDistance = 45 / 2
    this.controls.rotateSpeed = 0.8
    this.directionalLight = new THREE.DirectionalLight('#ffffff', 0.5)
    this.pointLight1 = new THREE.PointLight('#ffffff', 0.2, 200)
    this.pointLight2 = new THREE.PointLight('#ffffff', 0.2, 200)
    this.ambientLight = new THREE.AmbientLight('#ffffff', 0.7)
    this.directionalLight.position.set(-0.25, 1, 0.25)
    this.directionalLight.shadow.camera.top = 20
    this.directionalLight.shadow.camera.right = 20
    this.directionalLight.shadow.camera.bottom = -20
    this.directionalLight.shadow.camera.left = -20
    this.directionalLight.castShadow = true
    this.directionalLight.shadow.mapSize.width = 2048
    this.directionalLight.shadow.mapSize.height = 2048
    this.pointLight1.position.set(20, 0, 20)
    this.pointLight2.position.set(-20, 0, -20)
    this.scene.add(this.directionalLight)
    this.scene.add(this.pointLight1)
    this.scene.add(this.pointLight2)
    this.scene.add(this.ambientLight)
    this.resize(resolution)
  }

  start() {
    this.clock.start()
  }

  async load(id) {
    let model

    switch (id) {
      case 'sword':
        await this.glTFLoader
          .loadAsync('/models/sword.glb')
          .then((response) => {
            model = response.scene.children.find((o) => {
              return o.name === 'Sword'
            })
            for (let i = 0; i < model.children.length; i++) {
              model.children[i].castShadow = true
            }
          })
        break
      default:
        break
    }

    this.currentNum = (this.currentNum + 1) % this.models.length
    this.models[this.currentNum] = model
    this.scene.add(this.models[this.currentNum])
  }

  destroy(id) {
    this.scene.remove(this.models[this.currentNum])
  }

  update() {
    if (this.clock.running === false) return

    // const time = this.clock.running === true ? this.clock.getDelta() : 0

    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  resize(resolution, isLandscape) {
    if (this.camera) this.camera.resize(resolution, isLandscape)
    if (this.renderer) this.renderer.setSize(resolution.x, resolution.y)
  }

  enableControl() {
    if (this.controls) {
      this.controls.enabled = true
      this.controls.autoRotate = true
    }
  }

  disableControl() {
    if (this.controls) {
      this.controls.reset()
      this.controls.enabled = false
      this.controls.autoRotate = false
    }
  }
}
