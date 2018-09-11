const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const path = require('path');

const devMode = process.env.NODE_ENV !== 'production'

const ExtractTextPlugin = new _ExtractTextPlugin('[name].bundle.css');

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, './stylelint.config.js'),
  context: path.resolve(__dirname, '../css'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
});

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  inject: true,
  template: path.join(__dirname, '../src/template.ejs'),
  filename: 'index.html',
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  // both options are optional
  chunkFilename: "[id].css"
});

const OptimizeCssAssetsPlugin = new _OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: cssnano,
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
})

module.exports = {
  ExtractTextPlugin,
  HtmlWebpackPlugin,
  MiniCssExtractPlugin,
  StyleLintPlugin,
  OptimizeCssAssetsPlugin,
};
