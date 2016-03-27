(function(){
	angular.module(APP_NAME)
	.run(function($http,RESET_CONSTANT, moduleConfigurationService) {
		/**
		 * Module Initialisation
		 */
		moduleConfigurationService.initialiseModule(RESET_CONSTANT, function(result){
		});
	});
})();