/**
 * Created by cheewu on 2017/7/31.
 */
class BaseScene {
    constructor (game){
        this.game = game
        this.elements = []
    }

    draw () {
        this.elements.forEach(e => e.draw())
    }

    update () {
        this.elements.forEach(e => e.update())
    }

    addElement(element) {
        this.elements.push(element)
    }
}