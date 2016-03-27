(function() {
	angular.module(APP_NAME).service('DashboardService', 
	[ '$http','DASH_CONSTANT','serverURLFactory','sessionFactory', 
	  
	  function($http,DASH_CONSTANT,serverURLFactory,sessionFactory) {

		var vm = this;
		// function to get user data for dash-board.
		vm.getUserData = function(successcall,errorCallBack) {
			var URL = serverURLFactory.getCompleteURL(DASH_CONSTANT.DASH_URL);
			$http({
				method:'POST',
				url: URL,
			}).then(
				function(successResponse){
					var parsedData = angular.fromJson(successResponse);
					successcall(parsedData.data);
			},
				function(errorResponse){
					var parsedData = angular.fromJson(errorResponse);
					errorCallBack(parsedData);
			}
			);
		};
	} ]);

})();