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
console.log(getHumanChoice());