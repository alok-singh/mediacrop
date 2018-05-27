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
		$scope.commentryList.unshift(
			getCommentObj(`Player Attacks Dragon for ${playerAttack}`),
			getCommentObj(`Dragon Attacks Player for ${dragonAttack}`)
		);
	};

	$scope.blast = function() {
		var playerAttack = generateRandomNumber(20, 30);
		var dragonAttack = generateRandomNumber(20, 30);
		$scope.playerHealth = $scope.playerHealth - dragonAttack;
		$scope.dragonHealth = $scope.dragonHealth - playerAttack;
		$scope.commentryList.unshift(
			getCommentObj(`Player Blast Attacks Dragon for ${playerAttack}`),
			getCommentObj(`Dragon Blast Attacks Player for ${dragonAttack}`)
		);
	};

	$scope.heal = function() {
		var playerHeals = generateRandomNumber(10, 30);
		var dragonAttack = generateRandomNumber(5, 10);
		var playerHealth = $scope.playerHealth - dragonAttack + playerHeals;
		$scope.playerHealth = playerHealth > 100 ? 100 : playerHealth;
		$scope.commentryList.unshift(
			getCommentObj(`Player Heals for ${playerHeals}`),
			getCommentObj(`Dragon Attacks Player for ${dragonAttack}`)
		);
	};

	$scope.reset = function() {
		$scope.playerHealth = 100;
		$scope.dragonHealth = 100;
		$scope.commentryList.unshift({comment: `---- Match Restarts ----`});
	};

	$scope.giveUp = function() {
		$scope.playerHealth = 0;
	}

	function generateRandomNumber(min, max) {
		return Math.round((max - min)*Math.random() + min);
	}

	function getCommentObj(comment){
		return {
			time: new Date(),
			comment: comment
		}
	}
}])

