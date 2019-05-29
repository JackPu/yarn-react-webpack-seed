/*eslint-disable*/
// Karma configuration
const webpackConfig = require('../webpack/base.webpack.config')
console.log(123123);
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jquery-3.4.0'],


    // list of files / patterns to load in the browser
    files: [
        //'src/*.js',
        './specs/**/*.test.js'
    ],
    webpack: webpackConfig,

    // list of files to exclude
    exclude: [

    ],
    preprocessors: {
        './specs/**/*.test.js': ['webpack'],
        '../src/*.js': ['coverage'],
    },

    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    concurrency: Infinity,
    // Configure code coverage reporter
    coverageReporter: {
        reporters: [
            // generates ./coverage/lcov.info
            {type:'lcovonly', subdir: '.'},
            // generates ./coverage/coverage-final.json
            {type:'json', subdir: '.'},
        ]
    },
    plugins: [
        'karma-webpack',
        'karma-jasmine',
        'karma-chai',
        'karma-jquery',
        'karma-chrome-launcher',
        'karma-sourcemap-loader',
        'karma-coverage',
    ],
  })
}