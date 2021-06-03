var bird,bgImg
var pipes=[]
var score=0

 function preload() {
     
    bgImg=loadImage("FlappyBirdBackground.png")

 }

 function setup() {
     
    createCanvas(800,400)
    bird= new Bird()
    pipes.push(new Pipe())

 }

 function draw() {
     
    background(bgImg)
    textSize(40)
    fill("red")
    text(score,70,70)
    for (var i = pipes.length-1; i>=0;i--) {
        pipes[i].show();
        pipes[i].update()
        if (pipes[i].hits(bird)) {
            
            score=0

        }

        else if (frameCount%200===0) {
            
            score=score+1

        }
        
    }

    bird.show()
    bird.update()
    if (frameCount%100===0) {
        
        pipes.push(new Pipe())


    }

 }

 function keyPressed() {
     
    if (key===' ') {
     
        bird.up()

    }

 }