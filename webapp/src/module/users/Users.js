import UsersList from './component/list/UsersList';
import UserDetails from './component/details/UserDetails';
import MaterialWidget from '../sample/component/details/MaterialWidget';
import UsersDataService from './service/UsersDataService';
export default angular.module('users',['ngMaterial'])
    .component(UsersList.name, UsersList.config)
    //.component(UserDetails.name,UserDetails.config)
    .component(MaterialWidget.name,MaterialWidget.config)
    .service("UsersDataService",UsersDataService);