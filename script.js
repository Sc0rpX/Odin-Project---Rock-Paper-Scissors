function getComputerChoice(){
    // Create an array of rock, paper and scissor
    const options = ["rock", "paper", "scissor"]
    // Generate a random number among 0, 1 and 2
    const randomIndex = Math.floor(Math.random() * 3)
    // Return the choice from the array using the random index 
    return options[randomIndex]
}

function getHumanChoice(){
    // Prompt the user to choose
    const choice = prompt("Choose your move (rock, paper or scissor):")
    // Return the value choosen by the user
    return choice.toLowerCase()
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice){
    if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")){
        ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    }
    else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "rock")){
        ++computerScore
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
    else{
        console.log("It's a Draw!")
    }
}

playRound(getHumanChoice(), getComputerChoice())
console.log(humanScore)
console.log(computerScore)
