/*----- constants -----*/
const faces = {
    happy: '\( ͡> ω ͡<)/', //0-49
    sad: '  \( ͡> ﹏ ͡<)/', //50-79
    angry: '\( ͡> ෴ ͡<)/', //80-100
}

/*----- state variables -----*/

// play, eat and clean btn variables 
//initialized function is different than Event Listener function

//handleClick()

/*----- cached elements  -----*/

const btns = document.querySelectorAll('button')
const playBtn = document.querySelector('.playBtn')
const yummyBtn = document.querySelector('.yummyBtn')
const pottyBtn = document.querySelector('.pottyBtn')

const name = document.querySelector('#name').innerHTML = 'Name: '

const playLabel = document.querySelector('.playH3').innerHTML = 'Play!'

const yummyLabel = document.querySelector('.yummyH3').innerHTML = 'Yum!'

const pottyLabel = document.querySelector('.pottyH3').innerHTML = 'Potty!'

/*----- event listeners -----*/
// need event listeners for each button to add time to each respective bar
btns.forEach(function(btn) {
    btn.addEventListener('click', handleClick)
})
// playBtn.addEventListener('click', handleClick)
// yummyBtn.addEventListener('click', handleClick)
// pottyBtn.addEventListener('click', handleClick)



/*----- functions -----*/
function init() {
    console.log('init works')

    
    startFace()
    potty()
    play()
    yum()
    render()
}

function render() {
    console.log('render works')
}

function handleClick(evt) {
    const btnClick = evt.target
    //need logic to delay move() when btnClick
    

    }

function startFace() {
    const tamaFace = document.querySelector('.image')
    tamaFace.innerText = faces['happy']
}


//bar function for potty
function potty() {
    let pottyBar = document.getElementById("pottyBar");
    let pottyBarWidth = 0;
    let barStart = setInterval(frame, 200);
    function frame() {
        if (pottyBarWidth >= 100) {
            clearInterval(barStart)
        } else {
            pottyBarWidth++;
            pottyBar.style.width = pottyBarWidth + '%';
            pottyBar.innerHTML = pottyBarWidth * 1 + '%';

        }
    } 
}

//bar function for play
function play() {
        let playBar = document.getElementById("playBar");
        let playBarWidth = 0;
        let barStart = setInterval(frame, 200);
        function frame() {
            if (playBarWidth >= 100) {
                clearInterval(barStart)
            } else {
                playBarWidth++;
                playBar.style.width = playBarWidth + '%';
                playBar.innerHTML = playBarWidth * 1 + '%';
    
            }
        }
    }


//bar function for yum
function yum() {
        let yumBar = document.getElementById("eatBar");
        let yumBarWidth = 0;
        let barStart = setInterval(frame, 200);
        function frame() {
            if (yumBarWidth >= 100) {
                clearInterval(barStart)
            } else {
                yumBarWidth++;
                yumBar.style.width = yumBarWidth + '%';
                yumBar.innerHTML = yumBarWidth * 1 + '%';
    
            }
        }
    }


init()