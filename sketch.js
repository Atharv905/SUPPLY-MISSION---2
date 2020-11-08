var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var engine;
var world;
// create world engine body and bodies 
const Engine = Matter.Engine;
//engine,world,boidies,body
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	//create sprite named pakage 
	//add image to the package 
	//scale the package 
	//do the same for helicopter,ground
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.visible = true;
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8});
	World.add(world, packageBody);


	 bucket1 = new Bucket(317,418,5,80);
	 bucket2 = new Bucket(369,455,100,5);
	 bucket3 = new Bucket(417,413,5,80);


	
	

	//Create a Ground

     	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bucket1.display();
  bucket2.display();
  bucket3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageSprite.velocity.y = 2;
  }
}



