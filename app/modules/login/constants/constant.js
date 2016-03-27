(function(){
	angular.module(APP_NAME)
	.constant("LOGIN_CONSTANT", {
		"CONFIG_URL" : "app/modules/login/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Login",
		"LOGIN_URL" : "user/authentication"
	});
})();