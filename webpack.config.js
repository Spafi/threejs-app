const path                    = require( 'path' );
const HtmlWebpackPlugin       = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin }  = require( 'clean-webpack-plugin' );
const { TsconfigPathsPlugin } = require( 'tsconfig-paths-webpack-plugin' );


module.exports = {
    entry    : './src/index.ts',
    output   : {
        path    : path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js',
    },
    stats    : 'verbose',
    module   : {
        rules: [
            {
                test   : /\.tsx?$/,
                use    : 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve  : {
        extensions: [ '.tsx', '.ts', '.js', '.scss' ],
        alias     : {
            '~app'         : path.resolve( __dirname, 'src/app/' ),
            '~core'        : path.resolve( __dirname, 'src/app/core/' ),
            "~components"  : path.resolve( __dirname, 'src/app/components/' ),
            "~config"      : path.resolve( __dirname, 'src/app/config/' ),
            "~modules"     : path.resolve( __dirname, 'src/app/modules/' ),
            "~services"    : path.resolve( __dirname, 'src/app/services/' ),
            "~shaders"     : path.resolve( __dirname, 'src/app/shaders/' ),
            "~state"       : path.resolve( __dirname, 'src/app/state/' ),
            "~utils"       : path.resolve( __dirname, 'src/app/utils/' ),
            "~models"      : path.resolve( __dirname, 'src/app/models/' ),
            "~textures"    : path.resolve( __dirname, 'src/app/textures/' ),
            "~assets"      : path.resolve( __dirname, 'src/assets/' ),
            "~environments": path.resolve( __dirname, 'src/environments/' ),
            "~public"      : path.resolve( __dirname, 'src/public/' ),
            "~styles"      : path.resolve( __dirname, 'src/styles/' ),
            // Add any other aliases here

        },
        plugins   : [
            new TsconfigPathsPlugin(),
        ]
    },
    devServer: {
        static  : {
            directory: path.join( __dirname, 'dist' ),
        },
        open    : true,
        hot     : true,
        compress: true,
        port    : 9000,
    },
    plugins  : [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin( {
                                   template: './src/public/index.html', // Adjust this to the location of your index.html file
                               } ),
    ],
};
