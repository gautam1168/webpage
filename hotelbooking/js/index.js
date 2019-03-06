(function () {

	'use strict';

	var loginRedirect = function() {
		if (localStorage.getItem("loggedin") != "true") {
			window.location.href = "./login/index.html"
		}
	}

	var hotelSearch = function() {
		$("button#findhotels").click(event => {
			let location = $("#hotel #location").val()
			let checkindate = $("#hotel #checkindate").val()
			let checkoutdate = $("#hotel #checkoutdate").val()
			let people = $("#hotel #people").val()
			localStorage.setItem("location", location)
			localStorage.setItem("checkindate", checkindate)
			localStorage.setItem("checkoutdate", checkoutdate)
			localStorage.setItem("people", people)
			window.location.href = "./hotels.html"
			return false
		})
	}

	$(function() {
		loginRedirect();
		hotelSearch();
	});
})();
