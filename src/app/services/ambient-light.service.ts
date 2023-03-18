import { injectable } from 'inversify';
import * as THREE from 'three';
import { environment } from '~environments/environment';

@injectable()
export class AmbientLightService {
    private readonly ambientLight: THREE.AmbientLight | null = null

    constructor() {
        if ( environment.ambientLight.enable ) {
            this.ambientLight = new THREE.AmbientLight( environment.ambientLight.color, environment.ambientLight.intensity );
        }
    }

    getLight(): THREE.AmbientLight | null {
        return this.ambientLight;
    }
}
