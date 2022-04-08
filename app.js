const maxSize = 4;
document.addEventListener('DOMContentLoaded', run);

function run() {
    document.addEventListener('keydown', keyPressed);
    let tiles = document.querySelectorAll('tile')
    console.log(tiles);
    let score = document.querySelector('score')
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
function keyDown() {
    console.log("down"); let sum = 0;
    for (let i = 0; i < maxSize; i++) {
        let val = parseInt(document.getElementById('t' + i + '.0').innerText);
        if (val) {
            sum = sum + val
        }
        console.log(document.getElementById('t' + i + '.0').innerText)
    }

    console.log(sum);
}

function keyUp() {
    console.log("up");
}

function keyRight() {
    console.log("right");
}

function keyLeft() {
    console.log("left");
}