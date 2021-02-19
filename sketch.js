const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, background1, clog, slingshot, platform;

function preload(){
 background1 = loadImage("sprites/bg.png");  
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(width/2,height,width,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    //clog = new Log(200,200,100, PI/2);
    platform = new Ground(150,675,300,300);
     
    console.log(ground);

    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{x:200,y:390});

}

function draw(){
    background(background1);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //clog.display();
    slingshot.display();
    platform.display();

    bird.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode == 32){
        slingshot.attached(bird.body);
    }
}
