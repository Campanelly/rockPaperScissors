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

 function match (computerChoice , playerChoice){
     if (computerChoice === playerChoice){
         return "It's a tie!";
     };

     if (playerChoice === "paper"){
         if (computerChoice === "scissors"){
             return "I win.";
         }
         else{
             return "You win."
         }
     }

     if (playerChoice === "rock"){
         if (computerChoice === "paper"){
            return "I win."
         }
         else {
             return "You win."
         }
     }

     if (playerChoice === "scissors"){
         if (computerChoice === "rock"){
             return "I win."
         }
         else {
             return "You win."
         }
     }
 }
 
 /*match (computerPlay(), playerChoice);*/
 computerPlay();

console.log(`Your choice: ${playerChoice}. My choice: ${computerChoice}. ${match (computerChoice , playerChoice)}`) 