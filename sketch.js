var bg, bgimg;
var cat, cat1IMG, cat2IMG, cat_moving;
var mouse, mouse1IMG, mouse2IMG, mouse_moving;

function preload() {
    
    bgimg = loadImage("garden.png");

    cat_moving = loadAnimation("cat2.png", "cat3.png");
    cat1IMG = loadAnimation("cat1.png");
    cat2IMG = loadAnimation("cat4.png");

    mouse_teasing = loadAnimation("mouse2.png", "mouse3.png");
    mouse1IMG = loadAnimation("mouse1.png");
    mouse2IMG = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    bg = createSprite(500,400,1000,50);
    bg.addImage(bgimg);

    cat = createSprite(800,600,10,10);
    cat.addAnimation("cat1", cat1IMG);
    cat.scale = 0.2;

    mouse = createSprite(150,600,10,10);
    mouse.addAnimation("mouse1", mouse1IMG);
    mouse.scale = 0.15;

}

function draw() {

    background(255);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

            cat.addAnimation("cat2img", cat2IMG);
            cat.changeAnimation("cat2img");
            cat.velocityX = 0;

            mouse.addAnimation("mouse2img", mouse2IMG);
            mouse.changeAnimation("mouse2img");

            cat.x = 250;

    }

    drawSprites();

    text(mouseX + ',' + mouseY, 10, 45);
}


function keyPressed(){

    cat.velocityX = -5;
    cat.addAnimation("cat_moving", cat_moving);
    cat.changeAnimation("cat_moving");

    mouse.addAnimation("mouse_teasing", mouse_teasing);
    mouse.changeAnimation("mouse_teasing");

}
