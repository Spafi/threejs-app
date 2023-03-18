import * as THREE from 'three';

export interface UpdatableObject {
    mesh: THREE.Object3D;

    update(): void;
}
