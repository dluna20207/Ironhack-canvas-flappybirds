let time;


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  
  let fabyCanvas = document.getElementById('fabyCanvas');
  let fabyctx = fabyCanvas.getContext('2d');
  
  
  
  // ------------------------ STARTS THE GAME ------------------------ //
  
  
  function startGame() {
    

    
    class Flappy {
      constructor() {
        this.x = 200;
        this.y = 200;
        this.width = 75;
        this.height = 50;
        this.img = new Image();
        this.img.src = "images/flappy.png";
      }
      draw() {
        
        fabyctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
      falling(){
        this.y -= -1;
      }
   
    }

    let faby = new Flappy();
    
    // faby.falling();
      

    
    

    function draw(faby) {

      
      let img2 = new Image();
      img2.onload = function() { 
        fabyctx.drawImage(img2, faby.x, faby.y, 50, 50); 
      }
      img2.src = "images/flappy.png";
      
    }
    fabyctx.clearRect(0, 0, fabyCanvas.width, fabyCanvas.height);

    draw(faby);
    

    
    
    // ------------------------ SCROLLING IMAGE ------------------------ //

    
    let img = new Image();
    img.src = 'images/bg.png';
    
    
    let backgroundImage = {
      img: img,
      x: 0,
      speed: -1,
    
      move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
      },
      
      draw: function() {
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
      
      
      draw(faby);
    }
   
    
    // start calling updateCanvas once the image is loaded
    img.onload = updateCanvas;



    
    //------------------------ GRAVITY ------------------------ //
    
setInterval(gravity, 5);

function gravity(){

  fabyctx.clearRect(0, 0, fabyCanvas.width, fabyCanvas.height);

  faby.y -= -1;

  faby.draw();

}
    
document.body.onkeydown = function(e){
  if(e.keyCode == 32){
      faby.y += -7;
      console.log("WORKING")
  }
}








  }
  
  
  
  
  
  
};