(function() {
	angular.module(APP_NAME).service('TenderService', 
	[ '$http','TENDER_CONSTANT','serverURLFactory','sessionFactory','Upload','$timeout',
	  function($http,TENDER_CONSTANT,serverURLFactory,sessionFactory,Upload,$timeout) {
		var vm = this;
		
		 vm.uploadFileToUrl = function(file, userId){
			 console.log(userId);
//			 console.log("inside upload service");
			  file.upload = Upload.upload({
				url: 'http://192.168.3.61:8080/Restosource/tender/tenderExcelUpload',
			  	data: {file: file,
			  		"header":{
			  			"userId":userId
			  		}
			  	}
			  });
			  file.upload.then(function (response) {
		            console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ' + 
		            		response.data);
				  $timeout(function () {
					  console.log("inside first event");
					  file.result = response.data;
				  });
			  }, function (response) {
				  console.log(response+"inside response event");
				  if (response.status > 0)
					  $scope.errorMsg = response.status + ': ' + response.data;
			  }, function (evt) {
				  console.log(evt+"inside evt event");
				  // Math.min is to fix IE which reports 200% sometimes
				  file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			  });
		 };
		vm.getProductsByCategory = function(successcall,errorCallBack) {
			var URL  = serverURLFactory.getCompleteURL(TENDER_CONSTANT.GET_PRODUCTS);
			console.log(URL);
				$http({
						 method: 'POST',
						 url: URL,
						 data : {
							 "productCategory": "Food"
						 }
					}).then(
							function(response){
								var parsedData = angular.fromJson(response);
								console.log("succcccccccccccc"+JSON.stringify(parsedData.data));
								successcall(parsedData.data);
						},
						function(response){
							var parsedData = angular.fromJson(response);
							console.log("ohnooooo"+JSON.stringify(parsedData.data));
							errorCallBack(parsedData.data);
						});
		};
		
		vm.getAllCategories = function(successcall,errorCall) {
			var URL  = serverURLFactory.getCompleteURL(TENDER_CONSTANT.GET_CATEGORIES);
			$http({
					 method: 'POST',
					 url: URL,
					 data : ''
				}).then(
						function(response){
							var parsedData = angular.fromJson(response);
//							alert(JSON.stringify(parsedData.data.data));
							successcall(parsedData.data.data);
					},
						function(response){
						var parsedData = angular.fromJson(response);
						errorCall(parsedData.data);
						});
	};
	
	vm.createTender = function(tenderBO,successcall,errorCall) {
		var URL = serverURLFactory.getCompleteURL(TENDER_CONSTANT.CREATE_TENDER_URL);
		$http({
				 method: 'POST',
				 url: URL,
				 data: tenderBO
			}).then(
					function(response){
						var parsedData = angular.fromJson(response);
						console.log(JSON.stringify(parsedData.data));
						successcall(parsedData.data);
				},
					function(response){
						var parsedData = angular.fromJson(response);
						console.log(JSON.stringify(parsedData.data));
						errorCall(parsedData.data);
					});
};
		
	} ]);
})();