// Notice that we do not have a controller since this component does not
// have any specialized logic.
import  path from 'path';

export default {
  name : 'usersList',
  config : {
    bindings         : {  users: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : path.join(__dirname,'/src/module/users/component/list/UsersList.html')
  }
};
