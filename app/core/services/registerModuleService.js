	/**
	 * Service to provide the registered modules
	 */
(function(){
	angular.module(APP_NAME)
		.service("registerModuleService", ["$rootScope", "APP_CONSTANT", "utilityService", function($rootScope, APP_CONSTANT, util) {
			var vm = this;
			
			/**
			 * Root Scope List of Registered Modules
			 */
			$rootScope.moduleList = [];
			
			/**
			 * Function to register a module
			 */
			vm.registerModule = function (module){
				$rootScope.moduleList.push(module);
			};
			
			/**
			 * Function to get list of modules
			 */
			vm.getAllRegistredModules = function() {
				return $rootScope.moduleList; 
			};
			
			/**
			 * Function to get list of registered modules
			 */
			vm.getRegistredModules = function() {
				return getEnvironmentRegisteredModules(); 
			};
			
			/**
			 * Function to get list of registered modules
			 * for Production environment
			 */
			function getProductionRegisteredModules() {
				
				var dashboardModules = [];
				
				angular.forEach($rootScope.moduleList, function(module) {
					if (!util.equalsIgnoreCase(module.moduleEnvironment, APP_CONSTANT.ENVIRONMENT.UAT)
							&& !util.equalsIgnoreCase(module.moduleEnvironment, APP_CONSTANT.ENVIRONMENT.DEVELOPMENT)) {
						dashboardModules.push(module);
					}
				});
				
				return dashboardModules;
			};
			
			/**
			 * Function to get list of registered modules
			 * for UAT environment
			 */
			function getUATRegisteredModules() {
				
				var dashboardModules = [];
				
				angular.forEach($rootScope.moduleList, function(module) {
					if (!util.equalsIgnoreCase(module.moduleEnvironment, APP_CONSTANT.ENVIRONMENT.DEVELOPMENT)) {
						dashboardModules.push(module);
					}
				});
				
				return dashboardModules;
			};
			
			/**
			 * Function to get list of registered modules
			 * for DEVELOPMENT environment
			 */
			function getDevRegisteredModules(){
				
				var dashboardModules = [];
				
				angular.forEach($rootScope.moduleList, function(module) {
					if (util.equalsIgnoreCase(module.moduleEnvironment, APP_CONSTANT.ENVIRONMENT.DEVELOPMENT)) {
						dashboardModules.push(module);
					}
				});
				return dashboardModules;
			};
			
			/**
			 * Function to get list of registered modules
			 * for Application environment
			 */
			function getEnvironmentRegisteredModules() {
				if (util.equalsIgnoreCase(APP_CONSTANT.APP_ENVIRONMENT, APP_CONSTANT.ENVIRONMENT.PRODUCTION)) {
					return getProductionRegisteredModules();
				} else if (util.equalsIgnoreCase(APP_CONSTANT.APP_ENVIRONMENT, APP_CONSTANT.ENVIRONMENT.UAT)) {
					return getUATRegisteredModules();
				} else if(util.equalsIgnoreCase(APP_CONSTANT.APP_ENVIRONMENT,
						APP_CONSTANT.ENVIRONMENT.DEVELOPMENT)) {
					return getDevRegisteredModules();
				}
			}
		}]);
})();