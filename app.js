var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 10;
var y = 235;
var WIDTH = 416;
var HEIGHT = 481;
var img = new Image();
var collision = 0;

var p = 100;
var o = 20;
var ctxx;
function rect1(p,o,w,h) {
ctxx.beginPath();
ctxx.rect(p,o,w,h);
ctxx.closePath();
ctxx.fill();
}
function clear1() {
ctxx.clearRect(0, 0, WIDTH, HEIGHT);
ctxx.drawImage(img, 0, 0);
}
function draw1() {
clear();
ctxx.fillStyle = "red";
rect(p, o, 10,10);
}
// var maze = document.querySelector('#maze');
//
// var imageData = maze.getImageData(0, 0, w, h);
//
// // examine every pixel,
// // change any old rgb to the new-rgb
// for (var i=0;i<imageData.data.length;i+=4)
//   {
//       // is this pixel the old rgb?
//       if(imageData.data[i]==64 &&
//          imageData.data[i+1]==63 &&
//          imageData.data[i+2]==64
//       ){
//           // change to your new rgb
//           imageData.data[i]==0;
//           imageData.data[i+1]==0;
//           imageData.data[i+2]==0;
//       }
//   }
// // put the altered data back on the canvas
// maze.putImageData(imageData,0,0);

function rect(x,y,w,h) {
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
}

function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
ctx.drawImage(img, 0, 0);
}

function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
img.src = "maze1.jpg";
ctxx = canvas.getContext("2d");
return setInterval(draw, 10);
}
function doKeyDown(evt){
switch (evt.keyCode) {
case 38:  /* Up arrow was pressed */
if (y - dy > 0){
y -= dy;
clear();
checkcollision();
if (collision == 1){

y += dy;
collision = 0;
}
}

break;
case 40:  /* Down arrow was pressed */
if (y + dy < HEIGHT ){
y += dy;
clear();
checkcollision();
if (collision == 1){

y -= dy;
collision = 0;
}
}

break;
case 37:  /* Left arrow was pressed */
if (x - dx > 0){
x -= dx;
clear();
checkcollision();
if (collision == 1){

x += dx;
collision = 0;
}
}
break;
case 39:  /* Right arrow was pressed */
if ((x + dx < WIDTH)){
x += dx;
clear();
checkcollision();
if (collision == 1){

x -= dx;
collision = 0;

}
}
break;
}
}

function checkcollision() {
var imgd = ctx.getImageData(x, y, 10, 10);
var pix = imgd.data;
for (var i = 0; n = pix.length, i < n; i += 4) {
if (pix[i] == 0) {
collision = 1;
}
}
}

function draw() {
clear();
ctx.fillStyle = "purple";
rect(x, y, 10,10);
}

init();
window.addEventListener('keydown',doKeyDown,true);
