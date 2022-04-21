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
        if (computerSelection == "scissors"){
            playerScore++;
            return ("You won! Computer chose scissors. Points: Computer " + computerScore + " You " + playerScore);
        }
        else if (computerSelection == playerSelection){
            return ("It's a tie! Computer also chose rock.");
        }
        else{
            computerScore++;
            return ("You lost! Computer chose paper. Points: Computer " + computerScore + " You " + playerScore);
        }

    // Player selects paper
    if (playerSelection == "paper")
        if (computerSelection === "rock"){
            playerScore++;
            return ("You won! Computer chose rock. Points: Computer " + computerScore + " You " + playerScore);
        }
        else if (computerSelection == playerSelection){ 
            return ("It's a tie! Computer also chose paper.");
        }
        else{ 
            computerScore++;
            return ("You lost! Computer chose scissors. Points: Computer " + computerScore + " You " + playerScore);
        }

    // Player selects scissors
    if (playerSelection == "scissors")
        if (computerSelection === "paper"){
            playerScore++;
            return ("You won! Computer chose rock. Points: Computer " + computerScore + " You " + playerScore);
        }
        else if (computerSelection == playerSelection){ 
            return ("It's a tie! Computer also chose scissors.");
        }
        else {
            computerScore++;
            return ("You lost! Computer chose rock. Points: Computer " + computerScore + " You " + playerScore);
        }  
}


function game(){
    const playerSelection = prompt("Pick rock, paper or scissors.").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    playRound();
}


for (let i = 1; i <= 5; i++){
    game();
    if (i == 5)
        if (playerScore > computerScore) console.log("You won the game!")
        else if (playerScore < computerScore) console.log("You were destroyed by AI!")
        else console.log("It's a draw!")
}