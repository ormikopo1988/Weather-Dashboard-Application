(function () {
	angular.module("app.weather")
		.controller("Weather", function ($scope, $routeParams, weatherSvc) {
		
			$scope.current = null; //for getting the data from the successful response in line 14 and render it to the view via a model named current
						
			if ($routeParams.id !== undefined) {
				getCurrent($routeParams.id);
			}
			
			function getCurrent(id) {
				weatherSvc.getCurrent(id)
					.then(
						function (response) {
							$scope.current = response;
						},
						function (err) {
							console.log("Error loading current weather data: ", err);
						}
					)
			}

		});
}());