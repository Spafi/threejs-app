import { injectable } from 'inversify';

@injectable()
export default class AnimationService {
    private animations: ( () => void )[] = [];

    register( animation: () => void ) {
        this.animations.push( animation );
    }

    unregister( animation: () => void ) {
        const index = this.animations.indexOf( animation );
        if ( index >= 0 ) {
            this.animations.splice( index, 1 );
        }
    }

    update() {
        this.animations.forEach( ( animation ) => animation() );
    }
}
