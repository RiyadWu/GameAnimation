class GameAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            run: [],
            idle: [],
        }
        for (let i = 1; i < 16; i++) {
            const name =  `run${i}`
            const img = game.imageByName(name)
            this.animations.run.push(img)
        }

        for (let i = 1; i < 16; i++) {
            const name =  `idle${i}`
            const img = game.imageByName(name)
            this.animations.idle.push(img)
        }
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3
        this.flipX = false
        this.w = this.texture.width
        this.h = this.texture.height
    }

    frames() {
        return this.animations[this.animationName]
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }

    draw() {
        const context = this.game.context
        if (this.flipX) {
            context.save()

            // 水平翻转
            const x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y)

            context.restore()
        } else {
            context.drawImage(this.texture, this.x, this.y)
        }
    }

    move(x, keyStatus) {
        this.flipX = x < 0
        this.x += x
        const animationNames = {
            down: 'run',
            up: 'idle',
        }
        const name = animationNames[keyStatus]
        this.changeAnimationName(name)
    }

    changeAnimationName(name) {
        this.animationName = name
    }

}