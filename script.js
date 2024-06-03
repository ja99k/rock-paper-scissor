document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  const rootNode = document.getElementById("root");

  rootNode.appendChild(div);
  function createDiv(elementType, text, parentNode) {
    const element = document.createElement(elementType);
    element.textContent = text;
    parentNode.appendChild(element);
    return element;
  }

  const rockButton = createDiv("button", "Rock", rootNode);
  const paperButton = createDiv("button", "Paper", rootNode);
  const scissorsButton = createDiv("button", "Scissors", rootNode);

  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });

  const choices = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
  };

  function getComputerChoice() {
    const rand = Math.floor(Math.random() * Object.keys(choices).length) + 1;
    return choices[rand].toLowerCase();
  }

  const roundsToPlay = 5;
  let roundsPlayed = 0;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    createDiv("div", "Player choice: " + humanSelection, rootNode);
    createDiv("div", "Computer choice: " + computerSelection, rootNode);

    if (humanSelection === computerSelection) {
      createDiv("div", "It's a draw!", rootNode);
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "scissors" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "rock")
    ) {
      humanScore++;
      createDiv("div", "You win this round!", rootNode);
    } else {
      computerScore++;
      createDiv("div", "Computer wins this round!", rootNode);
    }

    roundsPlayed++;
    createDiv(
      "div",
      `Score - You: ${humanScore}, Computer: ${computerScore}`,
      rootNode
    );
  }

  function playGame() {
    while (roundsPlayed < roundsToPlay) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
    createDiv(
      "div",
      `Total score: You: ${humanScore}, Computer: ${computerScore}`,
      rootNode
    );
  }
  playGame();
});
