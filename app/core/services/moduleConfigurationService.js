	/**
	 * Service to provide the set configuration of individual modules
	 */
(function(){
	angular.module(APP_NAME)
		.service("moduleConfigurationService", ["$http", "APP_CONSTANT", "registerModuleService", "utilityService",
		              function($http, APP_CONSTANT, registerModuleService, util) {
			var vm = this;
			/**
			 * Function to initialise a module configuration
			 */
			vm.initialiseModule = function (module_constant, callback){
				$http.get(module_constant.CONFIG_URL).success(function(configResponse) {
					/** ITERATE OVER MODULE ROUTES **/
			        angular.forEach(configResponse.routes, function(route) {
			        	route.moduleTitle = module_constant.MODULE_TITLE;
		        		route.moduleType = configResponse.moduleType;
		        		route.moduleUrl = configResponse.moduleUrl;
			        	
			        	/** REGISTER MODULE ROUTE **/
			        	vm.registerModuleRoute(route);
		        		
		        		/** CHECK IF MODULE IS 'PRIVATE' AND PARENT ROUTE IS 'MODULES' **/
			        	if (checkIfModulePrivate(configResponse.moduleType) 
			        			&& checkIfParentAsModules(route.parentState)
			        			&& !checkIfDefaultPrivateModule(route.state)){
			        		
			        		/* SET MODULE ICON, ENVIORNMENT, TITLE, MODULE_TYPE */
			        		route.moduleIcon = configResponse.moduleIcon;
			        		route.moduleEnvironment = module_constant.MODULE_ENVIRONMENT;
			        		
			        		/** REGISTER MODULE INTO THE SYSTEM **/
			        		registerModuleService.registerModule(route);
			        	}
			        });
			        
			        
			        /**
			         * After Module Initialisation return the execution 
			         * to callback function with response as parameter
			         */
			        if (callback != null) {
			        	callback(configResponse);
			        }
			    });
			};
			
			/**
			 * Function to register a module route
			 */
			vm.registerModuleRoute = function(route) {
				angular.module(APP_NAME).stateProvider.state(getParentStateStr(route) + route.state, route);
				console.log(getParentStateStr(route) + route.state);
			};
			
			/**
			 * Function to check if module is PRIVATE or not
			 */
			function checkIfModulePrivate(moduleType) {
				return util.equalsIgnoreCase(moduleType, APP_CONSTANT.MODULE_TYPE.PRIVATE);
			};
			
			/**
			 * Function to check if module parent is MODULES or not
			 */
			function checkIfParentAsModules(parentState) {
				return util.equalsIgnoreCase(parentState, APP_CONSTANT.PARENT_STATE_MODULES);
			};
			
			/**
			 * Function to check if module is not Default Private Module
			 */
			function checkIfDefaultPrivateModule(state) {
				return util.equalsIgnoreCase(state, APP_CONSTANT.DEFAULT_ROUTES.PRIVATE_STATE);
			};
			
			/**
			 * Function to get the parentState string
			 */
			function getParentStateStr(route) {
					return APP_CONSTANT.PARENT_STATE_MODULES+".";
			};
	}]);
})();