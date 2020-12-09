
let computerWin = 0;
let playerWin = 0;
let tieCount = 0;

const options = Array("rock","paper","scissors");
function computerPlay();
    let randomOption = options[Math.floor(Math.random() * 3)];
    return randomOption;
    
for (let i = 0; i < 6; i++) {
    let playerSelection = window.prompt("rock, paper, or scissors? Spell exactly like this."); 
    let playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPlay()
    if (playerSelection = "rock") {
        if (computerSelection = "rock") {
            tieCount++;
            console.log("Tie both selected rock!");
            console.log(`Onto Round ${i}` );
        }    
        else if (computerSelection = "paper") {
            computerWin++;
            console.log("Computer beat you with paper!");
            console.log(`Onto Round ${i}` );
        }
        else {
            playerWin++;
            console.log("Rock beats scissors! You win!");
            console.log(`Onto Round ${i}` );
        }
    } else if (playerSelection = "paper"){
        if (computerSelection = "rock") {
            playerWin++;
            console.log("You covered the computers rock! Win!");
            console.log(`Onto Round ${i}` );
        }    
        else if (computerSelection = "paper") {
            tieCount++;
            console.log("Tie round!");
            console.log(`Onto Round ${i}` );
        }
        else {
            computerWin++;
            console.log("You got cut up by a computer! Lose");
            console.log(`Onto Round ${i}` );  
    }

    } else if (playerSelection = "scissors"){
        if (computerSelection = "rock") {
            computerWin++;
            console.log("You got smashed");
            console.log(`Onto Round ${i}` );
        }    
        else if (computerSelection = "paper") {
            playerWin++;
            console.log("You cut up the computer! Win");
            console.log(`Onto Round ${i}` );
        }
        else {
            tieCount++;
            console.log("Tie game!");
            console.log(`Onto Round ${i}` );  
        }
    }
}


console.log(`Out of 5 games you win ${playerWin} and the computer won ${computerWin}`);

if (playerWin > computerWin) {
    console.log("You are the winner!");     
} else if (playerWin < computerWin) {
    console.log("You lost!");
} else {
    console.log("Tie game good luck next time!");
}