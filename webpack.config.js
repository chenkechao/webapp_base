'use strict';
var webpack = require('webpack'),
    path = require('path');

var APP = path.join(__dirname ,'/webapp');

module.exports = {
    context:APP,
    entry:{
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output:{
        path:APP,
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                exclude: /node_modules|bower_components/
            },
            ,{
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader : 'file-loader?name=res/[name].[ext]?[hash]'
            }
        ]
    },
    resolve:{
        extensions: ['', '.js', '.json', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};