(function(){
	angular.module(APP_NAME).
	controller('ViewTenderCtrl', [ '$scope', 'ViewTenderService','sessionFactory','utilityService','$state',
	function($scope, viewTenderService,sessionFactory,util,$state) {
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.userId = $scope.userBO.userId;
		$scope.userRole = $scope.userBO.userRole.toLocaleLowerCase();
		//alert($scope.userId+'  '+$scope.userRole);
		
	    /**
		 * Get list all tenders with their header details.
		 */
		viewTenderService.getAllTenderHeaders($scope.userId,$scope.userRole,function(parsedData) {
//			alert(JSON.stringify(parsedData.data));
			console.log(parsedData.data);
			if(parsedData.data.length >0){
				$scope.gridOptions.data = parsedData.data;
				sessionFactory.addSessionObject('tObj',parsedData.data);
			}else{
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
	                                {name:'tenderId',enableHiding: false,enableSorting: true },
	                                {name:'BuyerName',enableHiding: false,enableSorting: true},
	                                {name:'createdDate',enableHiding: false,enableSorting: true},
	                                {name:'toDate',enableHiding: false,enableSorting: true},
	                                {name:'expectedDeliveryDate',enableHiding: false,enableSorting: true},
	                                {name: 'quotationCount',enableHiding: false,enableSorting: true, cellTemplate: '<button ng-click="grid.appScope.goToQuotations(row.entity)">{{row.entity.quotationCount}}</button>'},
	                                {name: ' ', cellTemplate: '<button class="view_dtl" ng-click="grid.appScope.showMe(row.entity)">View Details</button>' }
	                              
	                            ],
	      		};
		
			 $scope.showMe = function(key){
				 util.routeWithParams('tenderdetails',key.tenderId);
	          };
	          
	          $scope.goToQuotations = function(key){
					 util.routeWithParams('quoteheader',key.tenderId);
		          };
	          $scope.goTo = function(key){
	        	  util.route(key);
	          };
			
	}]);
})();