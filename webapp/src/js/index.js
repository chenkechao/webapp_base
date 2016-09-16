import AppController from './AppController';
import Users from '../module/users/Users';

export default angular.module('app',['ngMaterial',Users.name]).config(
    ($mdIconProvider, $mdThemingProvider) => {
        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("dist/avatars.svg", 128)
            .icon("menu", "dist/menu.svg", 24)
            .icon("share", "dist/share.svg", 24)
            .icon("google_plus", "dist/google_plus.svg", 24)
            .icon("hangouts", "dist/hangouts.svg", 24)
            .icon("twitter", "dist/twitter.svg", 24)
            .icon("phone", "dist/phone.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    }
).controller('AppController', AppController);

