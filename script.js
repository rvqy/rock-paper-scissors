const shapes = ["rock", "paper", "scissors"];

function getComputerChoices() {
    return shapes[(Math.floor(Math.random() * shapes.length))];
}

function playRound(playerSelection = "rock", computerSelection = getComputerChoices()) {
    playerSelection = playerSelection.toLowerCase();
    let message = "";

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        message = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === computerSelection) {
        message = "Tie!";
    } else {
        message = `You lost! ${computerSelection} beats ${playerSelection}.`;
    }

    return message;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors!");
        let computerSelection = getComputerChoices();

        let result = playRound(playerSelection, computerSelection);

        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lost")) {
            computerScore++;
        }

        result += ` ${playerScore}-${computerScore}`;
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("You win the game!")
    } else if (playerScore < computerScore) {
        console.log("You lose the game!")
    } else {
        console.log("It's a tie!")
    }
}

game();
