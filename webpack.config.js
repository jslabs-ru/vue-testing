var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const NODE_ENV = process.env.NODE_ENV;

const plugins = [
    new VueLoaderPlugin()
];

var config = {
    mode: 'development',
    optimization: {
        minimize: false
    },
    context: __dirname,
    target: 'node',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': __dirname
        }
    },
    entry: {
        test: [
            path.join(__dirname, 'test.js')
        ]
    },
    output: {
        path: path.join(__dirname, '/dist_tests'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        optimizeSSR: false
                    }
                }
            }
        ]
    },
    plugins
}

module.exports = config;
