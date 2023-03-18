import * as THREE from 'three';
import { injectable } from 'inversify';

@injectable()
export default class Renderer {
    renderer: THREE.WebGLRenderer;

    constructor() {
        const canvas = document.createElement( 'canvas' );
        document.body.appendChild( canvas );

        this.renderer = new THREE.WebGLRenderer( { canvas, antialias: true } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setPixelRatio( window.devicePixelRatio );

        document.body.appendChild( this.renderer.domElement );
    }

    setSize( width: number, height: number ) {
        this.renderer.setSize( width, height );
    }

    setClearColor( color: number, alpha: number = 1 ) {
        this.renderer.setClearColor( color, alpha );
    }

    render( scene: THREE.Scene, camera: THREE.Camera ) {
        this.renderer.render( scene, camera );
    }
}
