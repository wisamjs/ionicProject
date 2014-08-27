angular.module('starter.controllers', [])

.controller('ConcertsCtrl',function($scope, $log, Music){
	var userConcerts = [];

	$scope.getConcerts = Music.getConcerts()
	.then(function(data){

		//promise fulfilled
		$scope.concerts =  data;
	}).then(null,$log.error);

	$scope.addToUser = function(concert){

		//remove concert if already selected
		if (_.contains(userConcerts,concert)){
			userConcerts = _.without(userConcerts,concert);

		}else{

		userConcerts.push(concert);
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