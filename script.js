
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
  match(computerChoice,playerChoice);
  score.textContent = `Your choice: ${playerChoice}. My choice: ${computerChoice}.
    Score = Computer: ${computerScore}. Human: ${playerScore}.`;
  if(computerScore == 5){
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    veredict.textContent = 'I won. Heil Skynet!'
  }
  else if (playerScore == 5){
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    document.querySelector('#rock').disabled = true;
    veredict.textContent = 'You won, little meatbag.'
  };
  
});

const paper = document.querySelector('#paper');
paper.addEventListener('click',function(){
  playerChoice = 'paper'
  computerPlay();
  match(computerChoice,playerChoice);
  score.textContent = `Your choice: ${playerChoice}. My choice: ${computerChoice}.
    Score = Computer: ${computerScore}. Human: ${playerScore}.`;
    if(computerScore == 5){
      document.querySelector('#rock').disabled = true;
      document.querySelector('#paper').disabled = true;
      document.querySelector('#scissors').disabled = true;
      veredict.textContent = 'I won. Heil Skynet!'
    }
    else if (playerScore == 5){
      document.querySelector('#rock').disabled = true;
      document.querySelector('#paper').disabled = true;
      document.querySelector('#scissors').disabled = true;
      veredict.textContent = 'You won, little meatbag.'
    };
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',function(){
  playerChoice = 'scissors'
  computerPlay();
  match(computerChoice,playerChoice);
  score.textContent = `Your choice: ${playerChoice}. My choice: ${computerChoice}.
    Score = Computer: ${computerScore}. Human: ${playerScore}.`;
    if(computerScore == 5){
      document.querySelector('#paper').disabled = true;
      document.querySelector('#scissors').disabled = true;
      document.querySelector('#rock').disabled = true;
      veredict.textContent = 'I won. Heil Skynet!'
    }
    else if (playerScore == 5){
      document.querySelector('#paper').disabled = true;
      document.querySelector('#scissors').disabled = true;
      document.querySelector('#rock').disabled = true;
      veredict.textContent = 'You won, little meatbag.'
    };
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
 