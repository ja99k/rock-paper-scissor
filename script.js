var choices = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

function getComputerChoice() {
  var rand = Math.floor(Math.random() * Object.keys(choices).length) + 1;
  return choices[rand].toLowerCase();
}

function getHumanChoice() {
  var answer = prompt("Rock, Paper, or Scissors?");
  return answer.toLowerCase();
}

var roundsToPlay = 5;
var roundsPlayed = 0;
var humanScore = 0;
var computerScore = 0;

function playRound(humanSelection, computerSelection) {
  console.log(`Your selection: ${humanSelection}`);
  console.log(`Computer's selection: ${computerSelection}`);

  if (humanSelection === computerSelection) {
      console.log("It's a draw!");
  } else if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
             (humanSelection === 'scissors' && computerSelection === 'paper') ||
             (humanSelection === 'paper' && computerSelection === 'rock')) {
      humanScore++;
      console.log("You win this round!");
  } else {
      computerScore++;
      console.log("Computer wins this round!");
  }

  roundsPlayed++;
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  while (roundsPlayed < roundsToPlay) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
  }
  console.log("Game over!");
}

playGame();
