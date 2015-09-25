(function () {
	angular.module("app.search")
		.controller("Search", function ($scope, weatherSvc) {
			$scope.cities = null; //create a model called cities
		
			$scope.$on("search", search);
			
			function search(evt, data) {
				weatherSvc.find(data.str)
					.then(
						function (response) {
							$scope.cities = response.list; //now we have our cities model populated with data. Now we can render it in the search.html (the view)
						},
						function (err) {
							console.log("Error finding cities: ", err);
						}
					)
			} 
		});
}());