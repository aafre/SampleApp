(function(){
	angular.module(APP_NAME)
	.constant("ORDER_CONSTANT", {
		"CONFIG_URL" : "app/modules/orders/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Place Order",
		"GET_QUOTE_DETAIL": "quotation/viewQuotationDetails",
		"CREATE_ORDER":"order/createOrder",
		"VIEW_ORDER_HEADERS": "order/viewOrders",
		"GET_DETAILS": "order/viewOrderDetails"
	});
})();