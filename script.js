
let computerChoice;
let computerScore = 0;
let playerScore = 0;

function match (computerChoice , playerChoice){
    
     if (computerChoice === playerChoice){
        return computerScore += 0; 
        
         
     };

     if (playerChoice === "paper"){
         if (computerChoice === "scissors"){
            return computerScore += 1;
            
            
             
         }
         else{
            return playerScore +=1;

         }
     }

     if (playerChoice === "rock"){
         if (computerChoice === "paper"){
            return computerScore +=1;
         }
         else {
            return playerScore +=1;
         }
     }

     if (playerChoice === "scissors"){
         if (computerChoice === "rock"){
            return computerScore +=1;
         }
         else {
            return playerScore +=1;
         }
     }
 }
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
/*
function playRound(){
    for (i=1 ; i<6 ; i++){
        computerPlay();
        playerChoice = prompt("rock, paper or scissors?").toLowerCase();
        match (computerChoice, playerChoice)
        document.write (`<p> Match n° ${i}. Your choice: ${playerChoice}. My choice: ${computerChoice}.</p>`)
    }
    

    if (computerScore === playerScore){
        document.write (`<p>Human: ${playerScore}, Computer: ${computerScore}. It's a tie!</p>`);
    }
    else if (computerScore < playerScore){
        document.write(`<p>Human: ${playerScore}, Computer: ${computerScore}. You won, little meatbag!</p>`);
    }
    else{
        document.write (`<p>Human: ${playerScore}, Computer: ${computerScore}. I won. HEIL SKYNET!</p>`);
    }

}

 
 playRound();

 
*/
 