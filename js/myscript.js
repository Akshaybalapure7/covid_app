
const URL="https://covid19.mathdro.id/api";
const URL1="https://covid19.mathdro.id/api/countries"

var App= angular.module("myApp" ,[]);

App.controller('MyCtrl', function($scope , $http){
	$scope.text="Stay Home Stay Safe";
     // Calling API

     $http.get(URL).then(function(response){
     	console.log(response.data);

     	$scope.all_data=response.data;
     },
     function(error){
     	console.log(error);
     })

     // Get country Data
     // Here function() and ()=> is same
      
     $scope.country_data= function()
     {
        var country = $scope.country;
        if(country=="")
        {
        	$scope.c_data=undefined;
        	return;
        }

        $http.get(`${URL}/countries/${country}`).then(
        	function(response){
        		console.log(response);
        		$scope.c_data=response.data;
        	},
        	function(error){
        		console.log(error)
        	});
     }



});