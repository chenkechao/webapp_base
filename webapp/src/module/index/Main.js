import GridListRouter from './component/GridListRouter';
import MainController from './controller/MainController';
import MainService from './service/MainService';

export default angular.module('Main',['ngMaterial'])
    .component(GridListRouter.name,GridListRouter.config)
    .controller("MainController",MainController)
    .service("MainService",MainService);

