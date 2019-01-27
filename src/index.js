import Game from './game.js'

let context = document.getElementById('canvas').getContext('2d')
let game = new Game()
let lastTime = 0
let imageTiles = new Image()

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp
    // context.drawImage(imageTiles, 0, 0)
    requestAnimationFrame(gameLoop)
}

imageTiles.src = '../assets/tiles.png'
imageTiles.onload = () => {
    requestAnimationFrame(gameLoop)
    game.start()
    game.draw(context, imageTiles)
}