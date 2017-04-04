angular.module("myApp",[])
.controller("Data",function($scope,$http){
	var obj;
    $http.get('/api/exp/').then(function(d){ //to get all data ...
       obj=d;
      // console.log(obj);//all data...
       for(var k in obj){
         $scope.allData=obj.data.offers.Hotel; // take just hotel data ...
       }
       
    })
})



