const path = require('path');
const webpackConfigAssign = require('webpack-config-assign');

const base = require('./base.webpack.config')
const plugins = require('./plugins')

module.exports = webpackConfigAssign(base, {
  mode: 'production',
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.OptimizeCssAssetsPlugin,
    plugins.HtmlWebpackPlugin
  ]
})