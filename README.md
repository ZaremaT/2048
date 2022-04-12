
# 2048

## Project Description
Layout of the page shows the layout of the 4x4 boardgame with 16 tiles, buttons to start the game or refreshe it, name of the game, block for current score, block for best score, move arrows and a line of the one main rule. Single player moves tiles with numbers 2 or 4. Each time two tiles with same numbers unite together - teir total sum appears in a tile. The goal is to get to number 2048 or higher. Player loses the game when no more possible moves available. 

## Wireframes

![image](2048_hand_wireframe.jpeg)

## MVP Goals
* As a user I want to be  able to move tiles into 4 deifferent directions ( top, bottom,left and right).
* As a user I want to be able to see my current score and best score
* As a user I want to be able to be able to start a new game
* As a user I want to see "You Won!" sign if user got to 2048 tile.
* If user lost the display would show "You lost!" + current score.
 

## Proposal Steps

* Create 4x4 gameboard with 16 tiles using HTML divs .
* At the begining of the game gameboard already has with random values of 2 or 4. This involves creating "New Game" button
* Create arrows that will allow to transpose values into 4 different direction. This involves:
- addEventListener
-function keyPressed
-if statements
* Create a function that will unite collided equal values after transpose.
* New random values of 2 or 4 should appear on a vacant tile of gameboard after each move. To generate random number by using Math.floor(Math.random)
* Create a function that will test if player lost or won.


## Technologies:
* HTML
* Javascript
* CSS

# Future Enhancement:
* Different colors for tiles
* Chanllenges with timer
* Leadership Board





