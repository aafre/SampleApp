(function(){
		angular.module(APP_NAME).
		controller('RegisterCtrl', [ '$scope', 'RegisterService','utilityService','sessionFactory',
		function($scope, registerService,util,sessionFactory) {
 			$scope.showClass = 0;
 			$scope.tnc = false;
			 $scope.stepOneClass = false;
			 $scope.stepTwoClass = false;
			 $scope.stepThreeClass = false;
			 $scope.EMAIL_REGEXP = "/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i";
			 $scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
			 $scope.onlyNumbers = /^\d+$/;
			 $scope.otpValid = false;
			$scope.confirmPassword='';
			$scope.clearData = function(){
				$scope.userBO.GST = '';
				$scope.userBO.VAT = '';
			};
			$scope.listOfCountries = [
			{
				"countryName":"India",
				"countryCode": "+91"
			},
			{
				"countryName":"Singapore",
				"countryCode": "+44"
			},
			{
				"countryName":"US",
				"countryCode": "+1"
			}
			];
			$scope.cities = ['Mumbai','Nasik','Delhi'];
			$scope.userType = ['Buyer','Seller'];
			//to show rest of the form after OTP is entered correctly.
			$scope.showForm = function(){
				 $scope.otpValid = !$scope.otpValid;
			 };
			 /**
			  *Logic for step form.
			  */
			 $scope.step = 1;
			 
		        $scope.nextStep = function() {
		        	$scope.step++;
		        	console.log('step + hua'+$scope.step);
		        };
		 
		        $scope.prevStep = function() {
		            $scope.step--;
		        };
		        $scope.userBO ={};
		        $scope.submit = function(key){
		        	$scope.showClass = $scope.showClass + 1;
		        	 $scope.userBO.userCountry=$scope.selectedCountry.countryName;
		        	 $scope.userBO.userCity = $scope.selectedCity;
		        	 $scope.userBO.userCurrency = '$';
		        	if(key == 'next'){
		        		 $scope.nextStep();
		        		 if($scope.step == 2){
		        			 $scope.stepOneClass = true;
		        		 }
		        		 else if($scope.step==3){
		        			 $scope.stepTwoClass = true;
		        		 }
		        		 else{
		        			 $scope.stepThreeClass = true;
		        		 }
		        	}
		        	else{
		        		 $scope.prevStep();
		        	}
		        	//console.log(JSON.stringify($scope.userBO));
		        	if($scope.step==4){
		        		console.log(JSON.stringify($scope.userBO));
		        		registerService.addUser($scope.userBO,function(parsedData) {
						console.log(JSON.stringify(parsedData));
		        		sessionFactory.doLogin(parsedData.data.userId);
		        		sessionFactory.storeObj(parsedData.data);
		        		alert('Registered Successfully.');
						util.route('dashboard');
					},
					//not needed null check in errorData
					function(errorData){
						if(errorData.data=='null'||errorData.data==null){
							alert('Oops Error connecting to the server. Error Code '+errorData.status);
						}
					});
		        		};
		        	};
		}]);
})();