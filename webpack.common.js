var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    "css-loader",
                    "sass-loader"

                ]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: '/node_modules/',
                options: {
                    appendTsSuffixTo: [/\.vue$/]

                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    },
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href',
                        'b-img': 'src',
                        'b-img-lazy': ['src', 'blank-src'],
                        'b-card': 'img-src',
                        'b-card-img': 'src',
                        'b-card-img-lazy': ['src', 'blank-src'],
                        'b-carousel-slide': 'img-src',
                        'b-embed': 'src'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.ts', '.vue', '.json']
    },
    performance: {
        hints: false
    },
}
