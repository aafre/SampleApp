(function(){
	angular.module(APP_NAME).
	controller('DetailsCtrl', [ '$scope', 'DetailsService','sessionFactory','$stateParams','utilityService',
	function($scope, detailService,sessionFactory,$stateParams,util) {
		console.log();
		var userId = sessionFactory.getSessionProperty('userId');

		$scope.userBO = sessionFactory.getStoredObj();
		$scope.userName = $scope.userBO.firstName;
		$scope.userRole = $scope.userBO.userRole.toLocaleLowerCase();		
		detailService.getTenderDetailsById($stateParams.id,userId,$scope.userRole,function(parsedData) {
				$scope.header = parsedData.data.header;
				console.log(JSON.stringify($scope.header));
				sessionFactory.addSessionObject('temp', parsedData.data);
				$scope.gridOptions.data = parsedData.data.items;
			},
			function(errorData){
					alert('Oops Error connecting to the server. Error Code '+errorData.status);
			}
			);
		  $scope.gridOptions = {
	      			enableFiltering: true,
	      			columnDefs : [
	                                {name:'productName',enableHiding: false,enableSorting: true },
	                                {name:'productBrand',enableHiding: false,enableSorting: true},
	                                {name:'quantity',enableHiding: false,enableSorting: true},
	                                {name:'remarks',enableHiding: false,enableSorting: true},
	                                {name: 'uom',enableHiding: false,enableSorting: true},
	                            ]
	      		};
		  $scope.goTo = function(key){
			  util.route(key);
		  };
		  
		  $scope.gotoQuotation = function(){
			  util.routeWithParams('viewquotation');
		  }
		  
		 
	}]);
})();



