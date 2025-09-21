const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

function buildPlugins({ paths, isDev }) {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: 'index.html',
    }),
    new Dotenv({
      path: paths.dotenv,
    }),
    isDev && new ReactRefreshWebpackPlugin(),
  ]
}

module.exports = buildPlugins
