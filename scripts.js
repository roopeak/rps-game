let computerScore = 0;
let playerScore = 0;


function computerPlay(){
    let computerDecisions = ["rock", "paper", "scissors"];
    let randomItem = computerDecisions[Math.floor(Math.random()*computerDecisions.length)];
    return randomItem;
}


function playRound(playerSelection, computerSelection) {
    
    // Player selects rock
    if (playerSelection == "rock")
        if (computerSelection == "scissors") return ("You won! Computer chose scissors.");
        else if (computerSelection == playerSelection) return ("It's a tie! Computer also chose rock.");
        else return ("You lost! Computer chose paper.");

    // Player selects paper
    if (playerSelection == "paper")
        if (computerSelection === "rock") return ("You won! Computer chose rock.");
        else if (computerSelection == playerSelection) return ("It's a tie! Computer also chose paper.");
        else return ("You lost! Computer chose scissors.");

    // Player selects scissors
    if (playerSelection == "scissors")
        if (computerSelection === "paper") return ("You won! Computer chose rock.");
        else if (computerSelection == playerSelection) return ("It's a tie! Computer also chose scissors.");
        else return ("You lost! Computer chose rock.");
}




function game(){
    const playerSelection = prompt("Pick rock, paper or scissors.").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    playRound();
}


for (let i = 0; i < 5; i++){
    
    game();
}