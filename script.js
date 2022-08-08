//Computer randomly returns one of "Rock, "Paper" or "Scissors" from array
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

// console.log(getComputerChoice());
