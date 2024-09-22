function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    else if(choice == 2){
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    if(computerChoice.toUpperCase() == "ROCK" && humanChoice.toUpperCase() == "SCISSORS"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }

    else if(computerChoice.toUpperCase() == "ROCK" && humanChoice.toUpperCase() == "PAPER"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    else if(computerChoice.toUpperCase() == "PAPER" && humanChoice.toUpperCase() == "ROCK"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }

    else if(computerChoice.toUpperCase() == "PAPER" && humanChoice.toUpperCase() == "SCISSORS"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }

    else if(computerChoice.toUpperCase() == "SCISSORS" && humanChoice.toUpperCase() == "PAPER"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }

    else if(computerChoice.toUpperCase() == "SCISSORS" && humanChoice.toUpperCase() == "ROCK"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }

    else if(computerChoice.toUpperCase() == humanChoice.toUpperCase()){
        console.log("It's a tie!");
    }
}

const b1 = document.querySelector("#rock");
const b2 = document.querySelector("#paper");
const b3 = document.querySelector("#scissors");



b1.addEventListener("click", () => {
    let humanChoice = "ROCK";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

b2.addEventListener("click", () => {
    let humanChoice = "PAPER";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

b3.addEventListener("click", () => {
    let humanChoice = "SCISSORS";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

