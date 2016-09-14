import UsersList from './component/list/UsersList';
import UserDetails from './component/details/UserDetails';
import UserDataService from './service/UsersDataService';
export default angular.module('users',['ngMaterial'])
    .component(UsersList.name, UsersList.config)
    .component(UserDetails.name,UserDetails.config)
    .service("UserDataService",UserDataService);