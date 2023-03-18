import Camera from '~core/Camera';
import Renderer from '~core/Renderer';
import OrbitControlsWrapper from '~app/core/OrbitControls';

import { ContainerModule } from 'inversify';
import { environment } from '~environments/environment';

export const controlsModule = new ContainerModule( ( bind ) => {
    bind( OrbitControlsWrapper ).toDynamicValue( ( context ) => {
        const camera = context.container.get( Camera );
        const renderer = context.container.get( Renderer );

        return new OrbitControlsWrapper(
            camera.camera,
            renderer.renderer,
            environment.orbitControls.enable,
            {
                enableDamping     : environment.orbitControls.enableDamping,
                dampingFactor     : environment.orbitControls.dampingFactor,
                screenSpacePanning: environment.orbitControls.screenSpacePanning,
                minDistance       : environment.orbitControls.minDistance,
                maxDistance       : environment.orbitControls.maxDistance
            }
        );
    } ).inSingletonScope();
} );
