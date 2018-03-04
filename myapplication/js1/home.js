
myapp.controller("homeCtr", function($scope,$interval){
   $scope.message= " welcome .." ;
   
   $scope.theTime = new Date().toLocaleTimeString();
   $interval(function () {
       $scope.theTime = new Date().toLocaleTimeString();
   }, 1000);
  });
