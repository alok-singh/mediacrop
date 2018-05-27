var app = angular.module("Mediacrop");

app.directive("heathbar", () => {
	return {
		restrict : 'EA',
		templateUrl: '/Templates/DragonFight/healthBar.html',
		scope: {
			health: "=",
			title: "@"
		}
	}
});