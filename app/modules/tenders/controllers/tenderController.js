(function(){
	angular.module(APP_NAME)
	.controller('tenderCtrl',
			['$scope','TENDER_CONSTANT','TenderService','sessionFactory','$filter','utilityService',
	                function($scope,TENDER_CONSTANT,tenderService,sessionFactory,$filter,util) {

		$scope.favourites = [];
		$scope.userBO = sessionFactory.getStoredObj();
		$scope.uploadExcel = function(file){
			$scope.userId = Number(sessionFactory.getSessionProperty('userId'));
			console.log($scope.userId);
			tenderService.uploadFileToUrl(file, $scope.userId);
		};
		$(document).ready(function() {
			$('#datepicker').datepicker({
				format: 'yyyy-mm-dd',
				startDate: '-0d',
				endDate: '+13d'
			});
			$('#datepicker').on('change', function(){
				$('.datepicker').hide();
			});
			$('#expectedDate').datepicker({
				format: 'yyyy-mm-dd',
				startDate: '-0d',
				endDate: '+4d'
			});
			$('#expectedDate').on('change', function(){
				$('.datepicker').hide();
		    });
		});
		$scope.todaysDate = new Date();
		$scope.timeStamp = new Date().getTime();
		$scope.timeStamp = $filter('date')($scope.timeStamp, "hh:mm:ss");
		$scope.todaysDate = $filter('date')($scope.todaysDate, "yyyy-MM-dd hh:mm:ss");
		
		$scope.submit = function(){
			$scope.cutOfDate = document.getElementById('datepicker').value;
			$scope.cutOfDate = $scope.cutOfDate+" "+$scope.timeStamp;
			$scope.expectedDate = document.getElementById('expectedDate').value;
			$scope.expectedDate = $scope.expectedDate+" "+$scope.timeStamp;
			
			console.log($scope.todaysDate+"$scope.expectedDate:::"+$scope.cutOfDate+"::::"+$scope.expectedDate);
			$scope.items = [];
			
			angular.forEach($scope.favourites, function(value, key) {
//				alert(JSON.stringify($scope.favourites));
				$scope.tenderObj = {
						"productName" : $scope.favourites[key].name.title,
						"productBrand": $scope.favourites[key].productBrand,
						"quantity": $scope.favourites[key].quantity,
						"uom":$scope.favourites[key].uom,
						"remarks": $scope.favourites[key].remarks
				};
				$scope.items.push($scope.tenderObj);
				console.log(angular.toJson($scope.items));
				var finalObj = {
						"header": {
							"userId": Number(sessionFactory.getSessionProperty('userId')),
							"expectedDeliveryDate": $scope.expectedDate,
							"fromDate": $scope.todaysDate,
							"toDate":$scope.cutOfDate,
							"tenderName" : $scope.tenderName
						},
						items : $scope.items
				};
				console.log(angular.toJson(finalObj));
				tenderService.createTender(finalObj,function(parsedData){
					alert('Tender created successfully.');
					util.route('viewtenders');
				},
				function(errorData){
					alert('Opps!! some error occured');
					}
				);
			});
		};
		tenderService.getAllCategories(function(parsedData){
				$scope.categoryList = parsedData;
			},
			function(errorData){
				alert('Opps some error occured');
			}
			);
		$scope.onSelectChange = function(){
			tenderService.getProductsByCategory(function(parsedData){
				$scope.products = parsedData;
			},
			function(errorData){
				alert('Opps some error occured');
			});
			};
	}]);

	
})();