let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let computerDecisions = ['rock', 'paper', 'scissors'];
    let randomItem = computerDecisions[Math.floor(Math.random()*computerDecisions.length)];
    return randomItem;
}


function playRound(playerSelection, computerSelection){
    
    // player selects rock
    if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection == "paper") computerScore++, console.log("You lost!")
        else if (computerSelection == playerSelection) console.log("It's a tie!")
        else playerScore++ && console.log("You won!")
    }

    // player selects paper
    if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection == "scissors") computerScore++, console.log("You lost!")
        else if (computerSelection == playerSelection) console.log("It's a tie!")
        else playerScore++ && console.log("You won!")
    }

    // player selects scissors
    if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "rock") computerScore++, console.log("You lost!")
        else if (computerSelection == playerSelection) console.log("It's a tie!")
        else playerScore++ && console.log("You won!")
    }
}
    
function game(){
        const computerSelection = computerPlay()
        const playerSelection = prompt("Rock, paper or scissors?");

        playRound(playerSelection, computerSelection)

}

let i = 0;
while (i < 5) {
    game()
    i++;
}
