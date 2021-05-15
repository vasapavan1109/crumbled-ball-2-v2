 class Dustbin {
        constructor(x,y,width,height){
            var options = {
                isStatic:true
            }
            this.body = Bodies.rectangle(x,y,width,height,options)
            World.add(world,this.body)
        this.width = width
        this.height = height
        this.image = loadImage("dustbingreen.png") 
    }
      
        display(){
            var pos = this.body.position
            var angle = this.body.angle
            push()
            translate(pos.x,pos.y)
            angleMode(RADIANS)
            rotate(angle)
            rectMode(CENTER)
            fill('red')
            rect(0,0,this.width,this.height)
            pop()
        }
    }
 