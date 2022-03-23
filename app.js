// Selecting the spans
const computerChoice = document.querySelector('#computer-choice');

const userChoice = document.querySelector('#user-choice');

const resultDisplay = document.querySelector('#result');

// Get the user choice
const possibleChoices = document.querySelectorAll('button');

// Display the user choice
possibleChoices.forEach(choice => choice.addEventListener('click', (event) => {
    let choosenChoice = event.target.id;
    userChoice.innerHTML = choosenChoice;
    // The computer choice enters here
    generateComputerChoice();
    // Display the result
    getResult();
}))

// Generate Computer Choice function
const keys = ['rock', 'paper', 'scissors'];
const generateComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * 3);
    let result = keys[randomIndex];
    computerChoice.innerHTML = result;
}

// Generate the result
const getResult = () => {
    let result;
    // Draw Scenario
    if (computerChoice.innerHTML == userChoice.innerHTML) {
        result = `It's a draw!`;
    }

    // Computer Wins Scenario
    if (computerChoice.innerHTML == 'rock' && userChoice.innerHTML == 'scissors') {
        result = `The computer wins!`
    }
    if (computerChoice.innerHTML == 'paper' && userChoice.innerHTML == 'rock') {
        result = `The computer wins!`
    }
    if (computerChoice.innerHTML == 'scissors' && userChoice.innerHTML == 'paper') {
        result = `The computer wins!`
    }

    // User Wins Scenario
    if (computerChoice.innerHTML == 'rock' && userChoice.innerHTML == 'paper') {
        result = `You win!`
    }
    if (computerChoice.innerHTML == 'scissors' && userChoice.innerHTML == 'rock') {
        result = `You win!`
    }
    if (computerChoice.innerHTML == 'paper' && userChoice.innerHTML == 'scissors') {
        result = `You win!`
    }

    // Displaying the result
    resultDisplay.innerHTML = result;
}