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
const playBtn = document.querySelector('.playBtn')
const eatBtn = document.querySelector('.eatBtn')
const cleanBtn = document.querySelector('.cleanBtn')


//variables for DOM
const name = document.querySelector('#name').innerHTML = 'Name:'
const playText = document.querySelector('.playH3').innerHTML = 'Play!'
const eatText = document.querySelector('.eatH3').innerHTML = 'Eat!'
const cleanText = document.querySelector('.cleanH3').innerHTML = 'Clean!'

const cleanBar = document.getElementById('cleanBar')



/*----- event listeners -----*/
//event listener for all buttons to add time to eachs respective bar

//playBtn.addEventListener('click', renderPlayBtn)

// eatBtn.addEventListener('click', handleClick)

// cBtn.addEventListener('click', handleClick)



/*----- functions -----*/
function init() {
    console.log('init works')

    render()
}

// ( MVP )
function render() {

    //folder for all renders

    renderFace()
    renderName()   //-----works but is annoying in development while making    changes 
    renderAge()
    //  renderPlayBtn()
    //  renderEatbtn()
    //  renderCleanBtn()
    // renderCleanBar()
    renderPlayBar()
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

}

//( MVP ) 
function renderName() {
    //prompt input box to name tamagotchi
    const name = prompt(" Welcome to Tamagotchi Survivor. Please name your 'Tama' ")
    if (name != null) {
        document.getElementById('name').innerHTML = "Name: " + name
    }


}

// ( NOT MVP ) 
function renderAge() {
    //timer to record how long tamagotchi is alive(NOT MVP)

}

// ( MVP )
function renderPlayBtn() {
    //when clicked, will decrease the playBar 5%(MVP)
    function barDecrement() {
        let playBarWidth = document.getElementById('playBar')


}
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
function renderPlayBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let playBar = document.getElementById("playBar");
    let playBarWidth = 0;
    let barStart = setInterval(frame, 200);
    function frame() {
        if (playBarWidth >= 100) {
            clearInterval(barStart)
            let tomb = document.getElementById('name').value
            if (confirm(tomb + " has passed!") == true ) {
            } else {
                confirm("Your tama has passed!")
                render()
            }
        } if else {
            playBarWidth++;
            playBar.style.width = playBarWidth + '%';
            playBar.innerHTML = playBarWidth * 1 + '%';
            
        }
    }
    
    
}

// ( MVP )
function renderEatBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let eatBar = document.getElementById("eatBar");
    let eatBarWidth = 0;
    let barStart = setInterval(frame, 200);
    function frame() {
        if (eatBarWidth >= 100) {
            clearInterval(barStart)
            let tomb = document.getElementById('name').value
            if (confirm(tomb + " has passed!") == true ) {
                render()
            }
        } else {
            eatBarWidth++;
            eatBar.style.width = eatBarWidth + '%';
            eatBar.innerHTML = eatBarWidth * 1 + '%';

        }
    }
}


// ( MVP )
function renderCleanBar() {

    //bar starts from 0% and increment to 100% when browser loads
    //formula from W3 schools webpage: progress bar center

    let cleanBar = document.getElementById("cleanBar");
    let cleanBarWidth = 0;
    let barStart = setInterval(frame, 200);
    function frame() {
        if (cleanBarWidth >= 100) {
            clearInterval(barStart)
            let tomb = document.getElementById('name').value
            if (confirm(tomb + " has passed!") == true ) {
                render()
            }
        } else {
            cleanBarWidth++;
            cleanBar.style.width = cleanBarWidth + '%';
            cleanBar.innerHTML = cleanBarWidth * 1 + '%';
            

        }
    }


}

init()
