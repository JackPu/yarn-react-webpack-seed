const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const plugins = require('./plugins');


const cssLoader = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.join(__dirname, './postcss.config.js'),
        }
      },
    },
  ],
};
const sassLoader = {
  test: /\.scss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.join(__dirname, './postcss.config.js'),
        }
      },
    },
    {
      loader: 'sass-loader',
    },
  ],
};

const svgLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: 'image-webpack-loader',
    },
    {
      loader: 'base64-inline-loader',
    }
  ],
};

const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};
const eslintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: path.join(__dirname, '../.eslintrc')
    },
  }
};

const htmlLoader = {
  test: /\.html$/,
  use: 'file-loader?name=[name].[ext]'
};

const imageLoader = {
  test: /\.(png|jpg|jpeg|gif)$/,
  use: 'url-loader?limit=1024&name=images/[name]_[hash].[ext]'
};

module.exports = {
  jsLoader,
  svgLoader,
  imageLoader,
  // eslintLoader,
  sassLoader,
  cssLoader,
  htmlLoader,
};
