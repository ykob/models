import * as THREE from 'three'

export default class Camera extends THREE.PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super(fov, aspect, near, far)

    this.cameraResolution = new THREE.Vector2()
    this.time = 0
    this.isActive = false
  }

  start() {
    this.far = 1000
    this.setFocalLength(50)
    this.position.set(0, 0, 45)
    this.lookAt(new THREE.Vector3())
    this.isActive = true
  }

  update(time) {
    if (this.isActive === false) return
    this.time += time
  }

  resize(resolution, isMobile, isLandscape) {
    this.aspect = resolution.x / resolution.y
    if (isMobile && !isLandscape) {
      this.clearViewOffset()
    } else {
      this.setViewOffset(
        resolution.x * 1.4,
        resolution.y * 1.4,
        0,
        resolution.y * 0.2,
        resolution.x,
        resolution.y
      )
    }
    this.updateProjectionMatrix()
  }
}
