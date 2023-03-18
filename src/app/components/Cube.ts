import * as THREE from 'three';
import { UpdatableObject } from './interfaces/updatable-object.interface';

export default class Cube implements UpdatableObject {
    mesh: THREE.Mesh;

    constructor( size: number, color: number ) {
        const geometry = new THREE.BoxGeometry( size, size, size );
        const material = new THREE.MeshBasicMaterial( { color } );
        this.mesh = new THREE.Mesh( geometry, material );
    }

    update() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}
