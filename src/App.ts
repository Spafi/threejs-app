import { inject, injectable } from 'inversify';
import { SceneManager } from '~core/scene/scene-manager.service';

@injectable()
export class App {
    constructor(
        @inject( SceneManager ) private sceneManager: SceneManager
    ) {
        this.sceneManager.animate();
    }

}
