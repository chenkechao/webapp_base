'use strict';
var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var APP = path.join(__dirname ,'/webapp');

module.exports = {
    context:APP,
    entry:{//entry是入口文件，可以多个，代表要编译那些js
        index: ['webpack/hot/dev-server', './src/js/bootstrap.js'],
        login:['./src/js/login.js']
    },
    output:{
        path:path.join(APP,'/dist/js'),
        filename:'[name].[hash].js',
        chunkFilename:'[chunkhash:8].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            },
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
            }
        ]
    },
    resolve:{
        root: [//默认搜索路径配置step1
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'bower_components')
        ],
        extensions: ['', '.js', '.json', '.css']//自行补全哪些文件后缀
    },
    externals:{//require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ResolverPlugin(//默认搜索路径配置step2
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new HtmlWebpackPlugin({
            title:'custom template',
            filename:'index.html',
            template:'./src/tmpl/index.html',
            inject:'body',
            hash:true,
            chunks:['index','vendor']//这个模板对应上面那个节点
        }),
        new HtmlWebpackPlugin({
            title:'login',
            filename:'login.html',
            template:'./src/tmpl/login.html',
            inject:'body',
            hash:true,
            chunks:['login','vendor']
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({//公共组件提取
            name: 'vendor',//生成的公共组件名称
            chunks:['index','login']//选择哪些js提取公共组件
        })
    ]
};