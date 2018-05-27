var app = angular.module("Mediacrop", []);

/*
	can include various terms and conditions
	to make the game more exciting like
	blast can only be used once, healing will take time etc
*/

app.controller("MediacropController", ['$scope', ($scope) => {
	$scope.dragonHealth = 100;
	$scope.playerHealth = 100;
	$scope.commentryList = [];

	$scope.attack = () => {
		let playerAttack = generateRandomNumber(5, 10);
		let dragonAttack = generateRandomNumber(5, 10);
		let playerHealth = $scope.playerHealth - dragonAttack;
		let dragonHealth = $scope.dragonHealth - playerAttack;
		$scope.playerHealth = playerHealth > 0 ? playerHealth : 0;
		$scope.dragonHealth = dragonHealth > 0 ? dragonHealth : 0;
		$scope.commentryList.unshift(
			getCommentObj(`Player Attacks Dragon for ${playerAttack}`),
			getCommentObj(`Dragon Attacks Player for ${dragonAttack}`)
		);
	};

	$scope.blast = () => {
		let playerAttack = generateRandomNumber(20, 30);
		let dragonAttack = generateRandomNumber(25, 30);
		let playerHealth = $scope.playerHealth - dragonAttack;
		let dragonHealth = $scope.dragonHealth - playerAttack;
		$scope.playerHealth = playerHealth > 0 ? playerHealth : 0;
		$scope.dragonHealth = dragonHealth > 0 ? dragonHealth : 0;
		$scope.commentryList.unshift(
			getCommentObj(`Player Blast Attacks Dragon for ${playerAttack}`),
			getCommentObj(`Dragon Blast Attacks Player for ${dragonAttack}`)
		);
	};

	$scope.heal = () => {
		let playerHeals = generateRandomNumber(10, 30);
		let dragonAttack = generateRandomNumber(5, 10);
		let playerHealth = $scope.playerHealth - dragonAttack + playerHeals;
		$scope.playerHealth = playerHealth > 100 ? 100 : playerHealth;
		$scope.commentryList.unshift(
			getCommentObj(`Player Heals for ${playerHeals}`),
			getCommentObj(`Dragon Attacks Player for ${dragonAttack}`)
		);
	};

	$scope.reset = () => {
		$scope.playerHealth = 100;
		$scope.dragonHealth = 100;
		$scope.isForcedClose = false;
		$scope.commentryList.unshift({comment: `---- Match Restarts ----`});
	};

	$scope.closePopup = () => {
		$scope.isForcedClose = true;
	}

	$scope.showModal = () => {
		if($scope.isForcedClose){
			return false;
		}
		else if($scope.dragonHealth <= 0 || $scope.playerHealth <= 0){
			return true;
		}
		return false;
	}

	$scope.giveUp = () => {
		$scope.playerHealth = 0;
		$scope.isForcedClose = false;
	}

	let generateRandomNumber = (min, max) => {
		return Math.round((max - min)*Math.random() + min);
	}

	let getCommentObj = (comment) => {
		return {
			time: new Date(),
			comment: comment
		}
	}
}])

