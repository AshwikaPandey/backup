  class Questions{
constructor(){

}
que(){
    
    flashcard = createSprite(displayWidth / 2, displayHeight / 2, 500, 500)
            flashcard.shapeColor = "white"

  
   this.input = createInput("answer")
   this.input.position(displayWidth / 2-60,displayHeight / 2+200)
   //submit= createSprite(displayWidth / 2-120,displayHeight / 2+200,20,20)
  // submit= createSprite(200,200,20,20)
 //submit.scale= 0.5
  // submit.addImage(sub) 

  //this.submit= createButton("ANSWER")
  submit.debug=true
  //this.submit.position()
   if(mousePressedOver(submit)){
       console.log("submit")
    answer1= this.input.value()
    var a= parseInt(answer1)
    if(a ===4){
        submit.visible=false            
        points= points+1
        text(points,200,20)
        console.log("hello")
    }
   }
   drawSprites()
   text("how many valves does the heart have",displayWidth/2+20,displayHeight/2-200)
   text(points,200,20)
}
que2(){
    flashcard = createSprite(displayWidth / 2, displayHeight / 2, 500, 500)
    flashcard.shapeColor = "white"
    text("what is the powerhouse of the cell",200,200)
    this.option1 = createButton("Nucleus")
    this.option2 = createButton("Michondria")
    this.option1.position(displayWidth / 2-60,displayHeight / 2+200)
      this.option2.position(displayWidth / 2-60,displayHeight / 2+300)
      
      this.option2.mousePressed(() => {
      points= points+1
      story3.que3()
      })
      this.option1.mousePressed(()=>{
          points= points-1
          story3.que3()
      })
     
}
que3(){
   // flashcard = createSprite(displayWidth / 2, displayHeight / 2, 500, 500)
   // flashcard.shapeColor = "white"
    text("What are the safety precuations to take during Covid-19",200,200)
    covid=createSprite(displayWidth/2+20,displayHeight/2-200,200,200)
   covid.addAnimation("covid19",corona)
   if(mousePressedOver(covid)){
       points= points+1
   }
   
}

  }