import MaterialWidget from "./component/MaterialWidget";
export default angular.module('materialWidget',['ngMaterial'])
    .component(MaterialWidget.name,MaterialWidget.config);
