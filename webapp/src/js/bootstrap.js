'use strict';

require('./include')(); //run an empty function
// load the main app file
var appModule = require('./index');
document.getElementById('ensure').onclick = function(){
    require.ensure(['../module/dialog/dialog'],function (require) {
        var dialogModule = require('../module/dialog/dialog');
        var pageDialog = new dialogModule();
        pageDialog.openDialog();
    });
};

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {
        //strictDi: true
    });
});