(function(){
	angular.module(APP_NAME).
	controller('ViewOrderCtrl', [ '$scope', 'ViewOrderService','sessionFactory','utilityService','$stateParams',
	function($scope, viewOrderService,sessionFactory,util,$stateParams) {
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.userId = $scope.userBO.userId;
		$scope.userRole = $scope.userBO.userRole.toLocaleLowerCase();
		$scope.requestBO = {
				"header": {
					"userId": Number($scope.userId),
					"userRole": $scope.userRole,
					"orderId":Number($stateParams.id)
				}
		};
		
		viewOrderService.getTenderDetailsById($scope.requestBO, function(response) {
		
			$scope.headerBO = response.data.header;
			$scope.items = response.data.items;
			$scope.gridOptions.data = $scope.items;
			console.log(JSON.stringify($scope.headerBO));
			console.log(JSON.stringify($scope.items));
		}, function(response) {
				alert('Opps some error occured.');
		});
		
		 $scope.gridOptions = {
	      			enableFiltering: true,
	      			columnDefs : [
	                                {name:'productName',displayName: 'Item Name',enableHiding: false,enableSorting: true },
	                                {name:'productBrand',displayName: 'Brand',enableHiding: false,enableSorting: true},
	                                {name:'quantity',displayName: 'Qty',enableHiding: false,enableSorting: true},
	                                {name:'uom',displayName: 'Units',enableHiding: false,enableSorting: true},
	                                {name:'quantity',displayName: 'Supply Qty',enableHiding: false,enableSorting: true},
	                                {name:'unitPrice',displayName: 'Unit Price',enableHiding: false,enableSorting: true},
	                                {name:'totalPrice',displayName: 'Cost',enableHiding: false,enableSorting: true},
	                                {name:'remarks',displayName: 'Remarks',enableHiding: false,enableSorting: true}
//	                                {name: ' ', cellTemplate: '<button class="view_dtl" ng-click="grid.appScope.viewDetailsById(row.entity)">View Details</button>' }
	                            ]
	      		};
			
	}]);
})();