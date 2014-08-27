angular.module('starter.services',[])
.constant('API_BASE_URL','http://ws.audioscrobbler.com/2.0/?format=json')
.constant('API_KEY','&api_key=2d130fffdbb75b4388638d831bbc990f')

.factory('Music', function($http, $log, API_BASE_URL,API_KEY){
	var music = {};
	music.getConcerts = function(){
		return $http.get(API_BASE_URL+API_KEY+'&method=geo.getevents&location=toronto')
			.then(function(response){
				$log.info(response.data.events.event[0]);
				return response.data.events.event
			});
	}

	return music;
});
