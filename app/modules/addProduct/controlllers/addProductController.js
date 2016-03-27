(function(){
	angular.module(APP_NAME)
	.controller('addProductCtrl',
			['$scope','TenderService',
	                function($scope,tenderService) {
				$scope.selectedCategory = '';
		
			$scope.tender = [];

			
			$scope.uploadFile = function(){
				        var file = $scope.myFile;
				        console.log('file is ' );
				        console.dir(file);
				        var uploadUrl = "/root/Desktop/";
				        tenderService.uploadFileToUrl(file, uploadUrl);
				    };
				
		tenderService.getAllCategories(function(parsedData){
			console.log(parsedData);
			$scope.categoryList = parsedData;
		},
		function(errorData){
			alert('Err'+JSON.stringify(errorData));
		}
		);
		$scope.favourites = [];
		$scope.addProd = function(){
//			console.log("called");
			$scope.favourites.push({});
		};
		
		$scope.delProd = function(index){
			$scope.favourites.splice(index,1);
			
		};
	}])
	
	.directive('fileModel', ['$parse', function ($parse) {
	    return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	            var model = $parse(attrs.fileModel);
	            var modelSetter = model.assign;
	            
	            element.bind('change', function(){
	                scope.$apply(function(){
	                    modelSetter(scope, element[0].files[0]);
	                });
	            });
	        }
	    };
	}]);
})();