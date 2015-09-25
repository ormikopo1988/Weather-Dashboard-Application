(function () {
	angular.module("app.shell")
		.controller("Shell", function ($scope, weatherSvc) {
			//take advantage of controller inheritance - the below functions will be available now in all controllers
			$scope.getWeatherImgUrl = weatherSvc.getWeatherImgUrl;
			$scope.getCountryFlagImgUrl = weatherSvc.getCountryFlagImgUrl;
			$scope.kelvinToDegree = weatherSvc.kelvinToDegree;
			$scope.getTime = weatherSvc.getTime;
		});
}());