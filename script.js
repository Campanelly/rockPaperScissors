let computerChoice;
let playerChoice = prompt("rock, paper or scissors?").toLowerCase();
let result;
let counter;

function computerPlay(){
    
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 0){
        computerChoice = "rock";
    }
    else if(randomNumber == 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
return computerChoice;
};

function gameRound (computerChoice, playerChoice){
    
    if (playerChoice == "paper"){
        if (computerChoice == "rock")
            result = "You win.";
            counter = true;

        }
        else if (computerChoice == "scissors"){
            result = "I win.";
            counter = false;
        }
        else {
            result = "It's a tie!";

        }
}
  


gameRound(computerPlay(), playerChoice)

console.log(`Your choice: ${playerChoice}. My choice: ${computerChoice}. ${result}` )