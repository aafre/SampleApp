(function(){
	angular.module(APP_NAME)
	.controller('LoginCtrl', 
			[ '$scope','LoginService','utilityService','ROUTE_CONSTANT','sessionFactory','$location',
		function($scope,loginService,util,routes,sessionFactory,$location) {
			console.log('logg');
			util.removeClass();
			$scope.clearData = function(){
				$scope.user = {
						"eMailId": '',
						"userPassword": ''
				};
			};
			
			$scope.gotoRegister = function(){
				util.route("register");
			};
			$scope.login = function() {
				console.log("called");
				loginService.authenticate($scope.user,function(parsedData) {
					if(parsedData.status.statusCode=='success'){
						sessionFactory.doLogin(parsedData.data.userId);
						console.log(parsedData.data);
						//sessionFactory.addSessionProperty('name',parsedData.data.firstName);
						//sessionFactory.addSessionProperty('type',parsedData.data.userRole);
						sessionFactory.storeObj(parsedData.data);
						console.log('Login Successfull with user Id: '+parsedData.data.userId);
						util.route('dashboard');
					}
					else{
						alert('Nah. Try again.');
					}
				},
				function(errorData){
						console.log(errorData.status);
						alert('Invalid Username or Password. Please try again.');
				}
				);
			};
		}]);
})();