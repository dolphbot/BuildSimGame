import Game from './game.js'

let context = document.getElementById('canvas').getContext('2d')
let game = new Game(context)
let lastTime = 0
let imageTiles = new Image()

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp
    context.clearRect(0, 0, game.width, game.height)
    context.fillStyle = 'black'
    context.fillRect(0, 0, game.width, game.height)
    // if (game.scale !== 1) {
    //     context.scale(game.scale, game.scale)
    //     game.scale = 1
    // }
    game.update(deltaTime)
    game.draw(context, imageTiles)
    requestAnimationFrame(gameLoop)
}

imageTiles.src = '../assets/tiles.png'
imageTiles.onload = () => {
    requestAnimationFrame(gameLoop)
    game.start()
}