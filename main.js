/**
 * Created by cheewu on 2017/7/30.
 */


const fullScreen = () => {
    const canvas = document.querySelector('#id-canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

const enableDebug = (game) => {
    game.config.debug = true
    bindEvent(window, 'keydown', function (event) {
        if (event.key === 'p') {
            log(1)
            game.config.pause = !game.config.pause
        }
    })

    bindAll(document, '.clz-slider', 'input', (event) => {
        const target = event.target
        const val = target.dataset["value"]
        const sliderVal = target.value
        eval(`game.config.${val}=${sliderVal}`)
        target.closest('label').querySelector('.clz-range-text').innerText = sliderVal
    })
}

let score = 0

const __main = () => {

    // fullScreen()

    new Game((g) => {

        const scene = new Title(g)

        g.runWithScene(scene)

    })
}

__main()

