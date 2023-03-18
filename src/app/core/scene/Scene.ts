import { inject, injectable } from 'inversify';
import BaseScene from '~core/scene/base-scene';
import Sphere from '~components/Sphere';
import Cube from '~components/Cube';
import { SceneObjectManager } from '~core/scene/scene-object-manager.service';
import { AmbientLightService } from '~services/ambient-light.service';
import * as THREE from 'three'
import { gsap } from 'gsap'

@injectable()
export default class Scene extends BaseScene {
    constructor(
        @inject( SceneObjectManager ) private sceneObjectManager: SceneObjectManager,
        @inject( AmbientLightService ) private ambientLightService: AmbientLightService
    ) {
        super();
    }

    getObjectManager(): SceneObjectManager {
        return this.sceneObjectManager
    }


    initialize(): void {
        this.addAxesHelper();
        this.sceneObjectManager.setScene( this )
        this.sceneObjectManager.add( this.ambientLightService.getLight() );
        this.sceneObjectManager.add( this.axesHelper );

        const colorChangingSphere = this.createColorChangingSphere();
        this.sceneObjectManager.add( colorChangingSphere );

        this.createCube()
        this.createSphere()
    }

    private createCube() {
        const cube = new Cube( 1, 0x00ff00 );
        cube.mesh.position.set( -2, 0, 0 );
        this.sceneObjectManager.add( cube );
    }

    private createSphere() {
        const sphere = new Sphere( 1, 0xff0000 );
        sphere.mesh.position.set( 2, 0, 0 );
        this.sceneObjectManager.add( sphere );
    }

    private createColorChangingSphere(): Sphere {
        const sphere = new Sphere( 1, 0x8632F6 );
        sphere.mesh.position.set( -3, 5, 0 );

        const targetColor = new THREE.Color( 0xFF0000 );
        const targetOpacity = 0.5;

        const animationValues = {
            r      : ( sphere.mesh.material as any ).color.r,
            g      : ( sphere.mesh.material as any ).color.g,
            b      : ( sphere.mesh.material as any ).color.b,
            opacity: 1
        };

        gsap.to( animationValues, {
            duration  : 2,
            r         : targetColor.r,
            g         : targetColor.g,
            b         : targetColor.b,
            opacity   : targetOpacity,
            onUpdate  : () => {
                const material = sphere.mesh.material as THREE.MeshPhongMaterial;
                material.color.setRGB( animationValues.r, animationValues.g, animationValues.b );
                material.opacity = animationValues.opacity;
                material.needsUpdate = true;
            },
            onComplete: () => {
                // To execute this branch, change repeat value to a positive number
                ( sphere.mesh.material as any ).transparent = true;
            },
            yoyo      : true,
            repeat    : -1
        } );

        return sphere;
    }
}
