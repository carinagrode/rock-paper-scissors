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

// Ask user for choice with 3 buttons: rock, paper or scissors
function getUserChoice() {

    const userChoiceRock = document.getElementById('rock');
    userChoiceRock.addEventListener('click', () => playRound('rock', userScore, computerScore));

    const userChoicePaper = document.getElementById('paper');
    userChoicePaper.addEventListener('click', () => playRound('paper', userScore, computerScore));

    const userChoiceScissors = document.getElementById('scissors');
    userChoiceScissors.addEventListener('click', () => playRound('scissors', userScore, computerScore));
}

// Compare the computerChoice with the userChoice
// Display the result
function playRound(userChoice, userScore, computerScore) {

    let computerChoice = getComputerChoice();
    // let userChoice = getUserChoice();

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
        alert(`Something went wrong. Refresh and try again!`);
    }

    if (computerScore === finalScore) {
        alert(`You lose! The computer has first reached ${finalScore} points!`);
    } else {
        alert(`You win! You have first reached ${finalScore} points!`);
    }
}

// Play game until final score is reached
// Display overall winner of the game
function playGame(finalScore) {
    playRound(finalScore, userScore, computerScore);    
}

// Set the game's end: Ask the user for a final score
// let finalScore = parseInt(prompt('Welcome to Rock, Paper, Scissors! Choose a final score between 1 and 5.'));
let finalScore = 3;

// Set both scores to 0 for the start
let computerScore = 0;
let userScore = 0;


playGame(finalScore);
