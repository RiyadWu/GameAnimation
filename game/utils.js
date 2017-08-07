const log = console.log.bind(console)

const e = (element, selector) => {
    return element.querySelector(selector)
}

const es = (element, selector) => {
    return element.querySelectorAll(selector)
}

const bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

const bindAll = (element, selector, eventName, callback) => {
    const eles = es(element, selector)
    eles.forEach(ele => bindEvent(ele, eventName, callback))
}

const collide = (a, b) => {
    if (a.x > b.x && a.x < b.x + b.w) {
        if (a.y > b.y && a.y < b.y + b.w) {
            return true
        }
    }
    return false
}

const randomNum = (start, end) => {
    const n = Math.random() * (end - start + 1)
    return  Math.floor(n + start)
}