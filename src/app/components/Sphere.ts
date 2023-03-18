import * as THREE from 'three';
import { UpdatableObject } from '~components/interfaces/updatable-object.interface';

export default class Sphere implements UpdatableObject {
    mesh: THREE.Mesh;
    velocity: number;

    constructor( radius: number, color: number ) {
        const geometry = new THREE.SphereGeometry( radius, 32, 32 );
        const material = new THREE.MeshPhongMaterial( { color } );
        this.mesh = new THREE.Mesh( geometry, material );
        this.velocity = 0.02;
    }

    update() {
        if ( this.mesh.position.y <= -2 || this.mesh.position.y >= 2 ) {
            this.velocity = -this.velocity;
        }
        this.mesh.position.y += this.velocity;
    }
}
