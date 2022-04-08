const maxSize = 4;
document.addEventListener('DOMContentLoaded', run);

function run() {
    document.addEventListener('keydown', keyPressed);
   document.getElementById(pickEmptyTileId()).innerText = generateNumber();
   document.getElementById(pickEmptyTileId()).innerText = generateNumber();
}

function keyPressed(e) {
    console.log(e);
    if (e.key === 'ArrowLeft') {
        keyLeft();
    } else if (e.key === 'ArrowRight') {
        keyRight();
    } else if (e.key === 'ArrowUp') {
        keyUp();
    } else if (e.key === 'ArrowDown') {
        keyDown();
    }
}
// swipe down

function keyDown() {
    console.log("down"); let sum = 0;
    for (let i = 0; i < maxSize; i++) {
        let val = parseInt(document.getElementById(id(i,0)).innerText);
        if (val) {
            sum = sum + val
        }
        console.log(document.getElementById(id(i,0)).innerText)
    }

    console.log(sum);
}

//swipe up
function keyUp() {
    console.log("up");
    let sum = 0;
    for (let i = 0; i < maxSize; i++) {
        let val = parseInt(document.getElementById(id(i,1)).innerText);
        if (val) {
            sum = sum + val
        }
        console.log(document.getElementById(id(i,1)).innerText)
    }
    console.log(sum);
}

function keyRight() {
    console.log("right");
    for (let i = 0; i < maxSize; i++) {
        let sum = 0;
        for (let j = 0; j < maxSize; j++) {
            let val = parseInt(document.getElementById(id(i,j)).innerText);
            if (val) {
                sum = sum + val
            }
            console.log(document.getElementById(id(i,j)).innerText)
        }
        console.log(sum);
    }
}

function keyLeft() {
    console.log("left");
    let sum = 0;
    for (let i = 0; i < maxSize; i++) {
        let val = parseInt(document.getElementById(id(i,i)).innerText);
        if (val) {
            sum = sum + val
        }
    }
    console.log(sum);
}

function id(num1, num2) {
    return 't' + num1 + '.' + num2;
}
// created a function that randomly picks numbers 2 or 4
function generateNumber() {
  let two_or_four = Math.floor(Math.random()*2);
  if (two_or_four === 0) {
      return 2;
  } else {
      return 4;
  }
} 
// created function that picks random empty tile and returns its id
function pickEmptyTileId() {
    let tiles = returnEmptyTileIds();
    let x = Math.floor(Math.random() * tiles.length); // x here is randomly picked index of array tiles
    return tiles[x];
}

// function that returns all empty tile ids 
function returnEmptyTileIds() {
    let tiles = [];
    for (let i = 0; i < maxSize; i++) {
        for (let y = 0; y < maxSize; y++) {
            if (document.getElementById(id(i, y)).innerText.length === 0) {
                tiles.push(id(i,y));
            }
        }
    }
    return tiles;
}
/*

    document.getElementById(pickEmptyTileId()).innerText = generateNumber();
    document.getElementById(pickEmptyTileId()).innerText = generateNumber();
    */