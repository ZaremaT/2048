const maxSize = 4;
document.addEventListener('DOMContentLoaded', run);

function run() {
    document.addEventListener('keydown', keyPressed);
    addRandomNumber();
    addRandomNumber();
}

function addRandomNumber() {
    const id = pickEmptyTileId();
    if (id) {
        document.getElementById(pickEmptyTileId()).innerText = generateNumber();
    } else {
        alert("No more empty tiles left, but still some moves!");
    }
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
  
    for (let j = 0; j < maxSize; j++) {
        let prev;
        let prev_idx = maxSize - 1;
        for (let i = maxSize-1 ; i >= 0; i--) {
            let elem = document.getElementById(id(i, j));
            let val = parseInt(elem.innerText); 
            if (val) {
                elem.innerText = '';  
                if (prev) {
                    if (prev === val) {
                        document.getElementById(id(prev_idx, j)).innerText = val + prev;
                        prev = null;
                        prev_idx++;
                    } else {
                        prev = val;
                        prev_idx++;
                        document.getElementById(id(prev_idx, j)).innerText = val;
                    }
                } else {
                    document.getElementById(id(prev_idx, j)).innerText = val; 
                    prev = val;
                    prev_idx = i;
                }
            }
        }
    }
    addRandomNumber();
}

//swipe up
function keyUp() {
    for (let j = 0; j < maxSize; j++) {
        let prev;
        let prev_idx = 0;
        for (let i = 0; i < maxSize ; i++) {
            let elem = document.getElementById(id(i, j));
            let val = parseInt(elem.innerText); 
            if (val) {
                elem.innerText = ''; 
                if (prev) {
                    if (prev === val) {
                        document.getElementById(id(prev_idx, j)).innerText = val + prev;
                        prev = null;
                        prev_idx++;
                    } else {
                        prev = val;
                        prev_idx++;
                        document.getElementById(id(prev_idx, j)).innerText = val;
                    }
                } else {
                    document.getElementById(id(prev_idx, j)).innerText = val; //prev_idx = last right tile
                    prev = val;
                    prev_idx = i;
                }
            }
        }
    }
    addRandomNumber();
}


function keyRight() {
    for (let i = 0; i < maxSize; i++) {
        let prev;
        let prev_idx = maxSize - 1;
        for (let j = maxSize - 1; j >= 0; j--) {
            let elem = document.getElementById(id(i, j));
            let val = parseInt(elem.innerText); //parsInt make text into number
            if (val) {
                elem.innerText = ''; //if val has value then clear the tile text 
                if (prev) {
                    if (prev === val) {
                        document.getElementById(id(i, prev_idx)).innerText = val + prev;
                        prev = null;
                        prev_idx--;
                    } else {
                        prev = val;
                        prev_idx--;
                        document.getElementById(id(i, prev_idx)).innerText = val;
                    }
                } else {
                    document.getElementById(id(i, prev_idx)).innerText = val; //prev_idx = last right tile
                    prev = val;
                    prev_idx = j;
                }
            }
        }
    }
    addRandomNumber();
}

function keyLeft() {
    for (let i = 0; i < maxSize; i++) {
        let prev;
        let prev_idx = 0 ;
        for (let j = 0; j < maxSize; j++) {
            let elem = document.getElementById(id(i, j));
            let val = parseInt(elem.innerText);
            if (val) {
                elem.innerText = '';
                if (prev) {
                    if (prev === val) {
                        document.getElementById(id(i, prev_idx)).innerText = val + prev;
                        prev = null;
                        prev_idx++;
                    } else {
                        prev = val;
                        prev_idx++;
                        document.getElementById(id(i, prev_idx)).innerText = val;
                    }
                } else {
                    document.getElementById(id(i, prev_idx)).innerText = val;
                    prev = val;
                    prev_idx = j;
                }
            }
        }
    }
    addRandomNumber();
}

    function id(num1, num2) {
        return 't' + num1 + '.' + num2;
    }
    // created a function that randomly picks numbers 2 or 4
    function generateNumber() {
        let two_or_four = Math.floor(Math.random() * 2);
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
                    tiles.push(id(i, y));
                }
            }
        }
        return tiles;
    }
