(function(){
	angular.module(APP_NAME).controller('DashboardCtrl',
			function($scope,utilityService,sessionFactory){
		utilityService.removeClass();
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.userName = $scope.userBO.firstName;
		$scope.userRole = $scope.userBO.userRole.toLocaleLowerCase();
		console.log($scope.userRole);
		$scope.logout = function(){
			sessionFactory.doLogout();
			$scope.isLoggedIn= sessionFactory.isLoggedIn();
			//console.log($scope.isLoggedIn);
			utilityService.route('home');
		};
	});
})();