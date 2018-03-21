(function () {
  'use strict';

  var stage = document.getElementById('stage');
  var ctx;

  var WIDTH = stage.width; //300
  var HEIGHT = stage.height; //260
  var angle = 0;

  function draw() {
    var r0 = 10;
    var r1 = 20;

    ctx.save();
    ctx.translate(WIDTH/2, HEIGHT/2);
    // ctx.rotate(Math.PI * 2 / 360 * angle);

    // Axis
    // ctx.strokeStyle = 'rgba(0,0,0, 0.3)';
    // ctx.beginPath();
    // ctx.moveTo(-1000,0);
    // ctx.lineTo(1000,0);
    // ctx.stroke();
    // ctx.moveTo(0,-1000);
    // ctx.lineTo(0,1000);
    // ctx.stroke();

    ctx.strokeStyle = "orange";
    ctx.lineWidth = 6;
    ctx.beginPath();
    // ctx.moveTo(0, -r0);
    // ctx.lineTo(0, -r1);
    // x: r * Math.cos(Math.PI/18-angle)
    ctx.moveTo(
      r0 * Math.cos(Math.PI/180*angle),
      r0 * Math.sin(Math.PI/180*angle)
    );
    ctx.lineTo(
      r1 * Math.cos(Math.PI/180*angle),
      r1 * Math.sin(Math.PI/180*angle)
    );
    ctx.stroke();

    ctx.restore();
  }

  function update() {
    //ctx.clearRect(0,0, WIDTH, HEIGHT);
    ctx.fillStyle = 'rgba(255,255,255, 0.3)';
    ctx.fillRect(0,0,WIDTH, HEIGHT);
    draw();
    angle += 24;
    setTimeout(function() {
      update();
    }, 60);
  }

  if (typeof stage.getContext == 'undefined') {
    return;
  }
  ctx = stage.getContext('2d');

  update();

})();
