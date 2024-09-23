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
    const m = document.querySelector("#moves-list");
    const moveMade = document.createElement("div");

    const cs = document.querySelector("#CS");  
    const hs = document.querySelector("#HS");  

    if(humanScore < 5 && computerScore < 5 ){
        if(computerChoice.toUpperCase() == "ROCK" && humanChoice.toUpperCase() == "SCISSORS"){
            moveMade.textContent = "You Lose! Rock beats Scissors";
            m.appendChild(moveMade);
            computerScore++;
            cs.textContent = computerScore.toString();  
        }

        else if(computerChoice.toUpperCase() == "ROCK" && humanChoice.toUpperCase() == "PAPER"){
            moveMade.textContent = "You win! Paper beats Rock";
            m.appendChild(moveMade);
            humanScore++;
            hs.textContent = humanScore.toString(); 
        }

        else if(computerChoice.toUpperCase() == "PAPER" && humanChoice.toUpperCase() == "ROCK"){
            moveMade.textContent = "You lose! Paper beats Rock";
            m.appendChild(moveMade);
            computerScore++;
            cs.textContent = computerScore.toString();  
        }

        else if(computerChoice.toUpperCase() == "PAPER" && humanChoice.toUpperCase() == "SCISSORS"){
            moveMade.textContent = "You win! Scissors beats Paper";
            m.appendChild(moveMade);
            humanScore++;
            hs.textContent = humanScore.toString(); 
        }

        else if(computerChoice.toUpperCase() == "SCISSORS" && humanChoice.toUpperCase() == "PAPER"){
            moveMade.textContent = "You lose! Scissors beats Paper";
            m.appendChild(moveMade);
            computerScore++;
            cs.textContent = computerScore.toString();  
        }

        else if(computerChoice.toUpperCase() == "SCISSORS" && humanChoice.toUpperCase() == "ROCK"){
            moveMade.textContent = "You win! Rock beats Scissors";
            m.appendChild(moveMade);
            humanScore++;
            hs.textContent = humanScore.toString(); 
        }

        else if(computerChoice.toUpperCase() == humanChoice.toUpperCase()){
            moveMade.textContent = "It's a tie!";
            m.appendChild(moveMade);
        }
    }

    else{
        if(humanScore > computerScore){
            alert("You win!");
        }
        else{
            alert("You lose!");
        }
    }
}

const b1 = document.querySelector("#rock");
const b2 = document.querySelector("#paper");
const b3 = document.querySelector("#scissors");

b1.addEventListener("click", () => {
    let humanChoice = "ROCK";
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);  
});

b2.addEventListener("click", () => {
    let humanChoice = "PAPER";
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);  
});

b3.addEventListener("click", () => {
    let humanChoice = "SCISSORS";
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);  
});
