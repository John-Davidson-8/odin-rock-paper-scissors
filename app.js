// Rock, Paper Scissors Again!!!

let choice = ["rock", "paper", "scissors"];
let playerMessage = "you choose";
let computerMessage = "computer chose";

let playerChoice = prompt("Choose rock, paper or scissors");

if (playerChoice === choice[0]) {
  playerMessage = "You chose rock";
} else if (playerChoice === choice[1]) {
  playerMessage = "You chose paper";
} else if (playerChoice === choice[2]) {
  playerMessage = "You chose scissors";
} else {
  playerMessage = "You have to choose between rock, paper or scissors!";
}
console.log(playerMessage);

let computerChoice = Math.floor(Math.random() * 3);
if (computerChoice === 1) {
  computerMessage = "computer chose rock";
} else if (computerChoice === 2) {
  computerMessage = "computer chose paper";
} else {
  computerMessage = "computer chose scissors";
}
console.log(computerMessage);

// Tie
if (
  (playerChoice == choice[0] && computerChoice == 1) ||
  (playerChoice == choice[1] && computerChoice == 2) ||
  (playerChoice == choice[2] && computerChoice == 3)
) {
  console.log("It is a tie");
}
// Player wins
else if (playerChoice == choice[0] && computerChoice == 3) {
  console.log("You win! Rock beats Scissors!");
} else if (playerChoice == choice[1] && computerChoice == 1) {
  console.log("You win! Paper beats rock!");
} else if (playerChoice == choice[2] && computerChoice == 2) {
  console.log("You win scissors beats paper");

  // Computer wins
} else if (playerChoice == choice[0] && computerChoice == 2) {
  console.log("You lose! Paper beats rock");
} else if (playerChoice == choice[1] && computerChoice == 3) {
  console.log("You lose! Scissors beats paper");
} else if (playerChoice == choice[2] && computerChoice == 1) {
  console.log("You lose! Rock beats scissors");
}
