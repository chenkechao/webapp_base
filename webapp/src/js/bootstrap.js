'use strict';

import Vendor from './vendor';
import Index from './index';

document.getElementById('ensure').onclick = function(){
    require.ensure(['../module/dialog/dialog'],function (require) {
        var dialogModule = require('../module/dialog/dialog');
        var pageDialog = new dialogModule();
        pageDialog.openDialog();
    });
};

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.module('angular-bootstrap', [Index.name]).run(//运行块
        ()=>{console.log(`angular is working`);}
    )
    angular.bootstrap(document, ['angular-bootstrap'], {
        //strictDi: true
    });
});