import * as THREE from 'three';
import { SceneObjectManager } from './scene-object-manager.service';
import { environment } from '~environments/environment';

export default abstract class BaseScene {
    protected axesHelper: THREE.AxesHelper | null = null;
    scene: THREE.Scene = new THREE.Scene();

    abstract initialize(): void;

    abstract getObjectManager(): SceneObjectManager

    protected addAxesHelper( size: number = environment.axesHelper.size ) {
        if ( environment.axesHelper.enable ) {
            this.axesHelper = new THREE.AxesHelper( size )
        }
    }
}
