(function(){
	angular.module(APP_NAME)
	.constant("CREATE_QUOTATION_CONSTANT", {
		"CONFIG_URL" : "app/modules/createQuotation/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Submit Quotation",
		"CREATE_LINK": "quotation/quotationUpload",
		"GET_QUOTE_HEADER": "quotation/viewQuotations",
		"GET_QUOTE_DETAIL": "quotation/viewQuotationDetails",
		"VIEW_QUOTATION_HEADERS": "quotation/viewQuotations"
	});
})();