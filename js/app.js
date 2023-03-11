/*----- constants -----*/

const faces = {
    happy: '\( ͡> ω ͡<)/', //0-49
    sad: '  \( ͡> ﹏ ͡<)/', //50-79
    angry: '\( ͡> ෴ ͡<)/', //80-100
}

/*----- state variables -----*/



/*----- cached elements  -----*/

//cache for all button elements
const btns = document.querySelectorAll('button')

//cache for all progress bars
const bar = document.querySelectorAll('#bar')

//cache for each individual button
const playBtn = document.querySelector('#playBtn')
const eatBtn = document.querySelector('#eatBtn')
const cleanBtn = document.querySelector('#cleanBtn')

//cache for Play! , Eat! , Clean! on screen
const playText = document.querySelector('.playH3').innerHTML = 'Play!'
const eatText = document.querySelector('.eatH3').innerHTML = 'Eat!'
const cleanText = document.querySelector('.cleanH3').innerHTML = 'Clean!'

/*----- event listeners -----*/
//located with each bar function


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
    renderCleanBar()
    renderPlayBar()
    renderEatBar()


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

    const name = prompt(" Welcome to Tamagotchi Sitter. Today you'll be taking care of ")
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

//global scopes incrementing and decrementing
let playBarWidth = 0
let eatBarWidth = 0
let cleanBarWidth = 0

// ( MVP )---function to increment the play bar using the play button
function renderPlayBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center
    // playBtn.addEventListener('click', renderPlayBtn)

    let playBar = document.getElementById("playBar")
    let barStart = setInterval(frame, 100);
    function frame() {
        if (playBarWidth >= 100) {
            clearInterval(barStart)
            if (confirm("[name] passed away :(") == true) {
                init()
            } else {
                init()
            }
        } else {
            playBarWidth++;
            playBar.style.width = playBarWidth + '%';
            playBar.innerHTML = playBarWidth * 1 + '%';
        }
    }
}

// (MVP )---function to decrement the play bar using the play button
playBtn.addEventListener('click', function () {
    playBarWidth -= 5;
    playBar.style.width = playBarWidth + '%'
    playBar.innerHTML = playBarWidth * 1 + '%'
})

// ( MVP )---function to increment the eat bar
function renderEatBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let eatBar = document.getElementById("eatBar")
    // let eatBarWidth = barWidth
    let barStart = setInterval(frame, 100);
    function frame() {
        if (eatBarWidth >= 100) {
            if (confirm("[name] passed away :(") == true) {
                init()
            } else {
                init()
            }
        } else {
            eatBarWidth++;
            eatBar.style.width = eatBarWidth + '%';
            eatBar.innerHTML = eatBarWidth * 1 + '%';

        }
    }

}

// ( MVP )---function to decrement the eat bar using the eat button
eatBtn.addEventListener('click', function () {
    let eatBar = document.getElementById("eatBar")
    // let eatBarWidth = barWidth
    eatBarWidth -= 5;
    eatBar.style.width = eatBarWidth + '%'
    eatBar.innerHTML = eatBarWidth * 1 + '%'
})

// ( MVP )---function to increment the clean bar
function renderCleanBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let cleanBar = document.getElementById("cleanBar")
    let barStart = setInterval(frame, 100);
    function frame() {
        if (cleanBarWidth >= 100) {
            if (confirm("[name] passed away :(") == true) {
                init()
            } else {
                init()
            }
        } else {
            cleanBarWidth++;
            cleanBar.style.width = cleanBarWidth + '%';
            cleanBar.innerHTML = cleanBarWidth * 1 + '%';

        }
    }


}

// ( MVP )---function to decrement the bar using the clean button
cleanBtn.addEventListener('click', function () {
    cleanBarWidth -= 5;
    cleanBar.style.width = cleanBarWidth + '%'
    cleanBar.innerHTML = cleanBarWidth * 1 + '%'
})


init()
