const playerOneDiceImage = document.querySelector(".player1-img");
const playertwoDiceImage = document.querySelector(".player2-img");
const startOverBtn = document.querySelector(".start-over");
const headline = document.querySelector(".headline");

let count = 0;


startOverBtn.onclick = function () {
    sessionStorage.clear();
    location.reload();
}

window.onload = function () {
    getcount();
    if (count != 0) {
        diceevent();

    }
    count++;
    setcount(count);
}





function Whowins(scoreOne, scoreTwo) {
    if (scoreOne > scoreTwo) {
        headline.textContent = "Player 1 Wins!";
    }
    else if (scoreOne < scoreTwo) {
        headline.textContent = "Player 2 Wins!";
    }
    else {
        headline.textContent = "Its a draw!!!!";
    }
}

function diceevent() {
    var randomOneNumber = Math.ceil(Math.random() * 6);
    var randomTwoNumber = Math.ceil(Math.random() * 6);
    Whowins(randomOneNumber, randomTwoNumber)
    var srconeString = "../images/dice" + randomOneNumber + ".png";
    var srctwoString = "../images/dice" + randomTwoNumber + ".png";
    playerOneDiceImage.setAttribute("src", srconeString);
    playertwoDiceImage.setAttribute("src", srctwoString);
}

function setcount(value) {
    sessionStorage.setItem("count", value);
}
function getcount() {
    count = Number(sessionStorage.getItem("count"));
}