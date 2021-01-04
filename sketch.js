const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var bg;

var engine, world;
var platformLow, platformMedium, platformHigh;

//platformLow
var block1, block2, block3, block4, block5; //platformLow lowest level
var block6, block7, block8, block8Next; //platformLow medium level
var block9; //platformLow top level

//platformMedium
var block10, block11, block12, block13, block14; //platformMedium lowest level
var block15, block16, block17, block17Next; //platformMedium medium level
var block18; //platformMedium top level

//platformHigh
var block19, block20, block21, block22, block23; //platformHigh lowest level
var block24, block25, block26, block26Next; //platformHigh medium level
var block27; //platformHigh top level

var gameState = 'start';
var backgroundImg;

var projectile;
var slingshot;
//var bg = "light.jpg";

function preload() {
	changebg();
}

function setup() {
	var canvas = createCanvas(1800, 800);
	engine = Engine.create();
	world = engine.world;

	platformLow = new Stand(1000, 700, 300, 20);
	platformMedium = new Stand(1300, 500, 300, 20);
	platformHigh = new Stand(1600, 300, 300, 20);

	//platformLow
	block1 = new Block(880, 660, 60, 60);
	block2 = new Block(940, 660, 60, 60);
	block3 = new Block(1000, 660, 60, 60);
	block4 = new Block(1060, 660, 60, 60);
	block5 = new Block(1120, 660, 60, 60);

	block6 = new Block(910, 600, 60, 60);
	block7 = new Block(970, 600, 60, 60);
	block8 = new Block(1030, 600, 60, 60);
	block8Next = new Block(1090, 600, 60, 60);

	block9 = new Block(1000, 540, 60, 60);

	//platformMedium
	block10 = new Block(1180, 460, 60, 60);
	block11 = new Block(1240, 460, 60, 60);
	block12 = new Block(1300, 460, 60, 60);
	block13 = new Block(1360, 460, 60, 60);
	block14 = new Block(1420, 460, 60, 60);

	block15 = new Block(1210, 400, 60, 60);
	block16 = new Block(1270, 400, 60, 60);
	block17 = new Block(1330, 400, 60, 60);
	block17Next = new Block(1390, 400, 60, 60);

	block18 = new Block(1300, 340, 60, 60);

	//platformHigh
	block19 = new Block(1480, 260, 60, 60);
	block20 = new Block(1540, 260, 60, 60);
	block21 = new Block(1600, 260, 60, 60);
	block22 = new Block(1660, 260, 60, 60);
	block23 = new Block(1720, 260, 60, 60);

	block24 = new Block(1510, 200, 60, 60);
	block25 = new Block(1570, 200, 60, 60);
	block26 = new Block(1630, 200, 60, 60);
	block26Next = new Block(1690, 200, 60, 60);

	block27 = new Block(1600, 140, 60, 60);

	projectile = new Polygon(300, 500);
	slingshot = new Slingshot(projectile.body, {x: 400, y: 300});
	
}

function draw() {
	if(backgroundImg)
	background(backgroundImg);
	Engine.update(engine);

	platformLow.display();
	platformMedium.display();
	platformHigh.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block8Next.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();
	block17Next.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	block22.display();
	block23.display();
	block24.display();
	block25.display();
	block26.display();
	block26Next.display();
	block27.display();
  
	slingshot.display();
	projectile.display();

}

function mouseDragged() {
	projectile.move();
}

function mouseReleased() {
	slingshot.fling();
}

function keyPressed() {
	if (keyCode === 32) {
		slingshot.attach(projectile.body);
		console.log('Hi!');
	}
}

async function changebg(){

    var response =  await fetch('http://worldtimeapi.org/api/timezone/Asia/Muscat');
    var responsejson = await response.json();
    console.log(responsejson);

    var dt = responsejson.datetime;
    console.log(dt);

    var hour = dt.slice(11,13);
	console.log(hour);
	if (hour >= 06 && hour <= 18) {
		bg = "light.jpg";
	  } 
	  else {
		bg = "dark.jpg";
	  }
   
	  backgroundImg = loadImage(bg);
	}