/**
 * Service to provide the utility functions
 */
(function(){
	angular
		.module(APP_NAME)
		.service('utilityService', ['$state','sessionFactory','APP_CONSTANT','$rootScope','$window',
		                           function($state,sessionFactory,APP_CONSTANT,$rootScope,$window) {
			
			var vm = this;
			$rootScope.title = ""; 
			/**
			 * Function to equals the two values ignoring the case
			 */
			vm.equalsIgnoreCase = function(value1, value2) {
				return angular.equals(value1.toUpperCase(), value2.toUpperCase());
			};
			
			/**
			 * Function to route to state
			 */
			vm.go = function(parentState,state) {
				$state.go(parentState+"."+state);
			};
			
			/**
	    	 * This function logsout the user.
	    	 */
	    	vm.logout = function(){ 
	    	
	    	};
	    	
	    	
	    	/**
	    	 * Simple Popup Function where
	    	 * @titleData is the title data
	    	 * @contentData is the content
	    	 * @returns the popUp function
	    	 */
	    	vm.showPopUp = function(titleData,contentData){
	    		//TODO 
	    	};
	    	
	    	vm.setTitle = function(titleValue){
	    		$rootScope.title = titleValue;
	    	};
	    	
	    	vm.goBack = function(){
	    		//$ionicHistory.goBack();
	    	};
	    	
	    	vm.showLoading = function(){
	    		/*$ionicLoading.show({
				    template: 'loading...'
				 });*/
	    	};
	    	
	    	vm.hideLoading = function(){
	    		//$ionicLoading.hide();
	    	};
	    	
	    	vm.trim = function(str) {
	    		return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	    	};
	    	
	    	/**
	    	 * Method which checks if Object then
	    	 * converts into list
	    	 * @returns Array
	    	 */
	    	vm.convertList = function(data){
	    		var list = [];
	    		 if(data.length == undefined){
    				 list.push(data);
    				 return list;
	    		 }
    			 else if(data.length != undefined){
    				 return data;
    			 }
	    	};
	    	
	    	vm.route = function(route){
	    		$state.go(route);
	    	};

	    	vm.routeWithParams = function(route,id){
	    		 $state.go(route, {'id' : id});
	    	};
	    	
	    	vm.routeWithTwoParams = function(route,id1,id2){
	    		$state.go(route,{'id1': id1,'id2':id2});
	    	};
	    	
	    	vm.showConfirmBox = function(msg){
	    			if ($window.confirm(msg))
	    				return true;
	    			else
	    				return false;
	    	};
	    	
	    	vm.removeClass = function(){
	    		/*$(document).ready(function() {
					*//**
					 * remove the backdrop class of login popup
					 * angular 1.4 and ui-bootstrap issue
					 * maually remove class
					 *//*
					$('.modal-backdrop').remove();
				});*/
	    		$('.modal-backdrop').remove();
	    	};
		}]);
	})();