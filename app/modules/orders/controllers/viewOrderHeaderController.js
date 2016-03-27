(function(){
	angular.module(APP_NAME).
	controller('OrderHeaderCtrl', [ '$scope', 'OrderHeaderService','sessionFactory','utilityService','$state','$stateParams',
	function($scope, orderHeaderService,sessionFactory,util,$state,$stateParams) {
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.userId = $scope.userBO.userId;
		$scope.userRole = $scope.userBO.userRole.toLocaleLowerCase();
		//alert($scope.userId+'  '+$scope.userRole);
		var requestBO = {
				"header": {
					"userId" : $scope.userBO.userId,
					"userRole": $scope.userBO.userRole.toLocaleLowerCase(),
				}
		};
	    /**
		 * Get list all tenders with their header details.
		 */
		orderHeaderService.getAllOrderHeaders(requestBO,function(parsedData) {
//			var vendorId = parsedData.data[0].userId;
//			sessionFactory.addSessionProperty("vid", vendorId);
//			console.log(parsedData.data);
			if(parsedData.data.length >0){
				$scope.gridOptions.data = parsedData.data;
//				sessionFactory.addSessionObject('tObj',parsedData.data);
			}
			else{
				$scope.noData = true;
			}
		},
		function(errorData){
				alert('Oops Error connecting to the server. Error Code '+errorData.status);
		}
		);
		  $scope.gridOptions = {
	      			enableFiltering: true,
	      			columnDefs : [
	                                {name:'orderId',displayName: 'Order No.',enableHiding: false,enableSorting: true },
	                                {name:'createdDate',displayName: 'Order Date',enableHiding: false,enableSorting: true},
	                                {name:'sourceType',displayName: 'Order Type',enableHiding: false,enableSorting: true},
	                                {name:'name',displayName: 'Vendor Name',enableHiding: false,enableSorting: true},
	                                {name:'userCompany',displayName: 'Establishment Name',enableHiding: false,enableSorting: true},
	                                {name:'orderTotal',displayName: 'Total Cost',enableHiding: false,enableSorting: true},
	                                {name:'userCompany',displayName: 'Delivery Status',enableHiding: false,enableSorting: true},
	                                {name: ' ', cellTemplate: '<button class="view_dtl" ng-click="grid.appScope.viewDetailsById(row.entity)">View Details</button>' }
	                            ]
	      		};
		
	          $scope.viewDetailsById = function(key){
					 util.routeWithParams('vieworderdetails',key.orderId);
		          };
	          $scope.goTo = function(key){
	        	  util.route(key);
	          };
			
	}]);
})();