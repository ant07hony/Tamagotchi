  /*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

  //dynamic bar
  function move() {
    var elem = document.querySelectorAll(".bar"); 
    console.log(elem)  
    var width = 0;
    var id = setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        return
        // width++; 
        // elem.style.width = width + '%'; 
        // elem.innerHTML = width * 1  + '%';
      }
    }
  }