function computerPlay(){
    let computerDecisions = ['Rock', 'Paper', 'Scissors'];
    let randomItem = computerDecisions[Math.floor(Math.random()*computerDecisions.length)];
    return randomItem;
}

console.log(computerPlay());