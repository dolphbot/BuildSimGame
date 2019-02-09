export default class MouseInput {
  constructor(game) {
    document.addEventListener("wheel", event => {
      game.zoom(event.deltaY)
    })
    document.addEventListener("click", event => {
      game.selectTile(event.clientX, event.clientY)
    })
  }
}
