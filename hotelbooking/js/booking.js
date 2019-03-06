(function () {

	'use strict';

	var wirePaymentButton = function() {
		$("#paybutton").click(event => {
			$("#detailsform").css("display", "none")
			$("#paymentform").css("display", "block")
		})

		$("#paymentSuccessbtn").click(event => {
			$("#detailsform").css("display", "block")
			$("#paymentform").css("display", "none")
			alert("Payment was successful! Check your email for receipt and tracking info.")
			window.location.href = "./index.html"
		})
	}

	$(function() {
		wirePaymentButton();
	});
})();
