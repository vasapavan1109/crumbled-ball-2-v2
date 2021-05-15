
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload() {

}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground1 = new Ground(400, 600, 800, 20)
	dustbin1 = new Dustbin(600, 585, 100, 10)
	dustbin2 = new Dustbin(550, 540, 10, 100)
	dustbin3 = new Dustbin(650, 540, 10, 100)

	paper1 = new Paper(250, 400, 40)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);

}


function draw() {
	background('white');
	imageMode(CENTER)
	image(dustbinImage,600,540,100,100)
	ground1.display()
//	dustbin1.display();
//	dustbin2.display();
//	dustbin3.display()
	paper1.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 85, y: -85 })
	}
}
function preload() {
	dustbinImage = loadImage('dustbingreen.png')
}


