

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




function playRound(playerSelection,computerSelection){
    if ((playerSelection === "rock" && computerSelection === "rock") ||
       ((playerSelection === "paper" && computerSelection === "paper")) ||
       (playerSelection === "scissors" && computerSelection === "scissors")){
            return "There is a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            ((playerSelection === "paper" && computerSelection === "rock")) ||
            (playerSelection === "scissors" && computerSelection === "paper")){
                return "The player is the winner of this round";
    }
    else if ((playerSelection === "scissors" && computerSelection === "rock") ||
            ((playerSelection === "rock" && computerSelection === "paper")) ||
            (playerSelection === "paper" && computerSelection === "scissors")){
                return "The computer is the winner of this round";
            }
}

let playerCount = 0;
let computerCount = 0;

function game(){
    while (playerCount < 6 || computerCount < 6){
       let roundWinner = playRound(getPlayerChoice(),getComputerChoice(choices));
       if (roundWinner === "There is a tie!") {
        console.log("There is a tie, no point is given.");
        
       } else if (roundWinner === "The player is the winner of this round"){
        playerCount++;
        console.log("The player won and their score is: " + playerCount);
            if (playerCount === 5){
                console.log("The player has won the game with 5 points!");
                break;
            }
       }
       else if (roundWinner === "The computer is the winner of this round"){
        computerCount++;
        console.log("The computer won and their score is: " + computerCount);
            if (computerCount === 5){
                console.log("The computer has won the game with 5 points!");
                break;
        }
       }
    }       
}

game();