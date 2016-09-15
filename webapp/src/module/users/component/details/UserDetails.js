import UserDetailsController from './UserDetailsController'

export default {
  name : 'userDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : '/src/module/users/component/details/UserDetails.html',
    controller       : [ '$mdBottomSheet', '$log', UserDetailsController ]
  }
};