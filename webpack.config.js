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