myapp.controller('sucessCtr',  function($scope, $location , myService) {
  
    $scope.username = myService.getUser();
    if(!$scope.username){
      $location.path("/login");
    };

   
});