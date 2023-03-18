import { inject, injectable } from 'inversify';
import Scene from '~core/scene/Scene';
import { SceneObjectManager } from '~core/scene/scene-object-manager.service';
import { AmbientLightService } from '../../services/ambient-light.service';

@injectable()
export class SceneService {
    private readonly scene: Scene
    private readonly sceneObjectManager: SceneObjectManager;

    constructor(
        @inject( AmbientLightService ) ambientLightService: AmbientLightService
    ) {
        this.sceneObjectManager = new SceneObjectManager();
        this.scene = new Scene( this.sceneObjectManager, ambientLightService );

        this.scene.initialize();
    }

    getScene(): Scene {
        return this.scene
    }

    getSceneObjectManager(): SceneObjectManager {
        return this.sceneObjectManager;
    }
}
