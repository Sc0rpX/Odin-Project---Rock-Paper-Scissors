// Variables
let round = 1
let playerScore = 0
let computerScore = 0
const icons = ["👊", "🖐️", "✌️"]

// DOM Selectors
const buttons = document.querySelector("#buttons")
const result = document.querySelector("#result")
const resultDes = document.querySelector("#result-description")
const roundDis = document.querySelector("#round-indicator")
const playerScoreDisplay = document.querySelector("#playerscore")
const computerScoreDisplay = document.querySelector("#computerscore")
const playerSign = document.querySelector("#playersign")
const computerSign = document.querySelector("#computersign")
const overlay = document.querySelector("#overlay")
const finalResult = document.querySelector("#finalResult")
const playAgain = document.querySelector("#playAgain")

// Returns Random Choice of Computer
function getComputerChoice(){
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Change the choosed icons
function changeIcon(playerChoice, computerChoice){
    switch (playerChoice){
        case "rock":
            playerSign.textContent = icons[0];
            break;
        case "paper":
            playerSign.textContent = icons[1];
            break;
        case "scissor":
            playerSign.textContent = icons[2];
            break;
    }

    switch (computerChoice){
        case "rock":
            computerSign.textContent = icons[0];
            break;
        case "paper":
            computerSign.textContent = icons[1];
            break;
        case "scissor":
            computerSign.textContent = icons[2];
            break;
    }
}

// Play a single round
function playRound(playerChoice, computerChoice){
    if ((playerChoice === "rock" && computerChoice === "scissor") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissor" && computerChoice === "paper")){
        ++playerScore;
        result.textContent = `You win!` 
        resultDes.textContent = `${playerChoice} beats ${computerChoice}.`
    }
    else if((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissor") || (playerChoice === "scissor" && computerChoice === "rock")){
        ++computerScore
        result.textContent = `You lose!` 
        resultDes.textContent = `${computerChoice} beats ${playerChoice}.`
    }
    else{
        result.textContent = `It's a Draw!` 
        resultDes.textContent = `You both choose ${playerChoice}\n `
    }

    changeIcon(playerChoice, computerChoice)
    roundDis.textContent = `Round: ${round}`
    playerScoreDisplay.textContent = `Your Score: ${playerScore}` 
    computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`
    round++;
}

// Detects winner
function getWinner(playerScore, computerScore){
    if(playerScore > computerScore){
        finalResult.textContent = `You Won The Game!`
    }
    else{
        finalResult.textContent = `You lost The Game!`
    }
}

// Detects if anyone reaches final score or not
function isGameOver(){
    return (playerScore == 5 || computerScore == 5);
}

buttons.addEventListener("click", (e) => {
    const playerChoice = e.target.id

    playRound(playerChoice, getComputerChoice())

    if(isGameOver()){
        getWinner(playerScore, computerScore)
        overlay.style.display = "flex";

        playAgain.addEventListener("click", () => {
            location.reload()
        })
    }
})


