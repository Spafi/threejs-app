import { ContainerModule } from 'inversify';
import AnimationService from '~services/animation.service';
import Camera from '~core/Camera';
import Renderer from '~core/Renderer';
import { ResizeService } from '~services/resize.service';
import { App } from '../../App';
import { AmbientLightService } from '../services/ambient-light.service';

export const coreModule = new ContainerModule( ( bind ) => {
    bind( App ).toSelf().inSingletonScope();
    bind( Renderer ).toSelf().inSingletonScope();
    bind( Camera ).toSelf().inSingletonScope();
    bind( ResizeService ).toSelf().inSingletonScope();
    bind( AnimationService ).toSelf().inSingletonScope();
    bind( AmbientLightService ).toSelf().inSingletonScope();
} );
