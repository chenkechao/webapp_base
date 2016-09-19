'use strict';

import Vendor from './vendor';
import Index from './index';
import Login from '../module/login/login';
import Router from '../../config/Router';


document.getElementById('ensure').onclick = function(){
    require.ensure(['../module/dialog/dialog'],function (require) {
        var dialogModule = require('../module/dialog/dialog');
        var pageDialog = new dialogModule();
        pageDialog.openDialog();
    });
};

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.module('angular-bootstrap', ['ui.router',Index.name]).run(function ($rootScope) {
        //运行块，通常用来注册全局的事件监听器
        ()=>{console.log(`angular is working`);}
        // 如果用户未登录
        //if (!AuthService.userLoggedIn()) {
        $rootScope.$on('$routeChangeStart', function(evt, next, current) {
            // 如果用户未登录
            // if (!AuthService.userLoggedIn()) {
            //         if (next.templateUrl === "login.html") {
            //             // 已经转向登录路由因此无需重定向
            //         } else {
            //             $location.path('/login');
            //         }
            //     }
        });
    }).config(function ($stateProvider, $urlRouterProvider) {
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

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'angular-bootstrap' ], {
        //strictDi: true
    });

});