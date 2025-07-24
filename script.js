let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resetScores = document.getElementById("reset");

let result = document.getElementById("result");

rock.addEventListener("click", () => { determineWinner("rock", getAiMove()); });
paper.addEventListener("click", () => { determineWinner("paper", getAiMove()); });
scissors.addEventListener("click", () => { determineWinner("scissors", getAiMove()); });

let humanScore = 0;
let aiScore = 0;

function determineWinner(playerMove, aiMove) {
  if (playerMove === aiMove) {
    result.textContent = "IT'S A DRAW!";
    result.className = "";
    return;
  }

  if ((playerMove === "rock" && aiMove === "scissors") ||
    (playerMove === "paper" && aiMove === "rock") ||
    (playerMove === "scissors" && aiMove === "paper")) {
    result.textContent = "CONGRATULATIONS! YOU WIN!";
    result.className = "won";
    humanScore++;
  } else {
    result.textContent = "TOO BAD! IT SEEMS LIKE AI WILL REALLY DOMINATE THE ENTIRE MULTIVERSE!";
    result.className = "lost";
    aiScore++;
  }
}

function getAiMove() {
  // Possible return values: 1 ("rock"), 2 ("paper"), 3 ("scissors")
  // Since Javascript doesn't have enums bult-in, i can't directly correlate numbers with a name.
  return convertNumberAsMove(Math.floor(Math.random() * 3) + 1);
}

function convertNumberAsMove(number) {
  switch (number) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}