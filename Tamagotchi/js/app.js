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

  /*----- event listeners -----*/
// need event listeners for each button to add time to each respective bar
playBtn.addEventListener('click', handleClick)
yummyBtn.addEventListener('click', handleClick)
pottyBtn.addEventListener('click', handleClick)

  

/*----- functions -----*/
function init() {
    move()
}

function render() {
console.log('render works')
}
  
function handleClick(evt) {
    const btnClick = evt.target
    //need logic to delay move() when btnClick
}

//dynamic bar
  function move() {
    var elem = document.getElementById("pottyBar");   
    var width = 0;
    var id = setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
          width++; 
        //   elem.style.width = width + '%'; 
        //   elem.innerHTML = width * 1  + '%';
        } 
        return render()
    }
    
  }

  init()