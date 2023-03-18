import { environment } from '~environments/environment';
import * as THREE from 'three';
import { SceneObjectManager } from './scene-object-manager.service';

export default abstract class BaseScene {
    protected axesHelper: THREE.AxesHelper | null = null;
    protected ambientLight: THREE.AmbientLight | null = null;
    scene: THREE.Scene = new THREE.Scene();

    abstract initialize(): void;

    abstract getObjectManager(): SceneObjectManager

    protected addAxesHelper( size: number = environment.axesHelper.size ) {
        if ( environment.axesHelper.enable ) {
            this.axesHelper = new THREE.AxesHelper( size )
        }
    }

    protected addAmbientLight( color: number = environment.ambientLight.color, intensity: number = environment.ambientLight.intensity ) {
        if ( environment.ambientLight.enable ) {
            this.ambientLight = new THREE.AmbientLight( color, intensity )
        }
    }
}
