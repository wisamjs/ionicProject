angular.module('starter.controllers', [])

.controller('ConcertsCtrl',function($scope, $log, Music, userData){
	var userConcerts = [];

	$scope.getConcerts = Music.getConcerts()
	.then(function(data){

		//promise fulfilled
		$scope.concerts =  data;
	}).then(null,$log.error);

	$scope.addToUser = function(concert){
		return userData.toogleConcert(concert);
	}

	$scope.isSelected = function(concert){
		return userData.isAttending(concert);
	}
})

.controller('AttendingCtrl', function($scope, $log, Music, userData){
	$scope.attendingConcerts = userData.getUserConcerts();

	$log.info($scope.attendingConcerts);

});