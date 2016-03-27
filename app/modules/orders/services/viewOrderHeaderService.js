(function() {
	angular.module(APP_NAME).service('OrderHeaderService', 
			[ '$http','ORDER_CONSTANT','serverURLFactory','sessionFactory', 
			 function($http,ORDER_CONSTANT,serverURLFactory,sessionFactory) {
				var vm = this;
				vm.getAllOrderHeaders = function(requestBO,successcall,errorCallBack) {
					var URL = serverURLFactory.getCompleteURL(ORDER_CONSTANT.VIEW_ORDER_HEADERS);
					console.log(URL);
					console.log(JSON.stringify(requestBO));
					$http({
						 method: 'POST',
						 url: URL,
						 data: requestBO
					}).then(
							function(response){
								var parsedData = angular.fromJson(response);
								console.log(JSON.stringify(parsedData.data))
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