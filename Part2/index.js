
let element = document.getElementById('assignId');
let element2 = document.getElementById('style');
let button = document.getElementById('restbtn');


function setCard() {
  let element3 = document.getElementById(element.value);
  element3.style.color = element2.value;
}


function reset() {

    for(let i = 0; i < button.length; i++) {
      document.getElementById(i).innerText = '';
    }
    
}

