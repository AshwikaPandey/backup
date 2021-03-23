class game {
    constructor() {
        this.next = createButton("next")
        //this.next1=createButton("next")
        // this.next2=createButton("next")
        this.next2 = createButton("start")
        this.next3= createButton("next")
        this.points= 0
       
    }
    story() {
        background(bg1)
        this.next.position(displayWidth - 300, displayHeight - 700)
        this.next.mousePressed(() => {
            this.next.hide()
            this.next1 = createButton("next")
            this.next1.position(displayWidth - 300, displayHeight - 700)
            background(bg2)

           story2.test()
        })

    }
    test() {



       this.next1.mousePressed(() => {
            gameState = 2
            this.next1.hide()
            this.greeting = createElement("h2")
            this.greeting.html(" start test to determine college")
            this.greeting.position(100, 50)
            background(bg3)

            this.next2.position(displayWidth - 300, displayHeight - 700)

        })
        this.next2.mousePressed(()=>{
            this.next2.hide()
           this.next3.position(displayWidth - 300, displayHeight - 700)
            story3= new Questions()
            story3.que()

        })
        this.next3.mousePressed(()=>{
            this.next3.hide()
            story3.que2()
        })
       
    }
    college() {

    }
    office() {

    }
    end() {


    }
}