(function(){
	angular.module(APP_NAME)
	.constant("TENDER_CONSTANT", {
		"CONFIG_URL" : "app/modules/tenders/config/config.json",
		"MOCK_URL" :"app/modules/tenders/config/mock.json",
		"MOCK_CAT_URL": "app/modules/tenders/config/mock_cateogories.json",
		"MOCK_PRODUCT_URL":"app/modules/tenders/config/mock_product_url.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Tender",
		"CREATE_TENDER_URL" : "tender/tenderUpload",
		"GET_CATEGORIES" : "product/getAllCategories",
		"GET_PRODUCTS" : "product/getAllProducts",
		"CONFIG_URL" : "app/modules/viewTender/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "View Tenders",
		"VIEW_URL" : "/user/viewtenders",
		"MOCK_URL" : "app/modules/viewTender/config/mock.json",
		"VIEW_TENDER_HEADERS" : "tender/viewTenderList",
		"GET_TENDER_DETAILS" : "tender/viewTenderDetails"
	});
})();