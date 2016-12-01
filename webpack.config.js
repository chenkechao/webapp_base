'use strict';
var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),//css文件抽取step1
    TransferWebpackPlugin = require('transfer-webpack-plugin');//文件copy组件step1

var APP = path.join(__dirname ,'/webapp');
var isProduction = function (){
    return true;
};

module.exports = {
    context:APP,
    devtool: isProduction()?null:'eval-source-map',
    entry:{//entry是入口文件，可以多个，代表要编译那些js
        app: ['webpack/hot/dev-server', './src/pages/app.js'],
        login:['./src/module/login/login.js']
    },
    output:{
        path:path.join(APP,'/dist'),
        //filename:'[name].[hash].js',
        filename:'[name].js',
        chunkFilename:'[chunkhash:8].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            },
            {test: /\.css$/, loader: 'style!css!'},
            //{test: /\.css$/, loader:ExtractTextPlugin.extract('style','css')},//css文件抽取step2
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
                loader : 'file-loader?name=res/[name].[ext]'//name代表输入到output的路径及名称
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
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
            template:'./src/pages/index.html',
            inject:'body',
            hash:true,
            chunksSortMode:'dependency',//在chunk被插入到html之前，你可以控制它们的排序
            chunks:['app','vendor']//这个模板对应上面那个节点
        }),
        new HtmlWebpackPlugin({
            title:'login',
            filename:'login.html',
            template:'./src/pages/login.html',
            inject:'body',
            hash:true,
            chunks:['login','vendor']
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // new webpack.optimize.CommonsChunkPlugin({//公共组件提取
        //     name: 'vendor',//生成的公共组件名称
        //     chunks:['index','login']//选择哪些js提取公共组件
        // }),
        //css文件抽取step3
        //new ExtractTextPlugin("[name].css"),
        new TransferWebpackPlugin([////文件copy组件step1
            {from: path.join(APP,'/src/vendor')}
        ], path.join(APP,'dist'))
    ]
};

if (process.env.NODE_ENV !== 'production') {
    // module.exports.plugins = [
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             NODE_ENV: JSON.stringify('production')
    //         }
    //     }),
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     }),
    //     new webpack.optimize.OccurenceOrderPlugin()
    // ]
} else {
    module.exports.devtool = '#source-map'
}
