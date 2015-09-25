(function() {
	angular.module("app.data")
		.value("weatherImgUrl", "http://openweathermap.org/img/w/") //make value string for reusable purpose - another way for making objects for dependency injection
		.value("weatherSvcUrl", "http://api.openweathermap.org/data/2.5/")
		.value("countryFlagImgUrl", "http://openweathermap.org/images/flags/")
}());