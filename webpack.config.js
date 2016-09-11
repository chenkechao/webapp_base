'use strict';
var webpack = require('webpack'),
    path = require('path');

var APP = path.join(__dirname ,'/webapp');

module.exports = {
    context:APP,
    entry:{
        app: ['webpack/hot/dev-server', './src/js/bootstrap.js']
    },
    output:{
        path:path.join(APP,'/dist/js'),
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
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    resolve:{
        alias: {
            js: path.join(APP, "/src/js")
        },
        root: [//默认搜索路径配置step1
            path.join(__dirname, "bower_components")
        ],
        extensions: ['', '.js', '.json', '.css']//自行补全哪些文件后缀
    },
    externals:{//require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中
        jquery: "window.jQuery",
        $: "window.jQuery"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ResolverPlugin(//默认搜索路径配置step2
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]
};