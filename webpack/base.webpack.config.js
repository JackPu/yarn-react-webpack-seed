const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    module: {
        rules: [
            loaders.cssLoader,
            loaders.sassLoader,
            loaders.svgLoader,
            loaders.jsLoader,
            // loaders.eslintLoader,
            loaders.htmlLoader,
            loaders.imageLoader,
        ]
    },
    performance: {
        hints: false
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
    },
    plugins: [
        // plugins.ExtractTextPlugin,
        plugins.MiniCssExtractPlugin,
        plugins.HtmlWebpackPlugin
    ]
};