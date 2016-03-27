(function(){
	angular.module(APP_NAME).
	controller('SubmitQuotationCtrl', [ '$scope', 'SubmitQuotationService','utilityService','sessionFactory',
	function($scope, quoteService,util,sessionFactory) {
		$scope.header = {};
		$scope.tenderData = sessionFactory.getSessionObject('temp');
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.headers = $scope.tenderData.header;
		$scope.headers.userId = $scope.userBO.userId;
		$scope.headers.userName = $scope.userBO.firstName;
		$scope.items = $scope.tenderData.items;
		
		/**
		 * textBox field--> if bad data in quantity, it is automatically set to zero. Same for Unit price.
		 */
		$scope.calculateTotalCost = function(index,textBox){
			var quantity = $scope.items[index].quantity;
			var unitPrice = $scope.items[index].unitPrice;
			if(quantity >0 || unitPrice>0){
				$scope.items[index].quantity = parseInt(quantity,10);
				$scope.items[index].unitPrice = parseInt(unitPrice,10);
				$scope.items[index].totalPrice = $scope.items[index].quantity * $scope.items[index].unitPrice;
			}else{
				if(textBox=='quantity'){
					$scope.items[index].quantity = 0;
					$scope.items[index].totalPrice = 0;
				}
				else{
					$scope.items[index].unitPrice = 0;
					$scope.items[index].totalPrice = 0;
				}
			}
				console.log($scope.items[index].totalPrice);
		};
		
		$scope.submit = function(){
			var quoteBO = {
					"header" : $scope.headers,
					"items" : $scope.items
			};
			alert(JSON.stringify($scope.userBO));
				quoteService.createQuotation(quoteBO, function(response) {
//					console.log(JSON.stringify(response));
					if(response.status.statusCode=='success'){
						alert('Quotation Submition Successful.');
//						util.route('');
					}else{
						alert('You already have filed a quotation for this tender!');
					}
				}, 
				function(response){
					alert('Opps! Some Error Occured.');
				});
		};
		
		
	}]);
})();