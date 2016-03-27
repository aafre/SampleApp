(function(){
	angular.module(APP_NAME)
	    .controller("HomeCtrl", ["$scope", 'sessionFactory', '$timeout', 'APP_CONSTANT',
	                             'utilityService','$state','ngDialog',
	     function($scope, sessionFactory, $timeout, APP_CONSTANT, util,$state,ngDialog) {
	    	
	    	/*$scope.open = function() {
                ngDialog.open({ template: 'app/modules/login/views/Login.html' });
            };*/
	    	/*$timeout( function(){
		    	if (sessionFactory.isLoggedIn()) {
		    		util.go(APP_CONSTANT.PARENT_STATE_MODULES,APP_CONSTANT.DEFAULT_ROUTES.PRIVATE_STATE);
		    	} else {
		    		$state.go('home');
		    	}
	    	}, 1);
	    	*/
	    	
	    }]);
})();
