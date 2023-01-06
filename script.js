 /*----- constants -----*/

document.addEventListener('DOMContentLoaded', () => {

// array to hold cards

const images = [
    {
        name: 'african-drum',
        img: 'images/african-drum-card.png'
    },
    {
        name: 'african-drum',
        img: 'images/african-drum-card.png'
    },
    {
        name: 'cd-card',
        img: 'images/cd-card.png'
    },
    {
        name: 'cd-card',
        img: 'images/cd-card.png'
    },
    {
        name: 'drum-card',
        img: 'images/drum-card.png'
    },
    {
        name: 'drum-card',
        img: 'images/drum-card.png'
    },
    {
        name: 'guitar-card',
        img: 'images/guitar-card.png'
    },
    {
        name: 'guitar-card',
        img: 'images/guitar-card.png'
    },
    {
        name: 'mic-card',
        img: 'images/mic-card.png'
    },
    {
        name: 'mic-card',
        img: 'images/mic-card.png'
    },
    {
        name: 'music-note-card',
        img: 'images/music-note-card.png'
    },
    {
        name: 'music-note-card',
        img: 'images/music-note-card.png'
    },
    {
        name: 'quarter-note-card',
        img: 'images/quarter-note-card.png'
    },
    {
        name: 'quarter-note-card',
        img: 'images/quarter-note-card.png'
    },
    {
        name: 'treble-clef-card',
        img: 'images/treble-clef-card.png'
    },
    {
        name: 'treble-clef-card',
        img: 'images/treble-clef-card.png'
    },
]

const cardsPicked = []
const matchesFound = []
const cardsPickedId = []

const cards = document.querySelector('#game-container')
const startButton = document.querySelectorAll('#start-button')
const stopButton = document.querySelectorAll('#stop-button')
const resetButton = document.querySelectorAll('#reset-button')
const alertOfWin = document.querySelector('#alert-of-win')

/*----- event handlers -----*/ 


/*----- functions -----*/ 

// creating the game board

function createGameBoard() {
    for (let i = 0; i < images.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank-card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        cards.appendChild(card)
}

// randomize cards using Fisher Yates

for (let i = images.length - 1; i >= 0; i--))

// check for matches

function matchOrNot() {
    const cards = document.querySelectorAll('img')
    const firstId = cardsPickedId[0]
    const secondId = cardsPickedId[1]

      if (cardsPicked[0] === cardsChosen[1]) {
        console.log('Its a match!')
        // putting the matched cards into an
        // empty array
        cards[firstId].removeEventListener('click', flipCard)
        cards[secondId].removeEventListener('click', flipCard)
        matchesFound.push(cardsPicked)
    } else {
        // turn the card back over if there
        // isn't a match
        cards[firstId].setAttribute('src', 'images/blank-card.png')
        cards[secondId].setAttribute('src', 'images/blank-card.png')
        console.log("Sorry, try again")
    }
    cardsPicked = []
    cardsPickedId = []
}

// flip card

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsPicked.push(images[cardId].name)
    cardsPickedId.push(cardId)
    this.setAttribute('src', images[cardId].img)
    if (cardsPicked.length === 2) {
        setTimeout(matchOrNot, 450)
    }
}

createGameBoard()

// start game

function startGameAlert() {
    alert('Your game has begun. Click a card to start!')
}

// also add the shuffle function into startGame
function shuffleCards() {

}

// on clicking the start button
let startGame = () => startButton.onclick = startGameAlert

// write a function to return the cards to their original places when you stop
function stopTheGame() {
    // if any cards are flipped over, alert asking do you want to stop, then return cards to their front facing position
    // if no cards are flipped over do nothing
}

let stopButtonClicked = () => stopButton.onclick = stopTheGame

// function that resets the cards

function resetTheGame() {
    // return all cards to front-facing position
}

let resetButtonClicked = () => resetButton.onclick = resetTheGame

// function to randomize card positions


// function to keep pairs facing forward
function keepPairsFlipped() {
    // if // two of the same images are chosen, keep facing forwards

    // else, return to .back-face positions
}

// once all pairs are found

function notifyWin() {
    if (click === true) {
        alert("Looks like your memory is pretty darn good! To play again, click start!")
    } else {
        return
    }
}
}