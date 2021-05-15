class Ground {
    constructor(x, y, width, height) {
        var option = {
            isStatic: true
        }
        this.physicsBody = Bodies.rectangle(x, y, width, height, option)
        World.add(world, this.physicsBody)

        this.width = width
        this.height = height
    }
    display() {

        var pos = this.physicsBody.position
        fill('brown')
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height)
    }
}