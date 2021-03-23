class startup{
constructor(){
    this.playB=createButton("PLAY")
}
display(){
gameState=1
        this.playB.position(displayWidth/2-200,displayHeight/2-50)
          this.playB.mousePressed(()=>{
             
              this.playB.hide()
              story2= new game()
              story2.story()
              
          })
    
}


}