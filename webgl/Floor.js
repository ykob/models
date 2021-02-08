import * as THREE from 'three'

export default class Floor extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.PlaneGeometry(50, 50, 32, 32)
    const material = new THREE.MeshStandardMaterial()

    super(geometry, material)
    this.receiveShadow = true
  }
}
