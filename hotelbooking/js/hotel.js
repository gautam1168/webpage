(function () {

	'use strict';

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
			return false
		})
	}

	var onload = function() {
		$("#hotels #location").val(localStorage.getItem("location"))
		$("#hotels #checkindate").val(localStorage.getItem("checkindate"))
		$("#hotels #checkoutdate").val(localStorage.getItem("checkoutdate"))
		$("#hotels #people").val(localStorage.getItem("people"))
	}

	$(function() {
		onload();
		hotelSearch();
	});
})();
