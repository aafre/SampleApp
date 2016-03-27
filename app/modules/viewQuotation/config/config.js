(function(){
	angular.module(APP_NAME)
	.run(function($http,VIEW_QUOTATION_CONSTANT, moduleConfigurationService) {
		/**
		 * Module Initialisation
		 */
		moduleConfigurationService.initialiseModule(VIEW_QUOTATION_CONSTANT, function(result){
		});
	});
})();