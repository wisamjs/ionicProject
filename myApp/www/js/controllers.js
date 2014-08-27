angular.module('starter.controllers', [])

.controller('DashCtrl',function($scope, $log, Music){
	$scope.getConcerts = Music.getConcerts()

			.then(function(data){


				//promise fulfilled
				$scope.concerts =  data;

			})
			.then(null,$log.error);

});