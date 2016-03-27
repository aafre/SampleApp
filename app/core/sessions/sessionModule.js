(function(){
	angular.module('session', [])
	.run(function ($rootScope,APP_CONSTANT,sessionFactory,utilityService) {
		
		/**
		 * Set title on state change.
		 */
		$rootScope.$on('$stateChangeStart', function(event, curr, prev) {
				if(curr.moduleType == APP_CONSTANT.MODULE_TYPE.PRIVATE && sessionFactory.isLoggedIn()){
					utilityService.setTitle(curr.moduleTitle);
				}
				else{
					utilityService.setTitle(curr.moduleTitle);
				}
		});
	});
})();