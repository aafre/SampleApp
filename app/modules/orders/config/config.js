(function(){
	angular.module(APP_NAME)
	.run(function($http,ORDER_CONSTANT, moduleConfigurationService) {
		/**
		 * Module Initialisation
		 */
		moduleConfigurationService.initialiseModule(ORDER_CONSTANT, function(result){
		});
	});
})();