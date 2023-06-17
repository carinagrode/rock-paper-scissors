function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*3)];
}

// Compare the computer choice with the user choice
// Display the result
function playRound(userChoice) {

    const computerChoice = getComputerChoice();

    const bodyContent = document.querySelector('body');
    const result = document.createElement('p');

    if (computerChoice === 'rock' && userChoice === 'rock') {
        result.textContent = `You both chose rock. It's a tie! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'paper') {
        result.textContent = `You both chose paper. It's a tie! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
        result.textContent = `You both chose scissors. It's a tie! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        computerScore++;
        result.textContent = `You chose scissors, the computer chose rock. You lose! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        userScore++;
        result.textContent = `You chose paper, the computer chose rock. You win! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        userScore++;
        result.textContent = `You chose rock, the computer chose scissors. You win! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        computerScore++;
        result.textContent = `You chose paper, the computer chose scissors. You lose! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        computerScore++;
        result.textContent = `You chose rock, the computer chose paper. You lose! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        userScore++;
        result.textContent = `You chose scissors, the computer chose paper. You win! Score: ${userScore} : ${computerScore}`;
    } else {
        result.textContent = `Something went wrong. Refresh and try again!`;
    }

    if (computerScore === finalScore) {
        result.textContent = `You lose! The computer has first reached ${finalScore} points!`;
    } else if (userScore === finalScore) {
        result.textContent = `You win! You have first reached ${finalScore} points!`;
    }

    bodyContent.appendChild(result);
}

// Play game until final score is reached
// Display overall winner of the game
// function playGame(finalScore) {



// // Set the game's end: Ask the user for a final score
// // let finalScore = parseInt(prompt('Welcome to Rock, Paper, Scissors! Choose a final score between 1 and 5.'));
let finalScore = 3;

// Set both scores to 0 for the start
let computerScore = 0;
let userScore = 0;







// function playGame() {
//     getUserChoice();
// }


// Ask user for choice with 3 buttons: rock, paper or scissors
// Play one round with it

const rock = document.getElementById('rock');
rock.addEventListener('click', 
    () => {
    playRound('rock');
    }
);

const paper = document.getElementById('paper');
paper.addEventListener('click', 
    () => {
    playRound('paper');
    }
);

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', 
    () => {
    playRound('scissors');
    }
);   







// playGame();






// if (computerChoice === userChoice) {
//     showResult();
// } else {
//     alert('else');
// }

// function showResult() {
//     const bodyContent = document.querySelector('body');
//     const result = document.createElement('p');
//     result.textContent = 'Hier steht das Ergebnis!';
//     bodyContent.appendChild(result);
// }