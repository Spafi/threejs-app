export const environment: Environment = {
    production   : false,
    axesHelper   : {
        enable: true,
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

export interface Environment {
    production: boolean,
    axesHelper: {
        enable: boolean,
        size: number
    },
    ambientLight: {
        enable: boolean,
        intensity: number,
        color: number
    },
    orbitControls: {
        enable: boolean,
        enableDamping: boolean,
        dampingFactor: number,
        screenSpacePanning: boolean,
        minDistance: number,
        maxDistance: number,
    }
}
