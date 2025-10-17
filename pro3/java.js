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

//console.log(getHumanChoice(humanChoice));

const rock= document.querySelector(".rock");
const paper= document.querySelector(".paper");
const scissors= document.querySelector(".scissors");

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
    }else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}


// تابع برای گرفتن ورودی کاربر
function getHumanChoice() {
  rock.addEventListener("click", () => handleClick("rock"));
  paper.addEventListener("click", () => handleClick("paper"));
  scissors.addEventListener("click", () => handleClick("scissors"));
}
let humanChoice="";
// وقتی کلیک انجام شد
function handleClick(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  console.log(result);
  console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
}

getHumanChoice();

console.log(playRound(humanChoice,computerChoice));
console.log(computerChoice);




