var app = angular.module("Mediacrop");

app.directive("character", function(){
	return {
		restrict : 'EA',
		templateUrl: 'Templates/character.html',
		scope: {
			image: "@"
		}
	}
});