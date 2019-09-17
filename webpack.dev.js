const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        })
    ],
    devtool: '#eval-source-map'
});
