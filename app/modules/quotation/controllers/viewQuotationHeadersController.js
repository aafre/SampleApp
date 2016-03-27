(function(){
	angular.module(APP_NAME).
	controller('QuotationHeaderCtrl', [ '$scope', 'QuotationHeaderService','sessionFactory','utilityService','$state','$stateParams',
	function($scope, quotationHeaderService,sessionFactory,util,$state,$stateParams) {
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.userId = $scope.userBO.userId;
		$scope.userRole = $scope.userBO.userRole.toLocaleLowerCase();
		//alert($scope.userId+'  '+$scope.userRole);
		var requestBO = {
				"header": {
					"userId" : $scope.userBO.userId,
					"userRole": $scope.userBO.userRole.toLocaleLowerCase(),
					"tenderId": $stateParams.id
				}
		};
	    /**
		 * Get list all tenders with their header details.
		 */
		quotationHeaderService.getAllQuotationHeaders(requestBO,function(parsedData) {
			var vendorId = parsedData.data[0].userId;
			sessionFactory.addSessionProperty("vid", vendorId);
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
	                                {name:'quotationId',displayName: 'Quotation No.',enableHiding: false,enableSorting: true },
	                                {name:'userName',displayName: 'Vendor Name',enableHiding: false,enableSorting: true},
	                                {name:'userCompany',displayName: 'Establishment Name',enableHiding: false,enableSorting: true},
//	                                {name:'toDate',enableHiding: false,enableSorting: true},
	                                {name:'expectedDeliveryDate',enableHiding: false,enableSorting: true},
//	                                {name: 'quotationTotal',enableHiding: false,enableSorting: true},
	                                {name: ' ', cellTemplate: '<button class="view_dtl" ng-click="grid.appScope.viewDetailsById(row.entity)">View Details</button>' }
	                              
	                            ],
	      		};
		
	          $scope.viewDetailsById = function(key){
					 util.routeWithTwoParams('viewquotation',key.tenderId,key.quotationId);
		          };
	          $scope.goTo = function(key){
	        	  util.route(key);
	          };
			
	}]);
})();