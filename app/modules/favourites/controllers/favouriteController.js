(function(){
	angular.module(APP_NAME).
	controller('FavCtrl', [ '$scope', 'FavService',
	function($scope, favService) {
		$scope.favourites = [];
		
		$scope.tp = function(){
			console.log(JSON.stringify($scope.favourites));
		};
		
	}]);
})();