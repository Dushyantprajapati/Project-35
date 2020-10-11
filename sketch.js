var dogImg, happyDogImg, dog, database, foodS, foodStock, canvas, lastFed, fedTime, foodObj, feed, addFood, food1, foodCount, input, milk, milkImg, NameIt;
var feed
function preload() {
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage('dogImg1.png');
  milkImg = loadImage('Milk.png');
}

function setup() {
  canvas = createCanvas(900, 600);
  database = firebase.database();

  dog = createSprite(650, 450);
  dog.scale = 0.3;
  dog.addImage(dogImg);

  milk = createSprite(565, 300);
  milk.addImage(milkImg);
  milk.scale = 0.1;
  milk.visible = false;
  milk.rotation = 55;
  
  food1 = new Food();
  
  food1.start();

  addFood = createButton("Buy Food");
  addFood.position(285, 115);
  addFood.mousePressed(addFoods);

  input = createInput("Enter Name Of Your Dog");
  input.position(400, 115);

  NameIt = createButton("Confirm");
  NameIt.position(400,140);

  feed= createButton("FEED my DOG");
  feed.position(650,250)



}

function draw() {  
  background("yellow");
  textSize(20);
  fill("Black")
  text("Prees BUYFOOD BUTTON to get food ",285,50);
  food1.display();

  NameIt.mousePressed(function(){
    var NAME = input.value();
    feed = createButton("Feed "+NAME);
    feed.position(360, 115);
    feed.mousePressed(feedDog);
    NameIt.hide();
    input.hide();
  })

    feed.mousePressed(function(){
    food1.getFoodStock();
    food1.updateFedTime();
  
    if(foodCount>=1){
      food1.updateFoodStock(foodCount - 1);
      milk.visible = true;
      dog.addImage(happyDogImg);
    }
  })


  if(World.frameCount%100 === 0) {
    milk.visible = false;
    dog.addImage(dogImg);
  }

  drawSprites();
}

function feedDog() {
  food1.getFoodStock();
  food1.updateFedTime();

  if(foodCount>=1){
    food1.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addImage(happyDogImg);
  }
}

function addFoods() {
 food1.getFoodStock();

 food1.updateFoodStock(foodCount + 1); 
}
fill("red")
text("Prees BUYFOOD BUTTON to get food ",285,50);