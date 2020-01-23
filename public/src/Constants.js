// holds the definition of all the constants
export default class Constants {
    constructor() {
        this.BASE_URL = "http://localhost"
        this.BASE_PORT = 9545
        this.ETH_URL = `${this.BASE_URL}:${this.BASE_PORT}`
        this.USER_MOVE = 1
        this.COMPUTER_MOVE = 2
        this.EMPTY_CELL = 0
        this.GRID_LENGTH = 3
    }
}