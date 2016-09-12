'use strict';

require('./vendor')(); //run an empty function
// load the main app file
var appModule = require('./index');
require.ensure([],function (require) {
    require('./ensure');
});
// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {
        //strictDi: true
    });
});