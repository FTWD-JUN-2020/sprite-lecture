// Player properties: x, y, width, height, image, health
// Player methods: shoot, move, detectCollision
class Player {
    constructor(){
        // Player properties: x, y, width, height, image, health
        this.xCanvas = 0
        this.yCanvas = 0
        this.widthCanvas = 64
        this.heightCanvas = 64
        this.xImage = 0
        this.yImage = 64*11
        this.widthImage = 64
        this.heightImage = 64
        this.image = new Image()
        this.image.src = '../sprite.png'
    }

    /**
     * This method moves the player x and y and it also changes the sprite image
     * @param {Object} event - when the user presses a key that event object will be passed here
     */
    move(event){
        console.log('hi', event)
        switch(event.key) {
            case 'ArrowUp':
                this.y -= 5
                break
            case 'ArrowDown':
                this.y += 5
                break
            case 'ArrowLeft':
                this.x -= 5
                break
            case 'ArrowRight':
                this.yImage = 64*11
                this.xCanvas += 5
                this.xImage = (this.xImage + 64) % 576
                break
        }
    }
}