myapp.controller("registerCtr" , function($scope , $firebaseAuth , $location ) {
    $scope.message = "hello app";

    // $scope.username = myService.getUser();
    // if($scope.username){
    //   $location.path("/success");
    // }



    $scope.register = function() {
        // $scope.message = "Welcome " + $scope.user.firstname;
        var username = $scope.user.email;
        var password = $scope.user.password;
         var auth = $firebaseAuth();
         if(username && password){
          auth.$createUserWithEmailAndPassword(username , password ).then(function(){
            console.log("succusfully created");
            // $scope.message = "Hi " + $scope.user.firstname + " , Thanks for registering";
            $location.path("/login");
    
          }).catch(function(err){
            console.log(err);
            $scope.errMsg = true;
            $scope.errorMessage = err.message;
          });
        };  
    }; //register


    $scope.login = function() {
      $scope.message = "Welcome " + $scope.user.email;
      var username = $scope.user.email;
      var password = $scope.user.password;
      var auth = $firebaseAuth();
  
      auth.$signInWithEmailAndPassword(username , password).then(function(){
        console.log("succusfully logged in");
        // myService.setUser($scope.user.email);
        $location.path("/sucess");
      }).catch(function(err){
        console.log(err);
        $scope.errMsg = true;
        $scope.errorMessage = err.message;
      });
  }; //login

});
