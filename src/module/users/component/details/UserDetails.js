import UserDetailsController from './UserDetailsController'
import  path from 'path';

export default {
  name : 'userDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : path.join(__dirname,'/src/module/users/component/details/UserDetails.html'),
    controller       : [ '$mdBottomSheet', '$log', UserDetailsController ]
  }
};