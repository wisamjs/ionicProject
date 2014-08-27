angular.module('starter.controllers', [])

.controller('DashCtrl',function($scope, $log, Music){
	var userConcerts = [];
	$scope.check = false;

	$scope.getConcerts = Music.getConcerts()
	.then(function(data){

		//promise fulfilled
		$scope.concerts =  data;
	}).then(null,$log.error);

	$scope.addToUser = function(concert){
		if (_.contains(userConcerts,concert)){

			$scope.check = false;
			userConcerts = _.without(userConcerts,concert);
		}else{
		userConcerts.push(concert);
		$scope.check = true;
		}

		$log.info(userConcerts);

	}

	$scope.isSelected = function(concert){
		if (_.contains(userConcerts,concert)){
			return true;

		}
		return false;
	}
});