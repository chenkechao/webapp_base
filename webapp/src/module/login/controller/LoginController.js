//ng-controller两种写法，
//1.直接写function的名称：这个时候需要注入$scope参数，在scope参数上绑定相应的方法和属性
//2.写as xxx:这时候不需要注入$scope参数，在this上绑定相应的方法属性
function LoginController($scope) {
    //var self = this;

    // *********************************
    // Internal methods
    // *********************************
    $scope.login = function () {
        alert("login");
    }
}

export default ["$scope", LoginController ];