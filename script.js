//Computer randomly returns one of "Rock, "Paper" or "Scissors" from array
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

let computerScore = 0;
let playerScore = 0;
// Single round of Rock-Paper-Scissors
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    computerScore++;
    return `Computer played ${computerSelection} and you played ${playerSelection} so you lose!`;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    computerScore++;
    return `Computer played ${computerSelection} and you played ${playerSelection} so you lose!`;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    computerScore++;
    return `Computer played ${computerSelection} and you played ${playerSelection} so you lose!`;
  } else if (playerSelection === computerSelection) {
    return `Computer played ${computerSelection} and you played ${playerSelection} so it's a tie!`;
  } else {
    playerScore++;
    return `Computer played ${computerSelection} and you played ${playerSelection} so you win!`;
  }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
