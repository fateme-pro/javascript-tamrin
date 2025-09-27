9
/*
write a function named getComputerChoice
for taking input use Math.random()
if Math.random inputs lower or equall to 0.3 returns rock
if Math.random inputs between 0.3 to 0.7 returns paper
if Math.random inputs greater or equall 0.7 returns scissors

*/
function getComputerChoice(randomNumer){
    if(randomNumer <= 0.3){
        return "rock";
    }else if (randomNumer>0.3 && randomNumer<0.7){
        return "paper";
    }else{
        return "scissors";
    }
}

console.log(getComputerChoice(Math.random()));
/* 
write a function named getHumanChoice
prompting input from user
if user's input is lower or equall to zero return rock
if user's input is between zero and 100,000 return paper
if user's input is greater than 100,000 return scissors

*/
let randomHumanNumber=prompt("input a random number"," ");
function getHumanChoice(randomHumanNumber){
    if(randomHumanNumber <= 0){
        return "rock";
    }else if(randomHumanNumber>0 && randomHumanNumber<100000){
       alert("paper");
        return "paper"; 
    }else{
        return "scissors";
    }
}
console.log(getHumanChoice(randomHumanNumber));