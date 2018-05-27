var app = angular.module("Mediacrop");

app.directive("character", () => {
	return {
		restrict : 'EA',
		templateUrl: '/Templates/DragonFight/character.html',
		scope: {
			image: "@"
		}
	}
});