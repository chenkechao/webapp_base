import AppController from './AppController';
import Users from '../module/users/Users';

export default angular.module('app',['ngMaterial',Users.name]).config(
    ($mdIconProvider, $mdThemingProvider) => {
        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("webapp/dist/avatars.svg", 128)
            .icon("menu", "webapp/dist/menu.svg", 24)
            .icon("share", "webapp/dist/share.svg", 24)
            .icon("google_plus", "webapp/dist/google_plus.svg", 24)
            .icon("hangouts", "webapp/dist/hangouts.svg", 24)
            .icon("twitter", "webapp/dist/twitter.svg", 24)
            .icon("phone", "webapp/dist/phone.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    }
).controller('AppController', AppController);

