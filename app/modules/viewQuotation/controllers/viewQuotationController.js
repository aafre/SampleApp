(function(){
	angular.module(APP_NAME).
	controller('viewQuotationCtrl', [ '$scope', 'ViewQuotationService',
	function($scope, viewQuotationService) {
		$scope.gridOptions = {};
		$scope.gridOptions.columnDefs = [
		                                 {field:'category', cellTemplate: '<div ng-click="viewDetail()"></div>'},
		                                 {field:'itemName'},
		                                 {field:'brand'},
		                                 {field:'Qty'},
		                                 {field:'units'},
		                                 {field: 'desc'},
		                                 {field: 'supplyQty'},
		                                 {field: 'unitPrice'},
		                                 {field: 'cost'},
		                                 {field: 'remarks'}
		                             ];
		$scope.gridOptions.data = [];
	    $scope.gridOptions = {
				enableFiltering: true
		};
		
	}]);
})();