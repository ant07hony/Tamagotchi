/*----- constants -----*/

const faces = {
    happy: '\( ͡> ω ͡<)/', //0-49%
    sad: '  \( ͡> ﹏ ͡<)/', //50-79%
    angry: '\( ͡> ෴ ͡<)/', //80-100%
}

const name = prompt(" Welcome to 'Gotchi Sitter! Care for your little tama and keep them happy or else they'll run away. Please name your new bundle of joy! ")

/*----- state variables -----*/
//global scopes incrementing and decrementing
let playBarWidth = 0
let eatBarWidth = 0
let cleanBarWidth = 0



/*----- cached elements  -----*/

let btns = document.querySelectorAll('button')

//cache for each individual button
let playBtn = document.querySelector('#playBtn')
let eatBtn = document.querySelector('#eatBtn')
let cleanBtn = document.querySelector('#cleanBtn')

//cache for Play! , Eat! , Clean! on screen
let playText = document.querySelector('.playH3').innerHTML = 'Play!'
let eatText = document.querySelector('.eatH3').innerHTML = 'Eat!'
let cleanText = document.querySelector('.cleanH3').innerHTML = 'Clean!'

/*----- event listeners -----*/
//located line: 158 - 181


/*----- functions -----*/

function init() {

    const tamaFace = document.querySelector('.image')
    tamaFace.innerText = faces['happy']

    

    render()
}

// ( MVP ) render folder for everything functioning
function render() {

    renderFace()
    renderName()
    renderAge()
    renderGameOverMessage()
    renderProgressBar()

}

// ( STRETCH )
function renderFace() {

    //have faces alternate based on bars progress

    // const tamaFace = document.querySelector('.image')
    // tamaFace.innerText = faces['happy']

    // const tamaFace = document.querySelector('.image')
    // tamaFace.innerText = faces['angry']

    // const tamaFace = document.querySelector('.image')
    // tamaFace.innerText = faces['sad']


}

// ( MVP )---ability to name Tamagotchi....or not
function renderName() {

    //prompt input box to name tamagotchi

    if (name != null) {
        document.getElementById('name').innerHTML = "Name: " + name
    } else {
        document.getElementById('name').innerHTML = "Name: "
    }
    
}


// ( STRETCH )---timer based function to display some age
function renderAge() {
    //timer to record how long tamagotchi is alive

}



// ---game logic for game over message
function renderGameOverMessage() {
    if ((playBarWidth >= 100 || eatBarWidth >= 100 || cleanBarWidth >= 100) == true ) {

        return confirm(" Oh no! " + name + " ran away ")
    }
}

// ( MVP )---game logic for progress bar functionality
function renderProgressBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center
    

    let playBar = document.getElementById("playBar")
    let eatBar = document.getElementById("eatBar")
    let cleanBar = document.getElementById("cleanBar")

    let barStart = setInterval(frame, 100)

    function frame() {
        if (playBarWidth >= 100) {
            clearInterval(barStart)
            renderGameOverMessage()
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
            renderGameOverMessage()
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
            renderGameOverMessage()
            playBtn.removeEventListener('click', playBarDecrement)
            eatBtn.removeEventListener('click', eatBarDecrement)
            cleanBtn.removeEventListener('click', cleanBarDecrement)
        } else {
            eatBarWidth++;
            eatBar.style.width = eatBarWidth + '%';
            eatBar.innerHTML = eatBarWidth * 1 + '%';
        }
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
