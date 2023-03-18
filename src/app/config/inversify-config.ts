import 'reflect-metadata';
import { Container } from 'inversify';
import { coreModule } from '~modules/core.module';
import { controlsModule } from '~modules/controls.module';
import { scenesModule } from '~modules/scenes.module'

const container = new Container();

const modules = [
    coreModule,
    controlsModule,
    scenesModule
]

container.load( ...modules );

export default container;
