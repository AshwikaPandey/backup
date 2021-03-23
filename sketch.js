var gameState=0
var start
var bg,bg1,bg2,bg3,sub,story3
var story2,testing,flashcard
var points=0
var answer1
var submit
var corona
var covid
var game1

function preload(){
bg= loadImage("images/Background1.png")
bg1= loadImage("images/village.jpg")
bg2= loadImage("images/cryingpeople.jpg")
bg3= loadImage("images/test.jpg")
sub=loadImage("images/sub.jpg")


}
function setup(){
 createCanvas(displayWidth-300,displayHeight)
 corona =loadAnimation("images/corona.png","images/corona2.png","images/corona3.png")
 start= new startup()
 submit= createSprite(200,200,20,20)
 submit.scale= 0.5
   submit.addImage(sub)
   game1 = new game()
 
// covid=createSprite(displayHeight+20,displayHeight+200,200,200)
}
console.log(gameState)
function draw(){
   
if(gameState===0){
    background(bg)
   start.display()



game1.test()
}
if(gameState===1){
//story
//story2.story()

}
if(gameState===2){
//test


}
if(gameState===3){
//college

}
if(gameState===4){
//doctor office
}
 if(gameState===5){
//end
}

 

}


