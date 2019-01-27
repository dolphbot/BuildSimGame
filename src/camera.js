export default class Camera {
    constructor(world) {
        this.x = 0
        this.y = 0
        this.width = world.width
        this.height = world.height
        this.maxX = world.columns * world.tileSize - world.width
        this.maxY = world.rows * world.tileSize - world.height
        this.speed = 256
    }

    move(delta, dx, dy) {
        this.x += dx * this.speed * delta
        this.y += dy * this.speed * delta
    }
}