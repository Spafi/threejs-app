import { inject, injectable } from 'inversify';
import Camera from '~core/Camera';
import Renderer from '~core/Renderer';

@injectable()
export class ResizeService {
    constructor(
        @inject( Camera ) private camera: Camera,
        @inject( Renderer ) private renderer: Renderer
    ) {
        window.addEventListener( 'resize', this.onWindowResize.bind( this ) );
    }

    onWindowResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.camera.updateAspect( width / height );
        this.renderer.setSize( width, height );
    }
}
