(function(){
	angular.module(APP_NAME)
	.run(function($http,USER_PROFILE_CONSTANT, moduleConfigurationService) {
		/**
		 * Module Initialisation
		 */
		moduleConfigurationService.initialiseModule(USER_PROFILE_CONSTANT, function(result){
		});
	});
})();