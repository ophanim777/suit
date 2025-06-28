function getComputerChoice() {
    const option = ['rock', 'paper', 'scissors'];
  const suit = Math.floor(Math.random() * suit.length);
  return option[suit];
}
console.log(getComputerChoice);