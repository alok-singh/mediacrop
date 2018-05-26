var app = angular.module("Mediacrop", []);

app.controller("MediacropController", ['$scope', function($scope){
	$scope.dragonHealth = 100;
	$scope.playerHealth = 100;
	$scope.commentryList = [];

	$scope.attack = function() {
		var playerAttack = generateRandomNumber(5, 10);
		var dragonAttack = generateRandomNumber(5, 10);
		$scope.playerHealth = $scope.playerHealth - dragonAttack;
		$scope.dragonHealth = $scope.dragonHealth - playerAttack;
		$scope.commentryList.push(`Player Attacks Dragon for ${playerAttack}`);
		$scope.commentryList.push(`Dragon Attacks Player for ${dragonAttack}`);
	};

	$scope.blast = function() {
		var playerAttack = generateRandomNumber(20, 30);
		var dragonAttack = generateRandomNumber(20, 30);
		$scope.playerHealth = $scope.playerHealth - dragonAttack;
		$scope.dragonHealth = $scope.dragonHealth - playerAttack;
		$scope.commentryList.push(`Player Blast Attacks Dragon for ${playerAttack}`);
		$scope.commentryList.push(`Dragon Blast Attacks Player for ${dragonAttack}`);
	};

	$scope.heal = function() {
		var playerHeals = generateRandomNumber(10, 30);
		var dragonAttack = generateRandomNumber(5, 10);
		$scope.playerHealth = $scope.playerHealth - dragonAttack + playerHeals;
		$scope.commentryList.push(`Player Heals for ${playerHeals}`);
		$scope.commentryList.push(`Dragon Attacks Player for ${dragonAttack}`);
	};

	$scope.reset = function() {
		$scope.playerHealth = 100;
		$scope.dragonHealth = 100;
		$scope.commentryList.push(`---- Match Restarts ----`);
	};

	function generateRandomNumber(min, max) {
		return Math.round((max - min)*Math.random() + min);
	}
	
	console.log("Mediacrop controller executes");
}])

