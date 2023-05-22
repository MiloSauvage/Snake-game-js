console.log("starting game..");

const playBoard = document.querySelector(".play-board");

let gameOver = false;
let foodX , foodY;
let snakeX = 5, snakeY = 5;
let snakeBody = []; // Ajouter la position initiale du serpent
let velocityX = 0, velocityY = 0;
let setIntervalId;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const changeDirection = (e) => {
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 1;
        velocityY = 0;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    
} 

const initGame = () => {
    if(gameOver) return handleGameOver();
    let HtmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY};"></div>`;

    if (snakeX === foodX && snakeY === foodY ) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
    }

    snakeBody[0] = [snakeX, snakeY];

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
      }
      

    snakeBody[0] = [snakeX, snakeY];

    // update snake velocity
    snakeX += velocityX;
    snakeY += velocityY;

    if (snakeX <= 0 || snakeY > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true;
        console.log("gameOver");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        HtmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]};"></div>`;
        
    }
    playBoard.innerHTML = HtmlMarkup;
}

changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
