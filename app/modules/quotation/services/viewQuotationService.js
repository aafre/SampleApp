(function() {
	angular.module(APP_NAME).service('ViewQuotationService', [ '$http','serverURLFactory','CREATE_QUOTATION_CONSTANT',
	    function($http,serverURLFactory,CREATE_QUOTATION_CONSTANT) {
		var vm = this;
		vm.getQuotationHeader = function(headerObj,successcall,errorCallBack) {
			var URL = serverURLFactory.getCompleteURL(CREATE_QUOTATION_CONSTANT.GET_QUOTE_HEADER);
			console.log(JSON.stringify(headerObj));
//			console.log(URL);
			$http({
				 method: 'POST',
				 url: URL,
				 data: {"header" : headerObj}
			}).then(
					function(response){
						var parsedData = angular.fromJson(response);
						console.log(JSON.stringify(parsedData.data.data))
						successcall(parsedData.data);
				},
				function(errorResponse){
					var parsedData = angular.fromJson(errorResponse);
					errorCallBack(parsedData);
			}
			);
		};
		
		vm.getQuotationDetails =function(headerObj,successcall,errorCallBack) {
			var URL = serverURLFactory.getCompleteURL(CREATE_QUOTATION_CONSTANT.GET_QUOTE_DETAIL);
			$http({
				 method: 'POST',
				 url: URL,
				 data: {"header" : headerObj}
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