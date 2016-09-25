import MainController from '../controller/MainController';

export default {
    name : 'gridList',
    config : {
        bindings         : {  fastNews: '<' },//使用单项数据绑定<来定义来将其父组件上的数据绑定到controller上
        templateUrl      : 'src/module/index/component/gridList.html',
        controller       : [ 'MainController', MainController ]
    }
};
