window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

    var fabycanvas = document.getElementById('fabyCanvas');
    var ctxfaby = fabycanvas.getContext('2d');

    class birb {
      x = 150;
      y = 150;
      width = 150;
      height = 100;
      speedX = 10;
      speedY = 10;
      gravity = 1;
      gravitySpeed = 1.1;
    }

    draw = (bird) => {
      var fbImg = new Image();
      fbImg.src = 'images/flappy.png';
      fbImg.onload = function () {
        ctxfaby.drawImage(fbImg, bird.x, bird.y, bird.width, bird.height);
        if (bird.gravity > 0) {
          ctxfaby.drawImage(fbImg, bird.x, bird.y - bird.gravity);
        } else {
          ctxfaby.drawImage(fbImg, bird.x, bird.y + bird.gravity);
        }
      }
    };


    document.onkeyup = function (e) {
      switch (e.keyCode) {
        case 32: faby.gravity = faby.gravity * -1;
          console.log('flap', Faby);
          break;
      }
    }

    var bgImg = new Image();
    bgImg.src = 'images/bg.png';

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var backgroundImage = {
      bgImg: bgImg,
      x: 0,
      speed: -1,

      move: function () {
        this.x += this.speed;
        this.x %= canvas.width;
      },

      draw: function () {
        ctx.drawImage(this.bgImg, this.x, 0);
        if (this.speed < 0) {
          ctx.drawImage(this.bgImg, this.x + canvas.width, 0);
        } else {
          ctx.drawImage(this.bgImg, this.x - this.img.width, 0);
        }
      },
    };

    faby = new birb();

    function updateCanvas() {
      backgroundImage.move();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();

      
      ctxfaby.clearRect(0, 0, fabycanvas.width, fabycanvas.height);
      draw(faby);
      
      requestAnimationFrame(updateCanvas);
    }

    

    // start calling updateCanvas once the image is loaded
    bgImg.onload = updateCanvas();
    faby.onload = updateCanvas();
  }

};

