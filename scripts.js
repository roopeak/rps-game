const roundResult = document.querySelector('.round-result');
const humanScoreResult = document.querySelector('.human-score');
const computerScoreResult = document.querySelector('.computer-score');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener("click", () => {
	playRound('rock');
})

paperBtn.addEventListener("click", () => {
	playRound('paper');
})

scissorsBtn.addEventListener("click", () => {
	playRound('scissors');
})

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {
	const computerChoice = getComputerChoice();

	roundResult.textContent = '';
	humanScoreResult.textContent = '';
	computerScoreResult.textContent = '';

	// Player chooses rock
	if (humanChoice === 'rock' && computerChoice === 'scissors') {
		roundResult.textContent += 'You won!';
		humanScore += 1;
	} else if (humanChoice === 'rock' && computerChoice === 'paper') {
		roundResult.textContent += 'You lost!';
		computerScore += 1;
	} else if (humanChoice === 'rock' && computerChoice === 'rock') {
		roundResult.textContent += "It's a tie!";
	}

	// Player chooses paper
	if (humanChoice === 'paper' && computerChoice === 'rock') {
		roundResult.textContent += 'You won!';
		humanScore += 1;
	} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
		roundResult.textContent += "You lost!";
		computerScore += 1;
	} else if (humanChoice === 'paper' && computerChoice === 'paper') {
		roundResult.textContent += "It's a tie!";
	}

	// Player chooses scissors
	if (humanChoice === 'scissors' && computerChoice === 'paper') {
		roundResult.textContent += 'You won!';
		humanScore += 1;
	} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
		roundResult.textContent += "You lost!";
		computerScore += 1;
	} else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
		roundResult.textContent += "It's a tie!";
	}

	humanScoreResult.textContent += humanScore;
	computerScoreResult.textContent += computerScore;
}

function playGame() {
	// Play five rounds
	let rounds = 0;
	// while (rounds < 5) {
	// 	playRound();
	// 	rounds++;
	// }



	if (humanScore > computerScore) {
		console.log('You won the game!');
	} else if (computerScore > humanScore) {
		console.log("Computer won the game!");
	} else if (humanScore === computerScore) {
		console.log("Game is a tie!");
	}
}




playGame();