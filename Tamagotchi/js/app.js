  /*----- constants -----*/
const faces = {
    happy: '\( ͡> ω ͡<)/',
    sad: '  \( ͡> ﹏ ͡<)/',
    angry: '\( ͡> ෴ ͡<)/',
}

/*----- state variables -----*/

// play, eat and clean btn variables 
//initialized function is different than Event Listener function

//handleClick()

  /*----- cached elements  -----*/

  const playBtn = document.querySelector('.playBtn')
  const yummyBtn = document.querySelector('.yummyBtn')
  const pottyBtn = document.querySelector('.pottyBtn')
  
  const name = document.querySelector('#name').innerHTML = 'Name: '

  const playLabel = document.querySelector('.playH3').innerHTML = 'Play!'

  const yummyLabel = document.querySelector('.yummyH3').innerHTML = 'Yum!'

  const pottyLabel = document.querySelector('.pottyH3').innerHTML = 'Potty!'

  /*----- event listeners -----*/
// need event listeners for each button to add time to each respective bar

// playBtn.addEventListener('click', handleClick)
// yummyBtn.addEventListener('click', handleClick)
// pottyBtn.addEventListener('click', handleClick)

  

/*----- functions -----*/
function init() {
    console.log('init works')
    
    //move()
    render()
}

function render() {
console.log('render works')
}
  
function handleClick(evt) {
    const btnClick = evt.target
    //need logic to delay move() when btnClick
    if( init()) {


    }
}

//dynamic bar
  function move() {
    let pottyBar = document.getElementById("pottyBar");   
    let barStart = setTimeout(interval, 100)
    
    function interval() {
    let pottyBarWidth = 0;
    let barStart = setInterval(frame, 200);
    function frame() {
      if (pottyBarWidth >= 100 ) {
        // clearTimeout(barStart)
        clearInterval(barStart)
      } else {
          pottyBarWidth++; 
          pottyBar.style.width = pottyBarWidth + '%'; 
          pottyBar.innerHTML = pottyBarWidth * 1  + '%';
        } 
        }
    }
    clearTimeout(barStart)
}

  init()