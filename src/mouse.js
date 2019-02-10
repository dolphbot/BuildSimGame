export default class MouseInput {
  constructor(game) {
    document.addEventListener('wheel', event => {
      game.zoom(event.deltaY)
    })
    document.getElementById('canvas').addEventListener('mousemove', event => {
      game.highlightTile(event.clientX, event.clientY)
    })
    document.getElementById('canvas').addEventListener('click', event => {
      game.selectTile(event.clientX, event.clientY)
    })
  }
}
