(function(){
	angular.module(APP_NAME)
	.constant("REGISTER_CONSTANT", {
		"CONFIG_URL" : "app/modules/register/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Register",
		"REGISTER_URL" : "user/registerUser"
	});
})();