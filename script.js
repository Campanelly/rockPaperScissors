let computerChoice;
let playerChoice = prompt("rock, paper or scissors?").toLowerCase();
let result;


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

 


gameRound(computerPlay())

console.log(`Your choice: ${playerChoice}. My choice: ${computerChoice}. ${result}` )