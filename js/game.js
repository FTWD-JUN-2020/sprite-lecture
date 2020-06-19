// Game properties: canvasWidth, canvasHeight, playerObj, ObstacleObj, score, level
// Game methods: gameOver, gameWon, changeLevel
class Game {
    // Game properties: canvasWidth, canvasHeight, playerObj, ObstacleObj, lives, level
    constructor(width, height){
        this.canvasWidth = width
        this.canvasHeight = height
        this.player = new Player()
        this.obstacle = new Obstacle()
        this.lives = 3
        this.level = 1
        this.animationID = 0
    }

    gameOver(animationID) {
        if(this.lives <= 0){
            window.cancelAnimationFrame(animationID)
            alert('You are a loserrrr!')
        }
    }
}