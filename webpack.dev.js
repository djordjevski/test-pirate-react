const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(["dist"]),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
});