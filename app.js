var canvas;
var ctx;
var ctxx;
var dx = 5;
var dy = 5;
var x = 10;
var y = 235;
var o = 30;
var p = 300;
var WIDTH = 416;
var HEIGHT = 481;
var img = new Image();
var collision = 0;

function rect2(o,p,w,h) {
ctxx.beginPath();
ctxx.rect(o,p,w,h);
ctxx.closePath();
ctxx.fill();
}


function rect(x,y,w,h) {
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
}

function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
ctx.drawImage(img, 0, 0);
ctxx.clearRect(0, 0, WIDTH, HEIGHT);
ctxx.drawImage(img, 0, 0);
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
ctxx.fillStyle = "red";
rect2(o, p, 10,10);
}



init();
window.addEventListener('keydown',doKeyDown,true);
