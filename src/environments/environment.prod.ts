import { Environment } from './environment';

export const environment: Environment = {
    production   : true,
    axesHelper   : {
        enable: false,
        size  : 5
    },
    ambientLight : {
        enable   : true,
        intensity: 0.5,
        color    : 0xFFFFFF
    },
    orbitControls: {
        enable            : true,
        enableDamping     : true,
        dampingFactor     : 0.05,
        screenSpacePanning: false,
        minDistance       : 10,
        maxDistance       : 50
    }
}
