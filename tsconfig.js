const { generatePaths } = require( 'tsconfig-paths-autogen' );
const { onmyjs }        = require( 'onmyjs' );

module.exports = {
    compilerOptions: {
        target                          : 'esnext',
        module                          : 'esnext',
        moduleResolution                : 'node',
        importHelpers                   : true,
        forceConsistentCasingInFileNames: true,
        strict                          : true,
        noImplicitReturns               : true,
        noFallthroughCasesInSwitch      : true,
        declaration                     : false,
        esModuleInterop                 : true,
        sourceMap                       : true,
        downlevelIteration              : true,
        experimentalDecorators          : true,
        emitDecoratorMetadata           : true,
        lib                             : [ 'es6', 'dom' ],
        types                           : [ 'reflect-metadata' ],
        outDir                          : 'dist',
        baseUrl                         : './src',
        paths                           :
            generatePaths( './src', {
                rootAlias                    : '~',
                maxDirectoryDepth            : 3,
                excludeAliasForSubDirectories: [ 'components' ],
            } ),
        allowSyntheticDefaultImports    : true
    },
    include        : [
        'src/**/*.ts'
    ]
}
onmyjs( module.exports, undefined, true );



