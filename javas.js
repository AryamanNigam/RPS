function getRandom(num){
    return Math.floor(Math.random() * num);
}

function getComputerChoice(){
    let choice = getRandom(3);
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



function getHumanChoice(){
    let hc = prompt("What is your choice");
    return hc;
}

function playGame(){
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

    for(let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        console.log(`Computer Score = ${computerScore} and Human Score = ${humanScore}`);
    }

    if(humanScore > computerScore){
        console.log("Congratulations, you win!");
    }
    else if(humanScore == computerScore){
        console.log("It's a tie!");
    }
    else{
        console.log("Sorry, you lost!");
    }
}

playGame();