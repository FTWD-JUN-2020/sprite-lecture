/******************** Global Variables ********************/
let game1 = new Game(700, 700)
console.log(game1.player)
const canvas = document.querySelector('canvas')
canvas.width = game1.canvasWidth
canvas.height = game1.canvasHeight
const cxt = canvas.getContext('2d')

/******************** Functions ********************/
function animationLoop() {
    animationID = window.requestAnimationFrame(animationLoop)
    cxt.clearRect(0, 0, canvas.width, canvas.height)
    cxt.fillRect(0, 0, canvas.width, canvas.height)
    cxt.drawImage(game1.player.image, game1.player.xImage, game1.player.yImage, game1.player.widthImage,game1.player.heightImage, game1.player.xCanvas, game1.player.yCanvas, game1.player.widthCanvas, game1.player.heightCanvas) // (imageObj, imageX, imageY, imageWidth, imageHeight, xCanvas, yCanvas, widthCanvas, heightCanvas)
}

/******************** Script ********************/
document.onkeydown = (e) => game1.player.move(e)
animationLoop()