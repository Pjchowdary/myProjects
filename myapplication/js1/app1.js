var myapp = angular.module("myApp" , [ "ngRoute","firebase" ]);


myapp.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.when("/home" , {
        title:"home",
        templateUrl : "views1/home.html",
        controller : "homeCtr"
    }).
    when("/login" , {
        title:"login user",
         templateUrl : "views1/login1.html",
         controller : "registerCtr"
    }).
    when("/signup" , {
        title:"signup",
        templateUrl : "views1/signup.html",
      controller : "registerCtr"
    }).
    when("/sucess" , {
         title:"sucess",
         templateUrl : "views1/sucess.html",
         controller : "sucessCtr"
    }).otherwise({
        redirectTo:"/home"
    });

}])