function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
  return computerChoice;}
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}