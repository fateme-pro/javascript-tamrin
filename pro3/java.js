/*
function playRound{
   prompt humanChoice
   Math.random computerChoice   
}
   
   

function playGame(){
humanScore = 0
computerScore = 0

 for loop start i = 1 till  i = 5
   
   function playRound(humanChoice,computerChoice)
   return winner every round
   if user wins humanScore +=1
   if computer wins computerScore +=1
  
 end loop 
 
}

if computerScore > humanScore
  return "you lose "
else if humanScore > computerScore
 return "you win"
else 
 return "its  tie overall"

*/
let humanScore = 0;
let computerScore = 0;

//human input
let humanChoice = prompt("please enter your choice rock , paper ,scissors","");
function getHumanChoice(humanChoice){
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
//console.log(getHumanChoice(humanChoice));

//computer input
let computerRandom = Math.random();
function getComputerChoice(computerChoice){
  if (computerChoice <= 0.33){
    return "rock";
  }else if (computerChoice >0.33 && computerChoice <0.66){
    return "paper";
  }else{
    return "scissors";
  }
}
let computerChoice = getComputerChoice(computerRandom);
//console.log(computerChoice);

//taking inputs and find winner and increase scores by one
function playRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        return "It is a tie"
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        return "You lose, paper beats rock";
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        return "You win, rock beats scissors";
    }else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        return "You lose, paper beats scissors";
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        return "You win, paper beats rock";
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        return "You win, scissors beats paper";
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        return "You lose, rock beats scissors";
    }else {
    return "Invalid choice!";
    }
}
//console.log(playRound(humanChoice,computerChoice));
//console.log(computerScore);
//console.log(humanScore);


function playGame(){
  humanScore = 0;
  computerScore = 0;
  alert("you will play this game for 5 rounds ");
  for (let i = 1 ; i<=5 ; i++){
    let humanInput = 
      prompt(`Round: ${i} , please enter your choice `, "");
    humanChoice = getHumanChoice(humanInput);
    
    let computerInput = Math.random();
    computerChoice = getComputerChoice(computerInput);
    
    let result = playRound(humanChoice,computerChoice);
    
    alert 
      (`Round ${i} , result: ${result} 
      score : You ${humanScore} - computer: ${computerScore}`);

  }
   if (humanScore > computerScore) {
    alert(`🎉 You win the game! Final Score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`💻 Computer wins the game! Final Score: ${humanScore} - ${computerScore}`);
  } else {
    alert(`🤝 It's a tie! Final Score: ${humanScore} - ${computerScore}`);
  }
}
console.log(playGame());