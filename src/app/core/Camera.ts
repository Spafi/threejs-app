import * as THREE from 'three';
import { injectable } from 'inversify';

@injectable()
export default class Camera {
    camera: THREE.PerspectiveCamera;

    constructor(
        fov: number    = 75,
        aspect: number = window.innerWidth / window.innerHeight,
        near: number   = 0.1,
        far: number    = 1000
    ) {
        this.camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    }

    setPosition( x: number, y: number, z: number ) {
        this.camera.position.set( x, y, z );
    }

    lookAt( x: number, y: number, z: number ) {
        this.camera.lookAt( new THREE.Vector3( x, y, z ) );
    }

    updateAspect( aspect: number ) {
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
    }
}
