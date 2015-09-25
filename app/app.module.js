(function() {
	var name = "app",
		requires = [
			"app.shell",
			"app.search",
			"app.weather",
			"app.forecast",
			"app.component",
			"app.data"
		];
		
	angular.module(name, requires)
		.run(['$route', function($route) {
			$route.reload(); // see https://github.com/angular/angular.js/issues/1213 for this issue in the beginning because ng-view is in shell.html and shell.html is being included in index.html with ng-include directive
		}]);
}());