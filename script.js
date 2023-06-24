function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*3)];
}

function setButtonsToDefault() {
    userRock.setAttribute('src', 'img/rock.jpg');
    userPaper.setAttribute('src', 'img/paper.jpg');
    userScissors.setAttribute('src', 'img/scissors.jpg');
    computerRock.setAttribute('src', 'img/rock.jpg');
    computerPaper.setAttribute('src', 'img/paper.jpg');
    computerScissors.setAttribute('src', 'img/scissors.jpg');
}

// Compare the computer choice with the user choice
// Display the result
function playRound(userChoice) {

    const computerChoice = getComputerChoice();

    const result = document.getElementById('result');

    //     const bodyContent = document.querySelector('body');
//     const result = document.createElement('p');
//     result.textContent = 'Hier steht das Ergebnis!';
//     bodyContent.appendChild(result);

    if (computerChoice === 'rock' && userChoice === 'rock') {
        setButtonsToDefault();
        userRock.setAttribute('src', 'img/rock-active.jpg');
        computerRock.setAttribute('src', 'img/rock-active.jpg');
        result.textContent = `You both chose rock. It's a tie! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'paper') {
        setButtonsToDefault();
        userPaper.setAttribute('src', 'img/paper-active.jpg');
        computerPaper.setAttribute('src', 'img/paper-active.jpg');
        result.textContent = `You both chose paper. It's a tie! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
        setButtonsToDefault();
        userScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerScissors.setAttribute('src', 'img/scissors-active.jpg');
        result.textContent = `You both chose scissors. It's a tie! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        setButtonsToDefault();
        userScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerRock.setAttribute('src', 'img/rock-active.jpg');
        computerScore++;
        result.textContent = `You chose scissors, the computer chose rock. You lose! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        setButtonsToDefault();
        userPaper.setAttribute('src', 'img/paper-active.jpg');
        computerRock.setAttribute('src', 'img/rock-active.jpg');
        userScore++;
        result.textContent = `You chose paper, the computer chose rock. You win! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        setButtonsToDefault();
        userRock.setAttribute('src', 'img/rock-active.jpg');
        computerScissors.setAttribute('src', 'img/scissors-active.jpg');
        userScore++;
        result.textContent = `You chose rock, the computer chose scissors. You win! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        setButtonsToDefault();
        userPaper.setAttribute('src', 'img/paper-active.jpg');
        computerScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerScore++;
        result.textContent = `You chose paper, the computer chose scissors. You lose! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        setButtonsToDefault();
        userRock.setAttribute('src', 'img/rock-active.jpg');
        computerPaper.setAttribute('src', 'img/paper-active.jpg');
        computerScore++;
        result.textContent = `You chose rock, the computer chose paper. You lose! Score: ${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        setButtonsToDefault();
        userScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerPaper.setAttribute('src', 'img/paper-active.jpg');
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
}

// Play game until final score is reached
// Display overall winner of the game
// function playGame(finalScore) {



// // Set the game's end: Ask the user for a final score
// // let finalScore = parseInt(prompt('Welcome to Rock, Paper, Scissors! Choose a final score between 1 and 5.'));
let finalScore = 5;

// Set both scores to 0 for the start
let computerScore = 0;
let userScore = 0;







// function playGame() {
//     getUserChoice();
// }


// Ask user for choice with 3 buttons: rock, paper or scissors
// Play one round with it

const userRock = document.getElementById('user-rock');
userRock.addEventListener('click', 
    () => {
    playRound('rock');
    }
);

const userPaper = document.getElementById('user-paper');
userPaper.addEventListener('click', 
    () => {
    playRound('paper');
    }
);

const userScissors = document.getElementById('user-scissors');
userScissors.addEventListener('click', 
    () => {
    playRound('scissors');
    }
);   


const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');




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