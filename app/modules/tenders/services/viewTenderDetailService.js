(function() {
	angular.module(APP_NAME).service('DetailsService', 
			[ '$http','TENDER_CONSTANT','serverURLFactory','sessionFactory', 
			 function($http,VIEW_TENDER_CONSTANT,serverURLFactory,sessionFactory) {
				var vm = this;

				vm.getTenderDetailsById = function(tenderId,userId,role,successcall,errorCallBack) {
				var URL = serverURLFactory.getCompleteURL(VIEW_TENDER_CONSTANT.GET_TENDER_DETAILS);
//				console.log(URL);
				$http({
					 method: 'POST',
					 url: URL,
					 data: 
						 {
						 	"header":{
						 		"tenderId": tenderId,
						 		"userId" : userId,
						 		"userRole" : role
						 	}
						 }
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