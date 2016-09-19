//function的名称对应ng-controller的名称
//as vm语法下，当前函数的this指针指向的其实是$scope.vm变量，作为一项约定额最佳实践，我们把他赋值给vm变量。
//我们在程序中不再直接使用this，因为javascript中的this很容易给一些不熟悉javascript的程序员造成混乱
function UsersController(UsersDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users);
          self.selected = users[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  function  gotoLogin() {
    alert('app module gotoLogin');
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default [ 'UsersDataService', '$mdSidenav', UsersController ];
