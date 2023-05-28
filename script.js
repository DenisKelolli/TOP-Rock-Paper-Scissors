

const choices = ["rock", "paper", "scissors"];

function getComputerChoice (array){
    const choicesIndex = Math.floor(Math.random()*array.length);
    return array[choicesIndex];
}

function getPlayerChoice(){
    playerChoice = prompt("Choose Rock, Paper or Scissors: ").toLocaleLowerCase();
    return "The player chooses: " + playerChoice;
}

console.log(getComputerChoice(choices));
console.log(getPlayerChoice());
