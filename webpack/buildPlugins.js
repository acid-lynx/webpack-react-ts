const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

function buildPlugins(options) {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            filename: 'index.html',
        }),
        new Dotenv({
            path: options.paths.dotenv,
        })
    ]
}

module.exports = buildPlugins;

