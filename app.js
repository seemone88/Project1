$(document).ready(function(){
var canvas;
var ctx;
var ctxx;
var test;
var test1;
var dx = 1;
var dy = 1;
var o = 5;
var p = 268;
var x = 945;
var y = 270;
var WIDTH = 1000;
var HEIGHT = 580;
var img = new Image();
var collision = 0;
var p1moveUp = false;
var p1moveDown = false;
var p1moveLeft = false;
var p1moveRight = false;
var p2moveUp = false;
var p2moveDown = false;
var p2moveLeft = false;
var p2moveRight = false;
var pendingWinner = true;
var pendingWinner1 = true;
var theInterval = setInterval(draw, 5);
var button = document.querySelector('#play');
var hobbes = document.querySelector('#hobbes');




function rect2(o,p,w,h) {
  ctxx.beginPath();
  // ctxx.rect(5,268,10,10);
  ctxx.rect(o, p, w, h);
  ctxx.closePath();
  ctxx.fill();
  return true;

}


function rect(x,y,w,h) {
  ctx.beginPath();
  // ctx.rect(945,270,10,10);
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
  return ctxx.rect(5,268,10,10);
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(img, 0, 0);
  ctxx.clearRect(0, 0, WIDTH, HEIGHT);
  ctxx.drawImage(img, 0, 0);
  test.clearRect(0, 0, WIDTH, HEIGHT);
  test.drawImage(img, 0, 0);
  test1.clearRect(0, 0, WIDTH, HEIGHT);
  test1.drawImage(img, 0, 0);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  // img.src = "maze1_edited2.jpg";
  img.src = "maze44.jpg";
  ctxx = canvas.getContext("2d");
  test = canvas.getContext("2d");
  test1 = canvas.getContext("2d");
  return theInterval;
}

function doKeyDown(evt){
  switch (evt.keyCode) {
    case 38:  /* Up arrow was pressed */
    if (y - dy > 0){
      y -= dy;
      clear();
      checkcollision();
      checkWinner();
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
      checkWinner();
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
      checkWinner();
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
      checkWinner();
    if (collision == 1){
      x -= dx;
      collision = 0;
    }
}
break;
  }
}

function onKeyDown(evtt){
  switch (evtt.keyCode) {
    case 87:  /* W was pressed */
      if (p - dy > 0){
        p -= dy;
        clear();
        checkcollision1();
        checkWinner1();
      if (collision == 1){
        p += dy;
        collision = 0;
      }
}

break;
    case 83:  /* Down arrow was pressed */
    if (p + dy < HEIGHT ){
      p += dy;
      clear();
      checkcollision1();
      checkWinner1();
    if (collision == 1){
      p -= dy;
      collision = 0;
    }
}

break;
    case 65:  /* Left arrow was pressed */
    if (o - dx > 0){
      o -= dx;
      clear();
      checkcollision1();
      checkWinner1();
    if (collision == 1){
      o += dx;
      collision = 0;
    }
}
break;
    case 68:  /* Right arrow was pressed */
    if ((o + dx < WIDTH)){
      o += dx;
      clear();
      checkcollision1();
      checkWinner1();
    if (collision == 1){
      o -= dx;
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
    if (pix[i] < 20) {
      collision = 1;
    }
    if (pix[i] == 0) {
      collision = 1;
    }
  }
}

function checkcollision1() {
  var imgd = ctxx.getImageData(o, p, 10, 10);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] < 20) {
      collision = 1;
    }
    if (pix[i] == 0) {
      collision = 1;
    }
  }
}

function checkWinner(){
  var imgd = ctx.getImageData(x, y, 10, 10);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] == 255& pix[i+1] == 255 && pix[i+2] == 0) {
      if (pendingWinner){
        clearInterval(theInterval);
        img.src = "calvinwin.gif";
        pendingWinner = false;
      }
    }
}
}

function checkWinner1(){
  var imgd = ctxx.getImageData(o, p, 10, 10);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] == 255 && pix[i+1] == 255 && pix[i+2] == 0) {
      if (pendingWinner1){
        clearInterval(theInterval);

        img.src = "hobbes.gif";
        pendingWinner1 = false;
      }
    }
}
}

function draw() {
  clear();
  ctx.fillStyle = "red";
  rect(x, y, 10,10);
  ctxx.fillStyle = "orange";
  rect2(o, p, 10,10);
  test.fillStyle = "#FFFF00";
  test.fillRect(191,237,88,73);
  test1.fillStyle = "#FFFF00";
  test1.fillRect(678, 237,88,73);



  if (p1moveUp == true){
    y -= dy;
    checkcollision();
    checkWinner();
  if (collision == 1){
      y += dy;
      collision = 0;
    }
  }
  if (p1moveDown == true){
    y += dy;
    checkcollision();
    checkWinner();
  if (collision == 1){
      y -= dy;
      collision = 0;
    }
  }
  if (p1moveLeft == true){
    x -= dx;
    checkcollision();
    checkWinner();
  if (collision == 1){
      x += dx;
      collision = 0;
    }
  }
  if (p1moveRight == true){
    x += dx;
    checkcollision();
    checkWinner();
  if (collision == 1){
      x -= dx;
      collision = 0;
    }
  }
// player 2
  if (p2moveUp == true){
    p -= dy;
    checkcollision1();
    checkWinner1();
  if (collision == 1){
      p += dy;
      collision = 0;
    }
  }
  if (p2moveDown == true){
    p += dy;
    checkcollision1();
    checkWinner1();
  if (collision == 1){
      p -= dy;
      collision = 0;
    }
  }
  if (p2moveLeft == true){
    o -= dx;
    checkcollision1();
    checkWinner1();
  if (collision == 1){
      o += dx;
      collision = 0;
    }
  }
  if (p2moveRight == true){
    o += dx;
    checkcollision1();
    checkWinner1();
    if (collision == 1){
      o -= dx;
      collision = 0;
    }
  }
  }


button.addEventListener('click',function(){
window.location.reload(true);
});


init();
window.addEventListener('keydown',doKeyDown,true);
window.addEventListener('keydown',onKeyDown,true);

// $('button').click(function(){
//   img.src = "maze44.jpg";
//
//   clear();
//   ctx.drawImage(img, 0, 0);
//   ctxx.drawImage(img, 0, 0);
//   rect();
//   rect2();
//   console.log(rect(945,270,10,10));
//   setInterval(draw,10);
// });

$('body').keydown(function(e){
    var ek = e.keyCode;
    if (ek == 38){p1moveUp = true};
    if (ek == 40){p1moveDown = true};
    if (ek == 37){p1moveLeft = true};
    if (ek == 39){p1moveRight = true};
});
$('body').keyup(function(e){
    var ek = e.keyCode;
    if (ek == 38){p1moveUp = false};
    if (ek == 40){p1moveDown = false};
    if (ek == 37){p1moveLeft = false};
    if (ek == 39){p1moveRight = false};
});

$('body').keydown(function(e){
    var ek = e.keyCode;
    if (ek == 87){p2moveUp = true};
    if (ek == 68){p2moveRight = true};
    if (ek == 83){p2moveDown = true};
    if (ek == 65){p2moveLeft = true};
});
$('body').keyup(function(e){
    var ek = e.keyCode;
    if (ek == 87){p2moveUp = false};
    if (ek == 68){p2moveRight = false};
    if (ek == 83){p2moveDown = false};
    if (ek == 65){p2moveLeft = false};
});
});
