require('../../css/login.css');
import Vendor from '../../js/vendor';
import LoginController from './controller/LoginController';
import LoginRouter from "./component/LoginRouter";
export default angular.module('login',['ngMaterial'])
    //.component(LoginRouter.name,LoginRouter.config)
    .controller("LoginController",LoginController);
