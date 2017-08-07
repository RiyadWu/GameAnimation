class Game {
    constructor(callback) {
        this.callback = callback
        this.scene = null
        this.actions = {}
        this.keysDowns = {}
        this.images = {}
        this.config = {
            pause: false,
            debug: false,
            fps: 60,
            images : {
                run1: 'img/crusader_run_20001.png',
                run2: 'img/crusader_run_20002.png',
                run3: 'img/crusader_run_20003.png',
                run4: 'img/crusader_run_20004.png',
                run5: 'img/crusader_run_20005.png',
                run6: 'img/crusader_run_20006.png',
                run7: 'img/crusader_run_20007.png',
                run8: 'img/crusader_run_20008.png',
                run9: 'img/crusader_run_20009.png',
                run10: 'img/crusader_run_20010.png',
                run11: 'img/crusader_run_20011.png',
                run12: 'img/crusader_run_20012.png',
                run13: 'img/crusader_run_20013.png',
                run14: 'img/crusader_run_20014.png',
                run15: 'img/crusader_run_20015.png',
                idle1: 'img/crusader_idle_20001.png',
                idle2: 'img/crusader_idle_20002.png',
                idle3: 'img/crusader_idle_20003.png',
                idle4: 'img/crusader_idle_20004.png',
                idle5: 'img/crusader_idle_20005.png',
                idle6: 'img/crusader_idle_20006.png',
                idle7: 'img/crusader_idle_20007.png',
                idle8: 'img/crusader_idle_20008.png',
                idle9: 'img/crusader_idle_20009.png',
                idle10: 'img/crusader_idle_20010.png',
                idle11: 'img/crusader_idle_20011.png',
                idle12: 'img/crusader_idle_20012.png',
                idle13: 'img/crusader_idle_20013.png',
                idle14: 'img/crusader_idle_20014.png',
                idle15: 'img/crusader_idle_20015.png',
                background: 'img/background1.png',
            },
            backgroundSpeed: 2,
        }
        this.__setup()
    }

    __setup() {
        const canvas = e(document, '#id-canvas')
        this.canvas = canvas
        this.context = canvas.getContext('2d')

        bindEvent(window, 'keydown', (event) => {
            this.keysDowns[event.key] = "down"
        })

        bindEvent(window, 'keyup', (event) => {
            this.keysDowns[event.key] = "up"
        })

        this.__loadAllImg()
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    update() {
        if  (!this.config.pause) {
            this.scene.update()
        }
    }

    draw() {
        this.scene.draw()
    }

    drawImage(image) {
        this.context.drawImage(image.texture, image.x, image.y)
    }

    imageByName(name) {
        return this.images[name]
    }

    registerActions(key, action) {
        this.actions[key] = action
    }

    replaceScene(scene) {
        this.scene = scene
    }

    runWithScene(scene) {
        this.scene = scene
        setTimeout(() => {
            this.runLoop()
        }, 1000 / this.config.fps)
    }

    runLoop() {
        // events
        Object.keys(this.actions).forEach(k => {
            const keyStauts = this.keysDowns[k]
            if (keyStauts === 'down') {
                this.actions[k](keyStauts)
            } else if(keyStauts === 'up') {
                this.actions[k](keyStauts)
                this.keysDowns[k] = null
            }
        })
        this.update()
        // clear
        this.clear()
        // draw
        this.draw()

        setTimeout(() => {
            this.runLoop()
        }, 1000 / this.config.fps)
    }

    run() {
        this.callback(this)
    }

    __loadAllImg() {
        let successNum = 0
        const images = this.config.images
        const names = Object.keys(images)
        names.forEach(k => {
            let path = images[k]
            const img = new Image()
            img.src = path
            img.onload = () => {
                this.images[k] = img
                successNum++
                if (successNum === names.length) {
                    this.run()
                }
            }
        })
    }
}