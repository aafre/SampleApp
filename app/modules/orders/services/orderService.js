(function() {
	angular.module(APP_NAME).service('OrderService', [ '$http','serverURLFactory','ORDER_CONSTANT',
	    function($http,serverURLFactory,ORDER_CONSTANT) {
			var vm=this;
			vm.getQuotationDetails =function(headerObj,successcall,errorCallBack) {
		var URL = serverURLFactory.getCompleteURL(ORDER_CONSTANT.GET_QUOTE_DETAIL);
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
	
	vm.createOrder =function(orderBO,successcall,errorCallBack) {
		var URL = serverURLFactory.getCompleteURL(ORDER_CONSTANT.CREATE_ORDER);
		$http({
			 method: 'POST',
			 url: URL,
			 data: orderBO
		}).then(
				function(response){
					var parsedData = angular.fromJson(response);
					alert(JSON.stringify(parsedData));
					successcall(parsedData.data);
			},
			function(errorResponse){
				var parsedData = angular.fromJson(errorResponse);
				alert(JSON.stringify(parsedData));
				errorCallBack(parsedData);
		}
		);
	};
	}]);

})();