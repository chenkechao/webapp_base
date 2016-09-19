
function LoginController($scope) {
    var self = this;

    // *********************************
    // Internal methods
    // *********************************
    $scope.login = function () {
        alert("login");
    }
}

export default ["$scope", LoginController ];