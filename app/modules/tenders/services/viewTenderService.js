(function() {
	angular.module(APP_NAME).service('ViewTenderService', 
			[ '$http','TENDER_CONSTANT','serverURLFactory','sessionFactory', 
			 function($http,VIEW_TENDER_CONSTANT,serverURLFactory,sessionFactory) {
				var vm = this;
				vm.getAllTenderHeaders = function(userId,userRole,successcall,errorCallBack) {
					var URL = serverURLFactory.getCompleteURL(VIEW_TENDER_CONSTANT.VIEW_TENDER_HEADERS);
					console.log(URL);
					$http({
						 method: 'POST',
						 url: URL,
						 data: 
							 {
							 	"header":{
							 		"userId": userId,
							 		"userRole" : userRole
							 	}
							 }
					}).then(
							function(response){
								var parsedData = angular.fromJson(response);
//								console.log(JSON.stringify(parsedData.data))
								successcall(parsedData.data);
						},
						function(errorResponse){
							var parsedData = angular.fromJson(errorResponse);
							errorCallBack(parsedData);
					}
					);
				};
				
				vm.getTenderItems = function(userId,tenderId,successcall,errorCallBack) {
					var URL = serverURLFactory.getCompleteURL(VIEW_TENDER_CONSTANT.MOCK_URL);
					$http({
						method:'POST',
						url: URL,
						data: {
							'userId' : userId,
							'tenderId': tenderId
						}
					}).then(
						function(successResponse){
							var parsedData = angular.fromJson(successResponse);
							alert(JSON.stringify(parsedData));
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