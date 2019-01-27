export default class KeyboardInput {
    constructor() {
        this.W = false
        this.S = false
        this.A = false
        this.D = false

        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 87:
                    this.W = true
                    break
                case 83:
                    this.S = true
                    break
                case 65:
                    this.A = true
                    break
                case 68:
                    this.D = true
                    break
            }
        })
        document.addEventListener('keyup', event => {
            switch (event.keyCode) {
                case 87:
                    this.W = false
                    break
                case 83:
                    this.S = false
                    break
                case 65:
                    this.A = false
                    break
                case 68:
                    this.D = false
                    break
            }
        })
    }
}