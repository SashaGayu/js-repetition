/*const now = new Date()

const start = new Date(1000 * 60 * 60 * 24 * 365)

const date = new Date

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
//
// console.log(now.setFullYear(2033))

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())*/

let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
update()
setInterval(update, 1000)


function update() {
    output.textContent = format(mode)
}
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'time':
            return now.toLocaleTimeString()
        default:
            return
    }
}
format()

function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')