
const playerRockButton = document.querySelector(".player_rock_button");
const playerPaperButton = document.querySelector(".player_paper_button");
const playerScissorsButton = document.querySelector(".player_scissors_button");
const playerChoice = document.querySelector(".player_choice");
let playerScore = document.querySelector(".player_score");
const computerChoice = document.querySelector(".computer_choice");
let computerScore = document.querySelector(".computer_score");
const winnerSelectionText = document.querySelector(".winner_selection_text");
playerScore.textContent = "0"
computerScore.textContent = "0";
  
   
 
const choices = ["rock", "paper", "scissors"];

function getComputerChoice (array){
    const choicesIndex = Math.floor(Math.random()*array.length);
    return array[choicesIndex];
}

const playGame = function(){
    if (playerScore.textContent === "5" || computerScore.textContent === "5") {
        location.reload();
        return; // Stop playing if a player has reached 5
    }
    if ((playerChoice.textContent === "rock" && computerChoice.textContent === "scissors") ||
        ((playerChoice.textContent === "paper" && computerChoice.textContent === "rock")) ||
        (playerChoice.textContent === "scissors" && computerChoice.textContent === "paper")){
        playerScore.textContent ++;
            if(playerScore.textContent === "5"){
                winnerSelectionText.textContent = "The player is the winner!";
            }
    }
        else if ((playerChoice.textContent === "scissors" && computerChoice.textContent === "rock") ||
        ((playerChoice.textContent === "rock" && computerChoice.textContent === "paper")) ||
        (playerChoice.textContent === "paper" && computerChoice.textContent === "scissors")){
        computerScore.textContent ++;
            if(computerScore.textContent === "5"){
            winnerSelectionText.textContent = "The computer is the winner!";
            }
        }
}
    

playerRockButton.addEventListener("click", () => {
    playerChoice.textContent = "rock";
    computerChoice.textContent = getComputerChoice(choices);
    })

playerRockButton.addEventListener("click", playGame);


playerPaperButton.addEventListener("click", () => {
    playerChoice.textContent = "paper";
    computerChoice.textContent = getComputerChoice(choices);
    })

playerPaperButton.addEventListener("click",playGame);


playerScissorsButton.addEventListener("click", () => {
    playerChoice.textContent = "scissors";
    computerChoice.textContent = getComputerChoice(choices);
})

playerScissorsButton.addEventListener("click",playGame);










