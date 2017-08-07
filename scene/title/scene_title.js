class Title extends BaseScene {
    constructor (game) {
        super(game)
        this.bg = new GameImage(game, 'background')
        this.__setup()
    }

    __setup() {
        const game = this.game
        // const label = new GameLabel(game, '按 【K】 开始游戏')
        // this.addElement(label)
        this.addElement(this.bg)

        const run = new GameAnimation(game)
        run.x = 100
        run.y = 350
        this.addElement(run)
        // this.game.registerActions('k', () => {
        //     const s = new Scene(game)
        //     game.replaceScene(s)
        // })

        this.game.registerActions('a', keyStatus => {
           run.move(-2, keyStatus)
        })

        this.game.registerActions('d', keyStatus => {
            run.move(2, keyStatus)
        })
    }

    draw () {
        super.draw()
    }
}

class GameLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }

    update() {

    }

    draw() {
        log('draw label', this.game, this.text)
        this.game.context.fillText('按 k 开始游戏!', 180, 200)
    }
}