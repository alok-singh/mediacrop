var app = angular.module("Mediacrop");

app.directive("overlay", () => {
	return {
		restrict : 'EA',
		templateUrl: '/Templates/DragonFight/overlay.html'
	}
});