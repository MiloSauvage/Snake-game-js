console.log("starting game..");

const playBoard = document.querySelector(".play-board");

let foodX = 13, foodY = 10;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const initGame = () => {
    let HtmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY};"></div>`;
    playBoard.innerHTML = HtmlMarkup;
}

initGame();
