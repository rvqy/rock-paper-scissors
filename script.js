const SHAPES = ["rock", "paper", "scissors"];

let roundResult = "";
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("img");
buttons.forEach(button => button.addEventListener("click", game));

function game() {
  const playerChoice = this.getAttribute('class');
  const computerChoice = getComputerChoice();

  roundResult = playRound(playerChoice, computerChoice);
  console.log(roundResult);

  if (roundResult === "win") {
    playerScore++;
  } else if (roundResult === "lose") {
    computerScore++;
  }

  updateResult(playerScore, computerScore);

  if (playerScore === 5 || computerScore === 5) {
    handleGameEnd();
  }
}

function getComputerChoice() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      roundResult = "win";
    } else if (playerSelection === computerSelection) {
      roundResult = "tie";
    } else {
      roundResult = "lose";
    }
  
    return roundResult;
}
  
function handleGameEnd() {
  const gameResult = document.querySelector(".round-result");
  if (playerScore === 5) {
    gameResult.innerText = "You won the game!";
  } else {
    gameResult.innerText = "You lost the game!";
  }

  buttons.forEach(button => button.removeEventListener("click", game));

  let roundResultDiv = document.querySelector(".round-result");
  let resetButton = document.querySelector(".reset-button");
  if (!resetButton) {
    resetButton = document.createElement("button");
    resetButton.classList.add("reset-button");
    resetButton.innerText = "Reset";
    roundResultDiv.appendChild(resetButton);
  }

  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  roundResult = "";
  playerScore = 0;
  computerScore = 0;
  updateResult(playerScore, computerScore);
  const gameResult = document.querySelector(".round-result");
  gameResult.innerText = "";

  buttons.forEach(button => button.addEventListener("click", game));
  const resetButton = document.querySelector(".reset-button");
  if (resetButton) {
    document.body.removeChild(resetButton);
  }
}

function updateResult(playerScore, computerScore) {
  const playerResult = document.querySelector(".player-score");
  const computerResult = document.querySelector(".computer-score");
  const roundMessage = document.querySelector(".round-result");
  playerResult.innerText = `PLAYER ${playerScore}`;
  computerResult.innerText = `COMPUTER ${computerScore}`;
  if (roundResult === "win" || roundResult === "lose") {
    roundMessage.innerText = `You ${roundResult} this round!`;
  } else {
    roundMessage.innerText = "It's a tie!";
  }
}











