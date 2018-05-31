const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

VENDOR_LIBS = [
    "react",
    "react-dom",
    "react-redux",
    "react-router",
    "redux",
    "cross-fetch",
    "lodash",
    "redux-logger",
    "redux-thunk"
];


const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name][chunkhash].js",
        //publicPath: '/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            },
                        }
                    ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

}

module.exports = config;