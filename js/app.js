/*----- constants -----*/
const faces = {
    happy: '\( ͡> ω ͡<)/', //0-49
    sad: '  \( ͡> ﹏ ͡<)/', //50-79
    angry: '\( ͡> ෴ ͡<)/', //80-100
}




/*----- state variables -----*/

// play, eat and clean btn variables 
//initialized function is different than Event Listener function

//btnClick()

/*----- cached elements  -----*/

//variable for all button elements
const btns = document.querySelectorAll('button')

//variable for all progress bars
const bar = document.querySelectorAll('#bar')

//variables for each individual buttons
const playBtn = document.querySelector('#playBtn')
const eatBtn = document.querySelector('#eatBtn')
const cleanBtn = document.querySelector('#cleanBtn')


//variables for DOM
const playText = document.querySelector('.playH3').innerHTML = 'Play!'
const eatText = document.querySelector('.eatH3').innerHTML = 'Eat!'
const cleanText = document.querySelector('.cleanH3').innerHTML = 'Clean!'

/*----- event listeners -----*/
//event listener for all buttons to decrement time of each respective bar



/*----- functions -----*/
function init() {
    console.log('init works')

    const tamaFace = document.querySelector('.image')
    tamaFace.innerText = faces['happy']



    render()
}

// ( MVP )
function render() {

    //folder for all renders

    //renderFace()
    //renderName()   //-----works but is annoying in development while making    changes 
    renderAge()
    //renderPlayBtn()
    //  renderEatbtn()
    //  renderCleanBtn()
    renderCleanBar()
    //renderPlayBar()  //-------this works...yaye
    // renderEatBar()


}

// ( MVP )
function renderFace() {

    //healthy happy face

    function startFace() {
        const tamaFace = document.querySelector('.image')
        tamaFace.innerText = faces['happy']

        // const tamaFace = document.querySelector('.image')
        // tamaFace.innerText = faces['angry']
    }
    render()

}

//( MVP ) 
function renderName() {
    //prompt input box to name tamagotchi
    const name = prompt(" Welcome to Tamagotchi Survivor. Please name your 'Tama' ")
    if (name != null) {
        document.getElementById('name').innerHTML = "Name: " + name
    } else {
        alert(" Have a nice day! ")

    }


}

// ( NOT MVP ) 
function renderAge() {
    //timer to record how long tamagotchi is alive

}

// ( MVP )
function renderPlayBtn() {
    //when clicked, will decrease the playBar 5%
    //playBarBtn is a string
    //pBBtn is a string
    // console.log(typeof pBBtn) typeof playBarBtn === 'number' && 
    let playBarBtn = document.querySelector('#playBar').getAttribute('style')
    const playBtn = document.querySelector('#playBtn')

    // let pBBtn = document.querySelector('#playBar').innerHTML
    // if (pBBtn < 100) {
    //      pBBtn = pBBtn - 5 + '%'
    //      pBBtn--
    //      pBBtn.style.width = playBarWidth + '%';
    //      playBar.innerHTML = playBarWidth % 1 + '%';
    // }

}







// ( MVP )
function renderEatbtn() {
    //button should cause bar to minus 5%, then continue counting to 100%

    //the attempt
    function btnClick(evt) {
        const eatBar = document.getElementById('eatBar')
        let eatBarWidth = eatBar.style.width
        //console.log(eatBarWidth)
        let barStart = setInterval(frame, 400);
        function frame() {
            if (eatBarWidth < 100) {
                eatBarWidth--;
                eatBar.style.width = eatBarWidth + '%';
                eatBar.innerHTML = eatBarWidth * 1 + '%';
                clearInterval(barStart)
            } else {
                return
            }
        }
    }


}

// ( MVP )
function renderCleanBtn() {
    //button should cause bar to minus 5%, then continue counting to 100%

} //not complete

// ( MVP )


let barWidth = 0;
let barStart

function renderPlayBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center
    // playBtn.addEventListener('click', renderPlayBtn)

    let playBar = document.getElementById("playBar")
    let barStart = setInterval(frame, 200);
    function frame() {
        if (barWidth >= 100) {
            barWidth = playBar
            clearInterval(barStart)
            playBtn.removeEventListener('click', function () {
                barWidth -= 5;
                playBar.style.width = barWidth + '%'
                playBar.innerHTML = barWidth * 1 + '%'
                confirm("Your 'Tama' passed away :(")
            })
        } else {
            barWidth++;
            playBar.style.width = barWidth + '%';
            playBar.innerHTML = barWidth * 1 + '%';

        }
    }


}

playBtn.addEventListener('click', function () {
    barWidth -= 5;
    playBar.style.width = barWidth + '%'
    playBar.innerHTML = barWidth * 1 + '%'
})

// ( MVP )
function renderEatBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let eatBar = document.getElementById("eatBar")
    let barStart = setInterval(frame, 200);
    function frame() {
        if (playBarWidth >= 100) {
            playBarWidth = playBar
            clearInterval(barStart)
            confirm("Your 'Tama' passed away :(")
        } else {
            playBarWidth++;
            playBar.style.width = playBarWidth + '%';
            playBar.innerHTML = playBarWidth * 1 + '%';
            // clearInterval(barStart)
        }
    }
    console.log(playBar.innerText)
    if (playBarWidth == playBar.innerText) {
    }

}

eatBtn.addEventListener('click', function () {
    barWidth -= 5;
    playBar.style.width = barWidth + '%'
    playBar.innerHTML = barWidth * 1 + '%'
})

// ( MVP )
function renderCleanBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let cleanBar = document.getElementById("cleanBar")
    let barStart = setInterval(frame, 200);
    function frame() {
        if (barWidth >= 100) {
            barWidth = cleanBar
            clearInterval(barStart)
           
                
            confirm("Your 'Tama' passed away :(")
        } else {
            barWidth++;
            cleanBar.style.width = barWidth + '%';
            cleanBar.innerHTML = barWidth * 1 + '%';

        }
    }


}

cleanBtn.addEventListener('click', function () {
    barWidth -= 5;
    cleanBar.style.width = barWidth + '%'
    cleanBar.innerHTML = barWidth * 1 + '%'
})


init()
