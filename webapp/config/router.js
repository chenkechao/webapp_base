'use strict';//声明此javascript为严格模式，以回避一些javascript低级错误
import angular from 'angular';
export default function router() {
    angular.module('angular-bootstrap')//引用模块，已经创建过了，所以这里只需要引用
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'src/module/register/component/register.html'
            //controller: 'HomeIndexController as vm'
        });

        $stateProvider.state('notFound', {//定义"页面未找到"路由
            url: '/notFound',
            templateUrl: 'src/module/register/component/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
    });
}


