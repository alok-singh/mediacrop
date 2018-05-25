var app = angular.module("Mediacrop", []);

app.controller("MediacropController", [function(){
	console.log("Mediacrop controller executes");
}])

app.directive("select", function(){
	return {
		restrict : 'EA',
		compile : function(tElement, tAttributes){
			console.log("compile executes");
			tElement.css("border", "1px solid");
			return {
				pre : function(scope, iElement, iAttributes){
					console.log(iAttributes.text + "pre executes");
				},
				post : function(scope, iElement, iAttributes){
					console.log(iAttributes.text + "post executes");
				}
			}
		},
		controller : function($scope, $element, $attrs){
			console.log($attrs.text + "controller executes");
		}
	}
});