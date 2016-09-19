import Users from '../module/users/Users';
import ToolbarMain from '../module/toolbar/ToolbarMain';
import Menu from '../module/menus/Menus';
import Sample from '../module/sample/Sample';
import Register from '../module/register/Register';
import UsersController from '../module/users/controller/UsersController';
import ToolbarController from '../module/toolbar/controller/ToolbarController';

export default angular.module('app',['ngMaterial','ui.router',Users.name,ToolbarMain.name,Menu.name
    ,Sample.name,Register.name])
    .config(
        ($mdIconProvider, $mdThemingProvider) => {
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
    
            $mdThemingProvider.theme('default')
                .primaryPalette('brown')
                .accentPalette('red')
                .warnPalette('orange')
                .backgroundPalette('grey');
        }
    )
    .constant("MENUS",[
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
        "url":"5"}])
    .controller('UsersController', UsersController)////注册一个控制器
    .controller('ToolbarController',ToolbarController)
    .factory('menu', [
        'DEMOS',
        '$location',
        '$rootScope',
        '$http',
        '$window',
        function( DEMOS, $location, $rootScope, $http, $window) {

            var version = {};

            var sections = [{
                name: 'Getting Started',
                url: 'getting-started',
                type: 'link'
            }];

            var demoDocs = [];
            angular.forEach(DEMOS, function(componentDemos) {
                demoDocs.push({
                    name: componentDemos.label,
                    url: componentDemos.url
                });
            });

            sections.push({
                name: 'Demos',
                children: demoDocs.sort(sortByName),
                type: 'toggle'
            });

            sections.push();

         }])
