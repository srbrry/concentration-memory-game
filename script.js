const cards = document.querySelectorAll('.card')
const startButton = document.querySelectorAll('.start-button')
const stopButton = document.querySelectorAll('.stop-button')
const resetButton = document.querySelectorAll('.reset-button')

function flip() {
    this.classList.toggle('flip');
}

cards.forEach(click => cards.onclick = flip);


function startGameAlert() {
    alert('Your game has begun. Click a card to start!')
}

// on clicking the start button
let startGame = () => startButton.onclick = startGameAlert

console.log(startGame)

// write a function to return the cards to their original places when you stop
function stopTheGame() {
    // if any cards are flipped over, alert asking do you want to stop, then return cards to their front facing position
    // if no cards are flipped over do nothing
}

let stopButtonClicked = () => cards.onclick = stopTheGame

// function that resets the cards

function resetTheGame() {
    // return all cards to front-facing position
}