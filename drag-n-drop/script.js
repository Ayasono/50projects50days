const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
    console.log('dragover')
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('drag enter')
}

function dragLeave() {
    this.className = 'empty'
    console.log('drag leave')
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}

function debounce (callback, delay) {
    let timer
    return function (callback, delay) {
        clearTimeout(timer)
        timer = setTimeout(callback, delay)
    }
}
