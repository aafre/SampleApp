(function(){
	angular.module(APP_NAME).
	controller('ProfileCtrl', [ '$scope', 'ProfileService','sessionFactory','utilityService',
	function($scope, profileService,sessionFactory,util) {
		$scope.user = {
//				'country': 'UK'
			};
		$scope.userBO = { };
		$scope.user.userId = sessionFactory.getSessionProperty('userId');
		$scope.user.name = sessionFactory.getSessionProperty('name');
		
		profileService.getProfileDetails($scope.user.userId,function(parsedData) {
			$scope.user = parsedData.data;
			$scope.userBO = parsedData;
			
		},
		function(errorData) {
//			console.log(JSON.stringify(errorData));
			alert('Error Connecting to the server. Error Code: '+errorData.status);
		}
		);
		
			$scope.selectedCountry = $scope.user.userCountry;
			
			$scope.listOfCountries = [
			              			{
			              				"countryName":"India",
			              				"countryCode": "+91"
			              			},
			              			{
			              				"countryName":"UK",
			              				"countryCode": "+44"
			              			},
			              			{
			              				"countryName":"US",
			              				"countryCode": "+1"
			              			},
			              			
			              			];
			
			$scope.editProfile = function(){
				$scope.edit = true;
			};
			
			
			
			$scope.resetPassword = function(){
				util.route('resetpassword');
			};
			$scope.cancel = function(){
				profileService.getProfileDetails($scope.user.userId,function(parsedData) {
					$scope.user = parsedData.data;
//					$scope.userBO = parsedData;
					
				},
				function(errorData) {
//					console.log(JSON.stringify(errorData));
					alert('Error Connecting to the server. Error Code: '+errorData.status);
				}
				);
				$scope.edit=false;
			};
			
			$scope.update = function(){
				console.log(JSON.stringify($scope.user));
				profileService.editProfile($scope.user,function(parsedData) {
					$scope.employeeLists = parsedData;
				},
				function(errorData) {
					alert('Opps error !');
				}
				);
				alert('Information Updated Successfully.');
				$scope.edit=false;
			};
	}]);
})();



