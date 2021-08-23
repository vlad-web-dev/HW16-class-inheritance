let correctValueTime = (value) => {
    return value < 10 ? '0' + value : value
}

class Clock {
    constructor(element) {
        this.el = element
    }
    render() {
        this.el.innerHTML = new Date()
    }
}

class FullTime extends Clock{
    render() {
        let date = new Date()
        let hours = correctValueTime(date.getHours())
        let minutes = correctValueTime(date.getMinutes())
        let seconds = correctValueTime(date.getSeconds())
        this.el.innerHTML = `${hours}:${minutes}:${seconds}`
    }
}

class ShortTime extends Clock {
    render() {
        let date = new Date()
        let hours = correctValueTime(date.getHours())
        let minutes = correctValueTime(date.getMinutes())
        this.el.innerHTML = `${hours}:${minutes}`
    }
}

let time = document.getElementById('time')
let clock = new Clock(time);
setInterval(() => clock.render(), 1000);
time.addEventListener('click', function (){
    changeFormat()
})
function changeFormat() {
    if (clock instanceof FullTime) {
        clock = new ShortTime(time)
    } else {
        clock = new FullTime(time)
    }
    clock.render()
}
