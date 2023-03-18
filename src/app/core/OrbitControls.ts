import { injectable } from 'inversify';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@injectable()
export default class OrbitControlsWrapper {
    private controls: OrbitControls | null = null;

    constructor(
        camera: THREE.Camera,
        renderer: THREE.WebGLRenderer,
        enabled: boolean,
        config: {
            enableDamping: boolean;
            dampingFactor: number;
            screenSpacePanning: boolean;
            minDistance: number;
            maxDistance: number;
        }
    ) {
        if ( enabled ) {
            this.controls = new OrbitControls( camera, renderer.domElement );
            this.controls.enableDamping = config.enableDamping;
            this.controls.dampingFactor = config.dampingFactor;
            this.controls.screenSpacePanning = config.screenSpacePanning;
            this.controls.minDistance = config.minDistance;
            this.controls.maxDistance = config.maxDistance;
        }
    }

    update() {
        if ( this.controls ) {
            this.controls.update();
        }
    }
}
