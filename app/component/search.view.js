(function () {
	angular.module("app.component")
		.directive("orestisSearchBox", function () {
			return {
				templateUrl: "app/component/search-form.html",
				controller: searchBoxCtrlFn //implement the controller inline in here
			}
		});
		
		function searchBoxCtrlFn($scope) {
			$scope.search = function (searchStr) { //in order to keep this search loosely coupled, we are gonna init an event for search passing searchStr in an object, so that interested views can listen to it and do what they want to do
				$scope.$emit("search", { str: searchStr });
			}
		}
}());