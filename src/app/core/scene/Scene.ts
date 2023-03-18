import { inject, injectable } from 'inversify';
import BaseScene from '~core/scene/base-scene';
import Sphere from '~components/Sphere';
import Cube from '~components/Cube';
import { SceneObjectManager } from '~core/scene/scene-object-manager.service';
import { AmbientLightService } from '../../services/ambient-light.service';

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
        this.addAmbientLight();
        this.sceneObjectManager.setScene( this )
        this.sceneObjectManager.add( this.ambientLight );
        this.sceneObjectManager.add( this.axesHelper );

        const cube = new Cube( 1, 0x00ff00 );
        cube.mesh.position.set( -2, 0, 0 );
        this.sceneObjectManager.add( cube );

        const sphere = new Sphere( 1, 0xff0000 );
        sphere.mesh.position.set( 2, 0, 0 );
        this.sceneObjectManager.add( sphere );

    }

}
