(function(){
	angular.module(APP_NAME).
	controller('viewQuotationCtrl', [ '$scope', 'ViewQuotationService','sessionFactory','$stateParams','utilityService',
	function($scope, viewQuotationService,sessionFactory,$stateParams,util) {
		$scope.userBO = sessionFactory.getStoredObj();
//		console.log($scope.userBO);
		$scope.tObj = sessionFactory.getSessionObject('tObj');
//		alert(JSON.stringify($scope.tObj));
		$scope.quoteHeader = {};
		$scope.headerObj = {
				"userId" : Number($scope.userBO.userId),
				"userRole" : $scope.userBO.userRole,
				"tenderId" : $stateParams.id1,
				"quotationId" : $stateParams.id2
		};

			viewQuotationService.getQuotationDetails($scope.headerObj,function(response) {
				$scope.gridOptions.data = response.data.items;
				$scope.quoteObj = response.data.header;
			}, function(response) {
				alert('Opps some error occured.');
			});
	
	    $scope.gridOptions = {
				enableFiltering: true
		};
		$scope.gridOptions.columnDefs = [
		                                 {field:'productName',displayName:'Item Name'},
		                                 {field:'productBrand',displayName: 'Brand'},
		                                 {field:'quantity', displayName: 'Qty'},
		                                 {field:'uom', displayName: 'Units'},
		                                 {field: 'remarks', displayName: 'Description/Details'},
		                                 {field: 'unitPrice', displayName: 'Unit Price'},
		                                 {field: 'totalPrice', displayName: 'Cost'},
		                             ];
		$scope.placeOrder = function(){
			var isSure = util.showConfirmBox("Are you sure you want to place an Order with this Vendor?");
			alert(isSure);
			if(isSure){
				util.routeWithTwoParams("order", $stateParams.id1, $stateParams.id2);
			}
		};
		
	}]);
})();