
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      //this.image = loadImage("sprites/ground.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      //image(this.image, 0, 390, this.width, this.height);
    }
  };