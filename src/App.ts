import { inject, injectable } from 'inversify';
import Camera from '~core/Camera';
import Renderer from '~core/Renderer';
import AnimationService from '~services/animation.service';
import OrbitControlsWrapper from '~core/OrbitControls'
import { ResizeService } from '~services/resize.service';
import { SceneManager } from '~core/scene/scene-manager.service';
import { SceneService } from '~core/scene/scene.service';
import { AmbientLightService } from './app/services/ambient-light.service';

@injectable()
export class App {

    constructor(
        @inject( Camera ) private camera: Camera,
        @inject( Renderer ) private renderer: Renderer,
        @inject( AnimationService ) private animationService: AnimationService,
        @inject( OrbitControlsWrapper ) private orbitControlsWrapper: OrbitControlsWrapper,
        @inject( SceneManager ) private sceneManager: SceneManager,
        @inject( SceneService ) private sceneService: SceneService,
        @inject( ResizeService ) private resizeService: ResizeService,
        @inject( AmbientLightService ) private ambientLightService: AmbientLightService
    ) {

        this.camera.setPosition( 0, 0, 5 );
        this.camera.lookAt( 0, 0, 0 );

        this.sceneManager.addScene( 'mainScene', sceneService.getScene() )

        this.animationService.register( () => {
            this.sceneManager.update();
        } );


        this.animate();
    }

    animate() {
        requestAnimationFrame( () => this.animate() );
        this.orbitControlsWrapper.update();
        this.animationService.update();

        this.renderer.render(
            this.sceneManager.getCurrentScene().scene,
            this.camera.camera
        );

    }
}
