(function(){
	angular.module(APP_NAME).
	controller('ResetCtrl', [ '$scope', 'ResetService','utilityService',
	function($scope, resetService,util) {
		console.log('reset ctrl');
		util.removeClass();
		$scope.email='';
		
		//to show rest of the form after OTP is entered correctly.
		$scope.showForm = function(){
			 $scope.otpValid = !$scope.otpValid;
		 };
		
		$scope.resetPassword = function() {
			alert('called');
		};
	}]);
})();