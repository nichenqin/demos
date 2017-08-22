const c = document.getElementById("gameCanvas");
const cc = c.getContext("2d");

let ballX = 50;
let ballSpeedX = 5;

window.onload = () => {
  draw();
  requestAnimationFrame(play);
};

function play() {
  draw();
  move();
  if (ballX <= 0) ballSpeedX = 5;
  if (ballX >= c.width) ballSpeedX = -5;
  requestAnimationFrame(play);
}

function move() {
  ballX += ballSpeedX;
}

function draw() {
  cc.fillStyle = "black";
  cc.fillRect(0, 0, c.width, c.height);
  cc.fillStyle = "white";
  cc.fillRect(ballX, 100, 5, 5);
  cc.fillStyle = "red";
  cc.fillRect(10, 100, 10, 100);
}
