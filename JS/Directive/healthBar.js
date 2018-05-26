var app = angular.module("Mediacrop");

app.directive("heathbar", function(){
	return {
		restrict : 'EA',
		templateUrl: 'Templates/healthBar.html',
		scope: {
			health: "=",
			title: "@"
		}
	}
});