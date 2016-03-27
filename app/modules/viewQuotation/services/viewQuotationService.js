(function() {
	angular.module(APP_NAME).service('ViewQuotationService', [ '$http', function($http) {
		var vm = this;
		vm.getAllTenderHeaders = function(successcall,errorCallBack) {
			var URL = serverURLFactory.getCompleteURL(VIEW_TENDER_CONSTANT.VIEW_TENDER_HEADERS);
			console.log(URL);
			$http({
				 method: 'POST',
				 url: URL,
				 data: 
					 {
					 	"header":{
					 		"userId": 1450162344631,
					 		"userRole" : 'buyer'
					 	}
					 }
			}).then(
					function(response){
						var parsedData = angular.fromJson(response);
//						console.log(JSON.stringify(parsedData.data))
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