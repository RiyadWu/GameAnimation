/**
 * Created by cheewu on 2017/8/1.
 */
class GameImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.imageByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.alive = true
    }

    update() {

    }

    draw() {
        this.game.drawImage(this)
    }
}
