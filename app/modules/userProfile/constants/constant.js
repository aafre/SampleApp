(function(){
	angular.module(APP_NAME)
	.constant("USER_PROFILE_CONSTANT", {
		"CONFIG_URL" : "app/modules/userProfile/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "My Profile",
		"PROFILE_URL" : "user/viewUserProfile",
		"EDIT_URL" : "user/editUserProfile"
	});
})();