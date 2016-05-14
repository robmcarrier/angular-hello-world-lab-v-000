function MainController($scope) {
  $scope.name = "Robert";
  $scope.email = "robert@gmail.com";
  $scope.phone = "848-292-4094";
}

angular
  .module('app')
  .controller('MainController', MainController);
