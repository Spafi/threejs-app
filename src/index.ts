import 'reflect-metadata';
import container from '~config/inversify-config';
import { App } from './App';

const app = container.get<App>( App );
