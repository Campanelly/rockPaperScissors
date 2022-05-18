let computerChoice;
/*let playerChoice = prompt("rock, paper or scissors?").toLowerCase();*/
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
function playRound(){
    for (i=1 ; i<6 ; i++){
        computerPlay();
        playerChoice = prompt("rock, paper or scissors?").toLowerCase();
        match (computerChoice, playerChoice)
        console.log(`Match n° ${i}. Your choice: ${playerChoice}. My choice: ${computerChoice}.`)
    }
    

    if (computerScore === playerScore){
        console.log (`Human: ${playerScore}, Computer: ${computerScore}. It's a tie!`);
    }
    else if (computerScore < playerScore){
        console.log (`Human: ${playerScore}, Computer: ${computerScore}. You won, little meatbag!`);
    }
    else{
        console.log (`Human: ${playerScore}, Computer: ${computerScore}. I won. HEIL SKYNET!`);
    }

}
 /*match (computerPlay(), playerChoice);*/
 
 playRound();

 /*CAMPANELLY CAPO DEL CODING, VIEJO*/

 /*console.log(`Your choice: ${playerChoice}. My choice: ${computerChoice}. ${match (computerChoice , playerChoice)}`)*/ 