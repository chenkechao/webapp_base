'use strict';

import Vendor from '../../src/js/vendor';
import Index from '../../src/module/index/Index';
import Login from '../../src/module/login/login';
import router from '../../config/router';
import config from '../../config/config';
import run from '../../config/run';

document.getElementById('ensure').onclick = function(){
  require.ensure(['../../src/module/dialog/dialog'],function (require) {
    var dialogModule = require('../../src/module/dialog/dialog');
    var pageDialog = new dialogModule();
    pageDialog.openDialog();
  });
};

// replaces ng-app="appName"
angular.element(document).ready(function () {
  angular.module('angular-bootstrap', ['ui.router','ngMaterial',Index.name]);
  router();
  config();
  run();

  let body = document.getElementsByTagName("body")[0];
  angular.bootstrap( body, ['angular-bootstrap'], {
    //strictDi: true
  });
});
