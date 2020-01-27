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
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, Faby.x, Faby.y, 50, 50);
      }
      img.src = "images/flappy.png";
    }

    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 32: Faby.gravity = Faby.gravity * -1;
          console.log('flap', Faby);
          break;
      }
      updateCanvas();
    }

    var img = new Image();
    img.src = 'images/bg.png';

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var backgroundImage = {
      img: img,
      x: 0,
      speed: -1,

      move: function () {
        this.x += this.speed;
        this.x %= canvas.width;
      },

      draw: function () {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
          ctx.drawImage(this.img, this.x + canvas.width, 0);
        } else {
          ctx.drawImage(this.img, this.x - this.img.width, 0);
        }
      },
    };


    function updateCanvas() {
      backgroundImage.move();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();

      requestAnimationFrame(updateCanvas);

      draw(Faby);
    }

    // start calling updateCanvas once the image is loaded
    img.onload = updateCanvas;

  }

};

