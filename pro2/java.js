let humanScore = 0;
let computerScor = 0;
/*
function humanChoice(){
    with prompt take humanChoice
    with toLowerCase() makes it case insensitive
    return the result
}

function computerChoice(){
    with Math.random take computerChoice
    return the result
}
function playRound(humanChoice,computerChoice){

 if humanChoice ===computerChoice print "its tie"
 if humanChoice===rock computerChoice===paper
 print "you lose"
 computerScore +=1
  if humanChoice===rock computerChoice===scissors
 print "you win"
 humanScore +=1
 if humanChoice===paper  computerChoice===scissors
 print "you lose"
 computerScor +=1
 if humanChoice===paper computerChoice===rock
 print "you win"
 humanScore +=1
 if humanChoice===scissors computerChoice===paper
 print "you win"
 humanScore +=1
 if humanChoice===scissors computerChoice===rock
 print "you lose"
 computerScor +=1
}
*/
let humanChoice = prompt("please enter your choice","");
function gethumanChoice(humanChoice){
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
console.log(gethumanChoice(humanChoice));
let computerChoice = Math.random();
function getcomputerChoice(computerChoice){
  if (computerChoice <= 0.3){
    return "rock";
  }else if (computerChoice >0.3 && computerChoice <0.7){
    return "paper";
  }else{
    return "scissors";
  }
}
console.log(getcomputerChoice(computerChoice));
function playRound(humanChoice,computerChoice){

}
