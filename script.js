const shapes = ["rock", "paper", "scissors"];

function getComputerChoices() {
    return shapes[(Math.floor(Math.random() * shapes.length))];
}
