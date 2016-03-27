(function() {
	angular.module(APP_NAME).service('LoginService', 
	[ '$http','LOGIN_CONSTANT','serverURLFactory','sessionFactory',
	  
	  function($http,LOGIN_CONSTANT,serverURLFactory,sessionFactory) {
		var vm = this;
		// function to authenticate user
		vm.authenticate = function(loginBO,successcall,errorCallBack) {
//			alert(JSON.stringify(loginBO));
			var URL = serverURLFactory.getCompleteURL(LOGIN_CONSTANT.LOGIN_URL);
//			alert(URL);
			$http({
				method:'POST',
				url: URL,
//				params: {"withCredentials": true},
				data:loginBO
			}).then(
				function(successResponse){
//					console.log(angular.toJson(successResponse));
					var parsedData = angular.fromJson(successResponse);
//					alert(JSON.stringify(parsedData));
//					console.log($cookies.get('JSESSIONID'));
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