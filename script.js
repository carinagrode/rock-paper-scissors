// Computer chooses randomly between rock, paper, scissors
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    let randomChoice;
    
    if (randomNumber === 0) {
        randomChoice = 'rock';
    } else if (randomNumber === 1) {
        randomChoice = 'paper';
    } else {
        randomChoice = 'scissors';
    }

    return randomChoice;
}

// Ask user for choice: rock, paper or scissors
// Make the choice case-insensitive, so you can enter rock, Rock or ROCK
// If user chooses something else: ask again
function getUserChoice() {

    let enteredUserChoice = prompt('Choose wisely: rock, paper or scissors?');
    let lowerCaseUserChoice = enteredUserChoice.toLowerCase();

    if (lowerCaseUserChoice == 'rock' || lowerCaseUserChoice == 'paper' || lowerCaseUserChoice == 'scissors') {
        return lowerCaseUserChoice;
    } else {
        enteredUserChoice = prompt('Please choose one of these: rock, paper or scissors?');
        lowerCaseUserChoice = enteredUserChoice.toLowerCase();
        return lowerCaseUserChoice;
    }
}

// Compare the computerChoice with the userChoice
// Display the result and the current score
function playRound() {

    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    if (computerChoice === 'rock' && userChoice === 'rock') {
        alert(`You both chose rock. It's a tie! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'paper' && userChoice === 'paper') {
        alert(`You both chose paper. It's a tie! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
        alert(`You both chose scissors. It's a tie! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        computerScore++;
        alert(`You chose scissors, the computer chose rock. You lose! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        userScore++;
        alert(`You chose paper, the computer chose rock. You win! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        userScore++;
        alert(`You chose rock, the computer chose scissors. You win! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        computerScore++;
        alert(`You chose paper, the computer chose scissors. You lose! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        computerScore++;
        alert(`You chose rock, the computer chose paper. You lose! Score: ${userScore} : ${computerScore}`);
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        userScore++;
        alert(`You chose scissors, the computer chose paper. You win! Score: ${userScore} : ${computerScore}`);
    } else {
        alert(`Something went wrong. Refresh and try again! Score: ${userScore} : ${computerScore}`);
    }
}

// Play game until final score is reached
// Display overall winner of the game
function playGame(finalScore) {

    while (computerScore < finalScore && userScore < finalScore) {
        playRound();
    }

    if (computerScore === finalScore) {
        alert(`You lose! The computer has first reached ${finalScore} points!`);
    } else {
        alert(`You win! You have first reached ${finalScore} points!`);
    }
    
}

// Set the game's end: Ask the user for a final score
let finalScore = parseInt(prompt('Welcome to Rock, Paper, Scissors! Choose a final score between 1 and 5.'));

// Set both scores to 0 for the start
let computerScore = 0;
let userScore = 0;


playGame(finalScore);












/*

// Computer chooses randomly between rock, paper, scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChoice;
    
    if (randomNumber === 0) {
        randomChoice = 'rock';
    } else if (randomNumber === 1) {
        randomChoice = 'paper';
    } else {
        randomChoice = 'scissors';
    }

    return randomChoice;
}

// Ask user for choice: rock, paper or scissors
function getUserChoice() {
    let enteredUserChoice = prompt('Choose wisely: rock, paper or scissors?');

    if (enteredUserChoice == 'rock' || enteredUserChoice == 'paper' || enteredUserChoice == 'scissors') {
        return enteredUserChoice;
    } else {
        enteredUserChoice = prompt('Please choose one of these: rock, paper or scissors?');
        return enteredUserChoice;
    }
}

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();


// Compare the computerChoice with the userChoice
// Display the result
if (computerChoice === 'rock' && userChoice === 'rock') {
    alert('You both chose rock. Undecided!');
} else if (computerChoice === 'paper' && userChoice === 'paper') {
    alert('You both chose paper. Undecided!');
} else if (computerChoice === 'scissors' && userChoice === 'scissors') {
    alert('You both chose scissors. Undecided!');
} else if (computerChoice === 'rock' && userChoice === 'scissors') {
    alert('You chose scissors, the computer chose rock. Sorry, you lose. :(');
} else if (computerChoice === 'rock' && userChoice === 'paper') {
    alert('You chose paper, the computer chose rock. Yeah, you win! :)');
} else if (computerChoice === 'scissors' && userChoice === 'rock') {
    alert('You chose rock, the computer chose scissors. Yeah, you win! :)');
} else if (computerChoice === 'scissors' && userChoice === 'paper') {
    alert('You chose paper, the computer chose scissors. Sorry, you lose. :(');
} else if (computerChoice === 'paper' && userChoice === 'rock') {
    alert('You chose rock, the computer chose paper. Sorry, you lose. :(');
} else if (computerChoice === 'paper' && userChoice === 'scissors') {
    alert('You chose scissors, the computer chose paper. Yeah, you win! :)');
} else {
    alert('Something went wrong. Refresh and try again!');
}

*/
