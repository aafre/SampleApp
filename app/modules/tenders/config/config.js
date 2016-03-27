(function(){
	angular.module(APP_NAME)
	.run(function($http,TENDER_CONSTANT, moduleConfigurationService) {
		/**
		 * Module Initialisation
		 */
		moduleConfigurationService.initialiseModule(TENDER_CONSTANT, function(result){
		});
	});
})();