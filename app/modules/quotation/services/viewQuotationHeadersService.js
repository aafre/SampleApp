(function() {
	angular.module(APP_NAME).service('QuotationHeaderService', 
			[ '$http','CREATE_QUOTATION_CONSTANT','serverURLFactory','sessionFactory', 
			 function($http,QUOTATION_CONSTANT,serverURLFactory,sessionFactory) {
				var vm = this;
				vm.getAllQuotationHeaders = function(requestBO,successcall,errorCallBack) {
					var URL = serverURLFactory.getCompleteURL(QUOTATION_CONSTANT.VIEW_QUOTATION_HEADERS);
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