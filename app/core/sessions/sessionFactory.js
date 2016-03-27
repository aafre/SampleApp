(function(){
	angular.module('session')
	.service('sessionFactory', ['$window', function($window) {
		
		var userSession = this;
		
		userSession.doLogin = function (userId) {
			$window.localStorage['loggedIn'] = true;
			$window.localStorage['userId'] = userId;
		};
		
		userSession.doLogout = function () {
			$window.localStorage.clear();
		};
		
		userSession.addSessionProperty = function (key, value) {
			$window.localStorage[key] = value;
		};
		
		userSession.addSessionObject = function (key, value) {
			$window.localStorage[key] = angular.toJson(value);
		};
		
		userSession.getSessionProperty = function (key) {
			return $window.localStorage[key] || '';
		};
		
		userSession.getSessionObject = function (key) {
			return JSON.parse($window.localStorage[key] || '{}');
		};
		
		userSession.isLoggedIn = function () {
			return $window.localStorage['loggedIn'] || false;
		};
		
		userSession.storeObj = function(obj){
			$window.localStorage['obj'] =  angular.toJson(obj);
		};
		
		userSession.getStoredObj = function(){
			return JSON.parse($window.localStorage['obj']);
		};
		
		/*userSession.storeTempObj = function(key,value){
			$window.localStorage[key] = JSON.stringify((value));
		};*/
		
		//return userSession;
	}]);
})();	