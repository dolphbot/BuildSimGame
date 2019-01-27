const GAMESTATE = {
    MENU: 0,
    RUNNING: 1,
    PAUSED: 2
}


export default class Game {
    constructor() {
        this.width = 1000
        this.height = 800
        this.state = GAMESTATE.MENU
        this.objects = []
        this.tiles = []
        this.tileSize = 64
        this.world = {
            rows: 10, columns: 20
        }
    }

    start() {
        for (let i = 0; i < this.world.rows * this.world.columns; i++) {
            this.tiles.push(Math.floor(Math.random() * Math.floor(4)))
        }
    }

    update(deltaTime) {

    }

    draw(ctx, img) {
        this.tiles.forEach((tile, index) => {
            ctx.drawImage(img, tile * this.tileSize, 0, this.tileSize, this.tileSize, (index % this.world.columns) * this.tileSize, Math.floor(index / this.world.columns) * this.tileSize, this.tileSize, this.tileSize)

        })
    }
}