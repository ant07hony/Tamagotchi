/*----- constants -----*/

const faces = {
    happy: '\( ͡๑ ω ͡๑)/',
}

let name = prompt(" Welcome to 'Gotchi Sitter!\nYour task today is to take care of a precious little Tama.\nTamas grow really fast and are very demanding.\nKeep them entertained, fed and clean or else they'll run away.\nYour job is complete when the Tama reaches age 5.\nGood luck and enjoy!\nGive the Tama a nickname (or not): ")



/*----- state variables -----*/
//global scopes incrementing and decrementing
let playBarWidth = 0
let eatBarWidth = 0
let cleanBarWidth = 0
let counter = 0


/*----- cached elements  -----*/
//cache for faces
const tamaFace = document.querySelector('.image')

//cache for timer (age)
let timerAgeEl = document.querySelector('#age')

//cache for each individual button
let playBtn = document.querySelector('#playBtn')
let eatBtn = document.querySelector('#eatBtn')
let cleanBtn = document.querySelector('#cleanBtn')

//cache for Play! , Eat! , Clean! on screen
let playText = document.querySelector('.playH3').innerHTML = 'P L A Y !'
let eatText = document.querySelector('.eatH3').innerHTML = 'E A T !'
let cleanText = document.querySelector('.cleanH3').innerHTML = 'C L E A N !'

let playBar = document.querySelector('#playBar')
let eatBar = document.querySelector('#eatBar')
let cleanBar = document.querySelector('#cleanBar')


/*----- event listeners -----*/
//located line: 155 - 178


/*----- functions -----*/

function init() {

    document.getElementById('age').innerHTML = 'Age: 0'

    tamaFace.textContent = faces['happy']

    name

    counter = 0

    tamaName()

}

// ( MVP )---ability to name Tamagotchi....or not
function tamaName() {

    if (name != null) {
        document.getElementById('name').innerHTML = "Name: " + name
    } else {
        document.getElementById('name').innerHTML = "Name: "
    }
}

// (MVP)---logic for age timer and win message
let timerAge = setInterval(age, 3000)
function age() {
    if (counter <= 4) {
        counter++
        timerAgeEl.textContent = "Age: " + counter
    } else if (counter == 5) {
        clearInterval(timerAge)
        clearInterval(barStart)
        confirm(" Good job taking care of " + name + '!')
        playBtn.removeEventListener('click', playBarDecrement)
        eatBtn.removeEventListener('click', eatBarDecrement)
        cleanBtn.removeEventListener('click', cleanBarDecrement)
    }

}

// (MVP)---game logic for game over message
function gameOverMessage() {
    if ((playBarWidth >= 100 || eatBarWidth >= 100 || cleanBarWidth >= 100) == true) {
        return confirm(" Oh no! " + name + " ran away! ")

    }

}

//interval for progress bar
const barStart = setInterval(progressBar, 150)

// ( MVP )---game logic for progress bar functionality
function progressBar() {

    //bar starts from 0% and increment to 100% when browser loads
    

    if (playBarWidth >= 100) {
        clearInterval(barStart)
        clearInterval(timerAge)
        gameOverMessage()
        playBtn.removeEventListener('click', playBarDecrement)
        eatBtn.removeEventListener('click', eatBarDecrement)
        cleanBtn.removeEventListener('click', cleanBarDecrement)
    } else {
        playBarWidth++;
        playBar.style.width = playBarWidth + '%';
        playBar.innerHTML = playBarWidth * 1 + '%';
    }

    if (cleanBarWidth >= 100) {
        clearInterval(barStart)
        clearInterval(timerAge)
        gameOverMessage()
        playBtn.removeEventListener('click', playBarDecrement)
        eatBtn.removeEventListener('click', eatBarDecrement)
        cleanBtn.removeEventListener('click', cleanBarDecrement)
    } else {
        cleanBarWidth++;
        cleanBar.style.width = cleanBarWidth + '%';
        cleanBar.innerHTML = cleanBarWidth * 1 + '%';
    }

    if (eatBarWidth >= 100) {
        clearInterval(barStart)
        clearInterval(timerAge)
        gameOverMessage()
        playBtn.removeEventListener('click', playBarDecrement)
        eatBtn.removeEventListener('click', eatBarDecrement)
        cleanBtn.removeEventListener('click', cleanBarDecrement)
    } else {
        eatBarWidth++;
        eatBar.style.width = eatBarWidth + '%';
        eatBar.innerHTML = eatBarWidth * 1 + '%';
    }

    if (cleanBar <= 50) {
        tamaFace.innerHTML = faces['angry']
    }
}

// (MVP )---Event listener for play button to decrement the play bar
playBtn.addEventListener('click', playBarDecrement)
function playBarDecrement() {
    playBarWidth -= 5;
    playBar.style.width = playBarWidth + '%'
    playBar.innerHTML = playBarWidth * 1 + '%'

}

// ( MVP )---Event listener for eat button to decrement the eat bar
eatBtn.addEventListener('click', eatBarDecrement)
function eatBarDecrement() {
    eatBarWidth -= 5;
    eatBar.style.width = eatBarWidth + '%'
    eatBar.innerHTML = eatBarWidth * 1 + '%'
}

// ( MVP )---Event listener for clean button to decrement the clean bar
cleanBtn.addEventListener('click', cleanBarDecrement)
function cleanBarDecrement() {
    cleanBarWidth -= 5;
    cleanBar.style.width = cleanBarWidth + '%'
    cleanBar.innerHTML = cleanBarWidth * 1 + '%'
}


init()
