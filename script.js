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



function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){
        if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")){
            ++humanScore;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.\n `)
        }
        else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "rock")){
            ++computerScore
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.\n `)
        }
        else{
            console.log(`It's a Draw! You both choose ${humanChoice}\n `)
        }

        console.log(`Your Score: ${humanScore}\nComputer's Score: ${computerScore}\n `)
    }

    function getWinner(humanScore, computerScore){
        if(humanScore > computerScore){
            console.log(`You Won The Game!`)
        }
        else if(computerScore > humanScore){
            console.log(`You lost The Game`)
        }
        else{
            console.log("It's a Draw!")
        }
    }

    for(let i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    getWinner(humanScore, computerScore)
}

playGame()
