function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);

	switch (randomNumber){
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
}

function getHumanChoice() {
	let input = prompt('Choose your weapon! Rock, paper or scissors?').toLowerCase();

	if (input === 'rock' || input === 'paper' || input === 'scissors') {
		return input;
	} else {
		getHumanChoice();
	}
}

function playRound(humanScore, computerScore) {
	const humanChoice = getHumanChoice();
	const computerChoice = getComputerChoice();

	// Player chooses rock
	if (humanChoice === 'rock' && computerChoice === 'scissors') {
		console.log('You won!');
		humanScore += 1;
	} else if (humanChoice === 'rock' && computerChoice === 'paper') {
		console.log('You lost!');
		computerScore += 1;
	} else if (humanChoice === 'rock' && computerChoice === 'rock') {
		console.log("It's a tie!");
	}

	// Player chooses paper
	if (humanChoice === 'paper' && computerChoice === 'rock') {
		console.log('You won!');
		humanScore += 1;
	} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
		console.log('You lost!');
		computerScore += 1;
	} else if (humanChoice === 'paper' && computerChoice === 'paper') {
		console.log("It's a tie!");
	}

	// Player chooses scissors
	if (humanChoice === 'scissors' && computerChoice === 'paper') {
		console.log('You won!');
		humanScore += 1;
	} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
		console.log('You lost!');
		computerScore += 1;
	} else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
		console.log("It's a tie!");
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	let rounds = 0;
	while (rounds < 5) {
		playRound(humanScore, computerScore);
		rounds++;
	}

	if (humanScore > computerScore) {
		console.log('You won the game!');
	} else if (computerScore > humanScore) {
		console.log("Computer won the game!");
	} else if (humanScore === computerScore) {
		console.log("Game is a tie!");
	}
}

playGame();