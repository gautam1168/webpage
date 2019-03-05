$(document).ready(function()
{
	"use strict"
	const HotelLocations = ["Mumbai", "Pune", "Hyderabad", "Bengaluru"]
	const Rooms = ["Deluxe", "Double Delux", "Non AC"]
	populateSearchForm()

	function populateSearchForm() {
		let menuContainer = $("ul.search_form_list")
		let menuItemTemplate = $("ul.search_form_list > li.search_dropdown").get(0)
		menuContainer.empty()

		//Add locations
		let locations = $.clone(menuItemTemplate)
		$(locations).find("span").text("Locations")
		$(locations).find("ul").empty()
		HotelLocations.forEach(location => {
			$(locations).find("ul").append($("<li>").text(location))
		})
		menuContainer.append(locations)

		//Add checkin date
		let checkin = $.clone(menuItemTemplate)
		let picker = $("<input>")
						.attr("type", "text")
						.attr("placeholder", "Check in")
						.addClass("datepicker")
						.css({
							position: 'relative',
							width: '100%',
							border: 'none'
						})
		$(checkin).find("span").replaceWith(picker)
		$(checkin).find("ul").remove()
		menuContainer.append(checkin)

		//Add checkout date
		let checkout = $.clone(menuItemTemplate)
		picker = $("<input>")
						.attr("type", "text")
						.attr("placeholder", "Check out")
						.addClass("datepicker")
						.css({
							position: 'relative',
							width: '100%',
							border: 'none'
						})
		$(checkout).find("span").replaceWith(picker)
		$(checkout).find("ul").remove()
		menuContainer.append(checkout)

		//Add guests
		let guests = $.clone(menuItemTemplate)
		$(guests).attr("id", "guests")
		let guestOptions = $("<div>").css({
			display: "flex",
			"justify-content": "space-around"
		})
		let guestOptionsContainer = $("<div>").append(guestOptions)

		let chooser = $("<div>")
		chooser.append($("<span>").text("Adults: "))
		chooser.append(
			$("<input>")
			.attr({
				"id": "numadults",
				"type": "number",
				"min": 0
			})
			.css({
				width: "50%"
			})
		)
		guestOptions.append(chooser)
		chooser = $.clone(chooser.get(0))
		$(chooser).find('span').text('Children: ')
		$(chooser).find("input").attr("id", "numchildren")
		guestOptions.append(chooser)

		$(guests).attr({
			"data-toggle": "popover",
			"data-html": true,
			"data-content": guestOptionsContainer.html(),
			"data-placement": "top",
			"title": "Choose guests"
		})
		$(guests).find("span").text("Guests")
		$(guests).find("ul").remove()
		menuContainer.append(guests)

		//Add rooms
		let rooms = $.clone(menuItemTemplate)
		$(rooms).find("span").text("Rooms")
		$(rooms).find("ul").empty()
		Rooms.forEach(room => {
			$(rooms).find("ul").append($("<li>").text(room))
		})
		menuContainer.append(rooms)
	}
});
