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

console.log(getHumanChoice());
console.log(getComputerChoice());
