$(document).ready(function(){
var canvas;
var ctx;
var ctxx;
var test;
var dx = 1;
var dy = 1;
var x = 15;
var y = 250;
var o = 700;
var p = 270;
var t = 191;
var r = 237;
var WIDTH = 470;
var HEIGHT = 550;
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


function rect3(t,r,w,h) {
  test.beginPath();
  test.rect(t,r,w,h);
  test.closePath();
  test.fill();
}

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
  test.clearRect(0, 0, WIDTH, HEIGHT);
  test.drawImage(img, 0, 0);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  // img.src = "maze1_edited2.jpg";
  img.src = "maze44.jpg";
  ctxx = canvas.getContext("2d");
  test = canvas.getContext("2d");
  return setInterval(draw, 10);
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
    if (pix[i] < 2) {
      collision = 1;
    }
    // if (pix[i] === 0) {
    //   collision = 1;
    // }
  }
}

function checkcollision1() {
  var imgd = ctxx.getImageData(o, p, 10, 10);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] <  2) {
      collision = 1;
    }
    // if (pix[i] === 0) {
    //   collision = 1;
    // }
  }
}

function checkWinner(){
  var imgd = ctx.getImageData(x, y, 10, 10);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] == 30) {
      if (pendingWinner){
        alert('winner');
        pendingWinner = false;
      }
    }
}
}

function checkWinner1(){
  var imgd = ctxx.getImageData(o, p, 10, 10);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] == 30) {
      if (pendingWinner1){
        alert('winner');
        pendingWinner1 = false;
      }
    }
}
}

function draw() {
  clear();
  ctx.fillStyle = "purple";
  rect(x, y, 10,10);
  ctxx.fillStyle = "silver";
  rect2(o, p, 10,10);
  test.fillStyle = "#1E90FF";
  rect3(t,r,88,73);
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




init();
window.addEventListener('keydown',doKeyDown,true);
window.addEventListener('keydown',onKeyDown,true);



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
