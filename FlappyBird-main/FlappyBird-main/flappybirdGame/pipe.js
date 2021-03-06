function Pipe() {
  this.top = random((height-15)/2);
  this.bottom = random((height-15)/2);
  this.x = width;
  this.w = 40;
  this.speed = 2;
  this.imgup = loadImage("FlappyBirdPipe1.png")
  this.imgbottom = loadImage("FlappyBirdPipe4.png")
  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
				this.highlight = true;
        
        return true;
      }
  }
    this.highlight = false;
    return false;
}

  this.show = function() {
    fill(255);
    if (this.highlight) {
     fill(255, 0, 0);
    }
    image(this.imgup,this.x, 0, this.w, this.top);
   image(this.imgbottom,this.x, height - this.bottom, this.w, this.bottom);

  }

  this.update = function() {
    this.x -= this.speed;


  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}