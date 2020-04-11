var bodyBg = document.querySelector('body');
var colorChanger = document.getElementById('colorChanger');
//array of colors for background
var colors = ["#a89232", "#32a4a8", "#a83234"];
var counterBtn = document.getElementById('countingBtn');
var resetCounter = document.getElementById('resetBtn');
var slideShowBtn = document.getElementById('slideshowButton');
var seeds = document.getElementById('seedDrag');
var soil = document.getElementById('soil');
var pumpkin = document.getElementById('pumpkinBtn');
var ssImages = ["beach.png", "sun.jpg", "dirt.png", "dirtPlanted.png", "seeds.png"];
var jackolantern = document.getElementById('soil');
//components for counter
var counted = 0;
var i = 0;
//pumpkin check
var plant = false;

//balloon game elements
const gameButton = document.getElementById('startGameBtn');
var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext("2d");
var score = 0;
var balloonX;
var balloonY;
var ballonSpawned = false;
var balloonImg = new Image();
balloonImg.src = "slideshowImages/balloon.png";
gameButton.addEventListener('click', game);

//event listners
soil.addEventListener('dragover', dragOver);
soil.addEventListener('dragend', dragEnd);
colorChanger.addEventListener('click', changeColor);
counterBtn.addEventListener('click', counter);
resetCounter.addEventListener('click', resetCount);
seedDrag.addEventListener('dragstart', dragStart);
seedDrag.addEventListener('dragend', dragEnd);
pumpkin.addEventListener('click', unhide);
setInterval(slideshow, 5000);
soil.addEventListener('click', spooky);

//change the color of the block
//done!
function changeColor() {
    i = Math.floor(Math.random() * colors.length);
    console.log(i);
    console.log(colors[i]);
    document.querySelector('.colorBlock').style.backgroundColor = colors[i];
}
//counter with total displayed on screen
//done!
function counter()
{
  counted++;
  document.getElementById('testing').innerHTML = "Total Counted: " + counted;
  //document.getElementById(#counterInline).innerHTML = counted;
}
//counter reset
//done!
function resetCount()
{
  counted = -1;
  counter();
}
//slideshow on a timer
//
function slideshow()
{
  var index = Math.floor(Math.random() * ssImages.length);
  document.getElementById('slideshowHolder').src = "slideshowImages/" + ssImages[index];
}
//drag functions for pumpkin
function dragStart()
{
  seeds.className += "hide"
}
function dragEnd()
{
  if (plant == true && !soil.src.includes("slideshowImages/jackolantern.png"))
  {
      soil.src = "slideshowImages/dirtPlanted.png";
  }
}
function dragOver()
{
  plant = true;
}
//hidden fun function that turns the pumpkin into a jackolantern if
//the seeds have already been planted
function spooky()
{
  console.log(soil.src);
  if (soil.src.includes("slideshowImages/dirtPlanted.png"))
  {
    soil.src = "slideshowImages/jackolantern.png";
  }

}
//unhide elements for pumpkin
function unhide()
{
  if (document.querySelector('.pumpkin').style.visibility == "visible")
  {
    document.querySelector('.pumpkin').style.visibility = "hidden";
  }
  else
  {
document.querySelector('.pumpkin').style.visibility = "visible";
  }
}
//balloon game
//still need to impliment a way to find x and y coords of mouse and if they are over the balloon
//the balloon pops and increments the score
function game()
{
  setInterval(balloonSpawn, 1500);
  if (document.querySelector('.balloonFrame').style.visibility == "visible")
  {
  document.querySelector('.balloonFrame').style.visibility = "hidden";
  endgame();
  }
  else
  {
    document.querySelector('.balloonFrame').style.visibility = "visible";
  }

}
function balloonSpawn()
{
    balloonX = Math.floor(Math.random()* 300);
    balloonY = Math.floor(Math.random()* 300);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.drawImage(balloonImg, balloonX, balloonY);
}
function balloonPop()
{
  console.log("POP");
  score++;
  document.getElementById('score').innerHTML = "Score: " + score;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function endgame() {
  
}
