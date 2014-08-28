angular.module('starter.services',[])
.constant('API_BASE_URL','http://ws.audioscrobbler.com/2.0/?format=json')
.constant('API_KEY','&api_key=2d130fffdbb75b4388638d831bbc990f')

.factory('Music', function($http, $log, API_BASE_URL,API_KEY){
	var music = {};
	music.getConcerts = function(){
		return $http.get(API_BASE_URL+API_KEY+'&method=geo.getevents&location=toronto')
			.then(function(response){
				return response.data.events.event
			});
	}

	return music;
})


.factory('userData', function(Music, $http, $log, $q){
	var userConcerts = [];
		apiConcerts = [];

	return {

		getAPIConcerts: function(){

			$log.warn('All good?');
			$log.warn(apiConcerts.length);

			 if (apiConcerts.length > 0){
			 		var deferred = $q.defer();
					return $q.when(apiConcerts);

			 }else{
				return Music.getConcerts();
			 }

		},
		setAPIConcerts: function(concerts){
			apiConcerts = concerts;

		},
		toogleConcert: function(concert){
			//remove concert if already selected
			if (_.contains(userConcerts,concert)){

				userConcerts = _.without(userConcerts,concert);
			}else{

				userConcerts.push(concert);
			}
			$log.info(userConcerts);
			return userConcerts;
		},
		getUserConcerts: function(){
			return userConcerts;

		},
		isAttending: function(concert){
			if (_.contains(userConcerts,concert)){
				return true;
			}
			return false;
		}
	};

});
