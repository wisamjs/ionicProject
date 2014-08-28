angular.module('starter.controllers', [])

.controller('ConcertsCtrl',function($scope, $log, Music, userData){
	var userConcerts = [];

	$scope.getConcerts = userData.getAPIConcerts()
	.then(function(data){

		$log.info('data retrieved:' + data);
		//promise fulfilled
		userData.setAPIConcerts(data);
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

})

	$log.info($scope.attendingConcerts);

});