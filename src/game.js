import KeyboardInput from "./keyboard.js"
import MouseInput from "./mouse.js"

const GAMESTATE = {
  MENU: 0,
  RUNNING: 1,
  PAUSED: 2
}

export default class Game {
  constructor(ctx) {
    this.state = GAMESTATE.MENU
    this.objects = []
    this.tiles = []
    this.rows = 20
    this.columns = 20
    this.width = 800
    this.height = 600
    this.tileSize = 64
    this.offsetX = 0
    this.offsetY = 0
    this.speed = 1
    this.scale = 1
    this.scaledOffsetX = 0
    this.scaledOffsetY = 0
    this.keyboard = null
    this.mouse = null
    this.ctx = ctx
  }

  start() {
    for (let i = 0; i < this.rows * this.columns; i++) {
      this.tiles.push(Math.floor(Math.random() * Math.floor(4)))
    }
    this.keyboard = new KeyboardInput()
    this.mouse = new MouseInput(this)
    this.offsetX = (this.columns * this.tileSize - this.width) / 2
    this.offsetY = (this.rows * this.tileSize - this.height) / 2
    this.scaledOffsetX = this.offsetX
    this.scaledOffsetY = this.offsetY
  }

  update(deltaTime) {
    let dx = 0
    let dy = 0
    if (this.keyboard.W) dy = -1
    if (this.keyboard.S) dy = 1
    if (this.keyboard.A) dx = -1
    if (this.keyboard.D) dx = 1
    if (this.keyboard.minus) this.zoom(-100)
    if (this.keyboard.plus) this.zoom(100)
    this.offsetX += dx * this.speed * deltaTime
    this.offsetY += dy * this.speed * deltaTime
    this.scaledOffsetX =
      (this.width / 2 + this.offsetX) * this.scale - this.width / 2
    this.scaledOffsetY =
      (this.height / 2 + this.offsetY) * this.scale - this.height / 2
  }

  draw(ctx, img) {
    let startCol = Math.floor(this.scaledOffsetX / (this.tileSize * this.scale))
    let startRow = Math.floor(this.scaledOffsetY / (this.tileSize * this.scale))
    if (startCol < 0) startCol = 0
    if (startRow < 0) startRow = 0
    let endCol =
      Math.ceil(this.width / (this.tileSize * this.scale)) + startCol + 1
    let endRow =
      Math.ceil(this.height / (this.tileSize * this.scale)) + startRow + 1
    if (endCol >= this.columns) endCol = this.columns
    if (endRow >= this.rows) endRow = this.rows
    for (let r = startRow; r < endRow; r++) {
      for (let c = startCol; c < endCol; c++) {
        ctx.drawImage(
          img,
          this.tiles[r * this.columns + c] * this.tileSize,
          0,
          this.tileSize,
          this.tileSize,
          c * this.tileSize * this.scale - this.scaledOffsetX,
          r * this.tileSize * this.scale - this.scaledOffsetY,
          this.tileSize * this.scale,
          this.tileSize * this.scale
        )
      }
    }
  }

  zoom(deltaY) {
    if (this.scale > 1.5) {
      this.scale -= deltaY / 500
    } else if (this.scale < 1) {
      this.scale -= deltaY / 1500
    } else {
      this.scale -= deltaY / 1000
    }
    if (this.scale < 0.5) this.scale = 0.5
    if (this.scale > 5) this.scale = 5
  }
}
