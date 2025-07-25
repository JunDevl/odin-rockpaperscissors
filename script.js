let round = document.getElementById("round");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let reset = document.getElementById("reset");

let result = document.getElementById("result");

rock.addEventListener("click", () => { determineWinner("rock", getAiMove()); });
paper.addEventListener("click", () => { determineWinner("paper", getAiMove()); });
scissors.addEventListener("click", () => { determineWinner("scissors", getAiMove()); });

reset.addEventListener("click", () => {
  round.innerText = "";
  result.innerText = "";
  currentRound = 0;
});

let humanScore = 0;
let aiScore = 0;

let currentRound = 0;

function determineWinner(playerMove, aiMove) {
  if (currentRound === 5) {
    if (humanScore > aiScore) {
      result.className = "won";
      result.textContent = "CONGRATULATIONS! YOU WON THE GAME!";
    } else if (humanScore < aiScore) {
      result.className = "lost";
      result.textContent = "YOU LOSER! IT SEEMS LIKE AI WILL REALLY DOMINATE THE ENTIRE MULTIVERSE!";
    } else {
      result.className = "";
      result.textContent = "You may have failed to win, but didn't lose either. Don't give up, your dreams are just a few steps away.";
    }
    return;
  }

  currentRound++;
  round.innerText = `${currentRound}`;

  if (playerMove === aiMove) {
    result.textContent = "IT'S A DRAW!";
    result.className = "";
    return;
  }

  if ((playerMove === "rock" && aiMove === "scissors") ||
    (playerMove === "paper" && aiMove === "rock") ||
    (playerMove === "scissors" && aiMove === "paper")) {
    result.textContent = "YOU WIN!";
    result.className = "won";
    humanScore++;
  } else {
    result.textContent = "YOU LOST!";
    result.className = "lost";
    aiScore++;
  }

}

function getAiMove() {
  // Possible return values: 1 ("rock"), 2 ("paper"), 3 ("scissors")
  // Would be helpful if Javascript had enums.
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