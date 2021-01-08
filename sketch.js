const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bound1, bound2, bound3, bound4;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var engine,world;

function preload() {

}

function setup() {
    var canvas = createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    bound1 = new Ground(0, 0, 1000, 15);
    bound2 = new Ground(0, 400, 10, 800);
    bound3 = new Ground(0, 800, 1000, 15);
    bound4 = new Ground(480, 400, 10, 800);

    ground1 = new Boundary(5, 788, 1000, 10);

    ground2 = new Boundary(10, 680, 6, 220);
    ground3 = new Boundary(75, 680, 6, 220);
    ground4 = new Boundary(140, 680, 6, 220);
    ground5 = new Boundary(200, 680, 6, 220);
    ground6 = new Boundary(260, 680, 6, 220);
    ground7 = new Boundary(325, 680, 6, 220);
    ground8 = new Boundary(399, 680, 6, 220);
    ground9 = new Boundary(470, 680, 6, 220);


}

function draw() {
    background(0);

    Engine.update(engine);

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }
    // for(var j = 15; )

    for (var k = 0; k <= width; k + 80) {
        divisions.push(new Ground(k, height - divisionHeight / 2, 10, divisionHeight));
    }

    bound1.display();
    bound2.display();
    bound3.display();
    bound4.display();

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();

    drawSprites();

}

