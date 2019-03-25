let player = 0;
let array = [];
// let player2 = 'X';





function play(el) {
    let player = document.getElementById('player');
    let element = document.getElementById(el);
    
    if(player.innerText === 'X') {
        player.innerText = 'O'
        element.innerText = 'X'
        array[el] = 'X'
    }else if(player.innerText === 'O'){
        player.innerText = 'X'
        element.innerText = 'O'
        array[el] = 'O'
        // alert('Cat is the Winner');
    }

    let box1 = array[0]
    let box2 = array[1]
    let box3 = array[2]
    let box4 = array[3]
    let box5 = array[4]
    let box6 = array[5]
    let box7 = array[6]
    let box8 = array[7]
    let box9 = array[8]

    if (box1 !== undefined && box1 === box2 && box1 === box3) {
        window.alert(`${box1} is the winner`);
        return
      } else if (box4 !== undefined && box4 === box5 && box4 === box6) {
        window.alert(`${box4} is the winner`);
        return
      } else if (box7 !== undefined && box7 === box8 && box7 === box9) {
        window.alert(`${box7} is the winner`);
        return
      } else if (box1 !== undefined && box1 === box4 && box1 === box7) {
        window.alert(`${box1} is the winner`);
        return
      } else if (box2 !== undefined && box2 === box5 && box2 === box9) {
        window.alert(`${box2} is the winner`);
        return
      } else if (box3 !== undefined && box3 === box6 && box3 === box9) {
        window.alert(`${box3} is the winner`);
        return
      } else if (box1 !== undefined && box1 === box5 && box1 === box9) {
        window.alert(`${box1} is the winner`);
        return
      } else if (box7 !== undefined && box7 === box5 && box7 === box3) {
        window.alert(`${box7} is the winner`);
        return
      }
      
      let boardFull = true
  for(let i = 0; i <= 8; i++){
    if(array[i] === undefined){
        boardFull = false
    }
  }
  if(boardFull === true){
    window.alert("Cat's game, there is no winner")
  }

};


function reset() {
  arr=[];
  for(let i = 0; i <= 8; i++) {
  document.getElementById(i).innerText = '';
  }
}




console.log(array);




