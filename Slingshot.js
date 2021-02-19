class SlingShot{
    constructor(bodyA ,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10,
        }
        this.SlingShot = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.SlingShot);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
      }
      
      fly(){
        this.SlingShot.bodyA = null;
      }
      
      attached(body){
      this.SlingShot.bodyA = body;
      }

      display(){
        image(this.sling1, 200, 350);
        image(this.sling2, 175, 350);
        //image(this.sling3, 200, 400);
        if(this.SlingShot.bodyA){
          var pointA = this.SlingShot.bodyA.position
          var pointb = this.pointB
        
          if(pointA.x < 250){
            strokeWeight(5);
            stroke(48, 22, 8);
            line(pointA.x, pointA.y, pointb.x, pointb.y); 
            line(pointA.x-20, pointA.y, pointb.x+20, pointb.y);
            image(this.sling3, pointA.x-40, pointA.y-10,20,30);
          }
          else{
             strokeWeight(5);
             stroke(48, 22, 8);
          line(pointA.x, pointA.y, pointb.x, pointb.y); 
          line(pointA.x+20, pointA.y, pointb.x+20, pointb.y);
          image(this.sling3, pointA.x+20, pointA.y-10,20,30);
          }
        }
        

      }
}