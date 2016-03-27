(function(){	
	angular.module(APP_NAME).directive('addProduct',['TenderService', function(tenderService){
		return{
			restrict : 'E',
			scope : {
				favourites : '=',
				endDate : '='
			},
			templateUrl : 'app/modules/addProduct/views/addProduct-partial.html',
			link: function($scope){
				/*$(document).ready(function() {
					$('#datepicker').datepicker({
					    format: 'dd-mm-yyyy',
					});
				});*/
				
				tenderService.getAllCategories(function(parsedData){
					$scope.categoryList = parsedData;
				},
				function(errorData){
					alert('Opps some error occurred');
				}
				);
				$scope.onSelectChange = function(){
					tenderService.getProductsByCategory(function(parsedData){
						$scope.products = parsedData.data;
						
					},
					function(errorData){
						alert('Errrrrr'+JSON.stringify(errorData));
					});
				};
				$scope.onSelectChange();
				$scope.favourites = [];
				$scope.addProd = function(){
					$scope.favourites.push({});
				};
				
				$scope.delProd = function(index){
					$scope.favourites.splice(index,1);
				};
//				return $scope.favourites;
			}
			
		};
	}]);
})();