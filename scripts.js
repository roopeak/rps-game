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

function getHumanChoice() {
	let input = prompt('Choose your weapon! Rock, paper or scissors?').toLowerCase();

	if (input === 'rock' || input === 'paper' || input === 'scissors') {
		return input;
	} else {
		getHumanChoice();
	}
}

function playRound(humanChoice, computerChoice) {
	console.log('This is human: ', humanChoice);
	console.log('This is a computer: ', computerChoice);

	if (humanChoice === 'rock' && computerChoice === 'scissors') {
		console.log('You won!');
	} else if (humanChoice === 'rock' && computerChoice === 'paper') {
		console.log('You lost!');
	} else {
		console.log("It's a tie!");
	}

	if (humanChoice === 'paper' && computerChoice === 'rock') {
		console.log('You won!');
	} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
		console.log('You lost!');
	} else {
		console.log("It's a tie!");
	}

	if (humanChoice === 'scissors' && computerChoice === 'paper') {
		console.log('You won!');
	} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
		console.log('You lost!');
	} else {
		console.log("It's a tie!");
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);