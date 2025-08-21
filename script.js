function getComputerChoice(){
    // Create an array of rock, paper and scissor
    const options = ["rock", "paper", "scissor"]
    // Generate a random number among 0, 1 and 2
    const randomIndex = Math.floor(Math.random() * 3)
    // Return the choice from the array using the random index 
    return options[randomIndex]
}

console.log(getComputerChoice())

function getHumanChoice(){
    // Prompt the user to choose
    const choice = prompt("Choose your move (rock, paper or scissor):")
    // Return the value choosen by the user
    return choice
}

console.log(getHumanChoice())

let computerScore = 0
let humanScore = 0
