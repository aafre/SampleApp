/*************************************************
 *       APPLICATION LEVEL GLOBAL CONSTANTS      *
 ************************************************/
(function(){
		angular.module(APP_NAME).constant("APP_CONSTANT", {
		"MODULE_TYPE" : {
			"PUBLIC" : "public",
			"PRIVATE" : "private"
		},
		"PARENT_STATE_MODULES" : "modules",
		"CONFIG_URL" : "app/core/config.json",
		"APP_TYPE" : "W",
		"ENVIRONMENT" : {
			"DEVELOPMENT" : "development",
			"UAT" : "uat",
			"PRODUCTION" : "production"
		},
		"APP_ENVIRONMENT" : "development",
		"DEFAULT_ROUTES" : {
			"PUBLIC_STATE" : "login",
			"PRIVATE_STATE" : "welcome"
		},
	});
})();