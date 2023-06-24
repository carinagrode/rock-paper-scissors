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

function playRound(userChoice) {

    const computerChoice = getComputerChoice();

    const score = document.getElementById('score');


    if (computerChoice === 'rock' && userChoice === 'rock') {
        setButtonsToDefault();
        userRock.setAttribute('src', 'img/rock-active.jpg');
        computerRock.setAttribute('src', 'img/rock-active.jpg');
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'paper') {
        setButtonsToDefault();
        userPaper.setAttribute('src', 'img/paper-active.jpg');
        computerPaper.setAttribute('src', 'img/paper-active.jpg');
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
        setButtonsToDefault();
        userScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerScissors.setAttribute('src', 'img/scissors-active.jpg');
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        setButtonsToDefault();
        userScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerRock.setAttribute('src', 'img/rock-active.jpg');
        computerScore++;
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        setButtonsToDefault();
        userPaper.setAttribute('src', 'img/paper-active.jpg');
        computerRock.setAttribute('src', 'img/rock-active.jpg');
        userScore++;
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        setButtonsToDefault();
        userRock.setAttribute('src', 'img/rock-active.jpg');
        computerScissors.setAttribute('src', 'img/scissors-active.jpg');
        userScore++;
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        setButtonsToDefault();
        userPaper.setAttribute('src', 'img/paper-active.jpg');
        computerScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerScore++;
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        setButtonsToDefault();
        userRock.setAttribute('src', 'img/rock-active.jpg');
        computerPaper.setAttribute('src', 'img/paper-active.jpg');
        computerScore++;
        score.textContent = `${userScore} : ${computerScore}`;
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        setButtonsToDefault();
        userScissors.setAttribute('src', 'img/scissors-active.jpg');
        computerPaper.setAttribute('src', 'img/paper-active.jpg');
        userScore++;
        score.textContent = `${userScore} : ${computerScore}`;
    } else {
        score.textContent = `Something went wrong. Refresh and try again!`;
    }

    if (computerScore === finalScore) {
        score.textContent = `Oh no. Try again!`;
        computerScore = 0;
        userScore = 0;
    } else if (userScore === finalScore) {
        score.textContent = `You win!`;
        computerScore = 0;
        userScore = 0;
    }
}


const finalScore = 5;

let computerScore = 0;
let userScore = 0;



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