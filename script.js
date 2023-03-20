 document.addEventListener("DOMContentLoaded", () => {

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
    }
]

let cardsPicked = []
let cardsPickedId = []
let matchesFound = []

const cards = document.querySelector('#game-container')
const startButton = document.querySelector('#start-button')
const resetButton = document.querySelector('#reset-button')
let winMessage = document.querySelector('.win-message')

const attempts = document.querySelector('.attempts')
const cardsFound = document.querySelector('.cards-found')
let attemptNumber = 0
let cardsFoundNumber = 0

// create the game board
// attachign each card to a link from image array

function createGameBoard() {
    for (let i = 0; i < images.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank-card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        cards.appendChild(card)
}
}

// flip card

function flipCard() {
    const cardId = this.getAttribute('data-id')
    if (cardsPicked.length < 2) {
        cardsPicked.push(images[cardId].name)
        cardsPickedId.push(cardId)
        console.log(cardsPickedId)
        this.setAttribute('src', images[cardId].img)
    }
    if (cardsPicked.length === 2) {
        setTimeout(determineMatch, 700)
    }

    logAttempts()
}

// randomize cards w/ Fisher Yates

const shuffle = (array) => {
    for (let i = images.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        array.push(array[randomIndex])
        array.splice(randomIndex, 1)
    }
    return array
}

// alert of win

function alertWin() {
    if (cardsFoundNumber === 8) {
        winMessage.innerText = `congrats! you did it! turns out your memory is pretty dang good!`
        winMessage.style.backgroundColor = "rgb(255, 170, 183)"
        winMessage.style.color = "black"
        winMessage.style.fontWeight = "bold"
        winMessage.style.padding = "10px"
    }
}

// check for matches
function determineMatch() {
    const cards = document.querySelectorAll('img')
    const firstId = cardsPickedId[0]
    const secondId = cardsPickedId[1]

      if (cardsPicked[0] === cardsPicked[1] && firstId !== secondId) {
        // then it's a match
        // putting the matched cards into an
        // empty array
        matchesFoundNumber()
        cards[firstId].removeEventListener('click', flipCard)
        cards[secondId].removeEventListener('click', flipCard)
        matchesFound.push(cardsPicked)
        alertWin()
    } else {
        // turn the card back over if there
        // isn't a match
        cards[firstId].setAttribute('src', 'images/blank-card.png')
        cards[secondId].setAttribute('src', 'images/blank-card.png')
    }
    cardsPicked = []
    cardsPickedId = []
}

shuffle(images)
createGameBoard()

// start game

function startGame() {
    shuffle(images)
}

startButton.addEventListener("click", startGame)

// reset game 

function resetTheGame() {
    // empty the picked cards and matches so the game can reset
    cardsPicked = []
    cardsPickedId = []
    matchesFound = []
    cards.innerText = ' '
    attemptNumber = 0
    attempts.innerText = `${attemptNumber}`
    cardsFoundNumber = 0
    cardsFound.innerText = `${cardsFoundNumber} out of 8`
    winMessage.innerText = ' '
        winMessage.style.removeProperty("background-color")
        winMessage.style.removeProperty("padding")
        winMessage.style.removeProperty("padding")
    shuffle(images)
    createGameBoard()
}

resetButton.addEventListener("click", resetTheGame)

// log the user's attempts 

function logAttempts() {
    if (cardsPicked.length === 2) {
        attemptNumber++
        attempts.innerText = `${attemptNumber}`
    }
}

// matches found

function matchesFoundNumber() {
    cardsFoundNumber++
    cardsFound.innerText = `${cardsFoundNumber} out of 8`
    }
})