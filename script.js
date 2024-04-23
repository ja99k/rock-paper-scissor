function getComputerChoice() {
  var choices = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
  };
  var rand = Math.floor(Math.random() * Object.keys(choices).length) + 1;
  return choices[rand].toLowerCase();
}

function getHumanChoice() {
  var answer = prompt("Rock, Paper or Scissors?");
  return answer.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      return console.log("draw!");
    }
  }
  playRound(humanSelection, computerSelection);
}
playGame();
