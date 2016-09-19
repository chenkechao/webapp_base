'use strict';//声明此javascript为严格模式，以回避一些javascript低级错误
import angular from 'angular';
export default function ($stateProvider,$urlRouterProvider){
    alert(angular);
    angular.module('angular-bootstrap')//引用模块，已经创建过了，所以这里只需要引用
        .config(function ($stateProvider, $urlRouterProvider) {//声明config函数，它的参数是一个回调函数，这个函数将在模块加载时运行，以便对模块配置，路由就是配置的一种
            alert('dd');
            $stateProvider.state('register', {
                url: '/register',
                templateUrl: 'src/module/register/component/register.html'
                //controller: 'HomeIndexController as vm'
            });
            // $stateProvider.state('home', {//路由名称:home
            //     url: '/',//路由定义对象
            //     templateUrl: 'controllers/home/index.html',//模板所在路径从app起算
            //     controller: 'HomeIndexController as vm'//控制器名称，as vm是一项最佳实践
            // });

            $stateProvider.state('notFound', {//定义"页面未找到"路由
                url: '/notFound',
                templateUrl: 'src/module/register/component/notFound.html'
            });
             $urlRouterProvider.otherwise('/notFound');//定义默认路由，即遇到未定义过的URL时跳转到这里
            //
            // $stateProvider.state('reader', {//定义一个父路由，它只用于提供URL
            //     url: '/reader',//所有子路由都会继承这个URL
            //     template: '<div ui-view></div>',//父路由中一般只提供一个这样的template就够了，不必使用templateURL，页面中公共的部分通过组件型指令去实现会更灵活，更漂亮
            //     abstract: true//抽象路由不能通过URL直接访问，比如直接访问/reader会跳转到otherwise去
            // });
            // $stateProvider.state('reader.create', {//名称，注意这个名称不是随便取的，angular-ui-router会使用点对其进行分割，并且从前往后逐个执行，所以这个名称中的每一段都要存在
            //     url: '/create',//子路由的路径，anguler-ui-router会把各级父路由的url与当前的路由的url组合起来，作为最终的访问路径，如"/rader/create"
            //     templateUrl: 'controllers/reader/create.html',
            //     controller: 'ReaderCreateController as vm'
            // });
            // $stateProvider.state('reader.list', {
            //     url: '/list',
            //     templateUrl: 'controllers/reader/list.html',
            //     controller: 'ReaderListController as vm'
            // });
            //
            // $stateProvider.state('thread', {
            //     url: '/thread',
            //     template: '<div ui-view></div>',
            //     abstract: true
            // });
            // $stateProvider.state('thread.list', {
            //     url: '/list',
            //     templateUrl: 'controllers/thread/list.html',
            //     controller: 'ThreadListController as vm'
            // });
            // $stateProvider.state('thread.tree', {
            //     url: '/tree',
            //     templateUrl: 'controllers/thread/tree.html',
            //     controller: 'ThreadTreeController as vm'
            // });
            // $stateProvider.state('thread.show', {
            //     url: '/:id/show?title&poster',
            //     templateUrl: 'controllers/thread/show.html',
            //     controller: 'ThreadShowController as vm'
            // });
        });
}

