(function() {
	angular.module(APP_NAME).service('SubmitQuotationService', [ '$http','CREATE_QUOTATION_CONSTANT', 'serverURLFactory','sessionFactory', 
             function($http,CONSTANT,serverURLFactory,sessionFactory) {
		var vm = this;
		
		vm.createQuotation = function(quoteBO,successcall,errorCall) {
			console.log(JSON.stringify(quoteBO));
			var URL = serverURLFactory.getCompleteURL(CONSTANT.CREATE_LINK);
			$http({
					 method: 'POST',
					 url: URL,
					 data: quoteBO
				}).then(
						function(response){
							var parsedData = angular.fromJson(response);
//							alert(JSON.stringify(parsedData.data));
							successcall(parsedData.data);
					},
						function(response){
						var parsedData = angular.fromJson(response);
//						alert(JSON.stringify(parsedData.data));
						successcall(parsedData.data);
						});
	};
	}]);

})();