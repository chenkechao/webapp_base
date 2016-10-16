'use strict';//声明此javascript为严格模式，以回避一些javascript低级错误
import angular from 'angular';
export default function run() {
    angular.module('angular-bootstrap')//引用模块，已经创建过了，所以这里只需要引用
    .run(function ($rootScope) {
        alert('run');
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
    });
}