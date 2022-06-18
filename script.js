
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

  selections.textContent = `Your choice: ${playerChoice}. My choice: ${computerChoice}.`;
  partialScore.textContent = `Computer: ${computerScore}. Human: ${playerScore}.`;

  if(computerScore == 5){
    const buttons = document.querySelectorAll('button');
      for (item of buttons){
        item.disabled = true;
      };
    veredict.textContent = 'I won. Heil Skynet!'
  }
  else if (playerScore == 5){
    
    const buttons = document.querySelectorAll('button');
      for (item of buttons){
        item.disabled = true;
      };
    veredict.textContent = 'You won, little meatbag.'
  };
  
});

const paper = document.querySelector('#paper');
paper.addEventListener('click',function(){
  playerChoice = 'paper'
  computerPlay();
  match(computerChoice,playerChoice);

  selections.textContent = `Your choice: ${playerChoice}. My choice: ${computerChoice}.`;
  partialScore.textContent = `Computer: ${computerScore}. Human: ${playerScore}.`;

    if(computerScore == 5){
      const buttons = document.querySelectorAll('button');
      for (item of buttons){
        item.disabled = true;
      };
      veredict.textContent = 'I won. Heil Skynet!'
    }
    else if (playerScore == 5){
      const buttons = document.querySelectorAll('button');
      for (item of buttons){
        item.disabled = true;
      };
      veredict.textContent = 'You won, little meatbag.'
    };
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',function(){
  playerChoice = 'scissors'
  computerPlay();
  match(computerChoice,playerChoice);

  selections.textContent = `Your choice: ${playerChoice}. My choice: ${computerChoice}.`;
  partialScore.textContent = `Computer: ${computerScore}. Human: ${playerScore}.`;

    if(computerScore == 5){
      const buttons = document.querySelectorAll('button');
      for (item of buttons){
        item.disabled = true;
      };      
      veredict.textContent = 'I won. Heil Skynet!'
    }
    else if (playerScore == 5){
      const buttons = document.querySelectorAll('button');
      for (item of buttons){
        item.disabled = true;
      };
      veredict.textContent = 'You won, little meatbag.'
    };
});
 