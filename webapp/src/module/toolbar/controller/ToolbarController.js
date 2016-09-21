
function UsersController($mdSidenav) {
    var self = this;
    self.toggleList   = toggleUsersList;
    // *********************************
    // Internal methods
    // *********************************
    function gotoLogin() {
        alert('gotoLogin');
    }

    function toggleUsersList() {
        alert("toolbar");
        $mdSidenav('left').toggle();
    }
}

export default ["$mdSidenav", UsersController ];