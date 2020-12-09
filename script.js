//set the stats to 0 ro restart the game, and options//
let computerWin = 0;
let playerWin = 0;
let tieCount = 0;
let roundCount = 1;

const options = ["rock","paper","scissors"]
const rock_div = document.querySelector("#rock")
const paper_div = document.querySelector("#paper")
const scissor_div = document.querySelector("#scissors")

function reset() {
    computerWin = 0;
    playerWin = 0;
    tieCount = 0;
    roundCount = 1;

    document.getElementById("playerwins").textContent = `${playerWin}`
    document.getElementById("computerwins").textContent = `${computerWin}`
    document.getElementById('round').textContent = `ROUND ${roundCount}`
    document.getElementById("text").textContent = ""
}


function endGame() {
    if (roundCount > 5) {
       if (playerWin > computerWin) {
            window.alert(`You win! You had ${playerWin} wins to the computers ${computerWin} wins, and ${tieCount} ties`)
            reset()
       } else if (playerWin < computerWin) {
            window.alert(`You lose! You had ${playerWin} while the computer had ${computerWin} wins and ${tieCount} ties`)
            reset()
       } else {
            window.alert(`Tie game, you both had ${playerWin} Wins!`)
            reset()
       }
    }   
}

// get random computer choice //
function randomOption() {
    return options[Math.floor(Math.random() * 3)];
}



// Functions for the WIN LOSE and TIE cases, and updates the message under the pictures and score on screen//

function win(userChoice, randomComputerChoice) {
    playerWin += 1
    document.getElementById("text").textContent = `You win, your ${userChoice} beats ${randomComputerChoice}!`
    document.getElementById("playerwins").textContent = `${playerWin}`;
    roundCount += 1
    document.getElementById('round').textContent = `ROUND ${roundCount}`
    endGame()
}

function lose(userChoice, randomComputerChoice) {
    computerWin += 1
    document.getElementById("text").textContent = `You lost, your ${userChoice} loses against ${randomComputerChoice}!`
    document.getElementById("computerwins").textContent = `${computerWin}`;
    roundCount += 1
    document.getElementById('round').textContent = `ROUND ${roundCount}`
    endGame()
}

function tie(userChoice) {
    tieCount += 1
    document.getElementById("text").textContent = `Tie game! You both chose ${userChoice}`
    roundCount += 1
    document.getElementById('round').textContent = `ROUND ${roundCount}`
    endGame()
}

// checks to see if round is at 5, if so declare winner with a popup and reset stats //


function game(choice) {
    let userChoice = choice
    let randomComputerChoice = randomOption()

    switch(userChoice + randomComputerChoice) {
       // win for player //
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, randomComputerChoice)
            break
    
        // win for computer //
        case 'rockpaper':
        case 'paperrock':
        case "scissorspaper":
            lose(userChoice, randomComputerChoice)
            break

        // tie round //
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie(userChoice) 
            break
    } 
}

function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissor_div.addEventListener('click', () => game('scissors'));
    console.log("its working!")
  }

main()
