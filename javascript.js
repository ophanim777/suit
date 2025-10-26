let humanScore= 0;
let computerScore = 0;
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
  return computerChoice;}

function playRound(humanChoice, computerChoice) {
  let resultText="";
}
 if (humanChoice === computerChoice) {
     resultText = `It's a draw! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }
    function playGame() {
      humanScore = 0;
      computerScore = 0;
      for (let i = 0; i++;) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

    if (humanScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > humanScore) {
    return "You lose the game!";
  } else {
    return "It's a draw!";
  }
}
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});