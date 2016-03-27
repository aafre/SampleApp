var APP_NAME = 'restosource';
(function(){
	angular.module(APP_NAME, ['ui.bootstrap','ui.router','angucomplete','session',
	                          'ngMessages','ngTouch','ui.grid','ngFileUpload','ngDialog'])
	.run(function($http,APP_CONSTANT,serverURLFactory) {
		 /**
		   * Initialising application level configuration
		   * 
		   * Reading config.json file
		   */
		  $http.get(APP_CONSTANT.CONFIG_URL).success(function(response) {
			  /**
			   * Application level, default public page render property
			   */
			  APP_CONSTANT.DEFAULT_ROUTES.PUBLIC_STATE = response.defaultRoute.defaultPublicState;
			  
			  /**
			   * Application level, default private page render property
			   */
			  APP_CONSTANT.DEFAULT_ROUTES.PRIVATE_STATE = response.defaultRoute.defaultPrivateState;
			  
			  /**
			   * Setting all the environment URLs from config.json
			   */
			  serverURLFactory.setServerURLs(response.urls);
		  });
	});
})();
