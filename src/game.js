import KeyboardInput from './keyboard.js'

const GAMESTATE = {
    MENU: 0,
    RUNNING: 1,
    PAUSED: 2
}


export default class Game {
    constructor() {
        this.state = GAMESTATE.MENU
        this.objects = []
        this.tiles = []
        this.rows = 50 
        this.columns = 50
        this.width = 800
        this.height = 600
        this.tileSize = 64
        this.offsetX = 0
        this.offsetY = 0
        this.speed = 64
    }

    start() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            this.tiles.push(Math.floor(Math.random() * Math.floor(4)))
        }
        new KeyboardInput(this)
        this.offsetX = (this.width / 2) - (this.rows * this.tileSize / 2)
        this.offsetY = (this.height / 2) - (this.columns * this.tileSize / 2)
    }

    update(deltaTime) {
        let dx = 0
        let dy = 0
    }

    draw(ctx, img) {
        this.tiles.forEach((tile, index) => {
            ctx.drawImage(img, 
                tile * this.tileSize,
                0, 
                this.tileSize, 
                this.tileSize, 
                (index % this.columns) * this.tileSize + this.offsetX, 
                Math.floor(index / this.columns) * this.tileSize + this.offsetY, 
                this.tileSize, 
                this.tileSize)

        })
    }

    pan(dx, dy) {
        this.offsetX += dx * this.speed
        this.offsetY += dy * this.speed
    }
}