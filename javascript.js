let humanScore= 0;
let computerScore = 0;
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
  return computerChoice;}
function getHumanChoice() {
  let choices = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choices)) {
    choices = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choices;
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
}
 if (humanChoice === computerChoice) {
    console.log("It's a draw!");
    return "It's a draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
    function playGame() {
      
    }