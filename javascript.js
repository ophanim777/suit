let humanScore= 0;
let computerScore = 0;
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
  return computerChoice;}

function playRound(humanChoice, computerChoice) {
  let resultText="";

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
  updateResults(resultText);
  checkWinner();
}

    function updateResults(message) {
      const roundResult = document.getElementById("round-result");
      const scoreDisplay = document.getElementById("score");

      roundResult.textContent = message;
      scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }

    function checkWinner() {
      const winnerDisplay = document.getElementById("winner");

      if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
          winnerDisplay.textContent = "🎉 You won the game!";
        } else {
          winnerDisplay.textContent = "💀 You lost the game!";
        }
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