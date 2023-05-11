console.log("starting game..");

const playBoard = document.querySelector(".play-board");

let foodX = 13, foodY = 10;
let snakeX = 5, snakeY = 5;
let snakeBody = [[snakeX, snakeY]]; // Ajouter la position initiale du serpent
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const changeDirection = (e) => {
    if (e.key === "ArrowUp") {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowDown") {
        velocityX = 1;
        velocityY = 0;
    } else if (e.key === "ArrowLeft") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowRight") {
        velocityX = 0;
        velocityY = 1;
    }
    initGame();
}

const initGame = () => {
    let HtmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY};"></div>`;

    if (snakeX === foodX && snakeY === foodY ) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
        console.log(snakeBody);
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
      }
      

    snakeBody[0] = [snakeX, snakeY];

    // update snake velocity
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = 0; i < snakeBody.length; i++) {
        HtmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]};"></div>`;
        
    }


    HtmlMarkup += `<div class="head" style="grid-area: ${snakeX} / ${snakeY};"></div>`;
    playBoard.innerHTML = HtmlMarkup;
}

changeFoodPosition();
initGame();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
