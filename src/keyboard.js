export default class KeyboardInput {
    constructor(game) {
        document.addEventListener('keydown', event => {
            let dx = 0
            let dy = 0
            if (event.keyCode === 87) {
                dy = 1
            }
            if (event.keyCode === 83) {
                dy = -1
            }
            if (event.keyCode === 65) {
                dx = 1
            }
            if (event.keyCode === 68) {
                dx = -1
            }
            game.pan(dx, dy)
        })
    }
}