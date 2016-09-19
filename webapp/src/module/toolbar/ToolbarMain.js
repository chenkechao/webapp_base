import Toolbar from "./component/Toolbar";
import ToolbarController from './controller/ToolbarController';
export default angular.module('toolbar',['ngMaterial'])
    .component(Toolbar.name,Toolbar.config);

