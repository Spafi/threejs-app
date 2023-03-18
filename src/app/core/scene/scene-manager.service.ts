import { inject, injectable } from 'inversify';
import BaseScene from '~core/scene/base-scene';
import { SceneService } from '~core/scene/scene.service';
import OrbitControlsWrapper from '../OrbitControls';
import AnimationService from '../../services/animation.service';
import Renderer from '../Renderer';
import Camera from '../Camera';

@injectable()
export class SceneManager {
    private currentScene: BaseScene;
    private scenes: Map<string, BaseScene> = new Map();

    constructor(
        @inject( SceneService ) private sceneService: SceneService,
        @inject( Camera ) private camera: Camera,
        @inject( Renderer ) private renderer: Renderer,
        @inject( AnimationService ) private animationService: AnimationService,
        @inject( OrbitControlsWrapper ) private orbitControlsWrapper: OrbitControlsWrapper
    ) {
        this.animationService.register( () => {this.update();} );
        this.currentScene = this.sceneService.getScene();
        this.currentScene.initialize();
        this.camera.setPosition( 0, 0, 5 );
        this.camera.lookAt( 0, 0, 0 );
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
            console.error( `Scene ${ name } not found` );
        }
    }

    getCurrentScene(): BaseScene {
        return this.currentScene;
    }

    update(): void {
        this.currentScene.getObjectManager().update();
    }

    tick() {
        requestAnimationFrame( () => this.tick() );
        this.orbitControlsWrapper.update();
        this.animationService.update();

        this.renderer.render(
            this.currentScene.scene,
            this.camera.camera
        );
    }
}
