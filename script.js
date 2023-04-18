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


