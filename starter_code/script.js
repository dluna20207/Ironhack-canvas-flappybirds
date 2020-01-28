window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

    let Faby = {
      x: 25,
      y: 25,
      width: 10,
      height: 10,
      speedX: 10,
      speedY: 10,
      gravity: 10,
      gravitySpeed: 1.1,
      update: () => {
        this.x += speedX;
        this.y += speedY;
      },
      newPos: () => {
        update();
      },
    }
    
    function draw(Faby) {
      var fbImg = new Image();
      fbImg.onload = function () {
        ctx.drawImage(fbImg, Faby.x, Faby.y, 150, 150);
      }
      fbImg.src = "images/flappy.png";
    }

    document.onkeyup = function (e) {
      switch (e.keyCode) {
        case 32: Faby.gravity = Faby.gravity * -1;
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


    function updateCanvas() {
      backgroundImage.move();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();
      draw(Faby);

      requestAnimationFrame(updateCanvas);

    }

    // start calling updateCanvas once the image is loaded
    bgImg.onload = updateCanvas();
    Faby.onload = updateCanvas();
  }

};

