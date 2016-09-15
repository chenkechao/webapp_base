import UserDetailsController from './UserDetailsController'

export default {
  name : 'userDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'webapp/src/module/users/components/details/UserDetails.html',
    controller       : [ '$mdBottomSheet', '$log', UserDetailsController ]
  }
};