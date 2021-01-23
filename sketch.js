var tom,tomAnimation,jerry,jerryAnimation,tomImage,jerryImage,tomImageSit,jerryImageSit;
var backGround,backGroundImage


function preload() {
    //load the images and Animation here
    tomImage = loadImage("tomOne.png");
    jerryImage = loadImage("jerryOne.png");
    tomAnimation = loadAnimation("tomTwo.png","tomThree.png");
    tomImageSit = loadImage("tomFour.png");
    jerryAnimation = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImageSit = loadImage("jerryFour.png");
    backGroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(150,600);
    jerry.addImage(jerryImageSit);
    jerry.scale=0.15;
    tom=createSprite(760,600);
    tom.addImage(tomImageSit);
    tom.scale=0.15;
    backGround=createSprite(500,400);
    backGround.addImage(backGroundImage);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
   
    if (tom.isTouching(jerry)) {
        jerry.addImage("jerryHappy",jerryImage);
        jerry.changeImage("jerryHappy");
        tom.addImage("tomHappy",tomImage);
        tom.changeImage("tomHappy");
        tom.velocityX=0;   
    }
    // tom.debug=true;
    tom.setCollider("circle",0,0,500);
    // jerry.debug=true;
    jerry.setCollider("circle",0,0,500);
    jerry.depth=backGround.depth;
    jerry.depth++;
    tom.depth=backGround.depth;
    tom.depth++;
    
    drawSprites();
    text(mouseX +','+ mouseY,10,45);
    // keyPressed();
}


function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode===LEFT_ARROW) {
        tom.addAnimation("tomRunning",tomAnimation);
        tom.changeAnimation("tomRunning")
        jerry.addAnimation("jerryRunning",jerryAnimation);
        jerry.changeAnimation("jerryRunning");
        tom.velocityX=-5;
    }
}
