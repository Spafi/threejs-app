import { ContainerModule } from 'inversify';
import Scene from '~core/scene/Scene';
import { SceneObjectManager } from '~core/scene/scene-object-manager.service';
import { SceneManager } from '~core/scene/scene-manager.service';
import { SceneService } from '~core/scene/scene.service';

export const scenesModule = new ContainerModule( ( bind ) => {
    bind( SceneObjectManager ).toSelf().inSingletonScope();
    bind( Scene ).toSelf().inSingletonScope();
    bind( SceneManager ).toSelf().inSingletonScope();
    bind( SceneService ).toSelf().inSingletonScope();
} );
