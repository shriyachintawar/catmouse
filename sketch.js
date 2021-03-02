var gardenimg,cat1,cat2,cat3,mouse1,mouse2,mouse3;
var cat,mouse;
function preload() {
    gardenimg = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat3 = loadAnimation("cat4.png");

    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");
    mouse3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(827,712,20,20);
    cat.addAnimation("catSleeping",cat1);
    cat.scale = 0.2;

    mouse = createSprite(220,712,20,20);
    mouse.addAnimation("mouseSleeping",mouse1);
    mouse.scale = 0.15;
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    text(mouseX+","+mouseY,mouseX,mouseY);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("catFinal",cat3);
        cat.changeAnimation("catFinal")
        cat.x=370;
        mouse.scale = 0.15;
        mouse.addAnimation("mouseFinal",mouse3);
        mouse.changeAnimation("mouseFinal")
        
        mouse.scale = 0.15;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouse2);
        mouse.changeAnimation("mouseTeasing");
    }

}
