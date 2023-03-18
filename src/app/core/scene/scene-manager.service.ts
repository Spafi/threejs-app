import { inject, injectable } from 'inversify';
import BaseScene from '~core/scene/base-scene';
import { SceneService } from '~core/scene/scene.service';

@injectable()
export class SceneManager {
    private currentScene: BaseScene;
    private scenes: Map<string, BaseScene> = new Map();

    constructor(
        @inject( SceneService ) private sceneService: SceneService
    ) {
        this.currentScene = this.sceneService.getScene();
        this.currentScene.initialize();
    }

    addScene( name: string, scene: BaseScene ): void {
        this.scenes.set( name, scene );
    }

    removeScene( name: string ): void {
        this.scenes.delete( name );
    }

    getScene( name: string ): BaseScene | undefined {
        return this.scenes.get( name );
    }

    switchToScene( name: string ): void {
        const scene = this.scenes.get( name );
        if ( scene ) {
            scene.initialize();
            this.currentScene = scene;
        } else {
            console.warn( `Scene ${ name } not found` );
        }
    }

    getCurrentScene(): BaseScene {
        return this.currentScene;
    }

    update(): void {
        this.currentScene.getObjectManager().update();
    }
}
