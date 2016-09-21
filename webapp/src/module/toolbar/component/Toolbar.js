import ToolbarController from '../controller/ToolbarController';
export default {
    name : 'toolbar',
    config : {
        bindings         : {  selected: '<' },
        templateUrl      : 'src/module/toolbar/component/Toolbar.html',
        controller       : ToolbarController
    }
};