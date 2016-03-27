(function(){
	angular.module(APP_NAME)
	.constant("RESET_CONSTANT", {
		"CONFIG_URL" : "app/modules/resetPassword/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Reset Password",
		"RESET_URL" : "/user/resetPassword"
	});
})();