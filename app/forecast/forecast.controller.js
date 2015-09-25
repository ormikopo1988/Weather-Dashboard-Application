(function () {
	angular.module("app.forecast")
		.controller("Forecast", function ($scope, $routeParams, weatherSvc) {
			$scope.forecast = null; //for rendering it to the view
						
			if ($routeParams.id !== undefined) {
				getForecast($routeParams.id);
			}
			
			function getForecast(id) {
				weatherSvc.getForecast(id)
					.then(
						function (response) {
							$scope.forecast = response;
						},
						function (err) {
							console.log("Error loading the forecast " + err);
						}
					)
			}
		});
}());