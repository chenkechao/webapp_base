'use strict';//声明此javascript为严格模式，以回避一些javascript低级错误
import angular from 'angular';
export default function config() {

angular.module('angular-bootstrap')//引用模块，已经创建过了，所以这里只需要引用
.config(
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
            .defaultIconSet("dist/img/svg/avatars.svg", 128)
            .icon("logo","dist/img/svg/logo.svg",24)
            .icon("menu", "dist/img/svg/menu.svg", 24)
            .icon("share", "dist/img/svg/share.svg", 24)
            .icon("google_plus", "dist/img/svg/google_plus.svg", 24)
            .icon("hangouts", "dist/img/svg/hangouts.svg", 24)
            .icon("twitter", "dist/img/svg/twitter.svg", 24)
            .icon("phone", "dist/img/svg/phone.svg", 24)
            .icon("more_vert","dist/img/svg/more_vert.svg", 24);

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
        $mdThemingProvider.registerStyles(require('../src/css/style.css'));
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
}


