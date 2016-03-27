(function(){
	angular.module(APP_NAME)
	.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider) {
//		$httpProvider.defaults.withCredentials = true;
		angular.module(APP_NAME).stateProvider = $stateProvider;
	
		
		  $stateProvider
		    
		  .state("home", {
		      url          : "/home",
		      templateUrl   : "app/core/views/common.html",
		      controller    : "HomeCtrl"
		  	})
		  .state("register", {
			  url          : "/register",
			  templateUrl   : "app/modules/register/views/register.html"
			  //controller    : "HomeCtrl"
			})
		   .state("dashboard", {
			  url          : "/dashboard",
			  templateUrl   : "app/modules/dashboard/views/dashboard.html"
			  //controller    : "HomeCtrl"
			})
			.state("quotation", {
			  url          : "/quotation",
			  templateUrl   : "app/modules/quotation/views/create-quotation.html"
			  //controller    : "HomeCtrl"
			})
			.state("favourites", {
			  url          : "/favourites",
			  templateUrl   : "app/modules/favourites/views/favourites.html"
			  //controller    : "HomeCtrl"
			})
			.state("reset", {
			  url          : "/resetPwd",
			  templateUrl   : "app/modules/resetPassword/views/reset.html"
			  //controller    : "HomeCtrl"
			})
			.state("tenders", {
			  url          : "/tenders",
			  templateUrl   : "app/modules/tenders/views/tender.html"
			  //controller    : "HomeCtrl"
			})
			.state("viewtenders", {
			  url          : "/viewTenders",
			  templateUrl   : "app/modules/tenders/views/view-tender.html"
			  //controller    : "HomeCtrl"
			})
			.state("quoteheader", {
			  url          : "/view-quotations/:id",
			  templateUrl   : "app/modules/quotation/views/view-quotation-headers.html"
			  //controller    : "HomeCtrl"
			})
			.state("viewquotation", {
			  url          : "/view-quotation-details/:id1/:id2",
			  templateUrl   : "app/modules/quotation/views/view-quotation.html"
			  //controller    : "HomeCtrl"
			})
			.state("vieworders", {
			  url          : "/view-orders",
			  templateUrl   : "app/modules/orders/views/view-order-headers.html"
			  //controller    : "HomeCtrl"
			})
			.state("vieworderdetails", {
				  url          : "/view-order-details/:id",
				  templateUrl   : "app/modules/orders/views/view-order.html"
				  //controller    : "HomeCtrl"
				})
			.state("tenderdetails", {
			  url          : "/details/:id",
			  templateUrl   : "app/modules/tenders/views/view-tender-details.html"
			  //controller    : "HomeCtrl"
			})
			.state("userprofile", {
			  url          : "/profile",
			  templateUrl   : "app/modules/userProfile/views/user-profile.html"
			  //controller    : "HomeCtrl"
			})
			.state("order", {
			  url          : "/place-order/:id1/:id2",
			  templateUrl   : "app/modules/orders/views/orders.html"
			  //controller    : "HomeCtrl"
			})
			.state("dev", {
			  url          : "/dev",
			  templateUrl   : "app/core/views/devAccess.html"
			  //controller    : "HomeCtrl"
			})
			.state("later", {
			  url          : "/coming-soon",
			  templateUrl   : "app/core/views/coming-soon.html"
			  //controller    : "HomeCtrl"
			})
		   .state('modules', {
		      url: '/modules',
		      "abstract" : true,
		      templateUrl:"app/core/views/module.html"
		    });
		  /* .state('welcome', {
		      url: '/welcome',
		      //"abstract" : true,
		      templateUrl:"app/core/views/welcome.html"
		    });*/
		   
		// if none of the above states are matched, use this as the fall-back
		  
		  $urlRouterProvider.otherwise('home');
	  }
	]);
})();