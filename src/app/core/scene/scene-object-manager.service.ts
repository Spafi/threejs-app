import { injectable } from 'inversify';
import { UpdatableObject } from '~components/interfaces/updatable-object.interface';
import * as THREE from 'three';
import BaseScene from './base-scene';

export type SceneObject = UpdatableObject | THREE.Object3D | null

@injectable()
export class SceneObjectManager {
    private sceneObjects: UpdatableObject[] = [];
    private scene: THREE.Scene;

    constructor() {
        this.scene = new THREE.Scene();
    }

    setScene( scene: BaseScene ) {
        this.scene = scene.scene
    }

    add( sceneObject: SceneObject ) {
        if ( sceneObject === null ) return
        if ( sceneObject instanceof THREE.Object3D ) {
            this.scene.add( sceneObject );
        } else {
            this.sceneObjects.push( sceneObject );
            this.scene.add( sceneObject.mesh );
        }
    }

    update() {
        this.sceneObjects.forEach( ( sceneObject ) => {
            if ( typeof ( sceneObject as any ).update === 'function' ) {
                ( sceneObject as any ).update();
            }
        } );
    }

    getScene(): THREE.Scene {
        return this.scene;
    }
}
