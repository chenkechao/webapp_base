import Toolbar from '../../module/toolbar/ToolbarMain';
import IndexController from './controller/IndexController';
import Main from './Main';

export default angular.module('Index',['ngMaterial','ui.router',Toolbar.name,Main.name])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/gridList");

        $stateProvider.state('gridList', {
            url: '/gridList',
            templateUrl: 'src/module/index/component/gridList.html',
            controller: 'MainController as main'
        });
    })
    .controller("IndexController",IndexController)
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

        }]);
    
