(function() {
	angular.module(APP_NAME).service('ViewOrderService', 
			[ '$http','ORDER_CONSTANT','serverURLFactory','sessionFactory', 
			 function($http,ORDER_CONSTANT,serverURLFactory,sessionFactory) {
				var vm = this;

				vm.getTenderDetailsById = function(requestBO,successcall,errorCallBack) {
				var URL = serverURLFactory.getCompleteURL(ORDER_CONSTANT.GET_DETAILS);
				$http({
					 method: 'POST',
					 url: URL,
					 data: requestBO
				}).then(
						function(response){
							var parsedData = angular.fromJson(response);
							successcall(parsedData.data);
					},
					function(errorResponse){
						var parsedData = angular.fromJson(errorResponse);
						errorCallBack(parsedData);
				}
				);
			};
			
				
	}]);

})();