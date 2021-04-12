//Create variables here
var dog,happyDog,dogImage,happyDogImage;
var foodS,database,foodStock;

function preload()
{
	//load images here
  dogImage=loadImage('dogImg.png');
  happyDogImage=loadImage('dogImg1.png');
}

function setup() {
	createCanvas(500,500);
  
  database=firebase.database();

  dog=createSprite(200,50,10,10);
  dog.addImage(dogImage);

  foddStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  

  if(keyWentDown(UP_ARROW)){
   
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  drawSprites();
  //add styles here
}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



