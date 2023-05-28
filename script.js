

const choices = ["rock", "paper", "scissors"];


function getPlayerChoice(){
    playerChoice = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
    console.log("The player choice is " + playerChoice);
    return playerChoice;
}

function getComputerChoice (array){
    const choicesIndex = Math.floor(Math.random()*array.length);
    console.log("The computer choice is " + array[choicesIndex]);
    return array[choicesIndex];
}




function playGame(playerSelection,computerSelection){
    if ((playerSelection === "rock" && computerSelection === "rock") ||
       ((playerSelection === "paper" && computerSelection === "paper")) ||
       (playerSelection === "scissors" && computerSelection === "scissors")){
            return "There is a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            ((playerSelection === "paper" && computerSelection === "rock")) ||
            (playerSelection === "scissors" && computerSelection === "paper")){
                return "The player is the winner";
    }
    else if ((playerSelection === "scissors" && computerSelection === "rock") ||
            ((playerSelection === "rock" && computerSelection === "paper")) ||
            (playerSelection === "paper" && computerSelection === "scissors")){
                return "The computer is the winner";
            }
}

console.log(playGame(getPlayerChoice(),getComputerChoice(choices)));