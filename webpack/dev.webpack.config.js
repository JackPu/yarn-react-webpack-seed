const path = require('path');
const webpackConfigAssign = require('webpack-config-assign');
const base = require('./base.webpack.config')

module.exports = webpackConfigAssign(base, {
  devServer: {
    // contentBase: path.join(__dirname, '../examples'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    inline: true,
    progress: true,
    quiet: true,
    compress: true,
    disableHostCheck: true,
  },
})