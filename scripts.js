function computerPlay(){
    let computerDecisions = ['rock', 'paper', 'scissors'];
    let randomItem = computerDecisions[Math.floor(Math.random()*computerDecisions.length)];
    return randomItem;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper")
        console.log("You lost!");
    else if (playerSelection == "rock" && computerSelection == "scissors")
        console.log("You won!");
    else if (playerSelection == "rock" && computerSelection == "rock")
        console.log("It's a tie!");
    else if (playerSelection == "paper" && computerSelection == "rock")
        console.log("You lost!");
    else if (playerSelection == "paper" && computerSelection == "scissors")
        console.log("You lost!");
    else if (playerSelection == "paper" && computerSelection == "paper")
        console.log("It's a tie!");
    else if (playerSelection == "scissors" && computerSelection == "rock")
        console.log("You lost!");
    else if (playerSelection == "scissors" && computerSelection == "paper")
        console.log("You won!");
    else if (playerSelection == "scissors" && computerSelection == "scissors")
        console.log("It's a tie!");
    else
        console.log("You typed wrong!");
}

const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));s

function game(){
    for (let i = 0; i <= 5; i++)
        playRound();

}