(function(){
	angular.module(APP_NAME).
	controller('OrderCtrl', [ '$scope', 'OrderService','sessionFactory','$stateParams','utilityService',
	function($scope, orderService,sessionFactory,$stateParams,util) {
		util.removeClass();
		var vendorId = sessionFactory.getSessionProperty("vid");
		$scope.userBO = sessionFactory.getStoredObj();
		var soureTypeFav = 1;
		var soureTypeOffers = 2;
		var soureTypeQuotes = 3;
		$scope.headerObj = {
				"userId" : Number($scope.userBO.userId),
				"userRole" : $scope.userBO.userRole,
				"tenderId" : $stateParams.id1,
				"quotationId" : $stateParams.id2
		};
		

		orderService.getQuotationDetails($scope.headerObj,function(response) {
				$scope.quoteItems = response.data.items;
				console.log(JSON.stringify($scope.quoteItems));
				$scope.quoteHeader = response.data.header;
				console.log(JSON.stringify($scope.quoteHeader));
				$scope.orderBO = {
						"header":{
							"userId": Number($scope.userBO.userId),
							"vendorId": Number(vendorId),
							"sourceId": Number($stateParams.id2),
							"sourceType": Number(soureTypeQuotes),
							"expectedDeliveryDate": $scope.quoteHeader.expectedDeliveryDate,
							"currency": $scope.quoteHeader.currency
						},
						"items": $scope.quoteItems
					};
				orderService.createOrder($scope.orderBO, function(response) {
					var parsedData = response.data;
					alert(JSON.stringify(parsedData));
					if(response.status.statusCode=='success'){
						alert('Order Placed Successfully.');
//						util.route('');
					}else{
						alert('Sorry You cannot do that!');
					}
				}, function(response) {
					alert("Opps some error Occured.");
				})
				
				
			}, function(response) {
				alert('Opps some error occured.');
			});
		
	}]);
})();