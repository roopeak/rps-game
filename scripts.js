let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener("click", game); 

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener("click", game); 

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener("click", game); 

const results = document.getElementById('results');


function computerPlay(){
    let computerDecisions = [rockBtn, paperBtn, scissorsBtn];
    let randomItem = computerDecisions[Math.floor(Math.random()*computerDecisions.length)];
    return randomItem;
}


function playRound(playerSelection, computerSelection) {
    
    // Player selects rock
    if (playerSelection = rockBtn)
        if (computerSelection === scissorsBtn){
            playerScore++;
            return "You won! Computer chose scissors. Points: Computer " + computerScore + " You " + playerScore;
        }
        else if (computerSelection === playerSelection){
            return "It's a tie! Computer also chose rock.";
        } else {
            computerScore++;
            return "You lost! Computer chose paper. Points: Computer " + computerScore + " You " + playerScore;
        }

    // Player selects paper
    if (playerSelection = paperBtn)
        if (computerSelection === rockBtn){
            playerScore++;
            return "You won! Computer chose rock. Points: Computer " + computerScore + " You " + playerScore;
        }
        else if (computerSelection === playerSelection){ 
            return "It's a tie! Computer also chose paper.";
        } else { 
            computerScore++;
            return "You lost! Computer chose scissors. Points: Computer " + computerScore + " You " + playerScore;
        }

    // Player selects scissors
    if (playerSelection = scissorsBtn)
        if (computerSelection === paperBtn){
            playerScore++;
            return "You won! Computer chose paper. Points: Computer " + computerScore + " You " + playerScore;
        }
        else if (computerSelection === playerSelection){ 
            return "It's a tie! Computer also chose scissors.";
        } else {
            computerScore++;
            return "You lost! Computer chose rock. Points: Computer " + computerScore + " You " + playerScore;
        }  
}


function game(){
    const playerSelection = [rockBtn, paperBtn, scissorsBtn];
    const computerSelection = computerPlay();
    document.getElementById('results').innerHTML = (playRound(playerSelection, computerSelection));

    if (playerScore === 5) {
        document.getElementById('results').innerHTML = "You won AI!";
    }
    else if (computerScore === 5)
        document.getElementById('results').innerHTML = "You were destroyed by AI!";
}