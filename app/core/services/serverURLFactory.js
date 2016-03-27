	/**
	 * Factory to provide the URL configured for respective environment
	 */
(function(){
	angular
		.module(APP_NAME)
		.factory('serverURLFactory',["APP_CONSTANT", "utilityService", function(APP_CONSTANT, util) {
			var envUrls = {};
			var factory = {};
			
			/**
			 * Function to return root server URL on the basis of the environment 
			 */
			factory.getRootServerURL = function() {
				
				if (util.equalsIgnoreCase(APP_CONSTANT.APP_ENVIRONMENT, APP_CONSTANT.ENVIRONMENT.PRODUCTION)) {
					return factory.getProductionServerURL(); // PRODUCTION
				} else if (util.equalsIgnoreCase(APP_CONSTANT.APP_ENVIRONMENT, APP_CONSTANT.ENVIRONMENT.UAT)) {
					return factory.getUATServerURL(); // UAT
				} else {
					return factory.getDevelopmentServerURL(); // DEVELOPMENT
				}
			};
			
			/**
			 * Function to set URLs object
			 */
			factory.setServerURLs = function(resp) {
				envUrls = resp;
			};
		
			/**
			 * Function to get Development URL
			 */
			factory.getDevelopmentServerURL = function() {
				return envUrls.development;
			};
			
			/**
			 * Function to get UAT URL
			 */
			factory.getUATServerURL = function() {
				return envUrls.uat;
			};
			
			/**
			 * Function to get Production URL
			 */
			factory.getProductionServerURL = function() {
				return envUrls.production;
			};
			
			/**
			 * Function to concat the environment specific root URL as prefix
			 * and module URL passed in parameter as suffix  
			 */
			factory.getCompleteURL = function(moduleURL) {
				return factory.getRootServerURL() + moduleURL;
			};
			
			/**
			 * Custom DOmain specific URL
			 * Function to concat the environment specific root URL as prefix
			 * and module URL passed in parameter as suffix  
			 */
			factory.getCompleteCustomDomainURL = function(domainName,moduleURL) {
				return domainName + moduleURL;
			};
			
			return factory;
	}]);
})();