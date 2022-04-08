
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
    console.log("down");
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