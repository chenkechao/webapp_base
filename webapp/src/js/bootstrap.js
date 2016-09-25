'use strict';

import Vendor from './vendor';
import Index from '../module/index/Index';
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
    }).config(
        ($mdIconProvider, $mdThemingProvider) => {
            $mdThemingProvider.definePalette('customPrimary', {
                '50': 'ffebee',
                '100': 'ff0000',
                '200': 'ef9a9a',
                '300': 'e57373',//for warn
                '400': 'ffffff',
                '500': 'ffffff',//for primary
                '600': 'e53935',
                '700': 'ff0000',
                '800': 'c62828',
                '900': 'b71c1c',
                'A100': 'ff8a80',//for accent
                'A200': 'ff5252',//for accent
                'A400': 'ff1744',//for accent
                'A700': 'd50000',//for accent
                'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                    // on this palette should be dark or light

                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                    '200', '300', '400', 'A100'],
                'contrastLightColors': undefined    // could also specify this if default was 'dark'
            });

            $mdThemingProvider.definePalette('customAccent', {
                '50': 'ffebee',
                '100': 'ff0000',
                '200': 'ef9a9a',
                '300': 'e57373',//for warn
                '400': 'ffffff',
                '500': '333333',//for primary
                '600': 'e53935',
                '700': 'ff0000',
                '800': 'c62828',
                '900': 'b71c1c',
                'A100': 'ff8a80',//for accent
                'A200': 'ff5252',//for accent
                'A400': 'ff1744',//for accent
                'A700': 'd50000',//for accent
                'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                    // on this palette should be dark or light

                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                    '200', '300', '400', 'A100'],
                'contrastLightColors': undefined    // could also specify this if default was 'dark'
            });

            // Register the user `avatar` icons
            $mdIconProvider
                .defaultIconSet("dist/avatars.svg", 128)
                .icon("logo","dist/logo.svg",24)
                .icon("menu", "dist/menu.svg", 24)
                .icon("share", "dist/share.svg", 24)
                .icon("google_plus", "dist/google_plus.svg", 24)
                .icon("hangouts", "dist/hangouts.svg", 24)
                .icon("twitter", "dist/twitter.svg", 24)
                .icon("phone", "dist/phone.svg", 24)
                .icon("more_vert","dist/more_vert.svg", 24);

            // Use that theme for the primary intentions
            // $mdThemingProvider.theme('default')
            //     .primaryPalette('customPrimary', {
            //         'default': '400',
            //         'hue-1': '100',
            //         'hue-2': '700',
            //         'hue-3': 'A400'
            //     }).accentPalette('customAccent')
            //     .warnPalette('customAccent')
            //     .backgroundPalette('customAccent');

            $mdThemingProvider.disableTheming(true);
            $mdThemingProvider.registerStyles(require('../css/style.css'));
        }
    ).constant("MENUS",[
        {"name":"menu1",
            "label":"menu1",
            "url":"1"},
        {"name":"menu2",
            "label":"menu2",
            "url":"2"},
        {"name":"menu3",
            "label":"menu3",
            "url":"3"
        },
        {"name":"menu4",
            "label":"menu4",
            "url":"4"},
        {"name":"menu5",
            "label":"menu5",
            "url":"5"}]);

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'angular-bootstrap' ], {
        //strictDi: true
    });

});