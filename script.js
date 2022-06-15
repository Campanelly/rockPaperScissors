
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

const match= function match (computerChoice , playerChoice){
    
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
const computerPlay = function computerPlay(){
    
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

  const rock = document.querySelector('#rock');
  rock.addEventListener('click',function(){
    playerChoice = 'rock'
    computerPlay();
    console.log("computer choice: "+computerChoice);
    console.log("player chocie: "+playerChoice);
    match(computerChoice,playerChoice);
    console.log("computer: "+computerScore);
    console.log ("player: "+playerScore);
  
  });

  const paper = document.querySelector('#paper');
  paper.addEventListener('click',function(){
    playerChoice = 'paper'
    computerPlay();
    console.log("computer choice: "+computerChoice);
    console.log("player chocie: "+playerChoice);
    match(computerChoice,playerChoice);
    console.log("computer: "+computerScore);
    console.log ("player: "+playerScore);
  
  });

  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click',function(){
    playerChoice = 'scissors'
    computerPlay();
    console.log("computer choice: "+computerChoice);
    console.log("player chocie: "+playerChoice);
    match(computerChoice,playerChoice);
    console.log("computer: "+computerScore);
    console.log ("player: "+playerScore);
  
  });
 
 
  /*
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
 