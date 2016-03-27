(function() {
	angular.module(APP_NAME).service('ProfileService', 
			[ '$http','USER_PROFILE_CONSTANT','serverURLFactory','sessionFactory', 
			 function($http,USER_PROFILE_CONSTANT,serverURLFactory,sessionFactory) {
//				alert('pro service');
		var vm = this;
		// function to authenticate user
		vm.getProfileDetails = function(userId,successcall,errorCallBack) {
			console.log(userId);
			var URL = serverURLFactory.getCompleteURL(USER_PROFILE_CONSTANT.PROFILE_URL);
//			alert(URL);
			$http({
				method:'POST',
				timeout : 2500,
				url: URL,
				data: {
				    "userId": userId
				}
			}).then(
				function(successResponse){
					var parsedData = angular.fromJson(successResponse);
					//alert(JSON.stringify(parsedData));
					successcall(parsedData.data);
			},
				function(errorResponse){
					var parsedData = angular.fromJson(errorResponse);
					errorCallBack(parsedData);
			}
			);
		};
		
		vm.editProfile = function(userBO,successcall,errorCallBack){
			var URL = serverURLFactory.getCompleteURL(USER_PROFILE_CONSTANT.EDIT_URL);
			$http({
				method:'POST',
				url: URL,
				data: userBO
			}).then(
				function(successResponse){
					var parsedData = angular.fromJson(successResponse);
//					alert(JSON.stringify(parsedData));
					successcall(parsedData);
			},
				function(errorResponse){
					var parsedData = angular.fromJson(errorResponse);
					errorCallBack(parsedData);
			}
			);
		};
	}]);

})();