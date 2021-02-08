import * as THREE from 'three'

export default class Floor extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.PlaneGeometry(100, 100, 32, 32)
    const material = new THREE.MeshStandardMaterial({
      color: '#ffffff',
    })

    super(geometry, material)
    this.receiveShadow = true
  }
}
