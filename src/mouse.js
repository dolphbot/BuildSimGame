export default class MouseInput {
    constructor(game) {
        document.addEventListener('wheel', event => {
            game.zoom(event.deltaY)
        })
    }
}